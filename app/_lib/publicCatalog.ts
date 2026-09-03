import { Product, products } from "./catalog";
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
  const image = product.image?.trim() || product.images.find(Boolean) || "";
  const images = (product.images ?? []).filter(Boolean);
  const variants = (product.variants as Product["variants"] | undefined)?.filter((variant) => variant.dimensions && variant.price);
  const colorOptions = (product.colorOptions as Product["colorOptions"] | undefined)?.filter((option) => option.label);
  const addOns = (product.addOns as Product["addOns"] | undefined)?.filter((option) => option.label && option.price);

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
    characteristics: product.characteristics.filter(([label, value]) => label.trim() && value.trim()),
    variants: variants?.length ? variants : undefined,
    colors: product.colors?.filter(Boolean),
    colorOptions: colorOptions?.length ? colorOptions : undefined,
    addOns: addOns?.length ? addOns : undefined,
  };
}
