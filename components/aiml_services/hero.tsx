'use client';

import React from 'react';
import { ChevronRight, Star, BrainCircuit, Cpu, Zap, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const ICON_MAP = {
  BrainCircuit: <BrainCircuit size={24} />,
  Cpu: <Cpu size={24} />,
  Zap: <Zap size={24} />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- INDUSTRIAL STAND-OUT THEME TOKENS ---
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

// --- DATA CONFIGURATION (JSON TYPE) ---
export default function AIMLHero() {
  const { config } = useAdmin();
  const HERO_CONTENT = config?.aiml?.HERO_CONTENT;
  console.log(HERO_CONTENT)
  
  if (!HERO_CONTENT) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const handleScrollToContact = () => {
    const contactForm = document.getElementById(HERO_CONTENT.cta.targetId);
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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

      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>
          
          {/* LEFT CONTENT */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* BREADCRUMB */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
              {HERO_CONTENT.breadcrumbs.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: COLORS.textMuted }}>
                    {item.label}
                  </span>
                  {idx < HERO_CONTENT.breadcrumbs.length - 1 && (
                    <ChevronRight size={14} color={COLORS.textMuted} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* HEADLINE */}
            <motion.h1
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
                fontWeight: 800,
                color: COLORS.textBlack,
                lineHeight: 1,
                letterSpacing: '-0.06em',
                marginBottom: '32px',
              }}>
              <span style={{ color: COLORS.primary }}>{HERO_CONTENT.headline.highlight}</span>
              <br />
              {HERO_CONTENT.headline.main}{' '}
              <span style={{ fontWeight: 300, color: COLORS.textMuted }}>
                {HERO_CONTENT.headline.muted}
              </span>
            </motion.h1>

            {/* SUBTITLE */}
            <p style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                color: COLORS.textMuted,
                lineHeight: 1.6,
                marginBottom: '48px',
                maxWidth: '650px',
                fontWeight: 450,
              }}>
              {HERO_CONTENT.description}
            </p>

            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <button
                style={{
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
                }}
                onClick={handleScrollToContact}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.textBlack)}>
                {HERO_CONTENT.cta.text}
              </button>
            </div>

            {/* RATING */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" stroke="none" />
                ))}
              </div>
              <span style={{ fontWeight: 700, color: COLORS.textBlack }}>
                {HERO_CONTENT.rating.score}
              </span>
              <div style={{ width: '1px', height: '20px', background: COLORS.border }} />
              <span style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                {HERO_CONTENT.rating.expertise}
              </span>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: TECH CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block">
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(24px)',
                border: `1px solid ${COLORS.white}`,
                padding: '50px',
                borderRadius: '32px',
                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.12)',
                zIndex: 2,
                position: 'relative',
              }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {HERO_CONTENT.techCards.map((card) => {
                  const iconName = card.iconName as IconName;
                  const IconComponent = ICON_MAP[iconName];
                  const iconBg = card.id === 3 ? COLORS.accentRed : card.color;
                  return (
                    <div key={card.id} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      <div style={{
                        background: iconBg,
                        padding: '14px',
                        borderRadius: '14px',
                        color: 'white',
                      }}>
                        {React.cloneElement(IconComponent, { size: 24 })}
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 800, fontSize: '19px' }}>{card.title}</p>
                        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: '13px' }}>{card.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        @media (max-width: 1023px) { .hidden { display: none !important; } }
      `}</style>
    </section>
  );
}