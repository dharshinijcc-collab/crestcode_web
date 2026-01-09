'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Shield, Cloud, Cog, Globe2, Monitor, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Puzzle,
    Shield,
    Cloud,
    Cog,
    Globe2,
    Monitor,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Puzzle`);
    return Puzzle;
  }
  
  return icon;
};

// --- TYPE DEFINITIONS ---
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesData {
  header: {
    title: string;
    highlight: string;
  };
  items: FeatureItem[];
}

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

export default function WebFeatures() {
  const { config } = useAdmin();
  const FEATURES_DATA = config?.web?.FEATURES_DATA;
  console.log(FEATURES_DATA)
  
  if (!FEATURES_DATA) return null;
  return (
    <section
      style={{
        backgroundColor: COLORS.bgBase,
        color: COLORS.textBlack,
        fontFamily: FONT_PRIMARY,
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* 1. ARCHITECTURAL GRID OVERLAY */}
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      <div style={{ maxWidth: '1250px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '900px', margin: '0 auto 100px auto' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: COLORS.textBlack,
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            {FEATURES_DATA.header.title}{' '}
            <span style={{ color: COLORS.primary }}>{FEATURES_DATA.header.highlight}</span>
          </motion.h1>
        </div>

        {/* FEATURES GRID */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
          }}>
          {FEATURES_DATA.items.map((feature, index) => (
            <FeatureItem key={index} feature={{
              ...feature,
              icon: getIconComponent(feature.icon)
            }} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENT: FEATURE ITEM ---
function FeatureItem({ feature, index }: { feature: FeatureItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
      
      {/* ICON WRAPPER */}
      <div style={{
          color: COLORS.primary,
          marginBottom: '32px',
          background: `${COLORS.primary}08`,
          padding: '16px',
          borderRadius: '14px',
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${COLORS.primary}15`,
          transition: 'all 0.3s ease',
        }}>
        <feature.icon size={40} />
      </div>

      {/* TEXT CONTENT */}
      <h2 style={{
          fontSize: '22px',
          fontWeight: 700,
          color: COLORS.textBlack,
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
        {feature.title}
      </h2>

      <p style={{
          fontSize: '16px',
          color: COLORS.textMuted,
          lineHeight: '1.7',
          margin: 0,
          fontWeight: 500,
        }}>
        {feature.description}
      </p>
    </motion.div>
  );
}