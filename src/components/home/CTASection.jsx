// src/components/home/CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="relative rounded-2xl p-8 ring-1 ring-white/10 overflow-hidden">
        {/* gradient tła belki */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-600/30 via-purple-600/25 to-sky-600/20" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20">
              <span>🚀 Faster proposals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
              Ready to close faster?
            </h2>
            <p className="text-sm text-white/85/80 max-w-2xl">
              Create a client-ready proposal in under a minute. No credit card required.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="rounded-xl bg-fuchsia-500 px-4 py-2 text-sm text-white hover:opacity-90">Try free</Link>
            <Link to="/pricing" className="rounded-xl bg-white px-4 py-2 text-sm text-black hover:opacity-90">View pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
