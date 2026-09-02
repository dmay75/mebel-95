import { NextResponse } from "next/server";
import { requireAdminApiUser } from "../../../_lib/adminAuth";
import { AdminProductInput, AdminProductRecord, supabaseServiceFetch, supabaseServiceFetchAll } from "../../../_lib/supabase";

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function textArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function pairArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is [string, string] => (
    Array.isArray(item) &&
    item.length === 2 &&
    typeof item[0] === "string" &&
    typeof item[1] === "string"
  ));
}

function jsonArray(value: unknown) {
  return Array.isArray(value) ? value : [];
}

function productInput(body: Record<string, unknown>): AdminProductInput {
  const slug = text(body.slug);
  const name = text(body.name);
  const image = text(body.image);
  const images = textArray(body.images);

  if (!slug || !name) {
    throw new Error("У товара должны быть slug и название.");
  }

  return {
    slug,
    name,
    category: text(body.category),
    category_slug: text(body.category_slug),
    subcategory: text(body.subcategory) || null,
    price: text(body.price),
    image: image || images[0] || "",
    images: images.length > 0 ? images : image ? [image] : [],
    description: text(body.description),
    characteristics: pairArray(body.characteristics),
    variants: jsonArray(body.variants),
    colors: textArray(body.colors),
    color_options: jsonArray(body.color_options),
    add_ons: jsonArray(body.add_ons),
    is_active: typeof body.is_active === "boolean" ? body.is_active : true,
    sort_order: Number.isFinite(Number(body.sort_order)) ? Number(body.sort_order) : 0,
  };
}

export async function GET() {
  try {
    await requireAdminApiUser();
    const products = await supabaseServiceFetchAll<AdminProductRecord>("/rest/v1/products?select=*&order=updated_at.desc");
    return NextResponse.json({ products });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Ошибка админ-панели.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await requireAdminApiUser();
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") throw new Error("Некорректные данные товара.");

    const product = productInput(body as Record<string, unknown>);
    const response = await supabaseServiceFetch("/rest/v1/products?select=*", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(product),
    });

    if (!response.ok) throw new Error(await response.text());
    const created = await response.json();
    return NextResponse.json({ product: created[0] });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось сохранить товар.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
