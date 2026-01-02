'use client';

import Hero from '@/components/web_services/hero';
import Ideality from '@/components/web_services/ideality';
import Features from '@/components/web_services/features';
import Ourservices from '@/components/web_services/ourservices';
import Banner from '@/components/web_services/banner';
import Process from '@/components/web_services/process';
import Testimonials from '@/components/web_services/testimonials';
import FAQ from '@/components/service/faq';
import Form from '@/components/service/form';

export default function WebServicesPage() {
  return (
    <>
      <Hero />
      <Ideality />
      <Ourservices />
      <Features />
      <Banner />
      <Testimonials />
      <Process />
      <FAQ />
      <Form />
    </>
  );
}
