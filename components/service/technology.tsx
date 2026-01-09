'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Server, Component, Gem } from 'lucide-react';
import { useAdmin } from '../admin/context';
import Link from 'next/link';

const ICON_MAP = {
  Coffee: <Coffee size={32} />,
  Server: <Server size={32} />,
  Component: <Component size={32} />,
  Gem: <Gem size={32} />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- DATA CONFIGURATION ---
// Data will be imported from config

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

export default function TechnologiesSection() {
  const { config } = useAdmin();
  const TECH_CONTENT = config?.service?.Technology;
  
  if (!TECH_CONTENT) return null;
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
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1.5px, transparent 1.5px)`,
          backgroundSize: '50px 50px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            {TECH_CONTENT.header.titlePrefix}
            <span style={{ color: COLORS.primary }}>{TECH_CONTENT.header.titleHighlight}</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '850px',
              margin: '0 auto',
            }}>
            {TECH_CONTENT.header.description}
          </p>
        </motion.div>

        {/* 2-COLUMN TECHNOLOGY BENTO GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '32px',
          }}>
          {TECH_CONTENT.technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: COLORS.white,
                padding: '48px',
                borderRadius: '20px',
                border: `1px solid ${COLORS.border}`,
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                gap: '24px',
                transition: 'all 0.3s ease',
              }}>
              <div
                style={{
                  flexShrink: 0,
                  width: '64px',
                  height: '64px',
                  backgroundColor: `${COLORS.primary}08`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.primary,
                  border: `1px solid ${COLORS.primary}15`,
                }}>
                {ICON_MAP[tech.icon as IconName] || <div style={{width: 32, height: 32}} />}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    marginBottom: '12px',
                    letterSpacing: '-0.02em',
                  }}>
                  {tech.name}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: COLORS.textMuted,
                    lineHeight: '1.7',
                    margin: 0,
                    fontWeight: 500,
                  }}>
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        
        @media (max-width: 600px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}