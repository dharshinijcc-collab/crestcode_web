'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What mobile app development services do you provide?",
    answer: "We offer native iOS and Android app development, cross-platform development using React Native and Flutter, app design and UI/UX, app maintenance, and app store optimization and submission services."
  },
  {
    question: "Should I choose native or cross-platform development?",
    answer: "Native apps offer better performance and platform-specific features, while cross-platform apps are more cost-effective and faster to develop. We recommend based on your budget, timeline, target audience, and required features."
  },
  {
    question: "What platforms do you develop for?",
    answer: "We develop for iOS (iPhone/iPad) using Swift and Objective-C, Android using Kotlin and Java, and cross-platform solutions using React Native, Flutter, and Xamarin for both platforms simultaneously."
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "Simple apps take 2-3 months, moderately complex apps 4-6 months, and enterprise-level apps 6-12 months or more. Timeline depends on features, complexity, design requirements, and testing needs."
  },
  {
    question: "Can you help with app store submission?",
    answer: "Yes, we handle the entire app store submission process including creating developer accounts, preparing app metadata, designing app icons and screenshots, following guidelines, and managing the review process for both Apple App Store and Google Play Store."
  },
  {
    question: "Do you provide app maintenance and updates?",
    answer: "Absolutely! We offer ongoing maintenance packages including bug fixes, performance optimization, OS compatibility updates, security patches, feature enhancements, and app store policy compliance updates."
  },
  {
    question: "What about app security and data protection?",
    answer: "We implement industry-standard security practices including data encryption, secure authentication, API security, code obfuscation, and compliance with data protection regulations like GDPR and CCPA."
  },
  {
    question: "Can you integrate mobile apps with existing systems?",
    answer: "Yes, we specialize in integrating mobile apps with existing backend systems, databases, APIs, third-party services, and enterprise systems to ensure seamless data flow and functionality across your entire tech stack."
  },
  {
    question: "Do you provide app analytics and monitoring?",
    answer: "We integrate analytics tools like Firebase Analytics, Google Analytics for Mobile, or custom analytics solutions to track user behavior, app performance, crashes, and key metrics to help you make data-driven decisions."
  }
];

export default function MobileServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mobile App Development Services</h2>
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
