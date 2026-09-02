"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import type { Product } from "../_lib/catalog";
import { clearCart, removeFromCart, setCartQuantity, useCartLines } from "./shopStore";

function moneyValue(price: string) {
  const match = price.replace(/\s/g, "").replace(",", ".").match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function formatMoney(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

export function CartPageClient({ products }: { products: Product[] }) {
  const lines = useCartLines();
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const productMap = useMemo(() => new Map(products.map((product) => [product.slug, product])), [products]);
  const items = lines
    .map((line) => ({ ...line, product: productMap.get(line.slug) }))
    .filter((item): item is { slug: string; quantity: number; product: Product } => Boolean(item.product));
  const productCount = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + moneyValue(item.product.price) * item.quantity, 0);

  const submitOrder = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^7\d{10}$/.test(phone)) {
      setStatus("Введите телефон в формате 7XXXXXXXXXX.");
      return;
    }
    setIsSubmitting(true);
    setStatus("");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          phone,
          address: String(formData.get("address") ?? ""),
          comment: String(formData.get("comment") ?? ""),
          items: lines,
        }),
      });
      const result = await response.json().catch(() => ({})) as { error?: string };

      if (!response.ok) {
        setStatus(result.error ?? "Не удалось отправить заявку. Попробуйте ещё раз.");
        return;
      }

      clearCart();
      setPhone("");
      form.reset();
      setStatus("Заявка отправлена. Менеджер свяжется с вами для подтверждения.");
    } catch {
      setStatus("Не удалось отправить заявку. Проверьте интернет и попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="shop-empty">
        <div className="shop-empty-icon" aria-hidden="true">⌑</div>
        <h2>{status ? "Заявка отправлена" : "Корзина пуста"}</h2>
        <p>{status || "Добавьте товары из каталога, чтобы оформить заявку."}</p>
        <Link className="shop-empty-link" href="/#categories">К каталогу</Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-items">
        {items.map(({ product, quantity }) => (
          <article className="cart-item" key={product.slug}>
            <Link className="cart-item-image" href={`/product/${product.slug}`}>
              <Image src={product.image} alt={product.name} fill quality={85} sizes="160px" />
            </Link>
            <div className="cart-item-info">
              <p>{product.category}</p>
              <Link href={`/product/${product.slug}`}>{product.name}</Link>
              <strong>{product.price}</strong>
            </div>
            <div className="cart-item-actions">
              <div className="quantity-control">
                <button type="button" aria-label="Уменьшить количество" onClick={() => setCartQuantity(product.slug, quantity - 1)}>−</button>
                <strong>{quantity}</strong>
                <button type="button" aria-label="Увеличить количество" onClick={() => setCartQuantity(product.slug, quantity + 1)}>+</button>
              </div>
              <button type="button" onClick={() => removeFromCart(product.slug)}>Убрать</button>
            </div>
          </article>
        ))}
      </div>

      <aside className="checkout-panel">
        <div className="checkout-line"><span>Товары ({productCount})</span><strong>{formatMoney(total)}</strong></div>
        <div className="checkout-line"><span>Доставка</span><strong>по согласованию</strong></div>
        <div className="checkout-total"><span>К оплате</span><strong>{formatMoney(total)}</strong></div>

        <form className="checkout-form" onSubmit={submitOrder}>
          <label>Ваше имя *<input name="name" required placeholder="Иван" /></label>
          <label>Телефон *<input value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 11))} name="phone" required inputMode="numeric" placeholder="7XXXXXXXXXX" /></label>
          <label>Адрес доставки<input name="address" placeholder="Город, улица, дом" /></label>
          <label>Комментарий<textarea name="comment" placeholder="Удобное время для звонка, пожелания..." rows={4} /></label>
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Отправляем..." : "Оформить заявку"}</button>
          <p>Нажимая «Оформить заявку», вы соглашаетесь на обработку персональных данных. Оплата при получении.</p>
          {status ? <strong className="checkout-status">{status}</strong> : null}
        </form>

        <button className="clear-shop-list" type="button" onClick={clearCart}>Очистить корзину</button>
      </aside>
    </div>
  );
}
