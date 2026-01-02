import { Puzzle, Shield, Cloud, Cog, Globe2, Monitor } from 'lucide-react';

function features() {
  const features = [
    {
      icon: Puzzle,
      title: '3rd party services integration',
      description: 'Web applications are easily connected to multiple third-party services, starting with payment gateways and ending with business automation services.'
    },
    {
      icon: Shield,
      title: 'Highest security',
      description: 'We focus on securing our web apps during custom web application development by implementing role-based permission systems, transactions and data-sharing protection.'
    },
    {
      icon: Cloud,
      title: 'Cloud-based',
      description: 'In addition to the modular architectural approach, cloud-native architecture implies the adoption of cloud services, cutting-edge real-time technologies and leveraging managed services from cloud vendors.'
    },
    {
      icon: Cog,
      title: 'Microservices-based applications',
      description: 'Building applications using microservices architecture allows for better scalability, maintainability, and independent deployment of services.'
    },
    {
      icon: Globe2,
      title: 'Universal accessibility',
      description: 'Our applications are designed to be accessible to all users, following WCAG guidelines and ensuring compatibility across different devices and platforms.'
    },
    {
      icon: Monitor,
      title: 'Stability',
      description: 'We ensure application stability through comprehensive testing, monitoring, and implementing best practices in software development and deployment.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-16 lg:mb-20">
          Our custom web app development{' '}
          <span className="text-blue-600 font-bold">features</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col group cursor-pointer transition-all duration-500 ease-out hover:translate-y-[-8px]"
            >
              <div className="relative mb-6 sm:mb-8 inline-w-fit">
                <feature.icon
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-700"
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
              </div>
              <h2 className="text-lg sm:text-xl font-normal text-gray-900 mb-3 sm:mb-4 transition-colors duration-500 group-hover:text-blue-600">
                {feature.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-500 group-hover:text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default features;
