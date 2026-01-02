import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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

const tabs = [
  {
    id: 'enterprise',
    label: 'Enterprise software development',
    content: {
      title: 'Enterprise software development',
      description:
        'We build high-performance enterprise software that solves real business problems and handles complex workflows and large-scale data across manufacturing, procurement, finance, sales, and HR.',
    },
  },
  {
    id: 'mvp',
    label: 'MVP development',
    content: {
      title: 'MVP development',
      description:
        'We help startups and enterprises validate their ideas quickly and cost-effectively. Our MVP approach focuses on building core features that solve the primary problem, allowing you to test your concept with real users and gather valuable feedback before full-scale deployment.',
    },
  },
  {
    id: 'saas',
    label: 'SaaS development',
    content: {
      title: 'SaaS development',
      description:
        'Our SaaS services encompass the entire lifecycle of cloud-based solutions. We create scalable, secure platforms with robust multi-tenancy architecture, seamless integrations, and flexible subscription management systems.',
    },
  },
  {
    id: 'product',
    label: 'Product development',
    content: {
      title: 'Product development',
      description:
        'From concept to market launch, we provide comprehensive product development. Our team combines technical expertise with market insights to build products that resonate with users, scale efficiently, and drive business growth.',
    },
  },
];

export default function TailoredServices() {
  const [activeTab, setActiveTab] = useState('enterprise');

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <section
      style={{
        padding: '40px 24px',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: FONT_PRIMARY,
      }}>
      {/* 1. ENGINEERING GRID OVERLAY */}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            From MVPs to{' '}
            <span style={{ color: COLORS.primary }}>enterprise solutions</span>
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
            We excel in developing software solutions for various business
            stages, combining product expertise with a commitment to scalability
            and reliability.
          </p>
        </motion.div>

        {/* INTERACTIVE TABS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}>
          {/* LEFT: VERTICAL TABS */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '24px 32px',
                  background:
                    activeTab === tab.id ? COLORS.white : 'transparent',
                  border: `1px solid ${
                    activeTab === tab.id ? COLORS.border : 'transparent'
                  }`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow:
                    activeTab === tab.id
                      ? '0 10px 20px -10px rgba(0,0,0,0.05)'
                      : 'none',
                }}>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color:
                      activeTab === tab.id ? COLORS.primary : COLORS.textMuted,
                    fontFamily: FONT_PRIMARY,
                  }}>
                  {tab.label}
                </span>
                <ChevronRight
                  size={18}
                  style={{
                    opacity: activeTab === tab.id ? 1 : 0,
                    color: COLORS.primary,
                    transition: 'opacity 0.3s',
                  }}
                />
              </motion.button>
            ))}
          </div>

          {/* RIGHT: DYNAMIC CONTENT AREA */}
          <div
            style={{
              background: COLORS.white,
              padding: '56px',
              borderRadius: '24px',
              border: `1px solid ${COLORS.border}`,
              boxShadow: '0 20px 40px -20px rgba(0,0,0,0.08)',
              minHeight: '400px',
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
                    fontSize: '28px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                  }}>
                  {activeContent?.title}
                </h3>
                <p
                  style={{
                    fontSize: '17px',
                    color: COLORS.textMuted,
                    lineHeight: '1.8',
                    margin: 0,
                  }}>
                  {activeContent?.description}
                </p>

                {/* Decorative Technical Badge */}
                <div
                  style={{
                    marginTop: '40px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: `${COLORS.primary}08`,
                    borderRadius: '6px',
                    border: `1px solid ${COLORS.primary}15`,
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
                      fontWeight: 700,
                      color: COLORS.primary,
                      textTransform: 'uppercase',
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}
