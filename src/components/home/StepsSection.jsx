// src/components/home/StepsSection.jsx
import React from "react";

export default function StepsSection() {
  const steps = [
    {
      title: "Input details",
      text: "Client, scope, price — wpisujesz kilka pól, my formatujemy elegancką ofertę.",
    },
    {
      title: "AI generation",
      text: "Błyskawiczny draft treści (angielski), potem szybka personalizacja.",
    },
    {
      title: "Download & send",
      text: "Kopiuj lub (wkrótce) eksport do PDF/Docs, śledzenie otwarć w planie Pro.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24" data-reveal>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          How it works <span className="brand-gradient">in 3 simple steps</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="glass p-6 md:p-8">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-white/70 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
