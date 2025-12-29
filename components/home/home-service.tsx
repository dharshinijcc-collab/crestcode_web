import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightOutlined } from '@ant-design/icons';

interface ServiceItem {
  title: string;
  description: string;
  link?: string;
}

const serviceData: ServiceItem[] = [
  {
    title: 'Software Product Development',
    description:
      'We develop custom software products from concept to deployment. Our team handles the entire development lifecycle, creating scalable and maintainable solutions that meet your business objectives and deliver exceptional user experiences.',
    link: '/software-development',
  },
  {
    title: 'AI and ML',
    description:
      'Crestcode leverages artificial intelligence and machine learning to build intelligent solutions. We develop AI-powered applications, create predictive models, and implement machine learning algorithms that transform your business data into actionable insights.',
    link: '/ai-ml',
  },
  {
    title: 'Web Development',
    description:
      'Our web development services cover everything from simple websites to complex web applications. We use modern frameworks and best practices to build responsive, fast, and secure web solutions that work seamlessly across all devices.',
    link: '/web-development',
  },
  {
    title: 'Mobile App Development',
    description:
      'We create native and cross-platform mobile applications for iOS and Android. Our mobile solutions are designed to provide excellent user experiences while leveraging device capabilities to deliver powerful functionality.',
    link: '/mobile-development',
  },
];

// --- THEME TOKENS ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC', // Off-white
  textMuted: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDark,
        padding: '70px 24px',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* Subtle Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}>
            <span style={{ color: COLORS.primary }}>Services</span>{' '}
            <span style={{ color: COLORS.textWhite }}>we provide</span>
          </h1>

          <p
            style={{
              color: COLORS.textMuted,
              fontSize: '18px',
              lineHeight: '1.7',
              maxWidth: '900px',
              margin: '0 auto',
            }}>
            We are Crestcode, a technical consultancy that leverages technology
            to address business challenges. Guided by transparency and close
            collaboration, we focus on delivering long-term business value.
          </p>
        </motion.div>

        {/* INTERACTIVE CONTENT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>
          {/* LEFT: BUTTON LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {serviceData.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '24px 32px',
                  background:
                    activeService === index
                      ? 'rgba(79, 70, 229, 0.1)'
                      : 'transparent',
                  border: 'none',
                  borderLeft: `4px solid ${
                    activeService === index ? COLORS.primary : 'transparent'
                  }`,
                  cursor: 'pointer',
                  transition: '0.3s all cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: FONT_FAMILY,
                }}>
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color:
                      activeService === index
                        ? COLORS.textWhite
                        : COLORS.textMuted,
                  }}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT: CONTENT DISPLAY */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: `1px solid ${COLORS.border}`,
              borderRadius: '24px',
              padding: '48px',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
            }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}>
                <h2
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: COLORS.textWhite,
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                  }}>
                  {serviceData[activeService].title}
                </h2>
                <p
                  style={{
                    color: COLORS.textMuted,
                    fontSize: '18px',
                    lineHeight: '1.8',
                    marginBottom: '40px',
                  }}>
                  {serviceData[activeService].description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    (window.location.href =
                      serviceData[activeService].link || '#')
                  }
                  style={{
                    background: COLORS.primary,
                    color: 'white',
                    border: 'none',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)',
                  }}>
                  Learn More <ArrowRightOutlined />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default Services;
