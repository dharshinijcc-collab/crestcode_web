import React from 'react';
import { Row, Col, Typography, Rate } from 'antd';
import { motion } from 'framer-motion';
import {
  Eye,
  Users,
  DollarSign,
  Target,
  UserPlus,
  ShieldAlert,
  RefreshCw,
} from 'lucide-react';

const { Title, Paragraph, Text } = Typography;

// --- INDUSTRIAL DARK THEME TOKENS ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primaryBlue: '#3B82F6', // Electric Blue
  textWhite: '#F8FAFC', // Off-white
  textDim: '#94A3B8', // Muted Slate
  cardBg: 'rgba(255, 255, 255, 0.03)',
  cardBorder: 'rgba(255, 255, 255, 0.08)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const features = [
  {
    title: 'Full transparency',
    icon: <Eye size={28} />,
    desc: 'The whole process is as transparent as possible. We immediately establish a roadmap, clear KPIs and conditions for their implementation, type of reporting, daily events, sync-ups, and product testing conditions.',
  },
  {
    title: 'Client involvement',
    icon: <Users size={28} />,
    desc: "We determine the degree of Client involvement. We can work on a turnkey basis, or we may work with the direct participation of the Client's management - our processes are adapted easily.",
  },
  {
    title: 'Reasonable costs',
    icon: <DollarSign size={28} />,
    desc: 'We offer fair prices for both parties: you get a well-tested application with easily maintainable code, and we get enough resources to grow as professionals.',
  },
  {
    title: 'Scoping',
    icon: <Target size={28} />,
    desc: 'At Crestcode, accurate scoping ensures a thorough understanding of your business needs and project requirements. We define goals, prioritize features, and establish a clear development roadmap.',
  },
  {
    title: 'Resource planning',
    icon: <UserPlus size={28} />,
    desc: "The project's success heavily relies on the people. Over the past years, we elaborated techniques to select the most suitable candidates for every role. We ensure that the candidate is a perfect fit.",
  },
  {
    title: 'Risk management',
    icon: <ShieldAlert size={28} />,
    desc: 'Honesty about project risks, proactiveness, and a risk mitigation plan - this is our approach. We continuously evaluate operational, technology, business, and external risk factors.',
  },
  //   {
  //     title: 'Change management',
  //     icon: <RefreshCw size={28} />,
  //     desc: "Requirements change is inevitable. Our well-established change management process ensures the project's success without compromising quality or timelines through structured impact assessment.",
  //   },
];

const WhyCrestcode = () => {
  return (
    <section
      style={{
        padding: '40px 24px',
        backgroundColor: COLORS.bgDark,
        color: COLORS.textWhite,
        fontFamily: FONT_FAMILY,
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <Title
            level={2}
            style={{
              color: COLORS.textWhite,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
            }}>
            Why companies work with{' '}
            <span style={{ color: COLORS.primaryBlue }}>Crestcode</span>
          </Title>
        </div>

        {/* GRID LAYOUT */}
        <Row gutter={[64, 80]}>
          {features.map((item, index) => (
            <Col xs={24} md={12} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  {/* ICON */}
                  <div style={{ color: COLORS.primaryBlue, flexShrink: 0 }}>
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <Title
                      level={4}
                      style={{
                        color: COLORS.textWhite,
                        margin: '0 0 16px 0',
                        fontSize: '24px',
                        fontWeight: 700,
                      }}>
                      {item.title}
                    </Title>
                    <Paragraph
                      style={{
                        color: COLORS.textDim,
                        fontSize: '16px',
                        lineHeight: '1.7',
                        margin: 0,
                      }}>
                      {item.desc}
                    </Paragraph>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}

          {/* CLUTCH RATING CARD */}
          {/* <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                background: COLORS.cardBg,
                border: `1px solid ${COLORS.cardBorder}`,
                padding: '40px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
              <Title
                level={3}
                style={{ color: COLORS.textWhite, margin: 0, fontWeight: 800 }}>
                Clutch
              </Title>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Rate
                  disabled
                  defaultValue={5}
                  style={{ color: '#FF4D4F', fontSize: '18px' }}
                />
                <Text
                  style={{
                    color: COLORS.textWhite,
                    fontSize: '18px',
                    fontWeight: 700,
                  }}>
                  4.9
                </Text>
              </div>
            </motion.div>
          </Col> */}
        </Row>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');
      `}</style>
    </section>
  );
};

export default WhyCrestcode;
