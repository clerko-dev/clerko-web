import { useEffect } from "react";

const items = [
  { title: "Write a project proposal", time: "6 min read" },
  { title: "Price your first web project", time: "4 min read" },
  { title: "Scope basics: deliverables & milestones", time: "5 min read" },
];

export default function HowTo() {
  useEffect(() => { document.title = "Clerko — Guides"; }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Guides</h1>
      <p className="text-white/70 mb-8">Short, practical write-ups for freelancers & studios.</p>
      <div className="space-y-3">
        {items.map((i) => (
          <article key={i.title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition-colors">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-sm text-white/60 mt-1">{i.time}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
