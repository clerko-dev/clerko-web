// src/components/home/TrustedSection.jsx
import React from "react";

// ---- badge (pigułka) ----
function LogoPill({ name }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs ring-1 ring-white/10">
      {name}
    </span>
  );
}

export default function TrustedSection() {
  const row1 = [
    "Pixel&Co", "NorthPeak", "OmegaSoft", "Greenline", "Artemis",
    "Loopwork", "NovaLabs", "BrightCorp", "Pixel&Co", "NorthPeak",
  ];
  const row2 = [
    "Greenline", "Artemis", "Loopwork", "NovaLabs", "BrightCorp",
    "Pixel&Co", "NorthPeak", "OmegaSoft", "Greenline", "Artemis",
  ];

  const testimonials = [
    {
      initials: "AL",
      name: "Amelia Lopez",
      role: "Agency Owner",
      quote:
        "Clerko cut our proposal time from hours to minutes. Clients love the clarity.",
    },
    {
      initials: "DK",
      name: "Daniel Kim",
      role: "Freelance Dev",
      quote:
        "The pricing table and PDF export are flawless. I win more small gigs now.",
    },
    {
      initials: "SM",
      name: "Sara Malik",
      role: "Consultant",
      quote:
        "Snippets + AI polish = consistent quality without the grind. Worth it.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">
          Trusted by thousands
        </h2>

        {/* -- marquee: rząd 1 -- */}
        <div className="marquee mb-3">
          <div className="marquee__track">
            {[...row1, ...row1].map((b, i) => (
              <LogoPill key={`m1-${i}`} name={b} />
            ))}
          </div>
        </div>

        {/* -- marquee: rząd 2 (w drugą stronę) -- */}
        <div className="marquee marquee--reverse mb-10">
          <div className="marquee__track">
            {[...row2, ...row2].map((b, i) => (
              <LogoPill key={`m2-${i}`} name={b} />
            ))}
          </div>
        </div>

        {/* -- 3 karty opinii -- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-xs">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-zinc-400">{t.role}</div>
                </div>
              </div>
              <blockquote className="text-sm text-zinc-300 leading-relaxed">
                “{t.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
