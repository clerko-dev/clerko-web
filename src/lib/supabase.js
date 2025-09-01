// src/lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// jeden klient na całą przeglądarkę (działa też z Vite HMR)
const g = globalThis;
const GLOBAL_KEY = "__clerko_supabase";

export const supabase =
  g[GLOBAL_KEY] ||
  createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      // unikalny storageKey, żeby klienty z różnych projektów się nie „gryzły”
      storageKey: `sb-${new URL(SUPABASE_URL).host}-auth`,
    },
  });

if (!g[GLOBAL_KEY]) g[GLOBAL_KEY] = supabase;
