import React from "react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400 shadow-lg" />
            <span className="text-sm font-semibold tracking-wide">Clerko</span>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
            <a href="#generator" className="text-sm text-white/80 hover:text-white">Generator</a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white">Pricing</a>
            <a href="/how-to" className="text-sm text-white/80 hover:text-white">Guides</a>
            <a href="/tools" className="text-sm text-white/80 hover:text-white">Tools</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href="#generator"
              className="hidden rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15 md:inline-flex"
            >
              Try free
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              Get Pro
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
