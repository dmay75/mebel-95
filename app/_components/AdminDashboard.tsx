"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";

type ProductRecord = {
  id: string;
  slug: string;
  name: string;
  category: string;
  category_slug: string;
  subcategory: string | null;
  price: string;
  image: string;
  images: string[];
  description: string;
  characteristics: Array<[string, string]>;
  is_active: boolean;
  sort_order: number;
};

type ProductFormState = {
  id: string;
  slug: string;
  name: string;
  category: string;
  category_slug: string;
  subcategory: string;
  price: string;
  image: string;
  imagesText: string;
  description: string;
  characteristicsText: string;
  is_active: boolean;
  sort_order: string;
};

const emptyForm: ProductFormState = {
  id: "",
  slug: "",
  name: "",
  category: "",
  category_slug: "",
  subcategory: "",
  price: "",
  image: "",
  imagesText: "",
  description: "",
  characteristicsText: "",
  is_active: true,
  sort_order: "0",
};

function formFromProduct(product: ProductRecord): ProductFormState {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    category: product.category,
    category_slug: product.category_slug,
    subcategory: product.subcategory ?? "",
    price: product.price,
    image: product.image,
    imagesText: product.images.join("\n"),
    description: product.description,
    characteristicsText: product.characteristics.map(([name, value]) => `${name}: ${value}`).join("\n"),
    is_active: product.is_active,
    sort_order: String(product.sort_order ?? 0),
  };
}

function parseLines(value: string) {
  return value.split("\n").map((line) => line.trim()).filter(Boolean);
}

function parseCharacteristics(value: string): Array<[string, string]> {
  return parseLines(value).map((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return [line, ""];
    return [line.slice(0, separatorIndex).trim(), line.slice(separatorIndex + 1).trim()];
  });
}

function payloadFromForm(form: ProductFormState) {
  const images = parseLines(form.imagesText);

  return {
    slug: form.slug.trim(),
    name: form.name.trim(),
    category: form.category.trim(),
    category_slug: form.category_slug.trim(),
    subcategory: form.subcategory.trim() || null,
    price: form.price.trim(),
    image: form.image.trim() || images[0] || "",
    images,
    description: form.description.trim(),
    characteristics: parseCharacteristics(form.characteristicsText),
    variants: [],
    colors: [],
    color_options: [],
    add_ons: [],
    is_active: form.is_active,
    sort_order: Number(form.sort_order) || 0,
  };
}

