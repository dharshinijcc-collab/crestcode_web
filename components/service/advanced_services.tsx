'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Network, MessageSquare, BarChart3, Database } from 'lucide-react';

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

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AdvancedServices() {
  const [activeService, setActiveService] = useState('ai');

  const services: Service[] = [
    {
      id: 'ai',
      name: 'AI development',
      icon: <Cpu size={32} />,
      title: 'Artificial Intelligence',
      description:
        'From custom model training to neural network implementation, our AI services provide precision logic for healthcare diagnostics, industrial maintenance, and predictive market analysis.',
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      icon: <Network size={32} />,
      title: 'Blockchain Engineering',
      description:
        'Deploying secure, decentralized architectures. We specialize in smart contract auditing, enterprise DApp development, and highly transparent DeFi infrastructure.',
    },
    {
      id: 'chatgpt',
      name: 'LLM Integration',
      icon: <MessageSquare size={32} />,
      title: 'Advanced LLM Services',
      description:
        'Leverage Large Language Models to automate complex customer workflows and content logic. We build custom RAG pipelines and GPT-powered specialized assistants.',
    },
    {
      id: 'analytics',
      name: 'Data Analytics',
      icon: <BarChart3 size={32} />,
      title: 'Predictive Intelligence',
      description:
        'Transform raw data lakes into strategic dashboards. Our analytics platforms drive real-time decisioning through complex statistical modeling and visual intelligence.',
    },
    {
      id: 'bigdata',
      name: 'Big Data',
      icon: <Database size={32} />,
      title: 'Industrial Big Data',
      description:
        'Scalable data warehousing using Hadoop and Spark. We engineer high-velocity ETL pipelines capable of processing millions of events per second with zero latency.',
    },
  ];

  const activeData =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <section
      style={{
        padding: '40px 24px',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: FONT_PRIMARY,
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
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            Advanced{' '}
            <span style={{ color: COLORS.primary }}>Tech Services</span>
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
            We integrate emerging technologies into our software engineering
            lifecycle where they provide measurable competitive advantages for
            our clients.
          </p>
        </motion.div>

        {/* INTERACTIVE ICON TABS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '60px',
          }}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              style={{
                background:
                  activeService === service.id ? COLORS.white : 'transparent',
                border: `1px solid ${
                  activeService === service.id ? COLORS.border : 'transparent'
                }`,
                padding: '20px 30px',
                borderRadius: '16px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow:
                  activeService === service.id
                    ? '0 10px 25px -5px rgba(0,0,0,0.05)'
                    : 'none',
                minWidth: '160px',
              }}>
              <div
                style={{
                  color:
                    activeService === service.id
                      ? COLORS.primary
                      : COLORS.textMuted,
                  transition: 'color 0.3s',
                }}>
                {service.icon}
              </div>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color:
                    activeService === service.id
                      ? COLORS.textBlack
                      : COLORS.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                {service.id}
              </span>
            </button>
          ))}
        </div>

        {/* DYNAMIC CONTENT CARD */}
        <div
          style={{
            background: COLORS.white,
            borderRadius: '24px',
            padding: '64px',
            border: `1px solid ${COLORS.border}`,
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.08)',
            minHeight: '350px',
            display: 'flex',
            alignItems: 'center',
          }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px',
                }}>
                <div
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: COLORS.primary,
                  }}
                />
                <h3
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    margin: 0,
                    letterSpacing: '-0.02em',
                  }}>
                  {activeData.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: '19px',
                  color: COLORS.textMuted,
                  lineHeight: '1.8',
                  maxWidth: '900px',
                  margin: 0,
                  fontWeight: 450,
                }}>
                {activeData.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default AdvancedServices;
