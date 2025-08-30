import React from "react";
import { Link } from "react-router-dom";
import ProposalPreview from "./ProposalPreview";
import ProposalPreview from "@/components/preview/ProposalPreview.jsx";

export default function HeroSection() {
  const [expanded, setExpanded] = React.useState(false);
  const cardRef = React.useRef(null);

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0B14]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: copy */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Close deals faster with{" "}
              <span className="font-extrabold tracking-tight bg-gradient-to-r from-[#A486FF] via-[#8B5CF6] to-[#6AE3FE] bg-clip-text text-transparent">
                Clerko
              </span>
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              Create beautiful, itemized quotes and proposals in minutes. Share as a link or PDF,
              get approvals, and move from draft to paid—without the busywork.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#generator" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur">
                Try free
              </a>
              <Link to="/store" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white/90 bg-transparent hover:bg-white/10 border border-white/15">
                View pricing
              </Link>
              <span className="text-xs text-white/50 ml-2">No credit card required.</span>
            </div>
          </div>

          {/* RIGHT: collapsible preview */}
          <div ref={cardRef} className="relative">
            <div
              className={[
                "relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden",
                "transition-[max-height] duration-500 ease-in-out",
                expanded ? "max-h-[1400px]" : "max-h-[380px] md:max-h-[440px] lg:max-h-[520px]"
              ].join(" ")}
            >
              <ProposalPreview />

              {/* Gradient mask when collapsed */}
              {!expanded && (
                <>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0A0B14]" />
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => {
                      setExpanded(true);
                      // scroll, żeby user zobaczył rozwiniętą kartę
                      setTimeout(() => cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 10);
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 border border-white/20 backdrop-blur"
                  >
                    Expand preview
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Collapse when expanded */}
            {expanded && (
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="absolute -top-3 -right-3 md:top-2 md:right-2 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 border border-white/20 backdrop-blur"
                aria-label="Collapse preview"
              >
                Collapse
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
