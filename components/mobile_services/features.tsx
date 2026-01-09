'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Key,
  Navigation,
  Settings,
  Type,
  Image,
  BarChart3,
  Check,
  type LucideIcon
} from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Key,
    Navigation,
    Settings,
    Type,
    Image,
    BarChart3,
    Check,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Key`);
    return Key;
  }
  
  return icon;
};

// --- TYPE DEFINITIONS ---
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

interface FeaturesData {
  header: {
    title: string;
    accent: string;
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

export default function MobileFeatures() {
  const { config } = useAdmin();
  const FEATURES_DATA = config?.mobile?.FEATURES_DATA;
  console.log(FEATURES_DATA)
  
  if (!FEATURES_DATA) return null;

  return (
    <section
      style={{
        backgroundColor: COLORS.bgBase,
        color: COLORS.textBlack,
        fontFamily: FONT_PRIMARY,
        padding: '100px 24px',
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
        
        {/* HEADER */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
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
              letterSpacing: '-0.04em',
              color: COLORS.textBlack,
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            {FEATURES_DATA.header.title}{' '}
            <span style={{ color: COLORS.primary }}>{FEATURES_DATA.header.accent}</span>
          </motion.h1>
        </div>

        {/* FEATURES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
          {FEATURES_DATA.items.map((feature: FeatureItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: COLORS.white,
                padding: '40px',
                borderRadius: '24px',
                border: `1px solid ${COLORS.border}`,
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
              }}>
              
              {/* Icon Container */}
              <div
                style={{
                  color: COLORS.primary,
                  marginBottom: '24px',
                  background: `${COLORS.primary}08`,
                  padding: '12px',
                  borderRadius: '12px',
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${COLORS.primary}15`,
                }}>
                {React.createElement(getIconComponent(feature.icon), { size: 32 })}
              </div>

              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.textBlack,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}>
                {feature.title}
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: COLORS.textMuted,
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontWeight: 500,
                }}>
                {feature.description}
              </p>

              {/* Feature Points List */}
              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                {feature.points.map((point: string, pIndex) => (
                  <li
                    key={pIndex}
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
                        fontWeight: 600,
                      }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
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