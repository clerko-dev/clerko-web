// src/lib/supabaseClient.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL || '';
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const hasSupabaseEnv: boolean = Boolean(url && anon);
export const supabase: SupabaseClient | null = hasSupabaseEnv ? createClient(url, anon) : null;
