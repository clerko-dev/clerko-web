export default function HeroSection(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="container py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="h1-gradient">Proposals & quotes</span><br/>
          in minutes
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">
          Transform your business workflow with AI-powered proposal generation.
          Create professional quotes and proposals that win clients every time.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#generator" className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 font-semibold text-black hover:opacity-90">
            Try Free →
          </a>
          <a href="/tools" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white/80 hover:text-white hover:border-white/40">
            Browse tools
          </a>
        </div>
      </div>
    </section>
  );
}
