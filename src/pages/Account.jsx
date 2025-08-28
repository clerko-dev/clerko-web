// src/pages/Account.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import SEO from "@/components/SEO.jsx";
import { useAuth } from "@/context/AuthProvider.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Account() {
  const { user, signInWithEmail, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Obsługa kodu w URL (OAuth/magic link PKCE)
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    if (code) {
      supabase.auth.exchangeCodeForSession(code).finally(() => {
        // czyścimy param i pokazujemy stan konta
        url.searchParams.delete("code");
        window.history.replaceState({}, "", url.toString());
      });
    }
  }, []);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setInfo("");
    setError("");
    const { error } = await signInWithEmail(email);
    if (error) setError(error.message);
    else setInfo("Wysłaliśmy link logowania na e-mail. Sprawdź skrzynkę.");
  };

  if (user) {
    return (
      <>
        <SEO title="Account - Clerko" />
        <div className="container max-w-2xl mx-auto py-14 px-6">
          <h1 className="text-3xl font-bold mb-2">Konto</h1>
          <p className="text-white/70 mb-6">Zalogowano jako: {user.email}</p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/store")}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15"
            >
              Przejdź do sklepu (Pro)
            </button>
            <button
              onClick={signOut}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15"
            >
              Wyloguj
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Sign in - Clerko" />
      <div className="container max-w-md mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-4">Zaloguj się</h1>
        <p className="text-white/70 mb-6">
          Podaj e-mail, a wyślemy Ci bezpieczny link logowania (magic link).
        </p>
        <form onSubmit={handleEmailLogin} className="grid gap-3">
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-black font-medium hover:opacity-90"
          >
            Wyślij link logowania
          </button>
        </form>

        {info && <p className="text-emerald-400 mt-4">{info}</p>}
        {error && <p className="text-red-400 mt-4">{error}</p>}

        <p className="text-white/60 text-sm mt-6">
          Wróć na <Link to="/" className="underline">stronę główną</Link>.
        </p>
      </div>
    </>
  );
}
