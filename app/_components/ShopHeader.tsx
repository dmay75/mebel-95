"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartCount, useFavoriteSlugs } from "./shopStore";

export function ShopHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cartCount = useCartCount();
  const favoriteCount = useFavoriteSlugs().length;

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Mebel 95 — главная">
          <span className="brand-mark"><Image src="/assets/mebel95-logo.jpg" alt="" width={46} height={46} quality={92} /></span>
          <span className="brand-name">Mebel<span>_95</span></span>
        </Link>

        <nav className="main-nav" aria-label="Основная навигация">
          <Link href="/#categories">Каталог</Link>
          <Link href="/#new">Новинки</Link>
          <span aria-disabled="true">Скидки</span>
          <span aria-disabled="true">Магазины</span>
        </nav>

        <div className="header-tools" aria-label="Инструменты магазина">
          <button className="header-icon search-trigger" type="button" aria-label="Открыть поиск" aria-expanded={searchOpen} onClick={() => setSearchOpen((open) => !open)}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6.75" /><path d="m16 16 4 4" /></svg>
          </button>
          <Link className="header-icon cart-tool" href="/favorites" aria-label={`Избранное, товаров: ${favoriteCount}`}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M20.4 5.6a5.1 5.1 0 0 0-7.2 0L12 6.8l-1.2-1.2a5.1 5.1 0 1 0-7.2 7.2L12 21l8.4-8.2a5.1 5.1 0 0 0 0-7.2Z" /></svg>
            {favoriteCount > 0 ? <span className="cart-count">{favoriteCount}</span> : null}
          </Link>
          <Link className="header-icon cart-tool" href="/cart" aria-label={`Корзина, товаров: ${cartCount}`}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 8.5h14l-1 12H6l-1-12Z" /><path d="M9 9V6.5a3 3 0 0 1 6 0V9" /></svg>
            {cartCount > 0 ? <span className="cart-count">{cartCount}</span> : null}
          </Link>
        </div>
      </header>

      {searchOpen ? (
        <div className="search-panel">
          <div className="search-panel-inner">
            <div className="search-input-row">
              <span className="icon-shape icon-search" aria-hidden="true" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => event.key === "Escape" && setSearchOpen(false)} placeholder="Поиск по каталогу" aria-label="Поиск по каталогу" />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Закрыть поиск">×</button>
            </div>
            <div className="search-suggestions">
              <span>Популярные запросы</span>
              <Link href="/category/krovati">Кровати</Link>
              <Link href="/category/stoly-i-stulya">Столы</Link>
              <Link href="/category/kuhonnye-garnitury">Кухни</Link>
              <Link href="/category/myagkaya-mebel">Мягкая мебель</Link>
            </div>
            {query ? <p className="search-note">Поиск будет доступен в полной версии сайта</p> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
