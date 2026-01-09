
'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRightOutlined,
  ThunderboltFilled,
  CodeOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { useAdmin } from '../admin/context';

const ICON_MAP = {
  ArrowRightOutlined: <ArrowRightOutlined />,
  SafetyCertificateOutlined: <SafetyCertificateOutlined />,
  GlobalOutlined: <GlobalOutlined />,
  CodeOutlined: <CodeOutlined />,
  ThunderboltFilled: <ThunderboltFilled />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F8FAFC',
  primary: '#4F46E5', // Indigo
  secondary: '#0EA5E9', // Sky Blue
  textMain: '#0F172A',
  textMuted: '#475569',
  border: '#E2E8F0',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";


function MainCompanyHero() {
  const { config } = useAdmin();
  console.log("🚀 ~ MainCompanyHero ~ config:", config)
  const HERO_CONTENT = config?.home?.hero;
  console.log("🚀 ~ MainCompanyHero ~ HERO_CONTENT:", HERO_CONTENT)

  if (!HERO_CONTENT) return null;


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '90px',
        padding: ' 24px',
        fontFamily: FONT_FAMILY,
        paddingBottom: '50px',
        paddingTop: '120px',
      }}>
      {/* 1. ARCHITECTURAL GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.primary}15 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}>
          {/* --- LEFT SIDE: THE ENGINEERING PROMISE --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible">

            <motion.h1
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 800,
                color: COLORS.textMain,
                lineHeight: 1.05,
                letterSpacing: '-0.05em',
                marginBottom: '32px',
              }}>
              {HERO_CONTENT.title.line1} <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                {HERO_CONTENT.title.highlight}
              </span>
              <br />
              {HERO_CONTENT.title.line2}
            </motion.h1>

            <motion.p
              style={{
                fontSize: '1.25rem',
                color: COLORS.textMuted,
                lineHeight: 1.6,
                maxWidth: '600px',
                marginBottom: '48px',
                fontWeight: 500,
              }}>
              {HERO_CONTENT.description}
            </motion.p>

            <motion.div
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {HERO_CONTENT.buttons.map((btn: any, idx: number) => {
                const isValidIcon = btn.iconName && ICON_MAP[btn.iconName as IconName];
                return (
                  <Link key={idx} href={btn.href} scroll={btn.scroll}>
                    <Button
                      type={btn.type}
                      size="large"
                      icon={isValidIcon ? ICON_MAP[btn.iconName as IconName] : null}
                      style={{
                        height: '64px',
                        padding: '0 40px',
                        borderRadius: '12px',
                        fontSize: '18px',
                        fontWeight: idx === 0 ? 700 : 600,
                        backgroundColor: btn.type === 'primary' ? COLORS.primary : 'transparent',
                        border: btn.type === 'default' ? `1px solid ${COLORS.border}` : 'none',
                        boxShadow: btn.type === 'primary' ? `0 20px 40px -10px ${COLORS.primary}44` : 'none',
                      }}>
                      {btn.label}
                    </Button>
                  </Link>
                );
              })}
            </motion.div>

            {/* TRUST INDICATORS */}
            <motion.div
              style={{
                marginTop: '64px',
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      color: COLORS.primary,
                      letterSpacing: '-0.02em',
                    }}>
                    {HERO_CONTENT.stats.value}
                  </span>
                  <div
                    style={{
                      padding: '4px 8px',
                      background: '#10B98115',
                      color: '#10B981',
                      borderRadius: '6px',
                      fontSize: '10px',
                      fontWeight: 800,
                    }}>
                    {HERO_CONTENT.stats.badge}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: COLORS.textMuted,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                  {HERO_CONTENT.stats.label}
                </span>
              </div>
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  background: COLORS.border,
                }}
              />
              <div style={{ display: 'flex', gap: '24px', fontSize: '24px', color: COLORS.textMuted }}>
                {HERO_CONTENT.trustIconNames.map((iconName: string, idx: number) => {
                  const validIcon = ICON_MAP[iconName as IconName];
                  return validIcon ? (
                    <div key={idx}>
                      {validIcon}
                    </div>
                  ) : null;
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: THE TECHNOLOGICAL CANVAS --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}>
            <div>
              <img
                src={HERO_CONTENT.visual.image}
                alt={HERO_CONTENT.visual.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '24px',
                  display: 'block',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              />

              {/* FLOATING TECH BADGE */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-40px',
                  background: 'rgba(2, 6, 23, 0.9)', // Deep Ink
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  padding: '14px 20px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                  zIndex: 20,
                }}>
                <div style={{ position: 'relative', display: 'flex' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      background: '#10B981',
                      borderRadius: '50%',
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      background: '#10B981',
                      borderRadius: '50%',
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#94A3B8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                    {HERO_CONTENT.visual.badgeTitle}
                  </div>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}>
                    {HERO_CONTENT.visual.badgeValue}{' '}
                    <span style={{ color: '#10B981', fontSize: '12px' }}>
                      {HERO_CONTENT.visual.badgeUnit}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* DECORATIVE BACKGROUND BLURS */}
            <div
              style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background:
                  'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 1,
              }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default MainCompanyHero;
