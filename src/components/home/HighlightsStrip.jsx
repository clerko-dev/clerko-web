export default function HighlightsStrip() {
  const items = ["AI Assist", "Templates", "Pricing Blocks", "E-Sign", "Client Portal"];
  return (
    <div className="border-y border-white/10 bg-white/[0.02] py-3 backdrop-blur" data-reveal>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-xs text-white/70">
        {items.map((x) => (
          <span key={x} className="rounded-md border border-white/10 bg-white/5 px-3 py-1">{x}</span>
        ))}
      </div>
    </div>
  );
}