'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useAdmin } from './admin/context';
import { submitCareerForm } from '@/services/api';
import EditableText from '@/components/admin/editableText';
import { 
  Briefcase, Zap, TrendingUp, Clock, UploadCloud, 
  ShieldCheck, Phone, Building, Mail, Calendar, ArrowRight, FileText,
  GraduationCap, Users, Rocket, Globe, Heart, Monitor, MapPin, DollarSign
} from "lucide-react";

// Exact image color palette
const COLORS = {
  primary: '#2563EB',      // Vibrant Blue
  secondary: '#1E40AF',    // Deep Blue
  textBlack: '#0F172A',    // Dark Navy Text
  textMuted: '#64748B',    // Slate Slate
  bgLight: '#F8FAFC',      // Ghost White
  cardBorder: '#E2E8F0',
  white: '#FFFFFF',
  darkSection: '#0F172A',  // Match exactly with image footer/bottom box
  btnLightBlue: '#EFF6FF'
};

export default function CareersPage() {
  const { config, saveConfigToServer } = useAdmin();
  const PAGE_DATA = config?.careers?.PAGE_DATA;
  
  const [fileName, setFileName] = useState("No file chosen");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleSave = () => saveConfigToServer();

  if (!PAGE_DATA) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    const formData = new FormData(e.currentTarget);
    if (!resumeFile) {
      setStatus({ type: 'error', msg: 'Please select a resume file.' });
      setIsSubmitting(false);
      return;
    }
    formData.append('resume', resumeFile);
    try {
      await submitCareerForm(formData);
      setStatus({ type: 'success', msg: "Application submitted successfully!" });
      setFileName("No file chosen");
      setResumeFile(null);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus({ type: 'error', msg: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.white, fontFamily: "'Inter', sans-serif", color: COLORS.textBlack }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .hero-title span { color: ${COLORS.primary}; }
      `}</style>

      {/* --- 1. HERO SECTION --- */}
      <section style={{ padding: '100px 24px', maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#EFF6FF', color: COLORS.primary, padding: '6px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 800, marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: COLORS.primary, borderRadius: '50%' }}></span>
            <EditableText value={PAGE_DATA.hero.badge} onSave={handleSave} configPath="careers.PAGE_DATA.hero.badge">{PAGE_DATA.hero.badge}</EditableText>
          </div>
          <h1 className="hero-title" style={{ fontSize: '72px', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '24px' }}>
            <EditableText value={PAGE_DATA.hero.titleMain} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleMain">{PAGE_DATA.hero.titleMain}</EditableText>
            <br />
            <span><EditableText value={PAGE_DATA.hero.titleAccent} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleAccent">{PAGE_DATA.hero.titleAccent}</EditableText></span>
            <br />
            <EditableText value={PAGE_DATA.hero.titleEnd} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleEnd">{PAGE_DATA.hero.titleEnd}</EditableText>
          </h1>
          <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '40px', maxWidth: '500px' }}>
            <EditableText value={PAGE_DATA.hero.description} onSave={handleSave} configPath="careers.PAGE_DATA.hero.description" multiline>{PAGE_DATA.hero.description}</EditableText>
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button onClick={() => document.getElementById('roles')?.scrollIntoView({behavior:'smooth'})} style={{ backgroundColor: COLORS.primary, color: COLORS.white, padding: '16px 32px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '16px' }}>View Open Roles</button>
            <button style={{ backgroundColor: 'transparent', color: COLORS.textBlack, padding: '16px 32px', borderRadius: '12px', fontWeight: 700, border: `1px solid ${COLORS.cardBorder}`, cursor: 'pointer', fontSize: '16px' }}>Learn More</button>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" alt="Office" style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '32px' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: COLORS.white, padding: '12px 20px', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', marginLeft: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#38BDF8', border: '2px solid white' }}></div>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#4ADE80', border: '2px solid white', marginLeft: '-12px' }}></div>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#818CF8', border: '2px solid white', marginLeft: '-12px' }}></div>
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800 }}>12+ New Roles</div>
              <div style={{ fontSize: '10px', color: COLORS.textMuted }}>Join our team</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. WHY JOIN SECTION --- */}
      <section style={{ backgroundColor: COLORS.bgLight, padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>Why Join Crestcode</h2>
          <p style={{ color: COLORS.textMuted, marginBottom: '60px' }}>We provide the environment and resources you need to do the best work of your career.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: <Rocket size={24}/>, title: "Real Product Experience", desc: "Work on live products that impact thousands of users from day one." },
              { icon: <GraduationCap size={24}/>, title: "Growth & Learning", desc: "Personalized mentorship and generous education stipends for your path." },
              { icon: <Users size={24}/>, title: "Collaborative Culture", desc: "No silos. We work across teams to solve complex problems together." },
              { icon: <ShieldCheck size={24}/>, title: "Ownership & Impact", desc: "We trust you with autonomy. Your decisions shape our products." },
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: COLORS.white, padding: '40px 32px', borderRadius: '24px', border: `1px solid ${COLORS.cardBorder}`, textAlign: 'left', transition: '0.3s' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#EFF6FF', color: COLORS.primary, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. LIFE AT SECTION (BLUE BENTO & UP/DOWN GRID) --- */}
      <section style={{ maxWidth: '1280px', margin: '60px auto', padding: '80px', backgroundColor: COLORS.primary, borderRadius: '48px', color: COLORS.white }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px' }}>Life at Crestcode</h2>
            <p style={{ fontSize: '18px', lineHeight: 1.6, opacity: 0.9, marginBottom: '24px' }}>Our work culture is built on a foundation of radical trust and empowerment. We don't believe in micromanagement; we believe in hiring exceptional people and giving them the space to excel.</p>
            <p style={{ fontSize: '18px', lineHeight: 1.6, opacity: 0.9 }}>Whether you're working remotely or from our innovative hubs, you'll find a community that celebrates diversity of thought and supports each other.</p>
          </div>
          {/* STAGGERED GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" style={{ width: '100%', height: '220px', borderRadius: '24px', objectFit: 'cover' }} alt="Team meeting" />
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998" style={{ width: '100%', height: '180px', borderRadius: '24px', objectFit: 'cover' }} alt="Collaborating" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72" style={{ width: '100%', height: '180px', borderRadius: '24px', objectFit: 'cover' }} alt="Office discussion" />
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" style={{ width: '100%', height: '220px', borderRadius: '24px', objectFit: 'cover' }} alt="Team planning" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. BENEFITS --- */}
      <section style={{ padding: '100px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Benefits & Perks</h2>
        <p style={{ color: COLORS.textMuted, marginBottom: '60px' }}>Taking care of you so you can take care of business.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 32px' }}>
          {[
            { icon: <Monitor size={20}/>, title: "Continuous Learning", desc: "Monthly budget for books and courses to sharpen your skills." },
            { icon: <Globe size={20}/>, title: "Flexible Work", desc: "Work from anywhere. We value results over office hours." },
            { icon: <Briefcase size={20}/>, title: "Exposure to Product", desc: "Directly collaborate with founders on product vision." },
            { icon: <Heart size={20}/>, title: "Health & Wellness", desc: "Premium health insurance and wellness allowance." },
            { icon: <Clock size={20}/>, title: "Unlimited PTO", desc: "We trust you to manage your time. Rest is essential." },
            { icon: <Monitor size={20}/>, title: "Tech Stipend", desc: "Hardware and home-office budget for everyone." },
          ].map((perk, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', color: COLORS.primary, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{perk.icon}</div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '6px' }}>{perk.title}</h4>
                <p style={{ fontSize: '13px', color: COLORS.textMuted, lineHeight: 1.5 }}>{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. OPEN ROLES --- */}
      <section id="roles" style={{ backgroundColor: COLORS.bgLight, padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Open Positions</h2>
              <p style={{ color: COLORS.textMuted }}>Find the perfect role that matches your expertise.</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['All Departments', 'Engineering', 'Design'].map((tab, i) => (
                <button key={i} style={{ padding: '10px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer', backgroundColor: i===0 ? COLORS.primary : '#E2E8F0', color: i===0 ? COLORS.white : COLORS.textMuted }}>{tab}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: "Frontend Developer", loc: "Remote / New York", sal: "$120k - $160k" },
              { title: "Backend Engineer", loc: "Remote / London", sal: "$130k - $180k" },
              { title: "Product Designer", loc: "Remote", sal: "$110k - $150k" }
            ].map((role, i) => (
              <div key={i} style={{ backgroundColor: COLORS.white, padding: '24px 32px', borderRadius: '24px', border: `1px solid ${COLORS.cardBorder}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>{role.title}</h3>
                  <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: COLORS.textMuted, fontWeight: 500 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14}/> Full-time</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14}/> {role.loc}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><DollarSign size={14}/> {role.sal}</span>
                  </div>
                </div>
                <button style={{ color: COLORS.primary, backgroundColor: COLORS.btnLightBlue, border: 'none', padding: '10px 24px', borderRadius: '100px', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>View Job Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. UPLOAD SECTION (BOX WITH RADIUS & NAVY) --- */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ backgroundColor: COLORS.darkSection, padding: '80px 40px', borderRadius: '48px', textAlign: 'center', color: COLORS.white, maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '20px' }}>Don't See the Right Role?</h2>
          <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6 }}>We're always looking for talented individuals. If you're passionate about what we're building, we'd love to hear from you.</p>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <input name="name" type="text" placeholder="Your Name" style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }} />
                <input name="email" type="email" placeholder="Email Address" style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }} />
              </div>
              <div style={{ border: '2px dashed rgba(255,255,255,0.2)', padding: '40px', borderRadius: '24px', marginBottom: '32px', cursor: 'pointer', position: 'relative' }}>
                <input type="file" onChange={(e) => { const f = e.target.files?.[0]; setFileName(f?.name || "No file chosen"); setResumeFile(f || null); }} style={{ opacity: 0, position: 'absolute', inset: 0, cursor: 'pointer' }} />
                <UploadCloud size={32} style={{ opacity: 0.5, marginBottom: '12px', margin: '0 auto' }} />
                <div style={{ fontWeight: 600, fontSize: '14px', marginTop: '12px' }}>{fileName}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <button type="submit" disabled={isSubmitting} style={{ backgroundColor: COLORS.primary, color: 'white', padding: '16px 40px', borderRadius: '12px', border: 'none', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
                  {isSubmitting ? 'Processing...' : 'Submit Resume'}
                </button>
                <button type="button" style={{ backgroundColor: 'transparent', color: 'white', padding: '16px 40px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
                  Follow our Journey
                </button>
              </div>
              {status && <p style={{ marginTop: '16px', color: status.type === 'success' ? '#4ADE80' : '#F87171' }}>{status.msg}</p>}
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}