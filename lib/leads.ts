import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { LeadPayload } from "@/types";

/**
 * Persists a lead to Supabase (`leads` table). Falls back to a no-op success
 * when Supabase is not configured so the UX never breaks in development.
 *
 * Expected Supabase table:
 *   create table leads (
 *     id uuid primary key default gen_random_uuid(),
 *     created_at timestamptz default now(),
 *     name text, phone text, email text, vehicle_model text,
 *     paint_score int, gloss_score int, protection_rating int,
 *     recommended_service text, source text
 *   );
 */
export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[lead captured — Supabase not configured]", payload);
    }
    return { ok: true };
  }

  const { error } = await supabase.from("leads").insert({
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    vehicle_model: payload.vehicleModel,
    paint_score: payload.paintScore ?? null,
    gloss_score: payload.glossScore ?? null,
    protection_rating: payload.protectionRating ?? null,
    recommended_service: payload.recommendedService ?? null,
    source: payload.source,
  });

  if (error) {
    console.error("[submitLead]", error.message);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
