'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What AI and ML services do you offer?",
    answer: "We provide comprehensive AI/ML services including machine learning model development, natural language processing, computer vision, predictive analytics, chatbot development, recommendation systems, and AI-powered automation solutions."
  },
  {
    question: "What machine learning frameworks do you work with?",
    answer: "We work with TensorFlow, PyTorch, Scikit-learn, Keras, and other popular frameworks. For deep learning, we use CNNs, RNNs, Transformers, and custom architectures. We also work with cloud AI services like AWS SageMaker, Google AI Platform, and Azure ML."
  },
  {
    question: "Can you develop custom AI models for my business?",
    answer: "Yes, we specialize in developing custom AI models tailored to your specific business needs. We handle everything from data preparation and model training to deployment and monitoring, ensuring the solution fits your unique requirements."
  },
  {
    question: "What types of data can your AI models work with?",
    answer: "Our AI models can work with various data types including text, images, audio, video, structured data, and time-series data. We have experience with natural language, computer vision, and predictive modeling across different data formats."
  },
  {
    question: "Do you provide AI model training and optimization?",
    answer: "Absolutely! We handle the entire ML pipeline including data preprocessing, feature engineering, model training, hyperparameter tuning, performance optimization, and model deployment. We ensure your models are accurate and efficient."
  },
  {
    question: "Can you integrate AI into existing applications?",
    answer: "Yes, we specialize in integrating AI capabilities into existing applications and systems. This includes adding predictive features, natural language processing, computer vision, recommendation engines, and automation to enhance your current software."
  },
  {
    question: "What about AI ethics and responsible AI?",
    answer: "We prioritize ethical AI development, ensuring fairness, transparency, and accountability in our models. We implement bias detection, explainability features, and follow responsible AI guidelines to ensure trustworthy AI solutions."
  },
  {
    question: "Do you provide ongoing AI model maintenance?",
    answer: "Yes, we offer continuous monitoring and maintenance of AI models including performance tracking, retraining with new data, model versioning, and updates to ensure your AI solutions remain accurate and relevant over time."
  },
  {
    question: "What industries can benefit from your AI services?",
    answer: "We serve various industries including healthcare (medical imaging, diagnosis), finance (fraud detection, risk assessment), e-commerce (recommendations, demand forecasting), manufacturing (predictive maintenance), and more."
  }
];

export default function AIServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI & Machine Learning Services</h2>
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
