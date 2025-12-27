import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { siteConfig } from './config';
import { WishlistFormRef } from './hero-section';
import { Button } from './ui/button';
import { useIsMobile, PRIMARY_COLOR } from '@/app/common';

interface FancyHeartButtonProps {
  text: string;
  onClick?: () => void;
  isScrolled?: boolean;
}

const FancyHeartButton: React.FC<FancyHeartButtonProps> = ({
  text,
  onClick,
  isScrolled = false,
}) => {
  const [indigoMode, setIndigoMode] = useState(false);

  const handleMouseEnter = () => {
    setIndigoMode(true);
  };

  const handleMouseLeave = () => {
    setIndigoMode(false);
  };

  const handleClick = () => {
    // Add click animation
    setIndigoMode(true);
    setTimeout(() => setIndigoMode(false), 300);

    if (onClick) {
      onClick();
    }
  };
  const scrollToHero = () => {
    document
      .getElementById('hero-section')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <Button
        onClick={scrollToHero}
        style={{
          background: !isScrolled
            ? 'transparent'
            : indigoMode
            ? 'transparent'
            : 'white',
          color: '#6366F1',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.75rem',
          border: !isScrolled ? '2px solid #6366F1' : '2px solid #6366F1',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          // boxShadow: !isScrolled
          //   ? '0 8px 32px rgba(99, 102, 241, 0.4)'
          //   : indigoMode
          //   ? '0 8px 20px rgba(99, 102, 241, 0.4), 0 0 0 0 rgba(99, 102, 241, 0.4)'
          //   : '0 4px 12px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Urbanist, sans-serif',
          fontWeight: '600',
          fontSize: '15px',
          overflow: 'hidden',
          position: 'relative',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        {indigoMode && isScrolled && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0] }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
              borderRadius: '0.75rem',
              pointerEvents: 'none',
            }}
          />
        )}
      </Button>
    </motion.div>
  );
};

export interface HeaderProps {
  wishlistFormRef: React.RefObject<WishlistFormRef>;
}

