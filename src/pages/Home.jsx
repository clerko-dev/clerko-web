import SEO from "@/components/SEO.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import HighlightsStrip from "@/components/home/HighlightsStrip.jsx"; // jeśli nie masz tego pliku, patrz punkt 1b
import SocialProofSection from "@/components/home/SocialProofSection.jsx";
import FeaturesSection from "@/components/home/FeaturesSection.jsx";
import StepsSection from "@/components/home/StepsSection.jsx";
import GeneratorSection from "@/components/home/GeneratorSection.jsx";
import PricingSection from "@/components/home/PricingSection.jsx";
import FAQSection from "@/components/home/FAQSection.jsx";

function Home() {
  return (
    <>
      <SEO
  title="Clerko — Proposals & quotes in minutes"
  description="Create beautiful, itemized quotes and proposals in minutes. Share as a link or PDF, get approvals, and move from draft to paid — without the busywork."
/>
      {/* ...reszta sekcji */}
    </>
  );
}
export default Home;

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
