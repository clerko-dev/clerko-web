// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { signInWithEmail } from "@/lib/auth.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      await signInWithEmail(email.trim(), password);
      navigate("/dashboard");
    } catch (error) {
      setErr(error.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <SEO title="Log in" description="Sign in to your Clerko account." />
      <section className="min-h-[80vh] bg-[#0A0B14] py-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">Welcome back</h1>
            <p className="text-white/60 mb-8">Log in with your email and password.</p>

            {err ? (
              <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 px-3 py-2 text-sm">
                {err}
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Password</label>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 text-white font-medium py-2.5 shadow-lg hover:opacity-95 active:scale-[.99] transition disabled:opacity-60"
              >
                {busy ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <div className="mt-6 text-center text-white/60 text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-white hover:underline">
                Create one
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
