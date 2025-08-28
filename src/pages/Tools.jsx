import { useEffect } from "react";
import { Link } from "react-router-dom";

const cards = [
  { title: "CSV → JSON",          desc: "Convert safely in-browser.",            href: "#",  badge: "Soon" },
  { title: "Image → WebP",        desc: "Compress & convert images.",            href: "#",  badge: "Soon" },
  { title: "PDF Merge",           desc: "Merge PDFs locally, no upload.",        href: "#",  badge: "Soon" },
  { title: "Text Cleaner",        desc: "Strip weird spacing and symbols.",      href: "#",  badge: "Soon" },
  { title: "Slugify",             desc: "URL-safe slugs from any text.",         href: "#",  badge: "Soon" },
  { title: "Price Calculator",    desc: "Quick quote math with markup.",         href: "#",  badge: "Soon" },
];

export default function Tools() {
  useEffect(() => { document.title = "Clerko — Tools"; }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Free tools</h1>
      <p className="text-white/70 mb-8">Private, fast, no data leaves your browser.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold">{c.title}</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 border border-white/15">{c.badge}</span>
            </div>
            <p className="text-sm text-white/70 mb-4">{c.desc}</p>
            <Link
              to={c.href}
              className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white"
              onClick={(e)=>e.preventDefault()}
            >
              Open
              <span aria-hidden>↗</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
