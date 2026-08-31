import Image from "next/image";
import Link from "next/link";
import { ShopHeader } from "./_components/ShopHeader";
import { categories } from "./_lib/catalog";

export default function Home() {
  return (
    <main>
      <ShopHeader />
      <section className="hero" id="top">
        <Image className="hero-image" src="/assets/hero-living.jpg" alt="Светлая современная гостиная с мягкой мебелью" fill priority quality={92} sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Mebel 95 · современный интерьер</p>
        </div>
      </section>

      <section className="categories section-shell" id="categories">
        <div className="section-heading categories-heading"><div><h2>Каталог</h2></div></div>
        <div className="category-grid">
          {categories.map((category, index) => {
            const content = <><Image src={category.image} alt={category.name} fill quality={92} sizes="(max-width: 520px) 100vw, (max-width: 880px) 50vw, 25vw" /><div className="category-overlay" /><div className="category-title"><span>{String(index + 1).padStart(2, "0")}</span><h3>{category.name}</h3></div></>;
            return (
            <Link className="category-card is-linked" href={`/category/${category.slug}`} key={category.name}>
              {content}
            </Link>
            );
          })}
        </div>
      </section>

      <section className="shops-section section-shell" id="shops">
        <div className="shops-panel">
          <div className="shops-heading">
            <div>
              <h2>Наш магазин</h2>
              <p>Данные магазина добавим позже.</p>
            </div>
          </div>
          <div className="shop-card-empty">
            <div className="shop-card-field"><span>Название</span><i /></div>
            <div className="shop-card-field"><span>Адрес</span><i /></div>
            <div className="shop-card-field"><span>График</span><i /></div>
            <div className="shop-card-field"><span>Телефон</span><i /></div>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div>
          <p className="footer-brand">Mebel<span>_95</span></p>
          <p className="footer-note">Мебельный магазин</p>
        </div>
        <div className="footer-column"><h2>Каталог</h2><span /></div>
        <div className="footer-column"><h2>Покупателям</h2><span /></div>
        <div className="footer-column"><h2>Контакты</h2><span /></div>
        <div className="footer-bottom"><span>© 2026 Mebel_95</span><span /></div>
      </footer>
    </main>
  );
}
