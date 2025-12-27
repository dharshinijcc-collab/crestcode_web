// page.tsx
'use client';
import SecuritySection from '@/components/securitySection';
import { usePageTitle } from './common';
import { useWishlistForm } from './layout';
import Tools from '@/components/tools';
import DocklyHero from '@/components/joinDockly';
import HeroSection2 from '@/components/hero2';
import HowDocklyWorks from '@/components/howWorks';
import HowDocklyWorks1 from '@/components/hii';

export default function HomePage() {
  usePageTitle('dockly - Organize Your Digital Life in One Place');
  const wishlistFormRef = useWishlistForm();

  return (
    <>
      {/* <HeroSection ref={wishlistFormRef} /> */}
      <HeroSection2 />
      {/* <FeaturesSection /> */}
      <HowDocklyWorks />
      {/* <VideoSection /> */}
      <Tools />
      <SecuritySection />
      <DocklyHero />
      {/* <TestimonialsSection /> */}
    </>
  );
}
