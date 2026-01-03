'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { typography, spacing } from "@/lib/typography";


interface Job {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  experience: string;
  location: string;
  description: {
    overview: string;
    responsibilities: string[];
    requirements: string[];
  };
}

const jobs: Job[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    category: "Engineering",
    categoryColor: "bg-blue-100 text-blue-700",
    experience: "2-4 years",
    location: "Chennai / Remote",
    description: {
      overview: "Build responsive, accessible, and high-performance user interfaces for web products.",
      responsibilities: [
        "Develop UI using React / modern JS frameworks",
        "Translate Figma designs into pixel-perfect interfaces",
        "Ensure cross-browser compatibility",
        "Collaborate closely with designers and backend teams"
      ],
      requirements: [
        "Strong HTML, CSS, JavaScript",
        "Experience with React / Vue",
        "Understanding of responsive and accessible design",
        "Git and component-based workflows"
      ]
    }
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    category: "Engineering",
    categoryColor: "bg-blue-100 text-blue-700",
    experience: "2-5 years",
    location: "Chennai / Remote",
    description: {
      overview: "Build scalable, secure, and high-performance backend systems for web products.",
      responsibilities: [
        "Develop APIs using Node.js / Python frameworks",
        "Design and optimize database schemas",
        "Ensure security and data protection",
        "Collaborate with frontend teams"
      ],
      requirements: [
        "Strong Node.js / Python",
        "Experience with databases (SQL/NoSQL)",
        "Understanding of REST APIs",
        "Git and version control"
      ]
    }
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    category: "Engineering",
    categoryColor: "bg-blue-100 text-blue-700",
    experience: "3-6 years",
    location: "Chennai / Remote",
    description: {
      overview: "Build complete web applications from frontend to backend.",
      responsibilities: [
        "Develop both frontend and backend features",
        "Design system architecture",
        "Optimize application performance",
        "Deploy and maintain applications"
      ],
      requirements: [
        "Strong full-stack development skills",
        "Experience with React and Node.js",
        "Database design and management",
        "DevOps knowledge"
      ]
    }
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    category: "Design",
    categoryColor: "bg-blue-100 text-blue-700",
    experience: "2-4 years",
    location: "Chennai / Remote",
    description: {
      overview: "Create intuitive and beautiful user experiences for digital products.",
      responsibilities: [
        "Design user interfaces and experiences",
        "Create wireframes and prototypes",
        "Conduct user research",
        "Collaborate with development teams"
      ],
      requirements: [
        "Strong Figma skills",
        "Understanding of UI/UX principles",
        "Portfolio of design work",
        "Communication skills"
      ]
    }
  },
  {
    id: "product-designer",
    title: "Product Designer",
    category: "Design",
    categoryColor: "bg-blue-100 text-blue-700",
    experience: "3-5 years",
    location: "Chennai / Remote",
    description: {
      overview: "Lead product design from concept to launch.",
      responsibilities: [
        "Define product vision and strategy",
        "Create comprehensive design systems",
        "Lead user research initiatives",
        "Mentor junior designers"
      ],
      requirements: [
        "Strong product design experience",
        "Design systems expertise",
        "Leadership skills",
        "Strategic thinking"
      ]
    }
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    category: "Design",
    categoryColor: "bg-blue-100 text-blue-700",
    experience: "2-4 years",
    location: "Chennai / Remote",
    description: {
      overview: "Create visual content for digital and print media.",
      responsibilities: [
        "Design marketing materials",
        "Create brand assets",
        "Develop visual concepts",
        "Maintain brand consistency"
      ],
      requirements: [
        "Strong Adobe Creative Suite skills",
        "Typography and layout expertise",
        "Brand design experience",
        "Creative thinking"
      ]
    }
  }
];

