import { useEffect, useState } from 'react';

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
      title: 'Business analysis',
      items: [
        'During the Business Analysis stage, we introduce the team, align on goals, and set clear expectations.We establish communication processes, select tools like Jira and Confluence, and prepare the project workspace.Through regular calls and collaborative workshops with the Client, we gather and refine requirements, evaluate risks, and establish a risk mitigation plan.The result of the business analysis phase is a well-defined project roadmap with clear milestones, ensuring the entire team is aligned from the start.'
      ],
    },
    {
      number: 2,
      title: 'Architecture definition',
      items: [
        'The definition of architecture is a part of the business analysis process, but this step is worth additional attention. This is where the technical product foundation is defined. The choices made here defined the future product scalability, security tech stack, structure, key design components, data flows, integration points, and much more. For every Client, we strive to select the most suitable tech stack, taking into consideration the project budget, timelines, and the work scope.'
      ],
    },
    {
      number: 3,
      title: 'UI/UX design',
      items: [
        'The UI/UX design phase runs in parallel with business analysis. Our design team starts by preparing mood boards, prototypes, and initial concepts, and defining the product\'s unique selling proposition. We also conduct competitor analysis and study user behavior – all these efforts aim for one purpose: to direct us in the right design direction. Based on our conclusions, we create wireframes, interactive prototypes, and detailed UI designs, refining them through Client feedback and iterations. This step\'s deliverables include documented design specifications, development-ready assets, and a branded UI kit with reusable components like icons, buttons, colors, and fonts.'
      ],
    },
    {
      number: 4,
      title: 'Product development',
      items: [
        'The software development phase runs in two-week sprints. During each sprint, our team writes and reviews code for a pre-approved list of features for this sprint, while the Tech Lead oversees quality and progress. The Client is actively involved through regular progress reviews, providing feedback on completed features to keep development aligned with the project goals.'
      ],
    },
    {
      number: 5,
      title: 'Quality assurance',
      items: [
        'The quality assurance phase runs throughout each sprint, starting mid-sprint and concluding with a demo meeting. QA specialists begin with manual testing to catch issues, then prepare and run automated test cases using tools like Selenium and TestNG. We conduct various types of testing, including usability, performance, and security and document all results that will become part of the print report. Each sprint ends with a demo, during which new features are reviewed with the Client.'
      ],
    },
    {
      number: 6,
      title: 'DevOps',
      items: [
        'The DevOps phase supports the entire development cycle by ensuring smooth deployment, scalability, and system reliability. Not all projects require the involvement of our DevOps specialists, but we always suggest applying DevOps practices to our Clients if we see that they could benefit the project outcomes. Our DevOps services include system performance monitoring, managing different development environments, handling regular backups, disaster recovery setup, implementing best security practices, and making any possible effort to streamline development workflows, increase software quality, and reduce time to market.'
      ],
    },
    {
      number: 7,
      title: 'Maintenance and support',
      items: [
        'The support and maintenance phase is optional and ongoing, continuing after the successful project launch. We begin by delivering a final report and confirming project closure with the Client. We provide knowledge transfer, send all available documentation to one place, hold training sessions, and answer any questions regarding the product. Our team also monitors system performance, resolves technical issues proactively, and implements necessary technology updates to ensure the product adheres to the latest security and performance standards.'
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our software product development{' '}
            <span className="text-blue-600">
              process
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide end-to-end software product development services, growing products from initial ideas to fully functional applications. 
            We do it through our well-established development processes, talented software engineers, and our strong commitment to business success.
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

                    <div className="space-y-6">
                      {phase.items.map((item, itemIndex) => (
                        <p
                          key={itemIndex}
                          className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-all duration-300"
                          style={{
                            animationDelay: `${itemIndex * 30}ms`,
                          }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
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
