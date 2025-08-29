import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const goTryFree = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      // poczekaj aż Home się zrenderuje
      setTimeout(() => {
        const el = document.getElementById("generator");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    } else {
      const el = document.getElementById("generator");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" onClick={goTop} className="font-semibold tracking-tight">
          Clerko
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#features" className="hover:text-white">Features</a>
          <Link to="/tools" className="hover:text-white">Tools</Link>
          <Link to="/how-to" className="hover:text-white">Guides</Link>
          <Link to="/store" className="hover:text-white">Store</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#generator" onClick={goTryFree} className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-sm font-medium">Try free</a>
          <Link to="/login" className="px-3 py-1.5 rounded-lg border border-white/15 text-sm">Login</Link>
          <Link to="/signup" className="px-3 py-1.5 rounded-lg border border-white/15 text-sm hidden sm:inline">Sign up</Link>
        </div>
      </div>
    </header>
  );
}
