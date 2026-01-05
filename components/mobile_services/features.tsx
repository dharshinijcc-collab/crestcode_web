'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Key,
  Navigation,
  Settings,
  Type,
  Image,
  BarChart3,
  Check,
} from 'lucide-react';

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

export default function MobileFeatures() {
  const features = [
    {
      icon: <Key size={32} />,
      title: 'User Access & Identity',
      description:
        'Core authentication flows to keep users secure and engaged from the first interaction.',
      points: [
        'Secure registration and login',
        'Social sign-in (Google, Apple, Facebook)',
        'Password verification protocols',
        'Role-based access control',
      ],
    },
    {
      icon: <Navigation size={32} />,
      title: 'Navigation Systems',
      description:
        'Smooth navigation patterns designed for zero-friction user journeys.',
      points: [
        'Bottom tab & side menu systems',
        'Intuitive onboarding flows',
        'In-app search & smart sorting',
        'Dynamic grid & list layouts',
      ],
    },
    {
      icon: <Settings size={32} />,
      title: 'Profile Architecture',
      description:
        'Granular user management and preference handling for tailored experiences.',
      points: [
        'Identity creation & editing',
        'Optimized avatar processing',
        'Notification & locale logic',
        'Native dark/light mode support',
      ],
    },
    {
      icon: <Type size={32} />,
      title: 'Input & Interaction',
      description:
        'Robust components designed to collect and process complex user data.',
      points: [
        'Forms with real-time validation',
        'Rating & review modules',
        'Secure file & media uploads',
        'Interactive feedback systems',
      ],
    },
    {
      icon: <Image size={32} />,
      title: 'Content Display',
      description:
        "High-performance presentation of your app's core digital assets.",
      points: [
        'Advanced list & card views',
        'Galleries & media carousels',
        'Dynamic service detail pages',
        'Expandable architectural sections',
      ],
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics & Integrity',
      description:
        'Ensuring your application captures the right data and performs flawlessly.',
      points: [
        'Firebase/Google screen tracking',
        'Crash & performance monitoring',
        'Offline caching & loading states',
        'Device permission handling',
      ],
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
      {/* ARCHITECTURAL BACKGROUND GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.6,
          pointerEvents: 'none',
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
            Mobile app development{' '}
            <span style={{ color: COLORS.primary }}>features</span>
          </motion.h1>
        </div>

        {/* FEATURES GRID */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: COLORS.white,
                padding: '30px',
                borderRadius: '24px',
                border: `1px solid ${COLORS.border}`,
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
              }}>
              {/* Icon Section */}
              <div
                style={{
                  color: COLORS.primary,
                  marginBottom: '24px',
                  background: `${COLORS.primary}08`,
                  padding: '12px',
                  borderRadius: '12px',
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${COLORS.primary}15`,
                }}>
                {feature.icon}
              </div>

              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.textBlack,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}>
                {feature.title}
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: COLORS.textMuted,
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontWeight: 500,
                }}>
                {feature.description}
              </p>

              {/* Technical Points */}
              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                {feature.points.map((point, pIndex) => (
                  <li
                    key={pIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                    <Check size={14} color={COLORS.primary} strokeWidth={3} />
                    <span
                      style={{
                        fontSize: '14px',
                        color: COLORS.textBlack,
                        fontWeight: 500,
                      }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
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
