import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.info("Supabase config", {
  hasUrl: Boolean(import.meta.env.VITE_SUPABASE_URL),
  hasKey: Boolean(import.meta.env.VITE_SUPABASE_ANON_KEY),
});

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

if (!hasSupabaseConfig) {
  console.info("Supabase public proposals dashboard is under configuration: missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.");
}

let supabaseClient = null;

if (hasSupabaseConfig) {
  try {
    // Supabase JS automatically sends the configured anon key as both the apikey header and Authorization Bearer token.
    supabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);
  } catch (error) {
    console.info("Supabase public proposals client could not be initialized.", {
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

export const supabase = supabaseClient;
