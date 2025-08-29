import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 mt-16 py-10 text-sm text-white/70">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-semibold tracking-tight hover:text-white"
          >
            Clerko
          </Link>
          <span className="text-white/40">— Proposals &amp; quotes in minutes</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="/#features" className="hover:text-white">Features</a>
          <a href="/#generator" className="hover:text-white">Generator</a>
          <Link to="/tools" className="hover:text-white">Tools</Link>
          <Link to="/how-to" className="hover:text-white">Guides</Link>
          <Link to="/store" className="hover:text-white">Store</Link>
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
        </nav>

        <div className="text-xs text-white/50">
  &copy; 2025 Clerko. All rights reserved.
</div>
      </div>
    </footer>
  );
}
