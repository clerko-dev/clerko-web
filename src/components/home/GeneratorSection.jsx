// src/components/home/GeneratorSection.jsx
import React from "react";

export default function GeneratorSection() {
  return (
    <section
      id="generator"
      className="relative bg-[#0A0B14] py-16 sm:py-20 scroll-mt-24"
      data-reveal="from-bottom"
    >
      {/* tło dekoracyjne - bez blokowania kliknięć */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-24 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #67e8f9 0%, rgba(103,232,249,0) 60%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-500/5">
          {/* ——— WSTAW TU SWÓJ ISTNIEJĄCY FORMULARZ GENERATORA ———
              np. pola: client, service, price, notes oraz przyciski Generate / Clear / Copy / Download
              Ważne: usuń z elementów klasy typu 'opacity-0', 'translate-y-?'
              Jeżeli wcześniej miałeś data-reveal na polach, zostaw — patrz CSS niżej (domyślnie i tak będzie widoczne).
          */}
          <div className="text-zinc-200/90">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Quote & Proposal Generator
            </h2>
            <p className="mt-2 text-zinc-300/75">
              Wypełnij szczegóły poniżej, a wygenerujemy elegancką ofertę do
              skopiowania, PDF lub wysyłki.
            </p>
          </div>

          {/* Przykładowa sekcja miejsca na formularz */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm text-zinc-300/80">Client</label>
              <input
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-zinc-100 placeholder:text-zinc-400/60 outline-none focus:border-cyan-400/40"
                placeholder="np. Acme Sp. z o.o."
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-zinc-300/80">Service</label>
              <input
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-zinc-100 placeholder:text-zinc-400/60 outline-none focus:border-cyan-400/40"
                placeholder="np. One-page website"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-zinc-300/80">Price</label>
              <input
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-zinc-100 placeholder:text-zinc-400/60 outline-none focus:border-cyan-400/40"
                placeholder="np. 2 500 USD"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm text-zinc-300/80">Notes</label>
              <textarea
                rows={5}
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-zinc-100 placeholder:text-zinc-400/60 outline-none focus:border-cyan-400/40"
                placeholder="Zakres, terminy, warunki płatności…"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-[#0A0B14] font-medium px-5 py-3 transition">
              Generate preview
            </button>
            <button className="rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-100 font-medium px-5 py-3 transition">
              Clear
            </button>
            <button className="rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-100 font-medium px-5 py-3 transition">
              Copy
            </button>
            <button className="rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-100 font-medium px-5 py-3 transition">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
