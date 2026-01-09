'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Briefcase, 
  UserCheck, 
  Lightbulb, 
  Users2, 
  Target, 
  Mail,
  Play,
  CheckCircle2,
  Cpu,
  ArrowRight
} from "lucide-react";
import { useAdmin } from './admin/context';

// --- ICON MAPPING ---
const iconMap = {
  Terminal: Terminal,
  Briefcase: Briefcase,
  UserCheck: UserCheck,
  Lightbulb: Lightbulb,
  Users2: Users2,
  Target: Target,
  Mail: Mail,
  Play: Play,
  CheckCircle2: CheckCircle2,
  Cpu: Cpu,
  ArrowRight: ArrowRight
};

// Icon mapping function
const getIcon = (iconName: string, size: number = 24) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={size} /> : null;
};

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

export default function InternshipPage() {
  const { config } = useAdmin();
  const CONTENT = config?.internship?.CONTENT;
  
  if (!CONTENT) return null;
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '120px 24px 80px', background: COLORS.heroBg, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <span style={{ background: COLORS.white, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {CONTENT.hero.badge}
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0' }}>
            {/* Logic to highlight the professional part */}
            {CONTENT.hero.title.split(CONTENT.hero.titleAccent)[0]}
            <span style={{ color: COLORS.primary }}>{CONTENT.hero.titleAccent}</span>
            {CONTENT.hero.title.split(CONTENT.hero.titleAccent)[1]}
          </motion.h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6, marginBottom: '32px' }}>
            {CONTENT.hero.description}
          </p>
          
          <motion.button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            style={{ background: COLORS.primary, color: COLORS.white, border: 'none', padding: '14px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', fontFamily: FONT_PRIMARY, transition: 'all 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            whileHover={{ backgroundColor: '#4338CA', y: -2, boxShadow: '0 8px 25px rgba(79, 70, 229, 0.3)' }}
            whileTap={{ scale: 0.95 }}>
            <Mail size={18} />
            {CONTENT.hero.cta}
          </motion.button>
        </div>
      </section>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 100px' }}>
        
        {/* 2. PROGRAM OVERVIEW */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '80px', marginTop: '-40px', position: 'relative', zIndex: 20 }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', padding: '60px', borderRadius: '24px', border: `1px solid ${COLORS.white}`, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>{CONTENT.overview.title}</h2>
            <p style={{ color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.7, marginBottom: '24px' }}>{CONTENT.overview.description}</p>
            <div style={{ width: '40px', height: '4px', background: COLORS.primary, borderRadius: '2px' }} />
          </div>

          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', background: COLORS.textBlack, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '320px' }}>
            <div style={{ textAlign: 'center', zIndex: 2 }}>
                <div style={{ width: '64px', height: '64px', background: COLORS.white, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', cursor: 'pointer' }}>
                    <Play fill={COLORS.primary} color={COLORS.primary} size={24} style={{ marginLeft: '4px' }} />
                </div>
                <div style={{ color: COLORS.white, fontWeight: 700, fontSize: '14px' }}>{CONTENT.overview.videoLabel}</div>
            </div>
          </div>
        </section>

        {/* 3. EXPERIENCE GRID */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, textAlign: 'center', marginBottom: '48px' }}>{CONTENT.experience.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {CONTENT.experience.items.map((item, i) => (
              <div key={i} style={{ background: COLORS.white, padding: '32px', borderRadius: '20px', border: `1px solid ${COLORS.border}` }}>
                <div style={{ color: COLORS.primary, marginBottom: '20px' }}>{getIcon(item.icon, 24)}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.6, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PIPELINE */}
        <section style={{ background: COLORS.white, padding: '60px 40px', borderRadius: '32px', border: `1px solid ${COLORS.border}`, marginBottom: '80px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, textAlign: 'center', marginBottom: '48px' }}>{CONTENT.pipeline.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {CONTENT.pipeline.steps.map((item, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: '65px' }}>
                <div style={{ fontSize: '32px', fontWeight: 900, color: `${COLORS.primary}20`, position: 'absolute', top: '-5px', left: '0' }}>{item.step}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h4 style={{ fontWeight: 800, fontSize: '18px', color: COLORS.primary, marginBottom: '8px' }}>{item.label}</h4>
                  <p style={{ fontSize: '13px', color: COLORS.textMuted, lineHeight: 1.5, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. ELIGIBILITY & VALUES */}
        <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', marginBottom: '80px' }}>
          <div style={{ background: 'rgba(79, 70, 229, 0.05)', padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.primary}15` }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '24px' }}>{CONTENT.eligibility.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {CONTENT.eligibility.criteria.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px' }}>
                  <CheckCircle2 size={20} color={COLORS.primary} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '15px' }}>{item.label}</div>
                    <p style={{ fontSize: '13px', color: COLORS.textMuted }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {CONTENT.values.map((v, i) => (
                <div key={i} style={{ background: COLORS.white, padding: '20px', borderRadius: '16px', border: `1px solid ${COLORS.border}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ color: COLORS.primary }}>{getIcon(v.icon, 16)}</div>
                  <span style={{ fontWeight: 700, fontSize: '13px' }}>{v.title}</span>
                </div>
              ))}
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}