import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { ProductDetail } from "../../_components/ProductDetail";
import { ShopHeader } from "../../_components/ShopHeader";
import { products } from "../../_lib/catalog";
import { getPublicProduct } from "../../_lib/publicCatalog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getPublicProduct((await params).slug);
  return { title: product ? `${product.name} — Mebel_95` : "Товар — Mebel_95" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getPublicProduct(slug);
  if (!product) notFound();

  return (
    <main>
      <ShopHeader />
      <section className="product-page section-shell">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: product.category, href: `/category/${product.categorySlug}` }, { label: product.name }]} />
        <ProductDetail product={product} />
      </section>
    </main>
  );
}
