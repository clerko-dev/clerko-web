// src/lib/db.js
import { supabase } from "@/lib/supabase";

export function slugify(str) {
  const base = (str || "proposal").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const rnd = Math.random().toString(36).slice(2, 6);
  return `${base}-${rnd}`;
}

export async function createProposal({ title, client_name, client_email, currency, items }) {
  const slug = slugify(title);
  const total = (items || []).reduce((s, it) => {
    const line = (Number(it.qty)||0) * (Number(it.unit_price)||0);
    const afterDiscount = Math.max(0, line - (Number(it.discount)||0));
    const afterTax = afterDiscount * (1 + (Number(it.tax_rate)||0)/100);
    return s + afterTax;
  }, 0);

  const { data: user } = await supabase.auth.getUser();
  const created_by = user?.user?.id ?? null;

  const { data: p, error } = await supabase
    .from("proposals")
    .insert([{ title, client_name, client_email, currency, total, slug, created_by, status: "sent", is_public: true }])
    .select()
    .single();
  if (error) throw error;

  if (items?.length) {
    const rows = items.map(it => ({ ...it, proposal_id: p.id }));
    const { error: e2 } = await supabase.from("proposal_items").insert(rows);
    if (e2) throw e2;
  }
  return p;
}

export async function getProposalBySlug(slug) {
  const { data: p, error } = await supabase.from("proposals").select("*").eq("slug", slug).single();
  if (error) throw error;
  const { data: items } = await supabase.from("proposal_items").select("*").eq("proposal_id", p.id).order("created_at", { ascending: true });
  return { ...p, items: items || [] };
}

export async function getMyProposals() {
  const { data: p, error } = await supabase.from("proposals").select("id,title,slug,status,total,currency,created_at").order("created_at", { ascending: false });
  if (error) throw error;
  return p;
}

export async function addView(proposal_id, section, ms_spent) {
  await supabase.from("views").insert({
    proposal_id,
    section,
    ms_spent,
    user_agent: navigator.userAgent
  });
}

export async function markAccepted(proposal_id) {
  const { error } = await supabase.from("proposals").update({ status: "accepted", updated_at: new Date().toISOString() }).eq("id", proposal_id);
  if (error) throw error;
}

export async function saveSignature({ proposal_id, method, asset_path, signer_email }) {
  const { error } = await supabase.from("signatures").insert({
    proposal_id, method, asset_path, signer_email, user_agent: navigator.userAgent
  });
  if (error) throw error;
}
