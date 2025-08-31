// src/components/home/FeaturesSection.jsx
import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Beautiful templates",
      desc: "Start from polished, brand-ready proposal and quote templates.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 4h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
          <path d="M14 4v5h5"/>
        </svg>
      ),
    },
    {
      title: "Itemized pricing",
      desc: "Line items, taxes, discounts and auto-totals with zero friction.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 12h16M4 18h10"/>
        </svg>
      ),
    },
    {
      title: "Smart editor (AI)",
      desc: "Polish tone, expand sections and generate item descriptions instantly.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.9l2.1-2.1"/>
        </svg>
      ),
    },
    {
      title: "Client approval",
      desc: "Approve online with a timestamped audit trail — no back-and-forth.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      ),
    },
    {
      title: "Share links & PDF export",
      desc: "Send a secure link or export a branded PDF in one click.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      ),
    },
    {
      title: "Integrations-ready",
      desc: "Webhooks & Zapier soon; Stripe checkout after launch.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 12a4 4 0 1 0 8 0M2 12h4m12 0h4"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20" data-reveal>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
          Why teams choose Clerko
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          Everything you need to go from draft to signed — faster, cleaner, and on brand.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6">
              <div className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white w-9 h-9 mb-3">
                {f.icon}
              </div>
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-zinc-400 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
