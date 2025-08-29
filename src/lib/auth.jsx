// src/lib/auth.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ENV: ustawione w .env i w Vercel → VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// klient Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// kontekst auth
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // pierwszy odczyt sesji + nasłuch zmian
  useEffect(() => {
    let mounted = true;

    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!mounted) return;
      setSession(session ?? null);
      setUser(session?.user ?? null);
      setLoading(false);
    })();

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session ?? null);
      setUser(session?.user ?? null);
    });

    return () => {
      mounted = false;
      subscription.subscription?.unsubscribe?.();
    };
  }, []);

  const value = useMemo(() => ({ user, session, loading }), [user, session, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}

// Helpery API
export async function signInWithEmail(email, password) {
  // logowanie istniejącego usera
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function signUpWithEmail({ email, password, username }) {
  // rejestracja + zapis username w user_metadata
  return await supabase.auth.signUp({
    email,
    password,
    options: { data: { username } },
  });
}

export async function signOutUser() {
  return await supabase.auth.signOut();
}
