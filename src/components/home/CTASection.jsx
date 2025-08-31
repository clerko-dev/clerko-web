import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection(){
  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{opacity:0, scale:.98}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:.5, ease:"easeOut"}}
          viewport={{once:false, amount:.25}}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-purple-600/10 to-sky-600/10 p-8 sm:p-12"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_-20%,rgba(255,255,255,.06),transparent)]" />
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to close faster?</h3>
          <p className="text-zinc-300 mt-2 max-w-2xl">
            Create a client-ready proposal in under a minute. No credit card required.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/signup" className="px-4 py-2 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-sky-500 text-black font-medium">
              Try free
            </Link>
            <Link to="/pricing" className="px-4 py-2 rounded-lg border border-white/15 hover:bg-white/5 transition">
              View pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
