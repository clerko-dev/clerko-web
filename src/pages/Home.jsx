import React from "react"

import HeroSection from "@/components/home/HeroSection.jsx"
import FeaturesSection from "@/components/home/FeaturesSection.jsx"
import SocialProofSection from "@/components/home/SocialProofSection.jsx"
import StepsSection from "@/components/home/StepsSection.jsx"
import GeneratorSection from "@/components/home/GeneratorSection.jsx"
import PricingSection from "@/components/home/PricingSection.jsx"
import FAQSection from "@/components/home/FAQSection.jsx"

export default function Home() {
  return (
    <div className="container space-y-16 py-10">
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <StepsSection />
      <GeneratorSection />
      <PricingSection />
      <FAQSection />
    </div>
  )
}
