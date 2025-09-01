// src/components/home/BenefitsSection.jsx
import React from "react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Create proposals fast",
      desc: "Go from idea to shareable proposal in minutes with clean defaults and smart blocks.",
    },
    {
      title: "Branded PDFs",
      desc: "Export pixel-perfect PDFs with your logo, colors, and typography.",
    },
    {
      title: "Itemized pricing",
      desc: "Clear line items, quantities, discounts, taxes — no spreadsheet pain.",
    },
    {
      title: "One-click approvals",
      desc: "Clients approve online. Get notified instantly and move work forward.",
    },
    {
      title: "Reusable templates",
      desc: "Save your best proposals as templates and ship consistently.",
    },
    {
      title: "Client repository",
      desc: "Keep clients, proposals, and versions organized in one place.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="fade-up text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
          Everything you need to win deals
        </h2>
        <p className="fade-up text-sm text-white/60 max-w-2xl mx-auto">
          Clerko helps you draft, price, brand and approve proposals without the grind.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="fade-up rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span>✓</span>
              <span>Benefit</span>
            </div>
            <h3 className="text-white font-medium mb-1">{b.title}</h3>
            <p className="text-sm text-white/70">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
