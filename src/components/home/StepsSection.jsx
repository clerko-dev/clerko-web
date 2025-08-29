import React from "react"

const steps = [
  { n: "1", t: "Pick a tool", d: "Choose a generator (Offer Creator, PDF/Data Extractor, SEO Page Maker)." },
  { n: "2", t: "Generate & package", d: "Produce assets or offers, package as product, preview in store." },
  { n: "3", t: "Publish & sell", d: "Push live, capture leads, and start collecting payments." },
]

export default function StepsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">How it works</h2>
      <div className="grid-auto mt-4">
        {steps.map((s) => (
          <div key={s.n} className="card">
            <div className="text-3xl font-bold mb-2">{s.n}</div>
            <h3 className="text-lg font-semibold">{s.t}</h3>
            <p className="text-muted mt-1">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
