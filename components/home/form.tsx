import React, { useState } from 'react';
import { Paperclip, Calendar, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
        minHeight: 'auto', // Removed 100vh for compactness
        backgroundColor: COLORS.bgLeft,
        color: COLORS.textWhite,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontFamily: FONT_FAMILY,
        overflow: 'hidden',
        padding: '40px 0', // Reduced section padding
      }}>
      {/* LEFT SIDE: STEPS & INFO (Condensed) */}
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
            fontSize: 'clamp(2rem, 4vw, 3rem)', // Smaller font size
            fontWeight: 800,
            color: COLORS.primary,
            marginBottom: '30px', // Reduced margin
            letterSpacing: '-0.04em',
          }}>
          Let's start
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

          {[
            { num: '1', text: 'Vision' },
            { num: '2', text: 'Discovery' },
            { num: '3', text: 'Roadmap' },
            { num: '4', text: 'Launch' },
          ].map((step, i) => (
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
            href="mailto:contact@crestcode.in"
            style={{
              color: COLORS.accentRed,
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
            <Mail size={16} /> contact@crestcode.in
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: THE FORM (Compact Grid) */}
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
          {/* Row for Name and Email */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '30px',
            }}>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: COLORS.textMuted,
                  marginBottom: '8px',
                  fontWeight: 600,
                }}>
                NAME*
              </label>
              <input
                required
                type="text"
                placeholder="John Smith"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${COLORS.border}`,
                  paddingBottom: '8px',
                  color: COLORS.textWhite,
                  outline: 'none',
                  fontSize: '15px',
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: COLORS.textMuted,
                  marginBottom: '8px',
                  fontWeight: 600,
                }}>
                EMAIL*
              </label>
              <input
                required
                type="email"
                placeholder="name@company.com"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${COLORS.border}`,
                  paddingBottom: '8px',
                  color: COLORS.textWhite,
                  outline: 'none',
                  fontSize: '15px',
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                color: COLORS.textMuted,
                marginBottom: '8px',
                fontWeight: 600,
              }}>
              MESSAGE*
            </label>
            <textarea
              required
              placeholder="Briefly describe your idea"
              rows={2}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${COLORS.border}`,
                paddingBottom: '8px',
                color: COLORS.textWhite,
                outline: 'none',
                fontSize: '15px',
                resize: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
            }}>
            <button
              type="button"
              style={{
                background: 'none',
                border: 'none',
                color: COLORS.textWhite,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}>
              <Paperclip size={14} /> Attach
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={{
                backgroundColor: COLORS.accentRed,
                color: 'white',
                padding: '10px 40px',
                fontSize: '16px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
              }}>
              Send
            </motion.button>
          </div>

          {/* <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
              borderTop: `1px solid ${COLORS.border}`,
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Manager"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '14px' }}>
                  Elizabeth K.
                </p>
                <p
                  style={{
                    margin: 0,
                    color: COLORS.textMuted,
                    fontSize: '11px',
                  }}>
                  Account Manager
                </p>
              </div>
            </div>
            <button
              type="button"
              style={{
                border: `1px solid ${COLORS.accentRed}`,
                color: COLORS.accentRed,
                background: 'none',
                padding: '6px 15px',
                fontWeight: 700,
                fontSize: '12px',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}>
              <Calendar size={12} /> Book Call
            </button>
          </div> */}
        </form>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        input:focus, textarea:focus { border-bottom: 1px solid ${COLORS.primary} !important; }
      `}</style>
    </div>
  );
}

export default ContactForm;
