import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/how-to", label: "How-to" },
  { href: "/store", label: "Store" },
];

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1023]/70 backdrop-blur border-b border-white/10">
      <nav className="container h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-extrabold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400">⚡</span>
          <span>Clerko</span>
        </a>

        <button
          className="lg:hidden rounded-md border border-white/15 px-3 py-1 text-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >Menu</button>

        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white/80 hover:text-white">{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="#generator"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Try Free
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0b1023]/90">
          <div className="container py-3 space-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block text-white/80">{l.label}</a>
            ))}
            <a
              href="#generator"
              className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Try Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
