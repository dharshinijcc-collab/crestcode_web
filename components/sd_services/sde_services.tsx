import { BarChart3, Code2, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const servicesData = [
  {
    id: 'custom',
    icon: <BarChart3 className="w-12 h-12 text-[#4A9EFF]" />,
    title: 'Custom software development',
    description: 'We develop and deliver custom solutions of varying complexity for both startup and enterprise Clients. Our custom approach means we delve deeply into the Client\'s needs and business goals, shaping the concept or vision of the software solution and bringing it to life with cutting-edge technologies.',
    link: '/services/custom-software-development'
  },
  {
    id: 'ai',
    icon: <Code2 className="w-12 h-12 text-[#4A9EFF]" />,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions that transform your business with predictive analytics and intelligent automation. We leverage the latest AI and machine learning technologies to build intelligent systems that drive business value and enhance decision-making.',
    link: '/services/ai-ml-development'
  },
  {
    id: 'web',
    icon: <Globe className="w-12 h-12 text-[#4A9EFF]" />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies and best practices. We create high-performance web applications that deliver exceptional user experiences, optimized for speed, SEO, and accessibility across all devices.',
    link: '/services/web-development'
  },
  {
    id: 'mobile',
    icon: <Smartphone className="w-12 h-12 text-[#4A9EFF]" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions that engage users and drive business growth. We develop feature-rich mobile applications for iOS and Android platforms, ensuring flawless performance and intuitive user experiences.',
    link: '/services/mobile-app-development'
  }
];

export default function sde_services() {
  const router = useRouter();

  const handleLearnMore = (link: string) => {
    router.push(link);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-[#4A9EFF]">services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            For over a decade, we have been accumulating knowledge and expertise in several services
            that became our specialization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onLearnMore={() => handleLearnMore(service.link)}
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
  description,
  onLearnMore
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  onLearnMore: () => void;
}) {
  return (
    <div className="group hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50/20 p-8 rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A9EFF]/10 hover:border hover:border-[#4A9EFF]/20 border border-transparent">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#4A9EFF] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>
      <button
        onClick={onLearnMore}
        className="inline-flex items-center gap-2 text-[#FF5757] font-medium hover:gap-4 transition-all duration-300 hover:text-[#ff4040]"
      >
        Learn More
        <ArrowRight className="w-5 h-5 transition-transform duration-300" />
      </button>
    </div>
  );
}