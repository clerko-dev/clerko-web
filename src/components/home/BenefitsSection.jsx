// src/components/home/BenefitsSection.jsx
import React from "react";
import { Zap, FileText, Link, Layers, ShieldCheck, BadgeCheck } from "lucide-react";

const items = [
  { Icon: Zap,          title: "Win deals faster",      desc: "Generate client-ready proposals in under a minute. Clean layout, instant preview." },
  { Icon: FileText,     title: "Crystal-clear pricing", desc: "Items, quantities, discounts and taxes calculated automatically." },
  { Icon: Link,         title: "Share as link or PDF",  desc: "One link to review & approve. Export a polished PDF when needed." },
  { Icon: Layers,       title: "Templates & snippets",  desc: "Save your best sections and reuse them to stay consistent." },
  { Icon: BadgeCheck,   title: "Approvals & e-sign",    desc: "Collect approvals and signatures on the page with an audit trail." },
  { Icon: ShieldCheck,  title: "Works with your stack", desc: "Copy to invoice tools or CRM. Webhooks & API for automation." },
];

export default function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          Why teams switch to <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-indigo-400">Clerko</span>
        </h2>
        <p className="text-sm text-white/60 mt-2 max-w-2xl">
          Clerko helps you draft, price, brand and approve proposals without the grind.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ Icon, title, desc }) => (
          <article
            key={title}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl
                               bg-white/[0.06] border border-white/10 ring-1 ring-white/15 text-white/80">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="text-white font-medium">{title}</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
