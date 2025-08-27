import React from "react";
import { track } from "../../lib/analytics";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A0B14] pt-32 sm:pt-36">
      {/* tło – gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="hero-mesh" />
      </div>

      <div className="container-x text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Proposals & quotes{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
            in minutes
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
          Generate client-ready proposals fast. Clean templates, instant preview, clear pricing.
          Close deals faster with Clerko.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#generator"
            onClick={() => track("cta_try_free")}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            Try free
          </a>
          <a
            href="#pricing"
            onClick={() => track("cta_view_pricing")}
            className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15"
          >
            View pricing
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="aspect-[16/9] w-full rounded-xl bg-black/30" />
          {/* tu możemy kiedyś podmienić na realny screencast/demo */}
        </div>
      </div>
    </section>
  );
}
