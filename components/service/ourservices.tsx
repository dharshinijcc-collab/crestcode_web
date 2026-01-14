'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  BarChartOutlined,
  CodeOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

// --- DATA CONFIGURATION (JSON TYPE) ---
const SERVICES_CONTENT = {
  sectionHeader: {
    titlePrefix: "Our ",
    titleHighlight: "services",
    description: "Strategic engineering services built for performance, security, and global scalability."
  },
  services: [
    {
      id: 'custom-software',
      title: '1. Partner with US',
      path: '/sd_services',
      description:
        ' partner with crestcode to build the product together.',
    },
    {
      id: 'ai-ml',
      title: '2. Get a POD',
      path: '/aiml_services',
      description:
        ' you know how to build or have worked with engineers before',
    },
    {
      id: 'web-dev',
      title: '3. Get our service ',
      path: '/web_services',
      description:
        'you want us to build something for you',
    },
  ]
};

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9',
  primary: '#4F46E5',
  accentRed: '#FF5757',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

// Icon mapping function
const getServiceIcon = (serviceId: string) => {
  switch (serviceId) {
    case 'custom-software':
      return <BarChartOutlined style={{ fontSize: '36px' }} />;
    case 'ai-ml':
      return <CodeOutlined style={{ fontSize: '36px' }} />;
    case 'web-dev':
      return <GlobalOutlined style={{ fontSize: '36px' }} />;
    default:
      return <div style={{ width: '36px', height: '36px' }} />;
  }
};

export default function OurServices() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section
      style={{
        padding: '0px 24px',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: FONT_PRIMARY,
        paddingBottom: '32px',
      }}
    >
      {/* 1. ARCHITECTURAL DOT GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.05em',
              marginBottom: '20px',
            }}
          >
            {SERVICES_CONTENT.sectionHeader.titlePrefix}
            <span style={{ color: COLORS.primary }}>
              {SERVICES_CONTENT.sectionHeader.titleHighlight}
            </span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: COLORS.textMuted,
              lineHeight: '1.7',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            {SERVICES_CONTENT.sectionHeader.description}
          </p>
        </motion.div>

        {/* 3-COLUMN GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {SERVICES_CONTENT.services.map((service, index) => (
            <motion.div
              key={service.id}
              style={{
                backgroundColor: COLORS.white,
                padding: '20px',
                borderRadius: '16px',
                border: `1px solid ${COLORS.border}`,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.05)',
                transition: 'border-color 0.3s ease',
              }}
            >
              <div>
                <div
                  style={{
                    color: COLORS.primary,
                    marginBottom: '16px',
                    display: 'inline-flex',
                    padding: '10px',
                    background: `${COLORS.primary}08`,
                    borderRadius: '12px',
                    border: `1px solid ${COLORS.primary}15`,
                  }}
                >
                  {getServiceIcon(service.id)}
                </div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    marginBottom: '16px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: COLORS.textMuted,
                    lineHeight: '1.8',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
