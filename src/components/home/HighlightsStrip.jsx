// src/components/home/HighlightsStrip.jsx
import React from "react";

const items = [
  { v: "58s", d: "avg time to first draft" },
  { v: "40+", d: "ready-to-use templates" },
  { v: "92%", d: "approval rate (teams on Pro)" },
];

export default function HighlightsStrip() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-14">
      {/* szeroki gradientowy pas pod metrykami */}
      <div className="pointer-events-none absolute -z-10 left-1/2 top-0 h-[180px] w-[min(1200px,100%)] -translate-x-1/2 rounded-[28px] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(139,92,246,.20),rgba(59,130,246,.16)_60%,transparent)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.v} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
            <div className="text-3xl font-semibold text-white mb-1">{it.v}</div>
            <div className="text-sm text-white/70">{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
