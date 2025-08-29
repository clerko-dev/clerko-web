// src/components/home/HeroSection.jsx
import Button from "@/components/ui/Button.jsx";

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container px-6 py-20 md:py-28">
        <div data-reveal className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight leading-[1.1]">
            Proposals & quotes in minutes
          </h1>
          <p className="mt-5 text-white/70 text-lg md:text-xl">
            Draft, brand and send professional proposals without the busywork. Fast, on-brand, and consistent every time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#generator">
              <Button variant="primary" size="lg">Try free</Button>
            </a>
            <a href="/store#pricing" className="inline-block">
              <Button variant="outline" size="lg">View pricing</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
