import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0B14] pt-24 sm:pt-28 pb-16">
      {/* Background glows — decorative only */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-40 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
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

      <div className="relative z-10 container mx-auto max-w-6xl px-4" data-reveal="from-bottom">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[13px] text-zinc-300/80">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/90" />
          Close deals faster
        </div>

        {/* Headline */}
        <h1 className="mt-4 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent">
            Proposals & quotes in minutes
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-5 max-w-2xl text-lg text-zinc-300/80">
          Generate elegant, ready-to-send proposals with pricing, scope and terms. Export, copy, or email in one click.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#generator"
            className="rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-[#0A0B14] font-medium px-5 py-3 transition"
          >
            Try free
          </a>
          <a
            href="#pricing"
            className="rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-100 font-medium px-5 py-3 transition"
          >
            View pricing
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-zinc-400/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            Export to PDF & email
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            Templates for agencies & freelancers
          </div>
        </div>
      </div>
    </section>
  );
}
