// src/pages/Home.jsx
import React, { Suspense, lazy } from "react";
import SEO from "@/components/SEO.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import FeaturesSection from "@/components/home/FeaturesSection.jsx";
import BenefitsSection from "@/components/home/BenefitsSection.jsx";

// Lazy-load cięższych sekcji dla szybszego TTFB
const StepsSection = lazy(() => import("@/components/home/StepsSection.jsx"));
const GeneratorSection = lazy(() => import("@/components/home/GeneratorSection.jsx"));
const PricingSection = lazy(() => import("@/components/home/PricingSection.jsx"));
const SocialProofSection = lazy(() => import("@/components/home/SocialProofSection.jsx"));
// Jeśli masz FAQ/Features — odkomentuj/importuj
// const FeaturesSection = lazy(() => import("@/components/home/FeaturesSection.jsx"));
// const FAQSection = lazy(() => import("@/components/home/FAQSection.jsx"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <BenefitsSection /> {/* <- NOWE: usuwa pustą przestrzeń i NaN */}
      <SocialProofSection />
      <Footer />
    </>
  );
}