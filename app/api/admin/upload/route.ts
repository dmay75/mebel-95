import { NextResponse } from "next/server";
import { requireAdminApiUser } from "../../../_lib/adminAuth";
import { getSupabaseServiceConfig } from "../../../_lib/supabase";

const BUCKET = "product-images";

function safeFileName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9а-яё._-]+/gi, "-").replace(/-+/g, "-");
}

async function ensureBucket(url: string, serviceKey: string) {
  await fetch(`${url}/storage/v1/bucket`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: BUCKET, name: BUCKET, public: true }),
  }).catch(() => null);
}

export async function POST(request: Request) {
  try {
    await requireAdminApiUser();
    const { url, serviceKey } = getSupabaseServiceConfig();
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Файл не найден." }, { status: 400 });
    }

    await ensureBucket(url, serviceKey);

    const extension = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
    const path = `uploads/${Date.now()}-${safeFileName(file.name || `image.${extension}`)}`;
    const upload = await fetch(`${url}/storage/v1/object/${BUCKET}/${path}`, {
      method: "POST",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": file.type || "application/octet-stream",
        "x-upsert": "true",
      },
      body: await file.arrayBuffer(),
    });

    if (!upload.ok) throw new Error(await upload.text());

    return NextResponse.json({
      url: `${url}/storage/v1/object/public/${BUCKET}/${path}`,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось загрузить фото.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
