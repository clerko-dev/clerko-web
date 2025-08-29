import React, { useState } from "react"
import { Link } from "react-router-dom"
import { track } from "@/analytics/ga.js"

export default function GeneratorSection() {
  const [topic, setTopic] = useState("")
  return (
    <section className="card">
      <h2 className="text-xl font-semibold">Try the Offer Generator</h2>
      <p className="text-muted mt-1">Describe your product idea and get a ready-to-sell offer outline.</p>
      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2"
          placeholder="e.g., Notion Cashflow Tracker"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Link
          to="/signup"
          className="btn border-brand/40 bg-brand/20 hover:bg-brand/30"
          onClick={() => track('cta_click', { location: 'generator', label: 'generate_offer' })}
        >
          Generate
        </Link>
      </div>
      <p className="text-xs text-muted mt-2">Full generator available after sign-up.</p>
    </section>
  )
}
