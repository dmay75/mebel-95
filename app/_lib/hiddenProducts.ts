export const hiddenProductSlugs = new Set([
  "main-shkaf-liana",
  "shkaf-liana",
  "stol-graciya",
  "stol-graciya-oval",
  "telegram-stol-mokko-so-stulyami-mokko",
]);

export function isHiddenProductSlug(slug: string) {
  return hiddenProductSlugs.has(slug);
}
