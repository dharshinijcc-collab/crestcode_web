"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { typography, spacing } from "@/lib/typography";
import ScrollReveal from "./ui/scroll-reveal";
import StaggerChildren from "./ui/stagger-children";
import Parallax from "./ui/parallax";
import {
  Users,
  Award,
  Zap,
  Heart,
  Target,
  Coffee,
  Sparkles,
  GraduationCap,
  Wallet,
  User,
  Lightbulb,
  Eye,
  ArrowRight,
  Mail,
  MapPin,
  Linkedin,
  ChevronDown
} from "lucide-react";

export default function Team() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#9BB4C2] py-10 md:py-12 relative overflow-hidden">
          <Parallax speed={0.3} direction="down" className="absolute inset-0">
            <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
          </Parallax>
          
          <div className={spacing.containerSmall + " text-center relative z-10"}>
            <ScrollReveal direction="up" delay={200}>
              <h1 className={typography.h1 + " mb-6"}>About Us</h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <p className={typography.pLarge + " max-w-2xl mx-auto mb-8"}>
                Crestcode is a product studio for founders who refuse to settle for "Good Enough." We partner with entrepreneurs to remove uncertainty, work backwards from Customer Needs, and Launch Products with speed, clarity, and confidence.
              </p>
            </ScrollReveal>
          </div>
        </section>

      {/* Engineering Culture Section */}
      <section className="bg-[#F9FAFB] py-10 md:py-14">
        <div className={spacing.container}>
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-8">
              <h2 className={typography.h2 + " mb-4"}>Our Engineering Culture</h2>
              <p className={typography.pLarge + " max-w-3xl"}>
                At Crestcode India, engineering is not just execution. It is ownership, precision, and long-term thinking. We build products the way world-class teams do: scalable foundations, clean architecture, and relentlessly improving systems.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <ScrollReveal direction="left" delay={400} className="order-2 md:order-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/060552967d5df168b0541cd54d6f0d0a005c9cf4?width=1620" 
                alt="Engineering Team" 
                className="rounded-xl w-full h-auto shadow-lg transform transition-all duration-500 hover:scale-105"
              />
            </ScrollReveal>

            {/* Accordion Items */}
            <div className="order-1 md:order-2 space-y-0">
              <StaggerChildren staggerDelay={100} childDelay={600}>
                {[
                  {
                    title: "Engineering With Intention",
                    description: "We make thoughtful architectural and product decisions that ensure long-term scalability."
                  },
                  {
                    title: "Quality at the Core",
                    description: "Every engineer owns reliability, performance, and precision from build to deployment."
                  },
                  {
                    title: "Clean Code Discipline",
                    description: "We maintain clear, modular code supported by strong reviews and meaningful documentation."
                  },
                  {
                    title: "Fast, Structured Delivery",
                    description: "We move quickly through automation, defined processes, and a culture of constant improvement."
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-[#9CA3AF]">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between gap-4 py-6 hover:bg-gray-50 transition-colors"
                    >
                      <h3 className={typography.h3 + " text-[#111827] text-left"}>
                        {item.title}
                      </h3>
                      <ChevronDown
                        className={`w-6 h-6 flex-shrink-0 text-[#9CA3AF] transition-transform duration-300 ${
                          openAccordion === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openAccordion === index && (
                      <div className="pb-6 animate-in fade-in-50 duration-200">
                        <p className={typography.p + " text-[#4B5563]"}>
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Co-Pilot Section */}
      <section className="bg-white py-10 md:py-12">
        <div className={spacing.container}>
          <div className="max-w-5xl mb-8 mx-auto text-center">
            <h2 className={typography.h2 + " mb-3"}>
              A Technical Co-Pilot for Your Vision
            </h2>
            <p className={typography.pLarge + " text-[#4B5563]"}>
              No Developer Management, Clear Tech Decisions, Transparent Progress, A Team that Cares.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-5 md:gap-6 items-center">
              <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={typography.h3 + " text-[#111827] mb-2"}>
                  Be the Founder, Not the Manager
                </h3>
                <p className={typography.p + " text-[#4B5563]"}>
                  Focus on your mission, we handle the tech
                </p>
              </div>
            </div>

            <div className="flex gap-5 md:gap-6 items-center">
              <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={typography.h3 + " text-[#111827] mb-2"}>
                  Make Smart Decisions
                </h3>
                <p className={typography.p + " text-[#4B5563]"}>
                  Focus on your mission, we handle the tech.
                </p>
              </div>
            </div>

            <div className="flex gap-5 md:gap-6 items-center">
              <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={typography.h3 + " text-[#111827] mb-2"}>
                  Transparency at Every Step
                </h3>
                <p className={typography.p + " text-[#4B5563]"}>
                  Focus on your mission while we keep the tech clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[#F9FAFB] py-10 md:py-12 relative">
        <div className={spacing.container}>
          <div className="flex items-center justify-between mb-8">
            <h2 className={typography.h2 + " text-[#111827]"}>
              Team Members
            </h2>
            <button className="bg-[#111827] text-white px-7 py-3 rounded font-semibold hover:bg-[#1f2937] transition-colors">
              <Link href="/Careers">Join Team</Link>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            {/* Left Side - 4 Individual Photos in 2x2 Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {/* Top Left - Mariya Fatima */}
              <div className="flex flex-col items-center gap-3 mt-4">
                <img 
                  src="/mariya.jpeg" 
                  alt="Mariya Fatima" 
                  className="w-32 h-32 rounded-xl border-2 border-[#111827] object-cover mx-auto"
                />
                <h3 className="text-sm font-bold text-[#111827] text-center">Mariya Fatima</h3>
                <p className="text-xs text-[#2563EB] text-center">CEO</p>
                <p className="text-xs text-[#4B5563] text-center">Legal, IP & Patent Attorney</p>
                <p className="text-xs text-[#4B5563] text-center">PHD - VIT, B.Sc LLB - GNLU</p>
              </div>

              {/* Top Right - Asfarul Huda */}
              <div className="flex flex-col items-center gap-3 mt-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6c4f12a7121525613ac83c26f8087f1f3c2f813e?width=506" 
                  alt="Asfarul Huda" 
                  className="w-32 h-32 rounded-xl border-2 border-[#111827] object-cover mx-auto"
                />
                <h3 className="text-sm font-bold text-[#111827] text-center">Asfarul Huda</h3>
                <p className="text-xs text-[#2563EB] text-center">Investor</p>
                <p className="text-xs text-[#4B5563] text-center">Ex-Amazon, Ex-PayPal, Ex-IBM</p>
                <p className="text-xs text-[#4B5563] text-center">MBA - Gtech (USA), B.Tech - IIIT-K</p>
              </div>

              {/* Bottom Left - Fahad Siddiqui */}
              <div className="flex flex-col items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3b2f5098dc351c84d5fe995e6443225a11f1eecc?width=506" 
                  alt="Fahad Siddiqui" 
                  className="w-32 h-32 rounded-xl border-2 border-[#111827] object-cover mx-auto"
                />
                <h3 className="text-sm font-bold text-[#111827] text-center">Fahad Siddiqui</h3>
                <p className="text-xs text-[#2563EB] text-center">Advisor</p>
                <p className="text-xs text-[#4B5563] text-center">Researcher, Macro Systematic Investing</p>
                <p className="text-xs text-[#4B5563] text-center">B.Tech - IIT Mumbai, MBA - Oxford</p>
              </div>

              {/* Bottom Right - Neyaz Ahmed */}
              <div className="flex flex-col items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a7405292efe3cf2a4d8ae48c83ab7c8229304862?width=506" 
                  alt="Neyaz Ahmed" 
                  className="w-32 h-32 rounded-xl border-2 border-[#111827] object-cover mx-auto"
                />
                <h3 className="text-sm font-bold text-[#111827] text-center">Neyaz Ahmed</h3>
                <p className="text-xs text-[#2563EB] text-center">Advisor</p>
                <p className="text-xs text-[#4B5563] text-center">Healthcare Regulations</p>
                <p className="text-xs text-[#4B5563] text-center">MD - ECFMG, MBBS - Karnataka University</p>
              </div>
            </div>

            {/* Right Side - Large Group Photo */}
            <div className="flex flex-col items-center gap-3 lg:row-span-1">
              <div className="relative w-full h-full min-h-[500px] rounded-xl overflow-hidden bg-gray-50">
                <img 
                  src="/group_photo.jpeg" 
                  alt="Team Group Photo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h3 className="text-xl font-bold text-[#111827] text-center mt-4">Our Team</h3>
              <p className="text-base text-[#2563EB] text-center">Together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-10 md:py-12">
        <div className={spacing.container}>
          <div className="text-center mb-8">
            <h2 className={typography.h2 + " text-[#111827] mb-3"}>
              Our Core Values
            </h2>
            <p className={typography.p + " text-[#4B5563]"}>
              The values that guide us in everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Integrity</h3>
              <p className="text-sm text-[#4B5563]">Doing what's right, not what's easy.</p>
            </div>

            <div className="text-center">
              <Award className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Innovation</h3>
              <p className="text-sm text-[#4B5563]">Pushing boundaries, always.</p>
            </div>

            <div className="text-center">
              <Zap className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Collaboration</h3>
              <p className="text-sm text-[#4B5563]">Working as one unified team.</p>
            </div>

            <div className="text-center">
              <Heart className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Passion</h3>
              <p className="text-sm text-[#4B5563]">We love what we do and it shows in our work,</p>
            </div>

            <div className="text-center">
              <Target className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Excellence</h3>
              <p className="text-sm text-[#4B5563]">Setting and meeting the highest standards.</p>
            </div>

            <div className="text-center">
              <Coffee className="w-8 h-8 text-[#60A5FA] mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-[#111827] mb-2">Technologies</h3>
              <p className="text-sm text-[#4B5563]">Leveraging cutting-edge tools and platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F9FAFB] py-10 md:py-12">
        <div className={spacing.container}>
          <div className="text-center mb-8">
            <h2 className={typography.h2 + " text-[#111827] mb-2 text-xl md:text-2xl"}>
              Industries We're Powering
            </h2>
            <p className="text-base text-[#4B5563]">
              Crestcode is shaping digital products across new-economy industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col gap-3">
              <Sparkles className="w-8 h-8 text-[#60A5FA]" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-[#111827]">AI-Driven Platforms</h3>
              <p className="text-base text-[#374151]">Automations, copilots, and intelligence-led apps.</p>
            </div>

            <div className="flex flex-col gap-3">
              <GraduationCap className="w-8 h-8 text-[#60A5FA]" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-[#111827]">Education & Upskilling</h3>
              <p className="text-base text-[#374151]">Learning platforms and digital classrooms.</p>
            </div>

            <div className="flex flex-col gap-3">
              <Wallet className="w-8 h-8 text-[#60A5FA]" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-[#111827]">Fintech & Payments</h3>
              <p className="text-base text-[#374151]">Secure, compliant, scalable systems.</p>
            </div>

            <div className="flex flex-col gap-3">
              <Heart className="w-8 h-8 text-[#60A5FA]" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-[#111827]">Health & Wellness Tech</h3>
              <p className="text-base text-[#374151]">Patient portals, dashboards, connected care.</p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}