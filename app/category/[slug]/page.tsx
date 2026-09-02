import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { CategoryProductGrid } from "../../_components/CategoryProductGrid";
import { ShopHeader } from "../../_components/ShopHeader";
import { categories, getCategory } from "../../_lib/catalog";
import { getPublicCategoryProducts } from "../../_lib/publicCatalog";

type Props = { params: Promise<{ slug: string }> };

function getModelLabel(count: number) {
  const mod100 = count % 100;
  const mod10 = count % 10;
  if (mod100 >= 11 && mod100 <= 14) return "моделей";
  if (mod10 === 1) return "модель";
  if (mod10 >= 2 && mod10 <= 4) return "модели";
  return "моделей";
}

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
  const categoryProducts = await getPublicCategoryProducts(slug);

  return (
    <main>
      <ShopHeader />
      <section className="catalog-page section-shell">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог", href: "/#categories" }, { label: category.name }]} />
        <div className="catalog-title-row"><div><h1>{category.name}</h1></div><p>{categoryProducts.length.toString().padStart(2, "0")} {getModelLabel(categoryProducts.length)}</p></div>
        <CategoryProductGrid products={categoryProducts} />
      </section>
    </main>
  );
}
