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

      <section className="products section-shell" id="popular">
        <div className="section-heading products-heading"><div><p className="eyebrow dark">Выбор покупателей</p><h2>Популярные товары</h2></div><p className="section-count">00 моделей</p></div>
        <div className="empty-showcase">Раздел подготовлен для реальных товаров.</div>
      </section>

      <section className="new-products section-shell" id="new">
        <div className="section-heading products-heading"><div><p className="eyebrow dark">Свежие поступления</p><h2>Новинки</h2></div><p className="section-count">00 моделей</p></div>
        <div className="empty-showcase">Здесь появятся новые реальные позиции.</div>
      </section>

      <section className="offer-section section-shell" id="offers">
        <div className="offer-banner">
          <Image src="/assets/sofa-milano.jpg" alt="Современный диван в интерьере" fill quality={92} sizes="100vw" />
          <div className="offer-shade" />
          <div className="offer-copy"><p className="eyebrow">Выбор для нового интерьера</p><h2>Специальные предложения</h2><Link href="/#popular">Смотреть подборку <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <Link className="footer-brand" href="/">Mebel <span>95</span></Link>
        <nav aria-label="Навигация в нижней части сайта">
          <Link href="/#categories">Каталог</Link><Link href="/#new">Новинки</Link><span aria-disabled="true">Скидки</span><span aria-disabled="true">Магазины</span><Link href="/#footer">Контакты</Link>
        </nav>
        <p>Демонстрация будущего интернет-магазина</p>
      </footer>
    </main>
  );
}
