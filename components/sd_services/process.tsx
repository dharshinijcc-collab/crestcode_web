'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

function SoftwareProductProcess() {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll('.software-step').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      number: 1,
      title: 'Business Analysis',
      duration: 'Timeline: 2-4 Weeks',
      items: [
        'Stakeholder goal alignment & expectation setting',
        'Workspace setup in Jira & Confluence',
        'Requirements refinement via collaborative workshops',
        'Risk evaluation & mitigation planning',
        'Finalized project roadmap with clear milestones',
      ],
    },
    {
      number: 2,
      title: 'Architecture Definition',
      duration: 'Timeline: 1-2 Weeks',
      items: [
        'Technical product foundation definition',
        'Scalability & security tech stack selection',
        'Data flow & integration point mapping',
        'Budget-optimized structure planning',
      ],
    },
    {
      number: 3,
      title: 'UI/UX Design',
      duration: 'Timeline: 3-6 Weeks (Parallel)',
      items: [
        'Mood boards, prototypes & initial concepts',
        'Competitor analysis & user behavior study',
        'Interactive wireframes & high-fidelity UI',
        'Branded UI kit with reusable components',
        'Development-ready design specifications',
      ],
    },
    {
      number: 4,
      title: 'Product Development',
      duration: 'Cycle: Bi-weekly Agile Sprints',
      items: [
        'Code execution for pre-approved sprint features',
        'Daily stand-ups for priority alignment',
        'Tech Lead oversight for code integrity',
        'Client-side progress reviews & feedback loops',
      ],
    },
    {
      number: 5,
      title: 'Quality Assurance',
      duration: 'Cycle: Continuous Throughout Sprints',
      items: [
        'Manual testing for immediate bug discovery',
        'Automated test cases (Selenium/TestNG)',
        'Usability, performance & security audits',
        'End-of-sprint demo & stakeholder review',
      ],
    },
    {
      number: 6,
      title: 'DevOps & Deployment',
      duration: 'Phase: Ongoing Infrastructure',
      items: [
        'System performance monitoring & scaling',
        'Deployment environment management',
        'Disaster recovery & backup protocols',
        'CI/CD pipeline optimization',
      ],
    },
    {
      number: 7,
      title: 'Maintenance & Support',
      duration: 'Phase: Optional Post-Launch',
      items: [
        'Final reporting & project closure',
        'Knowledge transfer & training sessions',
        'Proactive technical issue resolution',
        'Continuous security & performance updates',
      ],
    },
  ];

  return (
    <section
      style={{
        padding: '120px 24px',
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
        {/* CENTERED HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            Our Software Product{' '}
            <span style={{ color: COLORS.primary }}>Engineering Process</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            A refined, end-to-end methodology designed to grow products from
            initial concepts to fully functional, market-ready applications.
          </p>
        </div>

        {/* TIMELINE ARCHITECTURE */}
        <div style={{ position: 'relative' }}>
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              data-section={phase.number}
              className="software-step"
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
              {/* Vertical Connector Line (Indigo Glow) */}
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
                    color: visibleSections.has(phase.number)
                      ? COLORS.white
                      : COLORS.primary,
                  }}>
                  <span style={{ fontSize: '28px', fontWeight: 800 }}>
                    {phase.number}
                  </span>
                </div>

                {/* CONTENT AREA */}
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '28px' }}>
                    <h2
                      style={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: COLORS.textBlack,
                        marginBottom: '8px',
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

                  {/* BENTO-GRID LIST ITEMS */}
                  <ul
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '12px',
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
          .software-step { padding-bottom: 60px !important; }
          div[style*="gap: 40px"] { gap: 20px !important; }
          div[style*="width: 80px"] { width: 60px !important; height: 60px !important; }
          span[style*="fontSize: 28px"] { fontSize: 20px !important; }
          div[style*="left: 40px"] { left: 30px !important; }
        }
      `}</style>
    </section>
  );
}

export default SoftwareProductProcess;
