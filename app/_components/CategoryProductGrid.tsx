"use client";

import { useMemo, useRef, useState } from "react";
import type { Product } from "../_lib/catalog";
import { ProductCard } from "./ProductCard";

const PRODUCTS_PER_PAGE = 15;
type SortMode = "default" | "price-asc" | "price-desc";

function moneyValue(price: string) {
  const normalized = price.replace(/\s/g, "").replace(",", ".");
  const match = normalized.match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function getInitialPage() {
  if (typeof window === "undefined") return 1;
  const pageParam = window.location.search ? new URLSearchParams(window.location.search).get("page") : null;
  const parsedPage = Number(pageParam);
  return Number.isFinite(parsedPage) && parsedPage > 0 ? Math.floor(parsedPage) : 1;
}

function getInitialSort(): SortMode {
  if (typeof window === "undefined") return "default";
  const sortParam = window.location.search ? new URLSearchParams(window.location.search).get("sort") : null;
  return sortParam === "price-asc" || sortParam === "price-desc" ? sortParam : "default";
}

function getInitialSubcategory(products: Product[]) {
  if (typeof window === "undefined") return "Все";
  const subcategoryParam = window.location.search ? new URLSearchParams(window.location.search).get("subcategory") : null;
  return subcategoryParam && products.some((product) => product.subcategory === subcategoryParam) ? subcategoryParam : "Все";
}

export function CategoryProductGrid({ products }: { products: Product[] }) {
  const [page, setPage] = useState(getInitialPage);
  const [activeSubcategory, setActiveSubcategory] = useState(() => getInitialSubcategory(products));
  const [sortMode, setSortMode] = useState<SortMode>(getInitialSort);
  const gridRef = useRef<HTMLDivElement>(null);
  const subcategories = useMemo(
    () => Array.from(new Set(products.map((product) => product.subcategory).filter(Boolean) as string[])),
    [products],
  );
  const filteredProducts = useMemo(
    () => activeSubcategory === "Все"
      ? products
      : products.filter((product) => product.subcategory === activeSubcategory),
    [activeSubcategory, products],
  );
  const sortedProducts = useMemo(() => {
    if (sortMode === "default") return filteredProducts;
    return [...filteredProducts].sort((first, second) => {
      const difference = moneyValue(first.price) - moneyValue(second.price);
      return sortMode === "price-asc" ? difference : -difference;
    });
  }, [filteredProducts, sortMode]);
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = Math.min(start + PRODUCTS_PER_PAGE, sortedProducts.length);
  const visibleProducts = sortedProducts.slice(start, end);

  const openPage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === currentPage) return;
    setPage(nextPage);

    const url = new URL(window.location.href);
    if (nextPage === 1) {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", String(nextPage));
    }
    if (sortMode === "default") {
      url.searchParams.delete("sort");
    } else {
      url.searchParams.set("sort", sortMode);
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
    if (subcategory === "Все") {
      url.searchParams.delete("subcategory");
    } else {
      url.searchParams.set("subcategory", subcategory);
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const selectSortMode = (nextSortMode: SortMode) => {
    setSortMode(nextSortMode);
    setPage(1);

    const url = new URL(window.location.href);
    url.searchParams.delete("page");
    if (nextSortMode === "default") {
      url.searchParams.delete("sort");
    } else {
      url.searchParams.set("sort", nextSortMode);
    }
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
        <span>Показано {start + 1}–{end} из {sortedProducts.length} товаров</span>
        {totalPages > 1 ? <span>Страница {currentPage} из {totalPages}</span> : null}
      </div>

      <div className="catalog-sort" aria-label="Сортировка товаров">
        <span>Сортировка</span>
        <button className={sortMode === "default" ? "is-active" : ""} type="button" aria-pressed={sortMode === "default"} onClick={() => selectSortMode("default")}>По умолчанию</button>
        <button className={sortMode === "price-asc" ? "is-active" : ""} type="button" aria-pressed={sortMode === "price-asc"} onClick={() => selectSortMode("price-asc")}>Дешевле</button>
        <button className={sortMode === "price-desc" ? "is-active" : ""} type="button" aria-pressed={sortMode === "price-desc"} onClick={() => selectSortMode("price-desc")}>Дороже</button>
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
