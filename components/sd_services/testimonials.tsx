'use client';

import React from 'react';
import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { useAdmin } from '../admin/context';

const { Text, Paragraph } = Typography;

// --- DATA CONFIGURATION (JSON TYPE) ---

// --- UNIFIED INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9', 
  textBlack: '#020617', 
  textMuted: '#64748B', 
  primary: '#4F46E5', 
  border: '#E2E8F0', 
  white: '#FFFFFF',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

const Testimonials = () => {
  const { config } = useAdmin();
  const TESTIMONIAL_DATA = config?.sd_services?.TESTIMONIAL_DATA;
  console.log()
  
  if (!TESTIMONIAL_DATA) return null;
  return (
    <section
      style={{
        padding: '40px 24px',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: FONT_PRIMARY,
      }}>
      
      {/* 1. ENGINEERING GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      {/* 2. GLASS-MORPHIC CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '1250px',
          width: '100%',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(24px)',
          borderRadius: '24px',
          padding: '80px 60px',
          border: `1px solid ${COLORS.white}`,
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.05)',
        }}>
        <Row gutter={[64, 48]} align="middle">
          
          {/* Founder Branding (Left) */}
          <Col xs={24} md={8} lg={7}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '160px',
                  height: '160px',
                  margin: '0 auto 32px auto',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: `0 20px 40px -10px rgba(79, 70, 229, 0.25)`,
                  border: `4px solid ${COLORS.white}`,
                }}>
                <img
                  src={TESTIMONIAL_DATA.founder.image}
                  alt={TESTIMONIAL_DATA.founder.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginBottom: '6px' }}>
                <Text
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    fontFamily: FONT_PRIMARY,
                    display: 'block',
                    letterSpacing: '-0.02em',
                  }}>
                  {TESTIMONIAL_DATA.founder.name}
                </Text>
              </div>
              <Text
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: COLORS.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}>
                {TESTIMONIAL_DATA.founder.role}
              </Text>
            </div>
          </Col>

          {/* Vision Quote (Right) */}
          <Col xs={24} md={16} lg={17}>
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              {/* Refined Quote Mark */}
              <div
                style={{
                  fontSize: '110px',
                  color: COLORS.primary,
                  lineHeight: 1,
                  fontFamily: 'serif',
                  opacity: 0.1,
                  position: 'absolute',
                  top: '-50px',
                  left: '-20px',
                  userSelect: 'none',
                  fontWeight: 900,
                }}>
                “
              </div>

              <Paragraph
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  fontWeight: 600,
                  lineHeight: 1.7,
                  color: COLORS.textBlack,
                  fontFamily: FONT_PRIMARY,
                  margin: 0,
                  letterSpacing: '-0.01em',
                  fontStyle: 'normal',
                }}>
                {TESTIMONIAL_DATA.quote.main}{' '}
                <span style={{ color: COLORS.primary }}>{TESTIMONIAL_DATA.quote.highlight1}</span>{' '}
                {TESTIMONIAL_DATA.quote.middle}{' '}
                <span style={{ fontWeight: 800 }}>{TESTIMONIAL_DATA.quote.highlight2}</span>
              </Paragraph>

              {/* Architectural Accent Line */}
              <div
                style={{
                  width: '80px',
                  height: '4px',
                  backgroundColor: COLORS.primary,
                  marginTop: '48px',
                  borderRadius: '2px',
                }}
              />
            </div>
          </Col>
        </Row>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default Testimonials;