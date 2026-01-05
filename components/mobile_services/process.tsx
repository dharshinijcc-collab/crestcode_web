'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

// --- INDUSTRIAL DESIGN TOKENS (Shared across your platform) ---
const COLORS = {
  bgBase: '#F3F5F9', // High-end Industrial Slate-Blue
  primary: '#4F46E5', // Precision Indigo
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

function MobileProcess() {
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

    document.querySelectorAll('.mobile-process-step').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      number: 1,
      title: 'Discovery & Mobile Strategy',
      duration: 'Duration: 2-3 Weeks Strategy',
      items: [
        'Analyze business objectives and target audience',
        'Research market trends and competitor apps',
        'Define core app functionality and MVP scope',
        'Prepare technical roadmap and release milestones',
        'Establish security and compliance requirements',
      ],
    },
    {
      number: 2,
      icon: null,
      title: 'UI/UX Engineering',
      duration: 'Duration: 3-5 Weeks Execution',
      items: [
        'Create interactive low-fidelity wireframes',
        'Design high-fidelity mobile prototypes',
        'Develop a native-first design system',
        'Conduct usability testing with target users',
        'Document touch-gesture and navigation logic',
      ],
    },
    {
      number: 3,
      title: 'Native & Cross-Platform Dev',
      duration: 'Cycle: Bi-weekly Agile Sprints',
      items: [
        'Perform iOS/Android specific coding',
        'Integrate secure APIs and backend systems',
        'Implement biometric and secure authentication',
        'Conduct daily stand-ups for sprint alignment',
        'Maintain absolute code quality via Tech Lead',
      ],
    },
    {
      number: 4,
      title: 'Rigorous QA & Device Lab',
      duration: 'Cycle: Continuous Integration',
      items: [
        'Test on 50+ real iOS and Android devices',
        'Conduct performance and battery-drain audits',
        'Execute automated regression and security tests',
        'Simulate real-world connectivity scenarios',
        'Obtain stakeholder sign-off on release build',
      ],
    },
    {
      number: 5,
      title: 'Deployment & Support',
      duration: 'Phase: App Store Submission',
      items: [
        'Manage App Store and Google Play reviews',
        'Implement App Store Optimization (ASO)',
        'Monitor performance with real-time analytics',
        'Deploy regular security and OS updates',
        'Provide ongoing maintenance and feature scaling',
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
        {/* HEADER SECTION (Centered as per standard) */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            Mobile App Development{' '}
            <span style={{ color: COLORS.primary }}>Process</span>
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
            A polished methodology refined over 13 years to deliver
            high-performance mobile architectures within predictable engineering
            timeframes.
          </p>
        </div>

        {/* TIMELINE ARCHITECTURE */}
        <div style={{ position: 'relative' }}>
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              data-section={phase.number}
              className="mobile-process-step"
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

                  {/* BENTO-GRID LIST ITEMS */}
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
          .mobile-process-step { padding-bottom: 60px !important; }
          div[style*="gap: 40px"] { gap: 20px !important; }
          div[style*="width: 80px"] { width: 60px !important; height: 60px !important; }
          span[style*="fontSize: 28px"] { fontSize: 20px !important; }
          div[style*="left: 40px"] { left: 30px !important; }
        }
      `}</style>
    </section>
  );
}

export default MobileProcess;
