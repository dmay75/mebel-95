"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, products } from "../_lib/catalog";
import { useCartCount, useFavoriteSlugs } from "./shopStore";

function normalizeSearch(value: string) {
  return value.toLowerCase().replaceAll("ё", "е").trim();
}

export function ShopHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cartCount = useCartCount();
  const favoriteCount = useFavoriteSlugs().length;
  const searchQuery = normalizeSearch(query);
  const categoryResults = useMemo(() => (
    searchQuery
      ? categories.filter((category) => normalizeSearch(category.name).includes(searchQuery)).slice(0, 6)
      : categories.slice(0, 4)
  ), [searchQuery]);
  const subcategoryResults = useMemo(() => {
    const seen = new Set<string>();
    const subcategories = products.flatMap((product) => {
      if (!product.subcategory) return [];
      const key = `${product.categorySlug}:${product.subcategory}`;
      if (seen.has(key)) return [];
      seen.add(key);
      return [{
        name: product.subcategory,
        categoryName: product.category,
        categorySlug: product.categorySlug,
      }];
    });

    return (searchQuery
      ? subcategories.filter((subcategory) => normalizeSearch(subcategory.name).includes(searchQuery) || normalizeSearch(subcategory.categoryName).includes(searchQuery))
      : subcategories.slice(0, 6)
    ).slice(0, 8);
  }, [searchQuery]);
  const hasSearchResults = categoryResults.length > 0 || subcategoryResults.length > 0;

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Mebel 95 — главная">
          <span className="brand-mark"><Image src="/assets/mebel95-logo.jpg" alt="" width={46} height={46} quality={92} /></span>
          <span className="brand-name">Mebel<span>_95</span></span>
        </Link>

        <nav className="main-nav" aria-label="Основная навигация">
          <Link href="/#categories">Каталог</Link>
          <Link href="/#shops">Магазин</Link>
          <Link href="/#footer">Контакты</Link>
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
              <button type="button" onClick={closeSearch} aria-label="Закрыть поиск">×</button>
            </div>
            <div className="search-results">
              {categoryResults.length ? (
                <div>
                  <span>Категории</span>
                  {categoryResults.map((category) => (
                    <Link href={`/category/${category.slug}`} key={category.slug} onClick={closeSearch}>{category.name}</Link>
                  ))}
                </div>
              ) : null}
              {subcategoryResults.length ? (
                <div>
                  <span>Подкатегории</span>
                  {subcategoryResults.map((subcategory) => (
                    <Link href={`/category/${subcategory.categorySlug}?subcategory=${encodeURIComponent(subcategory.name)}`} key={`${subcategory.categorySlug}-${subcategory.name}`} onClick={closeSearch}>
                      <strong>{subcategory.name}</strong>
                      <small>{subcategory.categoryName}</small>
                    </Link>
                  ))}
                </div>
              ) : null}
              {searchQuery && !hasSearchResults ? <p>Ничего не найдено. Попробуйте другое название категории или подкатегории.</p> : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
