'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { typography, spacing } from "@/lib/typography";
import Link from "next/link";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function careers() {
  const [fileName, setFileName] = useState("No file chosen");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#upload-resume") {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        scrollToSection("upload-resume");
      }, 100);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFormData({ ...formData, resume: file });
    } else {
      setFileName("No file chosen");
      setFormData({ ...formData, resume: null });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const response = await fetch("https://cc-website-54of.onrender.com/api/career/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      console.log("Career form response:", data);

      if (response.ok) {
        setMessage("Application submitted successfully! We'll be in touch soon.");
        setFormData({ name: "", email: "", resume: null });
        setFileName("No file chosen");
      } else {
        console.log("Error details:", data.detail);
        if (Array.isArray(data.detail)) {
          const errorMessages = data.detail.map((err: {loc?: string[], msg: string}) => `${err.loc?.join('.')} : ${err.msg}`).join(", ");
          setMessage(`Validation error: ${errorMessages}`);
        } else {
          setMessage(data.detail || "Failed to submit application. Please try again.");
        }
      }
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#9BB4C2] py-12 md:py-16 flex flex-col items-center justify-center">
        <div className={spacing.containerSmall + " text-center"}>
          <div className="space-y-4">
            <h1 className={typography.h1}>Join Our Team</h1>
            <p className={typography.p}>
              Exciting opportunities to grow and make an impact.
            </p>
          </div>
          <Button size="lg" className="mt-6" onClick={() => scrollToSection("upload-resume")}>
            Contact Us
          </Button>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="w-full bg-white py-10 md:py-14">
        <div className={spacing.container}>
          <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.667 9.33337H5.33366C3.8609 9.33337 2.66699 10.5273 2.66699 12V25.3334C2.66699 26.8061 3.8609 28 5.33366 28H26.667C28.1398 28 29.3337 26.8061 29.3337 25.3334V12C29.3337 10.5273 28.1398 9.33337 26.667 9.33337Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.3337 28V6.66667C21.3337 5.95942 21.0527 5.28115 20.5526 4.78105C20.0525 4.28095 19.3742 4 18.667 4H13.3337C12.6264 4 11.9481 4.28095 11.448 4.78105C10.9479 5.28115 10.667 5.95942 10.667 6.66667V28" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 md:space-y-4">
                <div>
                  <h2 className={typography.h2 + " mb-2"}>Open Positions</h2>
                  <p className={typography.p}>
                    We're looking for talented individuals in Design, Development, and Marketing.
                  </p>
                </div>
                <Button variant="outline">
                  <Link href="/vacancies">View Roles →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="w-full bg-gray-50 py-10 md:py-14">
        <div className={spacing.container}>
          <h2 className={typography.h2 + " text-center mb-8"}>Why Work With Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 16.3334C17.7333 15.1667 18.3167 14.35 19.25 13.4167C20.4167 12.3667 21 10.85 21 9.33337C21 7.47686 20.2625 5.69638 18.9497 4.38363C17.637 3.07087 15.8565 2.33337 14 2.33337C12.1435 2.33337 10.363 3.07087 9.05025 4.38363C7.7375 5.69638 7 7.47686 7 9.33337C7 10.5 7.23333 11.9 8.75 13.4167C9.56667 14.2334 10.2667 15.1667 10.5 16.3334" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 21H17.5" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.667 25.6666H16.3337" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className={typography.h4 + " mb-2"}>
                  Collaborative & Innovative<br />Environment
                </h3>
                <p className={typography.pSmall}>
                  Work with passionate team members who value creativity and fresh ideas.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6663 8.16663L15.7497 18.0833L9.91634 12.25L2.33301 19.8333" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.667 8.16663H25.667V15.1666" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className={typography.h4 + " mb-2"}>Opportunities for Growth</h3>
                <p className={typography.pSmall}>
                  Continuous learning and career advancement in a supportive environment.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1663 16.3333C23.9047 14.63 25.6663 12.5883 25.6663 9.91667C25.6663 8.21486 24.9903 6.58276 23.7869 5.3794C22.5836 4.17604 20.9515 3.5 19.2497 3.5C17.1963 3.5 15.7497 4.08333 13.9997 5.83333C12.2497 4.08333 10.803 3.5 8.74967 3.5C7.04787 3.5 5.41576 4.17604 4.21241 5.3794C3.00905 6.58276 2.33301 8.21486 2.33301 9.91667C2.33301 12.6 4.08301 14.6417 5.83301 16.3333L13.9997 24.5L22.1663 16.3333Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className={typography.h4 + " mb-2"}>Flexible Work Culture</h3>
                <p className={typography.pSmall}>
                  Balance your work and life with flexible hours and remote options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Resume Section */}
      <section id="upload-resume" className="w-full bg-white py-10 md:py-14">
        <div className={spacing.containerSmall}>
          {/* Icon and Title */}
          <div className="text-center mb-8 space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.6663 10.6667L15.9997 4L9.33301 10.6667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 4V20" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h2 className={typography.h2}>Upload Your Resume</h2>
            <p className={typography.p}>
              Send us your resume and we'll reach out if there's a fit.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm p-6 md:p-8 space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-900 text-sm font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-900 text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* File Upload Field */}
            <div className="space-y-2">
              <label htmlFor="resume" className="block text-gray-900 text-sm font-bold">
                Upload Resume
              </label>
              <div className="flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-3 bg-white">
                <label
                  htmlFor="resume"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-bold cursor-pointer hover:bg-blue-600 transition-colors"
                >
                  Choose File
                </label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span className="text-gray-900 text-sm">{fileName}</span>
              </div>
              <p className="text-gray-400 text-xs">PDF, DOC, or DOCX (max 10MB)</p>
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit →"}
            </Button>
          </form>

          {/* Message Display */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${
              message.includes("successfully") 
                ? "bg-green-50 text-green-700 border border-green-200" 
                : "bg-red-50 text-red-700 border border-red-200"
            }`}>
              {message}
            </div>
          )}
        </div>
      </section>
    </>
  );
}