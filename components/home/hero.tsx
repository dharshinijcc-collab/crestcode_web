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
import React from 'react';
import { Button, Typography } from 'antd';
import { motion } from 'framer-motion';
import {
  ArrowRightOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  ThunderboltFilled,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

// --- MODERN INDUSTRIAL LIGHT THEME ---
const COLORS = {
  bgBase: '#F8FAFC', // Slate 50 (Very light gray-blue)
  bgSecondary: '#F1F5F9', // Slate 100
  primary: '#4F46E5', // Professional Indigo
  secondary: '#0EA5E9', // Sky Blue
  textMain: '#0F172A', // Slate 900 (Deep ink)
  textMuted: '#475569', // Slate 600
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY,
        padding: '0 24px',
      }}>
      {/* 1. DYNAMIC WAVE BACKGROUND PATTERN */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          lineHeight: 0,
          zIndex: 1,
        }}>
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto' }}>
          <path
            fill="rgba(79, 70, 229, 0.03)"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
          <path
            fill="rgba(14, 165, 233, 0.04)"
            d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,224C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"></path>
        </svg>
      </div>

      {/* 2. FLOATING DATA ORBS (Abstract pattern) */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '300px',
          height: '300px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .hero-btn-primary {
          background: ${COLORS.primary} !important;
          border: none !important;
          height: 60px !important;
          padding: 0 36px !important;
          border-radius: 14px !important;
          font-weight: 700 !important;
          font-size: 16px !important;
          box-shadow: 0 20px 40px -10px rgba(79, 70, 229, 0.3) !important;
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }

        .hero-btn-primary:hover {
          transform: translateY(-4px) scale(1.02) !important;
          box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.4) !important;
        }

        .hero-btn-secondary {
          background: rgba(255, 255, 255, 0.8) !important;
          border: 1px solid #E2E8F0 !important;
          color: ${COLORS.textMain} !important;
          height: 60px !important;
          padding: 0 36px !important;
          border-radius: 14px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease !important;
        }

        .hero-btn-secondary:hover {
          background: #FFFFFF !important;
          border-color: ${COLORS.primary} !important;
          transform: translateY(-2px);
        }
      `}</style>

      {/* 3. CONTENT AREA */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '1100px',
        }}>
        {/* ENTERPRISE BADGE */}
        <motion.div style={{ marginBottom: '40px' }}>
          <span
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              padding: '10px 20px',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 700,
              color: COLORS.textMain,
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}>
            <ThunderboltFilled /> Scale Engineering with Crestcode
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          style={{
            fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
            fontWeight: 800,
            color: COLORS.textMain,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '32px',
            fontFamily: FONT_FAMILY,
          }}>
          We Own the{' '}
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

        {/* DESCRIPTION */}
        <motion.p
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
            color: COLORS.textMuted,
            lineHeight: 1.7,
            maxWidth: '900px',
            margin: '0 auto 56px auto',
            fontWeight: 450,
            fontFamily: FONT_FAMILY,
          }}>
          Crestcode is a high-performance technical consultancy providing
          full-spectrum engineering expertise and strategic advisory for
          enterprises building the next generation of digital infrastructure.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '100px',
          }}>
          <Button type="primary" size="large" className="hero-btn-primary">
            Initiate Project <ArrowRightOutlined />
          </Button>
          <Button size="large" className="hero-btn-secondary">
            Our Services
          </Button>
        </motion.div>

        {/* LOGO WALL (The "Industrial" Seal of Approval) */}
      </motion.div>
    </div>
  );
}

export default Hero;
