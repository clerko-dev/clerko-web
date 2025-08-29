import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { signInWithEmail, signInWithApple } from "@/lib/auth.jsx";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      await signInWithEmail({ email, password });
      nav("/dashboard");
    } catch (err) {
      setError(err.message || "Login error");
    } finally {
      setLoading(false);
    }
  };

  const onApple = async () => {
    try {
      await signInWithApple();
    } catch (err) {
      setError(err.message || "Apple sign-in error");
    }
  };

  return (
    <>
      <SEO title="Log in" />
      <section className="container px-4 py-16">
        <div className="max-w-md mx-auto glass p-6 md:p-8" data-reveal>
          <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
          <p className="text-white/60 mb-6">Log in to continue.</p>

          {error && <div className="mb-4 text-sm text-red-400">{error}</div>}

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Email</label>
              <input className="input mt-1" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm">Password</label>
              <input className="input mt-1" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" />
            </div>

            <button className="btn-primary w-full" disabled={loading}>
              {loading ? "Signing in..." : "Log in"}
            </button>
          </form>

          <div className="my-4 text-center text-white/40 text-xs">or</div>

          <button onClick={onApple} className="btn-outline w-full">Continue with Apple</button>

          <p className="mt-6 text-sm text-white/60">
            New here?{" "}
            <Link to="/signup" className="text-white hover:underline">Create an account</Link>
          </p>
        </div>
      </section>
    </>
  );
}
