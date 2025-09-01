import { supabase } from "@/lib/supabase";

export async function createProposal(initial = {}) {
  const payload = {
    title: initial.title || "Untitled Proposal",
    client_name: initial.client_name || "",
    client_email: initial.client_email || "",
    currency: initial.currency || "USD",
    tax_rate: Number(initial.tax_rate ?? 0),
    discount: Number(initial.discount ?? 0),
    notes: initial.notes || "",
  };
  const { data, error } = await supabase.from("proposals").insert(payload).select().single();
  if (error) throw error;
  return data;
}

export async function addItem(proposal_id, item) {
  const row = {
    proposal_id,
    description: item.description || "",
    qty: Number(item.qty ?? 1),
    unit_price: Number(item.unit_price ?? 0),
    line_total: Number(item.qty ?? 1) * Number(item.unit_price ?? 0),
  };
  const { data, error } = await supabase.from("proposal_items").insert(row).select().single();
  if (error) throw error;
  return data;
}

export async function listItems(proposal_id) {
  const { data, error } = await supabase
    .from("proposal_items")
    .select("*")
    .eq("proposal_id", proposal_id)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function getProposalBySlug(slug) {
  const { data, error } = await supabase
    .from("proposals")
    .select("*, proposal_items(*)")
    .eq("public_slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function updateProposal(id, patch) {
  const fields = { ...patch };
  if (typeof fields.tax_rate !== "undefined") fields.tax_rate = Number(fields.tax_rate);
  if (typeof fields.discount !== "undefined") fields.discount = Number(fields.discount);

  const { data, error } = await supabase
    .from("proposals")
    .update(fields)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function togglePublic(id, is_public) {
  const { data, error } = await supabase
    .from("proposals")
    .update({ is_public })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}
