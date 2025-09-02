import HeroSection from '@/components/home/HeroSection.jsx';
import HowItWorks from '@/components/home/HowItWorks.jsx';
import BenefitsSection from '@/components/home/BenefitsSection.jsx';
import TrustedSection from '@/components/home/TrustedSection.jsx';
import CTASection from '@/components/home/CTASection.jsx';
import HighlightsStrip from '@/components/home/HighlightsStrip.jsx';
export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
<div className="mt-10 sm:mt-12">
  <BenefitsSection />
</div>
<div className="mt-10 sm:mt-12">
  <HighlightsStrip />
</div>
      <TrustedSection />
      <CTASection />
    </>
  );
}