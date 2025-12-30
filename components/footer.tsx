'use client';

import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { useAdmin } from './admin/context';
import {
  Boxes,
  Globe,
  Smartphone,
  Palette,
  Bug,
  Server,
  Users,
  Workflow,
  HelpCircle,
  MessageSquareQuote,
  Briefcase,
  Brain,
} from 'lucide-react';

export default function Footer() {
  const { config } = useAdmin();
  const footerConfig = { ...config };
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on different page, navigate to home with section hash
      router.push(`/#${sectionId}`);
    }
  };

  const navigateToRoute = (route: string) => {
    router.push(route);
  };

  const getSectionId = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      Features: 'features', // Maps to hubs section
      Pricing: 'pricing',
      Security: 'security',
      Integrations: 'boards', // Maps to boards section
    };
    return sectionMap[item] || item.toLowerCase();
  };

  const services = [
    {
      key: 'custom-software-development',
      label: 'Custom Software Development',
      icon: <Boxes size={16} />,
    },
    {
      key: 'ai-ml',
      label: 'AI & ML',
      icon: <Brain size={16} />,
    },
    {
      key: 'web-development',
      label: 'Web Development',
      icon: <Globe size={16} />,
    },
    {
      key: 'mobile-app-development',
      label: 'Mobile App Development',
      icon: <Smartphone size={16} />,
    },
  ];
  const about = [
    { key: 'team', label: 'Team', icon: <Users size={16} /> },
    { key: 'how-we-work', label: 'How We Work', icon: <Workflow size={16} /> },
    { key: 'faq', label: 'FAQ', icon: <HelpCircle size={16} /> },
    {
      key: 'testimonials',
      label: 'Testimonials',
      icon: <MessageSquareQuote size={16} />,
    },
    { key: 'careers', label: 'Careers', icon: <Briefcase size={16} /> },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>

      <footer
        style={{
          backgroundColor: '#1a1b23',
          color: 'white',
          paddingTop: '3rem',
          paddingBottom: '2rem',
          fontFamily: "'Urbanist', sans-serif",
        }}>
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1.5rem',
          }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto auto',
              gap: '3rem',
              alignItems: 'flex-start',
              marginBottom: '2.5rem',
            }}
            className="md:grid-cols-3">
            {/* Left Section - Brand & Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  // gap: '0.5rem',
                  marginBottom: '1rem',
                }}>
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
                      color: 'white',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}>
                    Crestcode
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: '500',
                      color: '#9ca3af',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginTop: '2px',
                    }}>
                    Engineering Excellence
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: '#9ca3af',
                  marginBottom: '1.5rem',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  maxWidth: '320px',
                  fontWeight: '400',
                  fontFamily: "'Urbanist', sans-serif",
                }}>
                Performance technical consultancy providing full-spectrum
                engineering expertise
              </p>

              {/* Social Icons */}
              {/* <div style={{ display: 'flex', gap: '0.75rem' }}>
                <motion.a
                  href={footerConfig.footer.socialLinks.twitter}
                  style={{
                    color: '#6b7280',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  whileHover={{
                    backgroundColor: '#374151',
                    color: '#ffffff',
                    scale: 1.1
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter size={18} />
                </motion.a>

                <motion.a
                  href={footerConfig.footer.socialLinks.facebook}
                  style={{
                    color: '#6b7280',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  whileHover={{
                    backgroundColor: '#374151',
                    color: '#ffffff',
                    scale: 1.1
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={18} />
                </motion.a>

                <motion.a
                  href={footerConfig.footer.socialLinks.pinterest}
                  style={{
                    color: '#6b7280',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  whileHover={{
                    backgroundColor: '#374151',
                    color: '#ffffff',
                    scale: 1.1
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.11.22.081.343-.09.353-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </motion.a>
              </div> */}
            </motion.div>

            {/* Middle Section - Product Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>
              <h4
                style={{
                  fontWeight: '600',
                  marginBottom: '1.25rem',
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontFamily: "'Urbanist', sans-serif",
                }}>
                Services
              </h4>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                {services.map((service, index) => (
                  <motion.li key={service.key}>
                    <motion.button
                      onClick={() => scrollToSection(getSectionId(service.key))}
                      style={{
                        color: '#9ca3af',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'color 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: 0,
                        fontWeight: 400,
                        fontFamily: "'Urbanist', sans-serif",
                      }}
                      whileHover={{
                        color: '#ffffff',
                        x: 4,
                      }}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                      viewport={{ once: true }}>
                      {service.icon}
                      {service.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Section - Legal Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <h4
                style={{
                  fontWeight: '600',
                  marginBottom: '1.25rem',
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontFamily: "'Urbanist', sans-serif",
                }}>
                About
              </h4>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                {about.map((item, index) => (
                  <motion.li key={item.key}>
                    <motion.button
                      onClick={() => navigateToRoute(`/${item.key}`)}
                      style={{
                        color: '#9ca3af',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'color 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textAlign: 'left',
                        padding: 0,
                        fontWeight: 400,
                        fontFamily: "'Urbanist', sans-serif",
                      }}
                      whileHover={{ color: '#ffffff', x: 4 }}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                      viewport={{ once: true }}>
                      {item.icon}
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            style={{
              borderTop: '1px solid #2d3748',
              paddingTop: '1.5rem',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            <p
              style={{
                fontSize: '1rem',
                color: '#6b7280',
                margin: 0,
                fontWeight: '400',
                fontFamily: "'Urbanist', sans-serif",
              }}>
              {/* {footerConfig.footer.copyright} */}© 2025 Crestcode. All
              rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
