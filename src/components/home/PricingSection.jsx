import React from "react"
import { Link } from "react-router-dom"
import { track } from "@/analytics/ga.js"

const plans = [
  { name: "Free", price: "$0", btn: "Start free", perks: ["1 tool", "Basic templates", "Community support"], tag: "Get a feel" },
  { name: "Pro", price: "$19/mo", btn: "Go Pro", perks: ["All tools", "Pro templates", "Email support"], tag: "Most popular" },
  { name: "Lifetime", price: "$59", btn: "Buy once", perks: ["All tools", "All templates", "Priority updates"], tag: "Best value" },
]

export default function PricingSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Pricing</h2>
      <div className="grid-auto mt-4">
        {plans.map((p) => (
          <div key={p.name} className="card flex flex-col">
            <div className="text-sm text-brand">{p.tag}</div>
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="text-3xl font-bold mt-1">{p.price}</div>
            <ul className="text-muted mt-3 space-y-1 list-disc list-inside">
              {p.perks.map(x => <li key={x}>{x}</li>)}
            </ul>
            <Link
              to="/signup"
              className="btn mt-4 border-brand/40 bg-brand/20 hover:bg-brand/30"
              onClick={() => track('pricing_click', { plan: p.name })}
            >
              {p.btn}
            </Link>
            <div className="text-xs text-muted mt-2">Cancel anytime.</div>
          </div>
        ))}
      </div>
    </section>
  )
}
