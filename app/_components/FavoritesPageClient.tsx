"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import type { Product } from "../_lib/catalog";
import { addToCart, clearFavorites, toggleFavorite, useFavoriteSlugs } from "./shopStore";

export function FavoritesPageClient({ products }: { products: Product[] }) {
  const favoriteSlugs = useFavoriteSlugs();
  const productMap = useMemo(() => new Map(products.map((product) => [product.slug, product])), [products]);
  const favorites = favoriteSlugs.map((slug) => productMap.get(slug)).filter((product): product is Product => Boolean(product));

  if (favorites.length === 0) {
    return (
      <div className="shop-empty">
        <div className="shop-empty-icon" aria-hidden="true">♡</div>
        <h2>Избранное пусто</h2>
        <p>Откройте каталог и отметьте сердечком понравившиеся товары — они появятся здесь.</p>
        <Link className="shop-empty-link" href="/#categories">К каталогу</Link>
      </div>
    );
  }

  return (
    <>
      <div className="shop-list-toolbar">
        <span />
        <button type="button" onClick={clearFavorites}>Очистить</button>
      </div>
      <div className="favorites-grid">
        {favorites.map((product) => (
          <article className="favorite-item" key={product.slug}>
            <Link className="favorite-item-image" href={`/product/${product.slug}`}>
              <Image src={product.image} alt={product.name} fill quality={85} sizes="(max-width: 680px) 50vw, 260px" />
            </Link>
            <button className="favorite-remove" type="button" aria-label="Убрать из избранного" onClick={() => toggleFavorite(product)}>♥</button>
            <p>{product.category}</p>
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
            <strong>{product.price}</strong>
            <button type="button" onClick={() => addToCart(product)}>В корзину</button>
          </article>
        ))}
      </div>
    </>
  );
}
