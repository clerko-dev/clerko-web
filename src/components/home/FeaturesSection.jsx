import React from "react"

const features = [
  { title: "Built for speed", text: "Launch in hours. Generators, templates, and pre-wired flows." },
  { title: "Conversion-first", text: "Opinionated copy, pricing blocks, and CTAs that sell." },
  { title: "No-code friendly", text: "Point-and-click. Add products, publish, start collecting payments." },
]

export default function FeaturesSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Why Clerko</h2>
      <div className="grid-auto mt-4">
        {features.map((f) => (
          <div key={f.title} className="card">
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-muted mt-1">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
