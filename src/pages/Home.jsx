import HeroSection from '@/components/home/HeroSection.jsx';
import HowItWorks from '@/components/home/HowItWorks.jsx';
import HighlightsStrip from '@/components/home/HighlightsStrip.jsx';
import BenefitsSection from '@/components/home/BenefitsSection.jsx';
import TrustedSection from '@/components/home/TrustedSection.jsx';
import CTASection from '@/components/home/CTASection.jsx';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <HighlightsStrip />   {/* 58s / 40+ / 92% na gradientowym pasie */}
      <BenefitsSection />
      <TrustedSection />
      <CTASection />
    </>
  );
}
