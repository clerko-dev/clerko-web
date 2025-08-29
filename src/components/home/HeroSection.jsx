import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative py-20 sm:py-28 text-center">
      <div className="container px-4" data-reveal>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Proposals & quotes{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">
            in minutes
          </span>
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Wpisz kilka pól, zobacz podgląd, skopiuj lub pobierz PDF. Szybko i w jakości enterprise.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#generator" className="btn-primary">Try free</a>
          <Link to="/store" className="btn-outline">View pricing</Link>
        </div>
      </div>
    </section>
  );
}
