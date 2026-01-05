'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Smartphone } from 'lucide-react';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#FFFFFF', // Kept as white
  primary: '#2563EB', // Precision Blue
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  cardBg: '#F8FAFC', // Slate 50 for cards
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function MobileServices() {
  const services = [
    {
      id: 'ios',
      icon: <Apple size={48} strokeWidth={1.5} />,
      title: 'iOS app development',
      description:
        'Expert native development for Apple products. We leverage all gadget capabilities, including Touch ID, Face ID, Apple Pay, and Apple Wallet. This means a fully native experience for users with maximum performance across iOS, iPad, macOS, and watchOS ecosystems.',
    },
    {
      id: 'android',
      icon: <Smartphone size={48} strokeWidth={1.5} />,
      title: 'Android app development',
      description:
        'Android apps built with Kotlin ensuring broad device compatibility across the fragmented smartphone landscape. We ensure seamless launches for different OS versions and integration of modern technologies like AI, voice control, and IoT.',
    },
    {
      id: 'cross-platform',
      icon: (
        <img
          src="/cross-platform.png"
          alt="Cross-platform"
          style={{ width: '48px', height: '48px' }}
        />
      ),
      title: 'Cross-platform apps',
      description:
        'Target both iOS and Android platforms at once. Cross-platform development allows you to build a single codebase that works across multiple operating systems, reducing development time and costs while maintaining native-like user experiences.',
    },
    {
      id: 'pwa',
      icon: (
        <img
          src="/pwa.png"
          alt="PWA"
          style={{ width: '48px', height: '48px' }}
        />
      ),
      title: 'Progressive Web Apps (PWAs)',
      description:
        'PWAs deliver app-like experiences in browsers, installable on any device without app stores. They offer offline functionality, push notifications, and fast loading times while being easily discoverable via simple URLs.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        padding: '40px 24px',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* CENTERED HEADER - Standardized with other sections */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            Our custom{' '}
            <span style={{ color: COLORS.primary }}>
              Mobile app development
            </span>{' '}
            services
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            We offer comprehensive end-to-end mobile engineering, covering every
            major platform and technology ecosystem.
          </p>
        </div>

        {/* STANDARDIZED GRID LAYOUT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '32px',
          }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card-industrial"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: COLORS.cardBg,
                borderRadius: '16px',
                padding: '38px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                border: '1px solid transparent',
              }}>
              <div
                style={{
                  marginBottom: '32px',
                  color: COLORS.primary,
                  transition: 'transform 0.3s ease',
                }}
                className="icon-wrapper">
                {service.icon}
              </div>

              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: COLORS.textBlack,
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}>
                {service.title}
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  color: COLORS.textMuted,
                  lineHeight: '1.7',
                  margin: 0,
                  fontWeight: 450,
                }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
