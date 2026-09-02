import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabasePublicConfig } from "./supabase";

const ACCESS_COOKIE = "mebel95_admin_access";
const REFRESH_COOKIE = "mebel95_admin_refresh";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

type SupabaseUserResponse = {
  id?: string;
  email?: string;
};

export async function signInAdmin(email: string, password: string) {
  const { url, anonKey } = getSupabasePublicConfig();
  const response = await fetch(`${url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Неверный email или пароль.");
  }

  const data = await response.json() as {
    access_token?: string;
    refresh_token?: string;
  };

  if (!data.access_token || !data.refresh_token) {
    throw new Error("Supabase не вернул сессию администратора.");
  }

  const cookieStore = await cookies();
  cookieStore.set(ACCESS_COOKIE, data.access_token, {
    httpOnly: true,
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  cookieStore.set(REFRESH_COOKIE, data.refresh_token, {
    httpOnly: true,
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function signOutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_COOKIE);
  cookieStore.delete(REFRESH_COOKIE);
}

export async function getAdminUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_COOKIE)?.value;
  if (!accessToken) return null;

  const { url, anonKey } = getSupabasePublicConfig();
  const response = await fetch(`${url}/auth/v1/user`, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok) return null;

  const user = await response.json() as SupabaseUserResponse;
  if (!user.id || !user.email) return null;

  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail && user.email.toLowerCase() !== adminEmail.toLowerCase()) {
    return null;
  }

  return { id: user.id, email: user.email };
}

export async function requireAdminUser() {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");
  return user;
}

export async function requireAdminApiUser() {
  const user = await getAdminUser();
  if (!user) {
    throw new Error("Нужно войти в админ-панель.");
  }
  return user;
}
