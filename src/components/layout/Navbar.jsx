// src/components/layout/Navbar.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider.jsx";

export default function Navbar() {
  const { user } = useAuth();
  const loc = useLocation();
  const navigate = useNavigate();

  const goHome = (e) => {
    e.preventDefault();
    if (loc.pathname !== "/") navigate("/");
    // płynny scroll na górę
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/5">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <a
          href="/"
          onClick={goHome}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#7C3AED] to-[#22D3EE] text-black font-bold">
            ⚡
          </span>
          <span>Clerko</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><Link to="/" className="hover:opacity-80">Home</Link></li>
          <li><Link to="/tools" className="hover:opacity-80">Tools</Link></li>
          <li><Link to="/how-to" className="hover:opacity-80">Guides</Link></li>
          <li><Link to="/store" className="hover:opacity-80">Store</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#generator"
            onClick={(e) => {
              e.preventDefault();
              if (loc.pathname !== "/") navigate("/");
              setTimeout(() => {
                const el = document.getElementById("generator");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 0);
            }}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-black font-medium hover:opacity-90"
          >
            Try Free
          </a>

          {user ? (
            <Link
              to="/account"
              className="px-3 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10"
              title={user.email}
            >
              Account
            </Link>
          ) : (
            <Link
              to="/account"
              className="px-3 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
