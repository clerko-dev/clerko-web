// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL ?? '';
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const hasSupabaseEnv = Boolean(url && anon);

/** Gdy brak ENV — zwracamy null zamiast crasha */
export const supabase = hasSupabaseEnv ? createClient(url, anon) : null;
