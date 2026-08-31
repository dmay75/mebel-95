import { Breadcrumbs } from "../_components/Breadcrumbs";
import { CartPageClient } from "../_components/CartPageClient";
import { ShopHeader } from "../_components/ShopHeader";
import { products } from "../_lib/catalog";

export const metadata = { title: "Корзина — Mebel_95" };

export default function CartPage() {
  return (
    <main>
      <ShopHeader />
      <section className="catalog-page section-shell">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Корзина" }]} />
        <div className="shop-page-title">
          <h1>Корзина</h1>
          <p>Оформите заявку — менеджер свяжется для подтверждения и уточнения доставки.</p>
        </div>
        <CartPageClient products={products} />
      </section>
    </main>
  );
}

