'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- TYPE DEFINITIONS ---
interface MobileHeroData {
  breadcrumbs: Array<{ label: string; active: boolean }>;
  content: {
    titleAccent: string;
    titleMain: string;
    titleMuted: string;
    description: string;
    ctaLabel: string;
  };
  rating: {
    score: string;
    label: string;
    subLabel: string;
    starCount: number;
  };
  design: {
    bgGradient: string;
    primary: string;
    textBlack: string;
    textMuted: string;
    border: string;
  };
}

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function MobileHero() {
  const { config } = useAdmin();
  const HERO_DATA = config?.mobile?.HERO_DATA;
  console.log(HERO_DATA)

  if (!HERO_DATA) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        background: HERO_DATA.design.bgGradient,
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
            backgroundImage: `linear-gradient(${HERO_DATA.design.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${HERO_DATA.design.textMuted}11 1px, transparent 1px)`,
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
          
          {/* LEFT CONTENT: MOBILE CORE MESSAGE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            
            {/* BREADCRUMB */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '40px',
              }}>
              {HERO_DATA.breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: HERO_DATA.design.textMuted }}>
                    {crumb.label}
                  </span>
                  {idx < HERO_DATA.breadcrumbs.length - 1 && (
                    <ChevronRight size={14} color={HERO_DATA.design.textMuted} />
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
                fontWeight: 800,
                color: HERO_DATA.design.textBlack,
                lineHeight: 1,
                letterSpacing: '-0.06em',
                marginBottom: '32px',
              }}>
              <span style={{ color: HERO_DATA.design.primary }}>{HERO_DATA.content.titleAccent}</span>
              <br />
              {HERO_DATA.content.titleMain}{' '}
              <span style={{ fontWeight: 300, color: HERO_DATA.design.textMuted }}>
                {HERO_DATA.content.titleMuted}
              </span>
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                color: HERO_DATA.design.textMuted,
                lineHeight: 1.6,
                marginBottom: '48px',
                maxWidth: '650px',
                fontWeight: 450,
              }}>
              {HERO_DATA.content.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '48px',
              }}>
              <button
                style={{
                  backgroundColor: HERO_DATA.design.textBlack,
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
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = HERO_DATA.design.primary)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = HERO_DATA.design.textBlack)}
              >
                {HERO_DATA.content.ctaLabel}
              </button>
            </motion.div>

            {/* RATING */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(HERO_DATA.rating.starCount)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" stroke="none" />
                ))}
              </div>
              <span style={{ fontWeight: 700, color: HERO_DATA.design.textBlack }}>
                {HERO_DATA.rating.score} {HERO_DATA.rating.label}
              </span>
              <span
                style={{
                  width: '1px',
                  height: '20px',
                  background: HERO_DATA.design.border,
                }}
              />
              <span style={{ color: HERO_DATA.design.textMuted, fontSize: '14px' }}>
                {HERO_DATA.rating.subLabel}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}