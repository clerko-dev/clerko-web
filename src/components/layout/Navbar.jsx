import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button.jsx";
import clsx from "clsx";

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  function scrollToTop(e) {
    e.preventDefault();
    if (pathname !== "/") navigate("/");
    // miękkie przewinięcie na samą górę
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goTo(id) {
    if (pathname !== "/") {
      navigate("/#" + id);
      // lekkie opóźnienie żeby router podmienił widok, potem scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-slate-950/40 border-b border-white/5">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" onClick={scrollToTop} className="flex items-center gap-2 text-white">
          <img src="/favicon.svg" alt="" className="w-6 h-6" />
          <span className="font-semibold">Clerko</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => goTo("howto")} className={clsx("text-slate-300 hover:text-white")}>
            How-to / Guides
          </button>
          <Link to="/tools" className="text-slate-300 hover:text-white">
            Tools
          </Link>
          <Link to="/store" className="text-slate-300 hover:text-white">
            Store
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/login" className="text-slate-300 hover:text-white px-3 py-2 rounded-lg">
            Log in
          </Link>
          <Link to="/signup" aria-label="Create account">
            <Button>Sign up</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
