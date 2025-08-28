// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import Button from "@/components/ui/Button.jsx";
import { supabase } from "@/lib/supabase";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/dashboard` },
    });
    setLoading(false);
    if (error) return setMsg(error.message);
    // jeśli wymagane potwierdzenie maila – pokaż komunikat
    setMsg("Sprawdź skrzynkę i potwierdź adres e-mail. Po potwierdzeniu zaloguj się.");
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
      <SEO title="Create account — Clerko" description="Sign up to save proposals and unlock PRO features." />
      <section className="container max-w-md mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-6">Create account</h1>

        <form onSubmit={handleSignup} className="glass p-6 rounded-2xl space-y-4">
          <label className="block">
            <span className="text-sm text-slate-300">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white outline-none focus:ring-2 ring-indigo-500"
              placeholder="you@company.com"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-300">Password</span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white outline-none focus:ring-2 ring-indigo-500"
              placeholder="••••••••"
            />
          </label>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Creating..." : "Create account"}
          </Button>

          <div className="text-center text-slate-400">or</div>

          <Button type="button" variant="secondary" onClick={handleGoogle} className="w-full">
            Continue with Google
          </Button>

          {msg && <p className="text-sm text-amber-300">{msg}</p>}

          <p className="text-sm text-slate-400 pt-2">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-300 hover:text-indigo-200 underline">
              Log in
            </a>
          </p>
        </form>
      </section>
    </>
  );
}
