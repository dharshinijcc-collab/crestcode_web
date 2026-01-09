'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Globe, ShieldCheck, Zap, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Globe,
    ShieldCheck,
    Zap,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Globe`);
    return Globe;
  }
  
  return icon;
};

// --- TYPE DEFINITIONS ---
interface HeroFeature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
}

interface HeroData {
  breadcrumbs: string[];
  heading: {
    primary: string;
    secondary: string;
    accent: string;
  };
  description: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  stats: {
    rating: string;
    label: string;
  };
  features: HeroFeature[];
}

// --- INDUSTRIAL STAND-OUT THEME TOKENS ---
const COLORS = {
  bgGradient: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  primary: '#4F46E5',
  accentRed: '#FF5757',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function WebDevelopmentHero() {
  const { config } = useAdmin();
  const HERO_DATA = config?.web?.HERO_DATA;
  console.log(HERO_DATA)
  
  if (!HERO_DATA) return null;
  return (
    <section style={{
      minHeight: '100vh',
      background: COLORS.bgGradient,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      fontFamily: FONT_PRIMARY,
      padding: '100px 24px',
    }}>
      <BackgroundMesh />

      <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Breadcrumbs items={HERO_DATA.breadcrumbs} />

            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              lineHeight: 1,
              letterSpacing: '-0.06em',
              marginBottom: '32px',
            }}>
              <span style={{ color: COLORS.primary }}>{HERO_DATA.heading.primary}</span>
              <br />
              {HERO_DATA.heading.secondary}{' '}
              <span style={{ fontWeight: 300, color: COLORS.textMuted }}>
                {HERO_DATA.heading.accent}
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              color: COLORS.textMuted,
              lineHeight: 1.6,
              marginBottom: '48px',
              maxWidth: '650px',
              fontWeight: 450,
            }}>
              {HERO_DATA.description}
            </p>

            <ActionButtons />

            <TrustBar />
          </motion.div>

          {/* RIGHT GLASS CARD */}
          <div className="hidden lg:block">
             <GlassFeatureCard features={HERO_DATA.features.map(feature => ({
               ...feature,
               icon: getIconComponent(feature.icon)
             }))} />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function BackgroundMesh() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
      }} />
    </div>
  );
}

function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
      {items.map((item: string, i: number) => (
        <React.Fragment key={item}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: COLORS.textMuted }}>{item}</span>
          {i < items.length - 1 && <ChevronRight size={14} color={COLORS.textMuted} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function ActionButtons() {
  const { config } = useAdmin();
  const HERO_DATA = config?.web?.HERO_DATA;
  
  if (!HERO_DATA) return null;
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
      <button style={{
        backgroundColor: COLORS.textBlack,
        color: '#FFF',
        border: 'none',
        padding: '20px 44px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: '0 20px 40px -12px rgba(2, 6, 23, 0.3)',
      }}>{HERO_DATA.buttons.primary}</button>
      <button style={{
        backgroundColor: COLORS.white,
        color: COLORS.textBlack,
        border: `1px solid ${COLORS.border}`,
        padding: '20px 44px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 700,
        cursor: 'pointer',
      }}>{HERO_DATA.buttons.secondary}</button>
    </div>
  );
}

function TrustBar() {
  const { config } = useAdmin();
  const HERO_DATA = config?.web?.HERO_DATA;
  
  if (!HERO_DATA) return null;
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '2px' }}>
        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFB800" stroke="none" />)}
      </div>
      <span style={{ fontWeight: 700, color: COLORS.textBlack }}>{HERO_DATA.stats.rating}</span>
      <div style={{ width: '1px', height: '20px', background: COLORS.border }} />
      <span style={{ color: COLORS.textMuted, fontSize: '14px' }}>{HERO_DATA.stats.label}</span>
    </div>
  );
}

function GlassFeatureCard({ features }: { features: HeroFeature[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(24px)',
        border: `1px solid ${COLORS.white}`,
        padding: '50px',
        borderRadius: '32px',
        boxShadow: '0 50px 100px -20px rgba(0,0,0,0.12)',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {features.map((f: HeroFeature, i: number) => {
          const Icon = f.icon;
          
          return (
            <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ background: f.color, padding: '14px', borderRadius: '14px', color: 'white' }}>
                <Icon size={24} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 800, fontSize: '19px' }}>{f.title}</p>
                <p style={{ margin: 0, color: COLORS.textMuted, fontSize: '13px' }}>{f.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}