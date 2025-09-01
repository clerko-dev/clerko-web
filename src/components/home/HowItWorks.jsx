// src/components/home/HowItWorks.jsx
import React from "react";
import { Link } from "react-router-dom";

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
  {
    k: "01",
    title: "Input details",
    body: "Add client, scope, line items and notes. Ready in 60 seconds.",
    Icon: IconNote,
  },
  {
    k: "02",
    title: "AI generations",
    body: "Polish tone, expand sections, and generate item descriptions instantly.",
    Icon: IconSparkle,
  },
  {
    k: "03",
    title: "Download & send",
    body: "Share as a link or export a PDF. Get approvals and move to paid.",
    Icon: IconShare,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      {/* tło – delikatny gradient jak na wcześniejszych screenach */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_20%_0%,rgba(139,92,246,.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_40%_at_80%_20%,rgba(59,130,246,.18),transparent_60%)]" />
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
          How it works
        </h2>
        <p className="text-sm text-white/60 max-w-2xl mx-auto">
          Three simple steps from idea to signed proposal.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.k}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span>{s.k}</span><span>Step</span>
            </div>
            <div className="flex items-start gap-3">
              <s.Icon />
              <div>
                <h3 className="text-white font-medium mb-1">{s.title}</h3>
                <p className="text-sm text-white/70">{s.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* przyciski pod kartami */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link to="/" className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40">
          Try free
        </Link>
        <Link to="/pricing" className="rounded-xl bg-white px-4 py-2 text-sm text-black hover:opacity-90">
          View pricing
        </Link>
      </div>
    </section>
  );
}
