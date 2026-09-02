import { NextResponse } from "next/server";
import { requireAdminApiUser } from "../../../_lib/adminAuth";
import { normalizeSiteSettings, supabaseServiceFetch } from "../../../_lib/supabase";

export async function GET() {
  try {
    await requireAdminApiUser();
    const response = await supabaseServiceFetch("/rest/v1/site_settings?key=eq.store&select=value&limit=1");
    if (!response.ok) throw new Error("Не удалось загрузить настройки.");
    const rows = await response.json() as Array<{ value?: Record<string, string> }>;
    return NextResponse.json({ settings: normalizeSiteSettings(rows[0]?.value) });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Ошибка настроек.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdminApiUser();
    const body = await request.json().catch(() => null) as Record<string, string> | null;
    const settings = normalizeSiteSettings(body);
    const response = await supabaseServiceFetch("/rest/v1/site_settings?on_conflict=key", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify({ key: "store", value: settings, updated_at: new Date().toISOString() }),
    });

    if (!response.ok) throw new Error(await response.text());
    return NextResponse.json({ settings });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось сохранить настройки.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
