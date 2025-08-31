import React from "react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Win deals faster",
      desc: "Generate client-ready proposals in under a minute. Clean layout, clear totals, instant preview.",
    },
    {
      title: "Pricing that’s crystal-clear",
      desc: "Items, quantities, discounts and taxes are calculated automatically. No Excel gymnastics.",
    },
    {
      title: "Share as link or PDF",
      desc: "One link to review & approve. Export a polished PDF when needed, no formatting headaches.",
    },
    {
      title: "Templates & snippets",
      desc: "Save your best sections and reuse them. Keep tone and structure consistent across the team.",
    },
    {
      title: "Client notes & e-sign",
      desc: "Collect notes, approvals and signatures right on the page. Audit-safe trail for each deal.",
    },
    {
      title: "Works with your stack",
      desc: "Copy to invoice tools or CRM. Webhooks & API when you’re ready to automate.",
    },
  ];

  const stats = [
    { value: "58s", label: "avg time to first draft" },
    { value: "40+", label: "ready-to-use templates" },
    { value: "92%", label: "approval rate (teams on Pro)" },
  ];

  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Statyczne statystyki – zero obliczeń, zero NaN */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-5">
              <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="text-sm text-zinc-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Korzyści */}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
          Why teams switch to <span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent font-semibold">Clerko</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="mb-2 text-base font-medium">{b.title}</div>
              <p className="text-sm text-zinc-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
