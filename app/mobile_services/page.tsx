'use client';

import Hero from '@/components/mobile_services/hero';
import Features from '@/components/mobile_services/features';
import Ourservices from '@/components/mobile_services/ourservices';
import Banner from '@/components/mobile_services/banner';
import Testimonials from '@/components/mobile_services/testimonials';
import ImageHeading from '@/components/mobile_services/ImageHeading';
import Process from '@/components/mobile_services/process';
import FAQ from '@/components/service/faq';
import Native_vs_hybrid from '@/components/mobile_services/native_vs_hybrid';


export default function MobileServicesPage() {
  return (
    <>
      <Hero />
      <Ourservices />
      <Banner />
      <Native_vs_hybrid />
      <Features />
      <Testimonials />
      <ImageHeading
        imageUrl="/Mobile_Flowchat.png"
        headingText="Mobile app development process"
      />
      <Process />
      <FAQ />
  
    </>
  );
}