export default function AdminDashboard({ adminEmail }: { adminEmail: string }) {
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [form, setForm] = useState<ProductFormState>(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return products;
    return products.filter((product) => (
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.slug.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery)
    ));
  }, [products, query]);

  async function loadProducts() {
    setLoading(true);
    setStatus("");

    const response = await fetch("/api/admin/products", { cache: "no-store" });
    const data = await response.json().catch(() => ({})) as { products?: ProductRecord[]; error?: string };

    setLoading(false);
    if (!response.ok) {
      setStatus(data.error || "Не удалось загрузить товары. Проверьте таблицы Supabase.");
      return;
    }

    setProducts(data.products ?? []);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadProducts();
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setStatus("");

    const isEditing = Boolean(form.id);
    const response = await fetch(isEditing ? `/api/admin/products/${form.id}` : "/api/admin/products", {
      method: isEditing ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadFromForm(form)),
    });
    const data = await response.json().catch(() => ({})) as { error?: string };

    setSaving(false);
    if (!response.ok) {
      setStatus(data.error || "Не удалось сохранить товар.");
      return;
    }

    setForm(emptyForm);
    setStatus(isEditing ? "Товар обновлен." : "Товар добавлен.");
    await loadProducts();
  }

  async function removeProduct(id: string) {
    if (!window.confirm("Удалить товар из базы?")) return;

    const response = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setStatus("Не удалось удалить товар.");
      return;
    }

    setStatus("Товар удален.");
    await loadProducts();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/">
          <img alt="" src="/assets/mebel95-logo.jpg" />
          <span>Mebel_95</span>
        </Link>
        <nav>
          <a href="#products">Товары</a>
          <a href="#settings">Настройки</a>
          <Link href="/cart">Корзина</Link>
          <Link href="/">На сайт</Link>
        </nav>
        <button onClick={logout} type="button">Выйти</button>
      </aside>

      <section className="admin-workspace">
        <header className="admin-topbar">
          <div>
            <p className="admin-kicker">Админ-панель</p>
            <h1>Управление каталогом</h1>
          </div>
          <p>{adminEmail}</p>
        </header>

        <section className="admin-stat-grid" id="settings">
          <div>
            <span>Товаров в базе</span>
            <strong>{products.length}</strong>
          </div>
          <div>
            <span>Активных</span>
            <strong>{products.filter((product) => product.is_active).length}</strong>
          </div>
          <div>
            <span>Следующий этап</span>
            <strong>Фото и перенос каталога</strong>
          </div>
        </section>

        <section className="admin-grid" id="products">
          <div className="admin-panel">
            <div className="admin-panel-heading">
              <div>
                <h2>Товары</h2>
                <p>Здесь будут товары, которые уже перенесены в Supabase.</p>
              </div>
              <input onChange={(event) => setQuery(event.target.value)} placeholder="Поиск по базе" value={query} />
            </div>

            <div className="admin-product-list">
              {loading ? <p>Загружаем товары...</p> : null}
              {!loading && filteredProducts.length === 0 ? <p>Пока товаров в базе нет.</p> : null}
              {filteredProducts.map((product) => (
                <article key={product.id}>
                  <img alt="" src={product.image || "/assets/mebel95-logo.jpg"} />
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.category || "Без категории"} · {product.price || "Цена не указана"}</span>
                    <small>{product.slug}</small>
                  </div>
                  <button onClick={() => setForm(formFromProduct(product))} type="button">Править</button>
                  <button onClick={() => removeProduct(product.id)} type="button">Удалить</button>
                </article>
              ))}
            </div>
          </div>

          <form className="admin-panel admin-product-form" onSubmit={submit}>
            <div className="admin-panel-heading">
              <div>
                <h2>{form.id ? "Редактировать товар" : "Новый товар"}</h2>
                <p>Поля можно расширять: цвета, комплекты и опции добавим следующим этапом.</p>
              </div>
              {form.id ? <button onClick={() => setForm(emptyForm)} type="button">Сбросить</button> : null}
            </div>

            <label>Название <input onChange={(event) => setForm({ ...form, name: event.target.value })} required value={form.name} /></label>
            <label>Slug <input onChange={(event) => setForm({ ...form, slug: event.target.value })} required value={form.slug} /></label>
            <label>Цена <input onChange={(event) => setForm({ ...form, price: event.target.value })} value={form.price} /></label>
            <label>Категория <input onChange={(event) => setForm({ ...form, category: event.target.value })} value={form.category} /></label>
            <label>Slug категории <input onChange={(event) => setForm({ ...form, category_slug: event.target.value })} value={form.category_slug} /></label>
            <label>Подкатегория <input onChange={(event) => setForm({ ...form, subcategory: event.target.value })} value={form.subcategory} /></label>
            <label>Главное фото <input onChange={(event) => setForm({ ...form, image: event.target.value })} value={form.image} /></label>
            <label>Все фото, каждое с новой строки <textarea onChange={(event) => setForm({ ...form, imagesText: event.target.value })} value={form.imagesText} /></label>
            <label>Описание <textarea onChange={(event) => setForm({ ...form, description: event.target.value })} value={form.description} /></label>
            <label>Характеристики, формат “Название: значение” <textarea onChange={(event) => setForm({ ...form, characteristicsText: event.target.value })} value={form.characteristicsText} /></label>
            <label className="admin-checkbox">
              <input checked={form.is_active} onChange={(event) => setForm({ ...form, is_active: event.target.checked })} type="checkbox" />
              Показывать товар
            </label>

            <button disabled={saving} type="submit">{saving ? "Сохраняем..." : "Сохранить товар"}</button>
            {status ? <p className="admin-form-status">{status}</p> : null}
          </form>
        </section>
      </section>
    </main>
  );
}
