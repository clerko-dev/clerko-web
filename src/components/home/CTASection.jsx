// src/components/home/CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="fade-up rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span>🚀 Faster proposals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
              Ship proposals in minutes, not hours
            </h2>
            <p className="text-sm text-white/60 max-w-2xl">
              Create, preview and share polished quotes. Branded PDFs, itemized pricing, and one-click approvals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40"
            >
              Try free
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl bg-white px-4 py-2 text-sm text-black hover:opacity-90"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
