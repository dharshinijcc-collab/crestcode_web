'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../admin/context';

// --- TYPE DEFINITIONS ---
interface ScaleTab {
  id: string;
  label: string;
  title: string;
  description: string;
}

interface ScaleData {
  header: {
    prefix: string;
    highlight: string;
    description: string;
  };
  tabs: ScaleTab[];
  footerBadge: string;
}

// --- INDUSTRIAL THEME TOKENS ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC', // Off-white
  textMuted: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

export default function BusinessScaleTabs() {
  const [activeTab, setActiveTab] = useState('enterprise');
  const { config } = useAdmin();
  const SCALE_DATA = config?.aiml?.SCALE_DATA;
  console.log(SCALE_DATA);

  if (!SCALE_DATA) return null;

  const activeContent = SCALE_DATA.tabs.find((tab: ScaleTab) => tab.id === activeTab);

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDark,
        padding: '80px 24px',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ARCHITECTURAL BACKGROUND GLOW */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
        filter: 'blur(120px)',
        zIndex: 0,
      }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: COLORS.textWhite,
            letterSpacing: '-0.04em',
            marginBottom: '24px',
          }}>
            {SCALE_DATA.header.prefix}{' '}
            <span style={{ color: COLORS.primary }}>{SCALE_DATA.header.highlight}</span>
          </h2>
          <p style={{
            color: COLORS.textMuted,
            fontSize: '18px',
            lineHeight: '1.7',
            maxWidth: '850px',
            margin: '0 auto',
            fontWeight: 500,
          }}>
            {SCALE_DATA.header.description}
          </p>
        </motion.div>

        {/* INTERACTIVE GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* LEFT: VERTICAL TABS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {SCALE_DATA.tabs.map((tab: ScaleTab) => (
              <ScaleTabButton
                key={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          {/* RIGHT: CONTENT AREA */}
          <ScaleContentCard
            activeId={activeTab}
            title={activeContent?.title}
            description={activeContent?.description}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function ScaleTabButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '24px 32px',
        background: isActive ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
        border: 'none',
        borderLeft: `4px solid ${isActive ? COLORS.primary : 'transparent'}`,
        cursor: 'pointer',
        transition: '0.3s all cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: FONT_FAMILY,
      }}
    >
      <span style={{
        fontSize: '20px',
        fontWeight: 700,
        color: isActive ? COLORS.textWhite : COLORS.textMuted,
      }}>
        {label}
      </span>
    </button>
  );
}

function ScaleContentCard({ activeId, title, description }: { activeId: string; title?: string; description?: string }) {
  const { config } = useAdmin();
  const SCALE_DATA = config?.aiml?.SCALE_DATA;

  if (!SCALE_DATA) return null;

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.02)',
      border: `1px solid ${COLORS.border}`,
      borderRadius: '24px',
      padding: '56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backdropFilter: 'blur(120px)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}>
          <h3 style={{
              fontSize: '32px',
              fontWeight: 800,
              color: COLORS.textWhite,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}>
            {title}
          </h3>

          <p style={{
              color: COLORS.textMuted,
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '40px',
              fontWeight: 450,
            }}>
            {description}
          </p>

          <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              background: `${COLORS.primary}20`,
              borderRadius: '8px',
              border: `1px solid ${COLORS.primary}40`,
            }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLORS.primary }} />
            <span style={{
                fontSize: '12px',
                fontWeight: 800,
                color: COLORS.textWhite,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
              {SCALE_DATA.footerBadge}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}