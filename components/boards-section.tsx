'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Heart, Home, TrendingUp, Activity, ArrowRight } from 'lucide-react';
import {
  HeartFilled,
  HeartOutlined,
  DollarOutlined,
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useAdmin } from './admin/context';
import EditableText from './admin/editableText';
import EditableImage from './admin/editableImages';
import PreviewModal from './previewModal';

interface SelectedData {
  title: string;
  subtitle: string;
  description: string;
  image: string; // keep single image for backwards compatibility
  images: string[]; // new array of images
  gradient: string;
  textColor: string;
  features?: string[];
  badges?: string[];
}

const BoardsSection = (props: any) => {
  const { setShowScroll } = props;
  const { config, saveConfigToServer } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<SelectedData | null>(null);

  const iconMap = {
    Heart,
    Home,
    TrendingUp,
    Activity,
    HeartFilled,
    HeartOutlined,
    DollarOutlined,
    HomeOutlined,
    TeamOutlined,
  };

  const getButtonText = (title: string) =>
    ({
      Family: 'Explore Family',
      Home: 'Explore Home',
      Finance: 'Explore Finances',
      Health: 'Explore Health',
      Finances: 'Explore Finances',
      'Digital Life': 'Organize Digital Life',
    }[title] || 'Get Started');

  // Function to get matching color from hero cycleWords
  const getBoardColor = (boardTitle: string) => {
    const cycleWords = config.hero?.cycleWords || [];
    const matchingWord = cycleWords.find(
      (word) =>
        word.word.toLowerCase() === boardTitle.toLowerCase() ||
        (boardTitle.toLowerCase() === 'finance' &&
          word.word.toLowerCase() === 'finances')
    );
    return matchingWord?.color || '#3b82f6';
  };

  const handleButtonClick = (board: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const boardColor = getBoardColor(board.title);
    const imageUrl =
      board.image ||
      `https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200`;
    setShowScroll(false);
    setSelectedData({
      title: board.title,
      subtitle: getButtonText(board.title),
      description: board.description,
      image: imageUrl,
      images: board.images || [imageUrl],
      gradient: `linear-gradient(135deg, ${boardColor}, ${boardColor}cc)`,
      textColor: boardColor,
      features: board.features || [],
      badges: [],
    });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedData(null);
    setShowScroll(true);
  };

  // Define which sections should have colored backgrounds (every other one starting with first)
  const isColoredSection = (index: number) => {
    return index % 2 === 1; // Make every other section colored, starting with second
  };

  const getSectionBackground = (index: number) => {
    return isColoredSection(index)
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : '#ffffff';
  };

  const getTextColor = (index: number) => {
    return isColoredSection(index) ? '#ffffff' : '#1f2937';
  };

  const getSubTextColor = (index: number) => {
    return isColoredSection(index) ? 'rgba(255, 255, 255, 0.9)' : '#6b7280';
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Urbanist', sans-serif !important;
        }
        
        @media (max-width: 1024px) {
          .board-section {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .board-content, .board-image {
            width: 100% !important;
          }
          .board-image {
            order: -1 !important;
            height: 250px !important;
          }
          .section-title {
            font-size: 2rem !important;
          }
          .board-title {
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .section-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .section-title {
            font-size: 1.75rem !important;
          }
          .board-title {
            font-size: 1.25rem !important;
          }
          .board-description {
            font-size: 1rem !important;
          }
          
          /* Mobile responsiveness additions */
          .mobile-header-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 80px !important;
          }
          
          .mobile-section-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .mobile-image-container {
            margin-left: 0 !important;
            margin-right: 0 !important;
            height: 200px !important;
          }
          
          .mobile-icon-title {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
          
          .mobile-feature-item {
            padding: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .mobile-button {
            width: 100% !important;
            justify-content: center !important;
            padding: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem !important;
          }
          .board-title {
            font-size: 1.125rem !important;
          }
          .board-description {
            font-size: 0.875rem !important;
          }
          
          .mobile-ultra-small {
            font-size: 0.75rem !important;
          }
          
          .mobile-icon-container {
            width: 32px !important;
            height: 32px !important;
          }
          
          .mobile-icon-container svg {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>

      <section
        id="boards"
        style={{
          fontFamily: "'Urbanist', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-4.8rem',
        }}>
        {/* Header Section with Colored Background */}
        <div
          className="mobile-header-padding"
          style={{
            background:
              'linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #bae6fd 100%)',
            paddingTop: '120px',
            paddingBottom: '0.5rem',
            position: 'relative',
          }}>
          {/* Background Effects - Square Grid Pattern */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
                backgroundSize: '24px 24px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '384px',
                height: '384px',
                background:
                  'linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), transparent)',
                borderRadius: '50%',
                filter: 'blur(3rem)',
                animation: 'pulse 2s infinite',
              }}
            />
          </div>

          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              textAlign: 'center',
              position: 'relative',
              marginBottom: '3rem',
            }}>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'black',
                marginBottom: '1rem',
                lineHeight: '1.1',
              }}>
              <EditableText
                value={config.boards.title}
                onSave={() => {
                  saveConfigToServer();
                }}
                configPath="boards.title">
                {config.boards.title}
              </EditableText>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                fontSize: '1rem',
                color: '#6b7280',
                maxWidth: '42rem',
                margin: '0 auto',
                lineHeight: '1.7',
                fontWeight: '400',
              }}>
              <EditableText
                value={config.boards.subtitle}
                onSave={() => {
                  saveConfigToServer();
                }}
                configPath="boards.subtitle"
                multiline>
                {config.boards.subtitle}
              </EditableText>
            </motion.p>
          </div>
        </div>

        {/* Board Sections */}
        {config.boards.items.map((board, index) => {
          const Icon = iconMap[board.icon as keyof typeof iconMap];
          const isImageRight = index % 2 === 0;
          const isColored = isColoredSection(index);
          const boardColor = getBoardColor(board.title);

          return (
            <div
              key={board.title}
              className="mobile-section-padding"
              style={{
                background: getSectionBackground(index),
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                paddingLeft: '7rem',
                paddingRight: '7rem',
                position: 'relative',
              }}>
              {/* Add grid pattern for colored sections */}
              {isColored && (
                <div style={{ position: 'absolute', inset: 0 }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
      `,
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>
              )}

              <div
                className="section-container"
                style={{
                  maxWidth: '100rem',
                  margin: '0 auto',
                  padding: '0 1rem',
                  position: 'relative',
                  paddingTop: '3rem',
                  paddingBottom: '2rem',
                }}>
                <motion.div
                  className="board-section"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexDirection: isImageRight ? 'row' : 'row-reverse',
                  }}>
                  {/* Content Side */}
                  <div
                    className="board-content"
                    style={{
                      flex: '1',
                      minWidth: '0',
                    }}>
                    {/* Icon and Title in same line */}
                    <motion.div
                      className="mobile-icon-title"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                      }}>
                      <div
                        className="mobile-icon-container"
                        style={{
                          width: '48px',
                          height: '48px',
                          background: isColored
                            ? 'rgba(0, 0, 0, 0.1)'
                            : `#6366F1`,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backdropFilter: isColored ? 'blur(10px)' : 'none',
                          border: isColored
                            ? '1px solid rgba(0, 0, 0, 0.2)'
                            : 'none',
                        }}>
                        {Icon && (
                          <Icon
                            style={{
                              color: '#ffffff',
                              width: '20px',
                              height: '20px',
                            }}
                          />
                        )}
                      </div>

                      <h3
                        className="board-title"
                        style={{
                          fontSize: '2rem',
                          fontWeight: '700',
                          color: getTextColor(index),
                          lineHeight: '1.1',
                          margin: 0,
                        }}>
                        <EditableText
                          value={board.title}
                          onSave={() => {
                            saveConfigToServer();
                          }}
                          configPath={`boards.items.${index}.title`}>
                          {board.title}
                        </EditableText>
                      </h3>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="board-description"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      style={{
                        color: getSubTextColor(index),
                        marginBottom: '2rem',
                        lineHeight: '1.7',
                        fontSize: '1rem',
                        fontWeight: '400',
                      }}>
                      <EditableText
                        value={board.description}
                        onSave={() => {
                          saveConfigToServer();
                        }}
                        configPath={`boards.items.${index}.description`}
                        multiline>
                        {board.description}
                      </EditableText>
                    </motion.p>

                    {/* Features */}
                    {board.features && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '2rem' }}>
                        <div>
                          {board.features.map((feature, featureIdx) => {
                            return (
                              <div
                                key={feature}
                                className="mobile-feature-item"
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '0.75rem',
                                  marginBottom: '0.75rem',
                                  padding: '0.75rem',
                                  background: isColored
                                    ? 'rgba(0, 0, 0, 0.05)'
                                    : '#f8fafc',
                                  borderRadius: '8px',
                                  border: isColored
                                    ? '1px solid rgba(0, 0, 0, 0.1)'
                                    : '1px solid #e2e8f0',
                                  backdropFilter: isColored
                                    ? 'blur(10px)'
                                    : 'none',
                                }}>
                                <div
                                  style={{
                                    width: '24px',
                                    height: '24px',
                                    background: isColored
                                      ? 'rgba(0, 0, 0, 0.1)'
                                      : `#6366F1`,
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                  }}>
                                  <div
                                    style={{
                                      width: '6px',
                                      height: '6px',
                                      borderRadius: '50%',
                                      background: '#ffffff',
                                    }}
                                  />
                                </div>
                                <div style={{ flex: 1 }}>
                                  <h4
                                    style={{
                                      fontSize: '1rem',
                                      fontWeight: '600',
                                      color: getTextColor(index),
                                      margin: 0,
                                    }}>
                                    <EditableText
                                      value={feature}
                                      onSave={() => {
                                        saveConfigToServer();
                                      }}
                                      configPath={`boards.items.${index}.features.${featureIdx}`}>
                                      {feature}
                                    </EditableText>
                                  </h4>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}>
                      <Button
                        variant="ghost"
                        className="mobile-button"
                        onClick={(e) => handleButtonClick(board, e)}
                        style={{
                          color: getTextColor(index),
                          fontWeight: '600',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: isColored
                            ? 'rgba(0, 0, 0, 0.1)'
                            : 'transparent',
                          border: isColored
                            ? '1px solid rgba(0, 0, 0, 0.2)'
                            : '1px solid rgba(0, 0, 0, 0.1)',
                          cursor: 'pointer',
                          padding: '0.75rem 2rem',
                          fontSize: '1rem',
                          borderRadius: '8px',
                          backdropFilter: isColored ? 'blur(10px)' : 'none',
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = isColored
                            ? 'rgba(0, 0, 0, 0.2)'
                            : 'rgba(99, 102, 241, 0.1)';
                          target.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = isColored
                            ? 'rgba(0, 0, 0, 0.1)'
                            : 'transparent';
                          target.style.transform = 'translateY(0px)';
                        }}>
                        {getButtonText(board.title)}
                        <ArrowRight
                          style={{
                            width: '16px',
                            height: '16px',
                            transition: 'transform 0.2s ease',
                          }}
                        />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Image Side */}
                  <motion.div
                    className="hub-image mobile-image-container"
                    initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      height: '400px',

                      position: 'relative',
                      marginLeft: isImageRight ? '5rem' : 0,
                      marginRight: isImageRight ? 0 : '5rem',

                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',

                      background: 'transparent',
                      overflow: 'visible',
                    }}>
                    <img
                      src={board.image || `/hub-screenshot-${index + 1}.png`}
                      alt={board.title}
                      style={{
                        maxWidth: '120%', // 👈 consistent scale
                        maxHeight: '120%', // 👈 prevents random stretching
                        objectFit: 'contain',
                        background: 'transparent',

                        /* visually centers PNG regardless of transparent bounds */
                        display: 'block',

                        /* depth without fake background */
                        filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.18))',

                        pointerEvents: 'none',
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          );
        })}

        {/* Preview Modal */}
        <PreviewModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          data={selectedData}
        />
      </section>
    </>
  );
};

export default BoardsSection;
