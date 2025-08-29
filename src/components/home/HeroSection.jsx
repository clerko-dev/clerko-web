// src/components/home/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0B14] pt-24 sm:pt-28 pb-16">
      {/* Dekoracje w tle, ale bez blokady kliknięć */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-32 left-1/2 h-[620px] w-[980px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #a78bfa 0%, rgba(167,139,250,0) 60%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent">
            Proposals & Quotes in Minutes
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-zinc-300/80">
          Twórz eleganckie, gotowe do wysyłki oferty w kilka minut — z
          szablonami, kalkulacją i eksportem.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#generator" className="rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-[#0A0B14] font-medium px-5 py-3 transition">
            Try free
          </a>
          <a href="#pricing" className="rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-100 font-medium px-5 py-3 transition">
            View pricing
          </a>
        </div>

        {/* USUNIĘTE: jakiekolwiek dodatkowe <input>/<form> pod przyciskami */}
      </div>
    </section>
  );
}
