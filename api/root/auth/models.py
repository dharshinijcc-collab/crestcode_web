from datetime import datetime
from email.message import EmailMessage
import random
import smtplib
import uuid
import bcrypt
from flask import request
from root.config import EMAIL_PASSWORD, EMAIL_SENDER, SMTP_PORT, SMTP_SERVER
from root.email import send_wishlist_welcome_email
from flask_restful import Resource
from root.common import Status
from root.db.dbHelper import DBHelper


def generate_otp():
    return random.randint(1000, 9999)


class GetConfig(Resource):
    def get(self):
        hubs = DBHelper.find_all(
            table_name="site_config",
            select_fields=[
                "id",
                "config_json",
            ],
            filters={"id": 1},
        )

        return {"status": 1, "payload": {"config": hubs[0]["config_json"]}}


class SaveConfig(Resource):
    def post(self):
        data = request.get_json()
        config = data.get("config")
        if not config:
            return {"status": 0, "message": "Invalid config"}, 400

        # Save the config to the database
        DBHelper.update(
            table_name="site_config",
            update_fields={"config_json": config},
            filters={"id": 1},
        )
        return {"status": 1, "message": "Config saved successfully"}


def is_otp_valid(otpData, otp):

    if int(otpData) != int(otp):
        return {
            "status": 0,
            "class": "error",
            "message": "Oops! That OTP doesn't match. Double-check and try again!",
            "payload": {},
        }

    return {
        "status": 1,
        "class": "success",
        "message": "OTP verified!",
        "payload": {},
    }


class AddWishList(Resource):
    def post(self):
        try:
            data = request.get_json(force=True)
            email = data.get("email")
            username = email.split("@")[0] if email else None
            first_name = username.capitalize() if username else None
            isNewRequest = data.get("isNewRequest", True)
            uid = data.get("userId", 0)

            if not email:
                return {"status": 0, "message": "Email is required"}

            if isNewRequest:
                # Check if user already exists
                user = DBHelper.find_one(
                    table_name="users",
                    filters={"email": email},
                    select_fields=["email", "user_name", "is_email_verified"],
                )

                if user:
                    if user.get("is_email_verified") == 1:
                        return {
                            "status": 0,
                            "message": "Email already exists in the wishlist",
                        }
                else:
                    # Insert or update the user safely
                    userId = f"USER{uuid.uuid4().hex[:8].upper()}"
                    uid = DBHelper.insert(
                        table_name="users",
                        uid=userId,
                        email=email,
                        user_name=first_name,
                        is_active=1,
                        is_email_verified=False,
                        role=0,
                        created_at=datetime.now(),
                        updated_at=datetime.now(),
                    )

            # Generate and send OTP
            otp = generate_otp()
            otpResponse = send_otp_email(email, otp)

            if otpResponse.get("status") == 0:
                return {
                    "status": 0,
                    "message": "Failed to send OTP. Please try again later.",
                    "error": otpResponse.get("error", ""),
                }

            return {
                "status": 1,
                "message": f"OTP sent to {email} for email verification",
                "payload": {"userId": uid, "otp": otp, "email": email},
            }

        except Exception as e:
            # Print the full traceback for debugging
            print("Error in AddWishList.post:", str(e))
            traceback.print_exc()

            return {
                "status": 0,
                "message": "An unexpected error occurred while processing the request.",
                "error": str(e),
            }


class OtpVerification(Resource):
    def post(self):
        inputData = request.get_json(silent=True)
        uid = inputData.get("userId")
        email = inputData.get("email")
        otp = inputData.get("otp")

        response = is_otp_valid(inputData.get("storedOtp"), otp)
        if response["status"] == 0:
            return response

        send_wishlist_welcome_email(email)

        updated_user = DBHelper.update_one(
            table_name="users",
            filters={"email": email},
            updates={"is_email_verified": True, "updated_at": datetime.now()},
            return_fields=["email"],
        )

        return {
            "status": 1,
            "message": "OTP verified successfully",
            "payload": {"userId": updated_user.get("id"), "otp": otp},
        }


class AuthenticateAdmin(Resource):
    def post(self):
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            return {"status": 0, "message": "Username and password are required"}, 400

        try:
            # Fetch admin from DB (assuming stored password is hashed)
            admin = DBHelper.find_one(
                table_name="admin_users",
                filters={"user_name": username},
                select_fields=["id", "user_name", "password"],
            )

            if admin:
                stored_hashed_password = admin["password"].encode("utf-8")
                print(f"stored_hashed_password: {stored_hashed_password}")

                # Check password
                if bcrypt.checkpw(password.encode("utf-8"), stored_hashed_password):
                    return {"status": 1, "message": "Authentication successful"}
                else:
                    return {"status": 0, "message": "Invalid credentials"}, 401
            else:
                return {"status": 0, "message": "Invalid credentials"}, 401

        except Exception as e:
            return {"status": 0, "message": "Authentication failed"}, 500


def send_otp_email(email, otp):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Your OTP Code for Dockly"
        msg["From"] = EMAIL_SENDER
        msg["To"] = email
        msg.set_content(f"Your OTP is: {otp}\nValid for 10 minutes.")

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            server.send_message(msg)

        return {"otp": otp, "email": email, "status": 1}
    except Exception as e:
        # Optional: Add error logging
        return {"otp": None, "email": email, "error": str(e), "status": 0}
