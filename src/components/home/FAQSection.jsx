import React from "react"

const faqs = [
  { q: "Do I need coding skills?", a: "No. Everything works with simple forms and ready-made blocks." },
  { q: "Can I use my own domain?", a: "Yes, you can connect it via your hosting provider." },
  { q: "Is there a free plan?", a: "Yes — start for free and upgrade when you’re ready." },
]

export default function FAQSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <div className="mt-4 grid gap-4">
        {faqs.map((f, i) => (
          <div key={i} className="card">
            <div className="font-semibold">{f.q}</div>
            <div className="text-muted mt-1">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
