import React from "react";
import GlassCard from "@/components/ui/GlassCard.jsx";

export default function StepsSection() {
  const steps = [
    { title: "Enter details", body: "Client, scope, price, notes." },
    { title: "AI generation", body: "We draft sharp copy instantly." },
    { title: "Export & send", body: "Copy now; PDF/Docs export — soon." },
  ];

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">How it works</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <GlassCard key={i}>
            <div className="space-y-1" data-reveal>
              <div className="font-medium">{s.title}</div>
              <p className="text-sm text-white/70">{s.body}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
