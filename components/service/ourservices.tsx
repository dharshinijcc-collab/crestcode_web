'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  BarChartOutlined,
  CodeOutlined,
  GlobalOutlined,
  MobileOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

// --- DATA CONFIGURATION (JSON TYPE) ---
const SERVICES_CONTENT = {
  sectionHeader: {
    titlePrefix: "Our ",
    titleHighlight: "services",
    description: "Strategic engineering services built for performance, security, and global scalability."
  },
  ctaLabel: "Learn More",
  services: [
    {
      id: 'custom-software',
      icon: <BarChartOutlined style={{ fontSize: '36px' }} />,
      title: 'Custom software development',
      path: '/sd_services',
      description:
        'We develop and deliver custom solutions of varying complexity for both startup and enterprise Clients. Our approach delves deeply into business goals, bringing visions to life with cutting-edge technologies and robust architectural planning.',
    },
    {
      id: 'ai-ml',
      icon: <CodeOutlined style={{ fontSize: '36px' }} />,
      title: 'AI & Machine Learning',
      path: '/aiml_services',
      description:
        'Transform your business with predictive analytics and intelligent automation. We leverage the latest AI models to build systems that drive massive business value and enhance strategic decision-making through data-driven intelligence.',
    },
    {
      id: 'web-dev',
      icon: <GlobalOutlined style={{ fontSize: '36px' }} />,
      title: 'Web Development',
      path: '/web_services',
      description:
        'Modern, responsive web applications built with performance-first architectures. Optimized for speed, SEO, and accessibility to ensure exceptional user experiences across all digital touchpoints and enterprise platforms.',
    },
    {
      id: 'mobile-dev',
      icon: <MobileOutlined style={{ fontSize: '36px' }} />,
      title: 'Mobile App Development',
      path: '/mobile_services',
      description:
        'Native and cross-platform mobile solutions that engage users. We develop feature-rich iOS and Android applications, ensuring flawless performance and intuitive industrial-grade UX for a global audience.',
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
        paddingBottom: '40px',
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
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.05em',
              marginBottom: '24px',
            }}
          >
            {SERVICES_CONTENT.sectionHeader.titlePrefix}
            <span style={{ color: COLORS.primary }}>
              {SERVICES_CONTENT.sectionHeader.titleHighlight}
            </span>
          </h2>
          <p
            style={{
              fontSize: '19px',
              color: COLORS.textMuted,
              lineHeight: '1.7',
              maxWidth: '750px',
              margin: '0 auto',
            }}>
            {SERVICES_CONTENT.sectionHeader.description}
          </p>
        </motion.div>

        {/* 2-COLUMN GRID FOR BETTER READABILITY */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '32px',
          }}>
          {SERVICES_CONTENT.services.map((service, index) => (
            <motion.div
              key={service.id}
              style={{
                backgroundColor: COLORS.white,
                padding: '36px',
                borderRadius: '20px',
                border: `1px solid ${COLORS.border}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.05)',
                transition: 'border-color 0.3s ease',
              }}>
              <div>
                <div
                  style={{
                    color: COLORS.primary,
                    marginBottom: '22px',
                    display: 'inline-flex',
                    padding: '16px',
                    background: `${COLORS.primary}08`,
                    borderRadius: '14px',
                    border: `1px solid ${COLORS.primary}15`,
                  }}>
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    marginBottom: '20px',
                    letterSpacing: '-0.03em',
                  }}>
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: COLORS.textMuted,
                    lineHeight: '1.8',
                    marginBottom: '40px',
                  }}>
                  {service.description}
                </p>
              </div>

              <button
                onClick={() => router.push(service.path)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: COLORS.accentRed,
                  fontWeight: 800,
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  padding: 0,
                  width: 'fit-content',
                  transition: 'gap 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '16px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '10px')}>
                {SERVICES_CONTENT.ctaLabel} <ArrowRightOutlined />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        @media (max-width: 600px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}