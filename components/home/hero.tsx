// import React from 'react';
// import { Button } from 'antd';
// import { motion } from 'framer-motion';
// import { ArrowRightOutlined, RocketOutlined } from '@ant-design/icons';

// // --- CONFIGURATION & THEME ---
// const COLORS = {
//   background: '#020617', // Deep Midnight
//   primary: '#6366F1', // Electric Indigo
//   accent: '#2DD4BF', // Teal
//   textMain: '#F8FAFC',
//   textMuted: '#94A3B8',
// };

// const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

// function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   };

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         backgroundColor: COLORS.background,
//         position: 'relative',
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontFamily: FONT_FAMILY,
//       }}>
//       {/* 1. INDUSTRIAL GRID BACKGROUND */}
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
//                           linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
//           backgroundSize: '4rem 4rem',
//           maskImage:
//             'radial-gradient(circle at center, black, transparent 80%)',
//         }}
//       />

//       {/* 2. GLOW RADIANCE ORBS */}
//       <div
//         style={{
//           position: 'absolute',
//           top: '20%',
//           left: '10%',
//           width: '400px',
//           height: '400px',
//           background:
//             'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
//           filter: 'blur(60px)',
//           zIndex: 0,
//         }}
//       />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         .hero-btn-primary {
//           background: ${COLORS.primary} !important;
//           border: none !important;
//           height: 56px !important;
//           padding: 0 32px !important;
//           border-radius: 12px !important;
//           font-weight: 700 !important;
//           box-shadow: 0 10px 30px -10px ${COLORS.primary}88 !important;
//           display: flex !important;
//           align-items: center !important;
//           gap: 8px !important;
//         }

//         .hero-btn-secondary {
//           background: rgba(255,255,255,0.03) !important;
//           border: 1px solid rgba(255,255,255,0.1) !important;
//           color: white !important;
//           height: 56px !important;
//           padding: 0 32px !important;
//           border-radius: 12px !important;
//           font-weight: 600 !important;
//           backdrop-filter: blur(10px);
//         }

//         .hero-btn-secondary:hover {
//           border-color: ${COLORS.primary} !important;
//           background: rgba(255,255,255,0.08) !important;
//         }

//         @keyframes subtle-float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//       `}</style>

//       {/* 3. MAIN CONTENT CONTAINER */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         style={{
//           zIndex: 10,
//           textAlign: 'center',
//           maxWidth: '1000px',
//           padding: '0 24px',
//         }}>
//         {/* TOP BADGE */}
//         <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
//           <span
//             style={{
//               background: 'rgba(99, 102, 241, 0.1)',
//               border: `1px solid ${COLORS.primary}44`,
//               color: COLORS.primary,
//               padding: '8px 16px',
//               borderRadius: '100px',
//               fontSize: '14px',
//               fontWeight: 700,
//               letterSpacing: '0.05em',
//               textTransform: 'uppercase',
//             }}>
//             <RocketOutlined style={{ marginRight: '8px' }} /> Technical
//             Consulting Reimagined
//           </span>
//         </motion.div>

//         {/* HEADLINE */}
//         <motion.h1
//           variants={itemVariants}
//           style={{
//             fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
//             fontWeight: 800,
//             color: COLORS.textMain,
//             lineHeight: 1.1,
//             letterSpacing: '-0.02em',
//             marginBottom: '32px',
//           }}>
//           We Own the{' '}
//           <span
//             style={{
//               background: `linear-gradient(to right, #818cf8, ${COLORS.accent})`,
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}>
//             Engineering.
//           </span>
//           <br />
//           You Own the Vision.
//         </motion.h1>

//         {/* DESCRIPTION */}
//         <motion.p
//           variants={itemVariants}
//           style={{
//             fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
//             color: COLORS.textMuted,
//             lineHeight: 1.6,
//             maxWidth: '780px',
//             margin: '0 auto 48px auto',
//             fontWeight: 400,
//           }}>
//           Crestcode is a high-performance technical consultancy. We provide
//           full-spectrum engineering and strategic advisory for founders building
//           the next generation of high-growth digital products.
//         </motion.p>

//         {/* BUTTONS */}
//         <motion.div
//           variants={itemVariants}
//           style={{
//             display: 'flex',
//             gap: '16px',
//             justifyContent: 'center',
//             flexWrap: 'wrap',
//           }}>
//           <Button
//             type="primary"
//             size="large"
//             className="hero-btn-primary"
//             icon={<ArrowRightOutlined />}>
//             Get Started
//           </Button>
//           <Button size="large" className="hero-btn-secondary">
//             Explore Our Services
//           </Button>
//         </motion.div>

