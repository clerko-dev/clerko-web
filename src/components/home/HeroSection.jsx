import React from "react";
import Button from "@/components/ui/Button.jsx";

export default function HeroSection() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0A0B14] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-white">Proposals &amp; quotes </span>
          <span className="bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
            in minutes
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
          Generate client-ready proposals fast. Clean templates, instant preview, clear pricing.
          Close deals faster with Clerko.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button onClick={scrollToGenerator} className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20">
            Try free
          </Button>
          <a
            href="#pricing"
            className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white"
          >
            View pricing
          </a>
        </div>

        {/* Usuwamy pusty placeholder pod przyciskami — był tu “glass box”.
            Gdy będziesz chciał mini-podgląd generatora w hero, damy tu <GeneratorPreview />. */}
      </div>
    </section>
  );
}
