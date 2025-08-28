// src/context/AuthProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pobierz sesję na starcie
  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (mounted) {
        setSession(data.session ?? null);
        setLoading(false);
      }
    })();

    // Słuchaj zmian (login/logout, refresh itp.)
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess ?? null);
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const user = session?.user ?? null;

  const signInWithEmail = async (email) => {
    return supabase.auth.signInWithOtp({
      email,
      options: {
        // po kliknięciu w link wróci na /account i dokończy sesję
        emailRedirectTo: `${window.location.origin}/account`,
      },
    });
  };

  const signOut = async () => supabase.auth.signOut();

  const value = { user, session, loading, signInWithEmail, signOut };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  return useContext(AuthCtx);
}
