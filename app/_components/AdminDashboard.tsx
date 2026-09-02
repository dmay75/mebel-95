"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "../_lib/catalog";
import { defaultSiteSettings, SiteSettings } from "../_lib/supabase";

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
  variants: Array<Record<string, string>>;
  colors: string[];
  color_options: Array<Record<string, string>>;
  add_ons: Array<Record<string, string>>;
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
  variantsText: string;
  colorsText: string;
  colorOptionsText: string;
  addOnsText: string;
  is_active: boolean;
  sort_order: string;
};

const firstCategory = categories[0];

const knownSubcategories: Record<string, string[]> = {
  "myagkaya-mebel": ["Диваны", "Угловые диваны", "Комплекты", "Кресла"],
  "stoly-i-stulya": ["Столы", "Стулья"],
};

const emptyForm: ProductFormState = {
  id: "",
  slug: "",
  name: "",
  category: firstCategory.name,
  category_slug: firstCategory.slug,
  subcategory: "",
  price: "",
  image: "",
  imagesText: "",
  description: "",
  characteristicsText: "",
  variantsText: "",
  colorsText: "",
  colorOptionsText: "",
  addOnsText: "",
  is_active: true,
  sort_order: "0",
};

function parseLines(value: string) {
  return value.split("\n").map((line) => line.trim()).filter(Boolean);
}

function stringifyList(items?: unknown[]) {
  return Array.isArray(items) ? items.join("\n") : "";
}

function stringifyRecords(items?: Array<Record<string, string>>, keys: string[] = []) {
  if (!Array.isArray(items)) return "";
  return items.map((item) => keys.map((key) => item[key] ?? "").join(" | ").replace(/\s+\|(\s+\|)*\s*$/, "")).join("\n");
}

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
    variantsText: stringifyRecords(product.variants, ["label", "dimensions", "price", "image"]),
    colorsText: stringifyList(product.colors),
    colorOptionsText: stringifyRecords(product.color_options, ["label", "image"]),
    addOnsText: stringifyRecords(product.add_ons, ["label", "price"]),
    is_active: product.is_active,
    sort_order: String(product.sort_order ?? 0),
  };
}

function parseCharacteristics(value: string): Array<[string, string]> {
  return parseLines(value).map((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return [line, ""];
    return [line.slice(0, separatorIndex).trim(), line.slice(separatorIndex + 1).trim()];
  });
}

function parseRecords(value: string, keys: string[]) {
  return parseLines(value).map((line) => {
    const parts = line.split("|").map((part) => part.trim());
    return keys.reduce<Record<string, string>>((record, key, index) => {
      if (parts[index]) record[key] = parts[index];
      return record;
    }, {});
  }).filter((record) => Object.keys(record).length > 0);
}

function slugify(value: string) {
  const map: Record<string, string> = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m",
    н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch",
    ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  };
  return value.toLowerCase().split("").map((char) => map[char] ?? char).join("").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function payloadFromForm(form: ProductFormState) {
  const images = parseLines(form.imagesText);

  return {
    slug: form.slug.trim() || slugify(form.name),
    name: form.name.trim(),
    category: form.category.trim(),
    category_slug: form.category_slug.trim(),
    subcategory: form.subcategory.trim() || null,
    price: form.price.trim(),
    image: form.image.trim() || images[0] || "",
    images,
    description: form.description.trim(),
    characteristics: parseCharacteristics(form.characteristicsText),
    variants: parseRecords(form.variantsText, ["label", "dimensions", "price", "image"]),
    colors: parseLines(form.colorsText),
    color_options: parseRecords(form.colorOptionsText, ["label", "image"]),
    add_ons: parseRecords(form.addOnsText, ["label", "price"]),
    is_active: form.is_active,
    sort_order: Number(form.sort_order) || 0,
  };
}

