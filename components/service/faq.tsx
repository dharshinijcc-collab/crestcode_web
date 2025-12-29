'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I trust my information's confidentiality with your team?",
      answer: "Absolutely! We take data confidentiality and security very seriously. All team members sign comprehensive NDAs and confidentiality agreements. We implement industry-standard security protocols including encrypted communication, secure code repositories, and access controls. Our development processes follow GDPR and other relevant data protection regulations. We can also sign custom NDAs tailored to your specific requirements. Your intellectual property, business data, and project information remain completely confidential throughout and after the project lifecycle."
    },
    {
      question: "How much would my development project cost? Can I get a tailored estimate?",
      answer: "Development project costs vary based on complexity, features, timeline, and technology stack. A simple website might cost $5,000-$15,000, while complex enterprise applications can range from $50,000 to $500,000+. To get a tailored estimate, we need to understand your specific requirements, desired features, user base, and timeline. We provide free consultations and detailed project breakdowns. Our estimates include development, testing, deployment, and initial support. Contact us with your project details, and we'll provide a comprehensive quote within 2-3 business days."
    },
    {
      question: "How to reduce software development services costs?",
      answer: "To reduce software development costs, start with clear requirements and detailed project planning to avoid rework. Choose the right technology stack to optimize development speed and maintenance. Consider agile development methodologies for iterative progress and early feedback. Leverage open-source technologies and reusable components where appropriate. Opt for MVP development to validate ideas before full investment. Implement automated testing to reduce manual QA costs. Consider offshore or nearshore development teams for cost efficiency. Finally, maintain clear communication to prevent misunderstandings and delays."
    },
    {
      question: "What are the biggest benefits of outsourcing a software development services firm?",
      answer: "Outsourcing software development provides access to specialized expertise and talent without the overhead of hiring in-house. It reduces operational costs significantly while maintaining high quality. You get faster time-to-market with experienced teams following proven methodologies. Outsourcing allows you to focus on core business activities while technical experts handle development. It provides scalability to ramp up or down based on project needs. You also gain exposure to global best practices and innovative approaches. Additionally, it offers risk sharing and flexibility in resource allocation."
    },
    {
      question: "How to choose a software development services company?",
      answer: "When choosing a software development company, consider their portfolio and case studies to verify relevant experience. Check client testimonials and reviews for reliability. Evaluate their technical expertise and technology stack alignment. Ensure they have clear communication processes and project management methodologies. Compare pricing models and ensure transparency. Look for companies that offer post-development support and maintenance. Finally, assess their understanding of your industry and business requirements."
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our software development services and how we can help your business succeed
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
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
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
                      <p className="text-gray-600 leading-relaxed">
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
