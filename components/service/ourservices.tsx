import { BarChart3, Code2, Smartphone, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const servicesData = [
  {
    id: 'custom',
    icon: <BarChart3 className="w-12 h-12 text-[#4A9EFF]" />,
    title: 'Custom software development',
    shortDescription: 'We develop and deliver custom solutions of varying complexity for both startup and enterprise Clients.',
    fullDescription: 'We develop and deliver custom solutions of varying complexity for both startup and enterprise Clients. Our custom approach means we delve deeply into the Client\'s needs and business goals, shaping the concept or vision of the software solution and bringing it to life. We cover every stage of software development solutions, from ideation to deployment, with extensive expertise in business analysis, coding, system integration, cloud-based solutions, integrating advanced technologies, and more. Our team specializes in creating scalable, maintainable, and innovative solutions tailored to your specific business requirements.'
  },
  {
    id: 'ai',
    icon: <Code2 className="w-12 h-12 text-[#4A9EFF]" />,
    title: 'AI & Machine Learning',
    shortDescription: 'Cutting-edge artificial intelligence solutions that transform your business with predictive analytics and intelligent automation.',
    fullDescription: 'We leverage the latest AI and machine learning technologies to build intelligent systems that drive business value. Our expertise includes natural language processing, computer vision, predictive analytics, recommendation engines, and intelligent automation. We help organizations harness the power of AI to improve decision-making, enhance customer experiences, and automate complex processes. Our team stays current with the latest developments in deep learning, neural networks, and machine learning frameworks to deliver state-of-the-art solutions.'
  },
  {
    id: 'web',
    icon: <Globe className="w-12 h-12 text-[#4A9EFF]" />,
    title: 'Web Development',
    shortDescription: 'Modern, responsive web applications built with the latest technologies and best practices.',
    fullDescription: 'We create high-performance web applications that deliver exceptional user experiences. Our web development services cover everything from responsive front-end design to robust back-end architecture. We work with modern frameworks like React, Vue, and Angular on the frontend, and Node.js, Python, and Java on the backend. Our solutions are optimized for speed, SEO, and accessibility, ensuring your web presence stands out in the digital landscape. We also specialize in progressive web apps, real-time applications, and complex single-page applications.'
  },
  {
    id: 'mobile',
    icon: <Smartphone className="w-12 h-12 text-[#4A9EFF]" />,
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile solutions that engage users and drive business growth.',
    fullDescription: 'We develop feature-rich mobile applications for iOS and Android platforms, whether native or cross-platform. Our team has extensive experience with Swift, Kotlin, React Native, and Flutter, ensuring your app performs flawlessly across devices. From concept to app store submission, we handle every aspect of mobile development including UI/UX design, backend integration, testing, and deployment. We focus on creating intuitive, fast, and reliable mobile experiences that keep users engaged and satisfied.'
  }
];

export default function ourservices() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-[#4A9EFF]">services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            For over a decade, we have been accumulating knowledge and expertise in several services
            that became our specialization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              isExpanded={expandedId === service.id}
              onToggle={() => setExpandedId(expandedId === service.id ? null : service.id)}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  id,
  icon,
  title,
  shortDescription,
  fullDescription,
  isExpanded,
  onToggle,
  delay
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  isExpanded: boolean;
  onToggle: () => void;
  delay: number;
}) {
  return (
    <div
      className="group hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50/20 p-8 rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A9EFF]/10 hover:border hover:border-[#4A9EFF]/20 animate-slide-up border border-transparent"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6 group-hover:translate-y-1">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#4A9EFF] transition-colors duration-300">{title}</h3>
      <p className={`text-gray-600 leading-relaxed transition-all duration-500 overflow-hidden ${isExpanded ? 'mb-6' : 'mb-6 line-clamp-2'}`}>
        {isExpanded ? fullDescription : shortDescription}
      </p>
      <button
        onClick={onToggle}
        className="inline-flex items-center gap-2 text-[#FF5757] font-medium hover:gap-4 transition-all duration-300 hover:text-[#ff4040] group/btn hover:scale-105 active:scale-95"
      >
        {isExpanded ? 'View Less' : 'View More'}
        <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}