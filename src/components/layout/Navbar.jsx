// src/components/layout/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '@/components/ui/Logo.jsx';
import { useAuth } from '@/context/AuthProvider.jsx';

export default function Navbar() {
  const { user } = useAuth();

  const links = [
    { to: '/tools', label: 'Tools' },
    { to: '/generator', label: 'Generator' },
    { to: '/guides', label: 'Guides' },
    { to: '/pricing', label: 'Pricing' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-black/30 to-transparent backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition"
          aria-label="Clerko — home"
        >
          <Logo className="h-5 w-5" />
          <span className="text-sm font-semibold text-white">Clerko</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <Link
              to="/dashboard"
              className="rounded-lg px-3 py-1.5 ring-1 ring-white/20 text-white/90 hover:bg-white/10"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-3 py-1.5 ring-1 ring-white/20 text-white/90 hover:bg-white/10"
              >
                Log in
              </Link>
              <Link
                to="/pricing"
                className="rounded-lg px-3 py-1.5 bg-white text-black hover:bg-white/90"
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
