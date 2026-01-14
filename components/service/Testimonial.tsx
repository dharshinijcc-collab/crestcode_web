'use client';

import React from 'react';
import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const { Text, Paragraph } = Typography;

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

const TestimonialSection = () => {
  const { config, saveConfigToServer } = useAdmin();
  const TESTIMONIAL_DATA = config?.service?.TESTIMONIAL_DATA;
  
  const handleSave = () => saveConfigToServer();

  if (!TESTIMONIAL_DATA) return null;

  return (
    <section
      style={{
        padding: '32px 24px',
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
          borderRadius: '12px',
          padding: '40px 32px',
          border: `1px solid ${COLORS.white}`,
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.03)',
        }}>
        <Row gutter={TESTIMONIAL_DATA.settings.gridGap} align="middle">
          {/* Author Branding (Left) */}
          <Col xs={24} md={8} lg={7}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 20px auto',
                  borderRadius: '12px',
                  background: COLORS.white,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)',
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
                    fontSize: '18px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    fontFamily: FONT_PRIMARY,
                    display: 'block',
                    letterSpacing: '-0.02em',
                  }}>
                  <EditableText
                    value={TESTIMONIAL_DATA.author.name}
                    onSave={handleSave}
                    configPath="service.TESTIMONIAL_DATA.author.name"
                  >
                    {TESTIMONIAL_DATA.author.name}
                  </EditableText>
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
                <EditableText
                  value={TESTIMONIAL_DATA.author.role}
                  onSave={handleSave}
                  configPath="service.TESTIMONIAL_DATA.author.role"
                >
                  {TESTIMONIAL_DATA.author.role}
                </EditableText>
              </Text>
            </div>
          </Col>

          {/* Testimonial Quote (Right) */}
          <Col xs={24} md={16} lg={17}>
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              {/* Engineering Style Quote Icon */}
              <div
                style={{
                  fontSize: '60px',
                  color: COLORS.primary,
                  lineHeight: 1,
                  fontFamily: 'serif',
                  opacity: 0.15,
                  position: 'absolute',
                  top: '-30px',
                  left: '-10px',
                  userSelect: 'none',
                }}>
                {TESTIMONIAL_DATA.settings.quoteIcon}
              </div>

              <Paragraph
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: COLORS.textBlack,
                  fontFamily: FONT_PRIMARY,
                  margin: 0,
                  letterSpacing: '-0.01em',
                  fontStyle: 'normal',
                }}>
                <EditableText
                  value={TESTIMONIAL_DATA.quote.prefix}
                  onSave={handleSave}
                  configPath="service.TESTIMONIAL_DATA.quote.prefix"
                >
                  {TESTIMONIAL_DATA.quote.prefix}
                </EditableText>
                <span style={{ color: COLORS.primary }}>
                  <EditableText
                    value={TESTIMONIAL_DATA.quote.highlight}
                    onSave={handleSave}
                    configPath="service.TESTIMONIAL_DATA.quote.highlight"
                  >
                    {TESTIMONIAL_DATA.quote.highlight}
                  </EditableText>
                </span>
                <EditableText
                  value={TESTIMONIAL_DATA.quote.suffix}
                  onSave={handleSave}
                  configPath="service.TESTIMONIAL_DATA.quote.suffix"
                >
                  {TESTIMONIAL_DATA.quote.suffix}
                </EditableText>
              </Paragraph>

              {/* Decorative Industrial Line */}
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: COLORS.primary,
                  marginTop: '24px',
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