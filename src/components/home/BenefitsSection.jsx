import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Wand2,
  Link as LinkIcon,
  ShieldCheck,
  Layers,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: false, amount: 0.2 },
});

export default function BenefitsSection() {
  const stats = [
    { value: "58s", label: "avg time to first draft" },
    { value: "40+", label: "ready-to-use templates" },
    { value: "92%", label: "approval rate (teams on Pro)" },
  ];

  const benefits = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Win deals faster",
      desc: "Generate client-ready proposals in under a minute. Clean layout, instant preview.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Crystal-clear pricing",
      desc: "Items, quantities, discounts and taxes calculated automatically with totals.",
    },
    {
      icon: <LinkIcon className="w-5 h-5" />,
      title: "Share as link or PDF",
      desc: "One link to review & approve. Export a polished PDF when needed.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Templates & snippets",
      desc: "Save your best sections and reuse them to stay consistent across proposals.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Approvals & e-sign",
      desc: "Collect approvals and signatures on the page with an audit trail.",
    },
    {
      icon: <Wand2 className="w-5 h-5" />,
      title: "Works with your stack",
      desc: "Copy to invoice tools or CRM. Webhooks & API for automation.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24">
      {/* miękki „beam” w tle */}
      <div className="pointer-events-none absolute inset-x-0 -top-8 h-24 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-sky-500/10 blur-2xl" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Statystyki */}
        <motion.div
          {...fadeUp(0)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur px-6 py-5 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-sky-500/5" />
              <div className="relative">
                <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
                <div className="text-sm text-zinc-400 mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Nagłówek */}
        <motion.h2
          {...fadeUp(0.05)}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
        >
          Why teams switch to{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent font-semibold">
            Clerko
          </span>
        </motion.h2>

        {/* Kafelki benefitów */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp(0.08 + i * 0.05)}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 transition-transform duration-300 hover:-translate-y-0.5"
            >
              {/* obramowanie z lekkim gradientem */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-white/5" />

              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-xl bg-white/[0.06] border border-white/10 p-2 text-white/80">
                  {b.icon}
                </div>
                <div>
                  <div className="text-base font-medium">{b.title}</div>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                    {b.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
