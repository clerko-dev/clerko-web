import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();

  // Anchor do generatora: jeśli nie jesteś na "/", skaczemy do "/" z hash,
  // jeśli jesteś na "/", zwykły link "#generator" wystarczy.
  const tryFreeHref = pathname === "/" ? "#generator" : "/#generator";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group inline-flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 ring-1 ring-white/20" />
          <span className="text-lg font-semibold tracking-tight">
            Clerko
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex text-white/80">
          <Link to="/tools" className="hover:text-white transition">Tools</Link>
          <Link to="/how-to" className="hover:text-white transition">How-to</Link>
          <Link to="/store" className="hover:text-white transition">Store</Link>
          <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms</Link>
        </nav>

        <a
          href={tryFreeHref}
          className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/15"
        >
          Try free
          <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}
