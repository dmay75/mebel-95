export type AdminProductRecord = {
  id: string;
  slug: string;
  name: string;
  category: string;
  category_slug: string;
  subcategory: string | null;
  price: string;
  image: string;
  images: string[];
  description: string;
  characteristics: Array<[string, string]>;
  variants: unknown[];
  colors: string[];
  color_options: unknown[];
  add_ons: unknown[];
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type AdminProductInput = Omit<AdminProductRecord, "id" | "created_at" | "updated_at">;

export function getSupabasePublicConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Supabase public config is missing.");
  }

  return { url, anonKey };
}

export function getSupabaseServiceConfig() {
  const publicConfig = getSupabasePublicConfig();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceKey) {
    throw new Error("Supabase service key is missing.");
  }

  return { ...publicConfig, serviceKey };
}

export async function supabaseServiceFetch(path: string, init: RequestInit = {}) {
  const { url, serviceKey } = getSupabaseServiceConfig();
  const headers = new Headers(init.headers);

  headers.set("apikey", serviceKey);
  headers.set("Authorization", `Bearer ${serviceKey}`);
  headers.set("Content-Type", headers.get("Content-Type") ?? "application/json");

  return fetch(`${url}${path}`, {
    ...init,
    headers,
    cache: "no-store",
  });
}
