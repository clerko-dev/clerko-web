// src/components/home/HowItWorks.jsx
import React from "react";

const IconNote = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
    <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const IconSparkle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
    <path d="M12 3l2.2 4.6L19 10l-4.8 2.4L12 17l-2.2-4.6L5 10l4.8-2.4L12 3z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const IconShare = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
    <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const steps = [
  { t: "Input details", d: "Add client, scope, line items and notes. Ready in 60 seconds.", Icon: IconNote },
  { t: "AI generations", d: "Polish tone, expand sections, and generate item descriptions instantly.", Icon: IconSparkle },
  { t: "Download & send", d: "Share as a link or export a PDF. Get approvals and move to paid.", Icon: IconShare },
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-8">
      {/* delikatny „glow” nad sekcją, niewidoczny prostokąt */}
      <div className="pointer-events-none absolute -z-10 left-1/2 top-0 h-40 w-[min(1200px,100%)] -translate-x-1/2 rounded-[28px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/12 via-indigo-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_80%_at_60%_0%,rgba(59,130,246,.14),transparent_60%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">How it works</h2>
        <p className="text-sm text-white/60 mt-2 max-w-xl">
          Three simple steps from idea to signed proposal.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span>{s.k}</span><span>Step</span>
            </div>
            <div className="flex items-start gap-3">
              <s.Icon />
              <div>
                <h3 className="text-white font-medium mb-1">{s.t}</h3>
                <p className="text-sm text-white/70">{s.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
