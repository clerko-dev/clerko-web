import React from "react";
import GlassCard from "@/components/ui/GlassCard.jsx";

export default function StepsSection() {
  const steps = [
    {
      title: "Input details",
      text: "Wpisz klienta, zakres, cenę i notatki. Gotowe w 60 sekund.",
    },
    {
      title: "AI generations",
      text: "Wygeneruj profesjonalną propozycję oraz wersje alternatywne.",
    },
    {
      title: "Download & send",
      text: "Skopiuj, pobierz PDF albo wyślij link — śledź otwarcia (Pro).",
    },
  ];

  return (
    <section id="how-it-works" className="container px-4 py-16 sm:py-24">
      <div className="max-w-2xl mb-8" data-reveal>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
        <p className="mt-3 text-white/60">
          Trzy kroki — zero zamieszania. Zrobione jak u agencji z topki.
        </p>
      </div>

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
