import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    const { error } = await supabase.from("leads").insert({ email, source: "how-to" });
    if (error) setStatus("error");
    else { setStatus("done"); setEmail(""); }
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-5 flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder="Get new guides via email"
        className="flex-1 rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
        required
      />
      <button
        disabled={status==="loading"}
        className="rounded-lg bg-white text-zinc-900 px-5 py-3 font-medium disabled:opacity-60"
      >
        {status==="loading" ? "Adding…" : "Subscribe"}
      </button>
      {status==="done" && <span className="text-white/70 text-sm">Thanks — you’re in!</span>}
      {status==="error" && <span className="text-red-400 text-sm">Something went wrong.</span>}
    </form>
  );
}
