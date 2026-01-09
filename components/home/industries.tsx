'use client';

import React from 'react';
import { Row, Col, Typography } from 'antd';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  GraduationCap,
  Store,
  Factory,
  Briefcase,
  Network,
  Truck,
  HardHat,
  Target,
} from 'lucide-react';
import { useAdmin } from '../admin/context';

const { Title, Paragraph } = Typography;

const ICON_MAP = {
  Stethoscope: <Stethoscope size={32} />,
  GraduationCap: <GraduationCap size={32} />,
  Store: <Store size={32} />,
  Factory: <Factory size={32} />,
  Briefcase: <Briefcase size={32} />,
  Network: <Network size={32} />,
  Truck: <Truck size={32} />,
  HardHat: <HardHat size={32} />,
  Target: <Target size={32} />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  sectionBg: '#F8FAFC', // Subtle off-white slate
  primaryBlue: '#2563EB', // Precision IT Blue
  textMain: '#0F172A', // Deep Navy/Black
  textMuted: '#64748B', // Architectural Slate
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function IndustriesSection() {
  const { config } = useAdmin();
  const INDUSTRIES_CONTENT = config?.home?.IndustriesSection;
  console.log("INDUSTRIES_CONTENT",INDUSTRIES_CONTENT)


  if (!INDUSTRIES_CONTENT) return null;
  return (
    <section
      style={{ padding: '40px 24px', backgroundColor: COLORS.sectionBg }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* SECTION HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <Title
            level={2}
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: COLORS.textMain,
              marginBottom: '16px',
            }}>
            <span style={{ color: COLORS.primaryBlue }}>
              {INDUSTRIES_CONTENT.header.highlight}
            </span>
            {INDUSTRIES_CONTENT.header.normalText}
          </Title>
        </div>

        {/* GRID LAYOUT */}
        <Row gutter={[48, 64]}>
          {INDUSTRIES_CONTENT.items.map((item, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ height: '100%' }}>
                {/* ICON CONTAINER */}
                <div
                  style={{
                    color: COLORS.primaryBlue,
                    marginBottom: '24px',
                    display: 'inline-block',
                  }}>
                  {ICON_MAP[item.iconName as IconName]}
                </div>

                {/* CONTENT */}
                <Title
                  level={4}
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 700,
                    fontSize: '24px',
                    color: COLORS.textMain,
                    marginBottom: '16px',
                  }}>
                  {item.title}
                </Title>

                <Paragraph
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: COLORS.textMuted,
                    margin: 0,
                  }}>
                  {item.desc}
                </Paragraph>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default IndustriesSection;