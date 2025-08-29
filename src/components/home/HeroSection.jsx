import React from "react"
import { Link } from "react-router-dom"
import { track } from "@/analytics/ga.js"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
        <span className="absolute -right-10 top-20 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center pt-20 md:pt-28">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Proposals &amp; quotes{" "}
          <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
            in minutes
          </span>
        </h1>

        <p className="mt-4 text-lg text-slate-300/90">
          Transform your business workflow with AI-powered proposal generation.
          Create professional quotes and proposals that win clients every time.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold
                       bg-gradient-to-r from-fuchsia-500 to-sky-400 text-white
                       shadow-[0_8px_30px_rgba(2,6,23,0.35)] ring-1 ring-white/10 hover:opacity-95"
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
