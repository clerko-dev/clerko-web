import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = (e) => {
    e.preventDefault();
    const scrollTop = () =>
      window.scrollTo({ top: 0, behavior: "smooth" });

    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(scrollTop);
    } else {
      scrollTop();
    }
  };

  const goGenerator = (e) => {
    e.preventDefault();
    const scrollToGen = () => {
      const el = document.getElementById("generator");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToGen, 50);
    } else {
      scrollToGen();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#090A12]/70 to-transparent backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" onClick={goHome} className="flex items-center gap-2 font-semibold text-white hover:opacity-90">
          <img src="/favicon.svg" alt="Clerko" className="h-6 w-6" />
          <span>Clerko</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" onClick={goHome} className="text-white/80 hover:text-white">Home</a>
          <Link to="/tools" className="text-white/80 hover:text-white">Tools</Link>
          <Link to="/how-to" className="text-white/80 hover:text-white">Guides</Link>
          <Link to="/store" className="text-white/80 hover:text-white">Store</Link>
        </div>

        <button
          onClick={goGenerator}
          className="rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#7C3AED]/30 hover:opacity-95"
          aria-label="Try Free"
        >
          Try Free
        </button>
      </nav>
    </header>
  );
}
