import { ChevronDown, ChevronUp } from 'lucide-react';
import { Star, ChevronRight, Code, Smartphone, Globe, Cog } from 'lucide-react';
import { useState } from 'react';
import { Building2, Rocket, Cloud, Package } from 'lucide-react';

interface ServiceCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  details?: string;
}

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  label: string;
  description: string;
}

function HeroSection() {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Services</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        We provide comprehensive technology solutions to help your business thrive in the digital age.
      </p>
    </div>
  );
}

function ServiceCards() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  const services: ServiceCard[] = [
    {
      id: 1,
      icon: <Code className="w-8 h-8 text-[#4a9eff]" />,
      title: 'Software Product Development',
      description: 'We develop and deliver custom software products for startups and enterprises.',
      link: 'Learn More',
      details: 'From concept to deployment, we build scalable software products using modern architectures, agile methodologies, and cutting-edge technologies. Our team ensures robust testing, security, and performance optimization.'
    },
    {
      id: 2,
      icon: <Cog className="w-8 h-8 text-[#4a9eff]" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web and mobile applications from frontend to backend deployment.',
      link: 'Learn More',
      details: 'We handle everything from responsive UI/UX design to complex backend systems, databases, APIs, and cloud deployment. Expert in React, Node.js, Python, and modern deployment strategies.'
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8 text-[#4a9eff]" />,
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies.',
      link: 'Learn More',
      details: 'Creating fast, responsive, and SEO-friendly websites using React, Next.js, and modern web technologies. Focus on performance, accessibility, and user experience.'
    },
    {
      id: 4,
      icon: <Smartphone className="w-8 h-8 text-[#4a9eff]" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      link: 'Learn More',
      details: 'Building high-performance mobile applications using React Native, Flutter, and native technologies. Expert in app store deployment, push notifications, and mobile optimization.'
    },
    {
      id: 5,
      icon: <Code className="w-8 h-8 text-[#4a9eff]" />,
      title: 'AI Development',
      description: 'Machine learning and AI solutions to transform your business.',
      link: 'Learn More',
      details: 'Implementing AI/ML solutions including predictive analytics, natural language processing, computer vision, and automation using TensorFlow, PyTorch, and modern ML frameworks.'
    },
    {
      id: 6,
      icon: <Cog className="w-8 h-8 text-[#4a9eff]" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      link: 'Learn More',
      details: 'Designing and implementing cloud architectures on AWS, Azure, and Google Cloud. Expert in microservices, serverless, containerization, and DevOps practices.'
    },
  ];

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h2>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Comprehensive technology solutions for your business needs
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem',
        alignItems: 'stretch'
      }}>
        {services.map((service) => (
          <div key={service.id} style={{
            padding: '2rem',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            background: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '280px'
          }}>
            <div style={{ marginBottom: '1rem' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1a2332' }}>
              {service.title}
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', flex: 1 }}>
              {service.description}
            </p>
            <div style={{ marginTop: 'auto' }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setExpandedService(expandedService === service.id ? null : service.id);
                }}
                style={{
                  color: '#ff5757',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {expandedService === service.id ? 'Show Less' : service.link}
                <ChevronRight className={`w-4 h-4 ${expandedService === service.id ? 'rotate-90' : ''}`} />
              </a>
              {expandedService === service.id && service.details && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: '#555',
                  lineHeight: '1.6'
                }}>
                  {service.details}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionsSection() {
  const solutions: Solution[] = [
    {
      id: '1',
      icon: <Building2 className="w-10 h-10" />,
      title: 'Enterprise Software',
      label: 'Scalable',
      description: 'Large-scale enterprise applications with robust architecture'
    },
    {
      id: '2',
      icon: <Rocket className="w-10 h-10" />,
      title: 'Startup Solutions',
      label: 'Fast',
      description: 'Quick MVP development for startups and entrepreneurs'
    },
    {
      id: '3',
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Migration',
      label: 'Modern',
      description: 'Seamless migration to modern cloud infrastructure'
    },
    {
      id: '4',
      icon: <Package className="w-10 h-10" />,
      title: 'Digital Transformation',
      label: 'Complete',
      description: 'End-to-end digital transformation services'
    },
    {
      id: '5',
      icon: <Code className="w-10 h-10" />,
      title: 'API Development',
      label: 'Connected',
      description: 'RESTful and GraphQL APIs for seamless integrations'
    },
    {
      id: '6',
      icon: <Smartphone className="w-10 h-10" />,
      title: 'DevOps Solutions',
      label: 'Automated',
      description: 'CI/CD pipelines and automated deployment strategies'
    }
  ];

  return (
    <div style={{ 
      padding: '6rem 2rem', 
      background: '#0f172a',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 25% 25%, rgba(74, 158, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(118, 75, 162, 0.05) 0%, transparent 70%)
        `
      }} />
      
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1.5rem', 
            color: 'white',
            fontWeight: '700',
            letterSpacing: '-0.02em'
          }}>
            Solutions We Provide
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #4a9eff, #667eea, #764ba2)',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }} />
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Customized solutions tailored to your business requirements
          </p>
        </div>

        {/* Timeline/Flow Layout */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #4a9eff, #667eea, #764ba2, transparent)',
            transform: 'translateY(-50%)',
            zIndex: 0
          }} />

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            {solutions.map((solution, index) => (
              <div key={solution.id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                width: 'calc(33.333% - 2rem)',
                minWidth: '280px',
                position: 'relative'
              }}>
                {/* Icon circle with animation effect */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, 
                    ${index % 3 === 0 ? '#4a9eff' : index % 3 === 1 ? '#667eea' : '#764ba2'}, 
                    ${index % 3 === 0 ? '#667eea' : index % 3 === 1 ? '#764ba2' : '#4a9eff'})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  boxShadow: `0 10px 30px ${index % 3 === 0 ? 'rgba(74, 158, 255, 0.3)' : index % 3 === 1 ? 'rgba(102, 126, 234, 0.3)' : 'rgba(118, 75, 162, 0.3)'}`,
                  position: 'relative',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{
                    position: 'absolute',
                    width: '95px',
                    height: '95px',
                    borderRadius: '50%',
                    border: `2px solid ${index % 3 === 0 ? '#4a9eff' : index % 3 === 1 ? '#667eea' : '#764ba2'}`,
                    opacity: 0.3,
                    animation: 'pulse 2s infinite'
                  }} />
                  {solution.icon}
                </div>

                {/* Content */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '2rem',
                  width: '100%',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    marginBottom: '0.5rem', 
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    {solution.title}
                  </h3>
                  
                  <span style={{ 
                    background: `linear-gradient(135deg, ${index % 3 === 0 ? '#4a9eff' : index % 3 === 1 ? '#667eea' : '#764ba2'}, ${index % 3 === 0 ? '#667eea' : index % 3 === 1 ? '#764ba2' : '#4a9eff'})`, 
                    color: 'white', 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '12px', 
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    display: 'inline-block'
                  }}>
                    {solution.label}
                  </span>
                  
                  <p style={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    lineHeight: '1.6', 
                    fontSize: '0.9rem'
                  }}>
                    {solution.description}
                  </p>
                </div>

                {/* Number indicator */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#0f172a',
                  border: '2px solid #4a9eff',
                  color: '#4a9eff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  zIndex: 2
                }}>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Service() {
  return (
    <div>
      <HeroSection />
      <ServiceCards />
      <SolutionsSection />
    </div>
  );
}
