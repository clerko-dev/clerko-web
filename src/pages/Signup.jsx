// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { signUpWithEmail } from "@/lib/auth.jsx";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [info, setInfo] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setInfo("");
    if (password.length < 8) {
      setErr("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setErr("Passwords do not match.");
      return;
    }
    if (!/^[a-z0-9_\.]{3,20}$/i.test(username)) {
      setErr("Username 3–20 chars (letters/numbers/._).");
      return;
    }

    setBusy(true);
    try {
      const { user } = await signUpWithEmail({
        email: email.trim(),
        password,
        username: username.trim(),
      });

      // Jeśli włączone email confirmations – pokaż info
      if (!user) {
        setInfo("Check your inbox to confirm your email. Then log in.");
      } else {
        // Jeśli user od razu zalogowany
        navigate("/dashboard");
      }
    } catch (error) {
      setErr(error.message ?? "Signup failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <SEO title="Create account" description="Create your Clerko account." />
      <section className="min-h-[80vh] bg-[#0A0B14] py-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">Create account</h1>
            <p className="text-white/60 mb-8">Start generating proposals and quotes.</p>

            {err ? (
              <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 px-3 py-2 text-sm">
                {err}
              </div>
            ) : null}
            {info ? (
              <div className="mb-4 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-200 px-3 py-2 text-sm">
                {info}
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
                <label className="block text-sm text-white/70 mb-1">Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition"
                  placeholder="yourname"
                />
                <p className="mt-1 text-xs text-white/40">3–20 znaków: litery, cyfry, kropka, podkreślnik.</p>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Password</label>
                <input
                  type="password"
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Confirm password</label>
                <input
                  type="password"
                  required
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 text-white font-medium py-2.5 shadow-lg hover:opacity-95 active:scale-[.99] transition disabled:opacity-60"
              >
                {busy ? "Creating…" : "Create account"}
              </button>
            </form>

            <div className="mt-6 text-center text-white/60 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-white hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
