import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

function process() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-section') || '0');
            setVisibleSections((prev) => new Set(Array.from(prev).concat(id)));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.process-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      number: 1,
      title: 'Research',
      items: [
        'interview stakeholders',
        'key apps competitor analysis',
        'marketing and user analysis.',
      ],
    },
    {
      number: 2,
      title: 'Discover',
      items: [
        'creating of a shared product vision',
        'development of a requirements specification with release priorities',
        'preparation of a roadmap with a release timeline',
        'building of an app architecture.',
      ],
    },
    {
      number: 3,
      title: 'Design',
      items: [
        'development of information architecture',
        'wireframing',
        'prototyping',
        'animation of the interfaces.',
      ],
    },
    {
      number: 4,
      title: 'Programming',
      items: [
        'backend development',
        'frontend development',
        'performance optimization',
        'API integration.',
      ],
    },
    {
      number: 5,
      title: 'Quality assurance',
      items: [
        'functional testing',
        'non-functional testing',
        'change testing.',
      ],
    },
    {
      number: 6,
      title: 'Deployment',
      items: [
        'App Store',
        'Google Play',
        'software implementation.',
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our custom {' '}
            <span className="text-blue-600">
              web application development process
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We adhere to a holistic web development approach with a focus on meeting your business requirements and 
            ensuring the software will improve the effectiveness and efficiency of your business.
          </p>
        </div>

        <div className="relative space-y-0">
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              data-section={phase.number}
              className={`process-section transition-all duration-1000 ${
                visibleSections.has(phase.number)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative pb-4 sm:pb-8 lg:pb-12">
                {index < phases.length - 1 && (
                  <div className="absolute left-8 sm:left-10 lg:left-12 top-20 sm:top-24 lg:top-28 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-300 to-transparent"></div>
                )}

                <div className="flex gap-6 sm:gap-8 lg:gap-10">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-500 hover:scale-110 group border-2 border-blue-200 hover:border-blue-400">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                        {phase.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pt-2 sm:pt-3 lg:pt-4">
                    <div className="mb-3 sm:mb-4">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-blue-600 transition-colors duration-300">
                        {phase.title}
                      </h2>
                    </div>

                    {phase.items && (
                      <ul className="space-y-2 sm:space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 sm:gap-4 group hover:translate-x-1 transition-all duration-300"
                            style={{
                              animationDelay: `${itemIndex * 30}ms`,
                            }}
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12">
                                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                              </div>
                            </div>
                            <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 group-hover:font-medium transition-all duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.3s backwards;
        }

        html {
          scroll-behavior: smooth;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (max-width: 640px) {
          .process-section {
            animation: fadeIn 0.6s ease-out;
          }
        }
      `}</style>
    </div>
  );
}

export default process;