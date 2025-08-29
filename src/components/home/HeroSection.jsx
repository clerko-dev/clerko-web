import React from "react"
import { Link } from "react-router-dom"
import { track } from "@/analytics/ga.js"

export default function HeroSection() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        AI tools & templates to launch and scale your micro-business
      </h1>
      <p className="text-muted max-w-2xl mx-auto">
        Ship faster, sell smarter. Ready-made generators, offer creators, and SEO pages that convert.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link
          to="/signup"
          className="btn border-brand/40 bg-brand/20 hover:bg-brand/30"
          onClick={() => track('cta_click', { location: 'hero', label: 'get_started' })}
        >
          Get started free
        </Link>
        <Link
          to="/tools"
          className="btn"
          onClick={() => track('cta_click', { location: 'hero', label: 'browse_tools' })}
        >
          Browse tools
        </Link>
      </div>
      <p className="text-xs text-muted">No credit card required.</p>
    </section>
  )
}
