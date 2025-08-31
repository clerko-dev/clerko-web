// src/pages/Home.jsx
import React, { Suspense, lazy } from "react";
import SEO from "@/components/SEO.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";

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
      <SEO
        title="Clerko — Proposals & quotes in minutes"
        description="Create beautiful, itemized quotes and proposals in minutes. Share as a link or PDF, get approvals, and move from draft to paid—without the busywork."
      />
      <HeroSection />

      <Suspense fallback={<div className="text-center py-10 text-white/60">Loading…</div>}>
        <StepsSection />
        <section id="generator" className="scroll-mt-28">
          <GeneratorSection />
        </section>
        <PricingSection />
        <SocialProofSection />
        {/* <FeaturesSection /> */}
        {/* <FAQSection /> */}
      </Suspense>
    </>
  );
}
