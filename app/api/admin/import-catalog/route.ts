import { NextResponse } from "next/server";
import { products } from "../../../_lib/catalog";
import { requireAdminApiUser } from "../../../_lib/adminAuth";
import { AdminProductInput, supabaseServiceFetch } from "../../../_lib/supabase";

const CHUNK_SIZE = 75;

function productToAdminInput(product: typeof products[number], index: number): AdminProductInput {
  return {
    slug: product.slug,
    name: product.name,
    category: product.category,
    category_slug: product.categorySlug,
    subcategory: product.subcategory ?? null,
    price: product.price,
    image: product.image || product.images[0] || "",
    images: product.images.length > 0 ? product.images : product.image ? [product.image] : [],
    description: product.description,
    characteristics: product.characteristics,
    variants: product.variants ?? [],
    colors: product.colors ?? [],
    color_options: product.colorOptions ?? [],
    add_ons: product.addOns ?? [],
    is_active: true,
    sort_order: index,
  };
}

function chunks<T>(items: T[], size: number) {
  const result: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

export async function POST() {
  try {
    await requireAdminApiUser();

    const rows = products.map(productToAdminInput);
    let imported = 0;

    for (const chunk of chunks(rows, CHUNK_SIZE)) {
      const response = await supabaseServiceFetch("/rest/v1/products?on_conflict=slug", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates" },
        body: JSON.stringify(chunk),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      imported += chunk.length;
    }

    return NextResponse.json({
      ok: true,
      imported,
      total: rows.length,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось импортировать каталог.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
