import React from "react";
import { motion } from "framer-motion";

const fadeUp = (d=0)=>({
  initial:{opacity:0,y:18}, whileInView:{opacity:1,y:0},
  transition:{duration:.55,ease:"easeOut",delay:d}, viewport:{once:false,amount:.2}
});

const brands = ["NovaLabs","BrightCorp","Pixel&Co","NorthPeak","OmegaSoft","Greenline","Artemis","Loopwork"];

function LogoPill({name}:{name:string}) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 whitespace-nowrap">
      {name}
    </div>
  );
}

export default function TrustedSection(){
  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">
          Trusted by thousands
        </motion.h2>

        {/* marquee */}
        <div className="marquee mb-3">
          <div className="marquee__track">
            {brands.concat(brands).map((b,i)=><LogoPill key={`m1-${i}`} name={b} />)}
          </div>
        </div>
        <div className="marquee marquee--reverse">
          <div className="marquee__track">
            {brands.concat(brands).map((b,i)=><LogoPill key={`m2-${i}`} name={b} />)}
          </div>
        </div>

        {/* testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
          {[
            {i:"AL",n:"Amelia Lopez",r:"Agency Owner",q:"Clerko cut our proposal time from hours to minutes. Clients love the clarity."},
            {i:"DK",n:"Daniel Kim",r:"Freelance Dev",q:"The pricing table and PDF export are flawless. I win more small gigs now."},
            {i:"SM",n:"Sara Malik",r:"Consultant",q:"Snippets + AI polish = consistent quality without the grind. Worth it."},
          ].map((t,idx)=>(
            <motion.figure key={t.n} {...fadeUp(0.05+idx*0.05)}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-xs">
                  {t.i}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.n}</div>
                  <div className="text-xs text-zinc-400">{t.r}</div>
                </div>
              </div>
              <blockquote className="text-sm text-zinc-300 leading-relaxed">“{t.q}”</blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
