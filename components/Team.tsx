"use client";

import Link from "next/link";
import { useState } from "react";
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
  ChevronDown,
  Layout,
  Terminal,
  Code2
} from "lucide-react";
import { useAdmin } from './admin/context';

// --- ICON MAPPING ---
const iconMap = {
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
  ChevronDown,
  Layout,
  Terminal,
  Code2
};

// Icon mapping function
const getIcon = (iconName: string, size: number = 24) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={size} /> : null;
};

// --- DATA CONFIGURATION ---
// Data moved to config.ts, will be loaded from context

export default function Team() {
  const { config } = useAdmin();
  const TEAM_CONTENT = config?.team?.TEAM_CONTENT;
  
  if (!TEAM_CONTENT) return null;
  
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section style={{ backgroundColor: TEAM_CONTENT.hero.bg }} className="py-10 md:py-12 relative overflow-hidden">
          <Parallax speed={0.3} direction="down" className="absolute inset-0">
            <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
          </Parallax>
          
          <div className={spacing.containerSmall + " text-center relative z-10"}>
            <ScrollReveal direction="up" delay={200}>
              <h1 className={typography.h1 + " mb-6"}>{TEAM_CONTENT.hero.title}</h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <p className={typography.pLarge + " max-w-2xl mx-auto mb-8"}>
                {TEAM_CONTENT.hero.description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Engineering Culture Section */}
        <section className="bg-[#F9FAFB] py-10 md:py-14">
          <div className={spacing.container}>
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center max-w-4xl mx-auto mb-8">
                <h2 className={typography.h2 + " mb-4"}>{TEAM_CONTENT.culture.title}</h2>
                <p className={typography.pLarge + " max-w-3xl"}>
                  {TEAM_CONTENT.culture.description}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <ScrollReveal direction="left" delay={400} className="order-2 md:order-1">
                <img 
                  src={TEAM_CONTENT.culture.image} 
                  alt="Engineering Team" 
                  className="rounded-xl w-full h-auto shadow-lg transform transition-all duration-500 hover:scale-105"
                />
              </ScrollReveal>

              <div className="order-1 md:order-2 space-y-0">
                <StaggerChildren staggerDelay={100} childDelay={600}>
                  {TEAM_CONTENT.culture.accordion.map((item, index) => (
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
                {TEAM_CONTENT.copilot.title}
              </h2>
              <p className={typography.pLarge + " text-[#4B5563]"}>
                {TEAM_CONTENT.copilot.subtitle}
              </p>
            </div>

            <div className="space-y-8 max-w-3xl mx-auto">
              {TEAM_CONTENT.copilot.features.map((feature, idx) => (
                <div key={idx} className="flex gap-5 md:gap-6 items-center">
                  <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    {getIcon(feature.icon, 24)}
                  </div>
                  <div>
                    <h3 className={typography.h3 + " text-[#111827] mb-2"}>
                      {feature.title}
                    </h3>
                    <p className={typography.p + " text-[#4B5563]"}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="bg-[#F9FAFB] py-10 md:py-12 relative">
          <div className={spacing.container}>
            <div className="flex items-center justify-between mb-8">
              <h2 className={typography.h2 + " text-[#111827]"}>
                {TEAM_CONTENT.members.title}
              </h2>
              <button className="bg-[#111827] text-white px-7 py-3 rounded font-semibold hover:bg-[#1f2937] transition-colors">
                <Link href={TEAM_CONTENT.members.ctaHref}>{TEAM_CONTENT.members.ctaLabel}</Link>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
              <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                {TEAM_CONTENT.members.individual.map((member, idx) => (
                  <div key={idx} className={`flex flex-col items-center gap-3 ${idx < 2 ? 'mt-4' : ''}`}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-xl border-2 border-[#111827] object-cover mx-auto"
                    />
                    <h3 className="text-sm font-bold text-[#111827] text-center">{member.name}</h3>
                    <p className="text-xs text-[#2563EB] text-center">{member.role}</p>
                    <p className="text-xs text-[#4B5563] text-center">{member.description}</p>
                    <p className="text-xs text-[#4B5563] text-center">{member.education}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-3 lg:row-span-1">
                <div className="relative w-full h-full min-h-[500px] rounded-xl overflow-hidden bg-gray-50">
                  <img 
                    src={TEAM_CONTENT.members.groupPhoto} 
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
                {TEAM_CONTENT.values.title}
              </h2>
              <p className={typography.p + " text-[#4B5563]"}>
                {TEAM_CONTENT.values.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_CONTENT.values.items.map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-8 h-8 text-[#60A5FA] mx-auto mb-4">
                    {getIcon(value.icon, 32)}
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#4B5563]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-[#F9FAFB] py-10 md:py-12">
          <div className={spacing.container}>
            <div className="text-center mb-8">
              <h2 className={typography.h2 + " text-[#111827] mb-2 text-xl md:text-2xl"}>
                {TEAM_CONTENT.industries.title}
              </h2>
              <p className="text-base text-[#4B5563]">
                {TEAM_CONTENT.industries.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {TEAM_CONTENT.industries.items.map((industry, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-8 h-8 text-[#60A5FA]">
                    {getIcon(industry.icon, 32)}
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">{industry.title}</h3>
                  <p className="text-base text-[#374151]">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}