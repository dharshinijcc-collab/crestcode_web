'use client';

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Terminal, 
  Layout, 
  Code2, 
} from "lucide-react";
import { useAdmin } from './admin/context';

// --- ICON MAPPING ---
const iconMap = {
  Layout,
  Terminal,
  Code2
};

// Icon mapping function
const getIcon = (iconName: string, size: number = 20) => {
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

export default function Vacancies() {
  const { config } = useAdmin();
  const VACANCIES_DATA = config?.vacancies?.VACANCIES_DATA;
  
  if (!VACANCIES_DATA) return null;
  
  const [selectedJob, setSelectedJob] = useState<typeof VACANCIES_DATA.jobs[0] | null>(null);

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '120px 24px 80px', background: COLORS.heroBg, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0', lineHeight: 1.1 }}>
            {VACANCIES_DATA.hero.title}<span style={{ color: COLORS.primary }}>{VACANCIES_DATA.hero.titleAccent}</span>
          </motion.h1>
          <p style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6, marginBottom: '32px' }}>
            {VACANCIES_DATA.hero.description}
          </p>
          <Link href={VACANCIES_DATA.hero.cta.link} style={{ background: COLORS.textBlack, color: COLORS.white, padding: '16px 32px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
            {VACANCIES_DATA.hero.cta.text}
          </Link>
        </div>
      </section>

      {/* 2. VACANCIES GRID */}
      <main style={{ maxWidth: '1200px', margin: '-40px auto 100px', padding: '0 24px', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
          {VACANCIES_DATA.jobs.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              style={{ background: COLORS.white, padding: '32px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, boxShadow: '0 10px 30px -15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ background: `${COLORS.primary}10`, padding: '12px', borderRadius: '12px', color: COLORS.primary }}>
                  {getIcon(job.icon, 20)}
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.textMuted }}>
                  {job.category}
                </span>
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: COLORS.textBlack, marginBottom: '16px' }}>{job.title}</h3>
              
              <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: COLORS.textMuted, fontWeight: 600 }}>
                  <Clock size={14} /> {job.experience}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: COLORS.textMuted, fontWeight: 600 }}>
                  <MapPin size={14} /> {job.location}
                </div>
              </div>

              <button 
                onClick={() => setSelectedJob(job)}
                style={{ marginTop: 'auto', background: 'none', border: 'none', color: COLORS.primary, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: 0 }}
              >
                Detailed Specifications <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      {/* 3. MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(2, 6, 23, 0.6)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              style={{ background: COLORS.white, width: '100%', maxWidth: '800px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.3)' }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ padding: '40px', position: 'relative' }}>
                <button onClick={() => setSelectedJob(null)} style={{ position: 'absolute', top: '24px', right: '24px', background: COLORS.bgBase, border: 'none', padding: '8px', borderRadius: '50%', cursor: 'pointer' }}>
                  <X size={20} />
                </button>

                <div style={{ marginBottom: '32px' }}>
                  <div style={{ color: COLORS.primary, fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>{VACANCIES_DATA.modal.badge}</div>
                  <h2 style={{ fontSize: '32px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>{selectedJob.title}</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: COLORS.textMuted, marginBottom: '12px' }}>Overview</h4>
                    <p style={{ fontSize: '15px', color: COLORS.textBlack, lineHeight: 1.7, fontWeight: 500 }}>{selectedJob.description.overview}</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: COLORS.textMuted, marginBottom: '16px' }}>Responsibilities</h4>
                      <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {selectedJob.description.responsibilities.map((r, i) => (
                          <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', fontWeight: 500 }}>
                            <CheckCircle2 size={16} color={COLORS.primary} style={{ marginTop: '2px' }} /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: COLORS.textMuted, marginBottom: '16px' }}>Requirements</h4>
                      <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {selectedJob.description.requirements.map((r, i) => (
                          <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', fontWeight: 500 }}>
                            <div style={{ width: '6px', height: '6px', background: COLORS.primary, borderRadius: '50%', marginTop: '8px' }} /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: `1px solid ${COLORS.border}`, display: 'flex', justifyContent: 'center' }}>
                  <Link href={VACANCIES_DATA.hero.cta.link} style={{ background: COLORS.primary, color: COLORS.white, padding: '16px 48px', borderRadius: '12px', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: `0 10px 20px ${COLORS.primary}33`, textDecoration: 'none', display: 'inline-block' }}>
                    {VACANCIES_DATA.modal.ctaText}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}