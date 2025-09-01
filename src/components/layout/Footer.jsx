// src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 py-10 text-white/70 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 items-center">
        <span className="text-sm">© {year} <span className="text-white/90">Clerko</span>. All rights reserved.</span>
        <ul className="flex flex-wrap items-center gap-4 justify-start sm:justify-end text-sm">
          <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
          <li><Link to="/how-to" className="hover:text-white">Guides</Link></li>
          <li><Link to="/tools" className="hover:text-white">Tools</Link></li>
          <li><Link to="/store" className="hover:text-white">Store</Link></li>
          <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
          <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
        </ul>
      </div>
    </footer>
  );
}
