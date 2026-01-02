import { Coffee, Server, Component, Gem } from 'lucide-react';
import TechnologyCard from '@/components/service/TechnologyCard';

const technologies = [
  {
    id: 1,
    name: 'Java',
    icon: Coffee,
    description: 'A powerful and reliable programming language for building secure, enterprise-level applications. Its platform independence and robust libraries enable the development of custom software capable of handling any task and aligning with specific business processes.'
  },
  {
    id: 2,
    name: 'Node.js',
    icon: Server,
    description: 'A powerful JavaScript runtime built on Chrome\'s V8 engine, enabling fast and scalable server-side applications. Perfect for building real-time applications, REST APIs, and microservices with high performance and efficiency.'
  },
  {
    id: 3,
    name: 'React.js',
    icon: Component,
    description: 'A leading JavaScript library for building dynamic and interactive user interfaces. With its component-based architecture and virtual DOM, React enables the creation of fast, modern web applications with exceptional user experiences.'
  },
  {
    id: 4,
    name: 'Ruby (RoR)',
    icon: Gem,
    description: 'Ruby on Rails (RoR) is a robust web application framework known for its simplicity and efficiency. A proven framework for rapid development of robust web applications with high scalability and maintainability.'
  }
];

export default function TechnologiesSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-20 animate-fadeIn">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Technologies We Master
          </span>
        </h1>
      

        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
          We leverage a versatile and robust tech stack mastered by our highly skilled specialists, carefully selected through a rigorous hiring process. Our team's expertise is continually enriched through a knowledge-sharing process, ensuring the latest technologies, practices, and tools are effectively applied to new projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={tech.id}
            {...tech}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}