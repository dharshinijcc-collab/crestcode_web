import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Users,
  Globe,
  Boxes,
  Briefcase,
  Bug,
  HelpCircle,
  MessageSquareQuote,
  Palette,
  Server,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const COLORS = {
  bgBase: '#FAFBFC',
  bgSecondary: '#F8FAFC',
  bgCard: 'rgba(255, 255, 255, 0.7)',
  primary: '#4F46E5',
  secondary: '#0EA5E9',
  accent: '#10B981',
  textMain: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
};

const FONT_FAMILY = "'Plus Jakarta Sans', -apple-system, sans-serif";

// Enhanced Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'services') {
      // Trigger services display via custom event
      window.dispatchEvent(new CustomEvent('showServices'));
    } else if (isHomePage) {
      // Normal scroll on home
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Hash navigation from other pages
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menus = [
    {
      key: 'services',
      label: 'Services',
      subMenu: [
        {
          key: 'software-product-development',
          label: 'Software product development',
          icon: <Boxes size={16} />,
        },
        {
          key: 'web-development',
          label: 'Web development',
          icon: <Globe size={16} />,
        },
        {
          key: 'mobile-app-development',
          label: 'Mobile app development',
          icon: <Smartphone size={16} />,
        },
        {
          key: 'UX-design',
          label: 'UX/UI design',
          icon: <Palette size={16} />,
        },
        {
          key: 'backend-development',
          label: 'Backend development',
          icon: <Server size={16} />,
        },
        {
          key: 'qa-and-testing',
          label: 'QA and Testing',
          icon: <Bug size={16} />,
        },
      ],
    },
    { key: 'solutions', label: 'Solutions' },
    {
      key: 'about',
      label: 'About',
      subMenu: [
        {
          key: 'team',
          label: 'Team',
          icon: <Users size={16} />,
        },
        {
          key: 'how-we-work',
          label: 'How We Work',
          icon: <Workflow size={16} />,
        },
        {
          key: 'faq',
          label: 'FAQ',
          icon: <HelpCircle size={16} />,
        },
        {
          key: 'testimonials',
          label: 'Testimonials',
          icon: <MessageSquareQuote size={16} />,
        },
        {
          key: 'careers',
          label: 'Careers',
          icon: <Briefcase size={16} />,
        },
      ],
    },
    { key: 'blogs', label: 'Blogs' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
        
        .nav-glass {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary});
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::before {
          width: 80%;
        }
      `}</style>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="nav-glass"
        style={{
          backgroundColor: isScrolled
            ? 'rgba(250, 251, 252, 0.9)'
            : 'transparent',
          borderBottom: isScrolled ? `1px solid ${COLORS.border}` : 'none',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
        {/* Floating Orb Background */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '20%',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${COLORS.primary}15, transparent)`,
            filter: 'blur(60px)',
            zIndex: -1,
          }}
        />

        <div
          style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '85px',
            }}>
            {/* Enhanced Logo */}
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 1100,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  marginRight: '16px',
                  // background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  borderRadius: '14px',
                  display: 'grid',
                  placeItems: 'center',
                  // boxShadow: `0 8px 32px ${COLORS.primary}30`,
                  position: 'relative',
                }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 2,
                    // background: 'white',
                    borderRadius: '12px',
                    display: 'grid',
                    placeItems: 'center',
                  }}>
                  <img
                    src="https://crestcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.fd2671e3.png&w=1920&q=100"
                    alt="Crestcode"
                    style={{
                      width: '32px',
                      height: '32px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: '900',
                    color: COLORS.textMain,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}>
                  Crestcode
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: COLORS.textMuted,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                  }}>
                  Engineering Excellence
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
              {menus.map((menu) => (
                <div
                  key={menu.key}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setActiveDropdown(menu.key)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <motion.button
                    className="nav-link"
                    style={{
                      color: COLORS.textMain,
                      background: 'transparent',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: FONT_FAMILY,
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(79, 70, 229, 0.08)',
                      y: -1,
                    }}
                    onClick={() =>
                      menu.key === 'services'
                        ? scrollToSection('services')
                        : null
                    }>
                    {menu.label}
                    {menu.subMenu && (
                      <motion.div
                        animate={{
                          rotate: activeDropdown === menu.key ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}>
                        <ChevronDown size={16} style={{ opacity: 0.7 }} />
                      </motion.div>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {menu.subMenu && activeDropdown === menu.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '280px',
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(20px)',
                          borderRadius: '20px',
                          padding: '16px',
                          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                          border: `1px solid ${COLORS.border}`,
                          marginTop: '8px',
                        }}>
                        {menu.subMenu.map((sub) => (
                          <motion.button
                            key={sub.key}
                            onClick={() => scrollToSection('services')}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: '14px 16px',
                              background: 'none',
                              border: 'none',
                              borderRadius: '12px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '600',
                              color: COLORS.textMuted,
                              transition: 'all 0.2s ease',
                            }}
                            whileHover={{
                              backgroundColor: 'rgba(79, 70, 229, 0.08)',
                              color: COLORS.primary,
                              x: 4,
                            }}>
                            {sub.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Enhanced CTA Button */}
            <motion.button
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: FONT_FAMILY,
                boxShadow: `0 12px 24px -8px ${COLORS.primary}40`,
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 16px 32px -8px ${COLORS.primary}50`,
              }}
              whileTap={{ scale: 0.95 }}>
              {/* Button shine effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{ left: ['100%', '-100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />

              <span style={{ position: 'relative', zIndex: 1 }}>
                Contact us
              </span>
            </motion.button>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export default Header;
