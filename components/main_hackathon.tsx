"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users2, 
  Zap,
  ArrowRight,
  Trophy,
  Target,
  Lightbulb,
  Shield,
  Eye,
  Heart,
  Mail,
  MessageCircle
} from "lucide-react";

const COLORS = {
  bgBase: 'hsl(0, 0%, 100%)',
  primary: 'hsl(221, 83%, 53%)', 
  secondary: 'hsl(210, 40%, 96%)',
  accent: 'hsl(25, 95%, 53%)',   
  textBlack: 'hsl(222, 84%, 4.9%)',
  textMuted: 'hsl(215, 16%, 46.9%)',
  textBright: 'hsl(221, 83%, 53%)',
  textAccent: 'hsl(25, 95%, 53%)',
  border: 'hsl(214, 32%, 91%)',
  cardBg: 'hsl(0, 0%, 100%)',
  winnerBg: 'hsl(222, 84%, 4.9%)', 
  mentionsBg: 'hsl(210, 40%, 98%)',
  ctaBg: 'hsl(221, 83%, 53%)',
  buttonPrimary: 'hsl(221, 83%, 53%)',
  buttonPrimaryHover: 'hsl(221, 83%, 63%)',
  buttonSecondary: 'hsl(25, 95%, 53%)',
  buttonSecondaryHover: 'hsl(25, 95%, 63%)',
  docklyPurple: 'hsl(262, 83%, 58%)',
  docklyCyan: 'hsl(188, 94%, 43%)',
  docklyEmerald: 'hsl(160, 84%, 39%)',
  docklyOrange: 'hsl(25, 95%, 53%)',
  docklyBlue: 'hsl(217, 91%, 60%)'
};

const FONT_PRIMARY = "'Inter', sans-serif";
const FONT_SIZES = {
  hero: '56px',
  sectionTitle: '36px',
  cardTitle: '20px',
  body: '16px',
  small: '14px',
  tiny: '12px'
};
const FONT_WEIGHTS = {
  light: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 800,
  heavy: 900
};

