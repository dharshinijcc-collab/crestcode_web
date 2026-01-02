import { LucideIcon } from 'lucide-react';

interface TechnologyCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  delay: number;
}

export default function TechnologyCard({ name, icon: Icon, description, delay }: TechnologyCardProps) {
  return (
    <div
      className="text-center animate-slideUp hover:transform hover:scale-105 transition-transform duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex justify-center">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900 hover:text-gray-700 transition-colors duration-300" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        {name}
      </h3>

      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}