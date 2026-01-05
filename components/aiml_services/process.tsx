import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Clock,
  Database,
  Code,
  BrainCircuit,
  Activity,
  Settings,
} from 'lucide-react';

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

function Process() {
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

    document.querySelectorAll('.process-step-ai').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      number: 1,
      icon: <Database size={24} />,
      title: 'Exploratory Stage',
      duration: 'Strategic Foundation & Data Audit',
      description:
        'The foundational step where we identify AI/ML opportunities. We analyze data quality, variety, and existing IT infrastructure to build a roadmap.',
      items: [
        'Analyze existing data volume, variety, and sources',
        'Collect, clean, and preprocess training data',
        'Identify specific AI-addressable business challenges',
        'Access IT infrastructure for AI integration compatibility',
        'Define system architecture and technical stack',
        'Develop detailed roadmap with milestones and goals',
      ],
    },
    {
      number: 2,
      icon: <Code size={24} />,
      title: 'Design and Development',
      duration: 'Framework & Backend Architecture',
      description:
        'Developing the operational framework, including user interfaces and high-performance backend systems.',
      items: [
        'User interface design and mockup creation',
        'Integration architecture with existing systems',
        'High-performance backend system development',
        'Comprehensive modular testing protocols',
      ],
    },
    {
      number: 3,
      icon: <BrainCircuit size={24} />,
      title: 'Model Selection and Training',
      duration: 'Intelligence Engineering',
      description:
        'Establishing accuracy criteria and training specific ML models based on efficiency and scalability requirements.',
      items: [
        'Model selection: Supervised, Deep Learning, or Reinforcement',
        'Preparation of training, validation, and testing datasets',
        'Hyper-parameter tuning and rigorous evaluation',
        'Full documentation of training results and iterations',
      ],
    },
    {
      number: 4,
      icon: <Activity size={24} />,
      title: 'Deployment and Operational Integrity',
      duration: 'Live Environment Transition',
      description:
        'Transitioning the solution from testing to live operational use with full data migration and monitoring.',
      items: [
        'Detailed deployment planning and environmental setup',
        'Live model deployment and system integration',
        'Secure data migration and logging configuration',
        'Stakeholder training and post-deployment monitoring',
      ],
    },
    {
      number: 5,
      icon: <Settings size={24} />,
      title: 'Maintenance and Optimization',
      duration: 'Continuous Improvement',
      description:
        'Monitoring system performance after deployment and adjusting logic based on real-world feedback and data performance.',
      items: [
        'Continuous fine-tuning and calibration',
        'Performance monitoring based on live data',
        'Iterative improvement based on user feedback',
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
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            Crestcode's AI{' '}
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
            A polished set of technical activities refined to deliver
            high-intelligence software within predictable, enterprise-grade
            timeframes.
          </p>
        </div>

        {/* TIMELINE STEPS */}
        <div style={{ position: 'relative' }}>
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              data-section={phase.number}
              className="process-step-ai"
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
                {/* NUMBER BADGE */}
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
                      ? `0 10px 25px -5px ${COLORS.primary}44`
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

                {/* CONTENT CARD */}
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '24px' }}>
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

                  <p
                    style={{
                      fontSize: '16px',
                      color: COLORS.textMuted,
                      lineHeight: '1.7',
                      marginBottom: '24px',
                      fontWeight: 500,
                    }}>
                    {phase.description}
                  </p>

                  <ul
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '12px',
                      padding: 0,
                      listStyle: 'none',
                    }}>
                    {phase.items &&
                      phase.items.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            background: 'rgba(255,255,255,0.7)',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: `1px solid ${COLORS.border}`,
                            transition: 'transform 0.3s ease',
                          }}>
                          <Check
                            size={16}
                            color={COLORS.primary}
                            style={{ marginTop: '3px' }}
                            strokeWidth={3}
                          />
                          <span
                            style={{
                              fontSize: '14px',
                              color: COLORS.textBlack,
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
      `}</style>
    </section>
  );
}

export default Process;
