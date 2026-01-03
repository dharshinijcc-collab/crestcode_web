'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the Student's Hackathon 2025?",
    answer: "The Student's Hackathon 2025 is a 48-hour virtual hackathon inviting Engineering and MCA students from across India to build innovative, full-stack tech solutions. It's a platform to showcase technical skills, teamwork, and creativity."
  },
  {
    question: "Who can participate in the hackathon?",
    answer: "Engineering and MCA students from across India can participate. You can register individually or as a 2-member team. The hackathon is open to students with varying levels of programming experience."
  },
  {
    question: "How do I register for the hackathon?",
    answer: "Registration details will be announced on the website. You'll need to register individually or as a team, submit your initial idea for extra points, and complete the registration form with your academic details."
  },
  {
    question: "What are the hackathon challenges?",
    answer: "The hackathon features multiple challenges including building a custom Android calendar app with multi-calendar integration, and stock returns prediction using CNNs. Participants can choose challenges based on their interests and skills."
  },
  {
    question: "What technologies can I use for my project?",
    answer: "You can use various technologies including React Native/Flutter for mobile, Fast API/Flask/Django/NodeJS for backend, PostgreSQL/MongoDB/MySQL for databases, or any technology of your choice that best solves the problem."
  },
  {
    question: "What are the evaluation criteria?",
    answer: "Projects are evaluated based on: Successful Implementation (50%), Innovation (20%), User Experience & Design (10%), Documentation (10%), and New Ideas Submission (10%)."
  },
  {
    question: "What are the prizes and rewards?",
    answer: "Winner Team receives Rs.15,000/- + E-Certificates + Internship Opportunity. Runner Up Team gets Rs.10,000/- + E-Certificates. Top 5 Ideators, Top 10 Teams, and Project Completion participants also receive E-Certificates."
  },
  {
    question: "What do I need to submit?",
    answer: "You'll need to submit your GitHub repository link, live demo link (Vercel/Netlify), project description, and documentation. Make sure your code is well-documented and your demo is functional."
  },
  {
    question: "How will the hackathon be conducted?",
    answer: "The hackathon is conducted virtually over 48 hours. You'll work remotely with your team, participate in mentorship sessions, and submit your project before the deadline. Final presentations will be conducted online."
  },
  {
    question: "Will there be mentorship during the hackathon?",
    answer: "Yes, mentorship sessions will be conducted during the hackathon where experienced developers will provide guidance, answer questions, and help teams overcome technical challenges."
  }
];

export default function HackathonFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hackathon FAQ</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
