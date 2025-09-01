// src/components/home/HowItWorks.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      k: "01",
      title: "Draft your proposal",
      body:
        "Start from a clean template. Add sections, scope, timelines and deliverables with ready-made blocks.",
    },
    {
      k: "02",
      title: "Price it clearly",
      body:
        "Add line items, quantities, discounts and taxes. Clients see totals instantly — no spreadsheet pain.",
    },
    {
      k: "03",
      title: "Share & get approval",
      body:
        "Send a branded link or PDF. One-click approve and instant notifications so you can start the work.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="fade-up text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
          How it works
        </h2>
        <p className="fade-up text-sm text-white/60 max-w-2xl mx-auto">
          Three simple steps from idea to signed proposal.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.k}
            className="fade-up rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span>{s.k}</span>
              <span>Step</span>
            </div>
            <h3 className="text-white font-medium mb-1">{s.title}</h3>
            <p className="text-sm text-white/70">{s.body}</p>
          </div>
        ))}
      </div>

      <div
        className="fade-up mt-10 flex items-center justify-center gap-3"
        style={{ animationDelay: "260ms" }}
      >
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
    </section>
  );
}
