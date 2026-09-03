import { Breadcrumbs } from "../_components/Breadcrumbs";
import { FavoritesPageClient } from "../_components/FavoritesPageClient";
import { ShopHeader } from "../_components/ShopHeader";
import { getPublicProducts } from "../_lib/publicCatalog";

export const metadata = { title: "Избранное — Mebel_95" };

export default async function FavoritesPage() {
  const products = await getPublicProducts();

  return (
    <main>
      <ShopHeader />
      <section className="catalog-page section-shell">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Избранное" }]} />
        <div className="shop-page-title">
          <h1>Избранное</h1>
          <p>Здесь сохраняются товары, которые вы отметили сердечком.</p>
        </div>
        <FavoritesPageClient products={products} />
      </section>
    </main>
  );
}
