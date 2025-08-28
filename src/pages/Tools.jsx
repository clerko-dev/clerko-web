import React from "react";
import SEO from "@/components/SEO.jsx";
import Button from "@/components/ui/Button.jsx";

const tools = [
  {
    slug: "csv-to-json",
    title: "CSV → JSON",
    desc: "Clean conversion for your datasets and imports.",
  },
  {
    slug: "image-to-webp",
    title: "Image → WebP",
    desc: "Compress images without visible quality loss.",
  },
  {
    slug: "pdf-merge",
    title: "Merge PDFs",
    desc: "Combine multiple PDFs into one — instant.",
  },
  {
    slug: "text-cleaner",
    title: "Text Cleaner",
    desc: "Remove extra spaces, line breaks & weird characters.",
  },
  {
    slug: "slugify",
    title: "Slugify",
    desc: "URL-friendly slugs from any title.",
  },
];

export default function Tools() {
  return (
    <>
      <SEO
        title="Clerko Tools — Free utilities"
        description="A curated set of free tools: CSV↔JSON, PDF merge, image to WebP, and more."
        pathname="/tools"
      />
      <section className="relative bg-[#0A0B14]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <header className="mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Tools</h1>
            <p className="mt-2 text-white/70">
              Hand-picked utilities that speed up your workflow.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t.slug}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 backdrop-blur-sm"
              >
                <div className="font-semibold">{t.title}</div>
                <div className="mt-1 text-sm text-white/70">{t.desc}</div>
                <div className="mt-4">
                  <Button as="a" href={`/#generator`} variant="secondary" className="w-full">
                    Use with proposal
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-[#7C3AED]/20 to-[#22D3EE]/20 p-5">
            <div>
              <div className="font-semibold">Need a custom internal tool?</div>
              <div className="text-sm text-white/70">
                We build small automations on top of Clerko.
              </div>
            </div>
            <Button as="a" href="/store" variant="gradient">Explore add-ons</Button>
          </div>
        </div>
      </section>
    </>
  );
}
