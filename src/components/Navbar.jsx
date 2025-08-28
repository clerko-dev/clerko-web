import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sticky styl po scrollu
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Zamykanie menu przy zmianie trasy
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleTryFree = () => {
    // Jeśli nie jesteśmy na stronie głównej — przejdź na nią
    if (location.pathname !== "/") {
      navigate("/");
      // poczekaj aż dom się zrenderuje po nawigacji i przewiń
      setTimeout(() => {
        const el = document.getElementById("generator");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      const el = document.getElementById("generator");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10"
          : "bg-transparent"
      }`}
      aria-label="Primary"
    >
      {/* dekoracyjny gradient ZA navem i bez klikalności */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 ring-1 ring-white/20 shadow-lg shadow-fuchsia-500/20" />
          <span className="text-white font-semibold tracking-tight group-hover:opacity-90">
            Clerko
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/tools"
            className="text-sm text-white/80 hover:text-white transition"
          >
            Tools
          </Link>
          <Link
            to="/how-to"
            className="text-sm text-white/80 hover:text-white transition"
          >
            How-to / Guides
          </Link>
          <Link
            to="/store"
            className="text-sm text-white/80 hover:text-white transition"
          >
            Store
          </Link>

          <button
            onClick={handleTryFree}
            className="ml-2 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white
                       bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:opacity-90 transition shadow-md"
          >
            Try free
          </button>
        </div>

        {/* MOBILE TOGGLER */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-white/90 hover:text-white hover:bg-white/10"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              <Link
                to="/tools"
                className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
              >
                Tools
              </Link>
              <Link
                to="/how-to"
                className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
              >
                How-to / Guides
              </Link>
              <Link
                to="/store"
                className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
              >
                Store
              </Link>
              <button
                onClick={handleTryFree}
                className="mt-2 rounded-lg px-4 py-2 text-sm font-medium text-white
                           bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:opacity-90 transition"
              >
                Try free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
