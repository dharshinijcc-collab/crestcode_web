// page.tsx
'use client';
import { useState, useEffect } from 'react';
import { usePageTitle } from './common';
import Hero from '@/components/home/hero';
import IndustriesSection from '@/components/home/industries';
import TestimonialSection from '@/components/home/testimonials';
import WhyCrestcode from '@/components/home/whyCrestcode';
import HomeService from '@/components/home/home-service';
import ContactForm from '@/components/home/form';
import Service from '@/components/service';

export default function HomePage() {
  const [showServices, setShowServices] = useState(false);
  
  useEffect(() => {
    const handleShowServices = () => setShowServices(true);
    window.addEventListener('showServices', handleShowServices);
    return () => window.removeEventListener('showServices', handleShowServices);
  }, []);

  usePageTitle('Crestcode - high-performance technical consultancy');

  if (showServices) {
    return <Service />;
  }

  return (
    <>
      <Hero />
      <HomeService />
      <TestimonialSection />
      <IndustriesSection />
      <WhyCrestcode />
      <ContactForm />

    </>
  );
}
