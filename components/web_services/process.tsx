'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Clock,
  Search,
  Lightbulb,
  PenTool,
  Terminal,
  ShieldCheck,
  Rocket,
  type LucideIcon
} from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Check,
    Clock,
    Search,
    Lightbulb,
    PenTool,
    Terminal,
    ShieldCheck,
    Rocket,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Search`);
    return Search;
  }
  
  return icon;
};

// --- TYPE DEFINITIONS ---
interface ProcessPhase {
  number: number;
  icon: string;
  title: string;
  duration: string;
  items: string[];
}

interface TransformedProcessPhase extends Omit<ProcessPhase, 'icon'> {
  icon: LucideIcon;
}

interface ProcessData {
  header: {
    title: string;
    accent: string;
    description: string;
  };
  phases: ProcessPhase[];
}

// --- DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9',
  primary: '#4F46E5',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function WebProcess() {
  const { config } = useAdmin();
  const PROCESS_DATA = config?.web?.PROCESS_DATA;
  console.log(PROCESS_DATA)
  
  if (!PROCESS_DATA) return null;
  
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.getAttribute('data-step'));
            setVisibleSteps((prev) => prev.includes(stepId) ? prev : [...prev, stepId]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.process-step-trigger').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      padding: '100px 24px',
      backgroundColor: COLORS.bgBase,
      fontFamily: FONT_PRIMARY,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BACKGROUND BLUEPRINT GRID */}
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
            {PROCESS_DATA.header.title} <span style={{ color: COLORS.primary }}>{PROCESS_DATA.header.accent}</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: COLORS.textMuted,
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto',
            fontWeight: 500,
          }}>
            {PROCESS_DATA.header.description}
          </p>
        </div>

        {/* TIMELINE */}
        <div style={{ position: 'relative' }}>
          {PROCESS_DATA.phases.map((phase, index) => (
            <ProcessStep 
              key={phase.number} 
              phase={{
                ...phase,
                icon: getIconComponent(phase.icon)
              }} 
              isLast={index === PROCESS_DATA.phases.length - 1}
              isVisible={visibleSteps.includes(phase.number)}
            />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENT: STEP ITEM ---

function ProcessStep({ phase, isLast, isVisible }: { phase: TransformedProcessPhase; isLast: boolean; isVisible: boolean }) {
  return (
    <div
      data-step={phase.number}
      className="process-step-trigger"
      style={{
        position: 'relative',
        paddingBottom: isLast ? 0 : '80px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        gap: '40px',
      }}>
      
      {/* CONNECTOR LINE */}
      {!isLast && (
        <div style={{
            position: 'absolute',
            left: '40px',
            top: '80px',
            bottom: 0,
            width: '2px',
            background: `linear-gradient(to bottom, ${COLORS.primary}, transparent)`,
            opacity: 0.3,
          }}
        />
      )}

      {/* ICON BADGE */}
      <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: isVisible ? COLORS.primary : COLORS.white,
          border: `2px solid ${COLORS.primary}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: isVisible ? COLORS.white : COLORS.primary,
          boxShadow: isVisible ? `0 10px 30px ${COLORS.primary}33` : 'none',
          transition: 'all 0.6s ease',
          zIndex: 2,
        }}>
        <phase.icon size={24} />
      </div>

      {/* CONTENT CARD */}
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: COLORS.textBlack, marginBottom: '4px' }}>
            {phase.title}
          </h2>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: COLORS.primary,
              fontSize: '13px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
            <Clock size={14} /> {phase.duration}
          </div>
        </div>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '10px',
          }}>
          {phase.items.map((item: string, i: number) => (
            <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: COLORS.white,
                padding: '10px 14px',
                borderRadius: '8px',
                border: `1px solid ${COLORS.border}`,
              }}>
              <Check size={14} color={COLORS.primary} strokeWidth={3} />
              <span style={{ fontSize: '14px', fontWeight: 600, color: COLORS.textBlack }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}