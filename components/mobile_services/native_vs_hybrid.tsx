'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Smartphone, Layers, ChevronRight } from 'lucide-react';

// --- INDUSTRIAL THEME TOKENS (Synced with Services & Dark Theme Standard) ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC', // Off-white
  textMuted: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

type TabType = 'native' | 'hybrid';

export default function NativeVsHybrid() {
  const [activeTab, setActiveTab] = useState<TabType>('native');

  const content = {
    native: {
      icon: <Smartphone size={24} />,
      label: 'Native Applications',
      description:
        'Native apps, built specifically for iOS (Swift) or Android (Kotlin), deliver blazing-fast performance by tapping directly into device hardware like cameras or GPS. They offer intuitive interfaces matching platform standards, perfect for high-security banking or healthcare ecosystems.',
      title: 'When to Engineer Native:',
      points: [
        'App demands peak performance and deep hardware integration.',
        'Security and user experience are top mission-critical priorities.',
        'Budget allows for a premium, platform-tailored application.',
      ],
    },
    hybrid: {
      icon: <Layers size={24} />,
      label: 'Hybrid Applications',
      description:
        'Developed with frameworks like React Native or Flutter, hybrid apps use one codebase to run on both iOS and Android. This slashed development costs and speeds up delivery, making it ideal for content-focused apps and rapid market testing.',
      title: 'When to Engineer Hybrid:',
      points: [
        'You need a cost-effective launch for both platforms simultaneously.',
        'Your app focuses on content or e-commerce over heavy device reliance.',
        'Time-to-market outweighs the need for maximum low-level optimization.',
      ],
    },
  };

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDark,
        padding: '40px 24px',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* 1. ARCHITECTURAL BACKGROUND GLOW */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
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
              color: COLORS.textWhite,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            Native vs Hybrid Mobile{' '}
            <span style={{ color: COLORS.primary }}>Apps</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            Choosing the right architecture is critical to technical success. We
            guide you through engineering choices that align with your business
            goals, budget, and growth timeline.
          </p>
        </motion.div>

        {/* COMPARISON INTERFACE GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            // alignItems: 'center',
          }}>
          {/* LEFT: ARCHITECTURAL SELECTORS (Side Border Style) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {(['native', 'hybrid'] as TabType[]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '24px 32px',
                  background:
                    activeTab === type
                      ? 'rgba(79, 70, 229, 0.1)'
                      : 'transparent',
                  border: 'none',
                  borderLeft: `4px solid ${
                    activeTab === type ? COLORS.primary : 'transparent'
                  }`,
                  cursor: 'pointer',
                  transition: '0.3s all cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: FONT_FAMILY,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}>
                  <div
                    style={{
                      color:
                        activeTab === type ? COLORS.primary : COLORS.textMuted,
                    }}>
                    {content[type].icon}
                  </div>
                  <span
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color:
                        activeTab === type
                          ? COLORS.textWhite
                          : COLORS.textMuted,
                    }}>
                    {content[type].label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: FROSTED SPECIFICATION CARD */}

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: `1px solid ${COLORS.border}`,
              borderRadius: '24px',
              padding: '56px',
              minHeight: '420px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}>
                <p
                  style={{
                    fontSize: '17px',
                    color: COLORS.textMuted,
                    lineHeight: '1.8',
                    marginBottom: '40px',
                    fontWeight: 500,
                  }}>
                  {content[activeTab].description}
                </p>

                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: COLORS.textWhite,
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                  }}>
                  {content[activeTab].title}
                </h3>

                <ul
                  style={{
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}>
                  {content[activeTab].points.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '12px',
                      }}>
                      <div
                        style={{
                          marginTop: '4px',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: `${COLORS.primary}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: `1px solid ${COLORS.primary}40`,
                        }}>
                        <Check
                          size={14}
                          color={COLORS.primary}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: '16px',
                          color: COLORS.textWhite,
                          fontWeight: 500,
                          lineHeight: 1.5,
                        }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}
