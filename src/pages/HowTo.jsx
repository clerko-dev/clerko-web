import React from "react";
import SEO from "@/components/SEO.jsx";
import Button from "@/components/ui/Button.jsx";

const guides = [
  {
    title: "Write a project proposal that gets a Yes",
    time: "6 min",
    href: "/how-to#write-a-project-proposal"
  },
  {
    title: "Pricing proposals: fixed fee vs. milestones",
    time: "5 min",
    href: "/how-to#pricing-models"
  },
  {
    title: "Scope creep: how to protect your margins",
    time: "4 min",
    href: "/how-to#scope-creep"
  }
];

export default function HowTo() {
  return (
    <>
      <SEO
        title="Clerko Guides â€” Close more deals"
        description="Short, tactical guides on proposals, pricing, scope and client communication."
        pathname="/how-to"
      />
      <section className="relative bg-[#0A0B14]">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <header className="mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Guides</h1>
            <p className="mt-2 text-white/70">Tactical, no-fluff reads.</p>
          </header>

          <div className="space-y-4">
            {guides.map((g) => (
              <a
                key={g.href}
                href={g.href}
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{g.title}</div>
                  <div className="text-xs text-white/60">{g.time} read</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button as="a" href="/#generator" variant="gradient">Try free â€” generate proposal</Button>
          </div>
        </div>
      </section>
    </>
  );
}
