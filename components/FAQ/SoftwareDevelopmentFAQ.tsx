'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What software development services do you offer?",
    answer: "We offer end-to-end software development including custom application development, enterprise software solutions, SaaS platforms, API development, database design, system integration, and software consulting services."
  },
  {
    question: "What programming languages and technologies do you use?",
    answer: "We work with a wide range of technologies including JavaScript/TypeScript, Python, Java, C#, Ruby, Go, PHP, and more. We choose the best technology stack based on your project requirements, scalability needs, and team expertise."
  },
  {
    question: "Can you develop enterprise-level software?",
    answer: "Yes, we have extensive experience building enterprise-grade software with robust architecture, security features, scalability, performance optimization, and integration capabilities. We follow enterprise development best practices and standards."
  },
  {
    question: "Do you follow agile development methodologies?",
    answer: "Absolutely! We follow agile methodologies including Scrum and Kanban, with iterative development, regular sprints, continuous integration/deployment, and flexible project management to ensure rapid delivery and adaptability to changing requirements."
  },
  {
    question: "What about software testing and quality assurance?",
    answer: "We implement comprehensive testing strategies including unit testing, integration testing, end-to-end testing, performance testing, security testing, and user acceptance testing. We use automated testing tools and manual testing to ensure high-quality software."
  },
  {
    question: "Can you help with software architecture design?",
    answer: "Yes, we specialize in software architecture design including microservices, monolithic applications, serverless architectures, cloud-native solutions, and scalable system design. We ensure your software is built on a solid foundation."
  },
  {
    question: "Do you provide DevOps and deployment services?",
    answer: "We offer complete DevOps services including CI/CD pipeline setup, containerization with Docker, orchestration with Kubernetes, cloud deployment on AWS/Azure/GCP, infrastructure as code, and monitoring solutions."
  },
  {
    question: "Can you integrate with existing systems and databases?",
    answer: "Yes, we have extensive experience integrating new software with existing systems, legacy applications, databases, ERPs, CRMs, and third-party services. We ensure seamless data flow and functionality across your entire ecosystem."
  },
  {
    question: "What about software security and compliance?",
    answer: "We prioritize security throughout the development process, implementing secure coding practices, vulnerability assessments, penetration testing, data encryption, and compliance with regulations like GDPR, HIPAA, and industry-specific standards."
  }
];

export default function SoftwareDevelopmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Software Development Services</h2>
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
