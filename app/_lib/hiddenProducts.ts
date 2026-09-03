export const hiddenProductSlugs = new Set([
  "main-shkaf-liana",
  "shkaf-liana",
  "spalnya-dia-6dv",
  "stol-graciya",
  "stol-graciya-oval",
  "telegram-stol-afina-so-stulyami-suren",
  "telegram-stol-mokko-so-stulyami-mokko",
]);

export function isHiddenProductSlug(slug: string) {
  return hiddenProductSlugs.has(slug);
}
