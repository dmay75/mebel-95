export const hiddenProductSlugs = new Set([
  "main-shkaf-liana",
  "shkaf-liana",
  "telegram-stol-mokko-so-stulyami-mokko",
]);

export function isHiddenProductSlug(slug: string) {
  return hiddenProductSlugs.has(slug);
}
