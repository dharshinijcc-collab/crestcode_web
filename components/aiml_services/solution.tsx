import { useState } from 'react';

const tabs = [
  {
    id: 'enterprise',
    label: 'Enterprise AI development',
    content: {
      title: 'Enterprise AI development',
      description:
        "Our enterprise-grade AI development solutions are designed from the beginning to be reliable, secure, and high-performance.Crestcode develops robust custom AI solutions that seamlessly integrate with your existing infrastructure, support compliance and security needs, and scale effortlessly with your organization. We ensure smooth integration, minimal disruption, and high reliability, enabling large businesses to unlock maximum ROI from AI investments."
    }
  },
  {
    id: 'SMBs',
    label: 'Custom AI solutions tailored for SMBs',
    content: {
      title: 'Custom AI solutions tailored for SMBs',
      description:
        'We know how to help growing businesses overcome challenges like limited resources, tight timelines, constant competition, and poor process efficiency. Our tailored AI software development solutions automate repetitive tasks, improve customer engagement, boost efficiency, and deliver valuable insights to help SMBs grow faster without stretching budgets.'
    },
  },
  {
    id: 'POC & MVP',
    label: 'PoC & MVP development for startups',
    content: {
      title: 'PoC & MVP development for startups',
      description:
        'Bring your innovative AI ideas to life quickly. SumatoSoft develops Proof-of-Concepts (PoCs) and Minimum Viable Products (MVPs), helping startups validate concepts, attract investors, and reach the market faster. We transform your vision into reality, accelerating time-to-market and ensuring your AI product is both effective and scalable from day one.'    
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
          Custom AI solutions for businesses of any{' '}
          <span className="text-[#4A9EFF] animate-gradient-text">scale</span>
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