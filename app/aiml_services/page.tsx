'use client';

import Hero from '@/components/aiml_services/hero';
import Ourservices from '@/components/aiml_services/ourservice';
import Solution from '@/components/aiml_services/solution';
import Testimonials from '@/components/sd_services/testimonials';
import Process from '@/components/aiml_services/process';
import Banner from '@/components/aiml_services/banner';
import ImageHeading from '@/components/aiml_services/ImageHeading';
import FAQ from '@/components/home/faq';

export default function AimlServicesPage() {
  return (
    <>
      <Hero />
      <Ourservices />
      <Solution />
      <Testimonials />
      <ImageHeading
        imageUrl="/AIStrategy.png"
        headingText="AI development strategy"
      />
      <Process />
      <Banner />
      <FAQ />
  
    </>
  );
}
