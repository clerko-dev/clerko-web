import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container mx-auto py-8 text-sm text-white/70 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div>© 2025 Clerko. All rights reserved.</div>
        <nav className="flex gap-5">
          <Link to="/tools" className="hover:text-white">Tools</Link>
          <Link to="/how-to" className="hover:text-white">Guides</Link>
          <Link to="/store" className="hover:text-white">Store</Link>
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
