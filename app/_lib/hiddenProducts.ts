export const hiddenProductSlugs = new Set([
  "main-shkaf-liana",
  "shkaf-liana",
]);

export function isHiddenProductSlug(slug: string) {
  return hiddenProductSlugs.has(slug);
}
