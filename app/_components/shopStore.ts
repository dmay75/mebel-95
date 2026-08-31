"use client";

import { useSyncExternalStore } from "react";
import type { Product } from "../_lib/catalog";

export type CartLine = {
  slug: string;
  quantity: number;
};

const CART_KEY = "mebel95-cart";
const FAVORITES_KEY = "mebel95-favorites";
const CART_EVENT = "mebel95-cart-updated";
const FAVORITES_EVENT = "mebel95-favorites-updated";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const EMPTY_CART: CartLine[] = [];
const EMPTY_FAVORITES: string[] = [];

let cartCacheRaw: string | null = null;
let cartCache: CartLine[] = EMPTY_CART;
let favoriteCacheRaw: string | null = null;
let favoriteCache: string[] = EMPTY_FAVORITES;
const memoryStore = new Map<string, string>();

function isBrowser() {
  return typeof window !== "undefined";
}

function emit(eventName: string) {
  if (!isBrowser()) return;
  window.dispatchEvent(new Event(eventName));
}

function getStorage() {
  if (!isBrowser()) return null;
  try {
    return window.localStorage ?? null;
  } catch {
    return null;
  }
}

function readCookie(key: string) {
  if (!isBrowser()) return null;
  const entry = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${key}=`));
  return entry ? decodeURIComponent(entry.slice(key.length + 1)) : null;
}

function writeCookie(key: string, value: string) {
  if (!isBrowser()) return;
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

function readRaw(key: string) {
  if (!isBrowser()) return null;
  const storage = getStorage();
  return storage ? storage.getItem(key) : readCookie(key) ?? memoryStore.get(key) ?? null;
}

function readJson<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const value = readRaw(key);
    return value ? JSON.parse(value) as T : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T, eventName: string) {
  if (!isBrowser()) return;
  const raw = JSON.stringify(value);
  const storage = getStorage();
  if (storage) {
    storage.setItem(key, raw);
  } else {
    writeCookie(key, raw);
    memoryStore.set(key, raw);
  }
  emit(eventName);
}

function subscribe(eventName: string, callback: () => void) {
  window.addEventListener(eventName, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener("storage", callback);
  };
}

export function getCartLines() {
  if (!isBrowser()) return EMPTY_CART;
  const raw = readRaw(CART_KEY);
  if (raw === cartCacheRaw) return cartCache;
  cartCacheRaw = raw;
  cartCache = readJson<CartLine[]>(CART_KEY, EMPTY_CART).filter((line) => line.slug && line.quantity > 0);
  return cartCache;
}

export function getCartCount() {
  return getCartLines().reduce((total, line) => total + line.quantity, 0);
}

export function addToCart(product: Pick<Product, "slug">, quantity = 1) {
  const cart = getCartLines();
  const existing = cart.find((line) => line.slug === product.slug);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ slug: product.slug, quantity });
  }
  writeJson(CART_KEY, cart, CART_EVENT);
}

export function setCartQuantity(slug: string, quantity: number) {
  const nextQuantity = Math.max(0, Math.floor(quantity));
  const cart = getCartLines()
    .map((line) => line.slug === slug ? { ...line, quantity: nextQuantity } : line)
    .filter((line) => line.quantity > 0);
  writeJson(CART_KEY, cart, CART_EVENT);
}

export function removeFromCart(slug: string) {
  writeJson(CART_KEY, getCartLines().filter((line) => line.slug !== slug), CART_EVENT);
}

export function clearCart() {
  writeJson(CART_KEY, [], CART_EVENT);
}

export function getFavoriteSlugs() {
  if (!isBrowser()) return EMPTY_FAVORITES;
  const raw = readRaw(FAVORITES_KEY);
  if (raw === favoriteCacheRaw) return favoriteCache;
  favoriteCacheRaw = raw;
  favoriteCache = readJson<string[]>(FAVORITES_KEY, EMPTY_FAVORITES).filter(Boolean);
  return favoriteCache;
}

export function isFavorite(slug: string) {
  return getFavoriteSlugs().includes(slug);
}

export function toggleFavorite(product: Pick<Product, "slug">) {
  const favorites = getFavoriteSlugs();
  const exists = favorites.includes(product.slug);
  writeJson(
    FAVORITES_KEY,
    exists ? favorites.filter((slug) => slug !== product.slug) : [...favorites, product.slug],
    FAVORITES_EVENT,
  );
}

export function clearFavorites() {
  writeJson(FAVORITES_KEY, [], FAVORITES_EVENT);
}

export function useCartLines() {
  return useSyncExternalStore(
    (callback) => subscribe(CART_EVENT, callback),
    getCartLines,
    () => EMPTY_CART,
  );
}

export function useCartCount() {
  return useSyncExternalStore(
    (callback) => subscribe(CART_EVENT, callback),
    getCartCount,
    () => 0,
  );
}

export function useFavoriteSlugs() {
  return useSyncExternalStore(
    (callback) => subscribe(FAVORITES_EVENT, callback),
    getFavoriteSlugs,
    () => EMPTY_FAVORITES,
  );
}
