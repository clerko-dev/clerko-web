import React from "react"
import { Link, NavLink } from "react-router-dom"
import { track } from "@/analytics/ga.js"

const navLink = ({ isActive }) =>
  "px-3 py-2 rounded-lg text-sm " + (isActive ? "text-sky-300" : "text-slate-300/80 hover:text-slate-200")

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/85 backdrop-blur-lg border-b border-slate-800/60">
      <div className="container flex items-center justify-between py-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 rounded-xl bg-gradient-to-br from-violet-500 to-sky-400" />
          <span className="font-semibold">Clerko</span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/tools" className={navLink}>Tools</NavLink>
          <NavLink to="/how-to" className={navLink}>How-to / Guides</NavLink>
          <NavLink to="/store" className={navLink}>Store</NavLink>
        </nav>

        {/* CTA */}
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                     bg-gradient-to-r from-fuchsia-500 to-sky-400 text-white
                     shadow-[0_8px_30px_rgba(2,6,23,0.35)] ring-1 ring-white/10 hover:opacity-95"
          onClick={() => track("cta_click", { location: "navbar", label: "try_free" })}
        >
          Try Free
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  )
}
