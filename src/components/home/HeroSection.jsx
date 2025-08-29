import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0B14] pt-24 sm:pt-28 pb-16">
      {/* dekoracyjne poświaty */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-48 left-1/2 h-[800px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #7dd3fc 0%, rgba(125,211,252,0) 60%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #c4b5fd 0%, rgba(196,181,253,0) 60%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center" data-reveal="from-bottom">
        {/* headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          <span className="text-white">Proposals &amp; quotes </span>
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
            in minutes
          </span>
        </h1>

        {/* subheadline */}
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-300/80">
          Generate client-ready proposals fast. Clean templates, instant preview, clear pricing.
          <br className="hidden sm:block" />
          Close deals faster with Clerko.
        </p>

        {/* CTA */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <a
            href="#generator"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-[#0A0B14] font-medium px-5 py-3 shadow-lg shadow-sky-500/10 hover:from-sky-400 hover:to-indigo-400 transition"
          >
            Try free
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-zinc-100 hover:bg-white/[0.06] transition"
          >
            View pricing
          </a>
        </div>

        {/* duży “szklany” placeholder (jak na screenie) */}
        <div
          className="mt-10 md:mt-12"
          data-reveal="from-bottom"
          aria-label="Hero preview placeholder"
        >
          <div className="mx-auto max-w-5xl rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500/20 via-white/5 to-sky-500/20">
            <div className="rounded-[14px] min-h-[360px] md:min-h-[420px] bg-[#0B0D16]/90 border border-white/10 shadow-2xl shadow-sky-500/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
