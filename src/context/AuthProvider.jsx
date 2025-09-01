// src/context/AuthProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase.js";
export { AuthProvider, useAuth } from '../../lib/auth';
const AuthContext = createContext(null);

// Zwróć ZAWSZE bezpieczny obiekt – nawet bez providera/kluczy
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (ctx) return ctx;
  return {
    ready: true,
    user: null,
    session: null,
    signInWithEmail: async () => ({ data: null, error: null }),
    signOut: async () => ({ error: null }),
  };
}

export default function AuthProvider({ children }) {
  // Jeśli supabase brak (env nie ustawione) – działamy w „anon” trybie
  const [ready, setReady] = useState(supabase === null ? true : false);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!supabase) return; // brak env – nic nie rejestrujemy
    let isMounted = true;

    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) return;
      setSession(data?.session ?? null);
      setUser(data?.session?.user ?? null);
      setReady(true);
    })();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
    });

    return () => {
      isMounted = false;
      subscription?.unsubscribe?.();
    };
  }, []);

  const signInWithEmail = async ({ email, password }) => {
    if (!supabase) return { data: null, error: null };
    return supabase.auth.signInWithPassword({ email, password });
  };

  const signOut = async () => {
    if (!supabase) return { error: null };
    return supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ ready, session, user, signInWithEmail, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
