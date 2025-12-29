import { useState } from 'react';

const tabs = [
  {
    id: 'enterprise',
    label: 'Enterprise software development',
    content: {
      title: 'Enterprise software development',
      description:
        "We develop custom enterprise software solutions distinguished by three key attributes: a strong focus on business goals, adherence to best coding practices, and the ability to manage complex workflows, large data volumes, and extensive parallel processing. Our expertise spans the development of complex solutions for industries such as manufacturing, procurement, sales, finance, HR management, and more."
    }
  },
  {
    id: 'mvp',
    label: 'MVP development',
    content: {
      title: 'MVP development',
      description:
        'We help startups and enterprises validate their ideas quickly and cost-effectively. Our MVP development approach focuses on building core features that solve the primary problem, allowing you to test your concept with real users and gather valuable feedback before full-scale development.'
    }
  },
  {
    id: 'saas',
    label: 'SaaS development',
    content: {
      title: 'SaaS development',
      description:
        'Our SaaS development services encompass the entire lifecycle of cloud-based software solutions. We create scalable, secure, and user-friendly SaaS platforms with robust multi-tenancy architecture, seamless integrations, and flexible subscription management systems.'
    }
  },
  {
    id: 'product',
    label: 'Product development',
    content: {
      title: 'Product development',
      description:
        'From concept to market launch, we provide comprehensive product development services. Our team combines technical expertise with market insights to build products that resonate with users, scale efficiently, and drive business growth.'
    }
  }
];

export default function mvp() {
  const [activeTab, setActiveTab] = useState('enterprise');

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 animate-fade-in">
          From MVPs to enterprise solutions: tailored development{' '}
          <span className="text-[#4A9EFF] animate-gradient-text">services</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We excel in developing software solutions for various business types and stages, combining
          product expertise with a commitment to scalability, reliability, and success.
        </p>

        <div className="grid lg:grid-cols-[450px_1fr] gap-8">
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-6 py-5 rounded-lg font-medium transition-all duration-500 transform animate-slide-in-left ${
                  activeTab === tab.id
                    ? 'bg-[#4A9EFF] text-white shadow-lg shadow-[#4A9EFF]/30 scale-105 hover:shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md hover:translate-x-1'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-md animate-scale-in">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {activeContent?.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>{activeContent?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
