// src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="container mx-auto py-10 px-6 text-sm text-white/70">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-semibold">Clerko</div>
            <div className="text-white/50">
              &copy; {year} Clerko. All rights reserved.
            </div>
          </div>

          <ul className="flex gap-5">
            <li><Link to="/tools" className="hover:opacity-80">Tools</Link></li>
            <li><Link to="/how-to" className="hover:opacity-80">Guides</Link></li>
            <li><Link to="/store" className="hover:opacity-80">Store</Link></li>
            <li><Link to="/privacy" className="hover:opacity-80">Privacy</Link></li>
            <li><Link to="/terms" className="hover:opacity-80">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
