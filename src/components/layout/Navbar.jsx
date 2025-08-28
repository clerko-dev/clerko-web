import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo -> przewija do góry */}
        <a
          href="/"
          onClick={(e) => {
            // jeśli już jesteśmy na stronie głównej, tylko przewiń na górę
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 font-semibold text-white"
          aria-label="Clerko — Home"
        >
          <span className="inline-block w-6 h-6 rounded-md bg-gradient-to-tr from-violet-500 to-cyan-400" />
          Clerko
        </a>

        {/* Linki */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-white/80 hover:text-white transition">Home</a>
          <a href="/tools" className="text-white/80 hover:text-white transition">Tools</a>
          <a href="/how-to" className="text-white/80 hover:text-white transition">Guides</a>
          <a href="/store" className="text-white/80 hover:text-white transition">Store</a>
          <a href="/account" className="text-white/90 hover:text-white transition">Account</a>
          {/* CTA -> przewija do generatora */}
          <a
            href="/#generator"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                const el = document.getElementById("generator");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition"
          >
            Try Free
          </a>
        </div>
      </nav>
    </header>
  );
}
