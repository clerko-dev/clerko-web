import React from "react";
import GlassCard from "@/components/ui/GlassCard.jsx";

export default function StepsSection() {
  const steps = [
  {/* Karta 1 */}
<h3 className="font-semibold mb-1">Input details</h3>
<p className="text-zinc-400">
  Add client, scope, line items and notes. Ready in 60 seconds.
</p>

{/* Karta 2 */}
<h3 className="font-semibold mb-1">AI generations</h3>
<p className="text-zinc-400">
  Generate a professional proposal plus on-brand alternatives.
</p>

{/* Karta 3 */}
<h3 className="font-semibold mb-1">Download & send</h3>
<p className="text-zinc-400">
  Copy, export to PDF, or share as a link — track opens (Pro).
</p>
  ];

  return (
    <section id="how-it-works" className="container px-4 py-16 sm:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">How it works</h2>
<p className="text-zinc-400 mb-8">
  Three steps — zero hassle. Agency-grade results in minutes.
</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal>
        {steps.map((s, i) => (
          <GlassCard key={i} className="p-6 hover:bg-white/[0.08] transition">
            <div className="font-medium">{s.title}</div>
            <div className="text-sm text-white/70 mt-2">{s.text}</div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
