import React from "react";

const LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/how-to", label: "Guides" },
  { href: "/tools", label: "Tools" },
  { href: "/store", label: "Store" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t border-white/10 text-white/70"
      data-reveal="true"
    >
      <div className="container px-6 py-10">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <span className="text-sm">
            <span className="block">© {new Date().getFullYear()}</span>
            <span className="block">Clerko. All rights reserved.</span>
          </span>

          <ul className="flex flex-wrap items-center gap-4 justify-start sm:justify-end text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
