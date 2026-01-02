'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Server, Component, Gem } from 'lucide-react';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9', // High-end Industrial Slate-Blue
  primary: '#4F46E5', // Precision Indigo
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

const technologies = [
  {
    id: 1,
    name: 'Java',
    icon: <Coffee size={32} />,
    description:
      'A powerful programming language for secure, enterprise-level applications. Its platform independence and robust libraries enable the development of custom software for complex business processes.',
  },
  {
    id: 2,
    name: 'Node.js',
    icon: <Server size={32} />,
    description:
      'Fast and scalable server-side JavaScript runtime. Perfect for real-time applications, REST APIs, and microservices with high performance and computational efficiency.',
  },
  {
    id: 3,
    name: 'React.js',
    icon: <Component size={32} />,
    description:
      'Leading library for dynamic user interfaces. With component-based architecture, React enables fast, modern web applications with exceptional user experiences.',
  },
  {
    id: 4,
    name: 'Ruby (RoR)',
    icon: <Gem size={32} />,
    description:
      'A robust web framework known for efficiency. A proven choice for rapid development of maintainable web applications with high scalability requirements.',
  },
];

export default function TechnologiesSection() {
  return (
    <section
      style={{
        padding: '40px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* 1. ENGINEERING GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1.5px, transparent 1.5px)`,
          backgroundSize: '50px 50px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            Technologies{' '}
            <span style={{ color: COLORS.primary }}>we master</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '850px',
              margin: '0 auto',
            }}>
            We leverage a versatile tech stack mastered by highly skilled
            specialists. Our expertise is continually enriched through rigorous
            knowledge-sharing, ensuring the latest practices are applied to
            every project.
          </p>
        </motion.div>

        {/* 2-COLUMN TECHNOLOGY BENTO GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '32px',
          }}>
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: COLORS.white,
                padding: '48px',
                borderRadius: '20px',
                border: `1px solid ${COLORS.border}`,
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                gap: '24px',
                transition: 'all 0.3s ease',
              }}>
              <div
                style={{
                  flexShrink: 0,
                  width: '64px',
                  height: '64px',
                  backgroundColor: `${COLORS.primary}08`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.primary,
                  border: `1px solid ${COLORS.primary}15`,
                }}>
                {tech.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    marginBottom: '12px',
                    letterSpacing: '-0.02em',
                  }}>
                  {tech.name}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: COLORS.textMuted,
                    lineHeight: '1.7',
                    margin: 0,
                    fontWeight: 500,
                  }}>
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        
        @media (max-width: 600px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
