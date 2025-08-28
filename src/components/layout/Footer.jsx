import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0B14]">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-white/80 hover:text-white transition">
          Clerko
        </Link>
        <nav className="flex gap-5 text-sm text-white/60">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <a href="mailto:hello@clerko.app" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-xs text-white/40">Â© {new Date().getFullYear()} Clerko. All rights reserved.</p>
      </div>
    </footer>
  );
}
