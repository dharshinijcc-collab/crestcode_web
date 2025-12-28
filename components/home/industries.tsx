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

const { Title, Text, Paragraph } = Typography;

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  sectionBg: '#F8FAFC', // Subtle off-white slate
  primaryBlue: '#2563EB', // Precision IT Blue
  textMain: '#0F172A', // Deep Navy/Black
  textMuted: '#64748B', // Architectural Slate
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const industries = [
  {
    title: 'Healthcare',
    icon: <Stethoscope size={32} />,
    desc: 'We develop services, tools, and systems to provide patients and staff with up-to-date software.',
  },
  {
    title: 'Education',
    icon: <GraduationCap size={32} />,
    desc: 'E-learning solutions that make education flexible, engaging, and highly efficient.',
  },
  {
    title: 'Retail',
    icon: <Store size={32} />,
    desc: 'We build stronger connections with customers through web and mobile applications with superior shopping experience and 24/7 availability.',
  },
  {
    title: 'Manufacturing',
    icon: <Factory size={32} />,
    desc: 'Comprehensive software solutions for supply chain management, inventory management, warehouses, production monitoring, process automation, and more.',
  },
  {
    title: 'Professional Services',
    icon: <Briefcase size={32} />,
    desc: 'We develop CRM, management tools, billing products, document management systems, and more. Our solutions are built for professionals by professionals.',
  },
  {
    title: 'Telecoms',
    icon: <Network size={32} />,
    desc: 'We enhance global communication by building solutions for network management, customer experience, IoT, security, automation, and analytics.',
  },
  {
    title: 'Logistics & Transportation',
    icon: <Truck size={32} />,
    desc: 'Software for freight reservation, transportation management, and streamlined supply chain operations to keep goods and business moving.',
  },
  {
    title: 'Engineering & Construction',
    icon: <HardHat size={32} />,
    desc: 'From advanced BIM solutions and cost estimation tools to IoT integration, we lay the foundation for the construction industry.',
  },
  {
    title: 'Marketing & Advertising',
    icon: <Target size={32} />,
    desc: 'We build effective Client relationships with marketing automation tools that help optimize strategies, gather insights, and achieve brave goals.',
  },
];

const IndustriesSection = () => {
  return (
    <section
      style={{ padding: '100px 24px', backgroundColor: COLORS.sectionBg }}>
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
            <span style={{ color: COLORS.primaryBlue }}>Industries</span> we
            help
          </Title>
        </div>

        {/* GRID LAYOUT */}
        <Row gutter={[48, 64]}>
          {industries.map((item, index) => (
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
                  {item.icon}
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
    </section>
  );
};

export default IndustriesSection;
