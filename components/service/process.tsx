import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9', // High-end Industrial Slate-Blue
  primary: '#4F46E5', // Precision Indigo
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

function DevelopmentProcess() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(
              entry.target.getAttribute('data-section') || '0'
            );
            setVisibleSections((prev) => new Set(Array.from(prev).concat(id)));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.process-step').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      number: 1,
      title: 'Project Kickoff & Discovery',
      duration: 'Duration: 1 Day Kickoff | 5-8 Weeks Elicitation',
      items: [
        'Conduct kickoff meeting to align on business goals',
        'Establish communication tools and reporting frequency',
        'Prepare project workspace in Jira and Confluence',
        'Evaluate risks and prepare mitigation plans',
        'Create a project roadmap and define major milestones',
      ],
    },
    {
      number: 2,
      title: 'UI/UX Engineering',
      duration: 'Duration: 3-6 Weeks (Parallel Execution)',
      items: [
        'Prepare prototypes and high-fidelity design concepts',
        'Conduct competitor analysis and user research',
        'Develop interactive wireframes and UI designs',
        'Create a branded UI kit with reusable components',
        'Document design specifications for development',
      ],
    },
    {
      number: 3,
      title: 'Agile Development',
      duration: 'Cycle: Bi-weekly Sprints',
      items: [
        'Write and review code based on sprint planning',
        'Conduct daily stand-ups to align priorities',
        'Tech lead oversight for absolute code quality',
        'Robust version control and CI/CD implementation',
        'Client participation in progress reviews',
      ],
    },
    {
      number: 4,
      title: 'QA & Rigorous Testing',
      duration: 'Cycle: Continuous Integration',
      items: [
        'Manual and automated testing (Selenium/TestNG)',
        'Conduct usability, performance, and security audits',
        'CI/CD pipelines for seamless feature integration',
        'Collaborative bug resolution with developers',
        'End-of-sprint demo and stakeholder sign-off',
      ],
    },
    {
      number: 5,
      title: 'Support & Maintenance',
      duration: 'Phase: Optional & Ongoing',
      items: [
        'Perform knowledge transfer and team training',
        'Monitor system performance and proactive resolution',
        'Implement technology updates and security patches',
        'Roll out new features based on user evolution',
        'Ongoing performance reports and maintenance activities',
      ],
    },
  ];

  return (
    <section
      style={{
        padding: '40px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* 1. ENGINEERING GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            Crestcode's{' '}
            <span style={{ color: COLORS.primary }}>Development Process</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
            A carefully elaborated set of activities designed to deliver
            high-quality architectures within predictable timeframes.
          </p>
        </div>

        {/* TIMELINE STEPS */}
        <div style={{ position: 'relative' }}>
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              data-section={phase.number}
              className="process-step"
              style={{
                position: 'relative',
                paddingBottom: index === phases.length - 1 ? 0 : '100px',
                opacity: visibleSections.has(phase.number) ? 1 : 0,
                transform: visibleSections.has(phase.number)
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${index * 100}ms`,
              }}>
              {/* Vertical Connector Line */}
              {index < phases.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: '40px',
                    top: '80px',
                    bottom: 0,
                    width: '2px',
                    background: `linear-gradient(to bottom, ${COLORS.primary}, transparent)`,
                    opacity: visibleSections.has(phase.number + 1) ? 1 : 0.2,
                    transition: 'opacity 1s ease',
                  }}
                />
              )}

              <div
                style={{
                  display: 'flex',
                  gap: '40px',
                  alignItems: 'flex-start',
                }}>
                {/* CIRCULAR NUMBER BADGE */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: visibleSections.has(phase.number)
                      ? COLORS.primary
                      : COLORS.white,
                    border: `2px solid ${COLORS.primary}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: visibleSections.has(phase.number)
                      ? `0 10px 20px -5px ${COLORS.primary}66`
                      : 'none',
                    transition: 'all 0.6s ease',
                    zIndex: 2,
                  }}>
                  <span
                    style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      color: visibleSections.has(phase.number)
                        ? COLORS.white
                        : COLORS.primary,
                    }}>
                    {phase.number}
                  </span>
                </div>

                {/* CONTENT AREA */}
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '32px' }}>
                    <h2
                      style={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: COLORS.textBlack,
                        marginBottom: '12px',
                        letterSpacing: '-0.02em',
                      }}>
                      {phase.title}
                    </h2>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: COLORS.primary,
                        fontSize: '14px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                      <Clock size={16} /> {phase.duration}
                    </div>
                  </div>

                  <ul
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '16px',
                      padding: 0,
                      listStyle: 'none',
                    }}>
                    {phase.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          background: 'rgba(255,255,255,0.6)',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: `1px solid ${COLORS.border}`,
                        }}>
                        <Check
                          size={16}
                          color={COLORS.primary}
                          strokeWidth={3}
                        />
                        <span
                          style={{
                            fontSize: '15px',
                            color: COLORS.textMuted,
                            fontWeight: 500,
                          }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        
        @media (max-width: 768px) {
          .process-step { padding-bottom: 60px !important; }
          div[style*="gap: 40px"] { gap: 20px !important; }
          div[style*="width: 80px"] { width: 60px !important; height: 60px !important; }
          span[style*="fontSize: 28px"] { fontSize: 20px !important; }
          div[style*="left: 40px"] { left: 30px !important; }
        }
      `}</style>
    </section>
  );
}

export default DevelopmentProcess;
