import React from "react"
import { Link } from "react-router-dom"
import { track } from "@/analytics/ga.js"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* miękkie bloby w tle */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute -left-12 top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
        <span className="absolute -right-12 top-24 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center pt-16 md:pt-24">
        <h1 className="reveal text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Proposals &amp; quotes{" "}
          <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
            in minutes
          </span>
        </h1>

        <p className="reveal mt-4 text-lg text-slate-300/90">
          Generate client-ready proposals fast. Clean templates, instant preview, clear pricing.
          Close deals faster with Clerko.
        </p>

        <div className="reveal mt-8 flex items-center justify-center">
          <Link
            to="/signup"
            className="btn-gradient text-base"
            onClick={() => track("cta_click", { location: "hero", label: "try_free" })}
          >
            Try Free
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
