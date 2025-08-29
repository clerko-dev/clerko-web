export default function HeroSection() {
  return (
    <section id="home" className="hero container px-6" data-reveal>
      <div className="max-w-3xl">
        <h1 className="h1">
          Proposals & Quotes in minutes — not hours.
        </h1>
        <p className="lead mt-4">
          Turn client details into a polished, send-ready proposal with one click.
          Consistent, on-brand, and trackable.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#generator" className="btn-primary">Try free</a>
          <a href="/#pricing" className="btn-ghost">View pricing</a>
        </div>

        <div className="hero-badges">
          <span className="text-white/60 text-sm">No credit card required</span>
          <span className="text-white/30 text-sm">•</span>
          <span className="text-white/60 text-sm">Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
