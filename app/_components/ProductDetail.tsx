"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product, ProductColorOption } from "../_lib/catalog";
import { addDemoCart } from "./ShopHeader";

function moneyValue(price: string) {
  const match = price.replace(/\s/g, "").match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

function formatMoney(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

export function ProductDetail({ product }: { product: Product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [variantIndex, setVariantIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const selectedVariant = product.variants?.[variantIndex];
  const basePrice = selectedVariant?.price ?? product.price;
  const addOnsTotal = product.addOns
    ?.filter((option) => selectedAddOns.includes(option.label))
    .reduce((total, option) => total + moneyValue(option.price), 0) ?? 0;
  const baseMoney = moneyValue(basePrice);
  const displayedPrice = addOnsTotal > 0 && baseMoney > 0
    ? `${basePrice.trim().toLowerCase().startsWith("от") ? "от " : ""}${formatMoney(baseMoney + addOnsTotal)}`
    : basePrice;
  const colorOptions: ProductColorOption[] | undefined = product.colorOptions ?? product.colors?.map((color) => ({ label: color }));
  const gallery = product.images.length ? product.images : [product.image];
  const selected = gallery[Math.min(selectedIndex, gallery.length - 1)] ?? product.image;

  const selectImage = (image: string) => {
    const nextIndex = gallery.indexOf(image);
    setSelectedIndex(nextIndex >= 0 ? nextIndex : 0);
  };

  const shiftImage = (direction: -1 | 1) => {
    if (gallery.length < 2) return;
    setSelectedIndex((index) => (index + direction + gallery.length) % gallery.length);
  };

  const add = () => {
    if (!added) addDemoCart(quantity);
    setAdded(true);
  };

  return (
    <div className="product-detail-grid">
      <div className="product-gallery">
        <div className="product-main-image">
          <Image src={selected} alt={product.name} fill priority quality={95} sizes="(max-width: 900px) 100vw, 58vw" />
          <button className="product-gallery-arrow product-gallery-arrow-prev" type="button" aria-label="Предыдущее фото" disabled={gallery.length < 2} onClick={() => shiftImage(-1)}>←</button>
          <button className="product-gallery-arrow product-gallery-arrow-next" type="button" aria-label="Следующее фото" disabled={gallery.length < 2} onClick={() => shiftImage(1)}>→</button>
        </div>
        <div className="product-thumbnails" aria-label="Дополнительные фотографии">
          {gallery.map((image, index) => (
            <button className={selectedIndex === index ? "active" : ""} type="button" key={`${image}-${index}`} onClick={() => setSelectedIndex(index)} aria-label={`Фото ${index + 1}`}>
              <Image src={image} alt="" fill quality={90} sizes="100px" />
            </button>
          ))}
        </div>
      </div>

      <div className="product-summary">
        <p className="product-category-label">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="detail-price" aria-live="polite">{displayedPrice}</p>
        <p className="stock"><span />В наличии</p>
        <p className="detail-description">{product.description}</p>

        {product.variants ? (
          <fieldset className="variant-selector">
            <legend>Размер (Д × Ш × В)</legend>
            <div className="variant-options">
              {product.variants.map((variant, index) => (
                <button
                  className={variantIndex === index ? "active" : ""}
                  type="button"
                  key={variant.dimensions}
                  aria-pressed={variantIndex === index}
                  onClick={() => { setVariantIndex(index); if (variant.image) selectImage(variant.image); setAdded(false); }}
                >
                  <span>{variant.dimensions}</span>
                  <strong>{variant.price}</strong>
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {colorOptions?.length ? (
          <fieldset className="color-selector">
            <legend>Цвет</legend>
            <div className="color-options">
              {colorOptions.map((color, index) => (
                <button
                  className={colorIndex === index ? "active" : ""}
                  type="button"
                  key={color.label}
                  aria-pressed={colorIndex === index}
                  onClick={() => { setColorIndex(index); if (color.image) selectImage(color.image); setAdded(false); }}
                >
                  {color.label}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {product.addOns?.length ? (
          <fieldset className="addon-selector">
            <legend>Дополнительно</legend>
            <div className="addon-options">
              {product.addOns.map((option) => {
                const active = selectedAddOns.includes(option.label);
                return (
                  <button
                    className={active ? "active" : ""}
                    type="button"
                    key={option.label}
                    aria-pressed={active}
                    onClick={() => {
                      setSelectedAddOns((current) => (
                        current.includes(option.label)
                          ? current.filter((label) => label !== option.label)
                          : [...current, option.label]
                      ));
                      setAdded(false);
                    }}
                  >
                    <span>{option.label}</span>
                    <strong>+ {option.price}</strong>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        <div className="quantity-row">
          <span>Количество</span>
          <div className="quantity-control">
            <button type="button" aria-label="Уменьшить количество" onClick={() => { setQuantity((value) => Math.max(1, value - 1)); setAdded(false); }}>−</button>
            <strong>{quantity}</strong>
            <button type="button" aria-label="Увеличить количество" onClick={() => { setQuantity((value) => value + 1); setAdded(false); }}>+</button>
          </div>
        </div>

        <button className={`detail-cart-button ${added ? "is-added" : ""}`} type="button" onClick={add}>{added ? "Добавлено ✓" : "Добавить в корзину"}</button>
        <button className={`detail-favorite ${favorite ? "is-favorite" : ""}`} type="button" aria-pressed={favorite} onClick={() => setFavorite((value) => !value)}>{favorite ? "♥ В избранном" : "♡ Добавить в избранное"}</button>

        <div className="characteristics">
          <h2>Основные характеристики</h2>
          {product.characteristics.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>
                {label === "Размер" && selectedVariant ? selectedVariant.dimensions : (label === "Цвет" || label === "Цвета") && colorOptions?.[colorIndex] ? colorOptions[colorIndex].label : value}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
