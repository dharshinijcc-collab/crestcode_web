'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart2, ShieldCheck, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Rocket,
    BarChart2,
    ShieldCheck,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Rocket`);
    return Rocket;
  }
  
  return icon;
};

// --- TYPE DEFINITIONS ---
interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

interface WhyData {
  header: {
    title: string;
    highlight: string;
    description: string;
  };
  stats: StatItem[];
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

export default function WhyCrestcode() {
  const { config } = useAdmin();
  const WHY_DATA = config?.web?.WHY_DATA;
  console.log(WHY_DATA)
  
  if (!WHY_DATA) return null;
  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* 1. ARCHITECTURAL BACKGROUND GRID */}
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
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
            {WHY_DATA.header.title}{' '}
            <span style={{ color: COLORS.primary }}>{WHY_DATA.header.highlight}</span>
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
            {WHY_DATA.header.description}
          </motion.p>
        </div>

        {/* STATS GRID */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
          {WHY_DATA.stats.map((item, index) => (
            <StatCard key={index} item={{
              ...item,
              icon: getIconComponent(item.icon)
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

// --- SUB-COMPONENT: INDIVIDUAL STAT CARD ---
function StatCard({ item, index }: { item: StatItem; index: number }) {
  return (
    <motion.div
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
      }}>
      
      {/* ICON CIRCLE */}
      <div style={{
          color: COLORS.primary,
          marginBottom: '24px',
          background: `${COLORS.primary}08`,
          padding: '16px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <item.icon size={28} />
      </div>

      <div style={{
          fontSize: '48px',
          fontWeight: 800,
          color: COLORS.textBlack,
          marginBottom: '8px',
          letterSpacing: '-0.04em',
        }}>
        {item.value}
      </div>

      <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: COLORS.primary,
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
        {item.label}
      </div>

      <p style={{
          fontSize: '15px',
          color: COLORS.textMuted,
          lineHeight: '1.6',
          margin: 0,
          fontWeight: 500,
        }}>
        {item.description}
      </p>
    </motion.div>
  );
}