import React from "react";
import { Link } from "react-router-dom";
import ProposalPreview from "@/components/preview/ProposalPreview.jsx";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-[#0A0B14] pt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        {/* Copy po lewej */}
        <div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Close deals faster with{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-white bg-clip-text font-extrabold tracking-tight text-transparent">
              Clerko
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            Create beautiful, itemized quotes and proposals in minutes. Share as a link or PDF,
            get approvals, and move from draft to paid—without the busywork.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#generator"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Try free
            </a>
            <Link
              to="/store"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              View pricing
            </Link>
          </div>
          <div className="mt-3 text-xs text-slate-400">No credit card required.</div>
        </div>

        {/* Podgląd po prawej */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.18),transparent_55%)] blur-2xl"></div>
          <ProposalPreview />
        </div>
      </div>

      {/* delikatny gradient przy dolnej krawędzi */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0A0B14]"></div>
    </section>
  );
}
