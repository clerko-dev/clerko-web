import React from "react";
import SEO from "@/components/SEO.jsx";
import Button from '@/components/ui/Button.jsx'


const items = [
  {
    sku: "starter-templates",
    title: "Starter Templates (10)",
    desc: "Agency, dev, design, SEO, SMM â€” ready to ship.",
    price: "$19",
  },
  {
    sku: "pro-templates",
    title: "Pro Templates (25)",
    desc: "Big-ticket proposals with milestones and upsells.",
    price: "$39",
  },
  {
    sku: "brand-pack",
    title: "Brand Pack",
    desc: "Headers, covers, ready-to-export visual assets.",
    price: "$29",
  }
];

export default function Store() {
  return (
    <>
      <SEO
        title="Clerko Store â€” Templates & add-ons"
        description="Download ready-to-use proposal templates and brand assets that close faster."
        pathname="/store"
      />
      <section className="relative bg-[#0A0B14]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <header className="mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Store</h1>
            <p className="mt-2 text-white/70">Templates & small add-ons. Instant delivery.</p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <div
                key={it.sku}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20"
              >
                <div className="font-semibold">{it.title}</div>
                <div className="mt-1 text-sm text-white/70">{it.desc}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-white/90 font-semibold">{it.price}</div>
                  <Button
                    as="a"
                    href="/#generator"
                    variant="secondary"
                  >
                    Try template
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button as="a" href="/#generator" variant="gradient">Generate proposal now</Button>
          </div>
        </div>
      </section>
    </>
  );
}
