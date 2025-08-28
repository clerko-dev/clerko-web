import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const linkBase =
  "px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-white/90";
const linkActive = "text-white bg-white/10";
const linkIdle = "text-white/70";

export default function Navbar() {
  const { pathname } = useLocation();

  // smooth-scroll gdy na Home pojawia się hash
  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0A0B14]/60 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white font-semibold tracking-tight">
          Clerko
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/tools"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Tools
          </NavLink>
          <NavLink
            to="/how-to"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            How-to
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Store
          </NavLink>
        </div>

        {/* CTA */}
        <Link
          to="/#generator"
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white
                     bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] shadow
                     hover:opacity-90 transition-opacity"
        >
          Try Free
        </Link>
      </nav>
    </header>
  );
}
