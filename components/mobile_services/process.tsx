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
      title: 'Discovery & planning',
      description: 'We dive into your business objectives, audience needs, and market landscape, researching competitors and trends to shape a winning strategy. We define a clear scope, set realistic budgets, and craft a roadmap with milestones, ensuring your app launches on time and maximizes ROI.'
    },
    {
      number: 2,
      title: 'UI/UX design',
      description: 'We craft intuitive wireframes and interactive prototypes, prioritizing smooth navigation and accessibility. We align visuals with your brand, testing with real users to perfect experience. Our goal is to design interfaces that keep users engaged and help them achieve their goals within app.'
    },
    {
      number: 3,
      title: 'App development',
      description: 'Our mobile app development services guarantee that your app has clean code, integrates core features, APIs, and robust security like encryption. Using agile methods, we deliver regular updates for transparency and adapt to your business needs.'
    },
    {
      number: 4,
      title: 'Quality assurance (QA) & testing',
      description: 'We rigorously test functionality, usability, security, and compatibility across 50+ devices and platforms. By simulating real-world scenarios, we catch issues early, ensuring a flawless app experience.'
    },
    {
      number: 5,
      title: 'Deployment',
      description: 'We manage App Store and Google Play submissions, navigating strict guidelines for a smooth rollout. Our expertise ensures your app goes live without hiccups, ready to reach users instantly, whether it is a fitness tracker or a business tool.'
    },
    {
      number: 6,
      title: 'Post-launch support & maintenance',
      description: 'We provide ongoing updates, monitor performance, and fix issues fast to keep your app reliable. From adding new features to adapting to OS changes, we ensure your app stays competitive.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-blue-600">
              Mobile app development process
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Crestcode, we have a well-defined process of developing mobile applications that we've refined over 13 years. Each step tackles real challenges, delivering results that are supposed to drive business growth and captivate users.
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

                    {phase.description && (
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 group-hover:font-medium transition-all duration-300">
                        {phase.description}
                      </p>
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
