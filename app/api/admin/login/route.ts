import { NextResponse } from "next/server";
import { signInAdmin } from "../../../_lib/adminAuth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { email?: string; password?: string } | null;
  const email = body?.email?.trim() ?? "";
  const password = body?.password ?? "";

  if (!email || !password) {
    return NextResponse.json({ error: "Введите email и пароль." }, { status: 400 });
  }

  try {
    await signInAdmin(email, password);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Не удалось войти.";
    return NextResponse.json({ error: message }, { status: 401 });
  }
}
