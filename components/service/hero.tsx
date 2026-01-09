'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRight, Star, Code2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdmin } from '../admin/context';

// --- DATA CONFIGURATION ---
const COLORS = {
  bgGradient: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  primary: '#4F46E5',
  accentRed: '#FF5757',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

// --- CONFIG NAVIGATION FUNCTION ---
const navigateToConfig = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

// --- ICON MAPPING ---
const ICON_MAP = {
  Code2: <Code2 />,
  ShieldCheck: <ShieldCheck />,
  Zap: <Zap />,
} as const;

type IconName = keyof typeof ICON_MAP;

export default function SoftwareServicesHero() {
  const { config } = useAdmin();
  const HERO_DATA = config?.service?.hero;
  const [isMobile, setIsMobile] = useState(false);
  console.log("HERO_DATA",HERO_DATA)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!HERO_DATA) return null;

  // --- SHARED STYLES ---
  const gridLayout: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
    alignItems: 'center',
  };

  const breadcrumbStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '40px',
    fontSize: '12px',
    fontWeight: 600,
    color: COLORS.textMuted
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
    fontWeight: 800,
    color: COLORS.textBlack,
    lineHeight: 1,
    letterSpacing: '-0.06em',
    marginBottom: '32px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
    color: COLORS.textMuted,
    lineHeight: 1.6,
    marginBottom: '48px',
    maxWidth: '650px',
    fontWeight: 450,
  };

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: COLORS.textBlack,
    color: '#FFF',
    border: 'none',
    padding: '20px 44px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 20px 40px -12px rgba(2, 6, 23, 0.3)',
    transition: '0.3s all',
  };

  const dividerStyle: React.CSSProperties = {
    width: '1px',
    height: '20px',
    background: COLORS.border,
  };

  const glassCardStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(24px)',
    border: `1px solid ${COLORS.white}`,
    padding: '50px',
    borderRadius: '32px',
    boxShadow: '0 50px 100px -20px rgba(0,0,0,0.12)',
    position: 'relative',
  };

  const iconBoxStyle: React.CSSProperties = {
    padding: '14px',
    borderRadius: '14px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        background: COLORS.bgGradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        fontFamily: FONT_PRIMARY,
        padding: '100px 24px',
      }}>
      
      {/* 1. ARCHITECTURAL PATTERN OVERLAY */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
          }}
        />
      </div>

      <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={gridLayout}>
          
          {/* LEFT CONTENT */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div style={breadcrumbStyle}>
              {HERO_DATA.breadcrumbs.parent}
              <ChevronRight size={14} color={COLORS.textMuted} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: COLORS.textMuted }}>
                {HERO_DATA.breadcrumbs.current}
              </span>
            </motion.div>

            <motion.h1 style={headingStyle}>
              <span style={{ color: COLORS.primary }}>{HERO_DATA.heading.highlight}</span>
              <br />
              {HERO_DATA.heading.main}{' '}
              <span style={{ fontWeight: 300, color: COLORS.textMuted }}>
                {HERO_DATA.heading.suffix}
              </span>
            </motion.h1>

            <motion.p style={descriptionStyle}>
              {HERO_DATA.description}
            </motion.p>

            <motion.div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <button
                style={ctaButtonStyle}
                onClick={() => {
                  const target = document.getElementById(HERO_DATA.cta.targetId);
                  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.textBlack)}>
                {HERO_DATA.cta.text}
              </button>
            </motion.div>

            <motion.div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" stroke="none" />
                ))}
              </div>
              <span style={{ fontWeight: 700, color: COLORS.textBlack }}>
                {HERO_DATA.rating.score}
              </span>
              <span style={dividerStyle} />
              <span style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                {HERO_DATA.rating.certification}
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: THE GLASS FEATURE CARD */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero-glass-card">
              <div style={glassCardStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  {HERO_DATA.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      <div style={{ ...iconBoxStyle, background: feature.color }}>
                        {typeof feature.icon === 'string' ? ICON_MAP[feature.icon as IconName] : feature.icon}
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 800, fontSize: '19px' }}>{feature.title}</p>
                        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: '13px' }}>{feature.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>

    </section>
  );
}