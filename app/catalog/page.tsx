import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "../_components/Breadcrumbs";
import { ShopHeader } from "../_components/ShopHeader";
import { categories } from "../_lib/catalog";

export const metadata: Metadata = { title: "Каталог — Mebel_95" };

export default function CatalogPage() {
  return (
    <main>
      <ShopHeader />
      <section className="catalog-page section-shell">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог" }]} />
        <div className="catalog-title-row">
          <div><p className="eyebrow dark">Все категории</p><h1>Каталог</h1></div>
          <p>{categories.length.toString().padStart(2, "0")} категорий</p>
        </div>
        <div className="category-grid catalog-category-grid">
          {categories.map((category, index) => (
            <a className="category-card is-linked" href={`/category/${category.slug}`} key={category.slug}>
              <Image src={category.image} alt={category.name} fill sizes="(max-width: 520px) 100vw, (max-width: 880px) 50vw, 25vw" />
              <div className="category-overlay" />
              <div className="category-title"><span>{String(index + 1).padStart(2, "0")}</span><h2>{category.name}</h2></div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
