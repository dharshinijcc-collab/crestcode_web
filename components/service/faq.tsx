'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What platforms do you develop mobile apps for?",
      answer: "We develop mobile apps for iOS (iPhone, iPad), Android (smartphones, tablets), and cross-platform solutions using React Native and Flutter. Our iOS apps are built with Swift following Apple's guidelines, while Android apps use Kotlin for optimal performance. For cross-platform needs, we leverage frameworks that allow single codebase deployment across both platforms while maintaining native-like performance and user experience."
    },
    {
      question: "How do you ensure mobile app security and data protection?",
      answer: "We implement comprehensive security measures including encryption for data at rest and in transit, secure authentication mechanisms, and regular security audits. Our apps follow platform-specific security guidelines (Apple's App Store and Google Play requirements). We integrate secure APIs, implement proper session management, and use industry-standard security libraries. Additionally, we ensure compliance with data protection regulations like GDPR and handle user permissions appropriately for camera, location, and other sensitive features."
    },
    {
      question: "What's the difference between native and cross-platform mobile app development?",
      answer: "Native apps are built specifically for iOS or Android using platform-specific languages (Swift/Kotlin), offering optimal performance and full device feature access. Cross-platform apps use frameworks like React Native or Flutter, allowing single codebase deployment across both platforms. Native apps provide better performance and deeper device integration, ideal for complex apps requiring extensive hardware interaction. Cross-platform development offers faster development cycles and cost efficiency, suitable for content-focused apps with moderate hardware requirements."
    },
    {
      question: "How do you handle mobile app testing and quality assurance?",
      answer: "We conduct comprehensive testing including functional testing, UI/UX testing, performance testing, and device compatibility testing across various screen sizes and OS versions. We use automated testing frameworks for unit and integration tests, complemented by manual testing for user experience validation. Our QA process includes real device testing on multiple iOS and Android devices, network condition testing, battery usage optimization, and accessibility testing. We also perform security testing and ensure compliance with app store guidelines for smooth approval processes."
    },
    {
      question: "What happens after the mobile app is launched?",
      answer: "Post-launch, we provide ongoing support including bug fixes, performance monitoring, and feature updates. We track app analytics and user feedback to identify improvement opportunities. Our maintenance services include updating apps for new OS versions, optimizing for new devices, and ensuring compatibility with evolving platform requirements. We also offer feature enhancements, API integrations, and scalability improvements as your user base grows. Regular security updates and performance optimizations ensure your app remains reliable and competitive in the app stores."
    },
    {
      question: "How do you optimize mobile apps for performance and user experience?",
      answer: "We optimize performance through efficient code architecture, proper memory management, and optimized asset loading. Our apps implement lazy loading, caching strategies, and background processing to ensure smooth performance. We focus on intuitive UI/UX design following platform guidelines (Apple's Human Interface Guidelines and Google's Material Design). We optimize battery usage, minimize app size, and ensure fast startup times. User experience optimization includes responsive design, smooth animations, offline functionality where appropriate, and seamless onboarding flows."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our mobile app development services and how we can help bring your app ideas to life
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
