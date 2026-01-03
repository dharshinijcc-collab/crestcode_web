'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const typography = {
  h2: 'text-3xl md:text-4xl font-bold',
  h4: 'text-xl font-semibold',
  p: 'text-base',
  pLarge: 'text-lg',
  pSmall: 'text-sm',
};

const spacing = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-12 md:py-16',
};

export default function Hackathon() {
  const [problem1Expanded, setProblem1Expanded] = useState(false);
  const [problem2Expanded, setProblem2Expanded] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-gray-900 min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/460091f9b91edb0a42bb9251be1272248c781cf2?width=2000" 
            alt="Hackathon Background" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Student's Hackathon 2025
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Innovate. Build. Compete. Win.
            </p>
            <div className="pt-4">
              <Link 
                href="#top-ideators" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('top-ideators');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Hackathon Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-8 md:py-10">
        <div className={spacing.container + " space-y-3"}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Overview</h2>
          <p className="text-base text-gray-600 max-w-4xl mx-auto text-center">
            This 48-hour hackathon invites Engineering and MCA students from across India to come together and build innovative, full-stack tech solutions. Whether you're solving real-world problems or showcasing a unique idea, this is your chance to shine.
          </p>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-10 md:py-12 bg-white">
        <div className={spacing.container + " space-y-8 text-center"}>
          <h2 className={typography.h2 + " text-gray-900"}>Goals</h2>
          
          {/* Goal 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:max-w-[300px] aspect-video rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f23272996942e3d12140dc5a944491b013e34748?width=1000" 
                alt="Innovation" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm max-w-2xl w-full">
              <div className="w-16 h-16 rounded-full border-4 border-blue-400 bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-500">1</span>
              </div>
              <p className={typography.pLarge + " text-gray-600"}>
                Encourage innovation and practical problem-solving among students.
              </p>
            </div>
          </div>

          {/* Goal 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:max-w-[300px] aspect-video rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/278d51a010bed37fdfd78b99d819906979560350?width=1602" 
                alt="Teamwork" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm max-w-2xl w-full">
              <div className="w-16 h-16 rounded-full border-4 border-blue-400 bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-500">2</span>
              </div>
              <p className={typography.pLarge + " text-gray-600"}>
                Provide a platform to showcase technical and teamwork skills.
              </p>
            </div>
          </div>

          {/* Goal 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:max-w-[300px] aspect-video rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/716a0fdc76fadc5c90637424c8d7d22d56b87d7e?width=1648" 
                alt="Awareness" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm max-w-2xl w-full">
              <div className="w-16 h-16 rounded-full border-4 border-blue-400 bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-500">3</span>
              </div>
              <p className={typography.pLarge + " text-gray-600"}>
                Promote awareness of pressing social and community challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Important Dates</h2>
            <p className="text-gray-600 text-lg">Mark your calendars for these key milestones</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-4">
              {/* Date 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="md:w-5/12 px-4 py-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900">Registrations Open</h3>
                    <p className="text-sm text-gray-500">TBD</p>
                  </div>
                </div>
              </div>

              {/* Date 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                    <path d="M16.5 9.34L7.55 4.23"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div className="md:w-5/12 px-4 py-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900">Submission Deadline</h3>
                    <p className="text-sm text-gray-500">TBD</p>
                  </div>
                </div>
              </div>

              {/* Date 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="md:w-5/12 px-4 py-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900">Mentorship Sessions</h3>
                    <p className="text-sm text-gray-500">TBD</p>
                  </div>
                </div>
              </div>

              {/* Date 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="md:w-5/12 px-4 py-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900">Final Presentations</h3>
                    <p className="text-sm text-gray-500">TBD</p>
                  </div>
                </div>
              </div>

              {/* Date 5 */}
              <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="md:w-5/12 px-4 py-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900">Winners Announced</h3>
                    <p className="text-sm text-gray-500">TBD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards & Prizes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Rewards & Prizes</h2>
            <p className="text-base text-gray-600">
              Outstanding work deserves outstanding recognition
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Runner Up */}
            <div className="flex flex-col items-center gap-4 p-6 border border-gray-200 rounded-xl">
              <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <div className="text-center space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Runner up Team</h3>
                <div className="space-y-1">
                  <p className="text-xl font-semibold font-bold text-gray-900">Rs.10,000/-</p>
                  <p className="text-base text-gray-500">+E-Certificates</p>
                </div>
              </div>
            </div>

            {/* Winner */}
            <div className="flex flex-col items-center gap-4 p-6 border border-gray-200 rounded-xl">
              <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
              </svg>
              <div className="text-center space-y-6">
                <h3 className="text-xl font-semibold text-blue-400">Winner Team</h3>
                <div className="space-y-1">
                  <p className="text-xl font-semibold font-bold text-gray-900">Rs.15,000/-</p>
                  <p className="text-base text-gray-500">+E-Certificates</p>
                </div>
                <p className="text-base text-gray-500">+Internship Opportunity</p>
              </div>
            </div>

            {/* Other Recognitions */}
            <div className="flex flex-col items-center gap-4 p-6 border border-gray-200 rounded-xl">
              <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h5.25c.622 0 1.126.504 1.126 1.125v3.375m0 0h-3.75m3.75 0h3.375M9 6.75h6m-4.5 3v6m-3-3h6"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Other Recognitions</h3>
              <div className="text-center space-y-2 text-sm text-gray-500">
                <p>Top 5 Ideators - E-Certificates</p>
                <p>Top 10 Teams - E-Certificates</p>
                <p>Project Completion - E-Certificates</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-center text-gray-500">
            NOTE: Names of Top 10 Team members will be displayed on the website
          </p>
        </div>
      </section>

      {/* How It Works & Evaluation Criteria */}
      <section className="py-8 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* How It Works */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 space-y-8">
            <h2 className="text-xl font-bold text-gray-900">How It Works</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-gray-900">Register</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Register individually or as a 2-member team. Earn extra points by submitting your idea during registration.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-gray-900">Build</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Participate in the 48-hour virtual hackathon and build your solution.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-gray-900">Submit</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Submit GitHub link, live demo link (Vercel/Netlify), and description.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">4</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-gray-900">Win</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Winners will be invited for internship interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Evaluation Criteria */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 space-y-8">
            <h2 className="text-xl font-bold text-gray-900">Evaluation Criteria</h2>

            <div className="space-y-6">
              {/* Criterion 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Successful Implementation</span>
                  <span className="text-xs text-gray-600">50%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              {/* Criterion 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Innovation</span>
                  <span className="text-xs text-gray-600">20%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>

              {/* Criterion 3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">User Experience & Design</span>
                  <span className="text-xs text-gray-600">10%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

              {/* Criterion 4 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Documentation</span>
                  <span className="text-xs text-gray-600">10%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

              {/* Criterion 5 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">New Ideas Submission</span>
                  <span className="text-xs text-gray-600">10%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Challenges Section */}
      <section className="py-8 px-4 lg:px-8 bg-white" id="challenges">
        <div className="max-w-[1689px] mx-auto space-y-6">
          <h2 className="text-[35px] font-bold text-gray-900 leading-10 text-center">Hackathon Challenges</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem 1 - Collapsed View */}
            {!problem1Expanded && (
              <div className="rounded-lg border border-gray-300 bg-white p-9 space-y-6 flex flex-col">
                <div className="flex items-center gap-3">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                  <h3 className="text-[24px] font-bold text-gray-900">Problem 1: Build A Custom Android Calendar App</h3>
                </div>

                <p className="text-base text-gray-700 leading-6">
                  Today we juggle multiple digital calendars across platforms like Google, Apple, and Outlook. Your challenge is to design and develop an Android application that aggregates events from multiple external calendars into one unified, user-friendly interface.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <h4 className="text-base font-semibold text-gray-900">Technology To Use</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">React Native / Flutter</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">Fast API / Flask / Django / NodeJS</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">PostgreSQL / MongoDB / MySQL</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">User's Choice</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                    <h4 className="text-base font-semibold text-gray-900">Deliverables</h4>
                  </div>
                  <p className="text-base text-gray-700 leading-6">
                    An android app that solves the core problem with features for multi-calendar integration, unified view, and event management.
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <button
                    onClick={() => setProblem1Expanded(true)}
                    className="w-full py-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors border-t border-gray-200"
                  >
                    Click to Expand
                  </button>
                </div>
              </div>
            )}

            {/* Problem 1 - Expanded View */}
            {problem1Expanded && (
              <div className="rounded-lg border border-gray-300 bg-white p-9 space-y-6 col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                  <h3 className="text-[24px] font-bold text-gray-900">Problem 1: Build A Custom Android Calendar App</h3>
                </div>

                <p className="text-base text-gray-700 leading-6">
                  Today we juggle multiple digital calendars across platforms like Google, Apple, and Outlook. Your challenge is to design and develop an Android application that aggregates events from multiple external calendars into one unified, user-friendly interface.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <h4 className="text-base font-semibold text-gray-900">Technology To Use</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">React Native / Flutter</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">Fast API / Flask / Django / NodeJS</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">PostgreSQL / MongoDB / MySQL</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">User's Choice</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                    <h4 className="text-base font-semibold text-gray-900">Deliverables</h4>
                  </div>
                  <p className="text-base text-gray-700 leading-6">
                    An android app that solves the core problem. Features: Multi-Calendar Integration, Unified Calendar View, Invite & Event Management, Visual Indicators, and User Experience with day/week/month views.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded space-y-3 max-h-80 overflow-y-auto">
                  <h5 className="font-semibold text-sm text-gray-900">Key Features to Implement:</h5>
                  <div className="text-xs text-gray-700 space-y-2">
                    <div>
                      <p className="font-semibold">1. Multi-Calendar Integration</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>Connect Google, Apple, and Outlook Calendar</li>
                        <li>Fetch and update events in real-time</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">2. Unified Calendar View</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>Display all events in one consolidated view</li>
                        <li>Filters to toggle between sources</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">3. Invite & Event Management</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>Create and add new events</li>
                        <li>Accept or decline invitations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setProblem1Expanded(false)}
                  className="w-full py-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors border-t border-gray-200"
                >
                  Click to Collapse
                </button>
              </div>
            )}

            {/* Problem 2 - Collapsed View */}
            {!problem2Expanded && (
              <div className="rounded-lg border border-gray-300 bg-white p-9 space-y-6 flex flex-col">
                <div className="flex items-center gap-3">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                  <h3 className="text-[24px] font-bold text-gray-900">Problem 2: Stock Returns Prediction with CNNs</h3>
                </div>

                <p className="text-base text-gray-700 leading-6">
                  Build a Convolutional Neural Network (CNN) that can predict stock price movements by analyzing images of their price charts. Treat chart patterns as visual features for the model to learn.
                </p>

                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-gray-900">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">Python</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">TensorFlow/Keras</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">PyTorch</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">Yahoo Finance API</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">Google Colab</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                    <h4 className="text-base font-semibold text-gray-900">Deliverables</h4>
                  </div>
                  <p className="text-base text-gray-700 leading-6">
                    Data generation script, trained CNN model (.pkl file), inference script, and Google Colab notebook with working code.
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <button
                    onClick={() => setProblem2Expanded(true)}
                    className="w-full py-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors border-t border-gray-200"
                  >
                    Click to Expand
                  </button>
                </div>
              </div>
            )}

            {/* Problem 2 - Expanded View */}
            {problem2Expanded && (
              <div className="rounded-lg border border-gray-300 bg-white p-9 space-y-6 col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                  <h3 className="text-[24px] font-bold text-gray-900">Problem 2: Stock Returns Prediction with CNNs</h3>
                </div>

                <p className="text-base text-gray-700 leading-6">
                  Build a Convolutional Neural Network (CNN) that can predict stock price movements by analyzing images of their price charts. Treat chart patterns as visual features for the model to learn.
                </p>

                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-gray-900">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">Python</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">TensorFlow/Keras</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">PyTorch</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">Yahoo Finance API</span>
                    <span className="px-3 py-1 bg-blue-100 rounded text-xs text-gray-900">Google Colab</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                    <h4 className="text-base font-semibold text-gray-900">Deliverables</h4>
                  </div>
                  <ol className="text-xs text-gray-700 list-decimal ml-4 space-y-1">
                    <li>Data generation script for stock charts</li>
                    <li>Trained CNN model (.pkl file)</li>
                    <li>Inference script for predictions</li>
                    <li>Google Colab notebook</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded space-y-3 max-h-80 overflow-y-auto">
                  <h5 className="font-semibold text-sm text-gray-900">Project Phases:</h5>
                  <div className="text-xs text-gray-700 space-y-2">
                    <div>
                      <p className="font-semibold">Phase 1: Data Preparation</p>
                      <p className="text-xs">Generate 250 chart images per stock with rolling 1-year window from 2010 data</p>
                    </div>
                    <div>
                      <p className="font-semibold">Phase 2: Model Training</p>
                      <p className="text-xs">Build and train CNN model on 500 generated images with labels (1/0/-1)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Phase 3: Inference Setup</p>
                      <p className="text-xs">Create standalone script for predictions with RMSE evaluation</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setProblem2Expanded(false)}
                  className="w-full py-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors border-t border-gray-200"
                >
                  Click to Collapse
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results & Statistics Section */}
      <section className="py-20 px-4 lg:px-24 bg-gray-50">
        <div className="max-w-[1689px] mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 leading-10">Results & Statistics</h2>
            <p className="text-xl text-gray-600 leading-7">A look at the numbers and the outcomes.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Statistics Box - Registration Statistics */}
            <div className="rounded-lg border border-gray-300 bg-white p-8 space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">Registration Statistics</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">59</div>
                    <div className="text-sm text-gray-600 font-medium">Total Candidates</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">13</div>
                    <div className="text-sm text-gray-600 font-medium">Total Ideas</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a3 3 0 11-6 0 3 3 0 016 0zm6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <div className="text-sm text-gray-600 font-medium">Completed Ideas</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Statistics Box - Submission Statistics */}
            <div className="rounded-lg border border-gray-300 bg-white p-8 space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">Submission Statistics</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">7</div>
                    <div className="text-sm text-gray-600 font-medium">Total Response Submitted</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">5</div>
                    <div className="text-sm text-gray-600 font-medium">Incomplete/Incorrect Response</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">2</div>
                    <div className="text-sm text-gray-600 font-medium">In Discussion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ideators Section */}
      <section id="top-ideators" className="py-8 px-4 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Top Ideators</h2>
            <p className="text-base text-gray-600">We appreciate your efforts. Congratulations!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[500px]">
            {/* Top Ideas List */}
            <div className="rounded-lg border border-gray-300 bg-white p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Submissions</h3>
              <div className="space-y-4">
                {[
                  { rank: 1, title: "AI Guardrails for Support (CODERED Shield)", name: "Yoghesh R V" },
                  { rank: 2, title: "Codebase Time Machine", name: "Lokeshwaran S" },
                  { rank: 3, title: "Supply Chain Forecasting (Logistics AI)", name: "Anmol" },
                  { rank: 4, title: "Crop Disease Detection (Agri AI)", name: "Nisha Ravi" }
                ].map((idea) => (
                  <div key={idea.rank} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">{idea.rank}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{idea.title}</p>
                      <div className="inline-block mt-1 px-2 py-0.5 bg-gray-800 rounded-md text-xs font-medium text-white">
                        {idea.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivational Image */}
            <div className="relative rounded-lg border border-gray-300 overflow-hidden h-full min-h-[300px]">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c13355c58b27d3ee390ea5340079becbdbb1955b?width=1608" 
                alt="You got this" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h3 className="text-4xl font-bold text-white text-center leading-tight px-4">YOU GOT THIS!!!</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </> 
  );
}