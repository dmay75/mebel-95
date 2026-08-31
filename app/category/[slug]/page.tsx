import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { CategoryProductGrid } from "../../_components/CategoryProductGrid";
import { ShopHeader } from "../../_components/ShopHeader";
import { categories, getCategory, getCategoryProducts } from "../../_lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).slug);
  return { title: category ? `${category.name} — Mebel_95` : "Каталог — Mebel_95" };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const categoryProducts = getCategoryProducts(slug);

  return (
    <main>
      <ShopHeader />
      <section className="catalog-page section-shell">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог", href: "/#categories" }, { label: category.name }]} />
        <div className="catalog-title-row"><div><p className="eyebrow dark">Демонстрационный каталог</p><h1>{category.name}</h1></div><p>{categoryProducts.length.toString().padStart(2, "0")} модели</p></div>
        <CategoryProductGrid products={categoryProducts} />
      </section>
    </main>
  );
}
