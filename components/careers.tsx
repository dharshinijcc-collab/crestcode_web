'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAdmin } from './admin/context';
import { 
  Briefcase, 
  Zap, 
  TrendingUp, 
  Clock, 
  UploadCloud, 
  User, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Phone,
  Building,
  Calendar
} from "lucide-react";

// --- ICON MAPPING ---
const iconMap = {
  Zap: Zap,
  TrendingUp: TrendingUp,
  Clock: Clock,
  Building: Building,
  Phone: Phone,
  Mail: Mail,
  Calendar: Calendar,
  ShieldCheck: ShieldCheck,
  UploadCloud: UploadCloud,
  Briefcase: Briefcase,
  ArrowRight: ArrowRight
};

// Helper function to render icons
const renderIcon = (iconName: string, size: number = 24) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={size} /> : null;
};

// --- INDUSTRIAL DESIGN TOKENS ---
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

// --- PAGE DATA JSON ---

export default function CareersPage() {
  const { config } = useAdmin();
  const PAGE_DATA = config?.careers?.PAGE_DATA;
  
  if (!PAGE_DATA) return null;
  
  const [fileName, setFileName] = useState("No file chosen");
  const [formData, setFormData] = useState({ name: "", email: "", resume: null as File | null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFormData({ ...formData, resume: file });
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.resume) {
      setMessage("Please fill in all fields and upload your resume.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage("success: Your application has been submitted successfully! We'll review your profile and contact you soon.");
      setFormData({ name: "", email: "", resume: null });
      setFileName("No file chosen");
    } catch (error) {
      setMessage("error: Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. INDUSTRIAL HERO SECTION */}
      <section style={{ 
        padding: '120px 24px 80px', 
        background: COLORS.heroBg, 
        position: 'relative', 
        overflow: 'hidden', 
        textAlign: 'center' 
      }}>
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
             <span style={{ 
                background: COLORS.white, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', 
                fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, textTransform: 'uppercase', letterSpacing: '0.05em'
             }}>
                {PAGE_DATA.hero.badge}
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0', lineHeight: 1.1
          }}>
            {PAGE_DATA.hero.titleMain}<span style={{ color: COLORS.primary }}>{PAGE_DATA.hero.titleAccent}</span>{PAGE_DATA.hero.titleEnd}
          </motion.h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6, marginBottom: '32px' }}>
            {PAGE_DATA.hero.description}
          </p>
          
          <button 
            onClick={() => scrollToSection("upload-resume")}
            style={{ 
                background: COLORS.textBlack, color: COLORS.white, padding: '16px 32px', 
                borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}>
            {PAGE_DATA.hero.ctaText}
          </button>
        </div>
      </section>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 100px', marginTop: '-40px', position: 'relative', zIndex: 20 }}>
        
        {/* 2. OPEN ROLES BENTO */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.7)', 
            backdropFilter: 'blur(20px)', 
            padding: '40px', 
            borderRadius: '24px', 
            border: `1px solid ${COLORS.white}`,
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.primary, marginBottom: '12px' }}>
                {renderIcon('Briefcase', 20)}
                <span style={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{PAGE_DATA.vacancies.badge}</span>
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px', color: COLORS.textBlack }}>{PAGE_DATA.vacancies.title}</h2>
              <p style={{ color: COLORS.textMuted, fontWeight: 500, margin: 0 }}>{PAGE_DATA.vacancies.description}</p>
            </div>
            <button style={{ 
                background: COLORS.primary, color: COLORS.white, padding: '14px 28px', 
                borderRadius: '10px', fontWeight: 700, border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px'
            }}>
               <a href={PAGE_DATA.vacancies.ctaLink} style={{ color: 'inherit', textDecoration: 'none' }}>{PAGE_DATA.vacancies.ctaText}</a> {renderIcon('ArrowRight', 18)}
            </button>
          </div>
        </section>

        {/* 3. VALUE PROPOSITION GRID */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, textAlign: 'center', marginBottom: '48px' }}>{PAGE_DATA.advantages.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {PAGE_DATA.advantages.items.map((item, i) => (
              <div key={i} style={{ background: COLORS.white, padding: '32px', borderRadius: '20px', border: `1px solid ${COLORS.border}` }}>
                <div style={{ color: COLORS.primary, marginBottom: '20px' }}>{renderIcon(item.icon, 24)}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px', color: COLORS.textBlack }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. RESUME UPLOAD DASHBOARD */}
        <section id="upload-resume" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px',
            background: COLORS.white,
            borderRadius: '32px',
            border: `1px solid ${COLORS.border}`,
            padding: '60px 40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
        }}>
          <div>
            <div style={{ width: '48px', height: '48px', background: `${COLORS.primary}10`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              {renderIcon('UploadCloud', 24)}
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: COLORS.textBlack }}>{PAGE_DATA.formSection.title}</h2>
            <p style={{ color: COLORS.textMuted, fontSize: '16px', lineHeight: 1.6, fontWeight: 500 }}>
              {PAGE_DATA.formSection.description}
            </p>
            <div style={{ marginTop: '32px', padding: '20px', background: COLORS.bgBase, borderRadius: '16px', border: `1px solid ${COLORS.border}` }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: COLORS.textBlack, fontWeight: 700, fontSize: '14px' }}>
                  <div style={{ color: '#10B981' }}>{renderIcon('ShieldCheck', 18)}</div> {PAGE_DATA.formSection.privacyBadge}
               </div>
               <p style={{ fontSize: '12px', color: COLORS.textMuted, marginTop: '4px' }}>{PAGE_DATA.formSection.privacyText}</p>
            </div>

            {/* Contact Information */}
            <div style={{ marginTop: '32px', padding: '24px', background: `${COLORS.primary}05`, borderRadius: '16px', border: `1px solid ${COLORS.border}` }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: COLORS.primary, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {renderIcon('Building', 20)} {PAGE_DATA.formSection.contactTitle}
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {PAGE_DATA.formSection.contacts.map((contact, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: COLORS.textMuted, marginTop: '2px' }}>{renderIcon(contact.icon, 18)}</div>
                    <div>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: COLORS.textBlack }}>{contact.label}</p>
                      <div style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted, lineHeight: 1.4 }}>
                        {contact.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 700, color: COLORS.textBlack }}>{PAGE_DATA.formSection.labels.name}</label>
                <input 
                    type="text" required placeholder="Enter your full name" 
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ padding: '14px', borderRadius: '10px', border: `1px solid ${COLORS.border}`, background: COLORS.bgBase, outline: 'none' }}
                />
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 700, color: COLORS.textBlack }}>{PAGE_DATA.formSection.labels.email}</label>
                <input 
                    type="email" required placeholder="your@email.com" 
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ padding: '14px', borderRadius: '10px', border: `1px solid ${COLORS.border}`, background: COLORS.bgBase, outline: 'none' }}
                />
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 700, color: COLORS.textBlack }}>{PAGE_DATA.formSection.labels.resume}</label>
                <div style={{ 
                    border: `2px dashed ${COLORS.border}`, borderRadius: '12px', padding: '20px', 
                    textAlign: 'center', cursor: 'pointer', position: 'relative'
                }}>
                    <div style={{ color: COLORS.textMuted, margin: '0 auto 8px' }}>{renderIcon('UploadCloud', 24)}</div>
                    <div style={{ fontSize: '14px', color: COLORS.textBlack, fontWeight: 600 }}>{fileName}</div>
                    <input 
                        type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange}
                        style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
                    />
                </div>
             </div>

             <button 
                type="submit" disabled={isSubmitting}
                style={{ 
                    marginTop: '10px', background: COLORS.primary, color: COLORS.white, 
                    padding: '16px', borderRadius: '10px', fontWeight: 700, border: 'none', 
                    cursor: isSubmitting ? 'not-allowed' : 'pointer', transition: '0.3s'
                }}>
                {isSubmitting ? PAGE_DATA.formSection.labels.submitting : PAGE_DATA.formSection.labels.submit}
             </button>

             {message && (
                <div style={{ 
                    padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
                    backgroundColor: message.includes("success") ? '#DCFCE7' : '#FEE2E2',
                    color: message.includes("success") ? '#166534' : '#991B1B',
                    border: `1px solid ${message.includes("success") ? '#86EFAC' : '#FECACA'}`
                }}>
                    {message}
                </div>
             )}
          </form>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}