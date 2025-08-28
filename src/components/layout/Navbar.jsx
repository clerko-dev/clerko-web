import React from "react";
import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  "px-3 py-2 rounded-lg text-sm " +
  (isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white");

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0A0B14]/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">Clerko</Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/tools" className={linkClass}>Tools</NavLink>
          <NavLink to="/how-to" className={linkClass}>Guides</NavLink>
          <NavLink to="/store" className={linkClass}>Store</NavLink>
        </nav>
        <a href="#generator" className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-white text-sm">
          Try free
        </a>
      </div>
    </header>
  );
}
