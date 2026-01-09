'use client';

import React, { useState } from 'react';
import { Paperclip, Calendar, Mail, Phone, Building } from 'lucide-react';
import { motion } from 'framer-motion';

// --- DATA CONFIGURATION ---
const CONTACT_DATA = {
  header: "Let's start",
  emailPrimary: "contact@crestcode.in",
  steps: [
    { num: '1', text: 'Vision' },
    { num: '2', text: 'Discovery' },
    { num: '3', text: 'Roadmap' },
    { num: '4', text: 'Launch' },
  ],
  officeInfo: {
    address: "2nd Floor, Plot No:248, Kannan St, Sree Balaji Nagar, Pallikaranai, Chennai - 600 100.",
    phone: "9629664974",
    landline: "044 4604 7460",
    hours: [
      "Tuesday - Friday: 11:00 AM - 8:00 PM IST",
      "Saturday: 09:00 AM - 5:00 PM IST"
    ]
  },
  formLabels: {
    name: "NAME*",
    email: "EMAIL*",
    message: "MESSAGE*",
    submit: "Send",
    attach: "Attach"
  }
};

// --- THEME TOKENS ---
const COLORS = {
  bgLeft: '#020617',
  bgRight: '#0B1224',
  primary: '#4F46E5',
  accentRed: '#FF5757',
  textWhite: '#F8FAFC',
  textMuted: '#94A3B8',
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const containerFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemSlide = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div
      style={{
        minHeight: 'auto',
        backgroundColor: COLORS.bgLeft,
        color: COLORS.textWhite,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontFamily: FONT_FAMILY,
        overflow: 'hidden',
        padding: '40px 0',
      }}>
      {/* LEFT SIDE: STEPS & INFO */}
      <motion.div
        variants={containerFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          flex: '1 1 40%',
          padding: '40px 4% 40px 6%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '320px',
        }}>
        <motion.h1
          variants={itemSlide}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: COLORS.primary,
            marginBottom: '30px',
            letterSpacing: '-0.04em',
          }}>
          {CONTACT_DATA.header}
        </motion.h1>

        <div style={{ position: 'relative', paddingLeft: '35px' }}>
          <div
            style={{
              position: 'absolute',
              left: '16px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background: `linear-gradient(to bottom, ${COLORS.primary}, ${COLORS.border})`,
            }}
          />

          {CONTACT_DATA.steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemSlide}
              style={{ marginBottom: '18px', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '-24px',
                  top: '6px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: i === 0 ? COLORS.primary : COLORS.textMuted,
                  border: `3px solid ${COLORS.bgLeft}`,
                  boxShadow: i === 0 ? `0 0 10px ${COLORS.primary}` : 'none',
                  zIndex: 2,
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  margin: 0,
                  color: i === 0 ? COLORS.textWhite : COLORS.textMuted,
                }}>
                <span style={{ opacity: 0.5 }}>{step.num}.</span> {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemSlide} style={{ marginTop: '30px' }}>
          <a
            href={`mailto:${CONTACT_DATA.emailPrimary}`}
            style={{
              color: COLORS.accentRed,
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
            <Mail size={16} /> {CONTACT_DATA.emailPrimary}
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: THE FORM */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{
          flex: '1 1 55%',
          padding: '40px 6% 40px 4%',
          backgroundColor: COLORS.bgRight,
          borderRadius: '16px',
          marginRight: '20px',
        }}>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '30px',
            }}>
            <div>
              <label style={labelStyle}>{CONTACT_DATA.formLabels.name}</label>
              <input
                required
                type="text"
                placeholder="John Smith"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>{CONTACT_DATA.formLabels.email}</label>
              <input
                required
                type="email"
                placeholder="name@company.com"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={labelStyle}>{CONTACT_DATA.formLabels.message}</label>
            <textarea
              required
              placeholder="Briefly describe your idea"
              rows={2}
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
            }}>
            <button type="button" style={actionBtnStyle}>
              <Paperclip size={14} /> {CONTACT_DATA.formLabels.attach}
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={submitBtnStyle}>
              {CONTACT_DATA.formLabels.submit}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* FOOTER INFO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={footerContainerStyle}>
        <h3 style={footerHeaderStyle}>Contact Information</h3>
        
        <div style={footerGridStyle}>
          <InfoBlock icon={<Building size={18} color={COLORS.primary} />} title="Our Office">
            {CONTACT_DATA.officeInfo.address}
          </InfoBlock>

          <InfoBlock icon={<Phone size={18} color={COLORS.primary} />} title="Phone">
            Mobile: {CONTACT_DATA.officeInfo.phone}<br />
            Landline: {CONTACT_DATA.officeInfo.landline}
          </InfoBlock>

          <InfoBlock icon={<Mail size={18} color={COLORS.primary} />} title="Email">
            {CONTACT_DATA.emailPrimary}
          </InfoBlock>

          <InfoBlock icon={<Calendar size={18} color={COLORS.primary} />} title="Business Hours">
            {CONTACT_DATA.officeInfo.hours.map((h, i) => <React.Fragment key={i}>{h}<br/></React.Fragment>)}
          </InfoBlock>
        </div>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        input:focus, textarea:focus { border-bottom: 1px solid ${COLORS.primary} !important; }
      `}</style>
    </div>
  );
}

// --- SHARED STYLES & SUB-COMPONENTS ---
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px', fontWeight: 600
};

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${COLORS.border}`,
  paddingBottom: '8px', color: COLORS.textWhite, outline: 'none', fontSize: '15px'
};

const actionBtnStyle: React.CSSProperties = {
  background: 'none', border: 'none', color: COLORS.textWhite, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '14px'
};

const submitBtnStyle: React.CSSProperties = {
  backgroundColor: COLORS.accentRed, color: 'white', padding: '10px 40px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: 'pointer', borderRadius: '4px'
};

const footerContainerStyle: React.CSSProperties = {
  width: '100%', padding: '40px 6%', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderTop: `1px solid ${COLORS.border}`
};

const footerHeaderStyle: React.CSSProperties = {
  fontSize: '1.2rem', fontWeight: 700, color: COLORS.primary, marginBottom: '25px', textAlign: 'center'
};

const footerGridStyle: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto'
};

const InfoBlock = ({ icon, title, children }: any) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
    <div style={{ marginTop: '2px' }}>{icon}</div>
    <div>
      <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: COLORS.textWhite }}>{title}</p>
      <p style={{ margin: 0, fontSize: '12px', color: COLORS.textMuted, lineHeight: 1.4 }}>{children}</p>
    </div>
  </div>
);

export default ContactForm;