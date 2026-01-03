'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Paperclip, Calendar } from 'lucide-react';

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

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  // Add debugging
  console.log('ContactFormModal render - isOpen:', isOpen);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 9998,
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '900px',
              height: '85vh',
              maxHeight: '600px',
              backgroundColor: COLORS.bgLeft,
              borderRadius: '16px',
              zIndex: 9999,
              display: 'flex',
              overflow: 'hidden',
              fontFamily: FONT_FAMILY,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              margin: '0 auto',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                color: COLORS.textMuted,
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                zIndex: 10000,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = COLORS.textWhite;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = COLORS.textMuted;
              }}
            >
              <X size={20} />
            </button>

            {/* LEFT SIDE: STEPS & INFO */}
            <div
              style={{
                flex: '1 1 40%',
                padding: '40px 4% 40px 6%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: COLORS.bgLeft,
                borderRight: `1px solid ${COLORS.border}`,
              }}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: COLORS.primary,
                  marginBottom: '30px',
                  letterSpacing: '-0.04em',
                }}>
                Let's start
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ position: 'relative', paddingLeft: '35px' }}>
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
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
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
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ marginTop: '30px' }}>
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
                  contact@crestcode.in
                </a>
              </motion.div>
            </div>

            {/* RIGHT SIDE: THE FORM */}
            <div
              style={{
                flex: '1 1 60%',
                padding: '40px 6% 40px 4%',
                backgroundColor: COLORS.bgRight,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflowY: 'auto',
              }}>
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSubmit}
                style={{ width: '100%' }}>
                {/* Row for Name and Email */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '30px',
                    marginBottom: '30px',
                  }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}>
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
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}>
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
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
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
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  style={{ marginBottom: '25px' }}>
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
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
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
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
