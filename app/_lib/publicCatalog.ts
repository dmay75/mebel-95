import { Product, ProductAddOnOption, ProductColorOption, ProductVariant, products } from "./catalog";
import { isHiddenProductSlug } from "./hiddenProducts";
import { getSupabaseProducts, PublicProduct } from "./supabase";

export async function getPublicProducts(): Promise<Product[]> {
  try {
    const supabaseProducts = await getSupabaseProducts();
    if (supabaseProducts.length > 0) return supabaseProducts.map(normalizePublicProduct).filter((product) => !isHiddenProductSlug(product.slug));
  } catch {
    return products.filter((product) => !isHiddenProductSlug(product.slug));
  }

  return products.filter((product) => !isHiddenProductSlug(product.slug));
}

export async function getPublicProduct(slug: string): Promise<Product | undefined> {
  const publicProducts = await getPublicProducts();
  return publicProducts.find((product) => product.slug === slug);
}

export async function getPublicCategoryProducts(categorySlug: string): Promise<Product[]> {
  const publicProducts = await getPublicProducts();
  return publicProducts.filter((product) => product.categorySlug === categorySlug);
}

function normalizePublicProduct(product: PublicProduct): Product {
  const images = Array.isArray(product.images) ? product.images.filter((image) => typeof image === "string" && image.trim()) : [];
  const image = typeof product.image === "string" && product.image.trim() ? product.image.trim() : images[0] ?? "";
  const characteristics = Array.isArray(product.characteristics)
    ? product.characteristics.filter((item): item is [string, string] => (
      Array.isArray(item) &&
      typeof item[0] === "string" &&
      item[0].trim() !== "" &&
      typeof item[1] === "string" &&
      item[1].trim() !== ""
    ))
    : [];
  const variants = Array.isArray(product.variants)
    ? (product.variants as ProductVariant[]).filter((variant) => variant.dimensions && variant.price)
    : undefined;
  const colorOptions = Array.isArray(product.colorOptions)
    ? (product.colorOptions as ProductColorOption[]).filter((option) => option.label)
    : undefined;
  const addOns = Array.isArray(product.addOns)
    ? (product.addOns as ProductAddOnOption[]).filter((option) => option.label && option.price)
    : undefined;

  return {
    slug: product.slug,
    name: product.name,
    category: product.category,
    categorySlug: product.categorySlug,
    subcategory: product.subcategory,
    price: product.price,
    image,
    images: images.length > 0 ? images : image ? [image] : [],
    description: product.description,
    characteristics,
    variants: variants?.length ? variants : undefined,
    colors: product.colors?.filter(Boolean),
    colorOptions: colorOptions?.length ? colorOptions : undefined,
    addOns: addOns?.length ? addOns : undefined,
  };
}
