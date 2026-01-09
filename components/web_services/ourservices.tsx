'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Ruler, Monitor, Settings, Users, Check, Search, Lightbulb, PenTool, Terminal, ShieldCheck, Rocket, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    FileText,
    Ruler,
    Monitor,
    Settings,
    Users,
    Search,
    Lightbulb,
    PenTool,
    Terminal,
    ShieldCheck,
    Rocket,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default FileText`);
    return FileText;
  }
  
  return icon;
};

// --- TYPE DEFINITIONS ---
interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  points: string[];
  image: string;
}

interface TransformedServiceItem extends Omit<ServiceItem, 'icon'> {
  icon: LucideIcon;
}

interface ServicesData {
  header: {
    title: string;
    accent: string;
  };
  list: ServiceItem[];
}

// --- DESIGN TOKENS ---
const COLORS = {
  bgDeep: '#020617',
  primary: '#4F46E5',
  textWhite: '#F8FAFC',
  textDim: '#94A3B8',
  border: 'rgba(255, 255, 255, 0.08)',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function OurServices() {
  const { config } = useAdmin();
  const SERVICES_DATA = config?.web?.SERVICES_DATA;
  console.log(SERVICES_DATA)
  
  if (!SERVICES_DATA) return null;
  
  const [activeTab, setActiveTab] = useState(SERVICES_DATA.list[0].id);
  const current = SERVICES_DATA.list.find(s => s.id === activeTab)!;

  return (
    <section style={{
      backgroundColor: COLORS.bgDeep,
      color: COLORS.textWhite,
      fontFamily: FONT_PRIMARY,
      padding: '100px 24px',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textDim}15 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: COLORS.textWhite,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
          }}>
            {SERVICES_DATA.header.title}{' '}
            <span style={{ color: COLORS.primary }}>{SERVICES_DATA.header.accent}</span>
          </h1>
        </div>

        {/* TAB NAVIGATION */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '12px',
          marginBottom: '80px',
          borderBottom: `1px solid ${COLORS.border}`,
          paddingBottom: '24px',
        }}>
          {SERVICES_DATA.list.map((service) => (
            <TabButton 
              key={service.id} 
              service={{
                ...service,
                icon: getIconComponent(service.icon)
              }} 
              isActive={activeTab === service.id} 
              onClick={() => setActiveTab(service.id)} 
            />
          ))}
        </div>

        {/* CONTENT AREA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <ServiceDetails service={{
              ...current,
              icon: getIconComponent(current.icon)
            }} />
            <ServiceImage service={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function TabButton({ service, isActive, onClick }: { service: TransformedServiceItem; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        opacity: isActive ? 1 : 0.4,
        position: 'relative',
        transition: '0.3s opacity',
      }}>
      <div style={{ color: isActive ? COLORS.primary : COLORS.textWhite }}>
        <service.icon size={32} />
      </div>
      <span style={{
        fontSize: '14px',
        fontWeight: 700,
        color: isActive ? COLORS.textWhite : COLORS.textDim,
        textAlign: 'center',
      }}>
        {service.title}
      </span>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          style={{
            position: 'absolute',
            bottom: '-25px',
            width: '100%',
            height: '2px',
            backgroundColor: COLORS.primary,
            boxShadow: `0 0 15px ${COLORS.primary}`,
          }}
        />
      )}
    </button>
  );
}

function ServiceDetails({ service }: { service: TransformedServiceItem }) {
  return (
    <div>
      <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>{service.title}</h2>
      <p style={{
        fontSize: '18px',
        color: COLORS.textDim,
        lineHeight: '1.7',
        marginBottom: '40px',
        fontWeight: 500,
      }}>
        {service.description}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {service.points.map((point: string, i: number) => (
          <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
            <Check size={18} color={COLORS.primary} strokeWidth={3} />
            <span style={{ fontSize: '15px', fontWeight: 500 }}>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceImage({ service }: { service: ServiceItem }) {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={service.image}
        alt={service.title}
        style={{
          width: '100%',
          height: '480px',
          objectFit: 'cover',
          borderRadius: '24px',
          border: `1px solid ${COLORS.border}`,
          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6)',
        }}
      />
      {/* Industrial Accent Decoration */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        borderRight: `4px solid ${COLORS.primary}`,
        borderBottom: `4px solid ${COLORS.primary}`,
        borderRadius: '0 0 24px 0',
        opacity: 0.5
      }} />
    </div>
  );
}