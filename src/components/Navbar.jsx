import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { track } from "@/lib/analytics";

const NavLink = ({ to, children }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`transition hover:text-white ${active ? "text-white" : "text-white/80"}`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const tryFreeHref = pathname === "/" ? "#generator" : "/#generator";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clickTry = () => track("click_try_free", { location: "navbar" });

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur transition ${
        scrolled ? "bg-black/55" : "bg-black/40"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group inline-flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 ring-1 ring-white/20" />
          <span className="text-lg font-semibold tracking-tight">Clerko</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/tools">Tools</NavLink>
          <NavLink to="/how-to">How-to</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/terms">Terms</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={tryFreeHref}
            onClick={clickTry}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/15"
          >
            Try free
            <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
          </a>

          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2 text-white/90">
            <Link to="/tools" onClick={() => setOpen(false)} className="block py-1">Tools</Link>
            <Link to="/how-to" onClick={() => setOpen(false)} className="block py-1">How-to</Link>
            <Link to="/store" onClick={() => setOpen(false)} className="block py-1">Store</Link>
            <Link to="/privacy" onClick={() => setOpen(false)} className="block py-1">Privacy</Link>
            <Link to="/terms" onClick={() => setOpen(false)} className="block py-1">Terms</Link>
          </div>
        </div>
      )}
    </header>
  );
}
