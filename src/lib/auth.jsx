// src/lib/auth.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase.js"; // ⬅️ używamy JEDNEGO klienta

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      setSession(data?.session ?? null);
      setUser(data?.session?.user ?? null);
      setLoading(false);
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession ?? null);
      setUser(newSession?.user ?? null);
    });

    return () => {
      sub?.subscription?.unsubscribe?.();
      mounted = false;
    };
  }, []);

  const value = useMemo(() => ({ user, session, loading, supabase }), [user, session, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>.");
  return ctx;
}

// Pomocnicze akcje (opcjonalnie – jeśli gdzieś ich używasz)
export async function signInWithEmail({ email, password }) {
  return await supabase.auth.signInWithPassword({ email, password });
}
export async function signUpWithEmail({ email, password }) {
  return await supabase.auth.signUp({ email, password });
}
export async function signOut() {
  return await supabase.auth.signOut();
}
