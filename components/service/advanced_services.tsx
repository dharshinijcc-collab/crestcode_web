import { useState } from 'react';
import { Cpu, Network, MessageSquare, BarChart3, Database } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function advanced_services() {
  const [activeService, setActiveService] = useState('ai');

  const services: Service[] = [
    {
      id: 'ai',
      name: 'AI development',
      icon: <Cpu className="w-16 h-16" />,
      title: 'AI development',
      description: 'From predictive analytics to AI-powered healthcare diagnostics, our Artificial Intelligence services span every industry. Our expertise lies in custom AI model development, predictive analytics, machine learning implementation, natural language processing, computer vision, and AI tools for predictive maintenance.'
    },
    {
      id: 'blockchain',
      name: 'Blockchain development',
      icon: <Network className="w-16 h-16" />,
      title: 'Blockchain development',
      description: 'We build secure, scalable blockchain solutions including smart contracts, decentralized applications (DApps), and custom blockchain networks. Our services cover cryptocurrency development, NFT platforms, DeFi solutions, and blockchain integration for enterprise systems with focus on security and transparency.'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT development',
      icon: <MessageSquare className="w-16 h-16" />,
      title: 'ChatGPT development',
      description: 'Leverage the power of large language models with our ChatGPT integration services. We develop intelligent chatbots, conversational AI interfaces, automated customer support systems, content generation tools, and custom GPT applications tailored to your business needs with advanced natural language understanding.'
    },
    {
      id: 'analytics',
      name: 'Data analytics services',
      icon: <BarChart3 className="w-16 h-16" />,
      title: 'Data analytics services',
      description: 'Transform raw data into actionable insights with our comprehensive analytics solutions. We provide business intelligence dashboards, predictive modeling, data visualization, statistical analysis, performance metrics tracking, and real-time analytics platforms that drive informed decision-making and business growth.'
    },
    {
      id: 'bigdata',
      name: 'Big Data',
      icon: <Database className="w-16 h-16" />,
      title: 'Big Data',
      description: 'Handle massive datasets with our Big Data solutions. We specialize in data warehousing, distributed computing, real-time data processing, data lakes implementation, ETL pipelines, and scalable storage solutions using cutting-edge technologies like Hadoop, Spark, and cloud-based big data platforms for enterprise-level operations.'
    }
  ];

  const activeServiceData = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8">
            <span className="text-blue-600 font-normal">Advanced tech</span>
            <span className="text-gray-900"> services</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed px-4">
            We are savvy in advanced technologies and incorporate them into our software engineering services when they can bring value to our Clients.
          </p>
        </div>

        <div className="mb-16 sm:mb-20">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex flex-col items-center group transition-all duration-500 ease-out
                  ${activeService === service.id ? 'scale-105' : 'scale-100 hover:scale-105'}
                  animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 sm:mb-6 transition-all duration-500 transform
                  ${activeService === service.id
                    ? 'text-blue-600 animate-bounce-subtle'
                    : 'text-gray-400 group-hover:text-gray-600'}`}
                >
                  {service.icon}
                </div>
                <span className={`text-sm sm:text-base lg:text-lg font-medium transition-all duration-500 text-center whitespace-nowrap
                  ${activeService === service.id
                    ? 'text-blue-600'
                    : 'text-gray-500 group-hover:text-gray-700'}`}
                >
                  {service.name}
                </span>
                <div className={`mt-3 sm:mt-4 h-0.5 w-full transition-all duration-500
                  ${activeService === service.id
                    ? 'bg-blue-600 opacity-100'
                    : 'bg-transparent opacity-0'}`}
                />
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg transition-all duration-700 ease-in-out animate-fade-in-up"
               key={activeService}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-6 sm:mb-8">
              {activeServiceData.title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl">
              {activeServiceData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default advanced_services;