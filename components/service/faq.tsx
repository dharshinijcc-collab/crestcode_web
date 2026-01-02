'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

// --- THEME TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9', // Industrial Slate-Blue
  primary: '#4F46E5', // Industrial Indigo
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  border: '#E2E8F0', // Crisp Edge
  white: '#FFFFFF',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I trust my information's confidentiality with your team?",
      answer:
        'Absolutely! We take data confidentiality and security very seriously. All team members sign comprehensive NDAs and confidentiality agreements. We implement industry-standard security protocols including encrypted communication, secure code repositories, and access controls. Our development processes follow GDPR and other relevant data protection regulations. We can also sign custom NDAs tailored to your specific requirements. Your intellectual property, business data, and project information remain completely confidential throughout and after the project lifecycle.',
    },
    {
      question:
        'How much would my development project cost? Can I get a tailored estimate?',
      answer:
        "Development project costs vary based on complexity, features, timeline, and technology stack. A simple website might cost $5,000-$15,000, while complex enterprise applications can range from $50,000 to $500,000+. To get a tailored estimate, we need to understand your specific requirements, desired features, user base, and timeline. We provide free consultations and detailed project breakdowns. Our estimates include development, testing, deployment, and initial support. Contact us with your project details, and we'll provide a comprehensive quote within 2-3 business days.",
    },
    {
      question: 'How to reduce software development services costs?',
      answer:
        'To reduce software development costs, start with clear requirements and detailed project planning to avoid rework. Choose the right technology stack to optimize development speed and maintenance. Consider agile development methodologies for iterative progress and early feedback. Leverage open-source technologies and reusable components where appropriate. Opt for MVP development to validate ideas before full investment. Implement automated testing to reduce manual QA costs. Consider offshore or nearshore development teams for cost efficiency. Finally, maintain clear communication to prevent misunderstandings and delays.',
    },
    {
      question:
        'What are the biggest benefits of outsourcing a software development services firm?',
      answer:
        'Outsourcing software development provides access to specialized expertise and talent without the overhead of hiring in-house. It reduces operational costs significantly while maintaining high quality. You get faster time-to-market with experienced teams following proven methodologies. Outsourcing allows you to focus on core business activities while technical experts handle development. It provides scalability to ramp up or down based on project needs. You also gain exposure to global best practices and innovative approaches. Additionally, it offers risk sharing and flexibility in resource allocation.',
    },
    {
      question: 'How to choose a software development services company?',
      answer:
        'When choosing a software development company, consider their portfolio and case studies to verify relevant experience. Check client testimonials and reviews for reliability. Evaluate their technical expertise and technology stack alignment. Ensure they have clear communication processes and project management methodologies. Compare pricing models and ensure transparency. Look for companies that offer post-development support and maintenance. Finally, assess their understanding of your industry and business requirements.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        padding: '40px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
      }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
              marginBottom: '20px',
            }}>
            Services <span style={{ color: COLORS.primary }}>FAQ</span>
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '650px',
              margin: '0 auto',
            }}>
            Find answers to common questions about our software development
            services and how we can help your business succeed.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: COLORS.white,
                border: `1px solid ${
                  openIndex === index ? COLORS.primary : COLORS.border
                }`,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow:
                  openIndex === index
                    ? '0 10px 30px -10px rgba(79, 70, 229, 0.1)'
                    : 'none',
              }}>
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '28px 32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: COLORS.textBlack,
                    margin: 0,
                    fontFamily: FONT_PRIMARY,
                    paddingRight: '20px',
                  }}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 45 : 0,
                    color:
                      openIndex === index ? COLORS.primary : COLORS.textMuted,
                  }}
                  transition={{ duration: 0.3 }}>
                  <Plus size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}>
                    <div
                      style={{
                        padding: '0 32px 32px 32px',
                        color: COLORS.textMuted,
                        fontSize: '16px',
                        lineHeight: '1.7',
                        fontWeight: 450,
                      }}>
                      <div
                        style={{
                          height: '1px',
                          backgroundColor: COLORS.border,
                          marginBottom: '24px',
                        }}
                      />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default ServicesFAQ;
