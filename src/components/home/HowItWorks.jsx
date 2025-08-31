import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Wand2, Share2 } from "lucide-react";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay: d },
  viewport: { once: false, amount: 0.25 },
});

export default function HowItWorks() {
  const items = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Input details",
      desc: "Add client, scope, line items and notes. Ready in 60 seconds.",
    },
    {
      icon: <Wand2 className="w-5 h-5" />,
      title: "AI generations",
      desc: "Polish tone, expand sections, and generate item descriptions instantly.",
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Download & send",
      desc: "Share as a link or export a PDF. Get approvals and move to paid.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-sky-500/10 blur-2xl" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          {...fadeUp(0)}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
        >
          How it works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              {...fadeUp(0.05 + i * 0.06)}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6"
            >
              <div className="mb-3 inline-flex rounded-xl bg-white/[0.07] border border-white/10 p-2 text-white/80">
                {it.icon}
              </div>
              <div className="text-base font-medium">{it.title}</div>
              <p className="text-sm text-zinc-400 leading-relaxed mt-1">{it.desc}</p>

              {/* subtle hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
