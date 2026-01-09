'use client';

import React, { useEffect, useState } from 'react';
import { Check, Clock } from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- TYPE DEFINITIONS ---
interface ProcessPhase {
  number: number;
  title: string;
  duration: string;
  items: string[];
}

interface ProcessData {
  header: {
    title: string;
    accent: string;
    description: string;
  };
  phases: ProcessPhase[];
}

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9',
  primary: '#4F46E5',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function MobileProcess() {
  const { config } = useAdmin();
  const PROCESS_DATA = config?.mobile?.PROCESS_DATA as ProcessData;
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  console.log(PROCESS_DATA)

  if (!PROCESS_DATA || typeof PROCESS_DATA !== 'object' || !('header' in PROCESS_DATA)) return null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-section') || '0');
            setVisibleSections((prev) => new Set([...Array.from(prev), id]));
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

  return (
    <section
      style={{
        padding: '100px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* ENGINEERING GRID OVERLAY */}
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
            {PROCESS_DATA.header.title}{' '}
            <span style={{ color: COLORS.primary }}>{PROCESS_DATA.header.accent}</span>
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
            {PROCESS_DATA.header.description}
          </p>
        </div>

        {/* TIMELINE ARCHITECTURE */}
        <div style={{ position: 'relative' }}>
          {PROCESS_DATA.phases.map((phase, index) => {
            const isVisible = visibleSections.has(phase.number);
            
            return (
              <div
                key={phase.number}
                data-section={phase.number}
                className="mobile-process-step"
                style={{
                  position: 'relative',
                  paddingBottom: index === PROCESS_DATA.phases.length - 1 ? 0 : '100px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${index * 100}ms`,
                }}>
                
                {/* Vertical Connector Line */}
                {index < PROCESS_DATA.phases.length - 1 && (
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

                <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                  {/* CIRCULAR NUMBER BADGE */}
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: isVisible ? COLORS.primary : COLORS.white,
                      border: `2px solid ${COLORS.primary}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isVisible ? `0 10px 20px -5px ${COLORS.primary}66` : 'none',
                      transition: 'all 0.6s ease',
                      zIndex: 2,
                      color: isVisible ? COLORS.white : COLORS.primary,
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
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '16px',
                        padding: 0,
                        margin: 0,
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
                            borderRadius: '12px',
                            border: `1px solid ${COLORS.border}`,
                          }}>
                          <Check size={16} color={COLORS.primary} strokeWidth={3} />
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
            );
          })}
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