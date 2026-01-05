'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Shield, Cloud, Cog, Globe2, Monitor } from 'lucide-react';

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

export default function WebFeatures() {
  const features = [
    {
      icon: <Puzzle size={40} />,
      title: '3rd Party Services Integration',
      description:
        'Web applications are easily connected to multiple third-party services, from payment gateways to complex business automation suites.',
    },
    {
      icon: <Shield size={40} />,
      title: 'Enterprise Security',
      description:
        'We focus on securing our web apps by implementing role-based permission systems, transactions, and robust data-sharing protection.',
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud-Native Architecture',
      description:
        'Adopting cloud services and cutting-edge real-time technologies, leveraging managed services from top-tier cloud vendors.',
    },
    {
      icon: <Cog size={40} />,
      title: 'Microservices Architecture',
      description:
        'Building applications using microservices allows for better scalability, maintainability, and independent deployment cycles.',
    },
    {
      icon: <Globe2 size={40} />,
      title: 'Universal Accessibility',
      description:
        'Designed to be accessible to all users, following WCAG guidelines and ensuring cross-device compatibility.',
    },
    {
      icon: <Monitor size={40} />,
      title: 'System Stability',
      description:
        'We ensure application stability through comprehensive automated testing, monitoring, and software development best practices.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: COLORS.bgBase,
        color: COLORS.textBlack,
        fontFamily: FONT_PRIMARY,
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* 1. ARCHITECTURAL GRID OVERLAY */}
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

      <div
        style={{
          maxWidth: '1250px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        {/* CENTERED HEADER */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '100px',
            maxWidth: '900px',
            margin: '0 auto 100px auto',
          }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: COLORS.textBlack,
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            Our custom Web development{' '}
            <span style={{ color: COLORS.primary }}>features</span>
          </motion.h1>
        </div>
        {/* FEATURES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
          }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}>
              {/* Icon Container with Subtle Squircle Background */}
              <div
                style={{
                  color: COLORS.primary,
                  marginBottom: '32px',
                  background: `${COLORS.primary}08`,
                  padding: '16px',
                  borderRadius: '14px',
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${COLORS.primary}15`,
                  transition: 'all 0.5s ease',
                }}
                className="icon-wrapper">
                {feature.icon}
              </div>

              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.textBlack,
                  marginBottom: '16px',
                  transition: 'color 0.3s ease',
                }}>
                {feature.title}
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  color: COLORS.textMuted,
                  lineHeight: '1.7',
                  margin: 0,
                  fontWeight: 500,
                }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}
