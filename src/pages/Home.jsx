import React from "react";
import SEO from "@/components/SEO.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import StepsSection from "@/components/home/StepsSection.jsx";
import BenefitsSection from "@/components/home/BenefitsSection.jsx";
import SocialProofSection from "@/components/home/SocialProofSection.jsx";

export default function Home() {
  return (
    <>
      <SEO title="Clerko — Proposals & Quotes in minutes" />
      <main className="min-h-screen">
        <HeroSection />
        <StepsSection />
        <BenefitsSection />   {/* nowa stabilna sekcja, zero NaN */}
        <SocialProofSection />
      </main>
    </>
  );
}
