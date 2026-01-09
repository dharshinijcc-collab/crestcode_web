'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Database, 
  Lock, 
  Users, 
  CheckCircle2,
  Baby, 
  FileText, 
  Mail, 
  ChevronRight, 
  Eye, 
  Server, 
  UserCheck, 
  AlertCircle,
  User,
  Clock
} from "lucide-react";
import { useAdmin } from './admin/context';

// --- ICON MAPPING ---
const iconMap = {
  ShieldCheck: ShieldCheck,
  Database: Database,
  Lock: Lock,
  Users: Users,
  CheckCircle2: CheckCircle2,
  Baby: Baby,
  FileText: FileText,
  Mail: Mail,
  ChevronRight: ChevronRight,
  Eye: Eye,
  Server: Server,
  UserCheck: UserCheck,
  AlertCircle: AlertCircle,
  User: User,
  Clock: Clock
};

// Icon mapping function
const getIcon = (iconName: string, size: number = 24) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={size} /> : null;
};

// --- DYNAMIC DATA SOURCE ---
const COLORS = {
  heroBg: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  bgBase: '#F3F5F9',
  primary: '#4F46E5',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function PrivacyPolicy() {
  const { config } = useAdmin();
  const PRIVACY_DATA = config?.privacypolicy?.PRIVACY_DATA;
  
  if (!PRIVACY_DATA) return null;
  
  const { hero, philosophy, sections, securityVault, transparency, governance, gridCards, contact, cta } = PRIVACY_DATA;

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '120px 24px 80px', background: COLORS.heroBg, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
          }} />
        </div>
        
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <span style={{ background: COLORS.white, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {PRIVACY_DATA.hero.badge}
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0', lineHeight: 1.1 }}>
            {PRIVACY_DATA.hero.title}<span style={{ color: COLORS.primary }}>{PRIVACY_DATA.hero.titleAccent}</span>
          </motion.h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6 }}>
            Last updated: {PRIVACY_DATA.hero.lastUpdated}. <br/>
            {PRIVACY_DATA.hero.description}
          </p>
        </div>
      </section>

      <main style={{ maxWidth: '1000px', margin: '-40px auto 100px', padding: '0 24px', position: 'relative', zIndex: 20 }}>
        
        {/* 2. CORE PHILOSOPHY CARD */}
        <div style={{ background: COLORS.white, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)', marginBottom: '48px', display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ background: `${COLORS.primary}10`, padding: '16px', borderRadius: '16px', color: COLORS.primary }}>
            {PRIVACY_DATA.philosophy.icon}
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: COLORS.textBlack, marginBottom: '8px' }}>{PRIVACY_DATA.philosophy.title}</h2>
            <p style={{ color: COLORS.textMuted, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>{PRIVACY_DATA.philosophy.description}</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Section 1: Information Acquisition */}
          <section style={{ background: COLORS.white, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: `${COLORS.primary}10`, padding: '8px', borderRadius: '8px', color: COLORS.primary }}>
                {PRIVACY_DATA.sections[0].icon}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>{PRIVACY_DATA.sections[0].title}</h3>
            </div>
            <p style={{ color: COLORS.textMuted, fontWeight: 500, marginBottom: '24px' }}>{PRIVACY_DATA.sections[0].intro}</p>
            <div style={{ display: 'grid', gap: '20px' }}>
              {PRIVACY_DATA.sections[0].items?.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', padding: '20px', background: COLORS.bgBase, borderRadius: '16px' }}>
                  <div style={{ color: COLORS.primary }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '15px' }}>{item.label}</div>
                    <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: 0 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Operational Utilization */}
          <section style={{ background: COLORS.white, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: `${COLORS.primary}10`, padding: '8px', borderRadius: '8px', color: COLORS.primary }}>
                {PRIVACY_DATA.sections[1].icon}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>{PRIVACY_DATA.sections[1].title}</h3>
            </div>
            <ul style={{ padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {PRIVACY_DATA.sections[1].bullets?.map((text, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 600, color: COLORS.textMuted }}>
                  <ChevronRight size={16} color={COLORS.primary} /> {text}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: Security Infrastructure */}
          <section style={{ background: COLORS.textBlack, padding: '48px', borderRadius: '32px', color: COLORS.white, boxShadow: '0 30px 60px -20px rgba(79,70,229,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ color: COLORS.primary }}>{PRIVACY_DATA.securityVault.icon}</div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, margin: 0 }}>{PRIVACY_DATA.securityVault.title}</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
              {PRIVACY_DATA.securityVault.features.map((feat, i) => (
                <div key={i}>
                  <div style={{ color: COLORS.primary, marginBottom: '12px' }}>{feat.icon}</div>
                  <div style={{ fontWeight: 800, marginBottom: '8px' }}>{feat.title}</div>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{feat.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Information Transparency */}
          <section style={{ background: COLORS.white, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: `${COLORS.primary}10`, padding: '8px', borderRadius: '8px', color: COLORS.primary }}>
                {PRIVACY_DATA.transparency.icon}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>{PRIVACY_DATA.transparency.title}</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {PRIVACY_DATA.transparency.blocks.map((block, i) => (
                <div key={i} style={{ padding: '20px', borderLeft: `4px solid ${COLORS.primary}`, background: COLORS.bgBase }}>
                  <div style={{ fontWeight: 800, fontSize: '14px' }}>{block.label}</div>
                  <p style={{ fontSize: '12px', color: COLORS.textMuted, margin: 0 }}>{block.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Governance Rights */}
          <section style={{ background: COLORS.white, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: `${COLORS.primary}10`, padding: '8px', borderRadius: '8px', color: COLORS.primary }}>
                {PRIVACY_DATA.governance.icon}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>{PRIVACY_DATA.governance.title}</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {PRIVACY_DATA.governance.rights.map((right, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px', background: COLORS.bgBase, borderRadius: '10px', fontSize: '14px', fontWeight: 600, color: COLORS.textMuted }}>
                  <CheckCircle2 size={16} color={COLORS.primary} /> {right}
                </div>
              ))}
            </div>
            <p style={{ marginTop: '24px', fontSize: '14px', color: COLORS.textMuted }}>{PRIVACY_DATA.governance.contactPrompt}</p>
          </section>

          {/* Compact Grid Sections (6, 7, 8) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {PRIVACY_DATA.gridCards.map((card) => (
              <div key={card.id} style={{ background: COLORS.white, padding: '32px', borderRadius: '20px', border: `1px solid ${COLORS.border}` }}>
                <div style={{ color: COLORS.primary, marginBottom: '16px' }}>{card.icon}</div>
                <div style={{ fontWeight: 800, marginBottom: '8px' }}>{card.title}</div>
                <p style={{ fontSize: '13px', color: COLORS.textMuted, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>

          {/* Section 9: Contact */}
          <section style={{ background: COLORS.white, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '32px' }}>{PRIVACY_DATA.contact.title}</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Users size={20} color={COLORS.primary} />
                <span style={{ fontWeight: 700, fontSize: '15px' }}>{PRIVACY_DATA.contact.supportLabel}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} color={COLORS.primary} />
                <a href={`mailto:${PRIVACY_DATA.contact.email}`} style={{ fontWeight: 700, fontSize: '15px', color: COLORS.textBlack }}>{PRIVACY_DATA.contact.email}</a>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section style={{ marginTop: '40px', padding: '60px 40px', background: COLORS.heroBg, borderRadius: '32px', textAlign: 'center', border: `1px solid ${COLORS.white}` }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>{PRIVACY_DATA.cta.title}</h2>
            <p style={{ color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto 32px', fontWeight: 500 }}>{PRIVACY_DATA.cta.description}</p>
            <button style={{ background: COLORS.primary, color: COLORS.white, border: 'none', padding: '16px 40px', borderRadius: '12px', fontWeight: 800, cursor: 'pointer', boxShadow: `0 10px 20px ${COLORS.primary}33` }}>
              <Link href={PRIVACY_DATA.cta.link || "/Getintouch"} style={{ color: 'inherit', textDecoration: 'none' }}>{PRIVACY_DATA.cta.buttonText}</Link>
            </button>
          </section>

        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}