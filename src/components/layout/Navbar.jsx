// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") navigate("/");
    // chwilę później scroll to top (po renderze)
    requestAnimationFrame(() =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  };

  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm ${
      isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" onClick={goHome} className="font-semibold tracking-tight">
          Clerko
        </a>

        <div className="flex items-center gap-1">
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <NavLink to="/tools" className={linkCls}>Tools</NavLink>
          <NavLink to="/store" className={linkCls}>Store</NavLink>
          <NavLink to="/how-to" className={linkCls}>Guides</NavLink>
        </div>

        <div className="flex items-center gap-2">
          <a className="btn btn-secondary" href="#pricing">Pricing</a>
          <a className="btn btn-primary" href="#generator">Try free</a>
        </div>
      </nav>
    </header>
  );
}
