'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Scale, 
  Code2, 
  Lock, 
  CreditCard, 
  Gavel, 
  Info,
  ChevronRight,
  Mail,
  MapPin,
  Zap
} from "lucide-react";
import { useAdmin } from './admin/context';

// --- ICON MAPPING ---
const iconMap = {
  ShieldAlert: ShieldAlert,
  Scale: Scale,
  Code2: Code2,
  Lock: Lock,
  CreditCard: CreditCard,
  Gavel: Gavel,
  Info: Info,
  ChevronRight: ChevronRight,
  Mail: Mail,
  MapPin: MapPin,
  Zap: Zap
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

export default function TermsOfService() {
  const { config } = useAdmin();
  const TERMS_DATA = config?.termsofservice?.TERMS_DATA;
  
  if (!TERMS_DATA) return null;
  
  const { hero, summary, sections, footer, sections: { intro, services, ipProtocol: ipProtocolSection, hackathon: hackathonSection, finance: financeSection, dispute: disputeSection } } = TERMS_DATA;

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
                {hero.badge}
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0', lineHeight: 1.1 }}>
            {hero.title}<span style={{ color: COLORS.primary }}>{hero.titleAccent}</span>
          </motion.h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6 }}>
            Effective Date: {hero.effectiveDate}. <br/>
            {hero.description}
          </p>
        </div>
      </section>

      <main style={{ maxWidth: '1000px', margin: '-40px auto 100px', padding: '0 24px', position: 'relative', zIndex: 20 }}>
        
        {/* 2. SUMMARY DASHBOARD */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {summary.map((item, i) => (
                <div key={i} style={{ background: COLORS.white, padding: '24px', borderRadius: '20px', border: `1px solid ${COLORS.border}`, textAlign: 'center' }}>
                    <div style={{ color: COLORS.primary, marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: COLORS.textBlack, marginTop: '4px' }}>{item.val}</div>
                </div>
            ))}
        </div>

        {/* 3. DOCUMENT SECTIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <TermsSection number={sections.intro.number} title={sections.intro.title} icon={sections.intro.icon}>
            <p>{sections.intro.content}</p>
          </TermsSection>

          <TermsSection number={sections.services.number} title={sections.services.title} icon={sections.services.icon}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>{sections.services.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {sections.services.list.map((s, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600 }}>
                            <ChevronRight size={14} color={COLORS.primary} /> {s}
                        </div>
                    ))}
                </div>
            </div>
          </TermsSection>

          {/* Section 3 - Dark Theme IP Ownership */}
          <div style={{ background: COLORS.textBlack, borderRadius: '32px', padding: '48px', color: COLORS.white, position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: 0, right: 0, padding: '24px', opacity: 0.1 }}>
                <Scale size={120} />
             </div>
             <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ color: COLORS.primary, fontWeight: 800, fontSize: '14px', marginBottom: '16px', textTransform: 'uppercase' }}>{ipProtocolSection.badge}</div>
                <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px' }}>{ipProtocolSection.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                    {ipProtocolSection.cards.map((card, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '16px', borderLeft: `4px solid ${COLORS.primary}` }}>
                          <h4 style={{ fontWeight: 800, marginBottom: '8px' }}>{card.title}</h4>
                          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{card.text}</p>
                      </div>
                    ))}
                </div>
             </div>
          </div>

          <TermsSection number={hackathonSection.number} title={hackathonSection.title} icon={hackathonSection.icon}>
            <div style={{ background: '#FEF2F2', border: '1px solid #FEE2E2', padding: '24px', borderRadius: '16px', marginBottom: '20px' }}>
                <h4 style={{ color: '#991B1B', fontWeight: 800, fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase' }}>{hackathonSection.alert.title}</h4>
                <p style={{ fontSize: '14px', color: '#991B1B', margin: 0, lineHeight: 1.5 }}>{hackathonSection.alert.text}</p>
            </div>
            <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {hackathonSection.details.map((item, i) => (
                  <li key={i} style={{ fontSize: '14px', color: COLORS.textMuted, fontWeight: 500 }}>
                    <span style={{ color: COLORS.textBlack, fontWeight: 700 }}>{item.label}:</span> {item.text}
                  </li>
                ))}
            </ul>
          </TermsSection>

          <TermsSection number={financeSection.number} title={financeSection.title} icon={financeSection.icon}>
            <p style={{ fontSize: '15px', color: COLORS.textMuted }}>{financeSection.content}</p>
          </TermsSection>

          <TermsSection number={disputeSection.number} title={disputeSection.title} icon={disputeSection.icon}>
            <p style={{ fontSize: '15px', color: COLORS.textMuted }}>
              {disputeSection.text} 
              <span style={{ fontWeight: 800, color: COLORS.textBlack }}>{disputeSection.location}</span>.
            </p>
          </TermsSection>

          {/* Footer Contact */}
          <div style={{ background: COLORS.white, padding: '40px', borderRadius: '32px', border: `1px solid ${COLORS.border}`, textAlign: 'center' }}>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700 }}><Mail size={18} color={COLORS.primary}/> {footer.email}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700 }}><MapPin size={18} color={COLORS.primary}/> {footer.location}</div>
             </div>
             <p style={{ color: COLORS.textMuted, fontSize: '14px', marginBottom: '24px' }}>{footer.acknowledgment}</p>
          </div>

        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}

// --- SUB-COMPONENT ---
function TermsSection({ number, title, children, icon }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ background: COLORS.white, padding: '40px', borderRadius: '32px', border: `1px solid ${COLORS.border}` }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ fontSize: '32px', fontWeight: 900, color: `${COLORS.primary}15` }}>{number}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: `${COLORS.primary}10`, padding: '8px', borderRadius: '8px', color: COLORS.primary }}>{icon}</div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>{title}</h3>
        </div>
      </div>
      <div style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.7, fontWeight: 500 }}>
        {children}
      </div>
    </motion.div>
  );
}