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
      {/* subtelna belka tła przez całą szerokość kontenera */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-48 w-[min(1200px,100%)] -translate-x-1/2 rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/15 via-indigo-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_80%_at_50%_0%,rgba(59,130,246,.18),transparent_60%)]" />
        {/* miękkie ścięcie brzegów */}
        <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" />
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
          How it works
        </h2>
        <p className="text-sm text-white/60 max-w-2xl mx-auto">
          Three simple steps from idea to signed proposal.
        </p>
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
