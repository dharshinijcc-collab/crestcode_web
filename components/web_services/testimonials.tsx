import React from 'react';
import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const { Text, Paragraph } = Typography;

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgLight: 'linear-gradient(135deg, #FFF5F2 0%, #F8FAFC 50%, #F0F7FF 100%)',
  inkBlue: '#1E293B',
  slateMuted: '#64748B',
  accentIndigo: '#4F46E5',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const testimonials = () => {
  return (
    <section
      style={{
        padding: '20px 24px',
        background: COLORS.bgLight,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
      }}>
      {/* Background Decorative "Industrial" Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.03) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '1350px',
          width: '100%',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '38px',
          border: '1px solid rgba(255, 255, 255, 0.7)',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.02)',
        }}>
        <Row gutter={[48, 32]} align="middle">
          {/* Author Branding (Left) */}
          <Col xs={24} md={8} lg={6}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  margin: '0 auto 24px auto',
                  borderRadius: '16px', // Industrial Sharp-Round
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  border: '4px solid white',
                }}>
                {/* Replace with actual image path */}
                <img
                  src="/asfar.jpg"
                  alt="asfar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginBottom: '4px' }}>
                <Text
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: COLORS.inkBlue,
                    fontFamily: FONT_FAMILY,
                    display: 'block',
                  }}>
                  Asfarul Huda
                </Text>
              </div>
              <Text
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: COLORS.slateMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                CEO & Founder
              </Text>
            </div>
          </Col>

          {/* Testimonial Quote (Right) */}
          <Col xs={24} md={16} lg={18}>
            <div style={{ position: 'relative', paddingLeft: '60px' }}>
              {/* Modern Industrial Quote Icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: 0,
                  fontSize: '70px',
                  color: COLORS.inkBlue,
                  lineHeight: 1,
                  fontFamily: 'serif',
                  opacity: 0.9,
                  fontWeight: 900,
                }}>
                “
              </div>

              <Paragraph
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.5,
                  color: COLORS.inkBlue,
                  fontFamily: FONT_FAMILY,
                  fontStyle: 'italic',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}>
                 A well-structured development process is the foundation of successful software projects. By combining clear planning, an agile approach, 
                 and continuous early feedback from the Client, we ensure that every product we build perfectly aligns with business goals. 
    Our approach minimizes risks, optimizes resources, and delivers high-quality applications on time and within budget.



              </Paragraph>
            </div>
          </Col>
        </Row>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default testimonials;