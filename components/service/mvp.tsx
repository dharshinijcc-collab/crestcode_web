'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightOutlined } from '@ant-design/icons';

// --- INDUSTRIAL THEME TOKENS (Synced with Services) ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC', // Off-white
  textMuted: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const tabs = [
  {
    id: 'enterprise',
    label: 'Enterprise Software',
    content: {
      title: 'Enterprise Software Development',
      description:
        'We build high-performance enterprise software that solves real business problems and handles complex workflows and large-scale data across manufacturing, procurement, finance, sales, and HR.',
    },
  },
  {
    id: 'mvp',
    label: 'MVP Development',
    content: {
      title: 'MVP Engineering for Scale',
      description:
        'We help startups and enterprises validate their ideas quickly and cost-effectively. Our MVP approach focuses on building core features that solve the primary problem, allowing you to test your concept with real users and gather valuable feedback.',
    },
  },
  {
    id: 'saas',
    label: 'SaaS Platforms',
    content: {
      title: 'SaaS Architecture & Development',
      description:
        'Our SaaS services encompass the entire lifecycle of cloud-based solutions. We create scalable, secure platforms with robust multi-tenancy architecture, seamless integrations, and flexible subscription systems.',
    },
  },
  {
    id: 'product',
    label: 'Product Design',
    content: {
      title: 'Comprehensive Product Development',
      description:
        'From concept to market launch, we provide comprehensive product development. Our team combines technical expertise with market insights to build products that resonate with users and drive growth.',
    },
  },
];

export default function TailoredServices() {
  const [activeTab, setActiveTab] = useState('enterprise');
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

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
          bottom: '10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.04) 0%, transparent 70%)',
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
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textWhite,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            From MVPs to{' '}
            <span style={{ color: COLORS.primary }}>enterprise solutions</span>
          </h2>
          <p
            style={{
              color: COLORS.textMuted,
              fontSize: '18px',
              lineHeight: '1.7',
              maxWidth: '850px',
              margin: '0 auto',
            }}>
            We excel in developing software solutions for various business
            stages, combining industrial-grade expertise with a commitment to
            scalability and reliability.
          </p>
        </motion.div>

        {/* INTERACTIVE CONTENT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>
          {/* LEFT: VERTICAL TABS (Side Border Style) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '24px 32px',
                  background:
                    activeTab === tab.id
                      ? 'rgba(79, 70, 229, 0.1)'
                      : 'transparent',
                  border: 'none',
                  borderLeft: `4px solid ${
                    activeTab === tab.id ? COLORS.primary : 'transparent'
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
                      activeTab === tab.id
                        ? COLORS.textWhite
                        : COLORS.textMuted,
                  }}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT: FROSTED GLASS CONTENT AREA */}
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
                <h3
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: COLORS.textWhite,
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                  }}>
                  {activeContent?.title}
                </h3>

                <p
                  style={{
                    color: COLORS.textMuted,
                    fontSize: '18px',
                    lineHeight: '1.8',
                    marginBottom: '40px',
                  }}>
                  {activeContent?.description}
                </p>

                {/* Industrial Execution Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 16px',
                    background: `${COLORS.primary}20`,
                    borderRadius: '8px',
                    border: `1px solid ${COLORS.primary}40`,
                  }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: COLORS.primary,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: COLORS.textWhite,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}>
                    Industrial Standard Execution
                  </span>
                </div>
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
