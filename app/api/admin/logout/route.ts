import { NextResponse } from "next/server";
import { signOutAdmin } from "../../../_lib/adminAuth";

export async function POST() {
  await signOutAdmin();
  return NextResponse.json({ ok: true });
}
