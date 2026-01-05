'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Ruler, Monitor, Settings, Users, Check } from 'lucide-react';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgDeep: '#020617', // Your requested Deep Dark BG
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC',
  textDim: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.08)',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  points: {
    left: string[];
    right: string[];
  };
  image: string;
}

const services: Service[] = [
  {
    id: 'rnd',
    title: 'R&D & Analysis',
    icon: <FileText size={32} />,
    description:
      'Our R&D and business analyst team study your business and ideas in detail to help you reduce market and technical risks across the entire web app development:',
    points: {
      left: [
        'Validate business idea',
        'Choose the right technology',
        'Exact project estimation',
      ],
      right: [
        'Create solution vision',
        'Plan product release',
        'Avoid unplanned costs',
      ],
    },
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'uxui',
    title: 'UX/UI Design',
    icon: <Ruler size={32} />,
    description:
      'Our design team creates intuitive and engaging user experiences that align with your brand and business goals, ensuring your web application stands out:',
    points: {
      left: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design & branding',
      ],
      right: [
        'Usability testing',
        'Responsive design systems',
        'Accessibility compliance',
      ],
    },
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'webdev',
    title: 'Web Development',
    icon: <Monitor size={32} />,
    description:
      'Our experienced developers build scalable, secure, and high-performance web applications using cutting-edge technologies and best practices:',
    points: {
      left: ['Frontend development', 'Backend architecture', 'API integration'],
      right: [
        'Database optimization',
        'Security implementation',
        'Performance tuning',
      ],
    },
    image:
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'qa',
    title: 'QA & Testing',
    icon: <Settings size={32} />,
    description:
      'Our quality assurance team ensures your web application is reliable, bug-free, and performs flawlessly across all platforms and devices:',
    points: {
      left: ['Functional testing', 'Performance testing', 'Security testing'],
      right: [
        'Automated test coverage',
        'Cross-browser compatibility',
        'Regression testing',
      ],
    },
    image:
      'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'staff',
    title: 'Staff Augmentation',
    icon: <Users size={32} />,
    description:
      'We provide skilled professionals to seamlessly integrate with your team, helping you scale quickly and efficiently while maintaining quality:',
    points: {
      left: [
        'Dedicated developers',
        'Flexible team scaling',
        'Expert specialists',
      ],
      right: [
        'Seamless integration',
        'Knowledge transfer',
        'Long-term partnerships',
      ],
    },
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function OurServices() {
  const [activeService, setActiveService] = useState<string>('rnd');
  const currentService =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDeep,
        color: COLORS.textWhite,
        fontFamily: FONT_PRIMARY,
        padding: '40px 24px',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* 1. ARCHITECTURAL GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textDim}15 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
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
        {/* HEADER - CENTERED TO MATCH ALL OTHER COMPONENTS */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
            maxWidth: '900px', // Prevents the title from stretching too wide on ultra-large screens
            margin: '0 auto 80px auto',
          }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: COLORS.textWhite,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            Custom Web application{' '}
            <span style={{ color: COLORS.primary }}>services</span>
          </h1>
        </div>

        {/* TAB NAVIGATION */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            marginBottom: '80px',
            borderBottom: `1px solid ${COLORS.border}`,
            paddingBottom: '24px',
          }}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                transition: '0.3s all',
                opacity: activeService === service.id ? 1 : 0.4,
                position: 'relative',
              }}>
              <div
                style={{
                  color:
                    activeService === service.id
                      ? COLORS.primary
                      : COLORS.textWhite,
                  transition: '0.3s all',
                }}>
                {service.icon}
              </div>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color:
                    activeService === service.id
                      ? COLORS.textWhite
                      : COLORS.textDim,
                  textAlign: 'center',
                }}>
                {service.title}
              </span>
              {activeService === service.id && (
                <motion.div
                  layoutId="activeTab"
                  style={{
                    position: 'absolute',
                    bottom: '-25px',
                    width: '100%',
                    height: '2px',
                    backgroundColor: COLORS.primary,
                    boxShadow: `0 0 15px ${COLORS.primary}`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}>
            <div>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  marginBottom: '24px',
                  color: COLORS.textWhite,
                }}>
                {currentService.title}
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: COLORS.textDim,
                  lineHeight: '1.7',
                  marginBottom: '40px',
                  fontWeight: 500,
                }}>
                {currentService.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '32px',
                }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}>
                  {currentService.points.left.map((point, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '10px',
                      }}>
                      <Check size={18} color={COLORS.primary} strokeWidth={3} />
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: 500,
                          color: COLORS.textWhite,
                        }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}>
                  {currentService.points.right.map((point, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '10px',
                      }}>
                      <Check size={18} color={COLORS.primary} strokeWidth={3} />
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: 500,
                          color: COLORS.textWhite,
                        }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src={currentService.image}
                alt={currentService.title}
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}
