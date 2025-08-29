import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { track } from '@/analytics/ga.js'

const navClass = ({ isActive }) =>
  `btn ${isActive ? 'ring-1 ring-slate-600' : ''}`

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur border-b border-slate-800">
      <div className="container flex items-center gap-3 py-3">
        <Link to="/" className="btn font-semibold">⚡ Clerko</Link>
        <NavLink to="/tools" className={navClass}>Tools</NavLink>
        <NavLink to="/how-to" className={navClass}>How it works</NavLink>
        <NavLink to="/store" className={navClass}>Store</NavLink>
        <div className="flex-1" />
        <NavLink to="/login" className={navClass}>Log in</NavLink>
        <NavLink
          to="/signup"
          className="btn border-brand/40 bg-brand/20 hover:bg-brand/30"
          onClick={() => track('cta_click', { location: 'navbar', label: 'signup' })}
        >
          Sign up
        </NavLink>
      </div>
    </nav>
  )
}
