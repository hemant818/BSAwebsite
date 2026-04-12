import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

console.log("[SUPABASE INIT]", { 
  url: supabaseUrl ? "Present" : "Missing", 
  key: supabaseAnonKey ? "Present" : "Missing" 
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("[SUPABASE ERROR] Missing environment variables!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
