// src/components/layout/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '@/components/ui/Logo.jsx';
import { useAuth } from '@/context/AuthProvider.jsx';

export default function Navbar() {
  const { user } = useAuth();
  const linkClass = ({ isActive }) =>
    `text-sm hover:text-white ${isActive ? 'text-white' : 'text-white/70'}`;

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <Logo className="h-6" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/tools" className={linkClass}>Tools</NavLink>
          <NavLink to="/generator" className={linkClass}>Generator</NavLink>
          <NavLink to="/how-to" className={linkClass}>Guides</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <Link to="/dashboard" className="text-sm hover:text-white text-white/80">Dashboard</Link>
          ) : (
            <>
              <Link to="/login" className="text-sm hover:text-white text-white/80">Log in</Link>
              <Link
                to="/signup"
                className="text-sm rounded-xl bg-white px-3 py-1.5 text-black hover:opacity-90"
              >
                Get Pro
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
