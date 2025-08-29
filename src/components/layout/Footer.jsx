import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="container flex flex-col md:flex-row items-center gap-2 justify-between py-6 text-muted">
        <div>© {new Date().getFullYear()} Clerko</div>
        <nav className="flex gap-4">
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
        </nav>
      </div>
    </footer>
  )
}
