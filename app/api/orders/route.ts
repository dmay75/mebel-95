import { createSign } from "crypto";
import { NextResponse } from "next/server";
import { products } from "../../_lib/catalog";

export const runtime = "nodejs";

type OrderLine = {
  slug: string;
  quantity: number;
};

type OrderBody = {
  name?: string;
  phone?: string;
  address?: string;
  comment?: string;
  items?: OrderLine[];
};

function moneyValue(price: string) {
  const match = price.replace(/\s/g, "").replace(",", ".").match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function formatMoney(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

function base64Url(value: string) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function normalizePrivateKey(value: string) {
  return value.replace(/\\n/g, "\n");
}

function absoluteUrl(origin: string, path: string) {
  return new URL(path, origin).toString();
}

function imageFormula(imageUrl: string) {
  const safeUrl = imageUrl.replace(/"/g, "\"\"");
  return `=IMAGE("${safeUrl}")`;
}

function createJwt(email: string, privateKey: string) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(JSON.stringify({
    iss: email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  }));
  const unsignedToken = `${header}.${payload}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const signature = signer
    .sign(normalizePrivateKey(privateKey), "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${unsignedToken}.${signature}`;
}

async function getAccessToken(email: string, privateKey: string) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: createJwt(email, privateKey),
    }),
  });

  if (!response.ok) {
    throw new Error("Не удалось получить доступ к Google Sheets.");
  }

  const data = await response.json() as { access_token?: string };
  if (!data.access_token) throw new Error("Google не вернул access token.");
  return data.access_token;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as OrderBody | null;
  const name = body?.name?.trim() ?? "";
  const phone = body?.phone?.replace(/\D/g, "") ?? "";
  const address = body?.address?.trim() ?? "";
  const comment = body?.comment?.trim() ?? "";
  const lines = body?.items ?? [];

  if (!name || !/^7\d{10}$/.test(phone) || lines.length === 0) {
    return NextResponse.json({ error: "Проверьте имя, телефон и товары в корзине." }, { status: 400 });
  }

  const productMap = new Map(products.map((product) => [product.slug, product]));
  const items = lines
    .map((line) => ({
      product: productMap.get(line.slug),
      quantity: Math.max(1, Math.floor(Number(line.quantity) || 1)),
    }))
    .filter((line): line is { product: typeof products[number]; quantity: number } => Boolean(line.product));

  if (items.length === 0) {
    return NextResponse.json({ error: "Товары из корзины не найдены." }, { status: 400 });
  }

  const total = items.reduce((sum, item) => sum + moneyValue(item.product.price) * item.quantity, 0);
  const origin = new URL(request.url).origin;
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const orderDate = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
  const rows = items.map(({ product, quantity }) => [
    orderDate,
    name,
    phone,
    address,
    comment,
    totalQuantity,
    formatMoney(total),
    "по согласованию",
    `${product.name} — ${product.price} × ${quantity}`,
    imageFormula(absoluteUrl(origin, product.image || product.images[0])),
  ]);

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const sheetTab = process.env.GOOGLE_SHEET_TAB || "Заявки";

  if (!email || !privateKey || !sheetId) {
    return NextResponse.json({ error: "Google Sheets пока не подключён на сервере." }, { status: 503 });
  }

  try {
    const accessToken = await getAccessToken(email, privateKey);
    const range = encodeURIComponent(`${sheetTab}!A:J`);
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: rows,
      }),
    });

    if (!response.ok) throw new Error("Google Sheets не принял заявку.");

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось отправить заявку.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
