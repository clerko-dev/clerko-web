import { Helmet } from "react-helmet-async";

import HeroSection from "../components/home/HeroSection.jsx";
import SocialProofSection from "../components/home/SocialProofSection.jsx";
import GeneratorSection from "../components/home/GeneratorSection.jsx";
import FeaturesSection from "../components/home/FeaturesSection.jsx";
import StepsSection from "../components/home/StepsSection.jsx";
import PricingSection from "../components/home/PricingSection.jsx";
import FAQSection from "../components/home/FAQSection.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Clerko â€” Proposals & Quotes in Minutes</title>
        <meta
          name="description"
          content="Generate client-ready proposals and quotes in minutes. Templates, one-click export, and tracking."
        />
      </Helmet>

      <main className="space-y-24">
        <HeroSection />
        <SocialProofSection />
        <GeneratorSection />
        <FeaturesSection />
        <StepsSection />
        <PricingSection />
        <FAQSection />
      </main>
    </>
  );
}
