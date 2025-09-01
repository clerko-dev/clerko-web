// src/components/home/BenefitsSection.jsx
import React from "react";

const features = [
  { t: "Win deals faster", d: "Generate client-ready proposals in under a minute. Clean layout, instant preview." },
  { t: "Crystal-clear pricing", d: "Items, quantities, discounts and taxes calculated automatically." },
  { t: "Share as link or PDF", d: "One link to review & approve. Export a polished PDF when needed." },
  { t: "Templates & snippets", d: "Save your best sections and reuse them to stay consistent." },
  { t: "Approvals & e-sign", d: "Collect approvals and signatures on the page with an audit trail." },
  { t: "Works with your stack", d: "Copy to invoice tools or CRM. Webhooks & API for automation." },
];

const Dot = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">•</span>
);

export default function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
          Why teams switch to <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-sky-400">Clerko</span>
        </h2>
        <p className="text-sm text-white/60 max-w-2xl mx-auto">
          Clerko helps you draft, price, brand and approve proposals without the grind.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <Dot /><span>Benefit</span>
            </div>
            <h3 className="text-white font-medium mb-1">{f.t}</h3>
            <p className="text-sm text-white/70">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
