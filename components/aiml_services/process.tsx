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
      title: 'Exploratory Stage',
      duration: 'This is the foundational step in artificial intelligence development services, where we identify the opportunities to implement Artificial Intelligence and Machine Learning for a particular business. During this stage, we:',
      items: [
        'analyze the company’s existing data, its quality, volume, variety, and sources;',
        'collect, clean, and preprocess data;',
        'Identify business challenges that the AI solution needs to address;',
        'access the company’s existing IT infrastructure to determine how well the existing systems can integrate with AI;',
        'system architecture, considering computational and data processing and storing needs;',
        'technology stack;', 
  'develop the roadmap with steps, milestones, timelines, resources required, and clear goals.',
      ],
    },
    {
      number: 2,
      title: 'Design and development',
      duration: 'This step is about developing the framework within which the AI operates, including user interfaces for applications and the backend activities. We work on: ',
      items: [
        'how the app should look and draw mockups;',
        'integration with existing systems;',
'backend system development;',
'comprehensive testing.',
      ],
    },
    {
      number: 3,
      title: 'Model selection and training',
      duration: 'We establish selection criteria like accuracy, efficiency, scalability, speed, ability to handle different data types, etc. Then we train the model.',
      items: [
        'model selection: supervised, unsupervised, semi-supervised, reinforcement learning, deep learning;',
        'preparation of training, validation, and testing datasets;',
        'evaluating the model and parameter tuning;',
        'documentation of the model selection process, model training parameters, validation results, and any iterations made.',
      ],
    },
    {
      number: 4,
      title: 'Deployment and operational integrity',
      duration: 'We transition the solution from the development and testing environment into live and operational use.',
      items: [
        'deployment planning;',
        'environmental setup;',
        'model deployment;',
        'application integration;',
        'data migration;',
        'monitoring and logging;',
        'user training and support;',
        'post-deployment monitoring',
      ],
    },
    {
      number: 5,
      title: 'Maintenance and continuous improvement',
      duration: 'We offer an extra mile in fine-tuning and calibrating the AI system. We monitor the system after the deployment, adjusting its work based on gathered data about its performance and feedback.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Crestcode's development{' '}
            <span className="text-blue-600">
              process
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The development process starts when we sign a contract with the Client. Our business software
            development process is a carefully elaborated and polished set of activities that allows us to deliver
            high-quality software within short timeframes.
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
              <div className="relative pb-16 sm:pb-20 lg:pb-28">
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
                    <div className="mb-6 sm:mb-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-blue-600 transition-colors duration-300">
                        {phase.title}
                      </h2>
                      <p className="text-base sm:text-lg lg:text-lg text-gray-600 leading-relaxed">
                        {phase.duration}
                      </p>
                    </div>

                    {phase.items && (
                      <ul className="space-y-4 sm:space-y-5">
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