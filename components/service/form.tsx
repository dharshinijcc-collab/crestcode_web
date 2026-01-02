import React, { useState } from 'react';
import { Paperclip, Calendar, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// --- THEME TOKENS ---
const COLORS = {
  bgLeft: '#020617', // Your deep dark bg
  bgRight: '#0B1224', // Slightly lighter for form contrast
  primary: '#4F46E5', // Industrial Indigo
  accentRed: '#FF5757', // Action Red
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

  // --- ANIMATION VARIANTS ---
  const containerFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemSlide = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      id="contact-form"
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.bgLeft,
        color: COLORS.textWhite,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontFamily: FONT_FAMILY,
        overflow: 'hidden',
      }}>
      {/* LEFT SIDE: STEPS & INFO */}
      <motion.div
        variants={containerFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          flex: '1 1 50%',
          padding: '60px 6% 40px 8%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minWidth: '350px',
        }}>
        <div>
          <motion.h1
            variants={itemSlide}
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.primary,
              marginBottom: '60px',
              letterSpacing: '-0.04em',
            }}>
            Let's start
          </motion.h1>

          <div style={{ position: 'relative', paddingLeft: '45px' }}>
            {/* PROGRESS LINE */}
            <div
              style={{
                position: 'absolute',
                left: '21px',
                top: '10px',
                bottom: '10px',
                width: '2px',
                background: `linear-gradient(to bottom, ${COLORS.primary}, ${COLORS.border})`,
              }}
            />

            {[
              { num: '1', text: 'Share your idea' },
              { num: '2', text: 'Discuss it with our experts' },
              { num: '3', text: 'Get an estimation of project' },
              { num: '4', text: 'Start the project' },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={itemSlide}
                style={{ marginBottom: '40px', position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '-30px',
                    top: '6px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor:
                      i === 0 ? COLORS.primary : COLORS.textMuted,
                    border: `4px solid ${COLORS.bgLeft}`,
                    boxShadow: i === 0 ? `0 0 15px ${COLORS.primary}` : 'none',
                    zIndex: 2,
                  }}
                />
                <p
                  style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    margin: 0,
                    color: i === 0 ? COLORS.textWhite : COLORS.textMuted,
                  }}>
                  <span style={{ opacity: 0.5, marginRight: '10px' }}>
                    {step.num}.
                  </span>{' '}
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={itemSlide} style={{ marginTop: '40px' }}>
          <p
            style={{
              color: COLORS.textMuted,
              marginBottom: '8px',
              fontSize: '15px',
            }}>
            If you have any questions, email us
          </p>
          <a
            href="mailto:contact@crestcode.in"
            style={{
              color: COLORS.accentRed,
              fontSize: '20px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
            <Mail size={20} /> contact@crestcode.in
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: THE FORM */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          flex: '1 1 50%',
          padding: '60px 8% 40px 6%',
          backgroundColor: COLORS.bgRight,
          minWidth: '350px',
        }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
          {['My Name*', 'Email Address*', 'Message*'].map((label, i) => (
            <div key={i} style={{ marginBottom: '50px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  color: COLORS.textMuted,
                  marginBottom: '15px',
                  fontWeight: 600,
                }}>
                {label}
              </label>
              {label === 'Message*' ? (
                <textarea
                  required
                  placeholder="Describe your idea"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: `1px solid ${COLORS.border}`,
                    paddingBottom: '12px',
                    color: COLORS.textWhite,
                    outline: 'none',
                    fontSize: '16px',
                    resize: 'none',
                  }}
                />
              ) : (
                <input
                  required
                  type={label.includes('Email') ? 'email' : 'text'}
                  placeholder={
                    label.includes('Name') ? 'John Smith' : 'name@company.com'
                  }
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: `1px solid ${COLORS.border}`,
                    paddingBottom: '12px',
                    color: COLORS.textWhite,
                    outline: 'none',
                    fontSize: '16px',
                  }}
                />
              )}
            </div>
          ))}

          <p
            style={{
              fontSize: '12px',
              color: COLORS.textMuted,
              lineHeight: 1.6,
              marginBottom: '40px',
            }}>
            By clicking Send, Crestcode will process your data as per our
            <span style={{ color: COLORS.accentRed, cursor: 'pointer' }}>
              {' '}
              Privacy notice
            </span>
            .
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
            }}>
            <button
              type="button"
              style={{
                background: 'none',
                border: 'none',
                color: COLORS.textWhite,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '15px',
              }}>
              <Paperclip size={18} /> Attach file
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={{
                backgroundColor: COLORS.accentRed,
                color: 'white',
                padding: '16px 60px',
                fontSize: '16px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: `0 10px 20px -5px ${COLORS.accentRed}66`,
              }}>
              Send
            </motion.button>
          </div>

          {/* MANAGER FOOTER */}
          <div
            style={{
              marginTop: '80px',
              paddingTop: '40px',
              borderTop: `1px solid ${COLORS.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Account Manager"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '16px' }}>
                  Elizabeth K.
                </p>
                <p
                  style={{
                    margin: 0,
                    color: COLORS.textMuted,
                    fontSize: '13px',
                  }}>
                  Account Manager
                </p>
              </div>
            </div>
            <button
              type="button"
              style={{
                border: `2px solid ${COLORS.accentRed}`,
                color: COLORS.accentRed,
                background: 'none',
                padding: '10px 20px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
              <Calendar size={16} /> Book a consultation
            </button>
          </div>
        </form>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        input::placeholder, textarea::placeholder { color: #334155; opacity: 1; }
        input:focus, textarea:focus { border-bottom: 1px solid ${COLORS.primary} !important; }
      `}</style>
    </div>
  );
}

export default ContactForm;