'use client';

import React from 'react';
import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { useAdmin } from '../admin/context';

const { Text, Paragraph } = Typography;

// --- TYPE DEFINITIONS ---
interface TestimonialAuthor {
  name: string;
  role: string;
  image: string;
}

interface TestimonialQuote {
  prefix: string;
  accent: string;
  middle: string;
  bold: string;
  suffix: string;
}

interface TestimonialData {
  author: TestimonialAuthor;
  quote: TestimonialQuote;
}

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9',
  textBlack: '#020617',
  textMuted: '#64748B',
  primary: '#4F46E5',
  border: '#E2E8F0',
  white: '#FFFFFF',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

const LeadershipTestimonial = () => {
  const { config } = useAdmin();
  const TESTIMONIAL_DATA = config?.mobile?.TESTIMONIAL_DATA as TestimonialData;
  console.log(TESTIMONIAL_DATA)

  if (!TESTIMONIAL_DATA || typeof TESTIMONIAL_DATA !== 'object' || !('author' in TESTIMONIAL_DATA)) return null;
  return (
    <section
      style={{
        padding: '100px 24px',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: FONT_PRIMARY,
      }}>
      
      {/* 1. ARCHITECTURAL BACKGROUND GRID */}
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

      {/* 2. GLASS-MORPHIC BENTO CONTAINER */}
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
                  width: '160px',
                  height: '160px',
                  margin: '0 auto 28px auto',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: `0 12px 30px -10px rgba(79, 70, 229, 0.2)`,
                  border: `4px solid ${COLORS.white}`,
                }}>
                <img
                  src={TESTIMONIAL_DATA.author.image}
                  alt={TESTIMONIAL_DATA.author.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginBottom: '4px' }}>
                <Text
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    fontFamily: FONT_PRIMARY,
                    display: 'block',
                    letterSpacing: '-0.02em',
                  }}>
                  {TESTIMONIAL_DATA.author.name}
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
                {TESTIMONIAL_DATA.author.role}
              </Text>
            </div>
          </Col>

          {/* Quote Section (Right) */}
          <Col xs={24} md={16} lg={17}>
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              {/* Refined Quote Mark */}
              <div
                style={{
                  fontSize: '120px',
                  color: COLORS.primary,
                  lineHeight: 1,
                  fontFamily: 'serif',
                  opacity: 0.1,
                  position: 'absolute',
                  top: '-60px',
                  left: '-25px',
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
                }}>
                {TESTIMONIAL_DATA.quote.prefix}{' '}
                <span style={{ color: COLORS.primary }}>{TESTIMONIAL_DATA.quote.accent}</span>
                {TESTIMONIAL_DATA.quote.middle}{' '}
                <span style={{ fontWeight: 800 }}>
                  {TESTIMONIAL_DATA.quote.bold}
                </span>{' '}
                {TESTIMONIAL_DATA.quote.suffix}
              </Paragraph>

              {/* Architectural Detail Line */}
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