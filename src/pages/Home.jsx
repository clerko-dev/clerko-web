import React from "react";
import HeroSection from '@/components/home/HeroSection.jsx';
import HowItWorks from '@/components/home/HowItWorks.jsx';
import BenefitsSection from '@/components/home/BenefitsSection.jsx';
import TrustedSection from '@/components/home/TrustedSection.jsx';
import CTASection from '@/components/home/CTASection.jsx';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />

      {/* Why teams switch to Clerko */}
      <div className="mt-12">
        <BenefitsSection />
      </div>

      <TrustedSection />
      <CTASection />
    </>
  );
}
