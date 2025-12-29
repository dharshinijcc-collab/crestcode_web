import { useState } from 'react';

interface ServiceItem {
  title: string;
  description: string;
  link?: string;
  icon?: string;
}

const serviceData: ServiceItem[] = [
  {
    title: 'Software Product Development',
    description:
      'We develop custom software products from concept to deployment. Our team handles the entire development lifecycle, creating scalable and maintainable solutions that meet your business objectives and deliver exceptional user experiences.',
    link: '/software-development',
    icon: 'icon1',
  },
  {
    title: 'AI and ML',
    description:
      'Crestcode leverages artificial intelligence and machine learning to build intelligent solutions. We develop AI-powered applications, create predictive models, and implement machine learning algorithms that transform your business data into actionable insights and competitive advantages.',
    link: '/ai-ml',
    icon: 'icon2',
  },
  {
    title: 'Web Development',
    description:
      'Our web development services cover everything from simple websites to complex web applications. We use modern frameworks and best practices to build responsive, fast, and secure web solutions that work seamlessly across all devices.',
    link: '/web-development',
    icon: 'icon3',
  },
  {
    title: 'Mobile App Development',
    description:
      'We create native and cross-platform mobile applications for iOS and Android. Our mobile solutions are designed to provide excellent user experiences while leveraging device capabilities to deliver powerful functionality.',
    link: '/mobile-development',
    icon: 'icon4',
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);

  const handleServiceClick = (index: number) => {
    setActiveService(index);
  };

  return (
    <section className="min-h-screen bg-[#0f1c3f] px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light mb-12 text-center">
          <span className="text-[#2d7ff9]">Services</span>{' '}
          <span className="text-white">we provide</span>
        </h1>

        <p className="text-white text-lg md:text-xl leading-relaxed mb-20 max-w-6xl mx-auto text-center">
          We are Crestcode, a software development company that leverages
          technology to create custom software products that address Clients
          challenges, needs, and pain points. Guided by core principles such as
          transparency, close collaboration, expertise, and well-established
          management and development processes, we provide exceptional services
          to our Clients with a strong focus on delivering business value — not
          just software.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-0">
            {serviceData.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`w-full text-left px-8 py-6 transition-all duration-500 transform hover:scale-105 ${
                  activeService === index
                    ? 'bg-[#2d7ff9] text-white shadow-2xl translate-x-2'
                    : 'bg-transparent text-white/80 hover:bg-white/5'
                }`}
              >
                <span className="text-xl font-light block">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div key={activeService}>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                {serviceData[activeService].title}
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                {serviceData[activeService].description}
              </p>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => {
                    const link = serviceData[activeService].link;
                    if (link) {
                      window.location.href = link;
                    }
                  }}
                  className="border-2 border-[#ff1493] text-[#ff1493] px-8 py-3 rounded transition-all duration-300 transform hover:scale-105 hover:border-[#ff69b4] hover:text-[#ff69b4]"
                >
                  <span className="font-light">{serviceData[activeService].title}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;