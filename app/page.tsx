import Image from "next/image";
import Link from "next/link";
import { ShopHeader } from "./_components/ShopHeader";
import { categories } from "./_lib/catalog";

const contactPhone = "7928-022-59-65";
const workingHours = "Ежедневно с 9:00 до 21:00";
const whatsappLink = "#";
const instagramLink = "#";

function SocialIcon({ type }: { type: "whatsapp" | "instagram" }) {
  if (type === "whatsapp") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M4.2 19.8 5.5 16A8 8 0 1 1 8 18.2l-3.8 1.6Z" />
        <path d="M9.1 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.4.5c-.1.2-.2.3 0 .6.4.7 1.5 2 2.8 2.6.3.1.5.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.4.5 0 .5-.3 1.4-.9 1.8-.6.5-1.5.5-2.7.1-2.4-.8-5-3.3-5.8-5.6-.4-1.1-.4-1.9.1-2.6Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.8" cy="7.4" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
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
            <div className="shop-card-field"><span>Адрес</span><i /></div>
            <div className="shop-card-field"><span>График</span><strong>{workingHours}</strong></div>
            <div className="shop-card-field"><span>Телефон</span><strong>{contactPhone}</strong></div>
            <div className="social-links" aria-label="Социальные сети магазина">
              <a href={whatsappLink} aria-label="Написать в WhatsApp"><SocialIcon type="whatsapp" /></a>
              <a href={instagramLink} aria-label="Открыть Instagram"><SocialIcon type="instagram" /></a>
            </div>
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
        <div className="footer-column"><h2>Покупателям</h2><span /></div>
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