//         {/* TRUST INDICATORS (SOCIAL PROOF) */}
//         <motion.div
//           variants={itemVariants}
//           style={{
//             marginTop: '80px',
//             paddingTop: '32px',
//             borderTop: '1px solid rgba(255,255,255,0.05)',
//           }}>
//           <p
//             style={{
//               color: 'rgba(255,255,255,0.3)',
//               fontSize: '13px',
//               fontWeight: 600,
//               textTransform: 'uppercase',
//               letterSpacing: '2px',
//               marginBottom: '24px',
//             }}>
//             Trusted by innovators at
//           </p>
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '48px',
//               opacity: 0.5,
//               filter: 'grayscale(100%)',
//               flexWrap: 'wrap',
//             }}>
//             {/* Replace these with actual Partner SVG Logos */}
//             <span style={{ color: '#fff', fontWeight: 800, fontSize: '20px' }}>
//               STRIPE
//             </span>
//             <span style={{ color: '#fff', fontWeight: 800, fontSize: '20px' }}>
//               VERCEL
//             </span>
//             <span style={{ color: '#fff', fontWeight: 800, fontSize: '20px' }}>
//               AIRBNB
//             </span>
//             <span style={{ color: '#fff', fontWeight: 800, fontSize: '20px' }}>
//               LINEAR
//             </span>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* 4. DECORATIVE SIDE ELEMENTS */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '5%',
//           right: '5%',
//           padding: '20px',
//           border: '1px solid rgba(255,255,255,0.05)',
//           borderRadius: '16px',
//           background: 'rgba(255,255,255,0.01)',
//           backdropFilter: 'blur(5px)',
//           display: 'none', // Hide on mobile
//           animation: 'subtle-float 4s ease-in-out infinite',
//         }}
//         className="desktop-only">
//         <div
//           style={{
//             width: '40px',
//             height: '4px',
//             background: COLORS.primary,
//             marginBottom: '8px',
//           }}
//         />
//         <p style={{ color: '#fff', fontSize: '12px', margin: 0, opacity: 0.6 }}>
//           SYSTEM STATUS: OPTIMIZED
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Hero;
'use client';

import React from 'react';
import { Button, Typography } from 'antd';
import { motion } from 'framer-motion';
import {
  ArrowRightOutlined,
  ThunderboltFilled,
  CodeOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F8FAFC',
  primary: '#4F46E5', // Indigo
  secondary: '#0EA5E9', // Sky Blue
  textMain: '#0F172A',
  textMuted: '#475569',
  border: '#E2E8F0',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function MainCompanyHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '90px',
        padding: ' 24px',
        fontFamily: FONT_FAMILY,
        paddingBottom: '50px',
        paddingTop: '120px',
      }}>
      {/* 1. ARCHITECTURAL GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.primary}15 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}>
          {/* --- LEFT SIDE: THE ENGINEERING PROMISE --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            {/* <motion.div style={{ marginBottom: '12px' }}>
              <span
                style={{
                  background: '#FFF',
                  border: `1px solid ${COLORS.border}`,
                  padding: '8px 16px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: COLORS.primary,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                <ThunderboltFilled /> High-Performance Technical Consultancy
              </span>
            </motion.div> */}

            <motion.h1
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 800,
                color: COLORS.textMain,
                lineHeight: 1.05,
                letterSpacing: '-0.05em',
                marginBottom: '32px',
              }}>
              We Own the <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                Engineering.
              </span>
              <br />
              You Own the Vision.
            </motion.h1>

            <motion.p
              style={{
                fontSize: '1.25rem',
                color: COLORS.textMuted,
                lineHeight: 1.6,
                maxWidth: '600px',
                marginBottom: '48px',
                fontWeight: 500,
              }}>
              Strategizing, architecting, and building the next generation of
              digital infrastructure for global enterprises and ambitious
              scale-ups.
            </motion.p>

            <motion.div
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button
                type="primary"
                size="large"
                style={{
                  height: '64px',
                  padding: '0 40px',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: 700,
                  backgroundColor: COLORS.primary,
                  boxShadow: `0 20px 40px -10px ${COLORS.primary}44`,
                }}
                icon={<ArrowRightOutlined />}>
                Initiate Project
              </Button>
              <Button
                size="large"
                style={{
                  height: '64px',
                  padding: '0 40px',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: 600,
                  border: `1px solid ${COLORS.border}`,
                }}>
                Our Services
              </Button>
            </motion.div>

            {/* TRUST INDICATORS */}
            <motion.div
              style={{
                marginTop: '64px',
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      color: COLORS.primary,
                      letterSpacing: '-0.02em',
                    }}>
                    24/7
                  </span>
                  <div
                    style={{
                      padding: '4px 8px',
                      background: '#10B98115',
                      color: '#10B981',
                      borderRadius: '6px',
                      fontSize: '10px',
                      fontWeight: 800,
                    }}>
                    LIVE
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: COLORS.textMuted,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                  Agile Support Cycle
                </span>
              </div>
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  background: COLORS.border,
                }}
              />
              <div style={{ display: 'flex', gap: '24px' }}>
                <SafetyCertificateOutlined
                  style={{ fontSize: '24px', color: COLORS.textMuted }}
                />
                <GlobalOutlined
                  style={{ fontSize: '24px', color: COLORS.textMuted }}
                />
                <CodeOutlined
                  style={{ fontSize: '24px', color: COLORS.textMuted }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: THE TECHNOLOGICAL CANVAS --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}>
            {/* GLASS MORPHIC LAB CARD */}
            <div>
              {/* Replace src with your specific company visual / hero image */}
              <img
                src="/code1.jpg"
                alt="Industrial Engineering Visual"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '24px',
                  display: 'block',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              />

              {/* FLOATING TECH BADGE */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-40px',
                  background: 'rgba(2, 6, 23, 0.9)', // Deep Ink
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  padding: '14px 20px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                  zIndex: 20,
                }}>
                {/* Pulsing Green "Live" Indicator */}
                <div style={{ position: 'relative', display: 'flex' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      background: '#10B981',
                      borderRadius: '50%',
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      background: '#10B981',
                      borderRadius: '50%',
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#94A3B8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                    Deployment Status
                  </div>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}>
                    99.9%{' '}
                    <span style={{ color: '#10B981', fontSize: '12px' }}>
                      Uptime
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* DECORATIVE BACKGROUND BLURS */}
            <div
              style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background:
                  'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 1,
              }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default MainCompanyHero;
