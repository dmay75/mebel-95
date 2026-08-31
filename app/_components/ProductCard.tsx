"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "../_lib/catalog";
import { addDemoCart } from "./ShopHeader";

export function ProductCard({ product, href }: { product: Product; href?: string }) {
  const [favorite, setFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  const add = () => {
    if (!added) addDemoCart();
    setAdded(true);
  };

  return (
    <article className={`product-card ${href ? "is-linked" : ""}`}>
      {href ? <a className="product-card-hitarea" href={href} aria-label={`Открыть ${product.name}`} /> : null}
      <div className="product-image-wrap">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 560px) 50vw, (max-width: 880px) 50vw, 25vw" />
        <button className={`favorite ${favorite ? "is-favorite" : ""}`} type="button" aria-label={favorite ? "Убрать из избранного" : "Добавить в избранное"} aria-pressed={favorite} onClick={() => setFavorite((value) => !value)}>{favorite ? "♥" : "♡"}</button>
      </div>
      <div className="product-info">
        <div><h3>{product.name}</h3><span className="card-stock"><i />В наличии</span></div>
        <p>{product.price}</p>
      </div>
      <button className={`add-cart-button ${added ? "is-added" : ""}`} type="button" onClick={add}>{added ? "Добавлено ✓" : "Добавить в корзину"}</button>
    </article>
  );
}
