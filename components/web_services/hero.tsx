import React from 'react';
import { ChevronRight, Star, Globe, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// --- INDUSTRIAL STAND-OUT THEME TOKENS ---
const COLORS = {
  bgGradient:
    'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  primary: '#4F46E5', // Precision Indigo
  accentRed: '#FF5757', // Action Red
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function WebDevelopmentHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        background: COLORS.bgGradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        fontFamily: FONT_PRIMARY,
        padding: '100px 24px',
      }}>
      {/* 1. ARCHITECTURAL PATTERN OVERLAY */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Engineering Mesh Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(circle at center, black, transparent 90%)',
          }}
        />
      </div>

      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>
          {/* LEFT CONTENT: CORE MESSAGE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            {/* BREADCRUMB BADGE */}
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '40px',
              }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: COLORS.textMuted,
                }}>
                Home
              </span>
              <ChevronRight size={14} color={COLORS.textMuted} />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: COLORS.textMuted,
                }}>
                Development
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
                fontWeight: 800,
                color: COLORS.textBlack,
                lineHeight: 1,
                letterSpacing: '-0.06em',
                marginBottom: '32px',
              }}>
              <span style={{ color: COLORS.primary }}>Custom Web</span>
              <br />
              Development{' '}
              <span style={{ fontWeight: 300, color: COLORS.textMuted }}>
                Services.
              </span>
            </motion.h1>

            <motion.p
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                color: COLORS.textMuted,
                lineHeight: 1.6,
                marginBottom: '48px',
                maxWidth: '650px',
                fontWeight: 450,
              }}>
              Leveraging the latest IT innovations, we engineer scalable web
              systems that maximize your competitive advantage and transform
              business efficiency through technical excellence.
            </motion.p>

            <motion.div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '48px',
              }}>
              <button
                style={{
                  backgroundColor: COLORS.textBlack,
                  color: '#FFF',
                  border: 'none',
                  padding: '20px 44px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px -12px rgba(2, 6, 23, 0.3)',
                  transition: '0.3s all',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.primary)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.textBlack)
                }>
                Get in Touch
              </button>
              <button
                style={{
                  backgroundColor: COLORS.white,
                  color: COLORS.textBlack,
                  border: `1px solid ${COLORS.border}`,
                  padding: '20px 44px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: '0.3s all',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = COLORS.textBlack;
                  e.currentTarget.style.boxShadow =
                    '0 10px 20px rgba(0,0,0,0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                Book Free Consultation
              </button>
            </motion.div>

            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" stroke="none" />
                ))}
              </div>
              <span style={{ fontWeight: 700, color: COLORS.textBlack }}>
                5.0 Rating
              </span>
              <span
                style={{
                  width: '1px',
                  height: '20px',
                  background: COLORS.border,
                }}
              />
              <span style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                Enterprise-Grade Architecture
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: THE GLASS FEATURE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={
              { position: 'relative', display: 'none', lg: 'block' } as any
            }>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(24px)',
                border: `1px solid ${COLORS.white}`,
                padding: '50px',
                borderRadius: '32px',
                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.12)',
                zIndex: 2,
                position: 'relative',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '40px',
                }}>
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                  }}>
                  <div
                    style={{
                      background: COLORS.primary,
                      padding: '14px',
                      borderRadius: '14px',
                      color: 'white',
                    }}>
                    <Globe />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '19px' }}>
                      Scalable Infrastructure
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color: COLORS.textMuted,
                        fontSize: '13px',
                      }}>
                      Optimized for Global Delivery
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                  }}>
                  <div
                    style={{
                      background: '#10B981',
                      padding: '14px',
                      borderRadius: '14px',
                      color: 'white',
                    }}>
                    <ShieldCheck />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '19px' }}>
                      Security First
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color: COLORS.textMuted,
                        fontSize: '13px',
                      }}>
                      SOC2 & GDPR Compliance
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                  }}>
                  <div
                    style={{
                      background: COLORS.accentRed,
                      padding: '14px',
                      borderRadius: '14px',
                      color: 'white',
                    }}>
                    <Zap />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '19px' }}>
                      High Performance
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color: COLORS.textMuted,
                        fontSize: '13px',
                      }}>
                      Lighthouse Score 95+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}
