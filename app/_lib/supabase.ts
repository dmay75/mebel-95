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

export type PublicProduct = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  price: string;
  image: string;
  images: string[];
  description: string;
  characteristics: Array<[string, string]>;
  variants?: unknown[];
  colors?: string[];
  colorOptions?: unknown[];
  addOns?: unknown[];
};

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

export function adminRecordToPublicProduct(product: AdminProductRecord): PublicProduct {
  return {
    slug: product.slug,
    name: product.name,
    category: product.category,
    categorySlug: product.category_slug,
    subcategory: product.subcategory ?? undefined,
    price: product.price,
    image: product.image,
    images: product.images,
    description: product.description,
    characteristics: product.characteristics,
    variants: product.variants,
    colors: product.colors,
    colorOptions: product.color_options,
    addOns: product.add_ons,
  };
}

export async function getSupabaseProducts() {
  const { url, anonKey } = getSupabasePublicConfig();
  const response = await fetch(`${url}/rest/v1/products?select=*&is_active=eq.true&order=sort_order.asc`, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить товары из Supabase.");
  }

  const rows = await response.json() as AdminProductRecord[];
  return rows.map(adminRecordToPublicProduct);
}
