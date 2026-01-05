'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, Check } from 'lucide-react';

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

export default function ServiceModels() {
  return (
    <section
      style={{
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* ARCHITECTURAL BACKGROUND GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1250px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        {/* CENTERED HEADER */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '50px',
            maxWidth: '900px',
            margin: '0 auto 80px auto',
          }}>
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
              lineHeight: 1.1,
              textTransform: 'lowercase', // Matches your "which product..." casing
            }}>
            Which product development services{' '}
            <span style={{ color: COLORS.primary }}>model</span> you need?
          </motion.h1>
          <div
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: COLORS.primary,
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* SERVICE MODELS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
          {/* MODEL 1: OUTSOURCING */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            style={{
              backgroundColor: COLORS.white,
              padding: '38px',
              borderRadius: '24px',
              border: `1px solid ${COLORS.border}`,
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
            }}>
            <div
              style={{
                color: COLORS.primary,
                marginBottom: '32px',
                background: `${COLORS.primary}08`,
                padding: '16px',
                borderRadius: '14px',
                width: 'fit-content',
                border: `1px solid ${COLORS.primary}15`,
              }}>
              <Settings size={32} strokeWidth={1.5} />
            </div>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: COLORS.textBlack,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}>
              Product Development Outsourcing
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: COLORS.textMuted,
                lineHeight: '1.7',
                marginBottom: '32px',
                fontWeight: 500,
                flexGrow: 1,
              }}>
              Transform your vision into fully-fledged software. Our expert team
              leads you through the entire development lifecycle, aligning
              specialized technology with your core business goals.
            </p>

            <ul
              style={{
                padding: 0,
                margin: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
              {[
                'Full-cycle product development',
                'Advanced Tech: AI, ML, Computer Vision',
                'Refined engineering processes',
                'Cost-effective scalable solutions',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                  <Check size={16} color={COLORS.primary} strokeWidth={3} />
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
          </motion.div>

          {/* MODEL 2: AUGMENTATION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            style={{
              backgroundColor: COLORS.white,
              padding: '38px',
              borderRadius: '24px',
              border: `1px solid ${COLORS.border}`,
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
            }}>
            <div
              style={{
                color: COLORS.primary,
                marginBottom: '32px',
                background: `${COLORS.primary}08`,
                padding: '16px',
                borderRadius: '14px',
                width: 'fit-content',
                border: `1px solid ${COLORS.primary}15`,
              }}>
              <Users size={32} strokeWidth={1.5} />
            </div>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: COLORS.textBlack,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}>
              Staff Augmentation
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: COLORS.textMuted,
                lineHeight: '1.7',
                marginBottom: '32px',
                fontWeight: 500,
                flexGrow: 1,
              }}>
              Seamlessly extend your in-house capabilities with top-tier
              specialists. We adjust to your internal schedules and workflows to
              eliminate specialized skill gaps instantly.
            </p>

            <ul
              style={{
                padding: 0,
                margin: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
              {[
                'Flexible short/long-term cooperation',
                'Senior-level technical specialists',
                'Developers, Designers, QA & PMs',
                'Rapid on-demand team scaling',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                  <Check size={16} color={COLORS.primary} strokeWidth={3} />
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
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}
