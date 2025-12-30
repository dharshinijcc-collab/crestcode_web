'use client';
import Hero from '@/components/sd_services/hero';
import SdeServices from '@/components/sd_services/sde_services';
import Product from '@/components/sd_services/product';
import Testimonials from '@/components/sd_services/testimonials';
import Banner from '@/components/service/banner';
import Techstack from '@/components/sd_services/Techstack';
import Process from '@/components/sd_services/process';
import Faq from '@/components/service/faq';
import Form from '@/components/service/form';

export default function SdServicesPage() {
  return (
    <>
      <Hero />
      <SdeServices />
      <Product />
      <Testimonials />
      <Banner />
      <Techstack />
      <Process />
      <Faq />
      <Form />
    </>
  );
}
