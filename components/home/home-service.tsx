'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useAdmin } from '../admin/context';

const ICON_MAP = {
  ArrowRightOutlined: <ArrowRightOutlined />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC', // Off-white
  textMuted: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function Services() {
  const { config } = useAdmin();
  const SERVICES_CONTENT = config?.home?.services;
  console.log("🚀 ~ Services ~ SERVICES_CONTENT:", SERVICES_CONTENT)

  if (!SERVICES_CONTENT) return null;

  const [activeService, setActiveService] = useState(0);

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDark,
        padding: '40px 24px',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* Subtle Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
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
                letterSpacing: '-0.04em',
                marginBottom: '24px',
              }}>
              <span style={{ color: COLORS.primary }}>{SERVICES_CONTENT.header.highlight}</span>{' '}
              <span style={{ color: COLORS.textWhite }}>{SERVICES_CONTENT.header.title}</span>
            </h1>

            <p
              style={{
                color: COLORS.textMuted,
                fontSize: '18px',
                lineHeight: '1.7',
                maxWidth: '900px',
                margin: '0 auto',
              }}>
              {SERVICES_CONTENT.header.description}
            </p>
          </motion.div>

          {/* INTERACTIVE CONTENT GRID */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}>
            {/* LEFT: BUTTON LIST */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {SERVICES_CONTENT.items.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '24px 32px',
                    background:
                      activeService === index
                        ? 'rgba(79, 70, 229, 0.1)'
                        : 'transparent',
                    border: 'none',
                    borderLeft: `4px solid ${activeService === index ? COLORS.primary : 'transparent'
                      }`,
                    cursor: 'pointer',
                    transition: '0.3s all cubic-bezier(0.4, 0, 0.2, 1)',
                    fontFamily: FONT_FAMILY,
                  }}>
                  <span
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color:
                        activeService === index
                          ? COLORS.textWhite
                          : COLORS.textMuted,
                    }}>
                    {service.title}
                  </span>
                </button>
              ))}
            </div>

            {/* RIGHT: CONTENT DISPLAY */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: `1px solid ${COLORS.border}`,
                borderRadius: '24px',
                padding: '48px',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
              }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}>
                  <h2
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: COLORS.textWhite,
                      marginBottom: '24px',
                      letterSpacing: '-0.02em',
                    }}>
                    {SERVICES_CONTENT.items[activeService].title}
                  </h2>
                  <p
                    style={{
                      color: COLORS.textMuted,
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '40px',
                    }}>
                    {SERVICES_CONTENT.items[activeService].description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                    (window.location.href =
                      SERVICES_CONTENT.items[activeService].link || '#')
                    }
                    style={{
                      background: COLORS.primary,
                      color: 'white',
                      border: 'none',
                      padding: '16px 32px',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)',
                    }}>
                    {SERVICES_CONTENT.ctaLabel} <ArrowRightOutlined />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default Services;