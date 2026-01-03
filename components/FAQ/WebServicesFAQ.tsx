'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What web development services do you offer?",
    answer: "We offer comprehensive web development services including frontend development (React, Vue, Angular), backend development (Node.js, Python, Java), full-stack applications, e-commerce platforms, and custom web applications."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We work with modern technologies including React, Next.js, Vue.js, Angular for frontend; Node.js, Express, Python Django, Ruby on Rails for backend; and databases like PostgreSQL, MongoDB, MySQL. We choose the best tech stack based on your project requirements."
  },
  {
    question: "Can you help with existing website redesign?",
    answer: "Absolutely! We specialize in website redesigns, improving user experience, modernizing outdated code, enhancing performance, and adding new features to existing websites while maintaining SEO and functionality."
  },
  {
    question: "Do you build responsive and mobile-friendly websites?",
    answer: "Yes, all our websites are built with a mobile-first approach, ensuring they work perfectly across all devices - desktops, tablets, and smartphones. We use responsive design principles and thorough testing."
  },
  {
    question: "What about SEO optimization?",
    answer: "We implement SEO best practices from the ground up, including semantic HTML, proper meta tags, site speed optimization, structured data, and mobile-friendly design. We also offer ongoing SEO services."
  },
  {
    question: "Can you integrate third-party APIs and services?",
    answer: "Yes, we have extensive experience integrating various APIs including payment gateways, social media platforms, CRM systems, analytics tools, and custom APIs. We ensure seamless data flow and functionality."
  },
  {
    question: "What's the cost of a web development project?",
    answer: "Costs vary based on complexity, features, and timeline. Simple websites start from a few thousand dollars, while complex enterprise applications can cost significantly more. We provide detailed quotes after understanding your requirements."
  },
  {
    question: "Do you provide hosting and deployment services?",
    answer: "Yes, we assist with hosting setup, domain configuration, SSL certificates, and deployment to platforms like AWS, Google Cloud, Vercel, Netlify, and traditional hosting providers."
  }
];

export default function WebServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Web Development Services</h2>
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
