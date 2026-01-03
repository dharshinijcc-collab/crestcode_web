'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is Crestcode and what services do you offer?",
    answer: "Crestcode is a comprehensive software development company offering web development, mobile app development, AI/ML solutions, and software development services. We specialize in creating custom digital solutions tailored to your business needs."
  },
  {
    question: "How long has Crestcode been in business?",
    answer: "Crestcode has been providing software development services for several years, building a strong reputation for delivering high-quality, innovative solutions to clients across various industries."
  },
  {
    question: "What industries does Crestcode serve?",
    answer: "We serve clients across multiple industries including healthcare, finance, e-commerce, education, entertainment, and technology startups. Our diverse experience allows us to understand unique industry challenges."
  },
  {
    question: "How do I get started with Crestcode?",
    answer: "Getting started is easy! Simply reach out through our contact form, schedule a consultation call, or email us directly. Our team will discuss your requirements and provide a tailored solution proposal."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months or more. We provide detailed timelines during the planning phase."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages to ensure your applications run smoothly. This includes bug fixes, updates, security patches, and feature enhancements."
  }
];

export default function GeneralFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">General Questions</h2>
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
