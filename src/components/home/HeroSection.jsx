export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      data-reveal
      aria-label="Hero section"
    >
      {/* soft glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-44 -left-48 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-48 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-emerald-400/20 to-indigo-500/20 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-24">
        {/* LEFT: copy + CTAs */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Proposals & quotes in minutes — not hours
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="block">Close deals faster</span>
            <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              with{' '}
              <span className="font-brand font-extrabold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] bg-clip-text">
                Clerko
              </span>
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
          <div className="mt-2 flex items-center gap-4">
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
          <ul className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-white/60">
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">GDPR-ready</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">Templates</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">E-sign</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">Client portal</li>
          </ul>
        </div>

        {/* RIGHT: mock of final proposal */}
        <div className="relative">
          <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 backdrop-blur">
            {/* window bar */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
              <div className="ml-auto rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                Proposal.pdf
              </div>
            </div>

            {/* document preview */}
            <div className="grid gap-3">
              {/* header */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-4 w-40 rounded bg-white/15" />
                    <div className="h-3 w-28 rounded bg-white/10" />
                  </div>
                  <div className="text-right">
                    <div className="mb-2 h-4 w-28 rounded bg-white/15" />
                    <div className="h-7 w-28 rounded-lg bg-emerald-400/80" />
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-4">
                <div className="mb-2 h-3 w-5/6 rounded bg-white/10" />
                <div className="mb-2 h-3 w-2/3 rounded bg-white/10" />
                <div className="mb-2 h-3 w-3/4 rounded bg-white/10" />
                <div className="mb-2 h-3 w-4/5 rounded bg-white/10" />
                <div className="mb-4 h-3 w-2/3 rounded bg-white/10" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-20 rounded-lg border border-white/10 bg-white/5" />
                  <div className="h-20 rounded-lg border border-white/10 bg-white/5" />
                  <div className="h-20 rounded-lg border border-white/10 bg-white/5" />
                </div>
              </div>

              {/* signatures */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 h-3 w-24 rounded bg-white/10" />
                <div className="flex items-center justify-between">
                  <div className="h-10 w-40 rounded-lg bg-white/10" />
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("generator")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow/50 shadow-black/20 transition hover:shadow-lg hover:opacity-95"
                  >
                    Accept & Sign
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* soft shadow */}
          <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-[28px] bg-gradient-to-t from-black/10 to-transparent blur-2xl" />
        </div>
      </div>

      {/* scroll indicator */}
      <button
        type="button"
        onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur transition hover:bg-white/10"
        aria-label="Scroll to generator"
      >
        Scroll ↓
      </button>
    </section>
  );
}