export default function Header({ wishlistFormRef }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    document
      .getElementById('hero-section')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSection = (sectionId: string) => {
    // ✅ FORCE FULL PAGE ROUTE FOR HUBS & BOARDS
    if (sectionId === 'hubs' || sectionId === 'boards') {
      router.push(`/${sectionId}`);
    } else if (sectionId === 'faqs') {
      router.push(`/faqs`);
    } else if (sectionId === 'security') {
      router.push(`/security`);
    } else if (sectionId === 'about') {
      router.push(`/about`);
    } else if (isHomePage) {
      // ✅ NORMAL SCROLL ON HOME
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // ✅ HASH NAVIGATION FROM OTHER PAGES
      router.push(`/#${sectionId}`);
    }

    setIsMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      // If on home page, scroll to hero section
      scrollToSection('hero-section');
    } else {
      // If on different page, navigate to home
      router.push('/');
    }
  };

  const handleHeaderButtonClick = () => {
    if (isHomePage) {
      // Enhanced focus and glow with scroll behavior on home page
      if (wishlistFormRef.current) {
        wishlistFormRef.current.focusAndGlow();
      }
    } else {
      // Navigate to home page and focus on hero section
      router.push('/#hero-section');
    }
  };

  const menus = [
    {
      key: 'howItWorks',
      label: 'How it Works',
      subMenu: [
        { key: 'hubs', label: 'Hubs', sectionId: 'hubs' },
        { key: 'boards', label: 'Boards', sectionId: 'boards' },
      ],
    },
    { key: 'use-cases', label: 'Use Cases', sectionId: 'use-cases' },
    { key: 'security', label: 'Security', sectionId: 'security' },
    {
      key: 'plans',
      label: 'Plans',
      subMenu: [
        { key: 'whyDockly', label: 'Why Dockly', sectionId: 'whyDockly' },
        { key: 'pricing', label: 'Pricing', sectionId: 'pricing' },
      ],
    },
    { key: 'faqs', label: 'FAQs', sectionId: 'faqs' },
    { key: 'about', label: 'About', sectionId: 'about' },
  ];
  return (
    <>
      {/* Add Urbanist font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Urbanist', sans-serif;
          }
          
          p {
            font-family: 'Urbanist', sans-serif;
            font-size: max(14px, 1rem);
          }

          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-btn {
              display: block !important;
            }
            .desktop-cta {
              display: none !important;
            }
          }

          @media (min-width: 769px) {
            .desktop-nav {
              display: flex !important;
            }
            .mobile-menu-btn {
              display: none !important;
            }
            .desktop-cta {
              display: flex !important;
            }
            .mobile-nav {
              display: none !important;
            }
          }
        `}
      </style>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          backgroundColor: isMobile
            ? '#ffffff'
            : isScrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          backdropFilter: isMobile
            ? 'none'
            : isScrolled
            ? 'blur(20px)'
            : 'none',
          borderBottom:
            isScrolled || isMobile
              ? '1px solid rgba(229, 231, 235, 0.2)'
              : 'none',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1rem',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 0',
            }}>
            {/* Logo */}
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              onClick={handleLogoClick}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 0,
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80%"
                  height="80%"
                  viewBox="0 0 128 128"
                  aria-hidden="true">
                  <g fill={'#6366F1'}>
                    <rect x="34" y="28" width="60" height="16" rx="8" />
                    <rect x="26" y="56" width="76" height="16" rx="8" />
                    <rect x="18" y="84" width="92" height="16" rx="8" />
                  </g>
                </svg>
              </div>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  fontFamily: 'Urbanist, sans-serif',
                  color: isScrolled ? '#1f2937' : 'black',
                  transition: 'color 0.3s ease',
                }}>
                {siteConfig.siteName}
              </span>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <nav
              className="desktop-nav"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '2rem',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}>
              {menus.map((menu) =>
                menu.subMenu ? (
                  <div
                    key={menu.key}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setActiveDropdown(menu.key)}
                    onMouseLeave={() => setActiveDropdown(null)}>
                    <motion.button
                      style={{
                        color: isScrolled ? '#4b5563' : 'black',
                        fontWeight: '500',
                        fontFamily: 'Urbanist, sans-serif',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontSize: '15px',
                      }}
                      whileHover={{
                        color: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      }}
                      transition={{ duration: 0.2 }}>
                      {menu.label}
                      <motion.div
                        animate={{
                          rotate: activeDropdown === menu.key ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}>
                        <ChevronDown size={14} />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === menu.key && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          style={{
                            position: 'absolute',
                            top: '2.5rem',
                            left: 0,
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(229, 231, 235, 0.2)',
                            borderRadius: '0.75rem',
                            boxShadow:
                              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            padding: '0.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                            minWidth: '160px',
                          }}>
                          {menu.subMenu.map((sub) => (
                            <motion.button
                              key={sub.key}
                              onClick={() => scrollToSection(sub.sectionId)}
                              style={{
                                padding: '0.5rem 0.75rem',
                                textAlign: 'left',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                color: '#4b5563',
                                borderRadius: '0.5rem',
                                transition: 'all 0.2s',
                                fontWeight: '500',
                                fontFamily: 'Urbanist, sans-serif',
                                fontSize: '14px',
                              }}
                              whileHover={{
                                backgroundColor: '#f8fafc',
                                color: '#6366f1',
                                x: 4,
                              }}
                              transition={{ duration: 0.2 }}>
                              {sub.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    key={menu.key}
                    onClick={() => scrollToSection(menu.sectionId!)}
                    style={{
                      color: isScrolled ? '#4b5563' : 'black',
                      fontWeight: '500',
                      fontFamily: 'Urbanist, sans-serif',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '15px',
                    }}
                    whileHover={{
                      color: '#6366f1',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    }}
                    transition={{ duration: 0.2 }}>
                    {menu.label}
                  </motion.button>
                )
              )}
            </nav>

            {/* Desktop CTA Button */}
            <motion.div
              className="desktop-cta"
              style={{ display: 'none', alignItems: 'center', gap: '0.8rem' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <FancyHeartButton
                text={siteConfig.header.buttons.waitlist}
                onClick={handleHeaderButtonClick}
                // isScrolled={scrollToHero}
              />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                color: isScrolled ? '#4b5563' : '#111827',
                transition: 'all 0.3s ease',
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{
                backgroundColor: isScrolled
                  ? 'rgba(243, 244, 246, 0.8)'
                  : 'rgba(0, 0, 0, 0.05)',
              }}
              whileTap={{ scale: 0.95 }}>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                {isMenuOpen ? (
                  <X style={{ width: '1.5rem', height: '1.5rem' }} />
                ) : (
                  <Menu style={{ width: '1.5rem', height: '1.5rem' }} />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="mobile-nav"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  display: 'block',
                  borderTop: `1px solid ${
                    isScrolled
                      ? 'rgba(229, 231, 235, 0.3)'
                      : 'rgba(0, 0, 0, 0.1)'
                  }`,
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                  marginTop: '0.5rem',
                }}>
                <nav
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}>
                  {menus.map((menu, index) =>
                    menu.subMenu ? (
                      <motion.div
                        key={menu.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}>
                        <button
                          style={{
                            color: isScrolled ? '#4b5563' : '#111827',
                            fontWeight: '500',
                            fontFamily: 'Urbanist, sans-serif',
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            padding: '0.75rem 0.5rem',
                            transition: 'color 0.3s ease',
                            borderRadius: '0.5rem',
                            fontSize: '16px',
                          }}
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === menu.key ? null : menu.key
                            )
                          }>
                          {menu.label}
                          <motion.div
                            animate={{
                              rotate: mobileDropdown === menu.key ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}>
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === menu.key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                paddingLeft: '1rem',
                                paddingTop: '0.5rem',
                                borderLeft: '2px solid rgba(99, 102, 241, 0.2)',
                                marginLeft: '0.5rem',
                              }}>
                              {menu.subMenu.map((sub) => (
                                <button
                                  key={sub.key}
                                  onClick={() => scrollToSection(sub.sectionId)}
                                  style={{
                                    color: isScrolled ? '#6b7280' : '#6b7280',
                                    fontFamily: 'Urbanist, sans-serif',
                                    textAlign: 'left',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0.5rem 0',
                                    transition: 'color 0.3s ease',
                                    fontSize: '15px',
                                    borderRadius: '0.25rem',
                                  }}>
                                  {sub.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ) : (
                      <motion.button
                        key={menu.key}
                        onClick={() => scrollToSection(menu.sectionId!)}
                        style={{
                          color: isScrolled ? '#4b5563' : '#111827',
                          fontWeight: '500',
                          fontFamily: 'Urbanist, sans-serif',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '0.75rem 0.5rem',
                          transition: 'color 0.3s ease',
                          borderRadius: '0.5rem',
                          fontSize: '16px',
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}>
                        {menu.label}
                      </motion.button>
                    )
                  )}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ marginTop: '1rem', padding: '0 0.5rem' }}>
                    <Button
                      type="submit"
                      style={{
                        background: !isScrolled
                          ? 'linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(79, 70, 229) 100%)'
                          : 'linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(79, 70, 229) 100%)',
                        color: 'white',
                        padding: '0.875rem 1.5rem',
                        borderRadius: '0.75rem',
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: 'Urbanist, sans-serif',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                      }}
                      onClick={handleHeaderButtonClick}>
                      {siteConfig.header.buttons.waitlist}
                    </Button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
