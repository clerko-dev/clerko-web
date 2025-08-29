export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      data-reveal
      aria-label="Hero section"
    >
      {/* soft glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-emerald-400/20 to-indigo-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT: copy + CTAs */}
          <div className="space-y-6" data-reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Proposals & quotes in minutes — not hours
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              <span className="block">Close deals faster</span>
              <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                with Clerko
              </span>
            </h1>

            <p className="max-w-xl text-base text-white/70">
              Generate client-ready proposals in under 60 seconds. Reusable templates, pricing blocks,
              AI assist, e-sign and sending — all in one clean workflow.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#generator"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow/50 shadow-black/20 transition hover:shadow-lg hover:opacity-95"
              >
                Try free
              </a>
              <a
                href="/store"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                View pricing
              </a>
              <span className="text-xs text-white/50">Free plan · No credit card</span>
            </div>

            {/* Social proof */}
            <div className="mt-4 flex items-center gap-4">
              {/* avatar stack */}
              <div className="flex -space-x-2">
                <span className="inline-block h-8 w-8 rounded-full border border-white/20 bg-white/10 backdrop-blur" />
                <span className="inline-block h-8 w-8 rounded-full border border-white/20 bg-white/10 backdrop-blur" />
                <span className="inline-block h-8 w-8 rounded-full border border-white/20 bg-white/10 backdrop-blur" />
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] text-white/70 backdrop-blur">
                  +1k
                </span>
              </div>
              <p className="text-xs text-white/60">
                Trusted by freelancers, studios & SMBs — avg. rating <span className="text-white/90">4.9/5</span>
              </p>
            </div>

            {/* trust badges */}
            <ul className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-white/60">
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">GDPR-ready</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">Templates</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">E-sign</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">Client portal</li>
            </ul>
          </div>

          {/* RIGHT: mock preview */}
          <div className="relative" data-reveal>
            <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/30 backdrop-blur">
              {/* window header */}
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
                <div className="ml-auto rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                  Proposal preview
                </div>
              </div>

              <div className="grid gap-3">
                {/* fake form blocks */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="mb-2 text-[11px] text-white/50">Client</div>
                  <div className="h-9 rounded-lg bg-white/10" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="mb-2 text-[11px] text-white/50">Project</div>
                  <div className="h-9 rounded-lg bg-white/10" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="mb-2 text-[11px] text-white/50">Price (USD)</div>
                  <div className="h-9 rounded-lg bg-white/10" />
                </div>

                {/* right aligned primary */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow/50 shadow-black/20 transition hover:shadow-lg hover:opacity-95"
                  >
                    Generate preview
                  </button>
                </div>

                {/* pseudo document */}
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4">
                  <div className="mb-2 h-4 w-2/3 rounded bg-white/10" />
                  <div className="mb-2 h-3 w-5/6 rounded bg-white/10" />
                  <div className="mb-2 h-3 w-3/4 rounded bg-white/10" />
                  <div className="mb-2 h-3 w-2/3 rounded bg-white/10" />
                  <div className="h-3 w-4/5 rounded bg-white/10" />
                </div>
              </div>
            </div>

            {/* subtle shadow */}
            <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-[28px] bg-gradient-to-t from-black/10 to-transparent blur-2xl" />
          </div>
        </div>

        {/* logo strip */}
        <div className="mt-14 grid grid-cols-2 items-center gap-6 text-white/35 sm:grid-cols-4">
          <div className="text-center text-xs tracking-widest">ACME</div>
          <div className="text-center text-xs tracking-widest">NIMBUS</div>
          <div className="text-center text-xs tracking-widest">PIXELCO</div>
          <div className="text-center text-xs tracking-widest">STUDIO X</div>
        </div>
      </div>
    </section>
  );
}
