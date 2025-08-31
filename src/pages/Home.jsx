import React from "react";
import SEO from "@/components/SEO.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import HowItWorks from "@/components/home/HowItWorks.jsx";
import BenefitsSection from "@/components/home/BenefitsSection.jsx";
import TrustedSection from "@/components/home/TrustedSection.jsx";
import CTASection from "@/components/home/CTASection.jsx";

export default function Home() {
  return (
    <>
      <SEO title="Clerko — Proposals & quotes in minutes" />
      <HeroSection />
      <HowItWorks />
      <BenefitsSection />
      <TrustedSection />
      <CTASection />
    </>
  );
}