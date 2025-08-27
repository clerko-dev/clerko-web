import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { track } from "@/lib/analytics";

export default function HeroSection() {
  const onTry = () => track("click_try_free", { location: "hero" });

  return (
    <section className="relative overflow-hidden bg-[#0A0B14]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-20 -top-40 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.35),transparent_50%),radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_55%)] blur-2xl" />
      </div>

      <div className="container-x pb-16 pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5" />
            Proposals & quotes in minutes — not hours
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Generate <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">client-ready proposals</span> instantly
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Draft, preview and ship offers fast. Templates, clean pricing, and a shareable preview.
            No fluff — just deals closed faster.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#generator"
              onClick={onTry}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              Try free now
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15"
            >
              Explore tools
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
