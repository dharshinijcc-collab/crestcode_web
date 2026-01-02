'use client';

import React from 'react';
import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const { Text, Paragraph } = Typography;

// --- MATCHING INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9', // High-end Industrial Slate-Blue (Matches previous sections)
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  primary: '#4F46E5', // Industrial Indigo
  border: '#E2E8F0', // Crisp Edge
  white: '#FFFFFF',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

const TestimonialSection = () => {
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
      {/* 1. ENGINEERING GRID OVERLAY (Matches Hero/Services) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* 2. DYNAMIC CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '1200px',
          width: '100%',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px', // Sharp Industrial Edge (Matches Bento Cards)
          padding: '60px 48px',
          border: `1px solid ${COLORS.white}`,
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.03)',
        }}>
        <Row gutter={[48, 40]} align="middle">
          {/* Author Branding (Left) */}
          <Col xs={24} md={8} lg={7}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  margin: '0 auto 28px auto',
                  borderRadius: '12px', // Squircle shape for premium tech feel
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)',
                  border: `4px solid ${COLORS.white}`,
                }}>
                <img
                  src="/asfar.jpg"
                  alt="Asfarul Huda"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginBottom: '4px' }}>
                <Text
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    fontFamily: FONT_PRIMARY,
                    display: 'block',
                    letterSpacing: '-0.02em',
                  }}>
                  Asfarul Huda
                </Text>
              </div>
              <Text
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: COLORS.primary, // Using brand indigo for the role
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                }}>
                CEO & Founder
              </Text>
            </div>
          </Col>

          {/* Testimonial Quote (Right) */}
          <Col xs={24} md={16} lg={17}>
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              {/* Engineering Style Quote Icon */}
              <div
                style={{
                  fontSize: '80px',
                  color: COLORS.primary,
                  lineHeight: 1,
                  fontFamily: 'serif',
                  opacity: 0.15,
                  position: 'absolute',
                  top: '-30px',
                  left: '-10px',
                  userSelect: 'none',
                }}>
                “
              </div>

              <Paragraph
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  fontWeight: 600, // Semi-bold for technical authority
                  lineHeight: 1.6,
                  color: COLORS.textBlack,
                  fontFamily: FONT_PRIMARY,
                  margin: 0,
                  letterSpacing: '-0.01em',
                  fontStyle: 'normal', // Cleaner professional look
                }}>
                We strive to become a{' '}
                <span style={{ color: COLORS.primary }}>
                  technological partner
                </span>{' '}
                to our Clients. It’s about saying no to unfeasible ideas,
                offering proactive advice, maintaining honest communication, and
                avoiding unrealistic expectations. We ensure every decision
                delivers genuine value, staying in touch like a trusted personal
                assistant.
              </Paragraph>

              {/* Decorative Industrial Line */}
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: COLORS.primary,
                  marginTop: '32px',
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

export default TestimonialSection;
