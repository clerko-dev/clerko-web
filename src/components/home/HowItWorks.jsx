// src/components/home/HowItWorks.jsx
import React from "react";
import { ClipboardList, WandSparkles, Share2 } from "lucide-react";

const cards = [
  {
    Icon: ClipboardList,
    title: "Input details",
    desc: "Add client, scope, line items and notes. Ready in 60 seconds.",
  },
  {
    Icon: WandSparkles,
    title: "AI generations",
    desc: "Polish tone, expand sections, and generate item descriptions instantly.",
  },
  {
    Icon: Share2,
    title: "Download & send",
    desc: "Share as a link or export a PDF. Get approvals and move to paid.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
      {/* subtelny glow tła */}
      <div className="pointer-events-none absolute -z-10 left-1/2 top-0 h-40 w-[min(1200px,100%)] -translate-x-1/2 rounded-[28px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/12 via-indigo-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_80%_at_60%_0%,rgba(59,130,246,.14),transparent_60%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
        How it works
      </h2>
      {/* jeśli nie chcesz słowa "steps", zostaw neutralny opis: */}
      <p className="text-sm text-white/60 mt-2 mb-6 max-w-xl">
        Three simple stages from idea to signed proposal.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {cards.map(({ Icon, title, desc }) => (
          <article
            key={title}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition"
          >
            {/* ikona w „pill” z subtelnym obrysem */}
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
