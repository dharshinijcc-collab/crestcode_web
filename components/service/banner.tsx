'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SendOutlined } from '@ant-design/icons';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgGradient: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
  white: '#FFFFFF',
  textInk: '#020617',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

interface CommonBannerProps {
  title: string;
  description: string; // Added description prop
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function Banner({
  title,
  description,
  buttonText = 'Get in touch',
  onButtonClick,
}: CommonBannerProps) {
  return (
    <section
      style={{
        position: 'relative',
        padding: '50px 16px', // Increased padding for better breathing room
        background: COLORS.bgGradient,
        overflow: 'hidden',
        fontFamily: FONT_PRIMARY,
      }}>
      {/* 1. LAYERED BACKGROUND EFFECTS */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          pointerEvents: 'none',
        }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '450px',
            height: '450px',
            background: '#4A9EFF',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '450px',
            height: '450px',
            background: '#FF5757',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* 2. CONTAINER */}
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            alignItems: 'flex-start', // Align start for a classic Title/Desc layout
            justifyContent: 'space-between',
          }}
          className="flex-lg-row">
          {/* DYNAMIC TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, maxWidth: '800px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Bold Title
                fontWeight: 800,
                color: COLORS.white,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: '20px',
                margin: 0,
              }}>
              {title}
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)', // Clean Description
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6,
                margin: 0,
                marginTop: '16px',
              }}>
              {description}
            </p>
          </motion.div>

          {/* DYNAMIC ACTION BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ alignSelf: 'center' }}>
            <button
              onClick={onButtonClick}
              style={{
                width: '100%',
                minWidth: '240px',
                backgroundColor: COLORS.white,
                color: COLORS.textInk,
                padding: '15px 38px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow =
                  '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow =
                  '0 20px 40px -10px rgba(0, 0, 0, 0.3)';
              }}>
              {buttonText} <SendOutlined />
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');
        
        @media (min-width: 1024px) {
          .flex-lg-row {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
