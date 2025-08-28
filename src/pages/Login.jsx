import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import Button from "@/components/ui/Button.jsx";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const n = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setMsg(error.message);
    n("/dashboard");
  }

  async function handleGoogle() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
    setLoading(false);
    if (error) setMsg(error.message);
  }

  return (
    <>
      <SEO title="Log in — Clerko" description="Access your proposals and PRO features." />
      <section className="container max-w-md mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-white mb-6">Log in</h1>

        <form onSubmit={handleLogin} className="glass p-6 rounded-2xl space-y-4">
          <input
            type="email"
            className="input"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Log in"}
          </Button>

          <div className="text-center text-slate-400">or</div>

          <Button type="button" variant="secondary" onClick={handleGoogle} className="w-full">
            Continue with Google
          </Button>

          {msg && <p className="text-sm text-amber-300">{msg}</p>}

          <p className="text-sm text-slate-400 pt-2">
            No account?{" "}
            <Link to="/signup" className="text-indigo-300 hover:text-indigo-200 underline">
              Create one
            </Link>
          </p>
        </form>
      </section>
    </>
  );
}
