'use client';

import React from 'react';
import {
  MessageSquare,
  Building2,
  Network,
  Monitor,
  GraduationCap,
  type LucideIcon
} from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    MessageSquare,
    Building2,
    Network,
    Monitor,
    GraduationCap,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default MessageSquare`);
    return MessageSquare;
  }
  
  return icon;
};

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#FFFFFF',
  primary: '#2563EB', // Precision Blue
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  cardBg: '#F8FAFC', // Slate 50 for cards
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

function AIServices() {
  const { config } = useAdmin();
  const SERVICES_DATA = config?.aiml?.SERVICES_DATA;
  console.log(SERVICES_DATA)
  
  if (!SERVICES_DATA) return null;
  
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        padding: '40px 24px',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: COLORS.textBlack,
            marginBottom: '64px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}>
          {SERVICES_DATA.header.mainText}{' '}
          <span style={{ color: COLORS.primary }}>{SERVICES_DATA.header.highlightText}</span>
        </h1>

        {/* SERVICES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
          {SERVICES_DATA.services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENT FOR CLEANER RENDERING ---
interface ServiceItemProps {
  service: {
    icon: string;
    title: string;
    description: string;
  }
}

function ServiceItem({ service }: ServiceItemProps) {
  const Icon = getIconComponent(service.icon);

  return (
    <div
      className="service-card-industrial"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: COLORS.cardBg,
        borderRadius: '12px',
        padding: '40px',
        transition: 'all 0.3s ease-out',
        cursor: 'pointer',
      }}>
      <div style={{ marginBottom: '24px' }}>
        <Icon
          size={48}
          strokeWidth={1.5}
          style={{
            color: COLORS.primary,
          }}
          className="icon-animate"
        />
      </div>

      <h2
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: COLORS.textBlack,
          marginBottom: '16px',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
        }}>
        {service.title}
      </h2>

      <p
        style={{
          fontSize: '15px',
          color: COLORS.textMuted,
          lineHeight: 1.7,
          margin: 0,
          fontWeight: 450,
        }}>
        {service.description}
      </p>
    </div>
  );
}

export default AIServices;