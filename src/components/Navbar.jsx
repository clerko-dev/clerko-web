import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTryFree = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("generator");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      const el = document.getElementById("generator");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10
                 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/50"
      aria-label="Primary"
    >
      {/* UWAGA: pointer-events-none — dekoracja nie blokuje klików */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 ring-1 ring-white/20" />
          <span className="text-white font-semibold tracking-tight">Clerko</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link className="text-sm text-white/80 hover:text-white" to="/tools">Tools</Link>
          <Link className="text-sm text-white/80 hover:text-white" to="/how-to">How-to / Guides</Link>
          <Link className="text-sm text-white/80 hover:text-white" to="/store">Store</Link>
          <button
            onClick={handleTryFree}
            className="ml-2 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white
                       bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:opacity-90 transition shadow-md"
          >
            Try free
          </button>
        </div>

        {/* Minimalny mobile toggler – na szybko bez menu rozwijanego */}
        <div className="md:hidden">
          <button
            onClick={handleTryFree}
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-white
                       bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
          >
            Try free
          </button>
        </div>
      </div>
    </nav>
  );
}
