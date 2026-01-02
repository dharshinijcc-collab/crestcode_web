'use client';
import Hero from '@/components/service/hero';
import OurServices from '@/components/service/ourservices';
import AdvancedServices from '@/components/service/advanced_services';
import Process from '@/components/service/process';
import MVP from '@/components/service/mvp';
import Testimonial from '@/components/service/Testimonial';
import Banner from '@/components/service/banner';
import TechnologiesSection from '@/components/service/technology';
import ServicesFAQ from '@/components/service/faq';

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <OurServices />
      <MVP />
      <Testimonial />
      <AdvancedServices />
      <Banner />
      <Process />
      <TechnologiesSection />
      <ServicesFAQ />
    </>
  );
}
