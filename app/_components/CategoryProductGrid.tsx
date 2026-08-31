"use client";

import { useMemo, useRef, useState } from "react";
import type { Product } from "../_lib/catalog";
import { ProductCard } from "./ProductCard";

const PRODUCTS_PER_PAGE = 15;

function getInitialPage() {
  if (typeof window === "undefined") return 1;
  const pageParam = window.location.search ? new URLSearchParams(window.location.search).get("page") : null;
  const parsedPage = Number(pageParam);
  return Number.isFinite(parsedPage) && parsedPage > 0 ? Math.floor(parsedPage) : 1;
}

export function CategoryProductGrid({ products }: { products: Product[] }) {
  const [page, setPage] = useState(getInitialPage);
  const [activeSubcategory, setActiveSubcategory] = useState("Все");
  const gridRef = useRef<HTMLDivElement>(null);
  const subcategories = useMemo(
    () => Array.from(new Set(products.map((product) => product.subcategory).filter(Boolean) as string[])),
    [products],
  );
  const filteredProducts =
    activeSubcategory === "Все"
      ? products
      : products.filter((product) => product.subcategory === activeSubcategory);
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = Math.min(start + PRODUCTS_PER_PAGE, filteredProducts.length);
  const visibleProducts = filteredProducts.slice(start, end);

  const openPage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === currentPage) return;
    setPage(nextPage);

    const url = new URL(window.location.href);
    if (nextPage === 1) {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", String(nextPage));
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);

    requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      gridRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  };

  const selectSubcategory = (subcategory: string) => {
    setActiveSubcategory(subcategory);
    setPage(1);

    const url = new URL(window.location.href);
    url.searchParams.delete("page");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  if (products.length === 0) {
    return (
      <div className="catalog-empty">
        <p className="eyebrow dark">Скоро в каталоге</p>
        <h2>Товары появятся после добавления фотографий и описаний</h2>
      </div>
    );
  }

  return (
    <>
      <div className="category-grid-status" aria-live="polite">
        <span>Показано {start + 1}–{end} из {filteredProducts.length} товаров</span>
        {totalPages > 1 ? <span>Страница {currentPage} из {totalPages}</span> : null}
      </div>

      {subcategories.length > 1 ? (
        <div className="subcategory-filter" aria-label="Подкатегории">
          {["Все", ...subcategories].map((subcategory) => (
            <button
              className={subcategory === activeSubcategory ? "is-active" : ""}
              type="button"
              aria-pressed={subcategory === activeSubcategory}
              onClick={() => selectSubcategory(subcategory)}
              key={subcategory}
            >
              {subcategory}
            </button>
          ))}
        </div>
      ) : null}

      <div className="product-grid category-products" ref={gridRef}>
        {visibleProducts.map((product) => (
          <ProductCard product={product} href={`/product/${product.slug}`} key={product.slug} />
        ))}
      </div>

      {totalPages > 1 ? (
        <nav className="category-pagination" aria-label="Страницы категории">
          <button
            className="pagination-arrow"
            type="button"
            aria-label="Предыдущая страница"
            disabled={currentPage === 1}
            onClick={() => openPage(currentPage - 1)}
          >
            ←
          </button>

          <div className="pagination-pages">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                className={`pagination-page ${pageNumber === currentPage ? "is-active" : ""}`}
                type="button"
                aria-label={`Страница ${pageNumber}`}
                aria-current={pageNumber === currentPage ? "page" : undefined}
                onClick={() => openPage(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </button>
            ))}
          </div>

          <button
            className="pagination-arrow"
            type="button"
            aria-label="Следующая страница"
            disabled={currentPage === totalPages}
            onClick={() => openPage(currentPage + 1)}
          >
            →
          </button>
        </nav>
      ) : null}
    </>
  );
}
