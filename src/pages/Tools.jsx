// src/pages/Tools.jsx
import React from "react";
import SEO from "@/components/SEO.jsx";
import Button from "@/components/ui/Button.jsx";
import { Link } from "react-router-dom";

const tools = [
  {
    slug: "proposal-generator",
    title: "Proposal Generator",
    desc: "AI-assisted, itemized proposals with instant preview.",
    cta: "Open",
  },
  {
    slug: "quote-generator",
    title: "Quote Builder",
    desc: "Clear pricing tables, taxes, discounts — export to PDF.",
    cta: "Open",
  },
  {
    slug: "scope-wizard",
    title: "Scope Wizard",
    desc: "Turn messy notes into a clean, client-ready scope.",
    cta: "Open",
  },
];

export default function Tools() {
  return (
    <>
      <SEO title="Tools — Clerko" description="Open our proposal and quote tools." />
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold">Tools</h1>
          <p className="text-zinc-400 mt-2">
            Quick utilities that power up your proposals & quotes.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((t) => (
            <div
              key={t.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <h2 className="text-lg font-medium">{t.title}</h2>
              <p className="text-sm text-zinc-400 mt-2">{t.desc}</p>
              <div className="mt-4">
                <Link to={`/${t.slug}`}>
                  <Button>{t.cta}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
