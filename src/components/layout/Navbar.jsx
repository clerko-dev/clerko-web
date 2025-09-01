// src/components/layout/Navbar.jsx
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const onLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" onClick={onLogoClick} className="text-xl font-extrabold tracking-tight">
          <span className="text-white">Clerko</span>
        </Link>

        <ul className="hidden sm:flex items-center gap-6 text-white/80 text-sm">
          <li>
            <NavLink to="/how-to" className={({ isActive }) => (isActive ? "text-white" : "hover:text-white")}>
              How-to / Guides
            </NavLink>
          </li>
          <li>
            <NavLink to="/tools" className={({ isActive }) => (isActive ? "text-white" : "hover:text-white")}>
              Tools
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className={({ isActive }) => (isActive ? "text-white" : "hover:text-white")}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" className={({ isActive }) => (isActive ? "text-white" : "hover:text-white")}>
              Store
            </NavLink>
          </li>
           <NavLink to="/how-to" className="hover:opacity-80">Guides</NavLink>
  <NavLink to="/tools" className="hover:opacity-80">Tools</NavLink>
  <NavLink to="/generator" className="hover:opacity-80">Generator</NavLink>
  <NavLink to="/store" className="hover:opacity-80">Store</NavLink>
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="px-3 py-1.5 rounded-lg border border-white/15 text-white/90 text-sm hover:bg-white/10"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1.5 rounded-lg bg-white text-black text-sm hover:bg-white/90"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
