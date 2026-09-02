import { Product, products } from "./catalog";
import { getSupabaseProducts, PublicProduct } from "./supabase";

export async function getPublicProducts(): Promise<Product[]> {
  try {
    const supabaseProducts = await getSupabaseProducts();
    if (supabaseProducts.length > 0) return supabaseProducts.map(normalizePublicProduct);
  } catch {
    return products;
  }

  return products;
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
  return {
    slug: product.slug,
    name: product.name,
    category: product.category,
    categorySlug: product.categorySlug,
    subcategory: product.subcategory,
    price: product.price,
    image: product.image,
    images: product.images.length > 0 ? product.images : product.image ? [product.image] : [],
    description: product.description,
    characteristics: product.characteristics,
    variants: product.variants as Product["variants"],
    colors: product.colors,
    colorOptions: product.colorOptions as Product["colorOptions"],
    addOns: product.addOns as Product["addOns"],
  };
}
