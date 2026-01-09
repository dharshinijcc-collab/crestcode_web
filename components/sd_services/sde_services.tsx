'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BarChart3, Code2, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const ICON_MAP = {
  BarChart3: <BarChart3 size={48} />,
  Code2: <Code2 size={48} />,
  Smartphone: <Smartphone size={48} />,
  Globe: <Globe size={48} />,
  ArrowRight: <ArrowRight size={48} />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- DATA CONFIGURATION (JSON TYPE) ---
const SERVICES_CONTENT = {
  header: {
    title: "Our",
    highlight: "services",
    description: "For over a decade, we have been accumulating knowledge and expertise in several services that became our specialization."
  },
  services: [
    {
      id: 'custom',
      iconName: 'BarChart3',
      title: 'Custom software development',
      description: "We develop and deliver custom solutions of varying complexity for both startup and enterprise Clients. Our custom approach means we delve deeply into the Client's needs and business goals, shaping the concept or vision of the software solution and bringing it to life with cutting-edge technologies.",
      link: '/services/custom-software-development'
    },
    {
      id: 'ai',
      iconName: 'Code2',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform your business with predictive analytics and intelligent automation. We leverage the latest AI and machine learning technologies to build intelligent systems that drive business value and enhance decision-making.',
      link: '/services/ai-ml-development'
    },
    {
      id: 'web',
      iconName: 'Globe',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies and best practices. We create high-performance web applications that deliver exceptional user experiences, optimized for speed, SEO, and accessibility across all devices.',
      link: '/services/web-development'
    },
    {
      id: 'mobile',
      iconName: 'Smartphone',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions that engage users and drive business growth. We develop feature-rich mobile applications for iOS and Android platforms, ensuring flawless performance and intuitive user experiences.',
      link: '/services/mobile-app-development'
    }
  ]
};

// --- STYLING TOKENS ---
const COLORS = {
  primary: '#4A9EFF',
  accent: '#FF5757',
  textMain: '#111827',
  textMuted: '#4B5563',
  bgWhite: '#FFFFFF',
  secondary: '#6B7280',
  success: '#34C759',
  warning: '#F7DC6F',
  error: '#FF2D2D',
};

export default function ServicesSection() {
  const router = useRouter();
  const { config } = useAdmin();
  const SERVICES_CONTENT = config?.sd_services?.SERVICES_CONTENT;
  console.log(SERVICES_CONTENT)

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  if (!SERVICES_CONTENT) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            {SERVICES_CONTENT.header.title}{' '}
            <span style={{ color: COLORS.primary }}>{SERVICES_CONTENT.header.highlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {SERVICES_CONTENT.header.description}
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES_CONTENT.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onNavigate={() => handleNavigation(service.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT ---
function ServiceCard({ 
  service, 
  onNavigate 
}: { 
  service: typeof SERVICES_CONTENT.services[0], 
  onNavigate: () => void 
}) {
  const iconName = service.iconName as IconName;
  const IconComponent = ICON_MAP[iconName];

  return (
    <div className="group hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50/20 p-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A9EFF]/10 hover:border hover:border-[#4A9EFF]/20 border border-transparent">
      <div className="mb-6">
        {React.cloneElement(IconComponent, { 
          size: 48, 
          className: "w-12 h-12",
          style: { color: COLORS.primary } 
        })}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#4A9EFF] transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>
      
      <button
        onClick={onNavigate}
        className="inline-flex items-center gap-2 font-medium hover:gap-4 transition-all duration-300"
        style={{ color: COLORS.accent }}
      >
        Learn More
        <ArrowRight className="w-5 h-5 transition-transform duration-300" />
      </button>
    </div>
  );
}