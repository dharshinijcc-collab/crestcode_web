import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

export const API_URL = 'http://localhost:5000/server/api';
// export const API_URL = 'https://api.dockly.me/server/api';

// Base query with error handling
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

// Wrapper to handle connection errors
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  try {
    const result = await baseQuery(args, api, extraOptions);
    return result;
  } catch (error) {
    // Handle connection errors gracefully
    if (error instanceof Error && error.message.includes('fetch')) {
      return {
        error: {
          status: 'CUSTOM_ERROR',
          error: 'Backend server not available. Running in offline mode.',
        } as FetchBaseQueryError,
      };
    }
    throw error;
  }
};

export interface WishlistRequest {
  email: string;
  first_name?: string;
  isNewRequest?: boolean;
  userId: number;
}

export interface WishlistResponse {
  status: number;
  message: string;
  payload?: {
    userId: number;
    otp: string;
    email: string;
  };
}

export interface OTPVerificationRequest {
  userId: number;
  email: string;
  otp: string;
  storedOtp: string;
}

export interface OTPVerificationResponse {
  status: number;
  message: string;
  payload?: {
    userId: number;
    otp: string;
  };
}

export interface ConfigResponse {
  status: number;
  payload: {
    config: any;
  };
}

export interface SaveConfigRequest {
  config: any;
}

export interface AdminAuthRequest {
  username: string;
  password: string;
}

export interface AdminAuthResponse {
  status: number;
  message: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Config', 'Wishlist', 'Admin'],
  endpoints: (builder) => ({
    addToWishlist: builder.mutation<
      WishlistResponse,
      WishlistRequest,
      WishlistRequest
    >({
      query: (data) => ({
        url: '/add/auth/wishlist',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Wishlist'],
    }),

    verifyOTP: builder.mutation<
      OTPVerificationResponse,
      OTPVerificationRequest
    >({
      query: (data) => ({
        url: '/verify/auth/email',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Wishlist'],
    }),

    getConfig: builder.query<ConfigResponse, void>({
      query: () => '/get/auth/config',
      providesTags: ['Config'],
      // Skip the query if backend is not available
      keepUnusedDataFor: 0,
    }),

    saveConfig: builder.mutation<
      { status: number; message: string },
      SaveConfigRequest
    >({
      query: (data) => ({
        url: '/save/auth/config',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Config'],
    }),

    authenticateAdmin: builder.mutation<AdminAuthResponse, AdminAuthRequest>({
      query: (credentials) => ({
        url: '/auth/admin',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Admin'],
    }),
  }),
});

export const {
  useAddToWishlistMutation,
  useVerifyOTPMutation,
  useGetConfigQuery,
  useSaveConfigMutation,
  useAuthenticateAdminMutation,
} = apiSlice;
