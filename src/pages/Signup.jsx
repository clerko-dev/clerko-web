import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { signUpWithEmail, signInWithApple } from "@/lib/auth.jsx";

export default function Signup() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!/^[a-z0-9_]{3,20}$/i.test(username)) {
      setError("Username: 3–20 znaków, litery/cyfry/underscore.");
      return;
    }
    try {
      setLoading(true);
      await signUpWithEmail({ email, password, username });
      nav("/dashboard");
    } catch (err) {
      setError(err.message || "Signup error");
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
      <SEO title="Sign up" />
      <section className="container px-4 py-16">
        <div className="max-w-md mx-auto glass p-6 md:p-8" data-reveal>
          <h1 className="text-2xl font-semibold mb-1">Create your account</h1>
          <p className="text-white/60 mb-6">Start generating proposals in minutes.</p>

          {error && <div className="mb-4 text-sm text-red-400">{error}</div>}

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Username</label>
              <input className="input mt-1" value={username} onChange={e=>setUsername(e.target.value)} placeholder="e.g., acme_owner" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input className="input mt-1" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm">Password</label>
              <input className="input mt-1" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" />
            </div>

            <button className="btn-primary w-full" disabled={loading}>
              {loading ? "Creating..." : "Create account"}
            </button>
          </form>

          <div className="my-4 text-center text-white/40 text-xs">or</div>

          <button onClick={onApple} className="btn-outline w-full">Continue with Apple</button>

          <p className="mt-6 text-sm text-white/60">
            Already have an account?{" "}
            <Link to="/login" className="text-white hover:underline">Log in</Link>
          </p>
        </div>
      </section>
    </>
  );
}
