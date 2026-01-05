'use client';

import React from 'react';
import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const { Text, Paragraph } = Typography;

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9', // Standard Industrial Slate-Blue
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  primary: '#4F46E5', // Industrial Indigo
  border: '#E2E8F0', // Crisp Edge
  white: '#FFFFFF',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

const LeadershipTestimonial = () => {
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
      {/* ARCHITECTURAL BACKGROUND GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      {/* GLASS-MORPHIC CONTAINER */}
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
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '64px 48px',
          border: `1px solid ${COLORS.white}`,
          boxShadow: '0 20px 50px -15px rgba(0,0,0,0.04)',
        }}>
        <Row gutter={[48, 40]} align="middle">
          {/* Author Section (Left) */}
          <Col xs={24} md={8} lg={7}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  margin: '0 auto 28px auto',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: `0 12px 30px -10px rgba(79, 70, 229, 0.2)`,
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
                  color: COLORS.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                }}>
                CEO & Founder
              </Text>
            </div>
          </Col>

          {/* Quote Section (Right) */}
          <Col xs={24} md={16} lg={17}>
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              {/* Refined Quote Mark */}
              <div
                style={{
                  fontSize: '90px',
                  color: COLORS.primary,
                  lineHeight: 1,
                  fontFamily: 'serif',
                  opacity: 0.1,
                  position: 'absolute',
                  top: '-40px',
                  left: '-15px',
                  userSelect: 'none',
                  fontWeight: 900,
                }}>
                “
              </div>

              <Paragraph
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: COLORS.textBlack,
                  fontFamily: FONT_PRIMARY,
                  margin: 0,
                  letterSpacing: '-0.015em',
                  fontStyle: 'normal',
                }}>
                A well-structured development process is the foundation of
                successful software projects. By combining{' '}
                <span style={{ color: COLORS.primary }}>clear planning</span>,
                an agile approach, and continuous early feedback, we ensure
                every product aligns with business goals. Our methodology
                minimizes risks and delivers{' '}
                <span style={{ fontWeight: 800 }}>
                  high-quality applications
                </span>{' '}
                on time and within budget.
              </Paragraph>

              {/* Engineering Detail Line */}
              <div
                style={{
                  width: '64px',
                  height: '4px',
                  backgroundColor: COLORS.primary,
                  marginTop: '40px',
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

export default LeadershipTestimonial;
