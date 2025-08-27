import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import StepsSection from '@/components/home/StepsSection';
import GeneratorSection from '@/components/home/GeneratorSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import PricingSection from '@/components/home/PricingSection';
import FAQSection from '@/components/home/FAQSection';
import Footer from '@/components/home/Footer';

// Declare gtag as a global function to avoid linting errors


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Clerko - Proposals & Quotes in Minutes | Professional Business Solutions</title>
        <meta name="description" content="Create professional proposals and quotes in minutes with Clerko. Streamline your business workflow with our AI-powered proposal generator and business tools." />
        <meta property="og:title" content="Clerko - Proposals & Quotes in Minutes | Professional Business Solutions" />
        <meta property="og:description" content="Create professional proposals and quotes in minutes with Clerko. Streamline your business workflow with our AI-powered proposal generator and business tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clerko.com" />
      </Helmet>

      <div className="scroll-smooth">
        <HeroSection />
        <StepsSection />
        <GeneratorSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;