export default function Vacancies() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const openJobDetails = (job: Job) => {
    setSelectedJob(job);
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#9BB4C2] py-10 md:py-12">
        <div className={spacing.containerSmall + " text-center"}>
          <h1 className={typography.h1 + " mb-4"}>
            Vacancies
          </h1>
          <p className={typography.pLarge + " mb-6"}>
            Discover a role that matches your interests and skills.
          </p>
          <Button size="lg" >
            <Link href="/Careers#upload-resume">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-gray-50 py-10 md:py-12">
        <div className={spacing.container}>
          <h2 className={typography.h2 + " text-center mb-3"}>
            Open Positions
          </h2>
          <p className={typography.p + " text-center mb-6"}>
            Explore roles where you can build meaningful digital products.
          </p>

          <div className="space-y-4 md:space-y-[16px]">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-[10px]">
                      <h3 className="text-base sm:text-[17px] font-bold text-slate-800">
                        {job.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-[11px] ${job.categoryColor} whitespace-nowrap`}>
                        {job.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-[13px] text-slate-500">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
                            stroke="currentColor"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 4V8L10.6667 9.33333"
                            stroke="currentColor"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="whitespace-nowrap">{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M13.3327 6.66671C13.3327 10.6667 7.99935 14.6667 7.99935 14.6667C7.99935 14.6667 2.66602 10.6667 2.66602 6.66671C2.66602 5.25222 3.22792 3.89567 4.22811 2.89547C5.22831 1.89528 6.58486 1.33337 7.99935 1.33337C9.41384 1.33337 10.7704 1.89528 11.7706 2.89547C12.7708 3.89567 13.3327 5.25222 13.3327 6.66671Z"
                            stroke="currentColor"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
                            stroke="currentColor"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="whitespace-nowrap">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => openJobDetails(job)}
                    className="flex items-center gap-1 text-blue-600 text-xs sm:text-[13px] hover:text-blue-700 transition-colors self-start sm:self-center whitespace-nowrap"
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Resume Section */}
      <section className="bg-gradient-to-b from-gray-50 to-slate-100 py-16 px-4">
        <div className="max-w-[672px] mx-auto text-center">
          <h2 className="text-[23px] font-bold text-slate-800 mb-3">
            Didn't find the right role?
          </h2>
          <p className="text-[15px] text-slate-600 mb-8">
            Share your resume with us and we'll reach out when there's a match.
          </p>
          <Link href="/Careers#upload-resume" className="bg-slate-800 text-white px-8 py-[18px] rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.1673 6.66667L10.0007 2.5L5.83398 6.66667"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 2.5V12.5"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[15px]">Share Your Resume Here</span>
          </Link>
        </div>
      </section>



      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeJobDetails}>
          <div className="bg-white rounded-lg max-w-[848px] w-full max-h-[90vh] overflow-y-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              {/* Job Header */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-[17px] font-bold text-slate-800">
                        {selectedJob.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-[11px] ${selectedJob.categoryColor}`}>
                        {selectedJob.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 text-[13px] text-slate-500">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
                            stroke="currentColor"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 4V8L10.6667 9.33333"
                            stroke="currentColor"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{selectedJob.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M13.3327 6.66671C13.3327 10.6667 7.99935 14.6667 7.99935 14.6667C7.99935 14.6667 2.66602 10.6667 2.66602 6.66671C2.66602 5.25222 3.22792 3.89567 4.22811 2.89547C5.22831 1.89528 6.58486 1.33337 7.99935 1.33337C9.41384 1.33337 10.7704 1.89528 11.7706 2.89547C12.7708 3.89567 13.3327 5.25222 13.3327 6.66671Z"
                            stroke="currentColor"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
                            stroke="currentColor"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{selectedJob.location}</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={closeJobDetails} className="text-slate-400 hover:text-slate-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-black mb-2 uppercase tracking-wide">ROLE OVERVIEW</h4>
                  <p className="text-xs text-black leading-[30px]">{selectedJob.description.overview}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-black mb-2 uppercase tracking-wide">RESPONSIBILITIES</h4>
                  <ul className="space-y-1">
                    {selectedJob.description.responsibilities.map((item, index) => (
                      <li key={index} className="text-xs text-black leading-[30px]">• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-black mb-2 uppercase tracking-wide">REQUIREMENTS</h4>
                  <ul className="space-y-1">
                    {selectedJob.description.requirements.map((item, index) => (
                      <li key={index} className="text-xs text-black leading-[30px]">• {item}</li>
                    ))}
                  </ul>
                </div>

                <Link href="/Careers#upload-resume" className="bg-gray-900 text-white px-5 py-2 rounded text-xs font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 mt-4">
                  <span>Apply for this role</span>
                  <svg className="w-[9px] h-[18px]" viewBox="0 0 9 18" fill="none">
                    <path
                      d="M1.83899 4.93505L2.63474 4.14005L6.96899 8.4728C7.03886 8.54223 7.0943 8.62479 7.13214 8.71572C7.16997 8.80666 7.18945 8.90418 7.18945 9.00268C7.18945 9.10117 7.16997 9.1987 7.13214 9.28963C7.0943 9.38057 7.03886 9.46313 6.96899 9.53255L2.63474 13.8676L1.83974 13.0726L5.90774 9.0038L1.83899 4.93505Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
