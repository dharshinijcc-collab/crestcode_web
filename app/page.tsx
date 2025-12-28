// page.tsx
'use client';
import { usePageTitle } from './common';
import Hero from '@/components/home/hero';
import IndustriesSection from '@/components/home/industries';
import TestimonialSection from '@/components/home/testimonials';
import WhyCrestcode from '@/components/home/whyCrestcode';

export default function HomePage() {
  usePageTitle('Crestcode - high-performance technical consultancy');

  return (
    <>
      <Hero />
      <TestimonialSection />
      <IndustriesSection />
      <WhyCrestcode />
    </>
  );
}
