import React from "react";
import { Link } from "react-router-dom";
import ProposalPreview from "@/components/preview/ProposalPreview.jsx";

export default function HeroSection() {
  const [expanded, setExpanded] = React.useState(false);
  const collapsedHeight = 360; // px – wysokość podglądu w wersji "zwiniętej"

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[100dvh] flex items-center bg-gradient-to-b from-[#0A0B14] via-[#0A0B14] to-[#0a0b14]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-20">
        {/* Lewa kolumna: tekst + CTA */}
        <div className="lg:col-span-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-white">
            Close deals faster with{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] drop-shadow-[0_0_18px_rgba(124,58,237,0.35)]">
              Clerko
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/70">
            Create beautiful, itemized quotes and proposals in minutes. Share as a
            link or PDF, get approvals, and move from draft to paid—without the
            busywork.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#generator"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-white hover:bg-white/20 backdrop-blur transition"
            >
              Try free
            </a>

            <Link
              to="/store"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#0A0B14] px-5 py-2.5 hover:bg-white/90 transition"
            >
              View pricing
            </Link>

            <span className="block w-full sm:w-auto text-xs text-white/50 mt-2 sm:mt-0">
              No credit card required.
            </span>
          </div>
        </div>

        {/* Prawa kolumna: podgląd propozycji (collapsible) */}
        <div className="lg:col-span-6">
          <div className="relative">
            {/* Rama / szkło */}
            <div
              className={[
                "relative rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur",
                "shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              ].join(" ")}
              style={{
                overflow: "hidden",
                maxHeight: expanded ? "none" : `${collapsedHeight}px`,
                transition: "max-height 300ms ease"
              }}
            >
              <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]" />
              <div className="relative">
                <ProposalPreview />
              </div>

              {/* Maska przy krawędzi, widoczna TYLKO gdy zwinięte */}
              {!expanded && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0B14] to-transparent" />
              )}

              {/* Przycisk EXPAND / COLLAPSE na dole podglądu */}
              {!expanded ? (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-white text-[#0A0B14] text-sm px-4 py-2 hover:bg-white/90 transition border border-white/20"
                  aria-label="Expand preview"
                >
                  Expand preview
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-white text-[#0A0B14] text-sm px-4 py-2 hover:bg-white/90 transition border border-white/20"
                  aria-label="Collapse preview"
                >
                  Collapse
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                    <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Podpowiedź UX pod kartą */}
          {!expanded && (
            <p className="mt-3 text-center text-xs text-white/50">
              Tip: expand to see the full proposal preview
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
