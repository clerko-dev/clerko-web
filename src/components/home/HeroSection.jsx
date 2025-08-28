// src/components/home/HeroSection.jsx
import React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (hash) => {
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      return;
    }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-[#0A0B14] py-16 sm:py-24" data-reveal>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Proposals & quotes{" "}
          <span className="brand-gradient">in minutes</span>
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Type a few fields, see the preview, copy or export (soon). Clean, fast,
          and client-friendly proposals.
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className="btn btn-primary"
            onClick={() => goTo("#generator")}
          >
            Try free
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => goTo("#pricing")}
          >
            View pricing
          </button>
        </div>

        {/* Usunięto dodatkowe pole pod CTA */}
      </div>

      {/* Tło/ozdoby jeśli chcesz */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-50 pointer-events-none" />
    </section>
  );
}
