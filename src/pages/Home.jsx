import SEO from "@/components/SEO.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import HighlightsStrip from "@/components/home/HighlightsStrip.jsx"; // jeśli nie masz tego pliku, patrz punkt 1b
import SocialProofSection from "@/components/home/SocialProofSection.jsx";
import FeaturesSection from "@/components/home/FeaturesSection.jsx";
import StepsSection from "@/components/home/StepsSection.jsx";
import GeneratorSection from "@/components/home/GeneratorSection.jsx";
import PricingSection from "@/components/home/PricingSection.jsx";
import FAQSection from "@/components/home/FAQSection.jsx";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <HeroSection />
      <HighlightsStrip />
      <SocialProofSection />
      <FeaturesSection />
      <StepsSection />
      <GeneratorSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
