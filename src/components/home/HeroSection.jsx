// src/components/home/HeroSection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProposalPreview from "@/components/preview/ProposalPreview.jsx";

export default function HeroSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-[#0A0B14] to-[#0F1222] flex items-center"
    >
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: copy + CTAs */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Close deals faster with{" "}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow-sm">
              Clerko
            </span>
          </h1>

          <p className="text-white/70 max-w-xl">
            Create beautiful, itemized quotes and proposals in minutes. Share as a link or PDF, get approvals, and move from draft to paid — without the busywork.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#generator"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-white text-[#0A0B14] font-medium hover:opacity-90 transition"
            >
              Try free
            </a>
            <Link
              to="/store"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-white/20 text-white hover:bg-white/10 transition"
            >
              View pricing
            </Link>
          </div>

          <p className="text-xs text-white/50">No credit card required.</p>
        </div>

        {/* RIGHT: collapsible proposal preview */}
        <div className="relative">
          <div
            className={`rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/5 backdrop-blur transition-[max-height] duration-500 ease-in-out ${
              expanded ? "max-h-[1600px]" : "max-h-[520px]"
            }`}
          >
            <div className="p-4 md:p-6">
              <ProposalPreview />
            </div>

            {/* gradient mask (only when collapsed) */}
            {!expanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0B14] to-transparent" />
            )}
          </div>

          {/* Expand / Collapse button (identyczny styl) */}
          {!expanded ? (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 border border-white/20 backdrop-blur"
              aria-label="Expand proposal preview"
            >
              Expand preview
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 border border-white/20 backdrop-blur"
              aria-label="Collapse proposal preview"
            >
              Collapse
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
