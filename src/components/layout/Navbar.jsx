import { useEffect, useState } from "react";
import Logo from "@/components/Logo.jsx"; // jeśli masz inny komponent/logo, podmień import

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? // tło po scrollu: półtransparent + blur + subtelna linia u dołu
            "bg-black/60 supports-[backdrop-filter]:bg-black/40 backdrop-blur-md border-b border-white/10"
          : // start: całkiem transparentny (bez obwódki)
            "bg-transparent border-b border-transparent"
      ].join(" ")}
    >
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* LEWA STRONA – logo */}
        <a href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-auto" />
          {/* Upewnij się, że nie masz drugiego tekstowego logo obok: usuń ewentualny <span>Clerko</span> */}
        </a>

        {/* ŚRODEK – linki na desktopie */}
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          <li><a className="text-white/80 hover:text-white transition" href="/how-to">How-to / Guides</a></li>
          <li><a className="text-white/80 hover:text-white transition" href="/tools">Tools</a></li>
          <li><a className="text-white/80 hover:text-white transition" href="/pricing">Pricing</a></li>
          <li><a className="text-white/80 hover:text-white transition" href="/store">Store</a></li>
        </ul>

        {/* PRAWA STRONA – CTA */}
        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="px-3 py-1.5 rounded-md border border-white/15 text-white/90 text-sm hover:bg-white/10 transition"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="px-3 py-1.5 rounded-md bg-white text-black text-sm hover:bg-zinc-100 transition"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