export default function AdminDashboard({ adminEmail }: { adminEmail: string }) {
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [form, setForm] = useState<ProductFormState>(emptyForm);
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState("");

  const subcategoryOptions = useMemo(() => {
    const known = knownSubcategories[form.category_slug] ?? [];
    const fromProducts = products
      .filter((product) => product.category_slug === form.category_slug && product.subcategory)
      .map((product) => product.subcategory as string);
    return Array.from(new Set([...known, ...fromProducts]));
  }, [form.category_slug, products]);

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

  async function loadSettings() {
    const response = await fetch("/api/admin/settings", { cache: "no-store" });
    const data = await response.json().catch(() => ({})) as { settings?: SiteSettings };
    if (response.ok && data.settings) setSettings(data.settings);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadProducts();
      void loadSettings();
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function selectCategory(slug: string) {
    const category = categories.find((item) => item.slug === slug) ?? firstCategory;
    setForm((current) => ({ ...current, category: category.name, category_slug: category.slug, subcategory: "" }));
  }

  async function uploadPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setStatus("Загружаем фото...");

    const body = new FormData();
    body.append("file", file);
    const response = await fetch("/api/admin/upload", { method: "POST", body });
    const data = await response.json().catch(() => ({})) as { url?: string; error?: string };

    setUploading(false);
    event.target.value = "";
    if (!response.ok || !data.url) {
      setStatus(data.error || "Не удалось загрузить фото.");
      return;
    }

    const uploadedUrl = data.url;
    setForm((current) => {
      const images = parseLines(current.imagesText);
      return {
        ...current,
        image: current.image || uploadedUrl,
        imagesText: [...images, uploadedUrl].join("\n"),
      };
    });
    setStatus("Фото загружено и добавлено в товар.");
  }

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

  async function saveSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSavingSettings(true);
    setStatus("");

    const response = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    const data = await response.json().catch(() => ({})) as { error?: string; settings?: SiteSettings };

    setSavingSettings(false);
    if (!response.ok) {
      setStatus(data.error || "Не удалось сохранить настройки магазина.");
      return;
    }
    if (data.settings) setSettings(data.settings);
    setStatus("Настройки магазина сохранены.");
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

  async function importCatalog() {
    if (!window.confirm("Импортировать текущий каталог в Supabase? Уже существующие товары обновятся по slug.")) return;

    setImporting(true);
    setStatus("Импортируем каталог...");
    const response = await fetch("/api/admin/import-catalog", { method: "POST" });
    const data = await response.json().catch(() => ({})) as { imported?: number; total?: number; error?: string };

    setImporting(false);
    if (!response.ok) {
      setStatus(data.error || "Не удалось импортировать каталог.");
      return;
    }

    setStatus(`Импорт завершен: ${data.imported ?? 0} из ${data.total ?? 0} товаров.`);
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
          <Image alt="" src="/assets/mebel95-logo.jpg" width={42} height={42} />
          <span>Mebel_95</span>
        </Link>
        <nav>
          <a href="#products">Товары</a>
          <a href="#settings">Магазин</a>
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

        <section className="admin-stat-grid">
          <div><span>Товаров в базе</span><strong>{products.length}</strong></div>
          <div><span>Активных</span><strong>{products.filter((product) => product.is_active).length}</strong></div>
          <div><span>Настройки</span><strong>Магазин</strong></div>
        </section>

        <section className="admin-import-panel">
          <div>
            <p className="admin-kicker">Импорт</p>
            <h2>Перенести текущий каталог</h2>
            <p>Кнопка загрузит товары из текущего сайта в Supabase. Повторный запуск обновит товары по slug и не создаст дубли.</p>
          </div>
          <button disabled={importing} onClick={importCatalog} type="button">
            {importing ? "Импортируем..." : "Импортировать каталог"}
          </button>
        </section>

        <form className="admin-panel admin-settings-form" id="settings" onSubmit={saveSettings}>
          <div className="admin-panel-heading">
            <div>
              <h2>Данные магазина</h2>
              <p>Эти поля меняют блок “Наш магазин” и контакты в нижней части сайта.</p>
            </div>
          </div>
          <div className="admin-settings-grid">
            <label>Название магазина <input onChange={(event) => setSettings({ ...settings, storeName: event.target.value })} value={settings.storeName} /></label>
            <label>Телефон <input onChange={(event) => setSettings({ ...settings, phone: event.target.value })} value={settings.phone} /></label>
            <label>График <input onChange={(event) => setSettings({ ...settings, workingHours: event.target.value })} value={settings.workingHours} /></label>
            <label>Ссылка WhatsApp <input onChange={(event) => setSettings({ ...settings, whatsappUrl: event.target.value })} value={settings.whatsappUrl} /></label>
            <label>Ссылка Instagram <input onChange={(event) => setSettings({ ...settings, instagramUrl: event.target.value })} value={settings.instagramUrl} /></label>
          </div>
          <button disabled={savingSettings} type="submit">{savingSettings ? "Сохраняем..." : "Сохранить данные магазина"}</button>
        </form>

        <section className="admin-grid" id="products">
          <div className="admin-panel">
            <div className="admin-panel-heading">
              <div>
                <h2>Товары</h2>
                <p>Поиск по названию, slug и категории.</p>
              </div>
              <input onChange={(event) => setQuery(event.target.value)} placeholder="Поиск по базе" value={query} />
            </div>

            <div className="admin-product-list">
              {loading ? <p>Загружаем товары...</p> : null}
              {!loading && filteredProducts.length === 0 ? <p>Пока товаров в базе нет.</p> : null}
              {filteredProducts.map((product) => (
                <article key={product.id}>
                  {/* Admin preview can point to local assets or Supabase Storage URLs. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
                <p>Фото можно вставить ссылкой или загрузить файлом. Дополнительные поля заполняются построчно.</p>
              </div>
              {form.id ? <button onClick={() => setForm(emptyForm)} type="button">Сбросить</button> : null}
            </div>

            <label>Название <input onChange={(event) => setForm({ ...form, name: event.target.value, slug: form.slug || slugify(event.target.value) })} required value={form.name} /></label>
            <label>Slug <input onChange={(event) => setForm({ ...form, slug: event.target.value })} required value={form.slug} /></label>
            <label>Цена <input onChange={(event) => setForm({ ...form, price: event.target.value })} value={form.price} /></label>
            <label>Категория
              <select onChange={(event) => selectCategory(event.target.value)} value={form.category_slug}>
                {categories.map((category) => <option key={category.slug} value={category.slug}>{category.name}</option>)}
              </select>
            </label>
            <label>Подкатегория
              <select onChange={(event) => setForm({ ...form, subcategory: event.target.value })} value={form.subcategory}>
                <option value="">Без подкатегории</option>
                {subcategoryOptions.map((subcategory) => <option key={subcategory} value={subcategory}>{subcategory}</option>)}
              </select>
            </label>
            <label>Порядок сортировки <input onChange={(event) => setForm({ ...form, sort_order: event.target.value })} type="number" value={form.sort_order} /></label>
            <label>Главное фото <input onChange={(event) => setForm({ ...form, image: event.target.value })} value={form.image} /></label>
            <label className="admin-file-upload">Загрузить фото <input accept="image/*" disabled={uploading} onChange={uploadPhoto} type="file" /><span>{uploading ? "Фото загружается..." : "После загрузки ссылка появится в списке фото."}</span></label>
            <label>Все фото, каждое с новой строки <textarea onChange={(event) => setForm({ ...form, imagesText: event.target.value })} value={form.imagesText} /></label>
            <label>Описание <textarea onChange={(event) => setForm({ ...form, description: event.target.value })} value={form.description} /></label>
            <label>Характеристики, формат “Название: значение” <textarea onChange={(event) => setForm({ ...form, characteristicsText: event.target.value })} value={form.characteristicsText} /></label>
            <label>Варианты, формат “Название | Размер | Цена | Фото” <textarea onChange={(event) => setForm({ ...form, variantsText: event.target.value })} value={form.variantsText} /></label>
            <label>Цвета, каждый с новой строки <textarea onChange={(event) => setForm({ ...form, colorsText: event.target.value })} value={form.colorsText} /></label>
            <label>Фото цветов, формат “Название | Фото” <textarea onChange={(event) => setForm({ ...form, colorOptionsText: event.target.value })} value={form.colorOptionsText} /></label>
            <label>Доп. опции, формат “Название | Цена” <textarea onChange={(event) => setForm({ ...form, addOnsText: event.target.value })} value={form.addOnsText} /></label>
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
