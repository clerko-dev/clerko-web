// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { useAuth } from "@/lib/auth.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { signInWithEmail, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmail(email.trim(), password);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setErr(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <SEO title="Log in" />
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
          <h1 className="text-2xl font-semibold text-white mb-2">Log in</h1>
          <p className="text-sm text-white/60 mb-6">
            Welcome back. Enter your credentials to continue.
          </p>

          {err && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-red-300 text-sm">
              {err}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input
                type="email"
                autoComplete="email"
                className="w-full rounded-xl bg-zinc-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                id="email"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                className="w-full rounded-xl bg-zinc-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                id="password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 transition px-4 py-2 font-medium text-white"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-4 text-sm text-white/60">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-violet-300 hover:text-violet-200">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
