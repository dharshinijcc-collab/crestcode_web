import { useState } from 'react';
import { FileText, Ruler, Monitor, Settings, Users, Check } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  points: {
    left: string[];
    right: string[];
  };
  image: string;
}

const services: Service[] = [
  {
    id: 'rnd',
    title: 'R&D & Analysis',
    icon: <FileText className="w-12 h-12" />,
    description: 'Our R&D and business analyst team study your business and ideas in detail to help you reduce market and technical risks across the entire web app development:',
    points: {
      left: [
        'validate business idea;',
        'choose the right technology;',
        'get exact project estimation;'
      ],
      right: [
        'create solution vision;',
        'plan the product release;',
        'avoid unplanned costs.'
      ]
    },
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'uxui',
    title: 'UX/UI design',
    icon: <Ruler className="w-12 h-12" />,
    description: 'Our design team creates intuitive and engaging user experiences that align with your brand and business goals, ensuring your web application stands out:',
    points: {
      left: [
        'user research and personas;',
        'wireframing and prototyping;',
        'visual design and branding;'
      ],
      right: [
        'usability testing;',
        'responsive design systems;',
        'accessibility compliance.'
      ]
    },
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'webdev',
    title: 'Web development',
    icon: <Monitor className="w-12 h-12" />,
    description: 'Our experienced developers build scalable, secure, and high-performance web applications using cutting-edge technologies and best practices:',
    points: {
      left: [
        'frontend development;',
        'backend architecture;',
        'API integration;'
      ],
      right: [
        'database optimization;',
        'security implementation;',
        'performance tuning.'
      ]
    },
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'qa',
    title: 'QA & Testing',
    icon: <Settings className="w-12 h-12" />,
    description: 'Our quality assurance team ensures your web application is reliable, bug-free, and performs flawlessly across all platforms and devices:',
    points: {
      left: [
        'functional testing;',
        'performance testing;',
        'security testing;'
      ],
      right: [
        'automated test coverage;',
        'cross-browser compatibility;',
        'regression testing.'
      ]
    },
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'staff',
    title: 'Staff augmentation',
    icon: <Users className="w-12 h-12" />,
    description: 'We provide skilled professionals to seamlessly integrate with your team, helping you scale quickly and efficiently while maintaining quality:',
    points: {
      left: [
        'dedicated developers;',
        'flexible team scaling;',
        'expert specialists;'
      ],
      right: [
        'seamless integration;',
        'knowledge transfer;',
        'long-term partnerships.'
      ]
    },
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

function ourservices() {
  const [activeService, setActiveService] = useState<string>('rnd');
  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-12 md:mb-16">
          Custom web application development{' '}
          <span className="text-blue-500">services</span>
        </h1>

        <div className="grid grid-cols-5 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-300 ${
                activeService === service.id
                  ? 'border-b-2 border-blue-500'
                  : 'border-b-2 border-transparent hover:border-blue-400'
              }`}
            >
              <div className={`mb-3 md:mb-4 transition-colors ${
                activeService === service.id ? 'text-blue-500' : 'text-blue-400'
              }`}>
                {service.icon}
              </div>
              <h3 className={`text-sm md:text-base text-center transition-colors ${
                activeService === service.id ? 'text-blue-400' : 'text-gray-400'
              }`}>
                {service.title}
              </h3>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-light text-white mb-6">
              {currentService.title}
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              {currentService.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                {currentService.points.left.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-base md:text-lg">{point}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {currentService.points.right.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-base md:text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ourservices;
