import Image from "next/image";
import Link from "next/link";
import { ShopHeader } from "./_components/ShopHeader";
import { categories } from "./_lib/catalog";

const contactPhone = "7928-022-59-65";
const workingHours = "Ежедневно с 9:00 до 21:00";
const whatsappLink = "#";
const instagramLink = "#";

function SocialIcon({ type }: { type: "whatsapp" | "instagram" }) {
  const icon = type === "whatsapp"
    ? { src: "/assets/social-whatsapp.jpg", alt: "WhatsApp" }
    : { src: "/assets/social-instagram.png", alt: "Instagram" };

  return <Image src={icon.src} alt={icon.alt} width={42} height={42} quality={92} />;
}

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
            <div className="shop-card-field"><span>Название</span><strong>Mebel_95</strong></div>
            <div className="shop-card-field"><span>График</span><strong>{workingHours}</strong></div>
            <div className="shop-card-field"><span>Телефон</span><strong>{contactPhone}</strong></div>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div>
          <div className="footer-brand-row">
            <span className="footer-brand-mark"><Image src="/assets/mebel95-logo.jpg" alt="" width={46} height={46} quality={92} /></span>
            <p className="footer-brand">Mebel<span>_95</span></p>
          </div>
          <p className="footer-note">Мебельный магазин</p>
        </div>
        <div className="footer-column"><h2>Каталог</h2><span /></div>
        <div className="footer-column">
          <h2>Покупателям</h2>
          <div className="footer-actions">
            <Link href="/#categories">Каталог</Link>
            <Link href="/favorites">Избранное</Link>
            <Link href="/cart">Корзина</Link>
          </div>
        </div>
        <div className="footer-column">
          <h2>Контакты</h2>
          <p>{contactPhone}</p>
          <p>{workingHours}</p>
          <div className="social-links footer-socials" aria-label="Социальные сети магазина">
            <a href={whatsappLink} aria-label="Написать в WhatsApp"><SocialIcon type="whatsapp" /></a>
            <a href={instagramLink} aria-label="Открыть Instagram"><SocialIcon type="instagram" /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Mebel_95</span><span /></div>
      </footer>
    </main>
  );
}
