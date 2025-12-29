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
            setVisibleSections((prev) => new Set([...prev, id]));
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
      title: 'Project kickoff and requirements elicitation',
      duration: 'The kickoff meeting takes just one day, while requirements elicitation may last up to 5-8 weeks depending on the project scale.',
      items: [
        'conduct a kickoff meeting to introduce the team, discuss expectations, and align on business goals',
        'establish communication processes, tools, and reporting frequency',
        'prepare the project workspace in tools like Jira and Confluence',
        'brief the team on project goals, scope, and initial risk assessments',
        'collaborate with the Client on vision and user requirements through regular calls',
        'hold workshops to gather and refine requirements',
        'evaluate risks, assess business impact, and prepare a risk mitigation plan',
        'create a project roadmap and define major milestones',
      ],
    },
    {
      number: 2,
      title: 'UI/UX services',
      duration: 'The design team typically works in parallel with business analysts, and the phase takes 3-6 weeks alongside requirements elicitation.',
      items: [
        'prepare prototypes, mood boards, and design concepts',
        'define a unique selling proposition for the product',
        'conduct competitor analysis and user behavior research',
        'develop wireframes, interactive prototypes, and detailed UI designs',
        'refine designs based on client feedback through iterative revisions',
        'document design specifications and prepare assets for development',
        'create a branded UI kit with reusable components such as icons, buttons, colors, and fonts',
      ],
    },
    {
      number: 3,
      title: 'Development',
      duration: 'The development process occurs in iterations, with each sprint lasting two weeks.',
      items: [
        'write and review code for features defined in the sprint plan',
        'monitor development progress and address blockers promptly',
        'conduct daily stand-ups to align tasks and priorities',
        'the tech lead monitors the team and ensures code quality',
        'we implement robust version control to maintain a high standard of code quality',
        'the Client participates in progress reviews and provides feedback on completed features',
      ],
    },
    {
      number: 4,
      title: 'Testing',
      duration: 'Testing is conducted throughout the sprint, beginning mid-sprint and culminating in a demo meeting.',
      items: [
        'QA specialists perform manual testing as the first step',
        'prepare test cases for automated testing using tools like Selenium and TestNG',
        'conduct usability, performance, security, and other types of testing',
        'use CI/CD pipelines to ensure seamless integration of new features',
        'document test results and collaborate with developers to resolve issues',
        'showcase new features in a demo meeting at the end of the sprint',
      ],
    },
    {
      number: 5,
      title: 'Support & Maintenance',
      duration: 'This phase is optional and ongoing – we continue to cooperate after the successful project launch.',
      items: [
        'deliver a final report and request Client confirmation for project closure',
        'perform knowledge transfer and provide training to ensure smooth handover',
        'monitor system performance and proactively resolve technical issues',
        'implement technology updates to maintain compatibility and security',
        'develop and roll out new features based on evolving Client needs',
        'provide ongoing reports on maintenance activities and product performance',
      ],
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
