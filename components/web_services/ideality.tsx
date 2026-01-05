'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart2, ShieldCheck } from 'lucide-react';

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

const stats = [
  {
    icon: <Rocket size={28} />,
    value: '30%',
    label: 'Faster Market Entry',
    description:
      'Reduction in time-to-market through optimized custom development workflows.',
  },
  {
    icon: <BarChart2 size={28} />,
    value: '25%',
    label: 'Overhead Reduction',
    description:
      'Lower project costs through strategic technical consulting and lean architecture.',
  },
  {
    icon: <ShieldCheck size={28} />,
    value: '90%',
    label: 'Success Rate',
    description:
      'Proven track record in reviving stalled projects via technical rescue missions.',
  },
];

export default function WhyCrestcode() {
  return (
    <section
      style={{
        padding: '40px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* ARCHITECTURAL BACKGROUND */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.5,
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
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            Why build with{' '}
            <span style={{ color: COLORS.primary }}>Crestcode?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: '19px',
              color: COLORS.textMuted,
              lineHeight: '1.7',
              maxWidth: '900px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            Our specialized engineering team brings extensive experience across
            global markets. We select tech stacks with surgical precision,
            ensuring scalability and long-term resource efficiency for your
            future products.
          </motion.p>
        </div>

        {/* HIGHLIGHTED STATS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: COLORS.white,
                padding: '38px 28px',
                borderRadius: '24px',
                border: `1px solid ${COLORS.border}`,
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}>
              <div
                style={{
                  color: COLORS.primary,
                  marginBottom: '24px',
                  background: `${COLORS.primary}08`,
                  padding: '16px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.icon}
              </div>

              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  color: COLORS.textBlack,
                  marginBottom: '8px',
                  letterSpacing: '-0.04em',
                }}>
                {item.value}
              </div>

              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: COLORS.primary,
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                {item.label}
              </div>

              <p
                style={{
                  fontSize: '15px',
                  color: COLORS.textMuted,
                  lineHeight: '1.6',
                  margin: 0,
                  fontWeight: 500,
                }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}