export default function HackathonPage() {
  const highlights = [
    { icon: Lightbulb, title: "Innovation", desc: "Participants explored creative ideas and developed working prototypes." },
    { icon: Users2, title: "Collaboration", desc: "Students worked together in teams to solve challenging problems." },
    { icon: GraduationCap, title: "Learning Experience", desc: "The event provided an opportunity to learn new tools, frameworks, and practices." },
    { icon: Target, title: "Real-World Solutions", desc: "Projects focused on practical solutions using modern technology." }
  ];

  const champions = [
    { 
      team: "Team NeuralSync", 
      place: "2nd Place", 
      project: "AI-powered collaboration tool for remote engineering teams",
      color: COLORS.cardBg,
      icon: "🥈",
      topShadow: `hsl(221, 83%, 53%, 0.4)`, // Blue shadow
      textColor: COLORS.primary
    },
    { 
      team: "Team SkyNet Zero", 
      place: "GRAND WINNER", 
      project: "Autonomous drone mesh network for wildfire detection and response",
      color: COLORS.winnerBg,
      isWinner: true,
      icon: "🏆",
      topShadow: `hsl(25, 95%, 53%, 0.6)`, // Gold shadow
      textColor: COLORS.accent
    },
    { 
      team: "Team EcoLedger", 
      place: "3rd Place", 
      project: "Blockchain solution for tracking supply chain carbon footprints",
      color: COLORS.cardBg,
      icon: "🥉",
      topShadow: `hsl(25, 95%, 53%, 0.4)`, // Orange/Bronze shadow
      textColor: 'hsl(25, 95%, 43%)'
    }
  ];

  const mentions = [
    { name: "CyberSentinels", icon: Shield, sub: "Cybersecurity" },
    { name: "VisionaryDAO", icon: Eye, sub: "Web3" },
    { name: "QuickHealth AI", icon: Heart, sub: "HealthTech" }
  ];

  const avatars = [
    'https://i.pravatar.cc/150?u=1',
    'https://i.pravatar.cc/150?u=2',
    'https://i.pravatar.cc/150?u=3',
    'https://i.pravatar.cc/150?u=4'
  ];

  return (
    <div style={{ background: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh', color: COLORS.textBlack, paddingBottom: '40px', paddingTop: '40px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
            alt="Hackathon" 
            style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          />
        </div>
        <div>
          <span style={{ color: COLORS.primary, background: 'hsl(221, 83%, 97%)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            24-HOUR SPRINT
          </span>
          <h1 style={{ fontSize: FONT_SIZES.hero, fontWeight: FONT_WEIGHTS.heavy, margin: '16px 0', lineHeight: 1.1, color: COLORS.textBlack }}>
            Crestcode <br /> Hackathon
          </h1>
          <p style={{ fontSize: FONT_SIZES.body, color: COLORS.textMuted, lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
            A 24-hour innovation challenge where students and developers collaborate to build creative technology solutions and working prototypes.
          </p>
          <button style={{ 
            background: `linear-gradient(135deg, ${COLORS.buttonPrimary} 0%, ${COLORS.buttonPrimaryHover} 100%)`, 
            color: '#FFF', 
            padding: '14px 28px', 
            borderRadius: '25px', 
            fontWeight: 600, 
            border: 'none', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            boxShadow: `0 4px 15px ${COLORS.buttonPrimary}40`,
            transition: 'all 0.3s ease'
          }}>
            Explore the Event
          </button>
        </div>
      </section>

      {/* 2. ABOUT THE HACKATHON */}
      <section style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '60px' }}>
        <h2 style={{ fontSize: FONT_SIZES.sectionTitle, fontWeight: FONT_WEIGHTS.black, color: COLORS.textBlack }}>About the <br /> Hackathon</h2>
        <p style={{ fontSize: FONT_SIZES.body, color: COLORS.textMuted, lineHeight: 1.8 }}>
          The Crestcode Hackathon is an innovation-driven event organized to encourage students and developers to collaborate, experiment with new ideas, and build meaningful technology solutions within a limited time. Participants work in teams to design, develop, and present creative solutions to real-world challenges using modern technologies. The hackathon promotes creativity, teamwork, problem solving, and hands-on learning.
        </p>
      </section>

      {/* 3. HIGHLIGHTS GRID */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: FONT_SIZES.sectionTitle, fontWeight: FONT_WEIGHTS.black, marginBottom: '16px', color: COLORS.textBlack }}>Hackathon Highlights</h2>
        <p style={{ fontSize: FONT_SIZES.body, color: COLORS.textMuted, marginBottom: '48px' }}>Key takeaways from our innovation challenge.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ padding: '30px 20px', textAlign: 'left', background: COLORS.cardBg, borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
              <div style={{ background: 'hsl(221, 83%, 97%)', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '20px' }}>
                <h.icon size={18} color={COLORS.primary} />
              </div>
              <h3 style={{ fontSize: FONT_SIZES.cardTitle, fontWeight: FONT_WEIGHTS.bold, marginBottom: '12px', color: COLORS.textBright }}>{h.title}</h3>
              <p style={{ fontSize: FONT_SIZES.small, color: COLORS.textMuted, lineHeight: 1.6 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EVENT PARTICIPATION BENTO */}
      <section style={{ margin: '40px 24px', padding: '60px', background: 'hsl(210, 40%, 98%)', borderRadius: '24px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: FONT_SIZES.sectionTitle, fontWeight: FONT_WEIGHTS.black, marginBottom: '24px', color: COLORS.textBright }}>Event Participation</h2>
            <p style={{ fontSize: FONT_SIZES.body, color: COLORS.textMuted, lineHeight: 1.7, marginBottom: '32px' }}>
              The hackathon brought together enthusiastic students and aspiring developers from different colleges who were passionate about building technology solutions. Participants collaborated, shared ideas, and demonstrated their technical and creative abilities while working on innovative projects.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex' }}>
                {avatars.map((a, i) => (
                  <img key={i} src={a} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: i === 0 ? 0 : -10 }} alt="user" />
                ))}
              </div>
              <span style={{ fontSize: FONT_SIZES.small, fontWeight: FONT_WEIGHTS.semibold, color: COLORS.textMuted }}>Joined by 200+ Developers</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px' }} alt="collab" />
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px' }} alt="planning" />
          </div>
        </div>
      </section>

      {/* 5. INNOVATION CHAMPIONS */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: FONT_SIZES.sectionTitle, fontWeight: FONT_WEIGHTS.black, marginBottom: '16px', color: COLORS.textBlack }}>Innovation Champions</h2>
        <p style={{ fontSize: FONT_SIZES.body, color: COLORS.textMuted, marginBottom: '60px' }}>Celebrating the exceptional projects from our latest edition.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'flex-end' }}>
          {champions.map((c, i) => (
            <div key={i} style={{ 
              padding: c.isWinner ? '60px 32px' : '40px 32px', 
              background: c.color, 
              color: c.isWinner ? '#FFF' : COLORS.textBlack,
              borderRadius: '20px', 
              border: `1px solid ${COLORS.border}`,
              boxShadow: `0 -10px 40px -10px ${c.topShadow}`, // Colored top shadow
              position: 'relative'
            }}>
              {/* Badge/Rank text alignment */}
              <div style={{ 
                marginBottom: '24px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
              }}>
                <div style={{ 
                    fontSize: '48px', 
                    marginBottom: '10px',
                    filter: c.isWinner ? 'drop-shadow(15px 10px 5px rgba(0,0,0,0.4))' : 'none' // Trophy shadow right corner
                }}>
                    {c.icon}
                </div>
                <div style={{ fontSize: FONT_SIZES.body, fontWeight: FONT_WEIGHTS.black, color: c.isWinner ? COLORS.accent : COLORS.textBlack, margin: '0' }}>
                    {c.team}
                </div>
                <div style={{ fontSize: FONT_SIZES.tiny, fontWeight: FONT_WEIGHTS.bold, color: c.textColor, marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {c.place}
                </div>
              </div>
              <p style={{ fontSize: FONT_SIZES.small, opacity: 0.9, lineHeight: 1.6 }}>{c.project}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NOTABLE MENTIONS */}
      <section style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ fontSize: FONT_SIZES.small, fontWeight: FONT_WEIGHTS.bold, textAlign: 'center', color: COLORS.textMuted, marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Notable Mentions</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          {mentions.map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: COLORS.mentionsBg, padding: '12px 24px', borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
              <m.icon size={18} color={COLORS.primary} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: FONT_SIZES.body, fontWeight: FONT_WEIGHTS.bold }}>{m.name}</div>
                <div style={{ fontSize: FONT_SIZES.tiny, color: COLORS.textMuted }}>{m.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA BLUE CARD */}
      <section style={{ margin: '80px 24px 0', padding: '80px 24px', background: COLORS.primary, borderRadius: '24px', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', color: '#FFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: FONT_SIZES.hero, fontWeight: FONT_WEIGHTS.heavy, marginBottom: '24px' }}>More Innovation Coming Soon</h2>
          <p style={{ fontSize: FONT_SIZES.body, opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.8 }}>
            Crestcode Technologies continues to support the developer community through hackathons and technology events. Stay connected with us for updates about upcoming hackathons, innovation challenges, and opportunities to participate.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <button style={{ 
              background: `linear-gradient(135deg, #FFF 0%, #F8F9FA 100%)`, 
              color: COLORS.primary, 
              padding: '14px 32px', 
              borderRadius: '30px', 
              fontWeight: 700, 
              border: 'none', 
              cursor: 'pointer',
              boxShadow: `0 4px 15px rgba(0,0,0,0.1)`,
              transition: 'all 0.3s ease'
            }}>Stay Updated</button>
            <button style={{ 
              background: 'transparent', 
              color: '#FFF', 
              padding: '14px 32px', 
              borderRadius: '30px', 
              fontWeight: 700, 
              border: '2px solid rgba(255,255,255,0.5)', 
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}>Join Community</button>
          </div>
        </div>
      </section>

      
    </div>
  );
}