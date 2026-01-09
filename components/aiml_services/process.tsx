'use client';

import React, { useEffect, useState } from 'react';
import {
  Check,
  Clock,
  Database,
  Code,
  BrainCircuit,
  Activity,
  Settings,
  type LucideIcon
} from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- TYPE DEFINITIONS ---
interface Phase {
  number: number;
  icon: string;
  title: string;
  duration: string;
  description: string;
  items: string[];
}

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Database,
    Code,
    BrainCircuit,
    Activity,
    Settings,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Database`);
    return Database;
  }
  
  return icon;
};

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

function Process() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const { config } = useAdmin();
  const PROCESS_DATA = config?.aiml?.PROCESS_DATA;
  console.log(PROCESS_DATA)
  
  if (!PROCESS_DATA) return null;

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

    document.querySelectorAll('.process-step-ai').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* ENGINEERING GRID OVERLAY */}
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            {PROCESS_DATA.title.prefix}{' '}
            <span style={{ color: COLORS.primary }}>{PROCESS_DATA.title.highlight}</span>
          </h1>
          <p style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            {PROCESS_DATA.subtitle}
          </p>
        </div>

        {/* TIMELINE */}
        <div style={{ position: 'relative' }}>
          {PROCESS_DATA.phases.map((phase: Phase, index: number) => {
            const isVisible = visibleSections.has(phase.number);
            const Icon = getIconComponent(phase.icon);
            
            return (
              <div
                key={phase.number}
                data-section={phase.number}
                className="process-step-ai"
                style={{
                  position: 'relative',
                  paddingBottom: index === PROCESS_DATA.phases.length - 1 ? 0 : '100px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${index * 100}ms`,
                }}>
                
                {/* Vertical Connector */}
                {index < PROCESS_DATA.phases.length - 1 && (
                  <div style={{
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
                  {/* Badge */}
                  <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: isVisible ? COLORS.primary : COLORS.white,
                      border: `2px solid ${COLORS.primary}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isVisible ? `0 10px 25px -5px ${COLORS.primary}44` : 'none',
                      transition: 'all 0.6s ease',
                      zIndex: 2,
                      color: isVisible ? COLORS.white : COLORS.primary,
                    }}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '24px' }}>
                      <h2 style={{ fontSize: '28px', fontWeight: 800, color: COLORS.textBlack, marginBottom: '8px', letterSpacing: '-0.02em' }}>
                        {phase.title}
                      </h2>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.primary, fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        <Clock size={16} /> {phase.duration}
                      </div>
                    </div>

                    <p style={{ fontSize: '16px', color: COLORS.textMuted, lineHeight: '1.7', marginBottom: '24px', fontWeight: 500 }}>
                      {phase.description}
                    </p>

                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px', padding: 0, listStyle: 'none' }}>
                      {phase.items.map((item: string, i: number) => (
                        <li key={i} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            background: 'rgba(255,255,255,0.7)',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: `1px solid ${COLORS.border}`,
                          }}>
                          <Check size={16} color={COLORS.primary} style={{ marginTop: '3px' }} strokeWidth={3} />
                          <span style={{ fontSize: '14px', color: COLORS.textBlack, fontWeight: 500 }}>{item}</span>
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
      `}</style>
    </section>
  );
}

export default Process;