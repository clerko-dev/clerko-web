// src/components/home/BenefitsSection.jsx
import React from "react";
import {
  Sparkles,     // Win deals faster
  FileText,     // Crystal-clear pricing
  Link,         // Share as link or PDF
  Layers,       // Templates & snippets
  ShieldCheck,  // Approvals & e-sign
  WandSparkles, // Works with your stack
} from "lucide-react";

const ICON_PROPS = { className: "h-5 w-5", strokeWidth: 2 }; // grubszy stroke jak na screenie

const features = [
  {
    Icon: Sparkles,
    title: "Win deals faster",
    desc: "Generate client-ready proposals in under a minute. Clean layout, instant preview.",
  },
  {
    Icon: FileText,
    title: "Crystal-clear pricing",
    desc: "Items, quantities, discounts and taxes calculated automatically.",
  },
  {
    Icon: Link,
    title: "Share as link or PDF",
    desc: "One link to review & approve. Export a polished PDF when needed.",
  },
  {
    Icon: Layers,
    title: "Templates & snippets",
    desc: "Save your best sections and reuse them to stay consistent.",
  },
  {
    Icon: ShieldCheck,
    title: "Approvals & e-sign",
    desc: "Collect approvals and signatures on the page with an audit trail.",
  },
  {
    Icon: WandSparkles,
    title: "Works with your stack",
    desc: "Copy to invoice tools or CRM. Webhooks & API for automation.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      {/* subtelny fioletowy wash pod dolnym rzędem */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 right-0 bottom-6 h-56 mx-1 rounded-[28px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_55%_100%,rgba(139,92,246,.18),transparent_55%)]" />
            <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/12 bg-white/[0.045] p-5 hover:bg-white/[0.06] transition"
            >
              <div className="mb-3 flex items-center gap-3">
                {/* kafelek ikony: delikatne tło + border + ring */}
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl
                                 bg-white/[0.06] border border-white/10 ring-1 ring-white/15 text-white/80">
                  <Icon {...ICON_PROPS} />
                </span>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-white/70">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
