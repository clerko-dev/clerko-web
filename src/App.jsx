// src/App.jsx
import React from "react";

// NAV + SEKCJE HOME
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/home/HeroSection.jsx";
import FeaturesSection from "./components/home/FeaturesSection.jsx";
import StepsSection from "./components/home/StepsSection.jsx";
import GeneratorSection from "./components/home/GeneratorSection.jsx";
import SocialProofSection from "./components/home/SocialProofSection.jsx";
import PricingSection from "./components/home/PricingSection.jsx";
import FAQSection from "./components/home/FAQSection.jsx";
import Footer from "./components/home/Footer.jsx";

// Global styles (Tailwind)
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <Navbar />
      <main className="overflow-x-clip">
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <GeneratorSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
