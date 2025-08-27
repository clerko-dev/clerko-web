import HeroSection from "../components/home/HeroSection.jsx";
import GeneratorSection from "../components/home/GeneratorSection.jsx";
import FeaturesSection from "../components/home/FeaturesSection.jsx";
import StepsSection from "../components/home/StepsSection.jsx";
import SocialProofSection from "../components/home/SocialProofSection.jsx";
import PricingSection from "../components/home/PricingSection.jsx";
import FAQSection from "../components/home/FAQSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GeneratorSection />
      <FeaturesSection />
      <StepsSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
