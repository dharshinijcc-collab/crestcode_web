'use client';

import React from 'react';
import {
  MessageSquare,
  Building2,
  Network,
  Monitor,
  GraduationCap,
} from 'lucide-react';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#FFFFFF', // Kept as white per your current style
  primary: '#2563EB', // Precision Blue
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  cardBg: '#F8FAFC', // Slate 50 for cards
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

function AIServices() {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI/ML strategy consulting service',
      description:
        'Every implementation starts with a solid roadmap. Our experts analyze your challenges, business environment, and processes, assess AI feasibility, look for implementation opportunities, craft a strategic plan for AI development and adoption, and calculate ROI.',
    },
    {
      icon: Building2,
      title: 'AI architecture design',
      description:
        'We design custom AI architecture that includes the general solution structure, components, workflows, and data management. We ensure that AI models, data pipelines, and computational resources work together, have optimal performance, and deliver maximum business value.',
    },
    {
      icon: Network,
      title: 'AI product development',
      description:
        "From concept to market-ready AI products, we develop intelligent AI software solutions for multiple industries. Whether it's predictive analytics, automation, or NLP-powered tools, we build AI-driven products that drive results.",
    },
    {
      icon: Monitor,
      title: 'Custom AI app development',
      description:
        'We develop AI-powered web and mobile apps that leverage machine learning, natural language processing, and computer vision. Our custom applications are precisely tailored to your unique business requirements.',
    },
    {
      icon: Network,
      title: 'AI integration',
      description:
        'We integrate various AI technologies into existing applications and systems to bring the power of AI to them. Whether embedding ML models, NLP, or computer vision, we ensure smooth integration that enhances functionality.',
    },
    {
      icon: GraduationCap,
      title: 'AI training and support services',
      description:
        'We empower your team with the knowledge to make the most of AI. We provide comprehensive training programs, ongoing technical support, and guidance to ensure your team can effectively use and optimize AI solutions.',
    },
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        padding: '40px 24px',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* UPDATED HEADER: Elite Typography */}
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: COLORS.textBlack,
            marginBottom: '64px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}>
          Our AI software development{' '}
          <span style={{ color: COLORS.primary }}>services</span>
        </h1>

        {/* MAINTAINED 3-COLUMN GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-industrial"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: COLORS.cardBg,
                borderRadius: '12px',
                padding: '40px',
                transition: 'all 0.3s ease-out',
                cursor: 'pointer',
              }}>
              <div style={{ marginBottom: '24px' }}>
                <service.icon
                  size={48}
                  strokeWidth={1.5}
                  style={{
                    color: COLORS.primary,
                    transition: 'transform 0.3s ease',
                  }}
                  className="icon-animate"
                />
              </div>

              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: COLORS.textBlack,
                  marginBottom: '16px',
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                }}>
                {service.title}
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: COLORS.textMuted,
                  lineHeight: 1.7,
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
      `}</style>
    </section>
  );
}

export default AIServices;
