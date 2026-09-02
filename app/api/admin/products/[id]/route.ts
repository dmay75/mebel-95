import { NextResponse } from "next/server";
import { requireAdminApiUser } from "../../../../_lib/adminAuth";
import { supabaseServiceFetch } from "../../../../_lib/supabase";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  try {
    await requireAdminApiUser();
    const { id } = await context.params;
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") throw new Error("Некорректные данные товара.");

    const response = await supabaseServiceFetch(`/rest/v1/products?id=eq.${encodeURIComponent(id)}&select=*`, {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ ...(body as Record<string, unknown>), updated_at: new Date().toISOString() }),
    });

    if (!response.ok) throw new Error(await response.text());
    const updated = await response.json();
    return NextResponse.json({ product: updated[0] });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось обновить товар.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    await requireAdminApiUser();
    const { id } = await context.params;
    const response = await supabaseServiceFetch(`/rest/v1/products?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(await response.text());
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось удалить товар.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
