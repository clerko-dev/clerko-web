import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const linkBase =
  "px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-white/90";
const linkActive = "text-white bg-white/10";
const linkIdle = "text-white/70";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTryFree = useCallback((e) => {
    e.preventDefault();

    // Jeśli nie jesteśmy na Home – przejdź na Home z hashem
    if (pathname !== "/") {
      navigate("/#generator");
    } else {
      // Na Home – uaktualnij hash (bez przeładowania) i przewiń
      if (location.hash !== "#generator") {
        history.replaceState(null, "", "#generator");
      }
    }
    // Przewiń po kolejnej klatce (gdy sekcja jest w DOM)
    requestAnimationFrame(() => {
      const el = document.getElementById("generator");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, navigate]);

  const handleLogo = useCallback(() => {
    // Zawsze na Home + płynny powrót do góry
    if (pathname !== "/") navigate("/");
    requestAnimationFrame(() =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }, [pathname, navigate]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0A0B14]/60 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={handleLogo} className="text-white font-semibold tracking-tight">
          Clerko
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Home</NavLink>
          <NavLink to="/tools"   className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Tools</NavLink>
          <NavLink to="/how-to"  className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>How-to</NavLink>
          <NavLink to="/store"   className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Store</NavLink>
        </div>

        {/* CTA */}
        <a
          href="/#generator"
          onClick={handleTryFree}
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white
                     bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] shadow
                     hover:opacity-90 transition-opacity"
        >
          Try Free
        </a>
      </nav>
    </header>
  );
}
