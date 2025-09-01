// src/context/AuthProvider.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase.js";
import AuthProvider from "@/context/AuthProvider.jsx";
/**
 * Minimalny kontekst uwierzytelniania dla całej aplikacji.
 * Działa nawet, gdy brak ENV – wtedy tryb "anonimowy".
 */

const AuthContext = createContext({
  user: null,
  session: null,
  loading: true,
  signInWithEmail: async () => ({ error: null }),
  signOut: async () => ({ error: null }),
});

export function useAuth() {
  return useContext(AuthContext);
}

function isSupabaseReady() {
  // jeżeli ktoś nie ustawił ENV, nie wywalaj appki
  return Boolean(
    import.meta?.env?.VITE_SUPABASE_URL &&
    import.meta?.env?.VITE_SUPABASE_ANON_KEY &&
    supabase
  );
}

function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(isSupabaseReady());

  useEffect(() => {
    if (!isSupabaseReady()) {
      // brak konfiguracji – zostawiamy jako anonimowy
      setLoading(false);
      return;
    }

    let mounted = true;

    (async () => {
      const { data, error } = await supabase.auth.getSession();
      if (mounted) {
        if (!error) {
          setSession(data.session ?? null);
          setUser(data.session?.user ?? null);
        }
        setLoading(false);
      }
    })();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession ?? null);
      setUser(newSession?.user ?? null);
    });

    return () => {
      mounted = false;
      subscription?.unsubscribe?.();
    };
  }, []);

  const signInWithEmail = async ({ email }) => {
    if (!isSupabaseReady()) return { error: null };
    // magic link
    const { error } = await supabase.auth.signInWithOtp({ email });
    return { error };
  };

  const signOut = async () => {
    if (!isSupabaseReady()) return { error: null };
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const value = useMemo(
    () => ({ user, session, loading, signInWithEmail, signOut }),
    [user, session, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
export { default } from "@/lib/auth.jsx";
export * from "@/lib/auth.jsx";