export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: string;
  image: string;
  images: string[];
  description: string;
  characteristics: Array<[string, string]>;
  variants?: ProductVariant[];
  colors?: string[];
  colorOptions?: ProductColorOption[];
  addOns?: ProductAddOnOption[];
  subcategory?: string;
};

export type ProductVariant = {
  label: string;
  dimensions: string;
  price: string;
  image?: string;
};

export type ProductColorOption = {
  label: string;
  image?: string;
};

export type ProductAddOnOption = {
  label: string;
  price: string;
};

export const categories = [
  { slug: "krovati", name: "Кровати", image: "/assets/bed-verona.jpg" },
  { slug: "spalnye-garnitury", name: "Спальные гарнитуры", image: "/assets/bedroom-sets-category.jpg" },
  { slug: "shkafy", name: "Шкафы", image: "/assets/category-wardrobe-full.png" },
  { slug: "prihozhie", name: "Прихожие", image: "/assets/kids-kiko.jpg" },
  { slug: "tumby", name: "Тумбы", image: "/assets/living-linea.jpg" },
  { slug: "myagkaya-mebel", name: "Мягкая мебель", image: "/assets/sofa-milano.jpg" },
  { slug: "stoly-i-stulya", name: "Столы и стулья", image: "/assets/table-monaco.jpg" },
  { slug: "kuhonnye-garnitury", name: "Кухонные гарнитуры", image: "/assets/kitchen-garnitury-category.png" },
] as const;

const lapkaGallery = ["/assets/table-lapka-1.jpg", "/assets/table-lapka-2.jpg", "/assets/table-lapka-3.jpg", "/assets/table-lapka-4.jpg"];
const lapkaMarbleGallery = ["/assets/table-lapka-marble-1.jpg", "/assets/table-lapka-marble-2.jpg", "/assets/table-lapka-marble-3.jpg"];
const lapkaWalnutGallery = ["/assets/table-lapka-walnut-1.jpg", "/assets/table-lapka-walnut-2.jpg", "/assets/table-lapka-walnut-3.jpg"];
const roundLapkaGallery = ["/assets/table-lapka-round-1.jpg", "/assets/table-lapka-round-2.jpg", "/assets/table-lapka-round-3.jpg"];
const versaceGallery = ["/assets/table-versace-1.jpg", "/assets/table-versace-2.jpg", "/assets/table-versace-3.jpg"];
const rozaGallery = ["/assets/table-roza-1.jpg", "/assets/table-roza-2.jpg"];
const rozaWalnutGallery = ["/assets/table-roza-walnut-1.jpg", "/assets/table-roza-walnut-2.jpg", "/assets/table-roza-walnut-3.jpg"];
const rozaGoldGallery = ["/assets/table-roza-gold-1.jpg", "/assets/table-roza-gold-2.jpg", "/assets/table-roza-gold-3.jpg"];
const rozaPalmaGallery = ["/assets/table-roza-palma-1.jpg", "/assets/table-roza-palma-2.jpg"];
const rozaPalmaMarbleGallery = ["/assets/table-roza-palma-marble-1.jpg"];
const infinityGallery = ["/assets/table-infinity-1.jpg", "/assets/table-infinity-2.jpg"];
const grandGallery = ["/assets/table-grand-1.jpg"];
const grandMarbleGallery = ["/assets/table-grand-marble-1.jpg", "/assets/table-grand-marble-2.jpg", "/assets/table-grand-marble-3.jpg"];
const goldGallery = ["/assets/table-gold-1.jpg", "/assets/table-gold-2.jpg", "/assets/table-gold-3.jpg"];
const roundGoldGallery = ["/assets/table-gold-round-1.jpg", "/assets/table-gold-round-2.jpg", "/assets/table-gold-round-3.jpg", "/assets/table-gold-round-4.jpg"];
const classicPremiumGallery = ["/assets/table-classic-premium-1.jpg"];
const classicPremiumGoldGallery = ["/assets/table-classic-premium-2.jpg"];
const roundWhiteGallery = ["/assets/table-round-white-1.jpg"];
const roundBlueGallery = ["/assets/table-round-blue-1.jpg"];
const roundPalmaGallery = ["/assets/table-round-palma-1.jpg"];
const roundSilverGallery = ["/assets/table-round-silver-1.jpg"];
const roundGoldSoftGallery = ["/assets/table-round-gold-soft-1.jpg"];
const roundWalnutGallery = ["/assets/table-round-walnut-1.jpg"];
const roundCreamLaceGallery = ["/assets/table-round-cream-lace-1.jpg"];
const roundSilverLapkaGallery = ["/assets/table-round-silver-lapka-1.jpg"];
const afinaGallery = ["/assets/table-afina-1.jpg", "/assets/table-afina-2.jpg"];
const versalGallery = ["/assets/table-versal-1.jpg"];
const afinaWhiteGallery = ["/assets/table-afina-white-1.jpg", "/assets/table-afina-white-2.jpg", "/assets/table-afina-white-3.jpg"];
const ingolfGallery = ["/assets/table-ingolf-1.jpg", "/assets/table-ingolf-2.jpg"];
const imperiyaGallery = ["/assets/table-imperiya-1.jpg", "/assets/table-imperiya-2.jpg"];
const rafaelloMiniSheikhGallery = ["/assets/table-rafaello-mini-sheikh-1.jpg"];
const goldSilikGallery = ["/assets/table-gold-silik-1.jpg"];
const goldVeneciyaGallery = ["/assets/table-gold-veneciya-1.jpg"];
const goldDomaskoGallery = ["/assets/table-gold-domasko-1.jpg"];
const goldSheikhGallery = ["/assets/table-gold-sheikh-1.jpg"];
const borokkoSilikGallery = ["/assets/table-borokko-silik-1.jpg"];
const goldSheikh8Gallery = ["/assets/table-gold-sheikh-8-1.jpg"];
const goldSheikh8MaxGallery = ["/assets/table-gold-sheikh-8-max-1.jpg"];
const sudeGallery = ["/assets/table-sude-1.jpg", "/assets/table-sude-2.jpg", "/assets/table-sude-3.jpg", "/assets/table-sude-4.jpg"];
const graciyaGallery = ["/assets/table-graciya-1.jpg", "/assets/table-graciya-2.jpg", "/assets/table-graciya-3.jpg"];
const graciyaOvalGallery = ["/assets/table-graciya-oval-1.jpg", "/assets/table-graciya-oval-2.jpg", "/assets/table-graciya-oval-3.jpg"];
const bostonGallery = ["/assets/table-boston-1.jpg", "/assets/table-boston-2.jpg", "/assets/table-boston-3.jpg"];
const goldRoundWalnutGallery = ["/assets/table-gold-round-walnut-1.jpg", "/assets/table-gold-round-walnut-2.jpg", "/assets/table-gold-round-walnut-3.jpg"];
const tamilaGallery = ["/assets/table-tamila-1.jpg", "/assets/table-tamila-2.jpg", "/assets/table-tamila-3.jpg"];
const goldMokkoGallery = ["/assets/table-gold-mokko-1.jpg", "/assets/table-gold-mokko-2.jpg", "/assets/table-gold-mokko-3.jpg"];
const ameliaGallery = ["/assets/table-amelia-1.jpg", "/assets/table-amelia-2.jpg", "/assets/table-amelia-3.jpg"];
const barokkoModernGallery = ["/assets/table-barokko-modern-1.jpg", "/assets/table-barokko-modern-2.jpg", "/assets/table-barokko-modern-3.jpg"];
const kitchenEmiliyaGallery = ["/assets/kitchen-emiliya-1.jpg"];
const kitchenFionaGallery = ["/assets/kitchen-fiona-1.jpg"];
const kitchenBelladjoGallery = ["/assets/kitchen-belladjo-1.jpg"];
const kitchenGarvardGallery = ["/assets/kitchen-garvard-1.jpg"];
const kitchenGarvardCornerGallery = ["/assets/kitchen-garvard-corner-1.jpg"];
const kitchenMarianGallery = ["/assets/kitchen-marian-1.jpg", "/assets/kitchen-marian-2.jpg", "/assets/kitchen-marian-3.jpg"];
const kitchenAstoriyaGallery = ["/assets/kitchen-astoriya-340-1.jpg", "/assets/kitchen-astoriya-340-2.jpg", "/assets/kitchen-astoriya-340-3.jpg"];
const kitchenNaomiGallery = ["/assets/kitchen-naomi-1800-1200-1.jpg"];
const kitchenDzhulettaGallery = ["/assets/kitchen-dzhuletta-360-1.jpg"];
const kitchenMarinaGallery = ["/assets/kitchen-marina-360-1.jpg", "/assets/kitchen-marina-360-2.jpg"];
const kitchenVenetsiyaGallery = [
  "/assets/kitchen-venetsiya-1.jpg",
  "/assets/kitchen-venetsiya-2.jpg",
  "/assets/kitchen-venetsiya-3.jpg",
  "/assets/kitchen-venetsiya-ivory-gold-1.jpg",
  "/assets/kitchen-venetsiya-ivory-gold-large.jpg",
];
const kitchenPalermoGallery = ["/assets/kitchen-palermo-1.jpg"];
const kitchenPalermoLargeGallery = ["/assets/kitchen-palermo-350-410-1.jpg"];
const kitchenAzaliyaGallery = ["/assets/kitchen-azaliya-240-1.jpg"];
const kitchenAzaliyaLuxGallery = ["/assets/kitchen-azaliya-lux-1.jpg", "/assets/kitchen-azaliya-lux-2.jpg"];
const kitchenArtGallery = ["/assets/kitchen-art-200-1.jpg"];
const kitchenAlbinaGallery = ["/assets/kitchen-albina-1.jpg"];
const kitchenLuxeGallery = ["/assets/kitchen-luxe-1.jpg"];
const bedroomSetMayaGallery = [
  "/assets/bedroom-set-maya-1.jpg",
  "/assets/bedroom-set-maya-2.jpg",
  "/assets/bedroom-set-maya-3.jpg",
];
const bedroomSetAfroditaGallery = ["/assets/bedroom-set-afrodita-1.jpg"];
const bedroomSetHannaGallery = ["/assets/bedroom-set-hanna-1.jpg"];
const bedroomSetMagdalenaGallery = ["/assets/bedroom-set-magdalena-1.jpg"];
const bedroomSetAleksandriyaGallery = [
  "/assets/bedroom-set-aleksandriya-1.jpg",
  "/assets/bedroom-set-aleksandriya-2.jpg",
  "/assets/bedroom-set-aleksandriya-3.jpg",
  "/assets/bedroom-set-aleksandriya-4.jpg",
  "/assets/bedroom-set-aleksandriya-5.jpg",
  "/assets/bedroom-set-aleksandriya-6.jpg",
];
const tvTumbaMilanGallery = ["/assets/tv-tumba-milan-1.jpg"];
const tvTumbaMarkiza2Gallery = ["/assets/tv-tumba-markiza-2-1.jpg"];
const tvTumbaSamuelGallery = ["/assets/tv-tumba-samuel-1.jpg"];
const tvTumbaRioGallery = [
  "/assets/tv-tumba-rio-1.jpg",
  "/assets/tv-tumba-rio-2.jpg",
];
const buffet150Gallery = ["/assets/buffet-150-1.jpg", "/assets/buffet-150-2.jpg"];
const buffet140Gallery = ["/assets/buffet-140-1.jpg", "/assets/buffet-140-2.jpg"];
const hallwayNeoGloriaGallery = [
  "/assets/hallway-neo-gloria-1.jpg",
  "/assets/hallway-neo-gloria-2.jpg",
  "/assets/hallway-neo-gloria-3.jpg",
];
const hallwayNeoGloriaBeigeGallery = [
  "/assets/hallway-neo-gloria-beige-1.jpg",
  "/assets/hallway-neo-gloria-beige-2.jpg",
  "/assets/hallway-neo-gloria-beige-3.jpg",
];
const hallwayNeoGloria2WhiteGallery = [
  "/assets/hallway-neo-gloria-2-white-1.jpg",
  "/assets/hallway-neo-gloria-2-white-2.jpg",
];
const hallwayGloria250Gallery = [
  "/assets/hallway-gloria-250-1.jpg",
  "/assets/hallway-gloria-250-2.jpg",
];
const hallwayGloria250BeigeWideGallery = ["/assets/hallway-gloria-250-beige-wide-1.jpg"];
const hallwayGloria250WhiteWideGallery = ["/assets/hallway-gloria-250-white-wide-1.jpg"];
const hallwayGloria250WhiteSilverGallery = ["/assets/hallway-gloria-250-white-silver-1.jpg"];
const hallwayGloria2Gallery = ["/assets/hallway-gloria-2-1.jpg"];
const hallwayGloria2NeoGallery = ["/assets/hallway-gloria-2-neo-1.jpg"];
const hallwayGloria2NeoMirrorGallery = ["/assets/hallway-gloria-2-neo-2-1.jpg"];
const hallwayGloria5Gallery = ["/assets/hallway-gloria-5-3d-1.jpg"];
const hallwayGloria5ClassicGallery = ["/assets/hallway-gloria-5-classic-1.jpg"];
const hallwayGloria5WhiteSilverGallery = ["/assets/hallway-gloria-5-white-silver-1.jpg"];
const hallwayGloria5MaxVanillaGallery = [
  "/assets/hallway-gloria-5-max-vanilla-1.jpg",
  "/assets/hallway-gloria-5-max-vanilla-2.jpg",
];
const hallwayGloria5NeoGrayGallery = ["/assets/hallway-gloria-5-neo-gray-1.jpg"];
const hallwayGloria6Gallery = ["/assets/hallway-gloria-6-1.jpg"];
const hallwayGloria6NeoGallery = ["/assets/hallway-gloria-6-neo-1.jpg"];
const hallwayGloria8Gallery = [
  "/assets/hallway-gloria-8-1.jpg",
  "/assets/hallway-gloria-8-beige-1.jpg",
  "/assets/hallway-gloria-8-white-2.jpg",
];
const hallwayGloria8WhiteNewGallery = [
  "/assets/hallway-gloria-8-white-new-1.png",
  "/assets/hallway-gloria-8-white-new-2.jpg",
];
const hallwayGloria90Gallery = ["/assets/hallway-gloria-90-1.jpg"];
const hallwayGloria210WhiteGallery = ["/assets/hallway-gloria-210-white-1.jpg"];
const hallwayGloria210WhiteBlackGallery = [
  "/assets/hallway-gloria-210-white-black-1.jpg",
  "/assets/hallway-gloria-210-white-black-2.jpg",
];
const hallwayGloriaNeo90Gallery = ["/assets/hallway-gloria-neo-90-1.jpg"];
const hallwayGloriaCornerGallery = ["/assets/hallway-gloria-corner-1.jpg"];
const hallwayNovellaGallery = [
  "/assets/hallway-novella-1.jpg",
  "/assets/hallway-novella-2.jpg",
];
const hallwayViolettaGallery = ["/assets/hallway-violetta-1.png"];
const hallwayMilanGallery = [
  "/assets/hallway-milan-gray-1.jpg",
  "/assets/hallway-milan-gray-2.jpg",
  "/assets/hallway-milan-white-1.jpg",
];
const hallwaySairinaGallery = ["/assets/hallway-sairina-1.jpg"];
const hallwayLotosGallery = [
  "/assets/hallway-lotos-1.jpg",
  "/assets/hallway-lotos-2.jpg",
];
const hallwayPragaGallery = [
  "/assets/hallway-praga-1.jpg",
  "/assets/hallway-praga-2.jpg",
];

const telegramTableChairGallery001 = ["/assets/telegram-table-chair-001-1.jpg","/assets/telegram-table-chair-001-2.jpg","/assets/telegram-table-chair-001-3.jpg","/assets/telegram-table-chair-001-4.jpg"];
const telegramTableChairGallery002 = ["/assets/telegram-table-chair-002-1.jpg","/assets/telegram-table-chair-002-2.jpg","/assets/telegram-table-chair-002-3.jpg","/assets/telegram-table-chair-002-4.jpg"];
const telegramTableChairGallery003 = ["/assets/telegram-table-chair-003-1.jpg","/assets/telegram-table-chair-003-2.jpg","/assets/telegram-table-chair-003-3.jpg","/assets/telegram-table-chair-003-4.jpg"];
const telegramTableChairGallery004 = ["/assets/telegram-table-chair-004-1.jpg","/assets/telegram-table-chair-004-2.jpg","/assets/telegram-table-chair-004-3.jpg","/assets/telegram-table-chair-004-4.jpg"];
const telegramTableChairGallery005 = ["/assets/telegram-table-chair-005-1.jpg","/assets/telegram-table-chair-005-2.jpg","/assets/telegram-table-chair-005-3.jpg","/assets/telegram-table-chair-005-4.jpg"];
const telegramTableChairGallery006 = ["/assets/telegram-table-chair-006-1.jpg","/assets/telegram-table-chair-006-2.jpg","/assets/telegram-table-chair-006-3.jpg","/assets/telegram-table-chair-006-4.jpg"];
const telegramTableChairGallery007 = ["/assets/telegram-table-chair-007-1.jpg","/assets/telegram-table-chair-007-2.jpg","/assets/telegram-table-chair-007-3.jpg","/assets/telegram-table-chair-007-4.jpg"];
const telegramTableChairGallery008 = ["/assets/telegram-table-chair-008-1.jpg","/assets/telegram-table-chair-008-2.jpg","/assets/telegram-table-chair-008-3.jpg"];
const telegramTableChairGallery009 = ["/assets/telegram-table-chair-009-1.jpg","/assets/telegram-table-chair-009-2.jpg"];
const telegramTableChairGallery010 = ["/assets/telegram-table-chair-010-1.jpg","/assets/telegram-table-chair-010-2.jpg","/assets/telegram-table-chair-010-3.jpg","/assets/telegram-table-chair-010-4.jpg"];
const telegramTableChairGallery011 = ["/assets/telegram-table-chair-011-1.jpg","/assets/telegram-table-chair-011-2.jpg","/assets/telegram-table-chair-011-3.jpg","/assets/telegram-table-chair-011-4.jpg"];
const telegramTableChairGallery012 = ["/assets/telegram-table-chair-012-1.jpg","/assets/telegram-table-chair-012-2.jpg","/assets/telegram-table-chair-012-3.jpg","/assets/telegram-table-chair-012-4.jpg"];
const telegramTableChairGallery013 = ["/assets/telegram-table-chair-013-1.jpg","/assets/telegram-table-chair-013-2.jpg","/assets/telegram-table-chair-013-3.jpg","/assets/telegram-table-chair-013-4.jpg"];
const telegramTableChairGallery014 = ["/assets/telegram-table-chair-014-1.jpg","/assets/telegram-table-chair-014-2.jpg","/assets/telegram-table-chair-014-3.jpg","/assets/telegram-table-chair-014-4.jpg"];
const telegramTableChairGallery015 = ["/assets/telegram-table-chair-015-1.jpg","/assets/telegram-table-chair-015-2.jpg","/assets/telegram-table-chair-015-3.jpg","/assets/telegram-table-chair-015-4.jpg"];
const telegramTableChairGallery016 = ["/assets/telegram-table-chair-016-1.jpg","/assets/telegram-table-chair-016-2.jpg","/assets/telegram-table-chair-016-3.jpg","/assets/telegram-table-chair-016-4.jpg"];
const telegramTableChairGallery017 = ["/assets/telegram-table-chair-017-1.jpg","/assets/telegram-table-chair-017-2.jpg","/assets/telegram-table-chair-017-3.jpg","/assets/telegram-table-chair-017-4.jpg"];
const telegramTableChairGallery018 = ["/assets/telegram-table-chair-018-1.jpg","/assets/telegram-table-chair-018-2.jpg","/assets/telegram-table-chair-018-3.jpg","/assets/telegram-table-chair-018-4.jpg"];
const telegramTableChairGallery019 = ["/assets/telegram-table-chair-019-1.jpg","/assets/telegram-table-chair-019-2.jpg","/assets/telegram-table-chair-019-3.jpg","/assets/telegram-table-chair-019-4.jpg"];
const telegramTableChairGallery020 = ["/assets/telegram-table-chair-020-1.jpg","/assets/telegram-table-chair-020-2.jpg","/assets/telegram-table-chair-020-3.jpg","/assets/telegram-table-chair-020-4.jpg"];
const telegramTableChairGallery021 = ["/assets/telegram-table-chair-021-1.jpg","/assets/telegram-table-chair-021-2.jpg","/assets/telegram-table-chair-021-3.jpg","/assets/telegram-table-chair-021-4.jpg"];
const telegramTableChairGallery022 = ["/assets/telegram-table-chair-022-1.jpg","/assets/telegram-table-chair-022-2.jpg","/assets/telegram-table-chair-022-3.jpg"];
const telegramTableChairGallery023 = ["/assets/telegram-table-chair-023-1.jpg","/assets/telegram-table-chair-023-2.jpg","/assets/telegram-table-chair-023-3.jpg"];
const telegramTableChairGallery024 = ["/assets/telegram-table-chair-024-1.jpg","/assets/telegram-table-chair-024-2.jpg","/assets/telegram-table-chair-024-3.jpg","/assets/telegram-table-chair-024-4.jpg"];
const telegramTableChairGallery025 = ["/assets/telegram-table-chair-025-1.jpg","/assets/telegram-table-chair-025-2.jpg","/assets/telegram-table-chair-025-3.jpg","/assets/telegram-table-chair-025-4.jpg"];
const telegramTableChairGallery026 = ["/assets/telegram-table-chair-026-1.jpg","/assets/telegram-table-chair-026-2.jpg","/assets/telegram-table-chair-026-3.jpg","/assets/telegram-table-chair-026-4.jpg"];
const telegramTableChairGallery027 = ["/assets/telegram-table-chair-027-1.jpg","/assets/telegram-table-chair-027-2.jpg","/assets/telegram-table-chair-027-3.jpg","/assets/telegram-table-chair-027-4.jpg"];
const telegramTableChairGallery028 = ["/assets/telegram-table-chair-028-1.jpg","/assets/telegram-table-chair-028-2.jpg","/assets/telegram-table-chair-028-3.jpg","/assets/telegram-table-chair-028-4.jpg"];
const telegramTableChairGallery029 = ["/assets/telegram-table-chair-029-1.jpg","/assets/telegram-table-chair-029-2.jpg","/assets/telegram-table-chair-029-3.jpg","/assets/telegram-table-chair-029-4.jpg"];
const telegramTableChairGallery030 = ["/assets/telegram-table-chair-030-1.jpg","/assets/telegram-table-chair-030-2.jpg","/assets/telegram-table-chair-030-3.jpg","/assets/telegram-table-chair-030-4.jpg"];
const telegramTableChairGallery031 = ["/assets/telegram-table-chair-031-1.jpg","/assets/telegram-table-chair-031-2.jpg","/assets/telegram-table-chair-031-3.jpg","/assets/telegram-table-chair-031-4.jpg"];
const telegramTableChairGallery032 = ["/assets/telegram-table-chair-032-1.jpg","/assets/telegram-table-chair-032-2.jpg","/assets/telegram-table-chair-032-3.jpg","/assets/telegram-table-chair-032-4.jpg"];
const telegramTableChairGallery033 = ["/assets/telegram-table-chair-033-1.jpg","/assets/telegram-table-chair-033-2.jpg","/assets/telegram-table-chair-033-3.jpg","/assets/telegram-table-chair-033-4.jpg"];
const telegramTableChairGallery034 = ["/assets/telegram-table-chair-034-1.jpg","/assets/telegram-table-chair-034-2.jpg","/assets/telegram-table-chair-034-3.jpg","/assets/telegram-table-chair-034-4.jpg"];
const telegramTableChairGallery035 = ["/assets/telegram-table-chair-035-1.jpg","/assets/telegram-table-chair-035-2.jpg","/assets/telegram-table-chair-035-3.jpg","/assets/telegram-table-chair-035-4.jpg"];
const telegramTableChairGallery036 = ["/assets/telegram-table-chair-036-1.jpg","/assets/telegram-table-chair-036-2.jpg","/assets/telegram-table-chair-036-3.jpg","/assets/telegram-table-chair-036-4.jpg"];
const telegramTableChairGallery037 = ["/assets/telegram-table-chair-037-1.jpg","/assets/telegram-table-chair-037-2.jpg","/assets/telegram-table-chair-037-3.jpg","/assets/telegram-table-chair-037-4.jpg"];
const telegramTableChairGallery038 = ["/assets/telegram-table-chair-038-1.jpg","/assets/telegram-table-chair-038-2.jpg","/assets/telegram-table-chair-038-3.jpg","/assets/telegram-table-chair-038-4.jpg"];
const telegramTableChairGallery039 = ["/assets/telegram-table-chair-039-1.jpg","/assets/telegram-table-chair-039-2.jpg","/assets/telegram-table-chair-039-3.jpg","/assets/telegram-table-chair-039-4.jpg"];
const telegramTableChairGallery040 = ["/assets/telegram-table-chair-040-1.jpg","/assets/telegram-table-chair-040-2.jpg","/assets/telegram-table-chair-040-3.jpg","/assets/telegram-table-chair-040-4.jpg"];
const telegramTableChairGallery041 = ["/assets/telegram-table-chair-041-1.jpg","/assets/telegram-table-chair-041-2.jpg","/assets/telegram-table-chair-041-3.jpg","/assets/telegram-table-chair-041-4.jpg"];
const telegramTableChairGallery042 = ["/assets/telegram-table-chair-042-1.jpg","/assets/telegram-table-chair-042-2.jpg","/assets/telegram-table-chair-042-3.jpg","/assets/telegram-table-chair-042-4.jpg"];
const telegramTableChairGallery043 = ["/assets/telegram-table-chair-043-1.jpg","/assets/telegram-table-chair-043-2.jpg","/assets/telegram-table-chair-043-3.jpg","/assets/telegram-table-chair-043-4.jpg"];
const telegramTableChairGallery044 = ["/assets/telegram-table-chair-044-1.jpg","/assets/telegram-table-chair-044-2.jpg","/assets/telegram-table-chair-044-3.jpg","/assets/telegram-table-chair-044-4.jpg"];
const telegramTableChairGallery045 = ["/assets/telegram-table-chair-045-1.jpg","/assets/telegram-table-chair-045-2.jpg","/assets/telegram-table-chair-045-3.jpg","/assets/telegram-table-chair-045-4.jpg"];
const telegramTableChairGallery046 = ["/assets/telegram-table-chair-046-1.jpg","/assets/telegram-table-chair-046-2.jpg","/assets/telegram-table-chair-046-3.jpg","/assets/telegram-table-chair-046-4.jpg"];
const telegramTableChairGallery047 = ["/assets/telegram-table-chair-047-1.jpg","/assets/telegram-table-chair-047-2.jpg","/assets/telegram-table-chair-047-3.jpg","/assets/telegram-table-chair-047-4.jpg"];
const telegramTableChairGallery048 = ["/assets/telegram-table-chair-048-1.jpg","/assets/telegram-table-chair-048-2.jpg","/assets/telegram-table-chair-048-3.jpg","/assets/telegram-table-chair-048-4.jpg"];
const telegramTableChairGallery049 = ["/assets/telegram-table-chair-049-1.jpg","/assets/telegram-table-chair-049-2.jpg","/assets/telegram-table-chair-049-3.jpg","/assets/telegram-table-chair-049-4.jpg"];
const telegramTableChairGallery050 = ["/assets/telegram-table-chair-050-1.jpg","/assets/telegram-table-chair-050-2.jpg","/assets/telegram-table-chair-050-3.jpg","/assets/telegram-table-chair-050-4.jpg"];
const telegramTableChairGallery051 = ["/assets/telegram-table-chair-051-1.jpg","/assets/telegram-table-chair-051-2.jpg","/assets/telegram-table-chair-051-3.jpg","/assets/telegram-table-chair-051-4.jpg"];
const telegramTableChairGallery052 = ["/assets/telegram-table-chair-052-1.jpg","/assets/telegram-table-chair-052-2.jpg","/assets/telegram-table-chair-052-3.jpg"];
const telegramTableChairGallery053 = ["/assets/telegram-table-chair-053-1.jpg","/assets/telegram-table-chair-053-2.jpg","/assets/telegram-table-chair-053-3.jpg"];
const telegramTableChairGallery054 = ["/assets/telegram-table-chair-054-1.jpg","/assets/telegram-table-chair-054-2.jpg","/assets/telegram-table-chair-054-3.jpg","/assets/telegram-table-chair-054-4.jpg"];
const telegramTableChairGallery055 = ["/assets/telegram-table-chair-055-1.jpg","/assets/telegram-table-chair-055-2.jpg","/assets/telegram-table-chair-055-3.jpg","/assets/telegram-table-chair-055-4.jpg"];
const telegramTableChairGallery056 = ["/assets/telegram-table-chair-056-1.jpg","/assets/telegram-table-chair-056-2.jpg","/assets/telegram-table-chair-056-3.jpg","/assets/telegram-table-chair-056-4.jpg"];
const telegramTableChairGallery057 = ["/assets/telegram-table-chair-057-1.jpg","/assets/telegram-table-chair-057-2.jpg","/assets/telegram-table-chair-057-3.jpg","/assets/telegram-table-chair-057-4.jpg"];
const telegramTableChairGallery058 = ["/assets/telegram-table-chair-058-1.jpg","/assets/telegram-table-chair-058-2.jpg","/assets/telegram-table-chair-058-3.jpg","/assets/telegram-table-chair-058-4.jpg"];
const telegramTableChairGallery059 = ["/assets/telegram-table-chair-059-1.jpg","/assets/telegram-table-chair-059-2.jpg","/assets/telegram-table-chair-059-3.jpg","/assets/telegram-table-chair-059-4.jpg"];
const telegramTableChairGallery060 = ["/assets/telegram-table-chair-060-1.jpg","/assets/telegram-table-chair-060-2.jpg","/assets/telegram-table-chair-060-3.jpg","/assets/telegram-table-chair-060-4.jpg"];
const telegramTableChairGallery061 = ["/assets/telegram-table-chair-061-1.jpg","/assets/telegram-table-chair-061-2.jpg","/assets/telegram-table-chair-061-3.jpg","/assets/telegram-table-chair-061-4.jpg"];
const telegramTableChairGallery062 = ["/assets/telegram-table-chair-062-1.jpg","/assets/telegram-table-chair-062-2.jpg","/assets/telegram-table-chair-062-3.jpg","/assets/telegram-table-chair-062-4.jpg"];
const telegramTableChairGallery063 = ["/assets/telegram-table-chair-063-1.jpg","/assets/telegram-table-chair-063-2.jpg","/assets/telegram-table-chair-063-3.jpg","/assets/telegram-table-chair-063-4.jpg"];
const telegramTableChairGallery064 = ["/assets/telegram-table-chair-064-1.jpg","/assets/telegram-table-chair-064-2.jpg","/assets/telegram-table-chair-064-3.jpg","/assets/telegram-table-chair-064-4.jpg"];
const telegramTableChairGallery065 = ["/assets/telegram-table-chair-065-1.jpg","/assets/telegram-table-chair-065-2.jpg","/assets/telegram-table-chair-065-3.jpg","/assets/telegram-table-chair-065-4.jpg"];
const telegramTableChairGallery066 = ["/assets/telegram-table-chair-066-1.jpg","/assets/telegram-table-chair-066-2.jpg","/assets/telegram-table-chair-066-3.jpg","/assets/telegram-table-chair-066-4.jpg"];
const telegramTableChairGallery067 = ["/assets/telegram-table-chair-067-1.jpg","/assets/telegram-table-chair-067-2.jpg"];
const telegramTableChairGallery068 = ["/assets/telegram-table-chair-068-1.jpg","/assets/telegram-table-chair-068-2.jpg","/assets/telegram-table-chair-068-3.jpg","/assets/telegram-table-chair-068-4.jpg"];
const telegramTableChairGallery069 = ["/assets/telegram-table-chair-069-1.jpg","/assets/telegram-table-chair-069-2.jpg"];
const telegramTableChairGallery070 = ["/assets/telegram-table-chair-070-1.jpg","/assets/telegram-table-chair-070-2.jpg","/assets/telegram-table-chair-070-3.jpg","/assets/telegram-table-chair-070-4.jpg"];
const telegramTableChairGallery071 = ["/assets/telegram-table-chair-071-1.jpg"];
const telegramTableChairGallery072 = ["/assets/telegram-table-chair-072-1.jpg","/assets/telegram-table-chair-072-2.jpg","/assets/telegram-table-chair-072-3.jpg","/assets/telegram-table-chair-072-4.jpg"];
const telegramTableChairGallery073 = ["/assets/telegram-table-chair-073-1.jpg","/assets/telegram-table-chair-073-2.jpg","/assets/telegram-table-chair-073-3.jpg","/assets/telegram-table-chair-073-4.jpg"];
const telegramTableChairGallery074 = ["/assets/telegram-table-chair-074-1.jpg","/assets/telegram-table-chair-074-2.jpg","/assets/telegram-table-chair-074-3.jpg","/assets/telegram-table-chair-074-4.jpg"];
const telegramTableChairGallery075 = ["/assets/telegram-table-chair-075-1.jpg","/assets/telegram-table-chair-075-2.jpg","/assets/telegram-table-chair-075-3.jpg","/assets/telegram-table-chair-075-4.jpg"];
const telegramTableChairGallery076 = ["/assets/telegram-table-chair-076-1.jpg","/assets/telegram-table-chair-076-2.jpg","/assets/telegram-table-chair-076-3.jpg","/assets/telegram-table-chair-076-4.jpg"];
const telegramTableChairGallery077 = ["/assets/telegram-table-chair-077-1.jpg","/assets/telegram-table-chair-077-2.jpg","/assets/telegram-table-chair-077-3.jpg","/assets/telegram-table-chair-077-4.jpg"];
const telegramTableChairGallery078 = ["/assets/telegram-table-chair-078-1.jpg","/assets/telegram-table-chair-078-2.jpg","/assets/telegram-table-chair-078-3.jpg","/assets/telegram-table-chair-078-4.jpg"];
const telegramTableChairGallery079 = ["/assets/telegram-table-chair-079-1.jpg"];
const telegramTableChairGallery080 = ["/assets/telegram-table-chair-080-1.jpg","/assets/telegram-table-chair-080-2.jpg","/assets/telegram-table-chair-080-3.jpg","/assets/telegram-table-chair-080-4.jpg"];
const telegramTableChairGallery081 = ["/assets/telegram-table-chair-081-1.jpg","/assets/telegram-table-chair-081-2.jpg","/assets/telegram-table-chair-081-3.jpg","/assets/telegram-table-chair-081-4.jpg"];
const telegramTableChairGallery082 = ["/assets/telegram-table-chair-082-1.jpg"];
const telegramTableChairGallery083 = ["/assets/telegram-table-chair-083-1.jpg"];
const telegramTableChairGallery084 = ["/assets/telegram-table-chair-084-1.jpg","/assets/telegram-table-chair-084-2.jpg","/assets/telegram-table-chair-084-3.jpg","/assets/telegram-table-chair-084-4.jpg"];
const telegramTableChairGallery085 = ["/assets/telegram-table-chair-085-1.jpg","/assets/telegram-table-chair-085-2.jpg","/assets/telegram-table-chair-085-3.jpg","/assets/telegram-table-chair-085-4.jpg"];
const telegramTableChairGallery086 = ["/assets/telegram-table-chair-086-1.jpg","/assets/telegram-table-chair-086-2.jpg","/assets/telegram-table-chair-086-3.jpg","/assets/telegram-table-chair-086-4.jpg"];
const telegramTableChairGallery087 = ["/assets/telegram-table-chair-087-1.jpg","/assets/telegram-table-chair-087-2.jpg","/assets/telegram-table-chair-087-3.jpg","/assets/telegram-table-chair-087-4.jpg"];
const telegramTableChairGallery088 = ["/assets/telegram-table-chair-088-1.jpg","/assets/telegram-table-chair-088-2.jpg","/assets/telegram-table-chair-088-3.jpg","/assets/telegram-table-chair-088-4.jpg"];
const telegramTableChairGallery089 = ["/assets/telegram-table-chair-089-1.jpg","/assets/telegram-table-chair-089-2.jpg","/assets/telegram-table-chair-089-3.jpg","/assets/telegram-table-chair-089-4.jpg"];
const telegramTableChairGallery090 = ["/assets/telegram-table-chair-090-1.jpg","/assets/telegram-table-chair-090-2.jpg","/assets/telegram-table-chair-090-3.jpg","/assets/telegram-table-chair-090-4.jpg"];
const telegramTableChairGallery091 = ["/assets/telegram-table-chair-091-1.jpg","/assets/telegram-table-chair-091-2.jpg","/assets/telegram-table-chair-091-3.jpg","/assets/telegram-table-chair-091-4.jpg"];
const telegramTableChairGallery092 = ["/assets/telegram-table-chair-092-1.jpg","/assets/telegram-table-chair-092-2.jpg","/assets/telegram-table-chair-092-3.jpg","/assets/telegram-table-chair-092-4.jpg"];
const telegramTableChairGallery093 = ["/assets/telegram-table-chair-093-1.jpg","/assets/telegram-table-chair-093-2.jpg"];
const telegramTableChairGallery094 = ["/assets/telegram-table-chair-094-1.jpg","/assets/telegram-table-chair-094-2.jpg","/assets/telegram-table-chair-094-3.jpg","/assets/telegram-table-chair-094-4.jpg"];
const telegramTableChairGallery095 = ["/assets/telegram-table-chair-095-1.jpg","/assets/telegram-table-chair-095-2.jpg","/assets/telegram-table-chair-095-3.jpg","/assets/telegram-table-chair-095-4.jpg"];
const telegramTableChairGallery096 = ["/assets/telegram-table-chair-096-1.jpg","/assets/telegram-table-chair-096-2.jpg"];
const telegramTableChairGallery097 = ["/assets/telegram-table-chair-097-1.jpg","/assets/telegram-table-chair-097-2.jpg","/assets/telegram-table-chair-097-3.jpg","/assets/telegram-table-chair-097-4.jpg"];
const telegramTableChairGallery098 = ["/assets/telegram-table-chair-098-1.jpg","/assets/telegram-table-chair-098-2.jpg","/assets/telegram-table-chair-098-3.jpg","/assets/telegram-table-chair-098-4.jpg"];
const telegramTableChairGallery099 = ["/assets/telegram-table-chair-099-1.jpg","/assets/telegram-table-chair-099-2.jpg","/assets/telegram-table-chair-099-3.jpg","/assets/telegram-table-chair-099-4.jpg"];
const telegramTableChairGallery100 = ["/assets/telegram-table-chair-100-1.jpg","/assets/telegram-table-chair-100-2.jpg","/assets/telegram-table-chair-100-3.jpg","/assets/telegram-table-chair-100-4.jpg"];
const telegramTableChairGallery101 = ["/assets/telegram-table-chair-101-1.jpg","/assets/telegram-table-chair-101-2.jpg","/assets/telegram-table-chair-101-3.jpg","/assets/telegram-table-chair-101-4.jpg"];
const telegramTableChairGallery102 = ["/assets/telegram-table-chair-102-1.jpg","/assets/telegram-table-chair-102-2.jpg"];
const telegramTableChairGallery103 = ["/assets/telegram-table-chair-103-1.jpg","/assets/telegram-table-chair-103-2.jpg","/assets/telegram-table-chair-103-3.jpg"];
const telegramTableChairGallery104 = ["/assets/telegram-table-chair-104-1.jpg","/assets/telegram-table-chair-104-2.jpg","/assets/telegram-table-chair-104-3.jpg","/assets/telegram-table-chair-104-4.jpg"];
const telegramTableChairGallery105 = ["/assets/telegram-table-chair-105-1.jpg","/assets/telegram-table-chair-105-2.jpg"];
const telegramTableChairGallery106 = ["/assets/telegram-table-chair-106-1.jpg","/assets/telegram-table-chair-106-2.jpg","/assets/telegram-table-chair-106-3.jpg"];
const telegramTableChairGallery107 = ["/assets/telegram-table-chair-107-1.jpg","/assets/telegram-table-chair-107-2.jpg","/assets/telegram-table-chair-107-3.jpg","/assets/telegram-table-chair-107-4.jpg"];
const telegramTableChairGallery108 = ["/assets/telegram-table-chair-108-1.jpg","/assets/telegram-table-chair-108-2.jpg","/assets/telegram-table-chair-108-3.jpg","/assets/telegram-table-chair-108-4.jpg"];
const telegramTableChairGallery109 = ["/assets/telegram-table-chair-109-1.jpg","/assets/telegram-table-chair-109-2.jpg","/assets/telegram-table-chair-109-3.jpg"];
const telegramTableChairGallery110 = ["/assets/telegram-table-chair-110-1.jpg","/assets/telegram-table-chair-110-2.jpg","/assets/telegram-table-chair-110-3.jpg","/assets/telegram-table-chair-110-4.jpg"];
const telegramTableChairGallery111 = ["/assets/telegram-table-chair-111-1.jpg","/assets/telegram-table-chair-111-2.jpg"];
const telegramTableChairGallery112 = ["/assets/telegram-table-chair-112-1.jpg","/assets/telegram-table-chair-112-2.jpg"];
const telegramTableChairGallery113 = ["/assets/telegram-table-chair-113-1.jpg","/assets/telegram-table-chair-113-2.jpg"];
const telegramTableChairGallery114 = ["/assets/telegram-table-chair-114-1.jpg","/assets/telegram-table-chair-114-2.jpg","/assets/telegram-table-chair-114-3.jpg"];
const telegramTableChairGallery115 = ["/assets/telegram-table-chair-115-1.jpg","/assets/telegram-table-chair-115-2.jpg","/assets/telegram-table-chair-115-3.jpg","/assets/telegram-table-chair-115-4.jpg"];
const telegramTableChairGallery116 = ["/assets/telegram-table-chair-116-1.jpg","/assets/telegram-table-chair-116-2.jpg","/assets/telegram-table-chair-116-3.jpg"];
const telegramTableChairGallery117 = ["/assets/telegram-table-chair-117-1.jpg","/assets/telegram-table-chair-117-2.jpg","/assets/telegram-table-chair-117-3.jpg","/assets/telegram-table-chair-117-4.jpg"];
const telegramTableChairGallery118 = ["/assets/telegram-table-chair-118-1.jpg","/assets/telegram-table-chair-118-2.jpg","/assets/telegram-table-chair-118-3.jpg","/assets/telegram-table-chair-118-4.jpg"];
const telegramTableChairGallery119 = ["/assets/telegram-table-chair-119-1.jpg","/assets/telegram-table-chair-119-2.jpg","/assets/telegram-table-chair-119-3.jpg"];
const telegramTableChairGallery120 = ["/assets/telegram-table-chair-120-1.jpg","/assets/telegram-table-chair-120-2.jpg","/assets/telegram-table-chair-120-3.jpg","/assets/telegram-table-chair-120-4.jpg"];
const telegramTableChairGallery121 = ["/assets/telegram-table-chair-121-1.jpg","/assets/telegram-table-chair-121-2.jpg"];
const telegramTableChairGallery122 = ["/assets/telegram-table-chair-122-1.jpg"];
const telegramTableChairGallery123 = ["/assets/telegram-table-chair-123-1.jpg","/assets/telegram-table-chair-123-2.jpg","/assets/telegram-table-chair-123-3.jpg","/assets/telegram-table-chair-123-4.jpg"];
const telegramTableChairGallery124 = ["/assets/telegram-table-chair-124-1.jpg","/assets/telegram-table-chair-124-2.jpg","/assets/telegram-table-chair-124-3.jpg","/assets/telegram-table-chair-124-4.jpg"];
const telegramTableChairGallery125 = ["/assets/telegram-table-chair-125-1.jpg","/assets/telegram-table-chair-125-2.jpg","/assets/telegram-table-chair-125-3.jpg","/assets/telegram-table-chair-125-4.jpg"];
const telegramTableChairGallery126 = ["/assets/telegram-table-chair-126-1.jpg","/assets/telegram-table-chair-126-2.jpg","/assets/telegram-table-chair-126-3.jpg","/assets/telegram-table-chair-126-4.jpg"];
const telegramTableChairGallery127 = ["/assets/telegram-table-chair-127-1.jpg","/assets/telegram-table-chair-127-2.jpg","/assets/telegram-table-chair-127-3.jpg"];
const telegramTableChairGallery128 = ["/assets/telegram-table-chair-128-1.jpg","/assets/telegram-table-chair-128-2.jpg","/assets/telegram-table-chair-128-3.jpg"];
const telegramTableChairGallery129 = ["/assets/telegram-table-chair-129-1.jpg","/assets/telegram-table-chair-129-2.jpg","/assets/telegram-table-chair-129-3.jpg","/assets/telegram-table-chair-129-4.jpg"];
const telegramTableChairGallery130 = ["/assets/telegram-table-chair-130-1.jpg"];
const telegramTableChairGallery131 = ["/assets/telegram-table-chair-131-1.jpg","/assets/telegram-table-chair-131-2.jpg","/assets/telegram-table-chair-131-3.jpg","/assets/telegram-table-chair-131-4.jpg"];
const telegramTableChairGallery132 = ["/assets/telegram-table-chair-132-1.jpg"];
const telegramTableChairGallery133 = ["/assets/telegram-table-chair-133-1.jpg","/assets/telegram-table-chair-133-2.jpg","/assets/telegram-table-chair-133-3.jpg","/assets/telegram-table-chair-133-4.jpg"];
const telegramTableChairGallery134 = ["/assets/telegram-table-chair-134-1.jpg","/assets/telegram-table-chair-134-2.jpg","/assets/telegram-table-chair-134-3.jpg","/assets/telegram-table-chair-134-4.jpg"];
const telegramTableChairGallery135 = ["/assets/telegram-table-chair-135-1.jpg","/assets/telegram-table-chair-135-2.jpg"];
const telegramTableChairGallery136 = ["/assets/telegram-table-chair-136-1.jpg","/assets/telegram-table-chair-136-2.jpg","/assets/telegram-table-chair-136-3.jpg","/assets/telegram-table-chair-136-4.jpg"];
const telegramTableChairGallery137 = ["/assets/telegram-table-chair-137-1.jpg","/assets/telegram-table-chair-137-2.jpg","/assets/telegram-table-chair-137-3.jpg","/assets/telegram-table-chair-137-4.jpg"];
const telegramTableChairGallery138 = ["/assets/telegram-table-chair-138-1.jpg","/assets/telegram-table-chair-138-2.jpg","/assets/telegram-table-chair-138-3.jpg","/assets/telegram-table-chair-138-4.jpg"];
const telegramTableChairGallery139 = ["/assets/telegram-table-chair-139-1.jpg","/assets/telegram-table-chair-139-2.jpg","/assets/telegram-table-chair-139-3.jpg"];
const telegramTableChairGallery140 = ["/assets/telegram-table-chair-140-1.jpg","/assets/telegram-table-chair-140-2.jpg","/assets/telegram-table-chair-140-3.jpg","/assets/telegram-table-chair-140-4.jpg"];
const telegramTableChairGallery141 = ["/assets/telegram-table-chair-141-1.jpg"];
const telegramTableChairGallery142 = ["/assets/telegram-table-chair-142-1.jpg","/assets/telegram-table-chair-142-2.jpg","/assets/telegram-table-chair-142-3.jpg","/assets/telegram-table-chair-142-4.jpg"];
const telegramTableChairGallery143 = ["/assets/telegram-table-chair-143-1.jpg","/assets/telegram-table-chair-143-2.jpg","/assets/telegram-table-chair-143-3.jpg"];
const telegramTableChairGallery144 = ["/assets/telegram-table-chair-144-1.jpg","/assets/telegram-table-chair-144-2.jpg","/assets/telegram-table-chair-144-3.jpg","/assets/telegram-table-chair-144-4.jpg"];
const telegramTableChairGallery145 = ["/assets/telegram-table-chair-145-1.jpg","/assets/telegram-table-chair-145-2.jpg","/assets/telegram-table-chair-145-3.jpg","/assets/telegram-table-chair-145-4.jpg"];
const telegramTableChairGallery146 = ["/assets/telegram-table-chair-146-1.jpg","/assets/telegram-table-chair-146-2.jpg","/assets/telegram-table-chair-146-3.jpg","/assets/telegram-table-chair-146-4.jpg"];
const telegramTableChairGallery147 = ["/assets/telegram-table-chair-147-1.jpg","/assets/telegram-table-chair-147-2.jpg","/assets/telegram-table-chair-147-3.jpg","/assets/telegram-table-chair-147-4.jpg"];
const telegramTableChairGallery148 = ["/assets/telegram-table-chair-148-1.jpg","/assets/telegram-table-chair-148-2.jpg","/assets/telegram-table-chair-148-3.jpg","/assets/telegram-table-chair-148-4.jpg"];
const telegramTableChairGallery149 = ["/assets/telegram-table-chair-149-1.jpg","/assets/telegram-table-chair-149-2.jpg","/assets/telegram-table-chair-149-3.jpg","/assets/telegram-table-chair-149-4.jpg"];
const telegramTableChairGallery150 = ["/assets/telegram-table-chair-150-1.jpg","/assets/telegram-table-chair-150-2.jpg","/assets/telegram-table-chair-150-3.jpg"];
const telegramTableChairGallery151 = ["/assets/telegram-table-chair-151-1.jpg","/assets/telegram-table-chair-151-2.jpg","/assets/telegram-table-chair-151-3.jpg","/assets/telegram-table-chair-151-4.jpg"];
const telegramTableChairGallery152 = ["/assets/telegram-table-chair-152-1.jpg","/assets/telegram-table-chair-152-2.jpg","/assets/telegram-table-chair-152-3.jpg"];
const telegramTableChairGallery153 = ["/assets/telegram-table-chair-153-1.jpg","/assets/telegram-table-chair-153-2.jpg","/assets/telegram-table-chair-153-3.jpg","/assets/telegram-table-chair-153-4.jpg"];
const telegramTableChairGallery154 = ["/assets/telegram-table-chair-154-1.jpg","/assets/telegram-table-chair-154-2.jpg","/assets/telegram-table-chair-154-3.jpg","/assets/telegram-table-chair-154-4.jpg"];
const telegramTableChairGallery155 = ["/assets/telegram-table-chair-155-1.jpg","/assets/telegram-table-chair-155-2.jpg"];
const telegramTableChairGallery156 = ["/assets/telegram-table-chair-156-1.jpg","/assets/telegram-table-chair-156-2.jpg","/assets/telegram-table-chair-156-3.jpg","/assets/telegram-table-chair-156-4.jpg"];
const telegramTableChairGallery157 = ["/assets/telegram-table-chair-157-1.jpg","/assets/telegram-table-chair-157-2.jpg","/assets/telegram-table-chair-157-3.jpg","/assets/telegram-table-chair-157-4.jpg"];
const telegramTableChairGallery158 = ["/assets/telegram-table-chair-158-1.jpg","/assets/telegram-table-chair-158-2.jpg","/assets/telegram-table-chair-158-3.jpg","/assets/telegram-table-chair-158-4.jpg"];
const telegramTableChairGallery159 = ["/assets/telegram-table-chair-159-1.jpg","/assets/telegram-table-chair-159-2.jpg","/assets/telegram-table-chair-159-3.jpg","/assets/telegram-table-chair-159-4.jpg"];
const telegramTableChairGallery160 = ["/assets/telegram-table-chair-160-1.jpg","/assets/telegram-table-chair-160-2.jpg","/assets/telegram-table-chair-160-3.jpg","/assets/telegram-table-chair-160-4.jpg"];
const telegramTableChairGallery161 = ["/assets/telegram-table-chair-161-1.jpg","/assets/telegram-table-chair-161-2.jpg","/assets/telegram-table-chair-161-3.jpg"];
const telegramTableChairGallery162 = ["/assets/telegram-table-chair-162-1.jpg","/assets/telegram-table-chair-162-2.jpg","/assets/telegram-table-chair-162-3.jpg","/assets/telegram-table-chair-162-4.jpg"];
const telegramTableChairGallery163 = ["/assets/telegram-table-chair-163-1.jpg","/assets/telegram-table-chair-163-2.jpg","/assets/telegram-table-chair-163-3.jpg","/assets/telegram-table-chair-163-4.jpg"];
const telegramTableChairGallery164 = ["/assets/telegram-table-chair-164-1.jpg","/assets/telegram-table-chair-164-2.jpg","/assets/telegram-table-chair-164-3.jpg","/assets/telegram-table-chair-164-4.jpg"];
const telegramTableChairGallery165 = ["/assets/telegram-table-chair-165-1.jpg","/assets/telegram-table-chair-165-2.jpg","/assets/telegram-table-chair-165-3.jpg","/assets/telegram-table-chair-165-4.jpg"];
const telegramTableChairGallery166 = ["/assets/telegram-table-chair-166-1.jpg","/assets/telegram-table-chair-166-2.jpg","/assets/telegram-table-chair-166-3.jpg","/assets/telegram-table-chair-166-4.jpg"];
const telegramTableChairGallery167 = ["/assets/telegram-table-chair-167-1.jpg","/assets/telegram-table-chair-167-2.jpg","/assets/telegram-table-chair-167-3.jpg","/assets/telegram-table-chair-167-4.jpg"];
const telegramTableChairGallery168 = ["/assets/telegram-table-chair-168-1.jpg"];
const telegramTableChairGallery169 = ["/assets/telegram-table-chair-169-1.jpg","/assets/telegram-table-chair-169-2.jpg","/assets/telegram-table-chair-169-3.jpg","/assets/telegram-table-chair-169-4.jpg"];
const telegramTableChairGallery170 = ["/assets/telegram-table-chair-170-1.jpg","/assets/telegram-table-chair-170-2.jpg","/assets/telegram-table-chair-170-3.jpg"];
const telegramTableChairGallery171 = ["/assets/telegram-table-chair-171-1.jpg","/assets/telegram-table-chair-171-2.jpg","/assets/telegram-table-chair-171-3.jpg","/assets/telegram-table-chair-171-4.jpg"];
const telegramTableChairGallery172 = ["/assets/telegram-table-chair-172-1.jpg","/assets/telegram-table-chair-172-2.jpg","/assets/telegram-table-chair-172-3.jpg","/assets/telegram-table-chair-172-4.jpg"];
const telegramTableChairGallery173 = ["/assets/telegram-table-chair-173-1.jpg","/assets/telegram-table-chair-173-2.jpg","/assets/telegram-table-chair-173-3.jpg","/assets/telegram-table-chair-173-4.jpg"];
const telegramTableChairGallery174 = ["/assets/telegram-table-chair-174-1.jpg","/assets/telegram-table-chair-174-2.jpg","/assets/telegram-table-chair-174-3.jpg","/assets/telegram-table-chair-174-4.jpg"];
const telegramTableChairGallery175 = ["/assets/telegram-table-chair-175-1.jpg","/assets/telegram-table-chair-175-2.jpg","/assets/telegram-table-chair-175-3.jpg","/assets/telegram-table-chair-175-4.jpg"];
const telegramTableChairGallery176 = ["/assets/telegram-table-chair-176-1.jpg","/assets/telegram-table-chair-176-2.jpg","/assets/telegram-table-chair-176-3.jpg","/assets/telegram-table-chair-176-4.jpg"];
const telegramTableChairGallery177 = ["/assets/telegram-table-chair-177-1.jpg","/assets/telegram-table-chair-177-2.jpg","/assets/telegram-table-chair-177-3.jpg","/assets/telegram-table-chair-177-4.jpg"];
const telegramTableChairGallery178 = ["/assets/telegram-table-chair-178-1.jpg","/assets/telegram-table-chair-178-2.jpg","/assets/telegram-table-chair-178-3.jpg","/assets/telegram-table-chair-178-4.jpg"];
const telegramTableChairGallery179 = ["/assets/telegram-table-chair-179-1.jpg","/assets/telegram-table-chair-179-2.jpg","/assets/telegram-table-chair-179-3.jpg","/assets/telegram-table-chair-179-4.jpg"];
const telegramTableChairGallery180 = ["/assets/telegram-table-chair-180-1.jpg","/assets/telegram-table-chair-180-2.jpg","/assets/telegram-table-chair-180-3.jpg","/assets/telegram-table-chair-180-4.jpg"];
const telegramTableChairGallery181 = ["/assets/telegram-table-chair-181-1.jpg","/assets/telegram-table-chair-181-2.jpg","/assets/telegram-table-chair-181-3.jpg","/assets/telegram-table-chair-181-4.jpg"];
const telegramTableChairGallery182 = ["/assets/telegram-table-chair-182-1.jpg","/assets/telegram-table-chair-182-2.jpg","/assets/telegram-table-chair-182-3.jpg","/assets/telegram-table-chair-182-4.jpg"];
const telegramTableChairGallery183 = ["/assets/telegram-table-chair-183-1.jpg","/assets/telegram-table-chair-183-2.jpg","/assets/telegram-table-chair-183-3.jpg","/assets/telegram-table-chair-183-4.jpg"];
const telegramTableChairGallery184 = ["/assets/telegram-table-chair-184-1.jpg","/assets/telegram-table-chair-184-2.jpg","/assets/telegram-table-chair-184-3.jpg","/assets/telegram-table-chair-184-4.jpg"];
const telegramTableChairGallery185 = ["/assets/telegram-table-chair-185-1.jpg","/assets/telegram-table-chair-185-2.jpg","/assets/telegram-table-chair-185-3.jpg","/assets/telegram-table-chair-185-4.jpg"];
const telegramTableChairGallery186 = ["/assets/telegram-table-chair-186-1.jpg","/assets/telegram-table-chair-186-2.jpg","/assets/telegram-table-chair-186-3.jpg","/assets/telegram-table-chair-186-4.jpg"];
const telegramTableChairGallery187 = ["/assets/telegram-table-chair-187-1.jpg","/assets/telegram-table-chair-187-2.jpg","/assets/telegram-table-chair-187-3.jpg","/assets/telegram-table-chair-187-4.jpg"];
const telegramTableChairGallery188 = ["/assets/telegram-table-chair-188-1.jpg","/assets/telegram-table-chair-188-2.jpg","/assets/telegram-table-chair-188-3.jpg","/assets/telegram-table-chair-188-4.jpg"];
const telegramTableChairGallery189 = ["/assets/telegram-table-chair-189-1.jpg","/assets/telegram-table-chair-189-2.jpg","/assets/telegram-table-chair-189-3.jpg","/assets/telegram-table-chair-189-4.jpg"];
const telegramTableChairGallery190 = ["/assets/telegram-table-chair-190-1.jpg","/assets/telegram-table-chair-190-2.jpg","/assets/telegram-table-chair-190-3.jpg","/assets/telegram-table-chair-190-4.jpg"];
const telegramTableChairGallery191 = ["/assets/telegram-table-chair-191-1.jpg","/assets/telegram-table-chair-191-2.jpg","/assets/telegram-table-chair-191-3.jpg","/assets/telegram-table-chair-191-4.jpg"];
const telegramTableChairGallery192 = ["/assets/telegram-table-chair-192-1.jpg","/assets/telegram-table-chair-192-2.jpg","/assets/telegram-table-chair-192-3.jpg","/assets/telegram-table-chair-192-4.jpg"];
const telegramTableChairGallery193 = ["/assets/telegram-table-chair-193-1.jpg","/assets/telegram-table-chair-193-2.jpg","/assets/telegram-table-chair-193-3.jpg","/assets/telegram-table-chair-193-4.jpg"];
const telegramTableChairGallery194 = ["/assets/telegram-table-chair-194-1.jpg","/assets/telegram-table-chair-194-2.jpg","/assets/telegram-table-chair-194-3.jpg","/assets/telegram-table-chair-194-4.jpg"];
const telegramTableChairGallery195 = ["/assets/telegram-table-chair-195-1.jpg","/assets/telegram-table-chair-195-2.jpg","/assets/telegram-table-chair-195-3.jpg","/assets/telegram-table-chair-195-4.jpg"];
const telegramTableChairGallery196 = ["/assets/telegram-table-chair-196-1.jpg","/assets/telegram-table-chair-196-2.jpg","/assets/telegram-table-chair-196-3.jpg","/assets/telegram-table-chair-196-4.jpg"];
const telegramTableChairGallery197 = ["/assets/telegram-table-chair-197-1.jpg","/assets/telegram-table-chair-197-2.jpg","/assets/telegram-table-chair-197-3.jpg","/assets/telegram-table-chair-197-4.jpg"];
const telegramTableChairGallery198 = ["/assets/telegram-table-chair-198-1.jpg","/assets/telegram-table-chair-198-2.jpg","/assets/telegram-table-chair-198-3.jpg","/assets/telegram-table-chair-198-4.jpg"];
const telegramTableChairGallery199 = ["/assets/telegram-table-chair-199-1.jpg","/assets/telegram-table-chair-199-2.jpg","/assets/telegram-table-chair-199-3.jpg","/assets/telegram-table-chair-199-4.jpg"];
const telegramTableChairGallery200 = ["/assets/telegram-table-chair-200-1.jpg","/assets/telegram-table-chair-200-2.jpg","/assets/telegram-table-chair-200-3.jpg","/assets/telegram-table-chair-200-4.jpg"];
const telegramTableChairGallery201 = ["/assets/telegram-table-chair-201-1.jpg","/assets/telegram-table-chair-201-2.jpg","/assets/telegram-table-chair-201-3.jpg","/assets/telegram-table-chair-201-4.jpg"];
const telegramTableChairGallery202 = ["/assets/telegram-table-chair-202-1.jpg","/assets/telegram-table-chair-202-2.jpg","/assets/telegram-table-chair-202-3.jpg","/assets/telegram-table-chair-202-4.jpg"];
const telegramTableChairGallery203 = ["/assets/telegram-table-chair-203-1.jpg","/assets/telegram-table-chair-203-2.jpg","/assets/telegram-table-chair-203-3.jpg","/assets/telegram-table-chair-203-4.jpg"];
const telegramTableChairGallery204 = ["/assets/telegram-table-chair-204-1.jpg","/assets/telegram-table-chair-204-2.jpg","/assets/telegram-table-chair-204-3.jpg","/assets/telegram-table-chair-204-4.jpg"];
const mainCatalogGallery001 = ["/assets/main-catalog-001-1.jpg","/assets/main-catalog-001-2.jpg","/assets/main-catalog-001-3.jpg","/assets/main-catalog-001-4.jpg"];
const mainCatalogGallery002 = ["/assets/main-catalog-002-1.jpg"];
const mainCatalogGallery003 = ["/assets/main-catalog-003-1.jpg","/assets/main-catalog-003-2.jpg","/assets/main-catalog-003-3.jpg","/assets/main-catalog-003-4.jpg"];
const mainCatalogGallery004 = ["/assets/main-catalog-004-1.jpg","/assets/main-catalog-004-2.jpg","/assets/main-catalog-004-3.jpg","/assets/main-catalog-004-4.jpg"];
const mainCatalogGallery005 = ["/assets/main-catalog-005-1.jpg","/assets/main-catalog-005-2.jpg","/assets/main-catalog-005-3.jpg"];
const mainCatalogGallery006 = ["/assets/main-catalog-006-1.jpg","/assets/main-catalog-006-2.jpg","/assets/main-catalog-006-3.jpg","/assets/main-catalog-006-4.jpg"];
const mainCatalogGallery007 = ["/assets/main-catalog-007-1.jpg"];
const mainCatalogGallery008 = ["/assets/main-catalog-008-1.jpg"];
const mainCatalogGallery009 = ["/assets/main-catalog-009-1.jpg"];
const mainCatalogGallery010 = ["/assets/main-catalog-010-1.jpg"];
const mainCatalogGallery011 = ["/assets/main-catalog-011-1.jpg"];
const mainCatalogGallery012 = ["/assets/main-catalog-012-1.jpg"];
const mainCatalogGallery013 = ["/assets/main-catalog-013-1.jpg"];
const mainCatalogGallery014 = ["/assets/main-catalog-014-1.jpg"];
const mainCatalogGallery015 = ["/assets/main-catalog-015-1.jpg"];
const mainCatalogGallery016 = ["/assets/main-catalog-016-1.jpg","/assets/main-catalog-016-2.jpg","/assets/main-catalog-016-3.jpg","/assets/main-catalog-016-4.jpg"];
const mainCatalogGallery017 = ["/assets/main-catalog-017-1.jpg","/assets/main-catalog-017-2.jpg","/assets/main-catalog-017-3.jpg"];
const mainCatalogGallery018 = ["/assets/main-catalog-018-1.jpg","/assets/main-catalog-018-2.jpg"];
const mainCatalogGallery019 = ["/assets/main-catalog-019-1.jpg"];
const mainCatalogGallery020 = ["/assets/main-catalog-020-1.jpg"];
const mainCatalogGallery021 = ["/assets/main-catalog-021-1.jpg"];
const mainCatalogGallery022 = ["/assets/main-catalog-022-1.jpg","/assets/main-catalog-022-2.jpg","/assets/main-catalog-022-3.jpg"];
const mainCatalogGallery023 = ["/assets/main-catalog-023-1.jpg","/assets/main-catalog-023-2.jpg","/assets/main-catalog-023-3.jpg"];
const mainCatalogGallery024 = ["/assets/main-catalog-024-1.jpg","/assets/main-catalog-024-2.jpg"];
const mainCatalogGallery025 = ["/assets/main-catalog-025-1.jpg","/assets/main-catalog-025-2.jpg","/assets/main-catalog-025-3.jpg","/assets/main-catalog-025-4.jpg"];
const mainCatalogGallery026 = ["/assets/main-catalog-026-1.jpg","/assets/main-catalog-026-2.jpg","/assets/main-catalog-026-3.jpg"];
const mainCatalogGallery027 = ["/assets/main-catalog-027-1.jpg","/assets/main-catalog-027-2.jpg","/assets/main-catalog-027-3.jpg","/assets/main-catalog-027-4.jpg"];
const mainCatalogGallery028 = ["/assets/main-catalog-028-1.jpg"];
const mainCatalogGallery029 = ["/assets/main-catalog-029-1.jpg","/assets/main-catalog-029-2.jpg"];
const mainCatalogGallery030 = ["/assets/main-catalog-030-1.jpg","/assets/main-catalog-030-2.jpg","/assets/main-catalog-030-3.jpg","/assets/main-catalog-030-4.jpg"];
const mainCatalogGallery031 = ["/assets/main-catalog-031-1.jpg"];
const mainCatalogGallery032 = ["/assets/main-catalog-032-1.jpg","/assets/main-catalog-032-2.jpg","/assets/main-catalog-032-3.jpg"];
const mainCatalogGallery033 = ["/assets/main-catalog-033-1.jpg"];
const mainCatalogGallery034 = ["/assets/main-catalog-034-1.jpg","/assets/main-catalog-034-2.jpg","/assets/main-catalog-034-3.jpg","/assets/main-catalog-034-4.jpg"];
const mainCatalogGallery035 = ["/assets/main-catalog-035-1.jpg"];
const mainCatalogGallery036 = ["/assets/main-catalog-036-1.jpg","/assets/main-catalog-036-2.jpg","/assets/main-catalog-036-3.jpg"];
const mainCatalogGallery037 = ["/assets/main-catalog-037-1.jpg"];
const mainCatalogGallery038 = ["/assets/main-catalog-038-1.jpg","/assets/main-catalog-038-2.jpg"];
const mainCatalogGallery039 = ["/assets/main-catalog-039-1.jpg","/assets/main-catalog-039-2.jpg","/assets/main-catalog-039-3.jpg","/assets/main-catalog-039-4.jpg"];
const mainCatalogGallery040 = ["/assets/main-catalog-040-1.jpg"];
const mainCatalogGallery041 = ["/assets/main-catalog-041-1.jpg","/assets/main-catalog-041-2.jpg","/assets/main-catalog-041-3.jpg"];
const mainCatalogGallery042 = ["/assets/main-catalog-042-1.jpg"];
const mainCatalogGallery043 = ["/assets/main-catalog-043-1.jpg","/assets/main-catalog-043-2.jpg","/assets/main-catalog-043-3.jpg","/assets/main-catalog-043-4.jpg"];
const mainCatalogGallery044 = ["/assets/main-catalog-044-1.jpg","/assets/main-catalog-044-2.jpg","/assets/main-catalog-044-3.jpg","/assets/main-catalog-044-4.jpg"];
const mainCatalogGallery045 = ["/assets/main-catalog-045-1.jpg","/assets/main-catalog-045-2.jpg","/assets/main-catalog-045-3.jpg"];
const mainCatalogGallery046 = ["/assets/main-catalog-046-1.jpg"];
const mainCatalogGallery047 = ["/assets/main-catalog-047-1.jpg"];
const mainCatalogGallery048 = ["/assets/main-catalog-048-1.jpg"];
const mainCatalogGallery049 = ["/assets/main-catalog-049-1.jpg"];
const mainCatalogGallery050 = ["/assets/main-catalog-050-1.jpg"];
const mainCatalogGallery051 = ["/assets/main-catalog-051-1.jpg"];
const mainCatalogGallery052 = ["/assets/main-catalog-052-1.jpg"];
const mainCatalogGallery053 = ["/assets/main-catalog-053-1.jpg"];
const mainCatalogGallery054 = ["/assets/main-catalog-054-1.jpg"];
const mainCatalogGallery055 = ["/assets/main-catalog-055-1.jpg","/assets/main-catalog-055-2.jpg"];
const mainCatalogGallery056 = ["/assets/main-catalog-056-1.jpg"];
const mainCatalogGallery057 = ["/assets/main-catalog-057-1.jpg"];
const mainCatalogGallery058 = ["/assets/main-catalog-058-1.jpg"];
const mainCatalogGallery059 = ["/assets/main-catalog-059-1.jpg"];
const mainCatalogGallery060 = ["/assets/main-catalog-060-1.jpg","/assets/main-catalog-060-2.jpg","/assets/main-catalog-060-3.jpg"];
const mainCatalogGallery061 = ["/assets/main-catalog-061-1.jpg"];
const mainCatalogGallery062 = ["/assets/main-catalog-062-1.jpg"];
const mainCatalogGallery063 = ["/assets/main-catalog-063-1.jpg","/assets/main-catalog-063-2.jpg","/assets/main-catalog-063-3.jpg","/assets/main-catalog-063-4.jpg"];
const mainCatalogGallery064 = ["/assets/main-catalog-064-1.jpg","/assets/main-catalog-064-2.jpg","/assets/main-catalog-064-3.jpg","/assets/main-catalog-064-4.jpg"];
const mainCatalogGallery065 = ["/assets/main-catalog-065-1.jpg"];
const mainCatalogGallery066 = ["/assets/main-catalog-066-1.jpg"];
const mainCatalogGallery067 = ["/assets/main-catalog-067-1.jpg","/assets/main-catalog-067-2.jpg"];
const mainCatalogGallery068 = ["/assets/main-catalog-068-1.jpg","/assets/main-catalog-068-2.jpg"];
const mainCatalogGallery069 = ["/assets/main-catalog-069-1.jpg"];
const mainCatalogGallery070 = ["/assets/main-catalog-070-1.jpg","/assets/main-catalog-070-2.jpg","/assets/main-catalog-070-3.jpg"];
const mainCatalogGallery071 = ["/assets/main-catalog-071-1.jpg"];
const mainCatalogGallery072 = ["/assets/main-catalog-072-1.jpg"];
const mainCatalogGallery073 = ["/assets/main-catalog-073-1.jpg"];
const mainCatalogGallery074 = ["/assets/main-catalog-074-1.jpg"];
const mainCatalogGallery075 = ["/assets/main-catalog-075-1.jpg"];
const mainCatalogGallery076 = ["/assets/main-catalog-076-1.jpg"];
const mainCatalogGallery077 = ["/assets/main-catalog-077-1.jpg"];
const mainCatalogGallery078 = ["/assets/main-catalog-078-1.jpg"];
const mainCatalogGallery079 = ["/assets/main-catalog-079-1.jpg"];
const mainCatalogGallery080 = ["/assets/main-catalog-080-1.jpg"];
const mainCatalogGallery081 = ["/assets/main-catalog-081-1.jpg"];
const mainCatalogGallery082 = ["/assets/main-catalog-082-1.jpg"];
const mainCatalogGallery083 = ["/assets/main-catalog-083-1.jpg"];
const mainCatalogGallery084 = ["/assets/main-catalog-084-1.jpg"];
const mainCatalogGallery085 = ["/assets/main-catalog-085-1.jpg"];
const mainCatalogGallery086 = ["/assets/main-catalog-086-1.jpg","/assets/main-catalog-086-2.jpg","/assets/main-catalog-086-3.jpg"];
const mainCatalogGallery087 = ["/assets/main-catalog-087-1.jpg","/assets/main-catalog-087-2.jpg"];
const mainCatalogGallery088 = ["/assets/main-catalog-088-1.jpg"];
const mainCatalogGallery089 = ["/assets/main-catalog-089-1.jpg"];
const mainCatalogGallery090 = ["/assets/main-catalog-090-1.jpg"];
const mainCatalogGallery091 = ["/assets/main-catalog-091-1.jpg"];
const mainCatalogGallery092 = ["/assets/main-catalog-092-1.jpg"];
const mainCatalogGallery093 = ["/assets/main-catalog-093-1.jpg"];
const mainCatalogGallery094 = ["/assets/main-catalog-094-1.jpg","/assets/main-catalog-094-2.jpg"];
const mainCatalogGallery095 = ["/assets/main-catalog-095-1.jpg"];
const mainCatalogGallery096 = ["/assets/main-catalog-096-1.jpg"];
const mainCatalogGallery097 = ["/assets/main-catalog-097-1.jpg"];
const mainCatalogGallery098 = ["/assets/main-catalog-098-1.jpg"];
const mainCatalogGallery099 = ["/assets/main-catalog-099-1.jpg"];
const mainCatalogGallery100 = ["/assets/main-catalog-100-1.jpg"];
const mainCatalogGallery101 = ["/assets/main-catalog-101-1.jpg"];
const mainCatalogGallery102 = ["/assets/main-catalog-102-1.jpg"];
const mainCatalogGallery103 = ["/assets/main-catalog-103-1.jpg"];
const mainCatalogGallery104 = ["/assets/main-catalog-104-1.jpg"];
const mainCatalogGallery105 = ["/assets/main-catalog-105-1.jpg"];
const mainCatalogGallery106 = ["/assets/main-catalog-106-1.jpg","/assets/main-catalog-106-2.jpg","/assets/main-catalog-106-3.jpg"];
const mainCatalogGallery107 = ["/assets/main-catalog-107-1.jpg"];
const mainCatalogGallery108 = ["/assets/main-catalog-108-1.jpg"];
const mainCatalogGallery109 = ["/assets/main-catalog-109-1.jpg"];
const mainCatalogGallery110 = ["/assets/main-catalog-110-1.jpg"];
const mainCatalogGallery111 = ["/assets/main-catalog-111-1.jpg"];
const mainCatalogGallery112 = ["/assets/main-catalog-112-1.jpg"];
const mainCatalogGallery113 = ["/assets/main-catalog-113-1.jpg"];
const mainCatalogGallery114 = ["/assets/main-catalog-114-1.jpg","/assets/main-catalog-114-2.jpg","/assets/main-catalog-114-3.jpg","/assets/main-catalog-114-4.jpg"];
const mainCatalogGallery115 = ["/assets/main-catalog-115-1.jpg","/assets/main-catalog-115-2.jpg","/assets/main-catalog-115-3.jpg","/assets/main-catalog-115-4.jpg"];
const mainCatalogGallery116 = ["/assets/main-catalog-116-1.jpg","/assets/main-catalog-116-2.jpg","/assets/main-catalog-116-3.jpg"];
const mainCatalogGallery117 = ["/assets/main-catalog-117-1.jpg","/assets/main-catalog-117-2.jpg","/assets/main-catalog-117-3.jpg"];
const mainCatalogGallery118 = ["/assets/main-catalog-118-1.jpg","/assets/main-catalog-118-2.jpg","/assets/main-catalog-118-3.jpg"];
const mainCatalogGallery119 = ["/assets/main-catalog-119-1.jpg","/assets/main-catalog-119-2.jpg","/assets/main-catalog-119-3.jpg"];
const mainCatalogGallery120 = ["/assets/main-catalog-120-1.jpg","/assets/main-catalog-120-2.jpg","/assets/main-catalog-120-3.jpg"];
const mainCatalogGallery121 = ["/assets/main-catalog-121-1.jpg","/assets/main-catalog-121-2.jpg","/assets/main-catalog-121-3.jpg"];
const mainCatalogGallery122 = ["/assets/main-catalog-122-1.jpg","/assets/main-catalog-122-2.jpg","/assets/main-catalog-122-3.jpg"];
const mainCatalogGallery123 = ["/assets/main-catalog-123-1.jpg","/assets/main-catalog-123-2.jpg","/assets/main-catalog-123-3.jpg"];
const mainCatalogGallery124 = ["/assets/main-catalog-124-1.jpg","/assets/main-catalog-124-2.jpg","/assets/main-catalog-124-3.jpg"];
const mainCatalogGallery125 = ["/assets/main-catalog-125-1.jpg","/assets/main-catalog-125-2.jpg","/assets/main-catalog-125-3.jpg"];
const mainCatalogGallery126 = ["/assets/main-catalog-126-1.jpg","/assets/main-catalog-126-2.jpg","/assets/main-catalog-126-3.jpg","/assets/main-catalog-126-4.jpg"];
const mainCatalogGallery127 = ["/assets/main-catalog-127-1.jpg","/assets/main-catalog-127-2.jpg"];
const mainCatalogGallery128 = ["/assets/main-catalog-128-1.jpg","/assets/main-catalog-128-2.jpg","/assets/main-catalog-128-3.jpg","/assets/main-catalog-128-4.jpg"];
const mainCatalogGallery129 = ["/assets/main-catalog-129-1.jpg","/assets/main-catalog-129-2.jpg","/assets/main-catalog-129-3.jpg","/assets/main-catalog-129-4.jpg"];
const mainCatalogGallery130 = ["/assets/main-catalog-130-1.jpg","/assets/main-catalog-130-2.jpg","/assets/main-catalog-130-3.jpg"];
const mainCatalogGallery131 = ["/assets/main-catalog-131-1.jpg"];
const mainCatalogGallery132 = ["/assets/main-catalog-132-1.jpg"];
const mainCatalogGallery133 = ["/assets/main-catalog-133-1.jpg"];
const mainCatalogGallery134 = ["/assets/main-catalog-134-1.jpg"];
const mainCatalogGallery135 = ["/assets/main-catalog-135-1.jpg"];
const mainCatalogGallery136 = ["/assets/main-catalog-136-1.jpg"];
const mainCatalogGallery137 = ["/assets/main-catalog-137-1.jpg"];
const mainCatalogGallery138 = ["/assets/main-catalog-138-1.jpg"];
const mainCatalogGallery139 = ["/assets/main-catalog-139-1.jpg"];
const mainCatalogGallery140 = ["/assets/main-catalog-140-1.jpg"];
const mainCatalogGallery141 = ["/assets/main-catalog-141-1.jpg"];
const mainCatalogGallery143 = ["/assets/main-catalog-143-1.jpg"];
const mainCatalogGallery144 = ["/assets/main-catalog-144-1.jpg"];
const mainCatalogGallery145 = ["/assets/main-catalog-145-1.jpg"];
const mainCatalogGallery146 = ["/assets/main-catalog-146-1.jpg","/assets/main-catalog-146-2.jpg","/assets/main-catalog-146-3.jpg"];
const mainCatalogGallery147 = ["/assets/main-catalog-147-1.jpg","/assets/main-catalog-147-2.jpg","/assets/main-catalog-147-3.jpg"];
const mainCatalogGallery148 = ["/assets/main-catalog-148-1.jpg","/assets/main-catalog-148-2.jpg","/assets/main-catalog-148-3.jpg","/assets/main-catalog-148-4.jpg"];
const mainCatalogGallery149 = ["/assets/main-catalog-149-1.jpg","/assets/main-catalog-149-2.jpg","/assets/main-catalog-149-3.jpg"];
const mainCatalogGallery150 = ["/assets/main-catalog-150-1.jpg","/assets/main-catalog-150-2.jpg"];
const mainCatalogGallery151 = ["/assets/main-catalog-151-1.jpg"];
const mainCatalogGallery152 = ["/assets/main-catalog-152-1.jpg"];
const mainCatalogGallery153 = ["/assets/main-catalog-153-1.jpg"];
const mainCatalogGallery154 = ["/assets/main-catalog-154-1.jpg"];
const mainCatalogGallery155 = ["/assets/main-catalog-155-1.jpg"];
const mainCatalogGallery156 = ["/assets/main-catalog-156-1.jpg"];
const mainCatalogGallery157 = ["/assets/main-catalog-157-1.jpg"];
const mainCatalogGallery158 = ["/assets/main-catalog-158-1.jpg"];
const mainCatalogGallery159 = ["/assets/main-catalog-159-1.jpg"];
const mainCatalogGallery160 = ["/assets/main-catalog-160-1.jpg"];
const mainCatalogGallery161 = ["/assets/main-catalog-161-1.jpg"];
const mainCatalogGallery162 = ["/assets/main-catalog-162-1.jpg"];
const mainCatalogGallery163 = ["/assets/main-catalog-163-1.jpg"];
const mainCatalogGallery164 = ["/assets/main-catalog-164-1.jpg"];
const mainCatalogGallery165 = ["/assets/main-catalog-165-1.jpg"];
const mainCatalogGallery166 = ["/assets/main-catalog-166-1.jpg"];
const mainCatalogGallery167 = ["/assets/main-catalog-167-1.jpg"];
const mainCatalogGallery168 = ["/assets/main-catalog-168-1.jpg","/assets/main-catalog-168-2.jpg","/assets/main-catalog-168-3.jpg","/assets/main-catalog-168-4.jpg"];
const mainCatalogGallery169 = ["/assets/main-catalog-169-1.jpg","/assets/main-catalog-169-2.jpg","/assets/main-catalog-169-3.jpg","/assets/main-catalog-169-4.jpg"];
const mainCatalogGallery170 = ["/assets/main-catalog-170-1.jpg","/assets/main-catalog-170-2.jpg","/assets/main-catalog-170-3.jpg","/assets/main-catalog-170-4.jpg"];
const mainCatalogGallery171 = ["/assets/main-catalog-171-1.jpg"];
const mainCatalogGallery172 = ["/assets/main-catalog-172-1.jpg","/assets/main-catalog-172-2.jpg","/assets/main-catalog-172-3.jpg","/assets/main-catalog-172-4.jpg"];
const mainCatalogGallery173 = ["/assets/main-catalog-173-1.jpg","/assets/main-catalog-173-2.jpg"];
const mainCatalogGallery174 = ["/assets/main-catalog-174-1.jpg","/assets/main-catalog-174-2.jpg"];
const mainCatalogGallery175 = ["/assets/main-catalog-175-1.jpg"];
const mainCatalogGallery176 = ["/assets/main-catalog-176-1.jpg"];
const mainCatalogGallery177 = ["/assets/main-catalog-177-1.jpg"];
const mainCatalogGallery178 = ["/assets/main-catalog-178-1.jpg"];
const mainCatalogGallery179 = ["/assets/main-catalog-179-1.jpg","/assets/main-catalog-179-2.jpg","/assets/main-catalog-179-3.jpg","/assets/main-catalog-179-4.jpg"];
const mainCatalogGallery180 = ["/assets/main-catalog-180-1.jpg","/assets/main-catalog-180-2.jpg","/assets/main-catalog-180-3.jpg","/assets/main-catalog-180-4.jpg"];
const mainCatalogGallery181 = ["/assets/main-catalog-181-1.jpg","/assets/main-catalog-181-2.jpg","/assets/main-catalog-181-3.jpg","/assets/main-catalog-181-4.jpg"];
const mainCatalogGallery182 = ["/assets/main-catalog-182-1.jpg","/assets/main-catalog-182-2.jpg","/assets/main-catalog-182-3.jpg","/assets/main-catalog-182-4.jpg"];
const mainCatalogGallery183 = ["/assets/main-catalog-183-1.jpg","/assets/main-catalog-183-2.jpg","/assets/main-catalog-183-3.jpg","/assets/main-catalog-183-4.jpg"];
const mainCatalogGallery184 = ["/assets/main-catalog-184-1.jpg","/assets/main-catalog-184-2.jpg"];
const mainCatalogGallery185 = ["/assets/main-catalog-185-1.jpg","/assets/main-catalog-185-2.jpg","/assets/main-catalog-185-3.jpg","/assets/main-catalog-185-4.jpg"];
const mainCatalogGallery186 = ["/assets/main-catalog-186-1.jpg","/assets/main-catalog-186-2.jpg","/assets/main-catalog-186-3.jpg","/assets/main-catalog-186-4.jpg"];
const mainCatalogGallery187 = ["/assets/main-catalog-187-1.jpg"];
const mainCatalogGallery188 = ["/assets/main-catalog-188-1.jpg"];
const mainCatalogGallery189 = ["/assets/main-catalog-189-1.jpg"];
const mainCatalogGallery190 = ["/assets/main-catalog-190-1.jpg"];
const mainCatalogGallery191 = ["/assets/main-catalog-191-1.jpg"];
const mainCatalogGallery192 = ["/assets/main-catalog-192-1.jpg"];
const mainCatalogGallery193 = ["/assets/main-catalog-193-1.jpg","/assets/main-catalog-193-2.jpg"];
const mainCatalogGallery194 = ["/assets/main-catalog-194-1.jpg","/assets/main-catalog-194-2.jpg","/assets/main-catalog-194-3.jpg"];
const mainCatalogGallery195 = ["/assets/main-catalog-195-1.jpg"];
const mainCatalogGallery196 = ["/assets/main-catalog-196-1.jpg","/assets/main-catalog-196-2.jpg","/assets/main-catalog-196-3.jpg","/assets/main-catalog-196-4.jpg"];
const mainCatalogGallery197 = ["/assets/main-catalog-197-1.jpg","/assets/main-catalog-197-2.jpg","/assets/main-catalog-197-3.jpg","/assets/main-catalog-197-4.jpg"];
const mainCatalogGallery198 = ["/assets/main-catalog-198-1.jpg","/assets/main-catalog-198-2.jpg","/assets/main-catalog-198-3.jpg","/assets/main-catalog-198-4.jpg"];
const mainCatalogGallery199 = ["/assets/main-catalog-199-1.jpg","/assets/main-catalog-199-2.jpg","/assets/main-catalog-199-3.jpg","/assets/main-catalog-199-4.jpg"];
const mainCatalogGallery200 = ["/assets/main-catalog-200-1.jpg","/assets/main-catalog-200-2.jpg","/assets/main-catalog-200-3.jpg","/assets/main-catalog-200-4.jpg"];
const mainCatalogGallery201 = ["/assets/main-catalog-201-1.jpg"];
const mainCatalogGallery202 = ["/assets/main-catalog-202-1.jpg"];
const mainCatalogGallery203 = ["/assets/main-catalog-203-1.jpg"];
const mainCatalogGallery204 = ["/assets/main-catalog-204-1.jpg"];
const mainCatalogGallery205 = ["/assets/main-catalog-205-1.jpg","/assets/main-catalog-205-2.jpg","/assets/main-catalog-205-3.jpg","/assets/main-catalog-205-4.jpg"];
const mainCatalogGallery206 = ["/assets/main-catalog-206-1.jpg"];
const mainCatalogGallery207 = ["/assets/main-catalog-207-1.jpg","/assets/main-catalog-207-2.jpg","/assets/main-catalog-207-3.jpg","/assets/main-catalog-207-4.jpg"];
const mainCatalogGallery208 = ["/assets/main-catalog-208-1.jpg"];
const mainCatalogGallery209 = ["/assets/main-catalog-209-1.jpg"];
const mainCatalogGallery210 = ["/assets/main-catalog-210-1.jpg"];
const mainCatalogGallery211 = ["/assets/main-catalog-211-1.jpg"];
const mainCatalogGallery212 = ["/assets/main-catalog-212-1.jpg"];
const mainCatalogGallery213 = ["/assets/main-catalog-213-1.jpg"];
const mainCatalogGallery214 = ["/assets/main-catalog-214-1.jpg"];
const mainCatalogGallery215 = ["/assets/main-catalog-215-1.jpg"];
const mainCatalogGallery216 = ["/assets/main-catalog-216-1.jpg"];
const mainCatalogGallery217 = ["/assets/main-catalog-217-1.jpg","/assets/main-catalog-217-2.jpg"];
const mainCatalogGallery218 = ["/assets/main-catalog-218-1.jpg","/assets/main-catalog-218-2.jpg","/assets/main-catalog-218-3.jpg"];
const mainCatalogGallery219 = ["/assets/main-catalog-219-1.jpg","/assets/main-catalog-219-2.jpg","/assets/main-catalog-219-3.jpg"];
const mainCatalogGallery220 = ["/assets/main-catalog-220-1.jpg"];
const mainCatalogGallery221 = ["/assets/main-catalog-221-1.jpg","/assets/main-catalog-221-2.jpg"];
const mainCatalogGallery222 = ["/assets/main-catalog-222-1.jpg","/assets/main-catalog-222-2.jpg","/assets/main-catalog-222-3.jpg","/assets/main-catalog-222-4.jpg"];
const mainCatalogGallery223 = ["/assets/main-catalog-223-1.jpg","/assets/main-catalog-223-2.jpg","/assets/main-catalog-223-3.jpg","/assets/main-catalog-223-4.jpg"];
const mainCatalogGallery224 = ["/assets/main-catalog-224-1.jpg","/assets/main-catalog-224-2.jpg","/assets/main-catalog-224-3.jpg","/assets/main-catalog-224-4.jpg"];
const mainCatalogGallery225 = ["/assets/main-catalog-225-1.jpg","/assets/main-catalog-225-2.jpg"];
const mainCatalogGallery226 = ["/assets/main-catalog-226-1.jpg"];
const mainCatalogGallery227 = ["/assets/main-catalog-227-1.jpg","/assets/main-catalog-227-2.jpg","/assets/main-catalog-227-3.jpg","/assets/main-catalog-227-4.jpg"];
const mainCatalogGallery228 = ["/assets/main-catalog-228-1.jpg"];
const mainCatalogGallery229 = ["/assets/main-catalog-229-1.jpg","/assets/main-catalog-229-2.jpg","/assets/main-catalog-229-3.jpg","/assets/main-catalog-229-4.jpg"];
const mainCatalogGallery230 = ["/assets/main-catalog-230-1.jpg","/assets/main-catalog-230-2.jpg","/assets/main-catalog-230-3.jpg","/assets/main-catalog-230-4.jpg"];
const mainCatalogGallery231 = ["/assets/main-catalog-231-1.jpg","/assets/main-catalog-231-2.jpg","/assets/main-catalog-231-3.jpg","/assets/main-catalog-231-4.jpg"];
const mainCatalogGallery232 = ["/assets/main-catalog-232-1.jpg","/assets/main-catalog-232-2.jpg"];
const mainCatalogGallery233 = ["/assets/main-catalog-233-1.jpg","/assets/main-catalog-233-2.jpg"];
const mainCatalogGallery234 = ["/assets/main-catalog-234-1.jpg","/assets/main-catalog-234-2.jpg"];
const mainCatalogGallery235 = ["/assets/main-catalog-235-1.jpg","/assets/main-catalog-235-2.jpg","/assets/main-catalog-235-3.jpg"];
const mainCatalogGallery236 = ["/assets/main-catalog-236-1.jpg","/assets/main-catalog-236-2.jpg","/assets/main-catalog-236-3.jpg","/assets/main-catalog-236-4.jpg"];
const mainCatalogGallery237 = ["/assets/main-catalog-237-1.jpg","/assets/main-catalog-237-2.jpg","/assets/main-catalog-237-3.jpg","/assets/main-catalog-237-4.jpg"];
const mainCatalogGallery238 = ["/assets/main-catalog-238-1.jpg","/assets/main-catalog-238-2.jpg","/assets/main-catalog-238-3.jpg","/assets/main-catalog-238-4.jpg"];
const mainCatalogGallery239 = ["/assets/main-catalog-239-1.jpg","/assets/main-catalog-239-2.jpg","/assets/main-catalog-239-3.jpg","/assets/main-catalog-239-4.jpg"];
const mainCatalogGallery240 = ["/assets/main-catalog-240-1.jpg","/assets/main-catalog-240-2.jpg","/assets/main-catalog-240-3.jpg","/assets/main-catalog-240-4.jpg"];
const mainCatalogGallery241 = ["/assets/main-catalog-241-1.jpg","/assets/main-catalog-241-2.jpg","/assets/main-catalog-241-3.jpg","/assets/main-catalog-241-4.jpg"];
const mainCatalogGallery242 = ["/assets/main-catalog-242-1.jpg","/assets/main-catalog-242-2.jpg"];
const mainCatalogGallery243 = ["/assets/main-catalog-243-1.jpg","/assets/main-catalog-243-2.jpg","/assets/main-catalog-243-3.jpg","/assets/main-catalog-243-4.jpg"];
const mainCatalogGallery244 = ["/assets/main-catalog-244-1.jpg","/assets/main-catalog-244-2.jpg","/assets/main-catalog-244-3.jpg"];
const mainCatalogGallery245 = ["/assets/main-catalog-245-1.jpg","/assets/main-catalog-245-2.jpg","/assets/main-catalog-245-3.jpg","/assets/main-catalog-245-4.jpg"];
const mainCatalogGallery246 = ["/assets/main-catalog-246-1.jpg","/assets/main-catalog-246-2.jpg","/assets/main-catalog-246-3.jpg","/assets/main-catalog-246-4.jpg"];
const mainCatalogGallery247 = ["/assets/main-catalog-247-1.jpg","/assets/main-catalog-247-2.jpg","/assets/main-catalog-247-3.jpg","/assets/main-catalog-247-4.jpg"];
const mainCatalogGallery248 = ["/assets/main-catalog-248-1.jpg","/assets/main-catalog-248-2.jpg","/assets/main-catalog-248-3.jpg"];
const mainCatalogGallery249 = ["/assets/main-catalog-249-1.jpg","/assets/main-catalog-249-2.jpg","/assets/main-catalog-249-3.jpg","/assets/main-catalog-249-4.jpg"];
const mainCatalogGallery250 = ["/assets/main-catalog-250-1.jpg","/assets/main-catalog-250-2.jpg","/assets/main-catalog-250-3.jpg"];
const mainCatalogGallery251 = ["/assets/main-catalog-251-1.jpg","/assets/main-catalog-251-2.jpg","/assets/main-catalog-251-3.jpg","/assets/main-catalog-251-4.jpg"];
const mainCatalogGallery252 = ["/assets/main-catalog-252-1.jpg","/assets/main-catalog-252-2.jpg","/assets/main-catalog-252-3.jpg","/assets/main-catalog-252-4.jpg"];
const mainCatalogGallery253 = ["/assets/main-catalog-253-1.jpg","/assets/main-catalog-253-2.jpg","/assets/main-catalog-253-3.jpg","/assets/main-catalog-253-4.jpg"];
const mainCatalogGallery254 = ["/assets/main-catalog-254-1.jpg","/assets/main-catalog-254-2.jpg","/assets/main-catalog-254-3.jpg","/assets/main-catalog-254-4.jpg"];
const mainCatalogGallery255 = ["/assets/main-catalog-255-1.jpg","/assets/main-catalog-255-2.jpg","/assets/main-catalog-255-3.jpg","/assets/main-catalog-255-4.jpg"];
const mainCatalogGallery256 = ["/assets/main-catalog-256-1.jpg","/assets/main-catalog-256-2.jpg","/assets/main-catalog-256-3.jpg","/assets/main-catalog-256-4.jpg"];
const mainCatalogGallery257 = ["/assets/main-catalog-257-1.jpg","/assets/main-catalog-257-2.jpg","/assets/main-catalog-257-3.jpg","/assets/main-catalog-257-4.jpg"];
const mainCatalogGallery258 = ["/assets/main-catalog-258-1.jpg","/assets/main-catalog-258-2.jpg","/assets/main-catalog-258-3.jpg","/assets/main-catalog-258-4.jpg"];
const mainCatalogGallery259 = ["/assets/main-catalog-259-1.jpg","/assets/main-catalog-259-2.jpg","/assets/main-catalog-259-3.jpg","/assets/main-catalog-259-4.jpg"];
const mainCatalogGallery260 = ["/assets/main-catalog-260-1.jpg","/assets/main-catalog-260-2.jpg","/assets/main-catalog-260-3.jpg","/assets/main-catalog-260-4.jpg"];
const mainCatalogGallery262 = ["/assets/main-catalog-262-1.jpg","/assets/main-catalog-262-2.jpg","/assets/main-catalog-262-3.jpg","/assets/main-catalog-262-4.jpg"];
const mainCatalogGallery263 = ["/assets/main-catalog-263-1.jpg","/assets/main-catalog-263-2.jpg","/assets/main-catalog-263-3.jpg","/assets/main-catalog-263-4.jpg"];
const mainCatalogGallery264 = ["/assets/main-catalog-264-1.jpg","/assets/main-catalog-264-2.jpg","/assets/main-catalog-264-3.jpg","/assets/main-catalog-264-4.jpg"];
const mainCatalogGallery265 = ["/assets/main-catalog-265-1.jpg","/assets/main-catalog-265-2.jpg","/assets/main-catalog-265-3.jpg"];
const mainCatalogGallery266 = ["/assets/main-catalog-266-1.jpg","/assets/main-catalog-266-2.jpg","/assets/main-catalog-266-3.jpg","/assets/main-catalog-266-4.jpg"];
const mainCatalogGallery267 = ["/assets/main-catalog-267-1.jpg","/assets/main-catalog-267-2.jpg"];
const mainCatalogGallery268 = ["/assets/main-catalog-268-1.jpg","/assets/main-catalog-268-2.jpg","/assets/main-catalog-268-3.jpg","/assets/main-catalog-268-4.jpg"];
const mainCatalogGallery269 = ["/assets/main-catalog-269-1.jpg","/assets/main-catalog-269-2.jpg","/assets/main-catalog-269-3.jpg","/assets/main-catalog-269-4.jpg"];
const mainCatalogGallery270 = ["/assets/main-catalog-270-1.jpg","/assets/main-catalog-270-2.jpg","/assets/main-catalog-270-3.jpg","/assets/main-catalog-270-4.jpg"];
const mainCatalogGallery271 = ["/assets/main-catalog-271-1.jpg","/assets/main-catalog-271-2.jpg","/assets/main-catalog-271-3.jpg","/assets/main-catalog-271-4.jpg"];
const mainCatalogGallery272 = ["/assets/main-catalog-272-1.jpg"];
const mainCatalogGallery274 = ["/assets/main-catalog-274-1.jpg","/assets/main-catalog-274-2.jpg","/assets/main-catalog-274-3.jpg","/assets/main-catalog-274-4.jpg"];
const mainCatalogGallery275 = ["/assets/main-catalog-275-1.jpg","/assets/main-catalog-275-2.jpg","/assets/main-catalog-275-3.jpg"];
const mainCatalogGallery276 = ["/assets/main-catalog-276-1.jpg","/assets/main-catalog-276-2.jpg","/assets/main-catalog-276-3.jpg","/assets/main-catalog-276-4.jpg"];
const mainCatalogGallery277 = ["/assets/main-catalog-277-1.jpg","/assets/main-catalog-277-2.jpg","/assets/main-catalog-277-3.jpg","/assets/main-catalog-277-4.jpg"];
const mainCatalogGallery278 = ["/assets/main-catalog-278-1.jpg","/assets/main-catalog-278-2.jpg","/assets/main-catalog-278-3.jpg"];
const mainCatalogGallery279 = ["/assets/main-catalog-279-1.jpg","/assets/main-catalog-279-2.jpg","/assets/main-catalog-279-3.jpg","/assets/main-catalog-279-4.jpg"];
const mainCatalogGallery280 = ["/assets/main-catalog-280-1.jpg","/assets/main-catalog-280-2.jpg","/assets/main-catalog-280-3.jpg","/assets/main-catalog-280-4.jpg"];
const mainCatalogGallery281 = ["/assets/main-catalog-281-1.jpg","/assets/main-catalog-281-2.jpg","/assets/main-catalog-281-3.jpg","/assets/main-catalog-281-4.jpg"];
const mainCatalogGallery282 = ["/assets/main-catalog-282-1.jpg","/assets/main-catalog-282-2.jpg","/assets/main-catalog-282-3.jpg","/assets/main-catalog-282-4.jpg"];
const mainCatalogGallery283 = ["/assets/main-catalog-283-1.jpg","/assets/main-catalog-283-2.jpg","/assets/main-catalog-283-3.jpg","/assets/main-catalog-283-4.jpg"];
const mainCatalogGallery284 = ["/assets/main-catalog-284-1.jpg","/assets/main-catalog-284-2.jpg","/assets/main-catalog-284-3.jpg","/assets/main-catalog-284-4.jpg"];
export const products: Product[] = [
  {
    slug: "spalnya-maya",
    name: "Спальня «Мая»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "63 000 ₽ / компл.",
    image: bedroomSetMayaGallery[0],
    images: bedroomSetMayaGallery,
    description: "Спальня «Мая» — спальный гарнитур в цвете белая / золото, с кроватью 180 × 200 см, со шкафом 6-дверный.",
    characteristics: [
      ["Кровать", "180 × 200 см"],
      ["Шкаф", "6-дверный"],
      ["Цвет", "белая / золото"],
      ["Производство", "Краснодар"],
      ["Фабрика", "Империя"],
      ["Комплектация", "пуфик в комплекте"],
    ],
  },
  {
    slug: "spalnya-afrodita",
    name: "Спальня «Афродита»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "54 000 ₽ / компл.",
    image: bedroomSetAfroditaGallery[0],
    images: bedroomSetAfroditaGallery,
    description: "Спальня «Афродита» — спальный гарнитур с кроватью 160 × 200 см.",
    characteristics: [
      ["Кровать", "160 × 200 см"],
      ["Производство", "Краснодар"],
      ["Качество", "Люкс"],
    ],
  },
  {
    slug: "spalnya-hanna",
    name: "Спальня «Ханна»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "98 000 ₽ / компл.",
    image: bedroomSetHannaGallery[0],
    images: bedroomSetHannaGallery,
    description: "Спальня «Ханна» — спальный гарнитур с кроватью 180 × 200 см, со шкафом 2732 × 2150 × 521 мм, 6-дверный.",
    characteristics: [
      ["Кровать", "180 × 200 см"],
      ["Шкаф", "2732 × 2150 × 521 мм, 6-дверный"],
      ["Трельяж", "1380 × 1580 × 436 мм"],
      ["Тумба", "477 × 1200 × 401 мм"],
      ["Фабрика", "МИАЛ"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-magdalena",
    name: "Спальня «Магдалена»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "67 000 ₽ / компл.",
    image: bedroomSetMagdalenaGallery[0],
    images: bedroomSetMagdalenaGallery,
    description: "Спальня «Магдалена» — спальный гарнитур со шкафом 5-дверный.",
    characteristics: [
      ["Шкаф", "5-дверный"],
      ["Производство", "Краснодар"],
      ["Фабрика", "Миал"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-aleksandriya",
    name: "Спальня «Александрия»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "76 000 ₽ / компл.",
    image: bedroomSetAleksandriyaGallery[0],
    images: bedroomSetAleksandriyaGallery,
    description: "Спальня «Александрия» — спальный гарнитур со шкафом 5-дверный.",
    characteristics: [
      ["Шкаф", "5-дверный"],
      ["Производство", "Краснодар"],
      ["Матрас", "не входит"],
    ],
  },
  // Imported closets start
  {
    slug: "shkaf-neogara",
    name: "Шкаф Неогара",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "от 49 000 ₽",
    image: "/assets/shkaf-neogara-1.jpg",
    images: ["/assets/shkaf-neogara-1.jpg","/assets/shkaf-neogara-2.jpg","/assets/shkaf-neogara-3.jpg","/assets/shkaf-neogara-4.jpg","/assets/shkaf-neogara-5.jpg","/assets/shkaf-neogara-6.jpg","/assets/shkaf-neogara-7.jpg","/assets/shkaf-neogara-8.jpg","/assets/shkaf-neogara-9.jpg","/assets/shkaf-neogara-10.jpg"],
    description: "Шкаф Неогара — размер 310х230х60.",
    characteristics: [["Размер", "310х230х60"]],
  },
  {
    slug: "shkaf-kupe",
    name: "Шкаф купе",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "39 000 ₽",
    image: "/assets/shkaf-kupe-1.jpg",
    images: ["/assets/shkaf-kupe-1.jpg","/assets/shkaf-kupe-2.jpg","/assets/shkaf-kupe-3.jpg","/assets/shkaf-kupe-4.jpg","/assets/shkaf-kupe-5.jpg","/assets/shkaf-kupe-6.jpg"],
    description: "Шкаф купе — шкаф-купе, размер 235х230х60.",
    characteristics: [["Размер", "235х230х60"], ["Тип", "шкаф-купе"]],
  },
  {
    slug: "shkaf-adel",
    name: "Шкаф «Адель»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-adel-1.jpg",
    images: ["/assets/shkaf-adel-1.jpg"],
    description: "Шкаф «Адель» — размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"], ["Корпус", "дсп"], ["Фасады", "мдф Цвет - белый"]],
  },
  {
    slug: "shkaf-byanka",
    name: "Шкаф «Бьянка»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "34 000 ₽",
    image: "/assets/shkaf-byanka-1.jpg",
    images: ["/assets/shkaf-byanka-1.jpg","/assets/shkaf-byanka-2.jpg"],
    description: "Шкаф «Бьянка» — в цвете белый, размер 200х220х50.",
    characteristics: [["Размер", "200х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-byanka-2",
    name: "Шкаф «Бьянка»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "32 000 ₽",
    image: "/assets/shkaf-byanka-2-1.jpg",
    images: ["/assets/shkaf-byanka-2-1.jpg","/assets/shkaf-byanka-2-2.jpg"],
    description: "Шкаф «Бьянка» — в цвете белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-ameli-belyy",
    name: "Шкаф Амели БЕЛЫЙ",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "27 000 ₽",
    image: "/assets/shkaf-ameli-belyy-1.jpg",
    images: ["/assets/shkaf-ameli-belyy-1.jpg","/assets/shkaf-ameli-belyy-2.jpg"],
    description: "Шкаф Амели БЕЛЫЙ — размер 135х225х50.",
    characteristics: [["Размер", "135х225х50"]],
  },
  {
    slug: "shkaf-luidzhi",
    name: "Шкаф Луиджи",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "98 000 ₽",
    image: "/assets/shkaf-luidzhi-1.jpg",
    images: ["/assets/shkaf-luidzhi-1.jpg","/assets/shkaf-luidzhi-2.jpg","/assets/shkaf-luidzhi-3.jpg","/assets/shkaf-luidzhi-4.jpg","/assets/shkaf-luidzhi-5.jpg","/assets/shkaf-luidzhi-6.jpg"],
    description: "Шкаф Луиджи — размер 415х235х60.",
    characteristics: [["Размер", "415х235х60"]],
  },
  {
    slug: "shkaf-adel-2",
    name: "Шкаф «Адель»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-adel-2-1.jpg",
    images: ["/assets/shkaf-adel-2-1.jpg"],
    description: "Шкаф «Адель» — в цвете Серый, размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"], ["Цвет", "Серый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-adel-3",
    name: "Шкаф «Адель»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "33 000 ₽",
    image: "/assets/shkaf-adel-3-1.jpg",
    images: ["/assets/shkaf-adel-3-1.jpg","/assets/shkaf-adel-3-2.jpg"],
    description: "Шкаф «Адель» — в цвете белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-neo",
    name: "Шкаф «Нео»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "65 000 ₽",
    image: "/assets/shkaf-neo-1.jpg",
    images: ["/assets/shkaf-neo-1.jpg","/assets/shkaf-neo-2.jpg","/assets/shkaf-neo-3.jpg","/assets/shkaf-neo-4.jpg"],
    description: "Шкаф «Нео» — в цвете белый и серый, размер 310х235х60.",
    characteristics: [["Размер", "310х235х60"], ["Цвет", "белый и серый"], ["Корпус", "ДСП"], ["Фасады", "МДФ"]],
  },
  {
    slug: "shkaf-new-baby",
    name: "Шкаф «new baby»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "25 000 ₽",
    image: "/assets/shkaf-new-baby-1.jpg",
    images: ["/assets/shkaf-new-baby-1.jpg"],
    description: "Шкаф «new baby» — размер 205х120х45.",
    characteristics: [["Размер", "205х120х45"]],
  },
  {
    slug: "shkaf-liana",
    name: "Шкаф Лиана",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "41 000 ₽",
    image: "/assets/shkaf-liana-1.jpg",
    images: ["/assets/shkaf-liana-1.jpg","/assets/shkaf-liana-2.jpg","/assets/shkaf-liana-3.jpg","/assets/shkaf-liana-4.jpg","/assets/shkaf-liana-5.jpg"],
    description: "Шкаф Лиана — размер 140х235х57.",
    characteristics: [["Размер", "140х235х57"]],
  },
  {
    slug: "shkaf-sorento",
    name: "Шкаф Соренто",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "от 35 000 ₽",
    image: "/assets/shkaf-sorento-1.jpg",
    images: ["/assets/shkaf-sorento-1.jpg","/assets/shkaf-sorento-2.jpg","/assets/shkaf-sorento-3.jpg","/assets/shkaf-sorento-4.jpg","/assets/shkaf-sorento-5.jpg","/assets/shkaf-sorento-6.jpg"],
    description: "Шкаф Соренто — размер 180х230х60.",
    characteristics: [["Размер", "180х230х60"]],
  },
  {
    slug: "shkafl-liana",
    name: "Шкафл Лиана",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "52 000 ₽",
    image: "/assets/shkafl-liana-1.jpg",
    images: ["/assets/shkafl-liana-1.jpg","/assets/shkafl-liana-2.jpg","/assets/shkafl-liana-3.jpg","/assets/shkafl-liana-4.jpg"],
    description: "Шкафл Лиана — размер 200х235х57.",
    characteristics: [["Размер", "200х235х57"]],
  },
  {
    slug: "shkaf-miya",
    name: "Шкаф Мия",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-miya-1.jpg",
    images: ["/assets/shkaf-miya-1.jpg"],
    description: "Шкаф Мия — шкаф для аккуратного хранения.",
    characteristics: [],
  },
  {
    slug: "shkaf-maya",
    name: "Шкаф Мая",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-maya-1.jpg",
    images: ["/assets/shkaf-maya-1.jpg"],
    description: "Шкаф Мая — в цвете Белая В Золоте.",
    characteristics: [["Цвет", "Белая В Золоте"]],
  },
  {
    slug: "shkaf-chelsi-90",
    name: "Шкаф Челси 90",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "19 800 ₽",
    image: "/assets/shkaf-chelsi-90-1.jpg",
    images: ["/assets/shkaf-chelsi-90-1.jpg","/assets/shkaf-chelsi-90-2.jpg","/assets/shkaf-chelsi-90-3.jpg","/assets/shkaf-chelsi-90-4.jpg"],
    description: "Шкаф Челси 90 — размер 90х180х51.",
    characteristics: [["Размер", "90х180х51"], ["Корпус", "ЛДСП 16мм: цвет белый и графит"], ["Фасады", "ЛДСП 16мм: цвет Белый глянец и Графит"]],
  },
  {
    slug: "shkaf-kupe-maestro-1-7m",
    name: "Шкаф-купе Маэстро 1.7м",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "31 000 ₽",
    image: "/assets/shkaf-kupe-maestro-1-7m-1.jpg",
    images: ["/assets/shkaf-kupe-maestro-1-7m-1.jpg","/assets/shkaf-kupe-maestro-1-7m-2.jpg"],
    description: "Шкаф-купе Маэстро 1.7м — шкаф-купе, в цвете Белый, размер 170х222х57.",
    characteristics: [["Размер", "170х222х57"], ["Цвет", "Белый"], ["Тип", "шкаф-купе"]],
  },
  {
    slug: "shkaf-madlen-6-dvernyy-belyy",
    name: "Шкаф «Мадлен» 6-дверный Белый",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "45 000 ₽",
    image: "/assets/shkaf-madlen-6ti-belyy-1.jpg",
    images: ["/assets/shkaf-madlen-6ti-belyy-1.jpg","/assets/shkaf-madlen-6ti-belyy-2.jpg","/assets/shkaf-madlen-6ti-belyy-3.jpg"],
    description: "Шкаф «Мадлен» 6-дверный Белый — размер 270х214х54.",
    characteristics: [["Размер", "270х214х54"], ["Фасады", "МДФ крашеный."]],
  },
  {
    slug: "shkaf-miya-2",
    name: "Шкаф Мия",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-miya-2-1.jpg",
    images: ["/assets/shkaf-miya-2-1.jpg","/assets/shkaf-miya-2-2.jpg"],
    description: "Шкаф Мия — в цвете белый, размер 180х215х50.",
    characteristics: [["Размер", "180х215х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-adel-4",
    name: "Шкаф «Адель»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "26 000 ₽",
    image: "/assets/shkaf-adel-4-1.jpg",
    images: ["/assets/shkaf-adel-4-1.jpg","/assets/shkaf-adel-4-2.jpg"],
    description: "Шкаф «Адель» — в цвете белый, размер 90х220х50.",
    characteristics: [["Размер", "90х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-sharlotta",
    name: "Шкаф «Шарлотта»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "40 000 ₽",
    image: "/assets/shkaf-sharlotta-1.jpg",
    images: ["/assets/shkaf-sharlotta-1.jpg","/assets/hallway-gloria-8-beige-1.jpg"],
    description: "Шкаф «Шарлотта» — в цвете белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-neo-2",
    name: "Шкаф «Нео»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "50 000 ₽",
    image: "/assets/shkaf-neo-2-1.jpg",
    images: ["/assets/shkaf-neo-2-1.jpg"],
    description: "Шкаф «Нео» — в цвете Белый, размер 230х235х60.",
    characteristics: [["Размер", "230х235х60"], ["Цвет", "Белый"], ["Корпус", "Лдсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-zhanet",
    name: "Шкаф Жанет",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-zhanet-1.jpg",
    images: ["/assets/shkaf-zhanet-1.jpg"],
    description: "Шкаф Жанет — размер 160х220х50.",
    characteristics: [["Размер", "160х220х50"]],
  },
  {
    slug: "shkaf-siciliya-6-dvernyy",
    name: "Шкаф Сицилия 6-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "42 000 ₽",
    image: "/assets/shkaf-siciliya-6-dv-1.jpg",
    images: ["/assets/shkaf-siciliya-6-dv-1.jpg"],
    description: "Шкаф Сицилия 6-дверный — размер 270х225х60.",
    characteristics: [["Размер", "270х225х60"]],
  },
  {
    slug: "shkaf-bostan",
    name: "Шкаф «бостан»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "43 000 ₽",
    image: "/assets/shkaf-bostan-1.jpg",
    images: ["/assets/shkaf-bostan-1.jpg","/assets/shkaf-bostan-2.jpg","/assets/shkaf-bostan-3.jpg"],
    description: "Шкаф «бостан» — в цвете белый, размер 200х230х60.",
    characteristics: [["Размер", "200х230х60"], ["Цвет", "белый"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-marsel",
    name: "Шкаф «Марсель»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "31 000 ₽",
    image: "/assets/shkaf-marsel-1.jpg",
    images: ["/assets/shkaf-marsel-1.jpg","/assets/shkaf-marsel-2.jpg","/assets/shkaf-marsel-3.jpg"],
    description: "Шкаф «Марсель» — в цвете белый, размер 100х250х50.",
    characteristics: [["Размер", "100х250х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-antaliya",
    name: "Шкаф «Анталия»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "30 000 ₽",
    image: "/assets/shkaf-antaliya-1.jpg",
    images: ["/assets/shkaf-antaliya-1.jpg"],
    description: "Шкаф «Анталия» — в цвете Белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "Белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-samina",
    name: "Шкаф «Самина»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "33 000 ₽",
    image: "/assets/shkaf-samina-1.jpg",
    images: ["/assets/shkaf-samina-1.jpg"],
    description: "Шкаф «Самина» — в цвете белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-antaliya-2",
    name: "Шкаф «Анталия»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "33 000 ₽",
    image: "/assets/shkaf-antaliya-2-1.jpg",
    images: ["/assets/shkaf-antaliya-2-1.jpg"],
    description: "Шкаф «Анталия» — в цвете белый, размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-nika",
    name: "Шкаф «Ника»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "29 000 ₽",
    image: "/assets/shkaf-nika-1.jpg",
    images: ["/assets/shkaf-nika-1.jpg"],
    description: "Шкаф «Ника» — в цвете белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-aleksandriya",
    name: "Шкаф «Александрия»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "27 000 ₽",
    image: "/assets/shkaf-aleksandriya-1.jpg",
    images: ["/assets/shkaf-aleksandriya-1.jpg","/assets/shkaf-aleksandriya-2.jpg"],
    description: "Шкаф «Александрия» — в цвете Белый, размер 135х220х50.",
    characteristics: [["Размер", "135х220х50"], ["Цвет", "Белый"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-boston",
    name: "Шкаф «Бостон»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "28 000 ₽",
    image: "/assets/shkaf-boston-1.jpg",
    images: ["/assets/shkaf-boston-1.jpg"],
    description: "Шкаф «Бостон» — в цвете белый, размер 135х220х50.",
    characteristics: [["Размер", "135х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-boston-2",
    name: "Шкаф «Бостон»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "40 000 ₽",
    image: "/assets/shkaf-boston-2-1.jpg",
    images: ["/assets/shkaf-boston-2-1.jpg","/assets/shkaf-boston-2-2.jpg"],
    description: "Шкаф «Бостон» — в цвете белый, размер 300х220х50.",
    characteristics: [["Размер", "300х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-dior",
    name: "Шкаф «Диор»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "62 000 ₽",
    image: "/assets/shkaf-dior-1.jpg",
    images: ["/assets/shkaf-dior-1.jpg","/assets/shkaf-dior-2.jpg","/assets/shkaf-dior-3.jpg","/assets/shkaf-dior-4.jpg"],
    description: "Шкаф «Диор» — размер 300х250х50.",
    characteristics: [["Размер", "300х250х50"], ["Корпус", "ЛДСП"], ["Фасады", "МДФ крашеный"]],
  },
  {
    slug: "shkaf-marsel-2",
    name: "Шкаф Марсель",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "38 000 ₽",
    image: "/assets/shkaf-marsel-2-1.jpg",
    images: ["/assets/shkaf-marsel-2-1.jpg"],
    description: "Шкаф Марсель — в цвете белый, размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"], ["Цвет", "белый"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-boston-3",
    name: "Шкаф «Бостон»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "37 000 ₽",
    image: "/assets/shkaf-boston-3-1.jpg",
    images: ["/assets/shkaf-boston-3-1.jpg","/assets/shkaf-boston-3-2.jpg"],
    description: "Шкаф «Бостон» — в цвете белый, размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-aleksandriya-2",
    name: "Шкаф «Александрия»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "30 000 ₽",
    image: "/assets/shkaf-aleksandriya-2-1.jpg",
    images: ["/assets/shkaf-aleksandriya-2-1.jpg"],
    description: "Шкаф «Александрия» — в цвете Белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "Белый"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-adel-5",
    name: "Шкаф «Адель»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "29 000 ₽",
    image: "/assets/shkaf-adel-3-1.jpg",
    images: ["/assets/shkaf-adel-3-1.jpg"],
    description: "Шкаф «Адель» — в цвете Белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "Белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-adel-6",
    name: "Шкаф «Адель»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "24 000 ₽",
    image: "/assets/shkaf-adel-6-1.jpg",
    images: ["/assets/shkaf-adel-6-1.jpg"],
    description: "Шкаф «Адель» — в цвете белый, размер 90х220х50.",
    characteristics: [["Размер", "90х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-adel-7",
    name: "Шкаф «Адель»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "34 000 ₽",
    image: "/assets/shkaf-adel-7-1.jpg",
    images: ["/assets/shkaf-adel-7-1.jpg"],
    description: "Шкаф «Адель» — в цвете белый, размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "МДФ"]],
  },
  {
    slug: "shkaf-boston-4",
    name: "Шкаф «Бостон»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-boston-4-1.jpg",
    images: ["/assets/shkaf-boston-4-1.jpg"],
    description: "Шкаф «Бостон» — в цвете белый, размер 200х225х50.",
    characteristics: [["Размер", "200х225х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-boston-5",
    name: "Шкаф «Бостон»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "45 000 ₽",
    image: "/assets/shkaf-boston-5-1.jpg",
    images: ["/assets/shkaf-boston-5-1.jpg","/assets/shkaf-boston-5-2.jpg"],
    description: "Шкаф «Бостон» — в цвете СЕРЫЙ, размер 300х225х60.",
    characteristics: [["Размер", "300х225х60"], ["Цвет", "СЕРЫЙ"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-liana-2",
    name: "Шкаф «Лиана»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "от 52 000 ₽",
    image: "/assets/shkaf-liana-2-1.jpg",
    images: ["/assets/shkaf-liana-2-1.jpg","/assets/shkaf-liana-2-2.jpg","/assets/shkafl-liana-3.jpg","/assets/shkaf-liana-2-4.jpg","/assets/shkaf-liana-2-5.jpg"],
    description: "Шкаф «Лиана» — в цвете бежевый, размер 200х235х57.",
    characteristics: [["Размер", "200х235х57"], ["Цвет", "бежевый"]],
  },
  {
    slug: "shkaf-neogara-5-dvernyy",
    name: "Шкаф Неогара 5-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "70 000 ₽",
    image: "/assets/shkaf-neogara-5ti-1.jpg",
    images: ["/assets/shkaf-neogara-5ti-1.jpg","/assets/shkaf-neogara-5ti-2.jpg","/assets/shkaf-neogara-5ti-3.jpg","/assets/shkaf-neogara-5ti-4.jpg","/assets/shkaf-neogara-5ti-5.jpg","/assets/shkaf-neogara-5ti-6.jpg","/assets/shkaf-neogara-5ti-7.jpg"],
    description: "Шкаф Неогара 5-дверный — в цвете белый в серебре, размер 390х230х60.",
    characteristics: [["Размер", "390х230х60"], ["Цвет", "белый в серебре"]],
  },
  {
    slug: "shkaf-liana-3",
    name: "Шкаф «Лиана»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "от 41 000 ₽",
    image: "/assets/shkaf-liana-3-1.jpg",
    images: ["/assets/shkaf-liana-3-1.jpg","/assets/shkaf-liana-3-2.jpg","/assets/shkaf-liana-3-3.jpg","/assets/shkaf-liana-3-4.jpg","/assets/shkaf-liana-3-5.jpg"],
    description: "Шкаф «Лиана» — в цвете бежевый, размер 140х235х57.",
    characteristics: [["Размер", "140х235х57"], ["Цвет", "бежевый"]],
  },
  {
    slug: "shkaf-liana-4",
    name: "Шкаф «Лиана»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "от 44 000 ₽",
    image: "/assets/shkaf-liana-2-5.jpg",
    images: ["/assets/shkaf-liana-2-5.jpg","/assets/shkaf-liana-2-2.jpg","/assets/shkaf-liana-2-4.jpg","/assets/shkafl-liana-3.jpg","/assets/shkaf-liana-2-1.jpg"],
    description: "Шкаф «Лиана» — в цвете бежевый, размер 200х235х57.",
    characteristics: [["Размер", "200х235х57"], ["Цвет", "бежевый"]],
  },
  {
    slug: "shkaf-sharlotta-2",
    name: "Шкаф «Шарлотта»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-sharlotta-2-1.jpg",
    images: ["/assets/shkaf-sharlotta-2-1.jpg"],
    description: "Шкаф «Шарлотта» — в цвете белый, размер 225х220х50.",
    characteristics: [["Размер", "225х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-veneciya",
    name: "Шкаф «Венеция»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-veneciya-1.jpg",
    images: ["/assets/shkaf-veneciya-1.jpg"],
    description: "Шкаф «Венеция» — в цвете белый, размер 200х220х50.",
    characteristics: [["Размер", "200х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-neogara-2",
    name: "Шкаф Неогара",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "60 000 ₽",
    image: "/assets/shkaf-neogara-2-1.jpg",
    images: ["/assets/shkaf-neogara-2-1.jpg","/assets/shkaf-neogara-2-2.jpg","/assets/shkaf-neogara-2-3.jpg","/assets/shkaf-neogara-1.jpg","/assets/shkaf-neogara-2-5.jpg"],
    description: "Шкаф Неогара — в цвете бежевый, размер 310х230х60.",
    characteristics: [["Размер", "310х230х60"], ["Цвет", "бежевый"]],
  },
  {
    slug: "shkaf-aysha",
    name: "Шкаф «Айша»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "45 000 ₽",
    image: "/assets/shkaf-aysha-1.jpg",
    images: ["/assets/shkaf-aysha-1.jpg","/assets/shkaf-aysha-2.jpg","/assets/shkaf-aysha-3.jpg","/assets/shkaf-aysha-4.jpg"],
    description: "Шкаф «Айша» — в цвете белый, размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-sayrina",
    name: "Шкаф «Сайрина»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "47 000 ₽",
    image: "/assets/shkaf-sayrina-1.jpg",
    images: ["/assets/shkaf-sayrina-1.jpg","/assets/shkaf-sayrina-2.jpg"],
    description: "Шкаф «Сайрина» — в цвете фасада - лина, размер 180х270х50.",
    characteristics: [["Размер", "180х270х50"], ["Цвет", "фасада - лина"], ["Фасады", "крашенный МДФ"]],
  },
  {
    slug: "shkaf-sayrina-2",
    name: "Шкаф «Сайрина»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "55 000 ₽",
    image: "/assets/shkaf-sayrina-2-1.jpg",
    images: ["/assets/shkaf-sayrina-2-1.jpg","/assets/shkaf-sayrina-2-2.jpg","/assets/shkaf-sayrina-2-3.jpg","/assets/shkaf-sayrina-2-4.jpg"],
    description: "Шкаф «Сайрина» — в цвете фасада - белый, размер 270х270х50.",
    characteristics: [["Размер", "270х270х50"], ["Цвет", "фасада - белый"], ["Фасады", "крашенный МДФ"]],
  },
  {
    slug: "shkaf-dzhenet-6-dvernyy",
    name: "Шкаф «Дженет» 6-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "58 000 ₽",
    image: "/assets/shkaf-dzhenet-6-ti-1.jpg",
    images: ["/assets/shkaf-dzhenet-6-ti-1.jpg"],
    description: "Шкаф «Дженет» 6-дверный — размер 220х50х50.",
    characteristics: [["Размер", "220х50х50"]],
  },
  {
    slug: "shkaf-aliya-5-dvernyy",
    name: "Шкаф Алия 5-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "35 000 ₽",
    image: "/assets/shkaf-aliya-5ti-1.jpg",
    images: ["/assets/shkaf-aliya-5ti-1.jpg","/assets/shkaf-aliya-5ti-2.jpg"],
    description: "Шкаф Алия 5-дверный — в цвете Белый, размер 225х220х50.",
    characteristics: [["Размер", "225х220х50"], ["Цвет", "Белый"]],
  },
  {
    slug: "shkaf-aysha-2",
    name: "Шкаф «АЙША»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "46 000 ₽",
    image: "/assets/shkaf-aysha-2-1.jpg",
    images: ["/assets/shkaf-aysha-2-1.jpg","/assets/shkaf-aysha-2-2.jpg"],
    description: "Шкаф «АЙША» — в цвете Лино, размер 225х220х50.",
    characteristics: [["Размер", "225х220х50"], ["Цвет", "Лино"]],
  },
  {
    slug: "shkaf-dior-4-dvernyy",
    name: "Шкаф «Диор» 4-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "39 000 ₽",
    image: "/assets/shkaf-dior-4h-1.jpg",
    images: ["/assets/shkaf-dior-4h-1.jpg","/assets/shkaf-dior-4h-2.jpg"],
    description: "Шкаф «Диор» 4-дверный — в цвете Белый, размер 200х250х50.",
    characteristics: [["Размер", "200х250х50"], ["Цвет", "Белый"]],
  },
  {
    slug: "shkaf-nailya-4-dvernyy",
    name: "Шкаф Наиля 4-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "40 000 ₽",
    image: "/assets/shkaf-nailya-4h-1.jpg",
    images: ["/assets/shkaf-nailya-4h-1.jpg","/assets/shkaf-nailya-4h-2.jpg"],
    description: "Шкаф Наиля 4-дверный — в цвете Белый, размер 200х225х50.",
    characteristics: [["Размер", "200х225х50"], ["Цвет", "Белый"]],
  },
  {
    slug: "shkaf-sofiya",
    name: "Шкаф София»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "36 000 ₽",
    image: "/assets/shkaf-sofiya-1.jpg",
    images: ["/assets/shkaf-sofiya-1.jpg","/assets/shkaf-sofiya-2.jpg"],
    description: "Шкаф София» — в цвете Белый ,серый, размер 160х225х55.",
    characteristics: [["Размер", "160х225х55"], ["Цвет", "Белый ,серый"]],
  },
  {
    slug: "shkaf-muslim-270",
    name: "Шкаф «Муслим 270»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "53 000 ₽",
    image: "/assets/shkaf-muslim-270-1.jpg",
    images: ["/assets/shkaf-muslim-270-1.jpg","/assets/shkaf-muslim-270-2.jpg","/assets/shkaf-muslim-270-3.jpg"],
    description: "Шкаф «Муслим 270» — размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"]],
  },
  {
    slug: "shkaf-mays",
    name: "Шкаф Майс",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "36 000 ₽",
    image: "/assets/shkaf-mays-1.jpg",
    images: ["/assets/shkaf-mays-1.jpg","/assets/shkaf-mays-2.jpg","/assets/shkaf-mays-3.jpg"],
    description: "Шкаф Майс — в цвете белый, размер 270х220х50.",
    characteristics: [["Размер", "270х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-maryam-3-dvernyy",
    name: "Шкаф марям 3-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "26 000 ₽",
    image: "/assets/shkaf-maryam-3h-1.jpg",
    images: ["/assets/shkaf-maryam-3h-1.jpg","/assets/shkaf-maryam-3h-2.jpg","/assets/shkaf-maryam-3h-3.jpg"],
    description: "Шкаф марям 3-дверный — в цвете белый, размер 135х220х50.",
    characteristics: [["Размер", "135х220х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-turciya-s-antresolyami",
    name: "Шкаф «Турция» с антресолями",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "55 000 ₽",
    image: "/assets/shkaf-turciya-s-antresolyami-1.jpg",
    images: ["/assets/shkaf-turciya-s-antresolyami-1.jpg","/assets/shkaf-turciya-s-antresolyami-2.jpg","/assets/shkaf-turciya-s-antresolyami-3.jpg"],
    description: "Шкаф «Турция» с антресолями — в цвете белый и Лина, размер 270х270х50.",
    characteristics: [["Размер", "270х270х50"], ["Цвет", "белый и Лина"]],
  },
  {
    slug: "shkaf-mays-4-dvernyy",
    name: "Шкаф «Майс» 4-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "31 000 ₽",
    image: "/assets/shkaf-mays-4h-1.jpg",
    images: ["/assets/shkaf-mays-4h-1.jpg","/assets/shkaf-mays-4h-2.jpg"],
    description: "Шкаф «Майс» 4-дверный — в цвете белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-miya-3",
    name: "Шкаф Мия",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "28 500 ₽",
    image: "/assets/shkaf-miya-3-1.jpg",
    images: ["/assets/shkaf-miya-3-1.jpg","/assets/shkaf-miya-3-2.jpg"],
    description: "Шкаф Мия — в цвете Белый Бежевый, размер 135х220х50.",
    characteristics: [["Размер", "135х220х50"], ["Цвет", "Белый Бежевый"]],
  },
  {
    slug: "shkaf-miya-aleksandriya",
    name: "Шкаф Мия ( Александрия )",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "31 000 ₽",
    image: "/assets/shkaf-miya-aleksandriya-1.jpg",
    images: ["/assets/shkaf-miya-aleksandriya-1.jpg","/assets/shkaf-miya-aleksandriya-2.jpg","/assets/shkaf-miya-aleksandriya-3.jpg"],
    description: "Шкаф Мия ( Александрия ) — в цвете Белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "Белый"]],
  },
  {
    slug: "shkaf-dior-2",
    name: "Шкаф «ДИОР»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "31 000 ₽",
    image: "/assets/shkaf-dior-2-1.jpg",
    images: ["/assets/shkaf-dior-2-1.jpg","/assets/shkaf-dior-2-2.jpg"],
    description: "Шкаф «ДИОР» — в цвете белый,серый, размер 100х250х50.",
    characteristics: [["Размер", "100х250х50"], ["Цвет", "белый,серый"]],
  },
  {
    slug: "shkaf-samina-2",
    name: "Шкаф «Самина»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "23 000 ₽",
    image: "/assets/shkaf-samina-2-1.jpg",
    images: ["/assets/shkaf-samina-2-1.jpg"],
    description: "Шкаф «Самина» — в цвете Белый, размер 90х220х50.",
    characteristics: [["Размер", "90х220х50"], ["Цвет", "Белый"]],
  },
  {
    slug: "shkaf-nika-2-dvernyy",
    name: "Шкаф Ника 2-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "25 000 ₽",
    image: "/assets/shkaf-nika-2h-1.jpg",
    images: ["/assets/shkaf-nika-2h-1.jpg","/assets/shkaf-nika-2h-2.jpg"],
    description: "Шкаф Ника 2-дверный — в цвете Белый, размер 100х220х50.",
    characteristics: [["Размер", "100х220х50"], ["Цвет", "Белый"]],
  },
  {
    slug: "shkaf-vizit",
    name: "Шкаф «Визит»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "38 000 ₽",
    image: "/assets/shkaf-vizit-1.jpg",
    images: ["/assets/shkaf-vizit-1.jpg","/assets/shkaf-vizit-2.jpg"],
    description: "Шкаф «Визит» — в цвете белый, размер 270х223х50.",
    characteristics: [["Размер", "270х223х50"], ["Цвет", "белый"], ["Корпус", "дсп"], ["Фасады", "мдф"]],
  },
  {
    slug: "shkaf-modern",
    name: "Шкаф \"Модерн\"",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "32 000 ₽",
    image: "/assets/shkaf-modern-1.jpg",
    images: ["/assets/shkaf-modern-1.jpg"],
    description: "Шкаф \"Модерн\" — в цвете белый, размер 220х220х50.",
    characteristics: [["Размер", "220х220х50"], ["Цвет", "белый"]],
  },
  {
    slug: "shkaf-milana-s-antresolyami",
    name: "Шкаф Милана с антресолями",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "60 000 ₽",
    image: "/assets/shkaf-milana-s-antresolyami-1.jpg",
    images: ["/assets/shkaf-milana-s-antresolyami-1.jpg"],
    description: "Шкаф Милана с антресолями — в цвете фасада Лина, размер 270х270х50.",
    characteristics: [["Размер", "270х270х50"], ["Цвет", "фасада Лина"]],
  },
  {
    slug: "shkaf-aysha-s-antresolyami",
    name: "Шкаф Айша с антресолями",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "77 000 ₽",
    image: "/assets/shkaf-aysha-s-antresolyami-1.jpg",
    images: ["/assets/shkaf-aysha-s-antresolyami-1.jpg"],
    description: "Шкаф Айша с антресолями — в цвете фасада Лина, размер 270х270х50.",
    characteristics: [["Размер", "270х270х50"], ["Цвет", "фасада Лина"]],
  },
  {
    slug: "shkaf-aysha-s-stellazhom",
    name: "Шкаф Айша с стеллажом",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "от 63 000 ₽",
    image: "/assets/shkaf-aysha-s-stellazhom-1.jpg",
    images: ["/assets/shkaf-aysha-s-stellazhom-1.jpg"],
    description: "Шкаф Айша с стеллажом — в цвете фасада белый, размер 230х270х50.",
    characteristics: [["Размер", "230х270х50"], ["Цвет", "фасада белый"]],
  },
  {
    slug: "shkaf-aysha-s-antresolyami-2",
    name: "Шкаф Айша с антресолями",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "от 97 000 ₽",
    image: "/assets/shkaf-aysha-s-antresolyami-2-1.jpg",
    images: ["/assets/shkaf-aysha-s-antresolyami-2-1.jpg","/assets/shkaf-aysha-s-antresolyami-2-2.jpg"],
    description: "Шкаф Айша с антресолями — в цвете фасада белый, размер 450х270х50.",
    characteristics: [["Размер", "450х270х50"], ["Цвет", "фасада белый"]],
  },
  {
    slug: "shkaf-aysha-4-dvernyy",
    name: "Шкаф Айша 4-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "37 000 ₽",
    image: "/assets/shkaf-aysha-4h-1.jpg",
    images: ["/assets/shkaf-aysha-4h-1.jpg","/assets/shkaf-aysha-4h-2.jpg"],
    description: "Шкаф Айша 4-дверный — в цвете Белый, размер 180х220х50.",
    characteristics: [["Размер", "180х220х50"], ["Цвет", "Белый"]],
  },
  {
    slug: "shkaf-dior-4-dvernyy-2",
    name: "Шкаф «Диор» 4-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "49 000 ₽",
    image: "/assets/shkaf-dior-4h-2-1.jpg",
    images: ["/assets/shkaf-dior-4h-2-1.jpg","/assets/shkaf-dior-4h-2-2.jpg","/assets/shkaf-dior-4h-2-3.jpg","/assets/shkaf-dior-4h-2-4.jpg"],
    description: "Шкаф «Диор» 4-дверный — в цвете Белый, размер 200х250х50.",
    characteristics: [["Размер", "200х250х50"], ["Цвет", "Белый"]],
  },
  {
    slug: "shkaf-tanziliya-3-dvernyy",
    name: "Шкаф Танзилия 3-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "29 000 ₽",
    image: "/assets/shkaf-tanziliya-3h-1.jpg",
    images: ["/assets/shkaf-tanziliya-3h-1.jpg","/assets/shkaf-tanziliya-3h-2.jpg","/assets/shkaf-tanziliya-3h-3.jpg","/assets/shkaf-tanziliya-3h-4.jpg"],
    description: "Шкаф Танзилия 3-дверный — в цвете Ваниль, размер 120х210х40.",
    characteristics: [["Размер", "120х210х40"], ["Цвет", "Ваниль"]],
  },
  {
    slug: "shkaf-dzhannet-4-dvernyy",
    name: "Шкаф Джаннет 4-дверный",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "30 000 ₽",
    image: "/assets/shkaf-dzhannet-4h-1.jpg",
    images: ["/assets/shkaf-dzhannet-4h-1.jpg","/assets/shkaf-dzhannet-4h-2.jpg"],
    description: "Шкаф Джаннет 4-дверный — в цвете Серый, размер 160х220х50.",
    characteristics: [["Размер", "160х220х50"], ["Цвет", "Серый"]],
  },
  // Imported closets end
  // Imported beds start
  {
    slug: "krovat-gold",
    name: "Кровать «Голд»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "30 000 ₽",
    image: "/assets/krovat-gold-1.jpg",
    images: ["/assets/krovat-gold-1.jpg", "/assets/krovat-gold-2.jpg", "/assets/krovat-gold-3.jpg", "/assets/krovat-gold-4.jpg"],
    description: "Кровать «Голд» — кровать со спальным местом 180х200, 160х200.",
    characteristics: [
      ["Спальное место", "180х200, 160х200"],
      ["Матрас", "не входит"],
      ["Варианты цены", "Цена 180х200 . 30 тыс; Цена 160х200 . 30 тыс"],
    ],
  },
  {
    slug: "krovat-markiza",
    name: "Кровать Маркиза",
    category: "Кровати",
    categorySlug: "krovati",
    price: "20 000 ₽",
    image: "/assets/krovat-markiza-1.jpg",
    images: ["/assets/krovat-markiza-1.jpg", "/assets/krovat-markiza-2.jpg"],
    description: "Кровать Маркиза — кровать со спальным местом 90х200.",
    characteristics: [
      ["Спальное место", "90х200"],
    ],
  },
  {
    slug: "krovat-sofiya",
    name: "Кровать «София»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "22 000 ₽",
    image: "/assets/krovat-sofiya-1.jpg",
    images: ["/assets/krovat-sofiya-1.jpg"],
    description: "Кровать «София» — кровать со спальным местом 90х200.",
    characteristics: [
      ["Спальное место", "90х200"],
    ],
  },
  {
    slug: "krovat-ameli",
    name: "Кровать «АМЕЛИ»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "15 000 ₽",
    image: "/assets/krovat-ameli-1.jpg",
    images: ["/assets/krovat-ameli-1.jpg"],
    description: "Кровать «АМЕЛИ» — кровать со спальным местом 90х200, 108х104, в цвете Ваниль.",
    characteristics: [
      ["Спальное место", "90х200, 108х104"],
      ["Цвет", "Ваниль"],
      ["Материал", "крашенный"],
    ],
  },
  {
    slug: "krovat-geometriya",
    name: "Кровать «Геометрия»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "15 500 ₽",
    image: "/assets/krovat-geometriya-1.jpg",
    images: ["/assets/krovat-geometriya-1.jpg"],
    description: "Кровать «Геометрия» — кровать со спальным местом 90х200.",
    characteristics: [
      ["Спальное место", "90х200"],
    ],
  },
  {
    slug: "krovat-vesta",
    name: "Кровать «Веста»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "20 000 ₽",
    image: "/assets/krovat-vesta-1.jpg",
    images: ["/assets/krovat-vesta-1.jpg"],
    description: "Кровать «Веста» — кровать со спальным местом 90х200.",
    characteristics: [
      ["Спальное место", "90х200"],
    ],
  },
  {
    slug: "krovat-adel",
    name: "Кровать «Адель»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "23 000 ₽",
    image: "/assets/krovat-adel-1.jpg",
    images: ["/assets/krovat-adel-1.jpg", "/assets/krovat-adel-2.jpg"],
    description: "Кровать «Адель» — кровать со спальным местом 180х200.",
    characteristics: [
      ["Спальное место", "180х200"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "krovat-vesta-2",
    name: "Кровать Веста",
    category: "Кровати",
    categorySlug: "krovati",
    price: "31 000 ₽",
    image: "/assets/krovat-vesta-2-1.jpg",
    images: ["/assets/krovat-vesta-2-1.jpg", "/assets/krovat-vesta-2-2.jpg"],
    description: "Кровать Веста — кровать со спальным местом 180х200, 160х200.",
    characteristics: [
      ["Спальное место", "180х200, 160х200"],
      ["Варианты цены", "Размер 180х200 31.000₽; Размер 160х200 31.000₽; Цена указана без матр"],
    ],
  },
  {
    slug: "krovat-ilona",
    name: "Кровать «Илона»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "15 000 ₽",
    image: "/assets/krovat-ilona-1.jpg",
    images: ["/assets/krovat-ilona-1.jpg"],
    description: "Кровать «Илона» — кровать со спальным местом 90х200.",
    characteristics: [
      ["Спальное место", "90х200"],
    ],
  },
  {
    slug: "krovat-valensiya",
    name: "Кровать Валенсия",
    category: "Кровати",
    categorySlug: "krovati",
    price: "от 35 000 ₽",
    image: "/assets/krovat-valensiya-1.jpg",
    images: ["/assets/krovat-valensiya-1.jpg", "/assets/krovat-valensiya-2.jpg"],
    description: "Кровать Валенсия — кровать со спальным местом 180х200, 160х200, с подъемным механизмом.",
    characteristics: [
      ["Спальное место", "180х200, 160х200"],
      ["Подъемный механизм", "есть"],
      ["Матрас", "не входит"],
      ["Варианты цены", "180/200 цена 36.000₽; 160/200 цена 35.000₽"],
    ],
  },
  {
    slug: "krovat-adel-2",
    name: "Кровать «Адель»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "15 000 ₽",
    image: "/assets/krovat-adel-2-1.jpg",
    images: ["/assets/krovat-adel-2-1.jpg"],
    description: "Кровать «Адель» — кровать со спальным местом 90х200.",
    characteristics: [
      ["Спальное место", "90х200"],
    ],
  },
  {
    slug: "krovat-dzhasmin",
    name: "Кровать «Джасмин»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "17 000 ₽",
    image: "/assets/krovat-dzhasmin-1.jpg",
    images: ["/assets/krovat-dzhasmin-1.jpg"],
    description: "Кровать «Джасмин» — кровать со спальным местом 90х200.",
    characteristics: [
      ["Спальное место", "90х200"],
    ],
  },
  {
    slug: "krovat-yunior-4-1-8m",
    name: "Кровать Юниор - 4 1.8м",
    category: "Кровати",
    categorySlug: "krovati",
    price: "22 300 ₽",
    image: "/assets/krovat-yunior-4-1-8m-1.jpg",
    images: ["/assets/krovat-yunior-4-1-8m-1.jpg"],
    description: "Кровать Юниор - 4 1.8м — кровать в цвете Шарли Белый/Дуб Крафт Белый.",
    characteristics: [
      ["Цвет", "Шарли Белый/Дуб Крафт Белый"],
    ],
  },
  {
    slug: "krovat-mori-krm-1600-1",
    name: "Кровать Мори КРМ 1600.1",
    category: "Кровати",
    categorySlug: "krovati",
    price: "17 500 ₽",
    image: "/assets/krovat-mori-krm-1600-1-1.jpg",
    images: ["/assets/krovat-mori-krm-1600-1-1.jpg", "/assets/krovat-mori-krm-1600-1-2.jpg"],
    description: "Кровать Мори КРМ 1600.1 — кровать в цвете Графит и Белый.",
    characteristics: [
      ["Цвет", "Графит и Белый"],
      ["Материал", "ЛДСП"],
    ],
  },
  {
    slug: "krovat-chelsi-1600",
    name: "Кровать Челси 1600",
    category: "Кровати",
    categorySlug: "krovati",
    price: "19 800 ₽",
    image: "/assets/krovat-chelsi-1600-1.jpg",
    images: ["/assets/krovat-chelsi-1600-1.jpg", "/assets/krovat-chelsi-1600-2.jpg"],
    description: "Кровать Челси 1600 — кровать в цвете белый.",
    characteristics: [
      ["Цвет", "белый"],
      ["Материал", "ЛДСП"],
    ],
  },
  {
    slug: "krovat-mori-krm-900-1",
    name: "Кровать Мори КРМ 900.1",
    category: "Кровати",
    categorySlug: "krovati",
    price: "15 800 ₽",
    image: "/assets/krovat-mori-krm-900-1-1.jpg",
    images: ["/assets/krovat-mori-krm-900-1-1.jpg", "/assets/krovat-mori-krm-900-1-2.jpg"],
    description: "Кровать Мори КРМ 900.1 — кровать в цвете Графит и белый.",
    characteristics: [
      ["Цвет", "Графит и белый"],
      ["Материал", "ЛДСП"],
    ],
  },
  {
    slug: "krovat-180h200-160h200",
    name: "Кровать 180х200 / 160х200",
    category: "Кровати",
    categorySlug: "krovati",
    price: "от 31 000 ₽",
    image: "/assets/krovat-180h200-160h200-1.jpg",
    images: ["/assets/krovat-180h200-160h200-1.jpg", "/assets/krovat-180h200-160h200-2.jpg", "/assets/krovat-180h200-160h200-3.jpg", "/assets/krovat-180h200-160h200-4.jpg", "/assets/krovat-180h200-160h200-5.jpg", "/assets/krovat-180h200-160h200-6.jpg", "/assets/krovat-180h200-160h200-7.jpg", "/assets/krovat-180h200-160h200-8.jpg", "/assets/krovat-180h200-160h200-9.jpg", "/assets/krovat-180h200-160h200-10.jpg", "/assets/krovat-180h200-160h200-11.jpg", "/assets/krovat-180h200-160h200-12.jpg", "/assets/krovat-180h200-160h200-13.jpg", "/assets/krovat-180h200-160h200-14.jpg", "/assets/krovat-180h200-160h200-15.jpg", "/assets/krovat-180h200-160h200-16.jpg", "/assets/krovat-180h200-160h200-17.jpg", "/assets/krovat-180h200-160h200-18.jpg"],
    description: "Кровать 180х200 / 160х200 — кровать со спальным местом 180х200, 160х200.",
    characteristics: [
      ["Спальное место", "180х200, 160х200"],
      ["Матрас", "не входит"],
      ["Варианты цены", "Цена 32,000₽ без матраса; С механизмом 35,000₽; Цена 31,000₽ без матраса; С механизмом 34,000₽"],
    ],
  },
  {
    slug: "krovat-na-zakaz",
    name: "Кровать на заказ",
    category: "Кровати",
    categorySlug: "krovati",
    price: "от 31 000 ₽",
    image: "/assets/krovat-na-zakaz-1.jpg",
    images: ["/assets/krovat-na-zakaz-1.jpg"],
    description: "Кровать на заказ — кровать со спальным местом 180х200, 160х200.",
    characteristics: [
      ["Спальное место", "180х200, 160х200"],
      ["Матрас", "не входит"],
      ["Варианты цены", "Цена 32,000₽ без матраса; С механизмом 35,000₽; Цена 31,000₽ без матраса; С механизмом 34,000₽"],
    ],
  },
  {
    slug: "krovat-na-zakaz-90h200",
    name: "Кровать на заказ 90х200",
    category: "Кровати",
    categorySlug: "krovati",
    price: "от 26 000 ₽",
    image: "/assets/krovat-na-zakaz-90h200-1.jpg",
    images: ["/assets/krovat-na-zakaz-90h200-1.jpg", "/assets/krovat-na-zakaz-90h200-2.jpg", "/assets/krovat-na-zakaz-90h200-3.jpg", "/assets/krovat-na-zakaz-90h200-4.jpg", "/assets/krovat-na-zakaz-90h200-5.jpg", "/assets/krovat-na-zakaz-90h200-6.jpg", "/assets/krovat-na-zakaz-90h200-7.jpg", "/assets/krovat-na-zakaz-90h200-8.jpg", "/assets/krovat-na-zakaz-90h200-9.jpg"],
    description: "Кровать на заказ 90х200 — кровать со спальным местом 90х200.",
    characteristics: [
      ["Спальное место", "90х200"],
      ["Варианты цены", "Цена 26,000₽; С механизмом 28,500₽"],
    ],
  },
  // Imported beds end
  // Telegram bedroom sets import start
  {
    slug: "spalnya-miya",
    name: "Спальня Мия",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "73 000 ₽ / компл.",
    image: "/assets/spalnya-miya-1.jpg",
    images: ["/assets/spalnya-miya-1.jpg", "/assets/spalnya-miya-2.jpg", "/assets/spalnya-miya-3.jpg", "/assets/spalnya-miya-4.jpg", "/assets/spalnya-miya-5.jpg"],
    description: "Спальня Мия — спальный гарнитур в цвете Мокко, с кроватью 180/200.",
    characteristics: [
      ["Цвет", "Цвет Мокко"],
      ["Фабрика", "Фабрика Миал"],
      ["Кровать", "Кровать 180/200"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-dia-6dv",
    name: "Спальня «ДИА» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "100 000 ₽ / компл.",
    image: "/assets/spalnya-dia-6dv-1.jpg",
    images: ["/assets/spalnya-dia-6dv-1.jpg", "/assets/spalnya-dia-6dv-2.jpg", "/assets/spalnya-dia-6dv-3.jpg", "/assets/spalnya-dia-6dv-4.jpg", "/assets/spalnya-dia-6dv-5.jpg"],
    description: "Спальня «ДИА» с 6-дверным шкафом — спальный гарнитур в цвете Белый, с кроватью 180х200, со шкафом Ш(2705) Г(616) В(2200.",
    characteristics: [
      ["Цвет", "Белый"],
      ["Кровать", "(Кровать 180х200)"],
      ["Шкаф", "Ш(2705) Г(616) В(2200)"],
      ["Тумба", "Ш(600) Г(416) В(400)"],
      ["Кровать", "Ш(2080) Г(3080) В(1220)"],
    ],
  },
  {
    slug: "spalnya-allegro-6ti-belyy",
    name: "Спальня «Аллегро» с 6-дверным шкафом белый",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "83 000 ₽ / компл.",
    image: "/assets/spalnya-allegro-6ti-belyy-1.jpg",
    images: ["/assets/spalnya-allegro-6ti-belyy-1.jpg", "/assets/spalnya-allegro-6ti-belyy-2.jpg", "/assets/spalnya-allegro-6ti-belyy-3.jpg", "/assets/spalnya-allegro-6ti-belyy-4.jpg", "/assets/spalnya-allegro-6ti-belyy-5.jpg", "/assets/spalnya-allegro-6ti-belyy-6.jpg", "/assets/spalnya-allegro-6ti-belyy-7.jpg", "/assets/spalnya-allegro-6ti-belyy-8.jpg"],
    description: "Спальня «Аллегро» с 6-дверным шкафом белый — спальный гарнитур с кроватью 1800/2000, со шкафом 6-дверный. 2720×2200x586о.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Милана групп (Краснодар)"],
      ["Шкаф", "Шкаф 6-дверный. 2720×2200x586о"],
      ["Кровать", "Кровать1.80. 1875x1200×2055"],
      ["Тумба", "Тумба 460×520×415"],
      ["Комод", "Комод 920x895×530"],
    ],
  },
  {
    slug: "spalnya-byanka",
    name: "Спальня Бьянка",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "56 000 ₽ / компл.",
    image: "/assets/spalnya-byanka-1.jpg",
    images: ["/assets/spalnya-byanka-1.jpg", "/assets/spalnya-byanka-2.jpg", "/assets/spalnya-byanka-3.jpg"],
    description: "Спальня Бьянка — спальный гарнитур в цвете Матовый Белый.",
    characteristics: [
      ["Фабрика", "Фабрика Империя"],
      ["Цвет", "Цвет Матовый Белый"],
      ["Комод", "Комод"],
    ],
  },
  {
    slug: "spalnya-rianna-6-dver",
    name: "Спальня Рианна с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "90 000 ₽ / компл.",
    image: "/assets/spalnya-rianna-6-dver-1.jpg",
    images: ["/assets/spalnya-rianna-6-dver-1.jpg"],
    description: "Спальня Рианна с 6-дверным шкафом — спальный гарнитур с кроватью 180/200.",
    characteristics: [
      ["Фабрика", "Фабрика Миал"],
      ["Кровать", "Кровать 180/200"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-nikol",
    name: "Спальня Николь",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "60 000 ₽ / компл.",
    image: "/assets/spalnya-nikol-1.jpg",
    images: ["/assets/spalnya-nikol-1.jpg", "/assets/spalnya-nikol-2.jpg"],
    description: "Спальня Николь — спальный гарнитур с кроватью 180/200.",
    characteristics: [
      ["Фабрика", "Фабрика Империя"],
      ["Кровать", "Кровать 180/200"],
    ],
  },
  {
    slug: "spalnya-bogemiya-5-dver",
    name: "Спальня Богемия с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "47 000 ₽ / компл.",
    image: "/assets/spalnya-bogemiya-5-dver-1.jpg",
    images: ["/assets/spalnya-bogemiya-5-dver-1.jpg"],
    description: "Спальня Богемия с 5-дверным шкафом — спальный гарнитур.",
    characteristics: [
      ["Производство", "Производство Краснодар"],
      ["Фабрика", "Фабрика Империя"],
    ],
  },
  {
    slug: "spalnya-azaliya-6-lyuks",
    name: "Спальня Азалия-6 люкс",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "54 000 ₽ / компл.",
    image: "/assets/spalnya-azaliya-6-lyuks-1.jpg",
    images: ["/assets/spalnya-azaliya-6-lyuks-1.jpg"],
    description: "Спальня Азалия-6 люкс — спальный гарнитур в цвете Глянец.",
    characteristics: [
      ["Цвет", "Глянец"],
      ["Характеристика", "Размер кровати 180/200"],
      ["Матрас", "Без матраса!!!."],
    ],
  },
  {
    slug: "spalnya-bella",
    name: "Спальня Бэлла",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "78 000 ₽ / компл.",
    image: "/assets/spalnya-bella-1.jpg",
    images: ["/assets/spalnya-bella-1.jpg", "/assets/spalnya-bella-2.jpg", "/assets/spalnya-bella-3.jpg", "/assets/spalnya-bella-4.jpg", "/assets/spalnya-bella-5.jpg"],
    description: "Спальня Бэлла — спальный гарнитур с кроватью 180/200.",
    characteristics: [
      ["Фабрика", "Фабрика Миал"],
      ["Кровать", "Кровать 180/200"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-nensi-6ti",
    name: "Спальня «Нэнси» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "125 000 ₽ / компл.",
    image: "/assets/spalnya-nensi-6ti-1.jpg",
    images: ["/assets/spalnya-nensi-6ti-1.jpg", "/assets/spalnya-nensi-6ti-2.jpg", "/assets/spalnya-nensi-6ti-3.jpg", "/assets/spalnya-nensi-6ti-4.jpg", "/assets/spalnya-nensi-6ti-5.jpg", "/assets/spalnya-nensi-6ti-6.jpg"],
    description: "Спальня «Нэнси» с 6-дверным шкафом — спальный гарнитур с кроватью 180/200, со шкафом Ш 2720 / В 2230 / Г 620.",
    characteristics: [
      ["Кровать", "180/200"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика Fortune home"],
      ["Шкаф", "Ш 2720 / В 2230 / Г 620"],
      ["Тумба", "Ш 532 / В 612 / Г 530"],
      ["Комод", "Ш 1302 / В 906 / Г 510"],
      ["Зеркало", "Ш 1080 / В 830"],
      ["Кровать", "Ш 2070 / Д 2100 / В 1440"],
    ],
  },
  {
    slug: "spalnya-parma-6ti-belyy",
    name: "Спальня «Парма» с 6-дверным шкафом белый",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-parma-6ti-belyy-1.jpg",
    images: ["/assets/spalnya-parma-6ti-belyy-1.jpg", "/assets/spalnya-parma-6ti-belyy-2.jpg", "/assets/spalnya-parma-6ti-belyy-3.jpg", "/assets/spalnya-parma-6ti-belyy-4.jpg", "/assets/spalnya-parma-6ti-belyy-5.jpg", "/assets/spalnya-parma-6ti-belyy-6.jpg", "/assets/spalnya-parma-6ti-belyy-7.jpg", "/assets/spalnya-parma-6ti-belyy-8.jpg"],
    description: "Спальня «Парма» с 6-дверным шкафом белый — спальный гарнитур с кроватью 180/200, со шкафом 2720×2200×615.",
    characteristics: [
      ["Кровать", "180/200"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика «Milan Group»"],
      ["Кровать", "1875x1200×2055"],
      ["Тумба", "600×505×436"],
      ["Комод", "1400×805×490"],
      ["Зеркало", "1200×900x16"],
      ["Шкаф", "2720×2200×615"],
    ],
  },
  {
    slug: "spalnya-dia-6ti",
    name: "Спальня «Диа» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "100 000 ₽ / компл.",
    image: "/assets/spalnya-dia-6ti-1.jpg",
    images: ["/assets/spalnya-dia-6ti-1.jpg", "/assets/spalnya-dia-6ti-2.jpg", "/assets/spalnya-dia-6ti-3.jpg", "/assets/spalnya-dia-6ti-4.jpg", "/assets/spalnya-dia-6ti-5.jpg", "/assets/spalnya-dia-6ti-6.jpg"],
    description: "Спальня «Диа» с 6-дверным шкафом — спальный гарнитур с кроватью 180/200, со шкафом 2705х616х2200.",
    characteristics: [
      ["Кровать", "Кровать 180/200"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика «milan group»"],
      ["Комод", "Цены высокая из-за того что в наличии комод, и туалетный столик"],
      ["Кровать", "2080х3080х1220"],
      ["Шкаф", "Шкаф 2705х616х2200"],
      ["Тумба", "Тумба левая/правая"],
      ["Туалетный стол", "Туалетный стол 1400х468х788"],
      ["Зеркало", "Подзеркальник 900х800х28"],
      ["Комод", "Комод 1000х470х895"],
    ],
  },
  {
    slug: "spalnya-allegro-4h-belyy",
    name: "Спальня «Аллегро» с 4-дверным шкафом белый",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "76 000 ₽ / компл.",
    image: "/assets/spalnya-allegro-4h-belyy-1.jpg",
    images: ["/assets/spalnya-allegro-4h-belyy-1.jpg"],
    description: "Спальня «Аллегро» с 4-дверным шкафом белый — спальный гарнитур с кроватью 1800/2000, со шкафом 1810×2200×586.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Milan Group»."],
      ["Шкаф", "Шкаф. 1810×2200×586"],
      ["Кровать", "Кровать1.80. 1875x1200×2055"],
      ["Тумба", "Тумба 460×520×415"],
      ["Комод", "Комод 920x895×530"],
      ["Зеркало", "Подзеркальник 800×800×60"],
    ],
  },
  {
    slug: "spalnya-florenciya-6ti-krem",
    name: "Спальня «Флоренция» с 6-дверным шкафом крем",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "140 000 ₽ / компл.",
    image: "/assets/spalnya-florenciya-6ti-krem-1.jpg",
    images: ["/assets/spalnya-florenciya-6ti-krem-1.jpg"],
    description: "Спальня «Флоренция» с 6-дверным шкафом крем — спальный гарнитур с кроватью 1800/2000, со шкафом 2901/693/2432",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Слониммебель»."],
      ["Шкаф", "2901/693/2432 (ШхГхВ)"],
      ["Туалетный стол", "1865/484/762 (ШхГхВ)"],
      ["Зеркало", "(В стоимость входит стол,зеркало)."],
      ["Зеркало", "Зеркало 1270/80/1240 (ШхГхВ)"],
      ["Тумба", "708/484/762 (ШхГхВ)"],
      ["Кровать", "2200/3177/1599 (ШхГхВ) Под матрас 1800х2000"],
    ],
  },
  {
    slug: "spalnya-valensiya-6ti-krem",
    name: "Спальня «Валенсия» с 6-дверным шкафом крем",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "125 000 ₽ / компл.",
    image: "/assets/spalnya-valensiya-6ti-krem-1.jpg",
    images: ["/assets/spalnya-valensiya-6ti-krem-1.jpg", "/assets/spalnya-valensiya-6ti-krem-2.jpg", "/assets/spalnya-valensiya-6ti-krem-3.jpg", "/assets/spalnya-valensiya-6ti-krem-4.jpg", "/assets/spalnya-valensiya-6ti-krem-5.jpg", "/assets/spalnya-valensiya-6ti-krem-6.jpg"],
    description: "Спальня «Валенсия» с 6-дверным шкафом крем — спальный гарнитур в цвете Белый глянец /Золотая патина, с кроватью 1800/2000, со шкафом 2896/696/2442",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика « Слониммебель»."],
      ["Цвет", "Белый глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Мягкое Велюр."],
      ["Шкаф", "2896/696/2442 (ШхГхВ)"],
      ["Туалетный стол", "1633/482/486 (ШхГхВ)"],
    ],
  },
  {
    slug: "spalnya-feliciya-premium-6ti-bezh-cena",
    name: "Спальня «Фелиция Премиум» с 6-дверным шкафом беж Цена",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "129 800 ₽ / компл.",
    image: "/assets/spalnya-feliciya-premium-6ti-bezh-cena-1.jpg",
    images: ["/assets/spalnya-feliciya-premium-6ti-bezh-cena-1.jpg"],
    description: "Спальня «Фелиция Премиум» с 6-дверным шкафом беж — спальный гарнитур в цвете Крем глянец /Серебро патина, с кроватью 1800/2000, со шкафом 2765/650/2480(ШхГхВ.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortune Home»."],
      ["Цвет", "Крем глянец /Серебро патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Шкаф", "2765/650/2480(ШхГхВ)"],
      ["Туалетный стол", "1798/540/815(ШхГхВ)"],
    ],
  },
  {
    slug: "spalnya-dzhokonda-5ti-radika-oreh",
    name: "Спальня «Джоконда» с 5-дверным шкафом радика орех",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "128 000 ₽ / компл.",
    image: "/assets/spalnya-dzhokonda-5ti-radika-oreh-1.jpg",
    images: ["/assets/spalnya-dzhokonda-5ti-radika-oreh-1.jpg", "/assets/spalnya-dzhokonda-5ti-radika-oreh-2.jpg", "/assets/spalnya-dzhokonda-5ti-radika-oreh-3.jpg", "/assets/spalnya-dzhokonda-5ti-radika-oreh-4.jpg", "/assets/spalnya-dzhokonda-5ti-radika-oreh-5.jpg", "/assets/spalnya-dzhokonda-5ti-radika-oreh-6.jpg"],
    description: "Спальня «Джоконда» с 5-дверным шкафом радика орех — спальный гарнитур в цвете Орех Радика глянец /Золотая патина, с кроватью 1800/2000.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida». 1 ШТ"],
      ["Цвет", "Орех Радика глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Орех."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Кровать", "Ш2125 / Г 2140 / В1677"],
      ["Туалетный стол", "Ш1662 / Г490 / В810"],
    ],
  },
  {
    slug: "spalnya-selena-5ti-belyy-tkan-sinyaya",
    name: "Спальня «Селена» с 5-дверным шкафом белый ткань синяя",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: "/assets/spalnya-selena-5ti-belyy-tkan-sinyaya-1.jpg",
    images: ["/assets/spalnya-selena-5ti-belyy-tkan-sinyaya-1.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-sinyaya-2.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-sinyaya-3.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-sinyaya-4.jpg"],
    description: "Спальня «Селена» с 5-дверным шкафом белый ткань синяя — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом Ш 2290 / В 2110 / Г 540.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortune Home»."],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Ш 2290 / В 2110 / Г 540"],
      ["Тумба", "Ш 690 / В 480 / Г 420"],
    ],
  },
  {
    slug: "spalnya-selena-5ti-belyy-tkan-rozovaya",
    name: "Спальня «Селена» с 5-дверным шкафом белый ткань розовая",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-1.jpg",
    images: ["/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-1.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-2.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-3.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-4.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-5.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-6.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-7.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-8.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-rozovaya-9.jpg"],
    description: "Спальня «Селена» с 5-дверным шкафом белый ткань розовая — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом Ш 2290 / В 2110 / Г 540.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortune Home»."],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Ш 2290 / В 2110 / Г 540"],
      ["Тумба", "Ш 690 / В 480 / Г 420"],
    ],
  },
  {
    slug: "spalnya-selena-5ti-belyy-tkan-seraya",
    name: "Спальня «Селена» с 5-дверным шкафом белый ткань серая",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: "/assets/spalnya-selena-5ti-belyy-tkan-seraya-1.jpg",
    images: ["/assets/spalnya-selena-5ti-belyy-tkan-seraya-1.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-2.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-3.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-4.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-5.jpg"],
    description: "Спальня «Селена» с 5-дверным шкафом белый ткань серая — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом Ш 2290 / В 2110 / Г 540.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortune"],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Ш 2290 / В 2110 / Г 540"],
      ["Тумба", "Ш 690 / В 480 / Г 420"],
    ],
  },
  {
    slug: "spalnya-tiffani-6-dv-krem-zoloto",
    name: "Спальня «Тиффани» с 6-дверным шкафом крем золото»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 117 700 ₽ / компл.",
    image: "/assets/spalnya-tiffani-6-dv-krem-zoloto-1.jpg",
    images: ["/assets/spalnya-tiffani-6-dv-krem-zoloto-1.jpg"],
    description: "Спальня «Тиффани» с 6-дверным шкафом крем золото» — спальный гарнитур с кроватью 180х200, со шкафом ш 2720 / г 604 / в 2300.",
    characteristics: [
      ["Кровать", "(кровать 180х200)."],
      ["Матрас", "без матраса."],
      ["Фабрика", "ФАБРИКА «Арида»"],
      ["Тумба", "ш 655 / г 489 / в 370"],
      ["Шкаф", "ш 2720 / г 604 / в 2300"],
      ["Туалетный стол", "ш 1686 / г 512 / в 1174"],
      ["Кровать", "1.8 ш 2750 / г 2058 / в 1404"],
    ],
  },
  {
    slug: "spalnya-miledi-5ti-belyy-mokko",
    name: "Спальня «Миледи» с 5-дверным шкафом белый/мокко",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "88 000 ₽ / компл.",
    image: "/assets/spalnya-miledi-5ti-belyy-mokko-1.jpg",
    images: ["/assets/spalnya-miledi-5ti-belyy-mokko-1.jpg", "/assets/spalnya-miledi-5ti-belyy-mokko-2.jpg", "/assets/spalnya-miledi-5ti-belyy-mokko-3.jpg", "/assets/spalnya-miledi-5ti-belyy-mokko-4.jpg", "/assets/spalnya-miledi-5ti-belyy-mokko-5.jpg"],
    description: "Спальня «Миледи» с 5-дверным шкафом белый/мокко — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом Ш 2290 / В 2110 / Г 545.",
    characteristics: [
      ["Кровать", "1800/2000"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика Fortune Home"],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое покрытие."],
      ["Корпус", "ЛДСП Мокко."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Ш 2290 / В 2110 / Г 545"],
      ["Кровать", "Ш 1900 / Д 2060 / В 1380"],
    ],
  },
  {
    slug: "spalnya-lorena-6ti-oreh",
    name: "Спальня «Лорена» с 6-дверным шкафом орех",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "90 000 ₽ / компл.",
    image: "/assets/spalnya-lorena-6ti-oreh-1.jpg",
    images: ["/assets/spalnya-lorena-6ti-oreh-1.jpg", "/assets/spalnya-lorena-6ti-oreh-2.jpg", "/assets/spalnya-lorena-6ti-oreh-3.jpg", "/assets/spalnya-lorena-6ti-oreh-4.jpg", "/assets/spalnya-lorena-6ti-oreh-5.jpg", "/assets/spalnya-lorena-6ti-oreh-6.jpg"],
    description: "Спальня «Лорена» с 6-дверным шкафом орех — спальный гарнитур в цвете Орех глянец /Золотая патина, с кроватью 1800/2000, со шкафом 2750/574/2490(ШхГхВ.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortune Home»."],
      ["Цвет", "Орех глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Орех."],
      ["Покрытие", "Мягкое Велюр."],
      ["Шкаф", "2750/574/2490(ШхГхВ)"],
      ["Туалетный стол", "1650/500/775(ШхГхВ)"],
    ],
  },
  {
    slug: "spalnya-lorena-6ti-krem",
    name: "Спальня «Лорена» с 6-дверным шкафом крем",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "90 000 ₽ / компл.",
    image: "/assets/spalnya-lorena-6ti-krem-1.jpg",
    images: ["/assets/spalnya-lorena-6ti-krem-1.jpg", "/assets/spalnya-lorena-6ti-krem-2.jpg", "/assets/spalnya-lorena-6ti-krem-3.jpg"],
    description: "Спальня «Лорена» с 6-дверным шкафом крем — спальный гарнитур в цвете Крем глянец /Золотая патина, с кроватью 1800/2000, со шкафом 2750/574/2490(ШхГхВ.",
    characteristics: [
      ["Кровать", "1800/2000. Без матраса."],
      ["Фабрика", "Фабрика «Fortune Home»"],
      ["Цвет", "Крем глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Ваниль."],
      ["Покрытие", "Мягкое Велюр."],
      ["Шкаф", "2750/574/2490(ШхГхВ)"],
      ["Туалетный стол", "1650/500/775(ШхГхВ)"],
      ["Зеркало", "1064/100/1180(ШхГхВ)"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-kapri-6ti-shokolad",
    name: "Спальня «Капри» с 6-дверным шкафом шоколад",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "136 000 ₽ / компл.",
    image: "/assets/spalnya-kapri-6ti-shokolad-1.jpg",
    images: ["/assets/spalnya-kapri-6ti-shokolad-1.jpg"],
    description: "Спальня «Капри» с 6-дверным шкафом шоколад — спальный гарнитур в цвете Шоколад глянец, с кроватью 1800/2000, со шкафом 6-дверный 2700х560х2120",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortuna Home»."],
      ["Цвет", "Шоколад глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие крашенная эмаль."],
      ["Корпус", "ЛДСП Шоколад."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Шкаф 6-дверный 2700х560х2120 (ШхГхВ)"],
      ["Кровать", "Кровать 2100х2080х1630 (ШхГхВ) Под матрас 1800х2000"],
    ],
  },
  {
    slug: "spalnya-kapri-6ti-belyy-cena",
    name: "Спальня «Капри» с 6-дверным шкафом белый- Цена",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "136 000 ₽ / компл.",
    image: "/assets/spalnya-kapri-6ti-belyy-cena-1.jpg",
    images: ["/assets/spalnya-kapri-6ti-belyy-cena-1.jpg", "/assets/spalnya-kapri-6ti-belyy-cena-2.jpg", "/assets/spalnya-kapri-6ti-belyy-cena-3.jpg", "/assets/spalnya-kapri-6ti-belyy-cena-4.jpg", "/assets/spalnya-kapri-6ti-belyy-cena-5.jpg", "/assets/spalnya-kapri-6ti-belyy-cena-6.jpg", "/assets/spalnya-kapri-6ti-belyy-cena-7.jpg"],
    description: "Спальня «Капри» с 6-дверным шкафом белый — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом 6-дверный 2700х560х2120",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortuna Home»."],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие крашенная эмаль."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Шкаф 6-дверный 2700х560х2120 (ШхГхВ)"],
      ["Кровать", "Кровать 2100х2080х1630 (ШхГхВ) Под матрас 1800х2000"],
    ],
  },
  {
    slug: "spalnya-graciya-5ti-belyy-grafit",
    name: "Спальня «Грация» с 5-дверным шкафом белый/графит",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "80 000 ₽ / компл.",
    image: "/assets/spalnya-graciya-5ti-belyy-grafit-1.jpg",
    images: ["/assets/spalnya-graciya-5ti-belyy-grafit-1.jpg", "/assets/spalnya-graciya-5ti-belyy-grafit-2.jpg", "/assets/spalnya-graciya-5ti-belyy-grafit-3.jpg", "/assets/spalnya-graciya-5ti-belyy-grafit-4.jpg", "/assets/spalnya-graciya-5ti-belyy-grafit-5.jpg", "/assets/spalnya-graciya-5ti-belyy-grafit-6.jpg"],
    description: "Спальня «Грация» с 5-дверным шкафом белый/графит — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом Ш 2290 / В 2110 / Г 545.",
    characteristics: [
      ["Кровать", "1800/2000"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика Fortune Home"],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое покрытие."],
      ["Корпус", "ЛДСП Графит."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Ш 2290 / В 2110 / Г 545"],
      ["Кровать", "Ш 1900 / Д 2060 / В 1380"],
    ],
  },
  {
    slug: "spalnya-vivaldi-6ti",
    name: "Спальня Вивальди с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "139 000 ₽ / компл.",
    image: "/assets/spalnya-vivaldi-6ti-1.jpg",
    images: ["/assets/spalnya-vivaldi-6ti-1.jpg", "/assets/spalnya-vivaldi-6ti-2.jpg", "/assets/spalnya-vivaldi-6ti-3.jpg", "/assets/spalnya-vivaldi-6ti-4.jpg", "/assets/spalnya-vivaldi-6ti-5.jpg", "/assets/spalnya-vivaldi-6ti-6.jpg", "/assets/spalnya-vivaldi-6ti-7.jpg", "/assets/spalnya-vivaldi-6ti-8.jpg", "/assets/spalnya-vivaldi-6ti-9.jpg"],
    description: "Спальня Вивальди с 6-дверным шкафом — спальный гарнитур в цвете мокко, с кроватью 180/200.",
    characteristics: [
      ["Цвет", "Цвет мокко"],
      ["Кровать", "180/200"],
      ["Фабрика", "Фабрика «FortunaHome»"],
      ["Шкаф", ""],
      ["Кровать", ""],
      ["Туалетный стол", ""],
      ["Тумба", "Тумба 670ш500в.450г."],
      ["Комод", "Комод 1570х800х520."],
      ["Тумба", ""],
      ["Фасады", "МДФ"],
    ],
  },
  {
    slug: "spalnya-vivaldi-6ti-2",
    name: "Спальня Вивальди с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "139 000 ₽ / компл.",
    image: "/assets/spalnya-vivaldi-6ti-2-1.jpg",
    images: ["/assets/spalnya-vivaldi-6ti-2-1.jpg", "/assets/spalnya-vivaldi-6ti-2-2.jpg", "/assets/spalnya-vivaldi-6ti-2-3.jpg", "/assets/spalnya-vivaldi-6ti-2-4.jpg"],
    description: "Спальня Вивальди с 6-дверным шкафом — спальный гарнитур в цвете крем, с кроватью 180/200, со шкафом 6-дверный 2720х570х2160",
    characteristics: [
      ["Цвет", "Цвет крем"],
      ["Кровать", "180/200"],
      ["Фабрика", "Фабрика «FortunaHome»"],
      ["Цвет", "Мокко глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое покрытие."],
      ["Корпус", "ЛДСП Мокко."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Шкаф 6-дверный 2720х570х2160 (ШхГхВ)"],
      ["Кровать", "Кровать 3250х2060х1500 (ШхГхВ) Под матрас 1800х2000"],
    ],
  },
  {
    slug: "spalnya-agata-6ti-belaya",
    name: "Спальня «Агата» с 6-дверным шкафом белая",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "125 000 ₽ / компл.",
    image: "/assets/spalnya-agata-6ti-belaya-1.jpg",
    images: ["/assets/spalnya-agata-6ti-belaya-1.jpg"],
    description: "Спальня «Агата» с 6-дверным шкафом белая — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом 6-дверный 2650х580х2170",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortuna Home»."],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие крашенная эмаль."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Шкаф 6-дверный 2650х580х2170 (ШхГхВ)"],
      ["Кровать", "Кровать 2460х2090х1390 (ШхГхВ) под матрас 1800х2000"],
    ],
  },
  {
    slug: "spalnya-shanel-5ti-krem",
    name: "Спальня «Шанель» с 5-дверным шкафом крем",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "165 000 ₽ / компл.",
    image: "/assets/spalnya-shanel-5ti-krem-1.jpg",
    images: ["/assets/spalnya-shanel-5ti-krem-1.jpg", "/assets/spalnya-shanel-5ti-krem-2.jpg", "/assets/spalnya-shanel-5ti-krem-3.jpg", "/assets/spalnya-shanel-5ti-krem-4.jpg", "/assets/spalnya-shanel-5ti-krem-5.jpg"],
    description: "Спальня «Шанель» с 5-дверным шкафом крем — спальный гарнитур в цвете Крем глянец /Золотая патина/Шелкография, с кроватью 1800/2000, со шкафом 2595/650/2315",
    characteristics: [
      ["Кровать", "1800/2000. Без матраса. Фабрика «ARIDA»."],
      ["Цвет", "Крем глянец /Золотая патина/Шелкография."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Шкаф", "2595/650/2315 (ШхГхВ)"],
      ["Туалетный стол", "1950/500/860 (ШхГхВ)"],
      ["Зеркало", "1535/80/1210 (ШхГхВ)"],
      ["Тумба", "745/445/710 (ШхГхВ)"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-prado-5ti",
    name: "Спальня «Прадо» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "130 000 ₽ / компл.",
    image: "/assets/spalnya-prado-5ti-1.jpg",
    images: ["/assets/spalnya-prado-5ti-1.jpg", "/assets/spalnya-prado-5ti-2.jpg", "/assets/spalnya-prado-5ti-3.jpg"],
    description: "Спальня «Прадо» с 5-дверным шкафом — спальный гарнитур в цвете крем золото, с кроватью 180/200, со шкафом 2380/640/2300 Ш/Г/В.",
    characteristics: [
      ["Цвет", "крем золото"],
      ["Кровать", "180/200"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика Arida"],
      ["Шкаф", "2380/640/2300 Ш/Г/В"],
      ["Кровать", "Кровать 180х200. 3302/2074/1451 Ш/Г/В"],
      ["Тумба", "650/409/432 Ш/Г/В"],
      ["Туалетный стол", "1485/490\\\\838 Ш/Г/В"],
      ["Зеркало", "1260/900 Ш/В"],
    ],
  },
  {
    slug: "spalnya-oliviya-4-stv-kz-zhemchug",
    name: "Спальня «Оливия» с 4-дверным шкафом КЗ жемчуг",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "75 000 ₽ / компл.",
    image: "/assets/spalnya-oliviya-4-stv-kz-zhemchug-1.jpg",
    images: ["/assets/spalnya-oliviya-4-stv-kz-zhemchug-1.jpg"],
    description: "Спальня «Оливия» с 4-дверным шкафом КЗ жемчуг — спальный гарнитур с кроватью 1800/2000, со шкафом ш 1915 / г 634 / в 2200.",
    characteristics: [
      ["Кровать", "1800/2000"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика «Arida”"],
      ["Кровать", "1.8 ш 1970 / г 2098 / в 1360"],
      ["Тумба", "ш 462 / г 508 / в 504"],
      ["Шкаф", "ш 1915 / г 634 / в 2200"],
      ["Комод", "ш 1012 / г 542 / в 879"],
      ["Зеркало", "ш 950 / в 800"],
    ],
  },
  {
    slug: "spalnya-oliviya-5ti-komod-s-zerkalom",
    name: "Спальня «Оливия» с 5-дверным шкафом комод с зеркалом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-oliviya-5ti-komod-s-zerkalom-1.jpg",
    images: ["/assets/spalnya-oliviya-5ti-komod-s-zerkalom-1.jpg", "/assets/spalnya-oliviya-5ti-komod-s-zerkalom-2.jpg", "/assets/spalnya-oliviya-5ti-komod-s-zerkalom-3.jpg", "/assets/spalnya-oliviya-5ti-komod-s-zerkalom-4.jpg", "/assets/spalnya-oliviya-5ti-komod-s-zerkalom-5.jpg", "/assets/spalnya-oliviya-5ti-komod-s-zerkalom-6.jpg"],
    description: "Спальня «Оливия» с 5-дверным шкафом комод с зеркалом — спальный гарнитур в цвете жемчуг, с кроватью 1800/2000, со шкафом 5-дверный 2366х634х2200",
    characteristics: [
      ["Цвет", "цвет жемчуг"],
      ["Кровать", "1800/2000"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика «Arida” 1 ШТ"],
      ["Шкаф", "Шкаф 5-дверный 2366х634х2200 (ШхГхВ)"],
      ["Кровать", "Кровать 1970х2098х1360 (ШхГхВ) под матрас 1800х2000"],
      ["Туалетный стол", "1500х508х792 (ШхГхВ)"],
      ["Зеркало", "950/800"],
      ["Тумба", "Тумба прикроватная 462х508х504 (ШхГхВ)"],
    ],
  },
  {
    slug: "spalnya-marella-6ti-temnyy-oreh",
    name: "Спальня «Марелла» с 6-дверным шкафом Тёмный орех",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "155 000 ₽ / компл.",
    image: "/assets/spalnya-marella-6ti-temnyy-oreh-1.jpg",
    images: ["/assets/spalnya-marella-6ti-temnyy-oreh-1.jpg", "/assets/spalnya-marella-6ti-temnyy-oreh-2.jpg", "/assets/spalnya-marella-6ti-temnyy-oreh-3.jpg"],
    description: "Спальня «Марелла» с 6-дверным шкафом Тёмный орех — спальный гарнитур с кроватью 1800/2000, со шкафом Ш2900 / Г680 / В2420.",
    characteristics: [
      ["Кровать", "1800/2000"],
      ["Матрас", "Без матраса и ортопеда."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Кровать", "Ш3240 / Г2150 / В1595"],
      ["Туалетный стол", "Ш1800 / Г530 / В730"],
      ["Зеркало", "Ш1400 / Г110 / В1245"],
      ["Шкаф", "Ш2900 / Г680 / В2420"],
      ["Тумба", "Ш720 / Г535 / В730"],
    ],
  },
  {
    slug: "spalnya-mariya-6ti-patina-seraya",
    name: "Спальня «Мария» с 6-дверным шкафом патина/серая",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 118 500 ₽ / компл.",
    image: "/assets/spalnya-mariya-6ti-patina-seraya-1.jpg",
    images: ["/assets/spalnya-mariya-6ti-patina-seraya-1.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-2.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-3.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-4.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-5.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-6.jpg"],
    description: "Спальня «Мария» с 6-дверным шкафом патина/серая — спальный гарнитур с кроватью 180/200, со шкафом ш 2700 / г 684 / в 2198.",
    characteristics: [
      ["Кровать", "180/200"],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «ARIDA»."],
      ["Кровать", "1.8 ш 2090 / г 2062 / в 1580"],
      ["Тумба", "ш 700 / г 461/ в 700"],
      ["Шкаф", "ш 2700 / г 684 / в 2198"],
      ["Комод", "ш 1610 / г 510 / в 874"],
      ["Зеркало", "ш 1030 / в 1200"],
    ],
  },
  {
    slug: "spalnya-veneciya-stayl-6ti-stv-krem-zoloto",
    name: "Спальня «Венеция Стайл» с 6-дверным шкафом крем золото",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "135 000 ₽ / компл.",
    image: "/assets/spalnya-veneciya-stayl-6ti-stv-krem-zoloto-1.jpg",
    images: ["/assets/spalnya-veneciya-stayl-6ti-stv-krem-zoloto-1.jpg", "/assets/spalnya-veneciya-stayl-6ti-stv-krem-zoloto-2.jpg", "/assets/spalnya-veneciya-stayl-6ti-stv-krem-zoloto-3.jpg"],
    description: "Спальня «Венеция Стайл» с 6-дверным шкафом крем золото — спальный гарнитур в цвете Крем глянец /Золотая патина, с кроватью Спальня «Венеция Стайл» с 6-дверным шкафом крем золото, со шкафом Ш2955/ Г660/ В2470.",
    characteristics: [
      ["Кровать", "Спальня «Венеция Стайл» 6-дверный шкаф крем золото - 135.000₽. Кров: 1800/2000. Без матраса. Фабрика «Arida»."],
      ["Цвет", "Крем глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Кровать", "Ш2118/ Г2137/ В1753"],
      ["Туалетный стол", "Ш1814/ Г505/ В790"],
      ["Зеркало", "Ш1460/ Г80/ В1237"],
      ["Шкаф", "Ш2955/ Г660/ В2470"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-berta-eko-5ti-cvet-krem",
    name: "Спальня «Берта ЭКО» с 5-дверным шкафом цвет крем",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-berta-eko-5ti-cvet-krem-1.jpg",
    images: ["/assets/spalnya-berta-eko-5ti-cvet-krem-1.jpg"],
    description: "Спальня «Берта ЭКО» с 5-дверным шкафом цвет крем — спальный гарнитур с кроватью 1800/2000, со шкафом Ш2333/ Г665/ В2250.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Кровать", "Ш2018/ Г2100/ В1350"],
      ["Матрас", "Под матрас (180х200 см)"],
      ["Тумба", "Ш468 / Г512/ В504"],
      ["Туалетный стол", "+ пуф Ш1548/ Г512/ В840"],
      ["Зеркало", "Ш1000/ Г24/ В700"],
      ["Шкаф", "Ш2333/ Г665/ В2250"],
    ],
  },
  {
    slug: "spalnya-berta-5ti-farina-oreh",
    name: "Спальня «Берта» с 5-дверным шкафом фарина орех",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "92 700 ₽ / компл.",
    image: "/assets/spalnya-berta-5ti-farina-oreh-1.jpg",
    images: ["/assets/spalnya-berta-5ti-farina-oreh-1.jpg"],
    description: "Спальня «Берта» с 5-дверным шкафом фарина орех — спальный гарнитур в цвете Фарина орех, с кроватью 1800/2000, со шкафом 2333/665/2250",
    characteristics: [
      ["Кровать", "1800/2000. Без матраса. Фабрика «Arida»."],
      ["Цвет", "Фарина орех"],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие."],
      ["Корпус", "ЛДСП"],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Шкаф", "2333/665/2250 (ШхГхВ)"],
      ["Туалетный стол", "1548/512/840 (ШхГхВ)"],
      ["Зеркало", "Зеркало 1000/24/700 (ШхГхВ)"],
      ["Тумба", "468/512/504 (ШхГхВ)"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-berta-5ti-zhemchug",
    name: "Спальня «Берта» с 5-дверным шкафом жемчуг",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "92 700 ₽ / компл.",
    image: "/assets/spalnya-berta-5ti-zhemchug-1.jpg",
    images: ["/assets/spalnya-berta-5ti-zhemchug-1.jpg"],
    description: "Спальня «Берта» с 5-дверным шкафом жемчуг — спальный гарнитур в цвете Жемчуг матовый /Золото патина, с кроватью 1800/2000, со шкафом 2333/665/2250",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Фабрика", "Без матраса. Фабрика «Arida»."],
      ["Цвет", "Жемчуг матовый /Золото патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие."],
      ["Корпус", "ЛДСП Ваниль."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Шкаф", "2333/665/2250 (ШхГхВ)"],
      ["Туалетный стол", "1548/512/840 (ШхГхВ)"],
      ["Зеркало", "Зеркало 1000/24/700 (ШхГхВ)"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-adelaida-4h-dub-molochnyy",
    name: "Спальня «Аделаида» с 4-дверным шкафом дуб молочный",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-adelaida-4h-dub-molochnyy-1.jpg",
    images: ["/assets/spalnya-adelaida-4h-dub-molochnyy-1.jpg", "/assets/spalnya-adelaida-4h-dub-molochnyy-2.jpg", "/assets/spalnya-adelaida-4h-dub-molochnyy-3.jpg", "/assets/spalnya-adelaida-4h-dub-molochnyy-4.jpg"],
    description: "Спальня «Аделаида» с 4-дверным шкафом дуб молочный — спальный гарнитур в цвете Ясень глянец/Шелкография, с кроватью 1600/2000.",
    characteristics: [
      ["Кровать", "1600/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»"],
      ["Цвет", "Ясень глянец/Шелкография."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Ясень."],
      ["Покрытие", "Велюр."],
      ["Кровать", "1877х2135х1560 (ШхГхВ) под матрас 1600х2000 (в стоимость входит ортопед)."],
      ["Тумба", "570х440х582 (ШхГхВ)."],
    ],
  },
  {
    slug: "spalnya-spalnya-kassandra-s-6dv-shkafom",
    name: "Спальня «Кассандра» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "137 000 ₽ / компл.",
    image: "/assets/spalnya-spalnya-kassandra-s-6dv-shkafom-1.jpg",
    images: ["/assets/spalnya-spalnya-kassandra-s-6dv-shkafom-1.jpg", "/assets/spalnya-spalnya-kassandra-s-6dv-shkafom-2.jpg", "/assets/spalnya-spalnya-kassandra-s-6dv-shkafom-3.jpg", "/assets/spalnya-spalnya-kassandra-s-6dv-shkafom-4.jpg"],
    description: "Спальня «Кассандра» с 6-дверным шкафом — спальный гарнитур в цвете Бежевый / Золотая патина, с кроватью 2225х2110х1560 под матрас 1800х2000, со шкафом Спальня «Кассандра» с 6-дверным шкафом.",
    characteristics: [
      ["Шкаф", "🛌 Спальня «Кассандра» с 6-дверным шкафом"],
      ["Фабрика", "Фабрика “СКФМ”"],
      ["Шкаф", "2790х650х2300 (ШхГхВ)"],
      ["Кровать", "2225х2110х1560 под матрас 1800х2000"],
      ["Туалетный стол", "1550х530х780"],
      ["Тумба", "645х460х680"],
      ["Цвет", "Бежевый / Золотая патина"],
      ["Фасады", "МДФ"],
      ["Покрытие", "Лаковое покрытие крашенная эмаль"],
      ["Корпус", "ЛДСП Белый"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-florenciya-s-6dv-shkafom",
    name: "Спальня «Флоренция» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "99 900 ₽ / компл.",
    image: "/assets/spalnya-florenciya-s-6dv-shkafom-1.jpg",
    images: ["/assets/spalnya-florenciya-s-6dv-shkafom-1.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-2.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-3.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-4.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-5.jpg"],
    description: "Спальня «Флоренция» с 6-дверным шкафом — спальный гарнитур в цвете Орех, с кроватью ШхВхГ) 206х129х206см, со шкафом ШхВхГ) 266х222х50см.",
    characteristics: [
      ["Фабрика", "Фабрика «21Век»"],
      ["Шкаф", "(ШхВхГ) 266х222х50см"],
      ["Тумба", "(ШхВхГ) 72х42х43см"],
      ["Туалетный стол", "(ШхВхГ) 162х179х50см"],
      ["Кровать", "(ШхВхГ) 206х129х206см"],
      ["Цвет", "Орех."],
      ["Матрас", "Без матраса, ортопед(дсп настилы) в комплекте."],
    ],
  },
  {
    slug: "spalnya-spalnya-meri",
    name: "Спальня «Мери»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "105 400 ₽ / компл.",
    image: "/assets/spalnya-spalnya-meri-1.jpg",
    images: ["/assets/spalnya-spalnya-meri-1.jpg", "/assets/spalnya-spalnya-meri-2.jpg", "/assets/spalnya-spalnya-meri-3.jpg"],
    description: "Спальня «Мери» — спальный гарнитур с кроватью Ш2060хВ1600хш2040, со шкафом Ш2700хГ540хВ2100.",
    characteristics: [
      ["Фабрика", "Фабрика “21 век”"],
      ["Шкаф", "Ш2700хГ540хВ2100"],
      ["Комод", "Комод Ш1600хГ510хВ850"],
      ["Зеркало", "Зеркало 106123"],
      ["Тумба", "Тумба Ш700хГ460хВ660"],
      ["Кровать", "Ш2060хВ1600хш2040"],
      ["Корпус", "ЛДСП"],
      ["Фасады", "МДФ"],
      ["Матрас", "Без Матраса."],
      ["Ортопед", "Ортопед в комплекте."],
    ],
  },
  {
    slug: "spalnya-bogemiya-s-4dv-shkaf-kupe",
    name: "Спальня «Богемия» с 4-дверным шкафом-купе",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "56 500 ₽ / компл.",
    image: "/assets/spalnya-bogemiya-s-4dv-shkaf-kupe-1.jpg",
    images: ["/assets/spalnya-bogemiya-s-4dv-shkaf-kupe-1.jpg", "/assets/spalnya-bogemiya-s-4dv-shkaf-kupe-2.jpg", "/assets/spalnya-bogemiya-s-4dv-shkaf-kupe-3.jpg", "/assets/spalnya-bogemiya-s-4dv-shkaf-kupe-4.jpg", "/assets/spalnya-bogemiya-s-4dv-shkaf-kupe-5.jpg", "/assets/spalnya-bogemiya-s-4dv-shkaf-kupe-6.jpg", "/assets/spalnya-bogemiya-s-4dv-shkaf-kupe-7.jpg"],
    description: "Спальня «Богемия» с 4-дверным шкафом-купе — спальный гарнитур в цвете Бежевый /Золото, с кроватью 206х204х155см, со шкафом 260х60х220см.",
    characteristics: [
      ["Шкаф", "Спальня «Богемия» с 4-дверным шкафом-купе"],
      ["Кровать", "Обратите внимание на гарнитур «Богемия». Бежевые спальни никогда не утратят свою популярность и элегантность. Кровать 1800х2000 выделяется строгими линиями в сочетании с утонченной отделкой. Здесь нет ничего лишнего, и в то же время не нуждается в дополнении. В состав коллекции входят разнообразные элементы, поэтому вы можете без труда создать утонченную, стильную, функциональную и приятную глазу обстановку в комнате отдыха."],
      ["Фабрика", "Фабрика «21 век»"],
      ["Шкаф", "260х60х220см"],
      ["Кровать", "206х204х155см"],
      ["Комод", "85х51х90см"],
      ["Тумба", "50х44х52см"],
      ["Зеркало", "85х85см"],
      ["Цвет", "Бежевый /Золото."],
      ["Фасады", "МДФ рамка с широким багетом."],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-spalnya-dzhovana",
    name: "Спальня «Джована»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "82 800 ₽ / компл.",
    image: "/assets/spalnya-spalnya-dzhovana-1.jpg",
    images: ["/assets/spalnya-spalnya-dzhovana-1.jpg", "/assets/spalnya-spalnya-dzhovana-2.jpg", "/assets/spalnya-spalnya-dzhovana-3.jpg", "/assets/spalnya-spalnya-dzhovana-4.jpg"],
    description: "Спальня «Джована» — спальный гарнитур с кроватью Ш206хГ206хВ129, со шкафом 6-дверный Ш2640хГ520хВ2160.",
    characteristics: [
      ["Фабрика", "Фабрика “21 век”"],
      ["Шкаф", "Шкаф 6-дверный Ш2640хГ520хВ2160"],
      ["Кровать", "Кровать Ш206хГ206хВ129"],
      ["Зеркало", "Трельяж Ш1520хГ470хВ1740 с зеркалом"],
      ["Тумба", "Тумба Ш500хГ430хГ410"],
      ["Корпус", "ЛДСП"],
      ["Фасады", "МДФ крашенный"],
      ["Матрас", "Без матраса, без пуфика"],
      ["Ортопед", "Ортопед (ДСП настилы) в комплекте"],
    ],
  },
  {
    slug: "spalnya-spalnya-kataleya",
    name: "Спальня «Каталея»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 800 ₽ / компл.",
    image: "/assets/spalnya-spalnya-kataleya-1.jpg",
    images: ["/assets/spalnya-spalnya-kataleya-1.jpg", "/assets/spalnya-spalnya-kataleya-2.jpg", "/assets/spalnya-spalnya-kataleya-3.jpg", "/assets/spalnya-spalnya-kataleya-4.jpg", "/assets/spalnya-spalnya-kataleya-5.jpg", "/assets/spalnya-spalnya-kataleya-6.jpg"],
    description: "Спальня «Каталея» — спальный гарнитур с кроватью Ш1900хГ2040хВ1112, со шкафом 6-дверный Ш2726хГ530хВ2120",
    characteristics: [
      ["Фабрика", "Фабрика “21 век”"],
      ["Шкаф", "Шкаф 6-дверный Ш2726хГ530хВ2120 (без зеркал)"],
      ["Кровать", "Кровать Ш1900хГ2040хВ1112"],
      ["Тумба", "Тумба Ш630хГ430В1112"],
      ["Зеркало", "зеркало 800800"],
      ["Туалетный стол", "Трельяж Ш1230хГ450хВ800"],
      ["Корпус", "Корпус ЛДСП"],
      ["Фасады", "рФасад МДФ крашенный"],
      ["Матрас", "Без матраса, без пуфика"],
      ["Ортопед", "Ортопед (ДСП настилы) в комплекте"],
    ],
  },
  {
    slug: "spalnya-versal-5",
    name: "Спальня «Версаль 5»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "47 000 ₽ / компл.",
    image: "/assets/spalnya-versal-5-1.jpg",
    images: ["/assets/spalnya-versal-5-1.jpg", "/assets/spalnya-versal-5-2.jpg", "/assets/spalnya-versal-5-3.jpg", "/assets/spalnya-versal-5-4.jpg"],
    description: "Спальня «Версаль 5» — спальный гарнитур в цвете а натурального дерева придают спальне лёгкость и свежесть, с кроватью 1800/2000, со шкафом Ш1970хВ2300хГ520.",
    characteristics: [
      ["Цвет", "Спальный гарнитур в стиле модерн «Версаль» подойдет тем, кто предпочитает цвета натурального дерева в интерьере."],
      ["Цвет", "Цвета натурального дерева придают спальне лёгкость и свежесть."],
      ["Шкаф", "Ш1970хВ2300хГ520"],
      ["Кровать", "1800/2000"],
      ["Комод", "Ш1076хВ780хГ432"],
      ["Тумба", "Ш610хВ450хГ380"],
      ["Цвет", "Дуб сонома"],
      ["Фасады", "МДФ в пленке ПВХ"],
      ["Корпус", "ЛДСП"],
    ],
  },
  {
    slug: "spalnya-virdzhiniya-s-2dv-shkaf-kupe",
    name: "Спальня «Вирджиния» с 2-дверным шкафом-купе",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "77 000 ₽ / компл.",
    image: "/assets/spalnya-virdzhiniya-s-2dv-shkaf-kupe-1.jpg",
    images: ["/assets/spalnya-virdzhiniya-s-2dv-shkaf-kupe-1.jpg", "/assets/spalnya-virdzhiniya-s-2dv-shkaf-kupe-2.jpg", "/assets/spalnya-virdzhiniya-s-2dv-shkaf-kupe-3.jpg", "/assets/spalnya-virdzhiniya-s-2dv-shkaf-kupe-4.jpg"],
    description: "Спальня «Вирджиния» с 2-дверным шкафом-купе — спальный гарнитур с кроватью В1109 х Ш1708 х Г2237, со шкафом В2258 х Ш1786 х Г653.",
    characteristics: [
      ["Фабрика", "Фабрика «СлонимМебель»🇧🇾"],
      ["Шкаф", "В2258 х Ш1786 х Г653"],
      ["Кровать", "В1109 х Ш1708 х Г2237"],
      ["Матрас", "1600х2000"],
      ["Зеркало", "В1000 х Ш812"],
      ["Тумба", "В532 х Ш600 х Г420"],
      ["Комод", "В832 х Ш1200 х Г470"],
      ["Фасады", ""],
      ["Фасады", "Все фасадные части изготовлены из ламинированного МДФ"],
      ["Фасады", "На фасадные части наносится патина, покрывается лаком."],
    ],
  },
  {
    slug: "spalnya-spalnya-miya-s-6dv-shkafom",
    name: "Спальня «Мия» с 6-дверным шкафом.",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "135 000 ₽ / компл.",
    image: "/assets/spalnya-spalnya-miya-s-6dv-shkafom-1.jpg",
    images: ["/assets/spalnya-spalnya-miya-s-6dv-shkafom-1.jpg"],
    description: "Спальня «Мия» с 6-дверным шкафом. — спальный гарнитур в цвете Серый, с кроватью 2260х2200х1680, со шкафом Спальня «Мия» с 6-дверным шкафом.",
    characteristics: [
      ["Шкаф", "🛌 Спальня «Мия» с 6-дверным шкафом."],
      ["Шкаф", "2720х620х2230мм (ШхГхВ)."],
      ["Кровать", "2260х2200х1680."],
      ["Комод", "1440х470х820."],
      ["Зеркало", "1020х40х1120."],
      ["Тумба", "600х450х690."],
      ["Фасады", "МДФ."],
      ["Корпус", "ЛДСП Серый."],
      ["Покрытие", "Лаковое покрытие крашеная эмаль."],
      ["Цвет", "Серый"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-garda-s-5dv-shkafom",
    name: "Спальня «Гарда» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "53 000 ₽ / компл.",
    image: "/assets/spalnya-garda-s-5dv-shkafom-1.jpg",
    images: ["/assets/spalnya-garda-s-5dv-shkafom-1.jpg"],
    description: "Спальня «Гарда» с 5-дверным шкафом — спальный гарнитур в цвете Сосна Джексон, со шкафом 233х59х218см.",
    characteristics: [
      ["Цвет", "Спальный гарнитур в стиле модерн «Гарда» подойдет тем кто предпочитает цвета натурального дерева в интерьере. Цвета натурального дерева придают спальне лёгкость и свежесть. Интерьер которой уютный, гармоничный и стильный, представляет собой идеальное место для отдыха."],
      ["Фабрика", "Фабрика «СлонимМебель»"],
      ["Шкаф", "233х59х218см"],
      ["Комод", "107х44х83см"],
      ["Тумба", "61х39х45см"],
      ["Зеркало", "106х60см"],
      ["Корпус", "Ламинированная ДСП"],
      ["Фасады", "МДФ"],
      ["Цвет", "Сосна Джексон"],
      ["Матрас", "Без матраса, ортопед(ламелии) в комплекте."],
    ],
  },
  {
    slug: "spalnya-bodrum-s-4dv-shkafom",
    name: "Спальня «Бодрум» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "75 000 ₽ / компл.",
    image: "/assets/spalnya-bodrum-s-4dv-shkafom-1.jpg",
    images: ["/assets/spalnya-bodrum-s-4dv-shkafom-1.jpg"],
    description: "Спальня «Бодрум» с 4-дверным шкафом — спальный гарнитур в цвете Серый графит, с кроватью В1330 х Ш1912 х Г2090, со шкафом Спальный гарнитур «Бодрум» с 4-дверным шкафом.",
    characteristics: [
      ["Шкаф", "Спальный гарнитур «Бодрум» с 4-дверным шкафом"],
      ["Цвет", "Элегантность и простота – это основные моменты, на которые должен обращать внимание ценитель настоящей качественной мебели. Мебель в спальном гарнитуре «Бодрум» прочна, устойчива, имеет правильные геометрические формы элегантный строгий серый графитовый цвет!"],
      ["Шкаф", "4-дверный шкаф. В2185 х Ш1876 х Г585"],
      ["Кровать", "В1330 х Ш1912 х Г2090"],
      ["Зеркало", "В900 х Ш750 х Г24"],
      ["Тумба", "В485 х Ш550 х Г395"],
      ["Комод", "В925 х Ш1058 х Г450"],
      ["Цвет", "Серый графит"],
      ["Матрас", "Без матраса, ортопед(ламелии) в комплекте."],
    ],
  },
  {
    slug: "spalnya-florenciya-s-6dv-shkafom-2",
    name: "Спальня «Флоренция» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "105 000 ₽ / компл.",
    image: "/assets/spalnya-florenciya-s-6dv-shkafom-2-1.jpg",
    images: ["/assets/spalnya-florenciya-s-6dv-shkafom-2-1.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-2-2.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-2-3.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-2-4.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-2-5.jpg", "/assets/spalnya-florenciya-s-6dv-shkafom-2-6.jpg"],
    description: "Спальня «Флоренция» с 6-дверным шкафом — спальный гарнитур в цвете Белый, с кроватью ШхВхГ) 206х129х206см, со шкафом ШхВхГ) 266х222х50см.",
    characteristics: [
      ["Фабрика", "Фабрика «21Век»"],
      ["Шкаф", "(ШхВхГ) 266х222х50см"],
      ["Тумба", "(ШхВхГ) 72х42х43см"],
      ["Туалетный стол", "(ШхВхГ) 162х179х50см"],
      ["Кровать", "(ШхВхГ) 206х129х206см"],
      ["Цвет", "Белый."],
      ["Матрас", "Без матраса, ортопед(дсп настилы) в комплекте."],
    ],
  },
  {
    slug: "spalnya-nika-s-6dv-shkafom",
    name: "Спальня «Ника» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "90 000 ₽ / компл.",
    image: "/assets/spalnya-nika-s-6dv-shkafom-1.jpg",
    images: ["/assets/spalnya-nika-s-6dv-shkafom-1.jpg", "/assets/spalnya-nika-s-6dv-shkafom-2.jpg", "/assets/spalnya-nika-s-6dv-shkafom-3.jpg", "/assets/spalnya-nika-s-6dv-shkafom-4.jpg"],
    description: "Спальня «Ника» с 6-дверным шкафом — спальный гарнитур в цвете Капучино + Золото, с кроватью Ш2060хГ1904хВ1200мм, со шкафом Ш2700хГ600хВ2100мм.",
    characteristics: [
      ["Фабрика", "Фабрика«21Век»"],
      ["Шкаф", "Ш2700хГ600хВ2100мм"],
      ["Кровать", "Ш2060хГ1904хВ1200мм"],
      ["Комод", "Ш910хГ470хВ990мм"],
      ["Зеркало", "Ш790хВ800мм"],
      ["Тумба", "Ш560хГ430хВ570мм"],
      ["Цвет", "Капучино + Золото."],
      ["Матрас", "Ортопед в комплекте(дсп настилы), без матраса."],
    ],
  },
  {
    slug: "spalnya-nika-s-4dv-shkafom",
    name: "Спальня «Ника» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-nika-s-4dv-shkafom-1.jpg",
    images: ["/assets/spalnya-nika-s-4dv-shkafom-1.jpg", "/assets/spalnya-nika-s-4dv-shkafom-2.jpg", "/assets/spalnya-nika-s-4dv-shkafom-3.jpg", "/assets/spalnya-nika-s-4dv-shkafom-4.jpg", "/assets/spalnya-nika-s-4dv-shkafom-5.jpg"],
    description: "Спальня «Ника» с 4-дверным шкафом — спальный гарнитур в цвете Бежевый + Золото, с кроватью Ш2060хГ1904хВ1200мм, со шкафом Ш2000хГ520хВ2100мм.",
    characteristics: [
      ["Фабрика", "Фабрика«21Век»"],
      ["Шкаф", "Ш2000хГ520хВ2100мм"],
      ["Кровать", "Ш2060хГ1904хВ1200мм"],
      ["Комод", "Ш910хГ470хВ990мм"],
      ["Зеркало", "Ш790хВ800мм"],
      ["Тумба", "Ш560хГ430хВ570мм"],
      ["Цвет", "Бежевый + Золото."],
      ["Матрас", "Ортопед в комплекте(дсп настилы), без матраса."],
    ],
  },
  {
    slug: "spalnya-katrina",
    name: "Спальня «Катрина»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-katrina-1.jpg",
    images: ["/assets/spalnya-katrina-1.jpg", "/assets/spalnya-katrina-2.jpg", "/assets/spalnya-katrina-3.jpg", "/assets/spalnya-katrina-4.jpg", "/assets/spalnya-katrina-5.jpg", "/assets/spalnya-katrina-6.jpg", "/assets/spalnya-katrina-7.jpg", "/assets/spalnya-katrina-8.jpg"],
    description: "Спальня «Катрина» — спальный гарнитур в цвете Бежевый, с кроватью Ш191хГ207см, со шкафом В226хШ300хГ50см.",
    characteristics: [
      ["Цвет", "Спальня «Катрина», вдохновлена традициями итальянских мастеров, шелковисто-матовое покрытие придётся по вкусу людям, предпочитающим натуральные цвета и фактуры."],
      ["Шкаф", "В226хШ300хГ50см."],
      ["Кровать", "Ш191хГ207см."],
      ["Тумба", "В55хШ50хГ45см."],
      ["Комод", "В100хШ100хГ50см."],
      ["Зеркало", "В90хШ80см."],
      ["Цвет", "Бежевый."],
      ["Матрас", "Без матраса, без ортопеда."],
    ],
  },
  {
    slug: "spalnya-spalnya-naomi-s-4h-dvernym-shkafom",
    name: "Спальня «Наоми» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "107 500 ₽ / компл.",
    image: "/assets/spalnya-spalnya-naomi-s-4h-dvernym-shkafom-1.jpg",
    images: ["/assets/spalnya-spalnya-naomi-s-4h-dvernym-shkafom-1.jpg", "/assets/spalnya-spalnya-naomi-s-4h-dvernym-shkafom-2.jpg", "/assets/spalnya-spalnya-naomi-s-4h-dvernym-shkafom-3.jpg"],
    description: "Спальня «Наоми» с 4-дверным шкафом — спальный гарнитур с кроватью Спальное место 180/200, со шкафом Спальня «Наоми» с 4-дверным шкафом.",
    characteristics: [
      ["Шкаф", "🛌 Спальня «Наоми» с 4х дверным шкафом."],
      ["Шкаф", "Ш1810хВ2130хГ588"],
      ["Кровать", "Спальное место 180/200"],
      ["Тумба", "Ш410хВ530хГ140"],
      ["Туалетный стол", "Ш1500хВ800хГ540)"],
      ["Зеркало", "Ш600хВ400хГ440"],
      ["Матрас", "Без матраса."],
      ["Ортопед", "Без ортопеда."],
    ],
  },
  {
    slug: "spalnya-adelina-s-4-h-dvernym-shkafom",
    name: "Спальня «Аделина» с 4-х дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "65 000 ₽ / компл.",
    image: "/assets/spalnya-adelina-s-4-h-dvernym-shkafom-1.jpg",
    images: ["/assets/spalnya-adelina-s-4-h-dvernym-shkafom-1.jpg", "/assets/spalnya-adelina-s-4-h-dvernym-shkafom-2.jpg", "/assets/spalnya-adelina-s-4-h-dvernym-shkafom-3.jpg", "/assets/spalnya-adelina-s-4-h-dvernym-shkafom-4.jpg", "/assets/spalnya-adelina-s-4-h-dvernym-shkafom-5.jpg", "/assets/spalnya-adelina-s-4-h-dvernym-shkafom-6.jpg"],
    description: "Спальня «Аделина» с 4-х дверным шкафом — спальный гарнитур в цвете Серый графит, с кроватью Ш1920хГ2070хВ1120мм, со шкафом Ш2100хГ520хВ2150мм.",
    characteristics: [
      ["Фабрика", "Фабрика «21Век»"],
      ["Цвет", "Серый графит."],
      ["Шкаф", "Ш2100хГ520хВ2150мм"],
      ["Кровать", "Ш1920хГ2070хВ1120мм"],
      ["Комод", "Ш940хГ480хВ900мм"],
      ["Зеркало", "Ш950хВ780мм"],
      ["Тумба", "Ш500хГ450хВ550мм"],
      ["Ортопед", "Ортопед (ДСП настилы) в комплекте"],
      ["Матрас", "Без матраса."],
    ],
  },
  {
    slug: "spalnya-bodrum-s-4dv-shkafom-2",
    name: "Спальня «Бодрум» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "75 000 ₽ / компл.",
    image: "/assets/spalnya-bodrum-s-4dv-shkafom-2-1.jpg",
    images: ["/assets/spalnya-bodrum-s-4dv-shkafom-2-1.jpg", "/assets/spalnya-bodrum-s-4dv-shkafom-2-2.jpg", "/assets/spalnya-bodrum-s-4dv-shkafom-2-3.jpg", "/assets/spalnya-bodrum-s-4dv-shkafom-2-4.jpg", "/assets/spalnya-bodrum-s-4dv-shkafom-2-5.jpg", "/assets/spalnya-bodrum-s-4dv-shkafom-2-6.jpg"],
    description: "Спальня «Бодрум» с 4-дверным шкафом — спальный гарнитур в цвете Белый, с кроватью В1330 х Ш1912 х Г2090, со шкафом Спальный гарнитур «Бодрум» с 4-дверным шкафом.",
    characteristics: [
      ["Шкаф", "Спальный гарнитур «Бодрум» с 4-дверным шкафом"],
      ["Шкаф", "4-дверный шкаф. В2185 х Ш1876 х Г585"],
      ["Кровать", "В1330 х Ш1912 х Г2090"],
      ["Зеркало", "В900 х Ш750 х Г24"],
      ["Тумба", "В485 х Ш550 х Г395"],
      ["Комод", "В925 х Ш1058 х Г450"],
      ["Цвет", "Белый"],
      ["Матрас", "Без матраса, ортопед(ламелии) в комплекте."],
    ],
  },
  {
    slug: "spalnya-bodrum-s-6dv-shkafom",
    name: "Спальня «Бодрум» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "79 000 ₽ / компл.",
    image: "/assets/spalnya-bodrum-s-6dv-shkafom-1.jpg",
    images: ["/assets/spalnya-bodrum-s-6dv-shkafom-1.jpg", "/assets/spalnya-bodrum-s-6dv-shkafom-2.jpg", "/assets/spalnya-bodrum-s-6dv-shkafom-3.jpg", "/assets/spalnya-bodrum-s-6dv-shkafom-4.jpg", "/assets/spalnya-bodrum-s-6dv-shkafom-5.jpg", "/assets/spalnya-bodrum-s-6dv-shkafom-6.jpg"],
    description: "Спальня «Бодрум» с 6-дверным шкафом — спальный гарнитур в цвете Белый, с кроватью В1330 х Ш1912 х Г2090, со шкафом 6-дверный В2200 х Ш2660 х Г585.",
    characteristics: [
      ["Фабрика", "Фабрика «Слонимебель»"],
      ["Шкаф", "6-дверный шкаф. В2200 х Ш2660 х Г585"],
      ["Кровать", "В1330 х Ш1912 х Г2090"],
      ["Зеркало", "В900 х Ш750 х Г24"],
      ["Тумба", "В485 х Ш550 х Г395"],
      ["Комод", "В925 х Ш1058 х Г450"],
      ["Цвет", "Белый"],
      ["Матрас", "Без матраса"],
      ["Ортопед", "Ортопед (ламелии) в комплекте."],
    ],
  },
  {
    slug: "spalnya-garda-original",
    name: "Спальня «Гарда» ОРИГИНАЛ",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "53 000 ₽ / компл.",
    image: "/assets/spalnya-garda-original-1.jpg",
    images: ["/assets/spalnya-garda-original-1.jpg", "/assets/spalnya-garda-original-2.jpg", "/assets/spalnya-garda-original-3.jpg", "/assets/spalnya-garda-original-4.jpg"],
    description: "Спальня «Гарда» ОРИГИНАЛ — спальный гарнитур в цвете Дуб галифакс Табак, с кроватью 1884 х 2138 х 860, со шкафом 1970 х 520 х 2300.",
    characteristics: [
      ["Производство", "Ставрополь"],
      ["Фабрика", "Мебельная фабрика «СБК»"],
      ["Цвет", "Дуб галифакс Табак"],
      ["Характеристика", "двуспальная"],
      ["Фасады", "ЛДСП"],
      ["Корпус", "ЛДСП"],
      ["Шкаф", "1970 х 520 х 2300"],
      ["Кровать", "1884 х 2138 х 860"],
      ["Тумба", "610 х 380 х 450"],
      ["Комод", "1076 х 432 х 780"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-predmety-kollekcii-spalni-dzhokonda",
    name: "Спальня Предметы коллекции спальни Джоконда:",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "125 600 ₽ / компл.",
    image: "/assets/spalnya-predmety-kollekcii-spalni-dzhokonda-1.jpg",
    images: ["/assets/spalnya-predmety-kollekcii-spalni-dzhokonda-1.jpg"],
    description: "Спальня Предметы коллекции спальни Джоконда: — спальный гарнитур в цвете Крем, с кроватью 2125х2140х1677, со шкафом 2510х622х2395.",
    characteristics: [
      ["Фабрика", "Производство - мебельная фабрика Арида г. Ставрополь"],
      ["Цвет", "Крем"],
      ["Кровать", "2125х2140х1677"],
      ["Тумба", "618х490х810"],
      ["Комод", "1885х525х895"],
      ["Зеркало", "1257х85х1195"],
      ["Шкаф", "2510х622х2395"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-graciya",
    name: "Спальня Грация",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "110 000 ₽ / компл.",
    image: "/assets/spalnya-graciya-1.jpg",
    images: ["/assets/spalnya-graciya-1.jpg", "/assets/spalnya-graciya-2.jpg", "/assets/spalnya-graciya-3.jpg"],
    description: "Спальня Грация — спальный гарнитур в цвете Беж, с кроватью 2410/2100/1290, со шкафом 1800/585/2200.",
    characteristics: [
      ["Производство", "Производство Арида"],
      ["Цвет", "Беж"],
      ["Матрас", "Без матраса"],
      ["Фасады", "Спальный гарнитур «Грация» – уникальная жемчужина коллекции ар-деко от «Арида». Форма эксклюзивных ручек-ракушек перекликается с авторским золотым узором на декоративной панели. Золото является традиционным лейтмотивом стиля ар-деко. Оно объединяет все элементы коллекции в выверенную симфонию. Точные пропорции, симметрия и строгие линии в сочетании с глянцевыми фасадами, создают впечатление роскоши и исключительности спального гарнитура."],
      ["Кровать", "2410/2100/1290"],
      ["Тумба", "550/460/489"],
      ["Шкаф", "1800/585/2200"],
      ["Туалетный стол", "1200 /485/811"],
      ["Зеркало", "900"],
    ],
  },
  {
    slug: "spalnya-viktoriya-4",
    name: "Спальня Виктория-4",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "82 000 ₽ / компл.",
    image: "/assets/spalnya-viktoriya-4-1.jpg",
    images: ["/assets/spalnya-viktoriya-4-1.jpg", "/assets/spalnya-viktoriya-4-2.jpg"],
    description: "Спальня Виктория-4 — спальный гарнитур с кроватью 176х218х122, со шкафом 4-дверный 180х60х220.",
    characteristics: [
      ["Производство", "Производство Мэри"],
      ["Шкаф", "Шкаф 4-дверный 180х60х220"],
      ["Кровать", "Кровать 176х218х122"],
      ["Тумба", "Тумба 56х40х42"],
      ["Туалетный стол", "Туалетный стол 120х42х90"],
      ["Зеркало", "Зеркало 73х3,5х80"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-anet",
    name: "Спальня Анет",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 74 100 ₽ / компл.",
    image: "/assets/spalnya-anet-1.jpg",
    images: ["/assets/spalnya-anet-1.jpg", "/assets/spalnya-anet-2.jpg", "/assets/spalnya-anet-3.jpg", "/assets/spalnya-anet-4.jpg", "/assets/spalnya-anet-5.jpg"],
    description: "Спальня Анет — спальный гарнитур в цвете Белый, с кроватью 2275/2068/1575, со шкафом 2366/2200/634.",
    characteristics: [
      ["Производство", "Производство «Арида»"],
      ["Цвет", "Белый"],
      ["Матрас", "Без матраса"],
      ["Цвет", "Спальный гарнитур «Анет» – порадует ценителей сдержанной классики. Строгие фрезерованные фасады идеально оттеняют нарядный цветочный узор изголовья. Сочетание белой покраски и серо-голубой обивки изголовья, создадут атмосферу воздушности и лёгкости в вашей спальне. Мягкое изголовье с каретной стяжкой, дарит умиротворенное настроение и будто приглашает провести уютный спокойный вечер за чтением любимой классики."],
      ["Кровать", "2275/2068/1575"],
      ["Тумба", "462/482/504"],
      ["Шкаф", "2366/2200/634"],
      ["Шкаф", "1906/2200/634"],
      ["Комод", "1012/542 /879"],
      ["Зеркало", "997/697"],
    ],
  },
  {
    slug: "spalnya-oliviya",
    name: "Спальня Оливия",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "81 300 ₽ / компл.",
    image: "/assets/spalnya-oliviya-1.jpg",
    images: ["/assets/spalnya-oliviya-1.jpg", "/assets/spalnya-oliviya-2.jpg", "/assets/spalnya-oliviya-3.jpg", "/assets/spalnya-oliviya-4.jpg"],
    description: "Спальня Оливия — спальный гарнитур в цвете Жемчуг, с кроватью 1970/2098/1360, со шкафом 2366/634/2200.",
    characteristics: [
      ["Производство", "Производство «Арида»"],
      ["Цвет", "Жемчуг"],
      ["Матрас", "Без матраса"],
      ["Цвет", "Спальный гарнитур «Оливия» – это элегантная, выверенная классика, которая поможет создать лёгкий и утончённый интерьер вашей спальни. Классические формы, нежный цвет и строгая элегантность никогда не утратят свою популярность. Патина на фасадах идеально гармонирует с изысканной ковкой на изголовье. А роскошные ручки завершают образ, делая спальный гарнитур уникальным."],
      ["Кровать", "1970/2098/1360"],
      ["Тумба", "462/508/504"],
      ["Шкаф", "2366/634/2200"],
      ["Комод", "1012/542/879"],
      ["Туалетный стол", "1500/508/792"],
      ["Зеркало", "950/800"],
    ],
  },
  {
    slug: "spalnya-zlata",
    name: "Спальня Злата",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-zlata-1.jpg",
    images: ["/assets/spalnya-zlata-1.jpg", "/assets/spalnya-zlata-2.jpg", "/assets/spalnya-zlata-3.jpg", "/assets/spalnya-zlata-4.jpg", "/assets/spalnya-zlata-5.jpg"],
    description: "Спальня Злата — спальный гарнитур в цвете Камея, с кроватью 180/200.",
    characteristics: [
      ["Цвет", "Камея"],
      ["Цвет", "🔵"],
      ["Кровать", "180/200"],
      ["Цвет", "Края фасадной части спальни такие же как у спинки кровати на втором фото серебристого цвета"],
      ["Матрас", "Без матраса"],
      ["Ортопед", "Без ортопеда"],
    ],
  },
  {
    slug: "spalnya-hanna-2",
    name: "Спальня Ханна",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "105 000 ₽ / компл.",
    image: "/assets/spalnya-hanna-2-1.jpg",
    images: ["/assets/spalnya-hanna-2-1.jpg", "/assets/spalnya-hanna-2-2.jpg", "/assets/spalnya-hanna-2-3.jpg"],
    description: "Спальня Ханна — спальный гарнитур в цвете Капучино, с кроватью Ш197/В130/Г206, со шкафом Ш280/В226/Г52.",
    characteristics: [
      ["Цвет", "Капучино"],
      ["Цвет", "беж"],
      ["Шкаф", "Ш280/В226/Г52"],
      ["Тумба", "Ш60/В130/Г50"],
      ["Комод", "Ш140/В180/Г54"],
      ["Кровать", "Ш197/В130/Г206"],
      ["Матрас", "Без матраса"],
      ["Ортопед", "Без ортопеда"],
    ],
  },
  {
    slug: "spalnya-shanel",
    name: "Спальня «Шанель»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "159 900 ₽ / компл.",
    image: "/assets/spalnya-shanel-1.jpg",
    images: ["/assets/spalnya-shanel-1.jpg", "/assets/spalnya-shanel-2.jpg"],
    description: "Спальня «Шанель» — спальный гарнитур в цвете Крем, с кроватью 2030/2180/1580, со шкафом 2595/650/2315.",
    characteristics: [
      ["Цвет", "Крем"],
      ["Шкаф", "Мебельная коллекция «Шанель» – это поистине роскошный гарнитур, который можно поставить в дом даже особам царских кровей. Коллекция отличается витиеватыми формами, изогнутыми фасадами и мягкостью линий, сочетанием флористических узоров с роскошной золотой отделкой, мягкой обивкой изголовья кровати. Детская коллекция отличается обивкой кровати в приятном лавандовом цвете. Любой узор на мебели, каждая ручка на комоде или шкафу указывает на элегантность набора."],
      ["Кровать", "2030/2180/1580"],
      ["Тумба", "745/445/710"],
      ["Туалетный стол", "1950/500/860"],
      ["Зеркало", "1535/75/1210"],
      ["Шкаф", "2595/650/2315"],
      ["Матрас", "Без матраса!"],
    ],
  },
  {
    slug: "spalnya-gabriella-6-dver",
    name: "Спальня Габриэлла с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "90 000 ₽ / компл.",
    image: "/assets/spalnya-gabriella-6-dver-1.jpg",
    images: ["/assets/spalnya-gabriella-6-dver-1.jpg", "/assets/spalnya-gabriella-6-dver-2.jpg", "/assets/spalnya-gabriella-6-dver-3.jpg", "/assets/spalnya-gabriella-6-dver-4.jpg"],
    description: "Спальня Габриэлла с 6-дверным шкафом — спальный гарнитур с кроватью 180/200.",
    characteristics: [
      ["Фабрика", "Фабрика Миал"],
      ["Кровать", "Кровать 180/200"],
      ["Матрас", "Без матраса"],
      ["Комод", "Комод и трельяж в комплекте"],
    ],
  },
  {
    slug: "spalnya-byanka-2",
    name: "Спальня Бьянка",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "54 000 ₽ / компл.",
    image: "/assets/spalnya-byanka-2-1.jpg",
    images: ["/assets/spalnya-byanka-2-1.jpg", "/assets/spalnya-byanka-2-2.jpg", "/assets/spalnya-byanka-2-3.jpg"],
    description: "Спальня Бьянка — спальный гарнитур в цвете Матовый Белый.",
    characteristics: [
      ["Фабрика", "Фабрика Империя"],
      ["Цвет", "Цвет Матовый Белый"],
      ["Комод", "Комод"],
    ],
  },
  {
    slug: "spalnya-ariel-tureckaya-model-proizvodstvo-edel",
    name: "Спальня Ариэль Турецкая модель. Производство: « Эдель »",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "140 000 ₽ / компл.",
    image: "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-1.jpg",
    images: ["/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-1.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-2.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-3.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-4.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-5.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-6.jpg"],
    description: "Спальня Ариэль Турецкая модель — спальный гарнитур с кроватью вместе с тумбами, со шкафом 27402246633.",
    characteristics: [
      ["Производство", "НОВИНКА Спальня Ариэль Турецкая модель. Производство: « Эдель »"],
      ["Шкаф", ". Шкаф - 27402246633. Тумба-650600512. Туалетный столик 1832760512"],
      ["Зеркало", "Зеркало-1600960."],
      ["Кровать", "Кровать вместе с тумбами"],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Тумба", "На тумбочках подцветки!"],
      ["Кровать", "Кровать с Подъёмным механизмом."],
      ["Матрас", "Без матраса !"],
    ],
  },
  {
    slug: "spalnya-tiffani-6-dv",
    name: "Спальня ‘Тиффани’ с 6-дверным шкафом.",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "125 000 ₽ / компл.",
    image: "/assets/spalnya-tiffani-6-dv-1.jpg",
    images: ["/assets/spalnya-tiffani-6-dv-1.jpg", "/assets/spalnya-tiffani-6-dv-2.jpg", "/assets/spalnya-tiffani-6-dv-3.jpg"],
    description: "Спальня ‘Тиффани’ с 6-дверным шкафом. — спальный гарнитур в цвете крем/золото, с кроватью ш 2750 / г 2058 / в 1404",
    characteristics: [
      ["Фабрика", "Фабрика ‘Арида’"],
      ["Цвет", "крем/золото"],
      ["Тумба", ""],
      ["Шкаф", "ш 2720 / г 604 / в 2300"],
      ["Туалетный стол", ""],
      ["Кровать", "ш 2750 / г 2058 / в 1404 (велюр серо-бежевый)"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-mariya-eko",
    name: "Спальня «Мария Эко»»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "120 000 ₽ / компл.",
    image: "/assets/spalnya-mariya-eko-1.jpg",
    images: ["/assets/spalnya-mariya-eko-1.jpg"],
    description: "Спальня «Мария Эко»» — спальный гарнитур с кроватью 1.8 ш 2090 / г 2062 / в 1580, со шкафом ш 2700 / г 684 / в 2198.",
    characteristics: [
      ["Кровать", "кровать 1.8 ш 2090 / г 2062 / в 1580"],
      ["Тумба", "ш 700 / г 461/ в 700"],
      ["Шкаф", "ш 2700 / г 684 / в 2198"],
      ["Комод", "ш 1610 / г 510 / в 874"],
      ["Зеркало", "ш 1030 / в 1200"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-mariya-4dv",
    name: "Спальня ‘Мария’ с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "116 000 ₽ / компл.",
    image: "/assets/spalnya-mariya-4dv-1.jpg",
    images: ["/assets/spalnya-mariya-4dv-1.jpg"],
    description: "Спальня ‘Мария’ с 4-дверным шкафом — спальный гарнитур с кроватью ш2090/в1580/г2062, со шкафом ш1912/в2198/г550.",
    characteristics: [
      ["Фабрика", "Фабрика ‘Арида’"],
      ["Шкаф", "ш1912/в2198/г550"],
      ["Тумба", ""],
      ["Комод", "ш1610/в874/г510"],
      ["Зеркало", "ш1030/в1200"],
      ["Кровать", "ш2090/в1580/г2062"],
    ],
  },
  {
    slug: "spalnya-spalnya-prado-5dv",
    name: "Спальня ‘Прадо’ с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "130 000 ₽ / компл.",
    image: "/assets/spalnya-spalnya-prado-5dv-1.jpg",
    images: ["/assets/spalnya-spalnya-prado-5dv-1.jpg", "/assets/spalnya-spalnya-prado-5dv-2.jpg", "/assets/spalnya-spalnya-prado-5dv-3.jpg", "/assets/spalnya-spalnya-prado-5dv-4.jpg", "/assets/spalnya-spalnya-prado-5dv-5.jpg", "/assets/spalnya-spalnya-prado-5dv-6.jpg", "/assets/spalnya-spalnya-prado-5dv-7.jpg"],
    description: "Спальня ‘Прадо’ с 5-дверным шкафом — спальный гарнитур с кроватью ш 3300 / г 2070 / в 1450, со шкафом ш 2380 / г 640 / в 2300.",
    characteristics: [
      ["Фабрика", "Фабрика ‘Арида’"],
      ["Шкаф", "ш 2380 / г 640 / в 2300"],
      ["Кровать", "ш 3300 / г 2070 / в 1450"],
      ["Тумба", "ш 650 / г 410 / в 430"],
      ["Зеркало", "ш 1260 / в 900"],
      ["Туалетный стол", "ш 1480 / г 490 / в 840"],
      ["Матрас", "Без матраса, ортопедическое основание в комплекте."],
    ],
  },
  {
    slug: "spalnya-berta-eko-krem",
    name: "Спальня Берта ЭКО (крем)",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 81 500 ₽ / компл.",
    image: "/assets/spalnya-berta-eko-krem-1.jpg",
    images: ["/assets/spalnya-berta-eko-krem-1.jpg", "/assets/spalnya-berta-eko-krem-2.jpg", "/assets/spalnya-berta-eko-krem-3.jpg", "/assets/spalnya-berta-eko-krem-4.jpg"],
    description: "Спальня Берта ЭКО (крем) — спальный гарнитур с кроватью 160/200 без ПМ.",
    characteristics: [
      ["Кровать", "Кровать 160/200 без ПМ"],
      ["Кровать", "Кровать 180/200 без ПМ"],
      ["Кровать", "Кровать 180/200 с ПМ"],
    ],
  },
  {
    slug: "spalnya-berta-3-dv",
    name: "Спальня «Берта» с 3-дверным шкафом.",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "84 600 ₽ / компл.",
    image: "/assets/spalnya-berta-3-dv-1.jpg",
    images: ["/assets/spalnya-berta-3-dv-1.jpg"],
    description: "Спальня «Берта» с 3-дверным шкафом. — спальный гарнитур с кроватью 140/200, со шкафом 3-дверный",
    characteristics: [
      ["Шкаф", "Шкаф 3-дверный."],
      ["Кровать", "Кровать 140/200"],
      ["Тумба", "Тумбочки 2 шт."],
      ["Зеркало", "ТС с зеркалом и пуфик"],
      ["Производство", "Производство Арида"],
    ],
  },
  {
    slug: "spalnya-galaksi",
    name: "Спальня «Галакси»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "102 000 ₽ / компл.",
    image: "/assets/spalnya-galaksi-1.jpg",
    images: ["/assets/spalnya-galaksi-1.jpg", "/assets/spalnya-galaksi-2.jpg", "/assets/spalnya-galaksi-3.jpg", "/assets/spalnya-galaksi-4.jpg", "/assets/spalnya-galaksi-5.jpg", "/assets/spalnya-galaksi-6.jpg"],
    description: "Спальня «Галакси» — спальный гарнитур в цвете Сатин/золото, с кроватью Кровать 180/200, со шкафом 5-дверный - Ш2.35 В2.23 Г54.5 см.",
    characteristics: [
      ["Цвет", "Сатин/золото"],
      ["Фабрика", "Пр-во Ставрополь Фабрика СКФМ"],
      ["Кровать", "📐Кровать 180/200"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.35 В2.23 Г54.5 см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш72.5 В133.5 Г45 см"],
      ["Комод", "Комод - Ш146.5 В92.5 Г49 см"],
      ["Зеркало", "Зеркало - Ш1.20 В1.0 м"],
    ],
  },
  {
    slug: "spalnya-kassandra-6dv-cvet-bel-serebro-glyanec",
    name: "Спальня «Кассандра» с 6-дверным шкафом Цвет: бел/серебро/глянец",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "137 000 ₽ / компл.",
    image: "/assets/spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-1.jpg",
    images: ["/assets/spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-1.jpg", "/assets/spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-2.jpg"],
    description: "Спальня «Кассандра» с 6-дверным шкафом Цвет: бел/серебро/глянец — спальный гарнитур с кроватью 180/200, со шкафом 6-дверный - Ш2.84 В2.35 Г62.см.",
    characteristics: [
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "без матраса"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.84 В2.35 Г62.см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш65 В67 Г46 см"],
      ["Туалетный стол", "Туалетный стол - Ш1.56 В78 Г53.5 см"],
      ["Зеркало", "Зеркало Ш1.16 В1.13 см"],
    ],
  },
  {
    slug: "spalnya-ankara",
    name: "Спальня «Анкара»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "108 000 ₽ / компл.",
    image: "/assets/spalnya-ankara-1.jpg",
    images: ["/assets/spalnya-ankara-1.jpg", "/assets/spalnya-ankara-2.jpg", "/assets/spalnya-ankara-3.jpg", "/assets/spalnya-ankara-4.jpg", "/assets/spalnya-ankara-5.jpg"],
    description: "Спальня «Анкара» — спальный гарнитур в цвете Сатин, с кроватью 180/200, со шкафом 6-дверный - Ш2.63 В2.22 Г65см.",
    characteristics: [
      ["Цвет", "Сатин"],
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.63 В2.22 Г65см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш67 В48.5 Г45 см"],
      ["Комод", "Комод - Ш142.5 В90.5 Г45 см"],
      ["Зеркало", "Зеркало - Ш90 В104см"],
    ],
  },
  {
    slug: "spalnya-laura",
    name: "Спальня «Лаура»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 64 000 ₽ / компл.",
    image: "/assets/spalnya-laura-1.jpg",
    images: ["/assets/spalnya-laura-1.jpg", "/assets/spalnya-laura-2.jpg", "/assets/spalnya-laura-3.jpg", "/assets/spalnya-laura-4.jpg", "/assets/spalnya-laura-5.jpg", "/assets/spalnya-laura-6.jpg", "/assets/spalnya-laura-7.jpg"],
    description: "Спальня «Лаура» — спальный гарнитур в цвете Сатин, с кроватью Кровать 180/200, со шкафом 4-дверный - Ш2000 В2.10 Г60 см.",
    characteristics: [
      ["Цвет", "Сатин"],
      ["Фабрика", "Пр-во Ставрополь Фабрика СКФМ"],
      ["Кровать", "📐Кровать 180/200"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 4-дверный - Ш2000 В2.10 Г60 см"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.51 В2.10 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш48 В40 Г40 см"],
      ["Комод", "Комод - Ш96 В90 Г45.5 см"],
      ["Зеркало", "Зеркало - Ш105 В88.5 см"],
    ],
  },
  {
    slug: "spalnya-floriya",
    name: "Спальня «ФЛОРИЯ»»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "128 000 ₽ / компл.",
    image: "/assets/spalnya-floriya-1.jpg",
    images: ["/assets/spalnya-floriya-1.jpg", "/assets/spalnya-floriya-2.jpg", "/assets/spalnya-floriya-3.jpg", "/assets/spalnya-floriya-4.jpg", "/assets/spalnya-floriya-5.jpg", "/assets/spalnya-floriya-6.jpg", "/assets/spalnya-floriya-7.jpg"],
    description: "Спальня «ФЛОРИЯ»» — спальный гарнитур с кроватью Двухместная кровать, со шкафом 6-дверный",
    characteristics: [
      ["Комплектация", "Комплектация"],
      ["Кровать", "- Двухместная кровать"],
      ["Тумба", "- Две прикроватные тумбы"],
      ["Комод", "- Комод с зеркалом"],
      ["Шкаф", "- Шкаф 6-дверный"],
      ["Ортопед", "Ортопед не нужен"],
      ["Фасады", "Фасады МДФ под Эмалью"],
      ["Корпус", "Корпус ЛДСП"],
      ["Производство", ""],
      ["Фабрика", "Фабрика ARINA_HOME"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-tiffani",
    name: "Спальня «ТИФФАНИ»»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "81 000 ₽ / компл.",
    image: "/assets/spalnya-tiffani-1.jpg",
    images: ["/assets/spalnya-tiffani-1.jpg", "/assets/spalnya-tiffani-2.jpg", "/assets/spalnya-tiffani-3.jpg"],
    description: "Спальня «ТИФФАНИ»» — спальный гарнитур с кроватью Двухместная кровать, со шкафом 5-дверный",
    characteristics: [
      ["Комплектация", "Комплектация"],
      ["Кровать", "- Двухместная кровать"],
      ["Тумба", "- Две прикроватные тумбы"],
      ["Комод", "- Комод с зеркалом"],
      ["Шкаф", "- Шкаф 5-дверный"],
      ["Ортопед", "Ортопед не нужен"],
      ["Фасады", "Фасады МДФ под Эмалью"],
      ["Корпус", "Корпус ЛДСП"],
      ["Производство", ""],
      ["Фабрика", "Фабрика ARINA_HOME"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-parma-6dv",
    name: "Спальня «Парма» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "79 000 ₽ / компл.",
    image: "/assets/spalnya-parma-6dv-1.jpg",
    images: ["/assets/spalnya-parma-6dv-1.jpg", "/assets/spalnya-parma-6dv-2.jpg", "/assets/spalnya-parma-6dv-3.jpg", "/assets/spalnya-parma-6dv-4.jpg", "/assets/spalnya-parma-6dv-5.jpg", "/assets/spalnya-parma-6dv-6.jpg", "/assets/spalnya-parma-6dv-7.jpg", "/assets/spalnya-parma-6dv-8.jpg"],
    description: "Спальня «Парма» с 6-дверным шкафом — спальный гарнитур в цвете Белый, с кроватью 180/200, со шкафом 6-дверный - Ш2.70 В2.20 Г60см.",
    characteristics: [
      ["Цвет", "Белый"],
      ["Фабрика", "Фабрика Милана групп"],
      ["Матрас", "без матраса"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.70 В2.20 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш60 В50 Г44 см"],
      ["Комод", "Комод Ш140 В80 Г50см"],
      ["Зеркало", "Зеркало - Ш1.20 В92см"],
    ],
  },
  {
    slug: "spalnya-mariya",
    name: "Спальня «МАРИЯ»»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "91 000 ₽ / компл.",
    image: "/assets/spalnya-mariya-1.jpg",
    images: ["/assets/spalnya-mariya-1.jpg", "/assets/spalnya-mariya-2.jpg", "/assets/spalnya-mariya-3.jpg", "/assets/spalnya-mariya-4.jpg"],
    description: "Спальня «МАРИЯ»» — спальный гарнитур с кроватью Двухместная кровать, со шкафом 4-дверный",
    characteristics: [
      ["Комплектация", "Комплектация"],
      ["Кровать", "- Двухместная кровать"],
      ["Тумба", "- Две прикроватные тумбы (50х46х55)"],
      ["Зеркало", "- Зеркало (119х45х109)"],
      ["Туалетный стол", "- Туалетный столик (153×46×84)"],
      ["Шкаф", "- Шкаф 4-дверный (2.10×66×2.25)"],
      ["Фасады", "Фасады МДФ под Эмалью"],
      ["Корпус", "Корпус ЛДСП"],
      ["Производство", ""],
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-izmir-6-dv",
    name: "Спальня «Измир» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "110 000 ₽ / компл.",
    image: "/assets/spalnya-izmir-6-dv-1.jpg",
    images: ["/assets/spalnya-izmir-6-dv-1.jpg"],
    description: "Спальня «Измир» с 6-дверным шкафом — спальный гарнитур в цвете Сатин/ серебро",
    characteristics: [
      ["Производство", "Ставрополь СКФМ"],
      ["Цвет", "Сатин/ серебро (песочно-бежевый)"],
      ["Фасады", "прямой, крашеный ЛМДФ (эмаль глянцевая) с фрезеровкой"],
      ["Корпус", "Ламинированный ДСП"],
      ["Цвет", "мягкое основание микровелюр темно-синего цвета"],
      ["Характеристика", "прямолинейный фацет"],
      ["Шкаф", "2614 мм, г: 603 мм, в: 2300 мм"],
      ["Кровать", "2260 мм, г: 2080 мм, в: 1360 мм"],
      ["Тумба", "592 мм, г: 403 мм, в: 482 мм"],
      ["Комод", "1180 мм, г: 442 мм, в: 838 мм"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-zlata-4dv",
    name: "Спальня Злата с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "68 000 ₽ / компл.",
    image: "/assets/spalnya-zlata-4dv-1.jpg",
    images: ["/assets/spalnya-zlata-4dv-1.jpg", "/assets/spalnya-zlata-4dv-2.jpg", "/assets/spalnya-zlata-4dv-3.jpg"],
    description: "Спальня Злата с 4-дверным шкафом — спальный гарнитур в цвете Антрацит, с кроватью 180/200, со шкафом 4-дверный - Ш188 В2.16 Г52.5 см.",
    characteristics: [
      ["Фабрика", "Фабрика МИАЛ"],
      ["Цвет", "Антрацит"],
      ["Матрас", "Без матраса"],
      ["Шкаф", "Шкаф 4-дверный - Ш188 В2.16 Г52.5 см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш56 В49 Г38 см"],
      ["Туалетный стол", "Туалетный стол Ш1000 В74 Г42"],
      ["Комод", "Комод - Ш1000 В90.5 Г42 см"],
      ["Зеркало", "Зеркало - Ш89 В89 см"],
    ],
  },
  {
    slug: "spalnya-gravita-5dv",
    name: "Спальня ГРАВИТА с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: "/assets/spalnya-gravita-5dv-1.jpg",
    images: ["/assets/spalnya-gravita-5dv-1.jpg", "/assets/spalnya-gravita-5dv-2.jpg", "/assets/spalnya-gravita-5dv-3.jpg", "/assets/spalnya-gravita-5dv-4.jpg", "/assets/spalnya-gravita-5dv-5.jpg", "/assets/spalnya-gravita-5dv-6.jpg"],
    description: "Спальня ГРАВИТА с 5-дверным шкафом — спальный гарнитур в цвете Белый/глянец, с кроватью 180/200, со шкафом 5-дверный - Ш2.33 В2.20 Г53 см.",
    characteristics: [
      ["Фабрика", "Фабрика Эра"],
      ["Цвет", "Белый/глянец"],
      ["Матрас", "без матраса"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.33 В2.20 Г53 см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш52 В119.5 Г47.5 см"],
      ["Туалетный стол", "Туалетный стол - Ш153 В73.5 Г50.5 см"],
      ["Зеркало", "Зеркало - 52.5 52.5см"],
    ],
  },
  {
    slug: "spalnya-antalya-6-dv",
    name: "Спальня «Анталья» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "118 000 ₽ / компл.",
    image: "/assets/spalnya-antalya-6-dv-1.jpg",
    images: ["/assets/spalnya-antalya-6-dv-1.jpg", "/assets/spalnya-antalya-6-dv-2.jpg", "/assets/spalnya-antalya-6-dv-3.jpg", "/assets/spalnya-antalya-6-dv-4.jpg", "/assets/spalnya-antalya-6-dv-5.jpg", "/assets/spalnya-antalya-6-dv-6.jpg", "/assets/spalnya-antalya-6-dv-7.jpg", "/assets/spalnya-antalya-6-dv-8.jpg", "/assets/spalnya-antalya-6-dv-9.jpg", "/assets/spalnya-antalya-6-dv-10.jpg"],
    description: "Спальня «Анталья» с 6-дверным шкафом — спальный гарнитур в цвете Сатин",
    characteristics: [
      ["Производство", "Ставрополь СКФМ"],
      ["Цвет", "Сатин (песочно-бежевый)"],
      ["Фасады", "прямой, крашеный ЛМДФ (эмаль глянцевая) с фрезеровкой"],
      ["Характеристика", "зеркальное золото (Турция)"],
      ["Корпус", "Ламинированный ДСП"],
      ["Характеристика", "мягкое основание микровелюр"],
      ["Характеристика", "прямолинейный фацет"],
      ["Шкаф", "2684мм, г: 622 мм, в: 2206 мм"],
      ["Кровать", "2244 мм, г: 2037 мм, в: 1457 мм"],
      ["Тумба", "614 мм, г: 422 мм, в: 494 мм"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-zara",
    name: "Спальня «Зара»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "75 000 ₽ / компл.",
    image: "/assets/spalnya-zara-1.jpg",
    images: ["/assets/spalnya-zara-1.jpg", "/assets/spalnya-zara-2.jpg", "/assets/spalnya-zara-3.jpg", "/assets/spalnya-zara-4.jpg", "/assets/spalnya-zara-5.jpg", "/assets/spalnya-zara-6.jpg", "/assets/spalnya-zara-7.jpg", "/assets/spalnya-zara-8.jpg", "/assets/spalnya-zara-9.jpg", "/assets/spalnya-zara-10.jpg"],
    description: "Спальня «Зара» — спальный гарнитур в цвете Сатин, с кроватью Кровать 180/200, со шкафом 5-дверный - Ш2.50 В2.10 Г60см.",
    characteristics: [
      ["Цвет", "Сатин"],
      ["Фабрика", "Пр-во Ставрополь Фабрика СКФМ"],
      ["Кровать", "📐Кровать 180/200"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.50 В2.10 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш52 В44 Г40 см"],
      ["Комод", "Комод - Ш106 В95 Г45 см"],
      ["Зеркало", "Зеркало - Ш106 В106 см"],
    ],
  },
  {
    slug: "spalnya-tera-6ti-grafit-serebro",
    name: "Спальня «Тера» с 6-дверным шкафом графит серебро",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "83 500 ₽ / компл.",
    image: "/assets/spalnya-tera-6ti-grafit-serebro-1.jpg",
    images: ["/assets/spalnya-tera-6ti-grafit-serebro-1.jpg", "/assets/spalnya-tera-6ti-grafit-serebro-2.jpg", "/assets/spalnya-tera-6ti-grafit-serebro-3.jpg", "/assets/spalnya-tera-6ti-grafit-serebro-4.jpg", "/assets/spalnya-tera-6ti-grafit-serebro-5.jpg"],
    description: "Спальня «Тера» с 6-дверным шкафом графит серебро — спальный гарнитур с кроватью 1800/2000, со шкафом 2700x616×2200.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Milan Group»."],
      ["Кровать", "3040×2050×1200"],
      ["Шкаф", "2700x616×2200"],
      ["Тумба", "610x420×400"],
      ["Зеркало", "877×900×28"],
      ["Туалетный стол", "1360×470×786"],
    ],
  },
  {
    slug: "spalnya-milena-6dv",
    name: "Спальня «Милена» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "145 000 ₽ / компл.",
    image: "/assets/spalnya-milena-6dv-1.jpg",
    images: ["/assets/spalnya-milena-6dv-1.jpg", "/assets/spalnya-milena-6dv-2.jpg", "/assets/spalnya-milena-6dv-3.jpg", "/assets/spalnya-milena-6dv-4.jpg"],
    description: "Спальня «Милена» с 6-дверным шкафом — спальный гарнитур в цвете Мокко, с кроватью ширина 2000/длина 2130/1430высота спинки изголовье, со шкафом ширина 2802/707г/2264высота.",
    characteristics: [
      ["Цвет", "Благородный цвет и серебристая патина в классическом стиле делают спальню «милена» от Fortuna Home популярным местом для романтической природы. Все компоненты этого гарнитура гармонично сочетаются и создают торжественную и роскошную атмосферу."],
      ["Шкаф", "ширина 2802/707г/2264высота"],
      ["Кровать", "ширина 2000/длина 2130/1430высота спинки изголовье;"],
      ["Туалетный стол", "18179,550см"],
      ["Зеркало", "1200/высота 900/толщина 25"],
      ["Тумба", "ширина 700/глубина 510/высота 620"],
      ["Фасады", "МДФ."],
      ["Цвет", "Мокко"],
      ["Характеристика", "Прикроватная Банкетка в комплекте!"],
      ["Матрас", "Без матраса, ортопед(ламелии) в комплекте."],
    ],
  },
  {
    slug: "spalnya-spalnya-parma-s-6dv-shkafom",
    name: "Спальня «Парма» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-spalnya-parma-s-6dv-shkafom-1.jpg",
    images: ["/assets/spalnya-spalnya-parma-s-6dv-shkafom-1.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-2.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-3.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-4.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-5.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-6.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-7.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-8.jpg"],
    description: "Спальня «Парма» с 6-дверным шкафом — спальный гарнитур в цвете Графит, с кроватью Ш1875хВ1200хГ2055, со шкафом Спальня «Парма» с 6-дверным шкафом.",
    characteristics: [
      ["Шкаф", "🛌 Спальня «Парма» с 6-дверным шкафом"],
      ["Шкаф", "Ш2720хВ2200хГ615"],
      ["Кровать", "Ш1875хВ1200хГ2055"],
      ["Тумба", "Ш600хВ505хГ436"],
      ["Комод", "Ш1400хВ805хГ490"],
      ["Зеркало", "Ш1200хВ900хГ16"],
      ["Цвет", "Графит"],
      ["Матрас", "Без матраса"],
      ["Ортопед", "Без ортопеда"],
    ],
  },
  {
    slug: "spalnya-spalnya-parma-s-6dv-shkafom-2",
    name: "Спальня «Парма» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-spalnya-parma-s-6dv-shkafom-2-1.jpg",
    images: ["/assets/spalnya-spalnya-parma-s-6dv-shkafom-2-1.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-2-2.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-2-3.jpg", "/assets/spalnya-spalnya-parma-s-6dv-shkafom-2-4.jpg"],
    description: "Спальня «Парма» с 6-дверным шкафом — спальный гарнитур в цвете Белый, с кроватью Ш1875хВ1200хГ2055, со шкафом Спальня «Парма» с 6-дверным шкафом.",
    characteristics: [
      ["Шкаф", "🛌 Спальня «Парма» с 6-дверным шкафом"],
      ["Шкаф", "Ш2720хВ2200хГ615"],
      ["Кровать", "Ш1875хВ1200хГ2055"],
      ["Тумба", "Ш600хВ505хГ436"],
      ["Комод", "Ш1400хВ805хГ490"],
      ["Зеркало", "Ш1200хВ900хГ16"],
      ["Цвет", "Белый"],
      ["Матрас", "Без матраса"],
      ["Ортопед", "Без ортопеда"],
    ],
  },
  {
    slug: "spalnya-spalnya-parma-s-4dv-shkafom",
    name: "Спальня «Парма» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "77 900 ₽ / компл.",
    image: "/assets/spalnya-spalnya-parma-s-4dv-shkafom-1.jpg",
    images: ["/assets/spalnya-spalnya-parma-s-4dv-shkafom-1.jpg", "/assets/spalnya-spalnya-parma-s-4dv-shkafom-2.jpg", "/assets/spalnya-spalnya-parma-s-4dv-shkafom-3.jpg"],
    description: "Спальня «Парма» с 4-дверным шкафом — спальный гарнитур в цвете Графит, с кроватью Ш1875хВ1200хГ2055, со шкафом Спальня «Парма» с 4-дверным шкафом.",
    characteristics: [
      ["Шкаф", "🛌 Спальня «Парма» с 4-дверным шкафом"],
      ["Шкаф", "Ш1810хВ2200хГ615"],
      ["Кровать", "Ш1875хВ1200хГ2055"],
      ["Тумба", "Ш600хВ505хГ436"],
      ["Комод", "Ш1400хВ805хГ490"],
      ["Зеркало", "Ш1200хВ900хГ16"],
      ["Цвет", "Графит"],
      ["Матрас", "Без матраса."],
      ["Ортопед", "Без ортопеда."],
    ],
  },
  {
    slug: "spalnya-stefani-5dv",
    name: "Спальня «Стефани» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "100 000 ₽ / компл.",
    image: "/assets/spalnya-stefani-5dv-1.jpg",
    images: ["/assets/spalnya-stefani-5dv-1.jpg", "/assets/spalnya-stefani-5dv-2.jpg", "/assets/spalnya-stefani-5dv-3.jpg", "/assets/spalnya-stefani-5dv-4.jpg", "/assets/spalnya-stefani-5dv-5.jpg"],
    description: "Спальня «Стефани» с 5-дверным шкафом — спальный гарнитур в цвете Белый /Серебро, с кроватью 243х141х204, со шкафом 235х230х57см",
    characteristics: [
      ["Шкаф", "235х230х57см (ШхВхГ)."],
      ["Кровать", "243х141х204."],
      ["Тумба", "Ширина кровати с прикроватными тумбами: 296см."],
      ["Туалетный стол", "150х47х80см"],
      ["Зеркало", "95х95см (ШхВ)"],
      ["Фасады", "МДФ."],
      ["Покрытие", "Эмаль крашеная."],
      ["Цвет", "Белый /Серебро."],
      ["Матрас", "Без матраса, ортопед(дсп настилы) в комплекте."],
    ],
  },
  {
    slug: "spalnya-malta-s-6dv-shkafom",
    name: "Спальня «Мальта» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "57 000 ₽ / компл.",
    image: "/assets/spalnya-malta-s-6dv-shkafom-1.jpg",
    images: ["/assets/spalnya-malta-s-6dv-shkafom-1.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2.jpg", "/assets/spalnya-malta-s-6dv-shkafom-3.jpg", "/assets/spalnya-malta-s-6dv-shkafom-4.jpg", "/assets/spalnya-malta-s-6dv-shkafom-5.jpg", "/assets/spalnya-malta-s-6dv-shkafom-6.jpg", "/assets/spalnya-malta-s-6dv-shkafom-7.jpg", "/assets/spalnya-malta-s-6dv-shkafom-8.jpg"],
    description: "Спальня «Мальта» с 6-дверным шкафом — спальный гарнитур со шкафом 255х210х50см",
    characteristics: [
      ["Шкаф", "255х210х50см (ШхВхГ)."],
      ["Туалетный стол", "88х75х46."],
      ["Тумба", "50х47х43."],
      ["Матрас", "Без матраса, ортопед (дсп настилы) в комплекте."],
    ],
  },
  {
    slug: "spalnya-batichella-6dv",
    name: "Спальня «Батичелла» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "139 600 ₽ / компл.",
    image: "/assets/spalnya-batichella-6dv-1.jpg",
    images: ["/assets/spalnya-batichella-6dv-1.jpg", "/assets/spalnya-batichella-6dv-2.jpg", "/assets/spalnya-batichella-6dv-3.jpg", "/assets/spalnya-batichella-6dv-4.jpg"],
    description: "Спальня «Батичелла» с 6-дверным шкафом — спальный гарнитур в цвете Белый/Серебро, с кроватью 213х177х214см, со шкафом 300х246х65см",
    characteristics: [
      ["Цвет", "Благородный цвет и серебристая патина в классическом стиле делают спальню «Батичелла» от Fortuna Home популярным местом для романтической природы. Все компоненты этого гарнитура гармонично сочетаются и создают торжественную и роскошную атмосферу."],
      ["Шкаф", "300х246х65см (ШхВхГ)."],
      ["Кровать", "213х177х214см"],
      ["Туалетный стол", "181х79,5х50см"],
      ["Зеркало", "147х126см (ШхВ)."],
      ["Тумба", "68х71,4х47см"],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Цвет", "Белый/Серебро."],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-selena-5dv",
    name: "Спальня «Селена» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "101 000 ₽ / компл.",
    image: "/assets/spalnya-selena-5dv-1.jpg",
    images: ["/assets/spalnya-selena-5dv-1.jpg", "/assets/spalnya-selena-5dv-2.jpg", "/assets/spalnya-selena-5dv-3.jpg", "/assets/spalnya-selena-5dv-4.jpg", "/assets/spalnya-selena-5dv-5.jpg", "/assets/spalnya-selena-5dv-6.jpg", "/assets/spalnya-selena-5dv-7.jpg", "/assets/spalnya-selena-5dv-8.jpg"],
    description: "Спальня «Селена» с 5-дверным шкафом — спальный гарнитур с кроватью Ш208/Д207/В129 см, со шкафом Ш226/В220/Г52 см.",
    characteristics: [
      ["Шкаф", "Шкаф Ш226/В220/Г52 см"],
      ["Тумба", "Тумба Ш55/В43/Г42 см"],
      ["Комод", "Комод Ш120/В92.5/Г42 см"],
      ["Зеркало", "Зеркало Ш70/В79 см"],
      ["Кровать", "Ш208/Д207/В129 см"],
      ["Матрас", "Без матраса, ортопед(ламелии) в комплекте."],
      ["Комод", "Вы можете выбрать (Комод ) или (Туалетный столик ) с Пуфиком!"],
    ],
  },
  {
    slug: "spalnya-magnoliya-6dv",
    name: "Спальня «Магнолия» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "109 000 ₽ / компл.",
    image: "/assets/spalnya-magnoliya-6dv-1.jpg",
    images: ["/assets/spalnya-magnoliya-6dv-1.jpg", "/assets/spalnya-magnoliya-6dv-2.jpg", "/assets/spalnya-magnoliya-6dv-3.jpg", "/assets/spalnya-magnoliya-6dv-4.jpg", "/assets/spalnya-magnoliya-6dv-5.jpg", "/assets/spalnya-magnoliya-6dv-6.jpg", "/assets/spalnya-magnoliya-6dv-7.jpg", "/assets/spalnya-magnoliya-6dv-8.jpg", "/assets/spalnya-magnoliya-6dv-9.jpg", "/assets/spalnya-magnoliya-6dv-10.jpg"],
    description: "Спальня «Магнолия» с 6-дверным шкафом — спальный гарнитур в цвете Серый платинум/кант серебро, со шкафом Ш280/В217/Г52.5 см.",
    characteristics: [
      ["Характеристика", "Спальня должна быть элегантной и изысканной. «МАГНОЛИЯ» в полной мере соответствуют данным принципам. Резные узоры и плавность линий изголовья кровати и зеркала создают в привычной комнате атмосферу дворцового великолепия и роскоши. Каждая деталь выглядит утонченно и уместно, каждый элемент грамотно продуман."],
      ["Фасады", "МДФ."],
      ["Корпус", "ЛДСП Серый."],
      ["Покрытие", "Лак, эмаль крашеная."],
      ["Покрытие", "Велюр."],
      ["Цвет", "Серый платинум/кант серебро."],
      ["Шкаф", "Шкаф Ш280/В217/Г52.5 см"],
      ["Комод", "Комод Ш168/В83/Г53 см"],
      ["Зеркало", "Зеркало Ш104/В108 см"],
      ["Тумба", "Тумба Ш57/Г48/В57 см"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-miya-6dv",
    name: "Спальня «МИЯ» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "140 000 ₽ / компл.",
    image: "/assets/spalnya-miya-6dv-1.jpg",
    images: ["/assets/spalnya-miya-6dv-1.jpg", "/assets/spalnya-miya-6dv-2.jpg", "/assets/spalnya-miya-6dv-3.jpg", "/assets/spalnya-miya-6dv-4.jpg", "/assets/spalnya-miya-6dv-5.jpg", "/assets/spalnya-miya-6dv-6.jpg", "/assets/spalnya-miya-6dv-7.jpg", "/assets/spalnya-miya-6dv-8.jpg", "/assets/spalnya-miya-6dv-9.jpg"],
    description: "Спальня «МИЯ» с 6-дверным шкафом — спальный гарнитур с кроватью 2260х2200х1680, со шкафом 2720х620х2230мм",
    characteristics: [
      ["Характеристика", "Спальня должна быть элегантной и изысканной. «Мия» в полной мере соответствуют данным принципам. Резные узоры и плавность линий изголовья кровати и зеркала создают в привычной комнате атмосферу дворцового великолепия и роскоши. Каждая деталь выглядит утонченно и уместно, каждый элемент грамотно продуман."],
      ["Шкаф", "2720х620х2230мм (ШхГхВ)."],
      ["Кровать", "2260х2200х1680."],
      ["Комод", "1440х470х820."],
      ["Зеркало", "1020х40х1120."],
      ["Тумба", "600х450х690."],
      ["Фасады", "МДФ."],
      ["Корпус", "ЛДСП Серый."],
      ["Покрытие", "Лак, эмаль крашеная."],
      ["Покрытие", "Велюр."],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-milena-6dv-2",
    name: "Спальня «Милена» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "144 900 ₽ / компл.",
    image: "/assets/spalnya-milena-6dv-2-1.jpg",
    images: ["/assets/spalnya-milena-6dv-2-1.jpg", "/assets/spalnya-milena-6dv-2-2.jpg", "/assets/spalnya-milena-6dv-2-3.jpg", "/assets/spalnya-milena-6dv-2-4.jpg", "/assets/spalnya-milena-6dv-2-5.jpg", "/assets/spalnya-milena-6dv-2-6.jpg", "/assets/spalnya-milena-6dv-2-7.jpg", "/assets/spalnya-milena-6dv-2-8.jpg", "/assets/spalnya-milena-6dv-2-9.jpg", "/assets/spalnya-milena-6dv-2-10.jpg"],
    description: "Спальня «Милена» с 6-дверным шкафом — спальный гарнитур в цвете Мокко, с кроватью ширина 2000/длина 2130/1430высота спинки изголовье, со шкафом ширина 2802/707г/2264высота.",
    characteristics: [
      ["Цвет", "Благородный цвет и серебристая патина в классическом стиле делают спальню «милена» от Fortuna Home популярным местом для романтической природы. Все компоненты этого гарнитура гармонично сочетаются и создают торжественную и роскошную атмосферу."],
      ["Шкаф", "ширина 2802/707г/2264высота"],
      ["Кровать", "ширина 2000/длина 2130/1430высота спинки изголовье;"],
      ["Туалетный стол", "18179,550см"],
      ["Зеркало", "1200/высота 900/толщина 25"],
      ["Тумба", "ширина 700/глубина 510/высота 620"],
      ["Фасады", "МДФ."],
      ["Цвет", "Мокко"],
      ["Характеристика", "Прикроватная Банкетка в комплекте!"],
      ["Матрас", "Без матраса, ортопед(ламелии) в комплекте."],
    ],
  },
  {
    slug: "spalnya-krovat-s-shirokim-izgolovem-eto-smelo-yarko-neobychno-ona-sraz",
    name: "Спальня Кровать с широким изголовьем - это смело,ярко, необычно! Она сразу определяет вид спальни и делает спальню местом силы",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "87 000 ₽ / компл.",
    image: "/assets/spalnya-krovat-s-shirokim-izgolovem-eto-smelo-yarko-neobychno-ona-sraz-1.jpg",
    images: ["/assets/spalnya-krovat-s-shirokim-izgolovem-eto-smelo-yarko-neobychno-ona-sraz-1.jpg", "/assets/spalnya-krovat-s-shirokim-izgolovem-eto-smelo-yarko-neobychno-ona-sraz-2.jpg", "/assets/spalnya-krovat-s-shirokim-izgolovem-eto-smelo-yarko-neobychno-ona-sraz-3.jpg", "/assets/spalnya-krovat-s-shirokim-izgolovem-eto-smelo-yarko-neobychno-ona-sraz-4.jpg", "/assets/spalnya-krovat-s-shirokim-izgolovem-eto-smelo-yarko-neobychno-ona-sraz-5.jpg"],
    description: "Спальня Кровать с широким изголовьем - это смело,ярко, необычно! Она сразу определяет вид спальни и делает спальню местом силы — спальный гарнитур с кроватью 180/200см, со шкафом Ш260см/Г50см/В210см.",
    characteristics: [
      ["Кровать", "Кровать с широким изголовьем - это смело,ярко, необычно! Она сразу определяет вид спальни и делает спальню местом силы 🔴"],
      ["Цвет", "Кстати, а вы знали, что цвет и дизайн кровати могут оказывать значительное влияние на качество сна?"],
      ["Цвет", "Цвет кровати имеет прямое влияние на нашу психологию и эмоциональное состояние. Например, зеленый(изумрудный )цвет способствует расслаблению, Бежевый цвет снижает агрессивность, а синий цвет дарит чувство уверенности"],
      ["Производство", "Ставрополь."],
      ["Шкаф", "Ш260см/Г50см/В210см"],
      ["Кровать", "180/200см"],
      ["Тумба", ""],
      ["Туалетный стол", "Ш150см/Г45см/В80см.без пуфика!!!"],
      ["Зеркало", "100/100см"],
      ["Корпус", "ЛДСП"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-monika-6dv",
    name: "Спальня Моника с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "129 000 ₽ / компл.",
    image: "/assets/spalnya-monika-6dv-1.jpg",
    images: ["/assets/spalnya-monika-6dv-1.jpg"],
    description: "Спальня Моника с 6-дверным шкафом — спальный гарнитур в цвете капучино, с кроватью В1559 х Ш2084 х Г2155, со шкафом В2204 х Ш2789 х Г716.",
    characteristics: [
      ["Шкаф", "В2204 х Ш2789 х Г716"],
      ["Кровать", "В1559 х Ш2084 х Г2155"],
      ["Туалетный стол", "В788 х Ш1729 х Г570"],
      ["Зеркало", "В790 х Ш1200 х Г25"],
      ["Тумба", "В616 х Ш690 х Г506"],
      ["Цвет", "капучино"],
      ["Фасады", "МДФ"],
      ["Корпус", "ЛДСП"],
      ["Ортопед", "Ортопед в комплекте"],
      ["Матрас", "без матраса"],
    ],
  },
  {
    slug: "spalnya-selena",
    name: "Спальня Селена",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: "/assets/spalnya-selena-1.jpg",
    images: ["/assets/spalnya-selena-1.jpg", "/assets/spalnya-selena-2.jpg", "/assets/spalnya-selena-3.jpg", "/assets/spalnya-selena-4.jpg", "/assets/spalnya-selena-5.jpg", "/assets/spalnya-selena-6.jpg", "/assets/spalnya-selena-7.jpg"],
    description: "Спальня Селена — спальный гарнитур в цвете Белый Глянец Серебро!, с кроватью 244020401480, со шкафом 5-дверный.",
    characteristics: [
      ["Шкаф", "Шкаф 5-дверный."],
      ["Производство", "Производство Ставрополь"],
      ["Шкаф", "Шкаф -22902110540."],
      ["Кровать", "Кровать-244020401480"],
      ["Туалетный стол", "Треляж-1440800450"],
      ["Тумба", "Тумба-690480420"],
      ["Цвет", "Цвет Белый Глянец Серебро!"],
      ["Цвет", ""],
      ["Покрытие", "Велюр."],
      ["Матрас", "без матраса!"],
    ],
  },
  {
    slug: "spalnya-batichella-6dv-2",
    name: "Спальня «Батичелла» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "139 600 ₽ / компл.",
    image: "/assets/spalnya-batichella-6dv-2-1.jpg",
    images: ["/assets/spalnya-batichella-6dv-2-1.jpg", "/assets/spalnya-batichella-6dv-2-2.jpg"],
    description: "Спальня «Батичелла» с 6-дверным шкафом — спальный гарнитур в цвете Крем/Золото, с кроватью 213х177х214см, со шкафом 300х246х65см",
    characteristics: [
      ["Цвет", "Благородный цвет и золотистая патина в классическом стиле делают спальню «Батичелла» от Fortuna Home популярным местом для романтической природы. Все компоненты этого гарнитура гармонично сочетаются и создают торжественную и роскошную атмосферу."],
      ["Шкаф", "300х246х65см (ШхВхГ)."],
      ["Кровать", "213х177х214см"],
      ["Туалетный стол", "181х79,5х50см"],
      ["Зеркало", "147х126см (ШхВ)."],
      ["Тумба", "68х71,4х47см"],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Цвет", "Крем/Золото."],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-uyut-5dv",
    name: "Спальня «Уют» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 104 000 ₽ / компл.",
    image: "/assets/spalnya-uyut-5dv-1.jpg",
    images: ["/assets/spalnya-uyut-5dv-1.jpg", "/assets/spalnya-uyut-5dv-2.jpg", "/assets/spalnya-uyut-5dv-3.jpg", "/assets/spalnya-uyut-5dv-4.jpg"],
    description: "Спальня «Уют» с 5-дверным шкафом — спальный гарнитур с кроватью 194х140х200см, со шкафом 272х223х60см",
    characteristics: [
      ["Шкаф", "272х223х60см (ШхВхГ)."],
      ["Кровать", "194х140х200см"],
      ["Тумба", "Ширина с прикроватными тумбами: 321см."],
      ["Туалетный стол", "170х80х45см."],
      ["Зеркало", "105х67см (ШхВ)."],
      ["Тумба", "64х59х45см."],
      ["Матрас", "Без матраса, ортопед (дсп настилы) в комплекте."],
    ],
  },
  {
    slug: "spalnya-malta-s-6dv-shkafom-2",
    name: "Спальня «Мальта» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "55 000 ₽ / компл.",
    image: "/assets/spalnya-malta-s-6dv-shkafom-2-1.jpg",
    images: ["/assets/spalnya-malta-s-6dv-shkafom-2-1.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2-2.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2-3.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2-4.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2-5.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2-6.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2-7.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2-8.jpg", "/assets/spalnya-malta-s-6dv-shkafom-2-9.jpg"],
    description: "Спальня «Мальта» с 6-дверным шкафом — спальный гарнитур со шкафом 270х210х50",
    characteristics: [
      ["Шкаф", "270х210х50 (ШхВхГ)."],
      ["Туалетный стол", "88х75х46."],
      ["Тумба", "50х47х43."],
      ["Матрас", "Без матраса, ортопед (дсп настилы) в комплекте."],
    ],
  },
  {
    slug: "spalnya-stefani-5dv-2",
    name: "Спальня «Стефани» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: "/assets/spalnya-stefani-5dv-2-1.jpg",
    images: ["/assets/spalnya-stefani-5dv-2-1.jpg", "/assets/spalnya-stefani-5dv-2-2.jpg", "/assets/spalnya-stefani-5dv-2-3.jpg", "/assets/spalnya-stefani-5dv-2-4.jpg"],
    description: "Спальня «Стефани» с 5-дверным шкафом — спальный гарнитур в цвете Белый Серебро!, с кроватью 243х141х204, со шкафом 235х230х57см",
    characteristics: [
      ["Шкаф", "235х230х57см (ШхВхГ)."],
      ["Кровать", "243х141х204."],
      ["Тумба", "Ширина кровати с прикроватными тумбами: 296см."],
      ["Туалетный стол", "150х47х80см"],
      ["Зеркало", "95х95см (ШхВ)"],
      ["Фасады", "МДФ."],
      ["Покрытие", "Эмаль крашеная."],
      ["Цвет", "Белый Серебро!"],
      ["Цвет", "Ткани Серый!"],
      ["Матрас", "Без матраса, ортопед(дсп настилы) в комплекте."],
    ],
  },
  {
    slug: "spalnya-ariel-tureckaya-model-proizvodstvo-edel-2",
    name: "Спальня Ариэль Турецкая модель. Производство: « Эдель »",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "142 000 ₽ / компл.",
    image: "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-2-1.jpg",
    images: ["/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-2-1.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-2-2.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-2-3.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-2-4.jpg", "/assets/spalnya-ariel-tureckaya-model-proizvodstvo-edel-2-5.jpg"],
    description: "Спальня Ариэль Турецкая модель — спальный гарнитур с кроватью вместе с тумбами, со шкафом 27402246633.",
    characteristics: [
      ["Производство", "НОВИНКА Спальня Ариэль Турецкая модель. Производство: « Эдель »"],
      ["Шкаф", ". Шкаф - 27402246633. Тумба-650600512. Туалетный столик 1832760512"],
      ["Зеркало", "Зеркало-1600960."],
      ["Кровать", "Кровать вместе с тумбами"],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Тумба", "На тумбочках подцветки!"],
      ["Кровать", "Кровать с Подъёмным механизмом."],
      ["Матрас", "Без матраса !"],
    ],
  },
  {
    slug: "spalnya-oliviya-s-6dv-shkafom",
    name: "Спальня «Оливия» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "84 000 ₽ / компл.",
    image: "/assets/spalnya-oliviya-s-6dv-shkafom-1.jpg",
    images: ["/assets/spalnya-oliviya-s-6dv-shkafom-1.jpg", "/assets/spalnya-oliviya-s-6dv-shkafom-2.jpg", "/assets/spalnya-oliviya-s-6dv-shkafom-3.jpg", "/assets/spalnya-oliviya-s-6dv-shkafom-4.jpg", "/assets/spalnya-oliviya-s-6dv-shkafom-5.jpg"],
    description: "Спальня «Оливия» с 6-дверным шкафом — спальный гарнитур в цвете Благородный цвет не оставит равнодушным ценителя классики, с кроватью В1280 х Ш2000 х Г2074, со шкафом В2192 х Ш2704 х Г615.",
    characteristics: [
      ["Цвет", "Благородный цвет не оставит равнодушным ценителя классики."],
      ["Шкаф", "В2192 х Ш2704 х Г615"],
      ["Кровать", "В1280 х Ш2000 х Г2074"],
      ["Зеркало", "В900 х Ш800 х Г22"],
      ["Тумба", "В515 х Ш598 х Г420"],
      ["Комод", "В862 х Ш1302 х Г470"],
      ["Цвет", "Белый"],
      ["Матрас", "Без матраса, в комплекте с подъёмным механизмом."],
    ],
  },
  {
    slug: "spalnya-gravito-5-ti-dv",
    name: "Спальня Гравито с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "97 000 ₽ / компл.",
    image: "/assets/spalnya-gravito-5-ti-dv-1.jpg",
    images: ["/assets/spalnya-gravito-5-ti-dv-1.jpg", "/assets/spalnya-gravito-5-ti-dv-2.jpg", "/assets/spalnya-gravito-5-ti-dv-3.jpg", "/assets/spalnya-gravito-5-ti-dv-4.jpg", "/assets/spalnya-gravito-5-ti-dv-5.jpg"],
    description: "Спальня Гравито с 5-дверным шкафом — спальный гарнитур в цвете серая белая.",
    characteristics: [
      ["Цвет", "Цвет серая белая"],
      ["Матрас", "Без матрас"],
    ],
  },
  {
    slug: "spalnya-laura-2",
    name: "Спальня «Лаура»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "69 100 ₽ / компл.",
    image: "/assets/spalnya-laura-2-1.jpg",
    images: ["/assets/spalnya-laura-2-1.jpg", "/assets/spalnya-laura-2-2.jpg", "/assets/spalnya-laura-2-3.jpg", "/assets/spalnya-laura-2-4.jpg", "/assets/spalnya-laura-2-5.jpg"],
    description: "Спальня «Лаура» — спальный гарнитур в цвете Белый, с кроватью Кровать 180/200, со шкафом 4-дверный - Ш2000 В2.10 Г60 см.",
    characteristics: [
      ["Цвет", "Белый"],
      ["Фабрика", "Пр-во Ставрополь Фабрика СКФМ"],
      ["Кровать", "📐Кровать 180/200"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 4-дверный - Ш2000 В2.10 Г60 см"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.51 В2.10 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш48 В40 Г40 см"],
      ["Комод", "Комод - Ш96 В90 Г45.5 см"],
      ["Зеркало", "Зеркало - Ш105 В88.5 см"],
    ],
  },
  {
    slug: "spalnya-laura-3",
    name: "Спальня «Лаура»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 67 200 ₽ / компл.",
    image: "/assets/spalnya-laura-3-1.jpg",
    images: ["/assets/spalnya-laura-3-1.jpg", "/assets/spalnya-laura-3-2.jpg", "/assets/spalnya-laura-3-3.jpg", "/assets/spalnya-laura-3-4.jpg", "/assets/spalnya-laura-3-5.jpg", "/assets/spalnya-laura-3-6.jpg", "/assets/spalnya-laura-3-7.jpg"],
    description: "Спальня «Лаура» — спальный гарнитур в цвете Серый/серебро, с кроватью Кровать 180/200, со шкафом 4-дверный - Ш2000 В2.10 Г60 см.",
    characteristics: [
      ["Цвет", "Серый/серебро"],
      ["Фабрика", "Пр-во Ставрополь Фабрика СКФМ"],
      ["Кровать", "📐Кровать 180/200"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 4-дверный - Ш2000 В2.10 Г60 см"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.51 В2.10 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш48 В40 Г40 см"],
      ["Комод", "Комод - Ш96 В90 Г45.5 см"],
      ["Зеркало", "Зеркало - Ш105 В88.5 см"],
    ],
  },
  {
    slug: "spalnya-ankara-2",
    name: "Спальня «Анкара»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "109 000 ₽ / компл.",
    image: "/assets/spalnya-ankara-2-1.jpg",
    images: ["/assets/spalnya-ankara-2-1.jpg", "/assets/spalnya-ankara-2-2.jpg", "/assets/spalnya-ankara-2-3.jpg", "/assets/spalnya-ankara-2-4.jpg", "/assets/spalnya-ankara-2-5.jpg", "/assets/spalnya-ankara-2-6.jpg", "/assets/spalnya-ankara-2-7.jpg", "/assets/spalnya-ankara-2-8.jpg", "/assets/spalnya-ankara-2-9.jpg", "/assets/spalnya-ankara-2-10.jpg"],
    description: "Спальня «Анкара» — спальный гарнитур в цвете Сатин, с кроватью 180/200, со шкафом 6-дверный - Ш2.63 В2.22 Г65см.",
    characteristics: [
      ["Цвет", "Сатин"],
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.63 В2.22 Г65см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш67 В48.5 Г45 см"],
      ["Комод", "Комод - Ш142.5 В90.5 Г45 см"],
      ["Зеркало", "Зеркало - Ш90 В104см"],
    ],
  },
  {
    slug: "spalnya-lali",
    name: "Спальня «Лали»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "129 000 ₽ / компл.",
    image: "/assets/spalnya-lali-1.jpg",
    images: ["/assets/spalnya-lali-1.jpg", "/assets/spalnya-lali-2.jpg", "/assets/spalnya-lali-3.jpg", "/assets/spalnya-lali-4.jpg", "/assets/spalnya-lali-5.jpg", "/assets/spalnya-lali-6.jpg"],
    description: "Спальня «Лали» — спальный гарнитур в цвете Сатин, с кроватью 180/200, со шкафом 5-дверный - Ш2.55 В2.20 Г64.5 см.",
    characteristics: [
      ["Цвет", "Сатин"],
      ["Фабрика", "Фабрика ЭРА"],
      ["Матрас", "без матраса"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.55 В2.20 Г64.5 см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш68.5 В69 Г44 см"],
      ["Туалетный стол", "Туалетный столик - Ш169.5 В82.2 Г48.5 см"],
      ["Зеркало", "Зеркало - Ш1.21 В103 см"],
    ],
  },
  {
    slug: "spalnya-milana",
    name: "Спальня «Милана»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "81 500 ₽ / компл.",
    image: "/assets/spalnya-milana-1.jpg",
    images: ["/assets/spalnya-milana-1.jpg", "/assets/spalnya-milana-2.jpg", "/assets/spalnya-milana-3.jpg", "/assets/spalnya-milana-4.jpg", "/assets/spalnya-milana-5.jpg", "/assets/spalnya-milana-6.jpg", "/assets/spalnya-milana-7.jpg", "/assets/spalnya-milana-8.jpg"],
    description: "Спальня «Милана» — спальный гарнитур с кроватью 1.80/2.00, В-1.30, Ш-226, со шкафом Ш-2.69, Г-60, В-2.25.",
    characteristics: [
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Кровать", "1.80/2.00, В-1.30, Ш-226"],
      ["Комод", "Ш-1.00, Г-43, В-1.01"],
      ["Шкаф", "Ш-2.69, Г-60, В-2.25"],
      ["Тумба", "Ш-60, Г-40, В-48"],
      ["Зеркало", "Ш-1.00, Г-20, В-80"],
      ["Матрас", "Без матраса, и ортопеда."],
    ],
  },
  {
    slug: "spalnya-ankara-3",
    name: "Спальня «Анкара»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 109 000 ₽ / компл.",
    image: "/assets/spalnya-ankara-3-1.jpg",
    images: ["/assets/spalnya-ankara-3-1.jpg", "/assets/spalnya-ankara-3-2.jpg", "/assets/spalnya-ankara-3-3.jpg", "/assets/spalnya-ankara-3-4.jpg", "/assets/spalnya-ankara-3-5.jpg", "/assets/spalnya-ankara-3-6.jpg", "/assets/spalnya-ankara-3-7.jpg", "/assets/spalnya-ankara-3-8.jpg"],
    description: "Спальня «Анкара» — спальный гарнитур в цвете Сатин с бежевой спинкой, с кроватью 180/200, со шкафом 6-дверный - Ш2.63 В2.22 Г65см.",
    characteristics: [
      ["Цвет", "Сатин с бежевой спинкой"],
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "Без ортопеда и матраса."],
      ["Матрас", "без матраса"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.63 В2.22 Г65см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш67 В48.5 Г45 см"],
      ["Комод", "Комод - Ш142.5 В90.5 Г45 см"],
      ["Зеркало", "Зеркало - Ш90 В104см"],
    ],
  },
  {
    slug: "spalnya-florenciya",
    name: "Спальня «Флоренция»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "128 200 ₽ / компл.",
    image: "/assets/spalnya-florenciya-1.jpg",
    images: ["/assets/spalnya-florenciya-1.jpg", "/assets/spalnya-florenciya-2.jpg", "/assets/spalnya-florenciya-3.jpg", "/assets/spalnya-florenciya-4.jpg", "/assets/spalnya-florenciya-5.jpg", "/assets/spalnya-florenciya-6.jpg", "/assets/spalnya-florenciya-7.jpg", "/assets/spalnya-florenciya-8.jpg"],
    description: "Спальня «Флоренция» — спальный гарнитур в цвете Белый/Глянец, с кроватью 180/200, со шкафом 5-дверный - Ш2.50 В2.44 Г56.5 см.",
    characteristics: [
      ["Цвет", "Белый/Глянец"],
      ["Фабрика", "Пр-во Ставрополь Фабрика ЭРА"],
      ["Матрас", "без матраса"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.50 В2.44 Г56.5 см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш62 В63.5 Г44.5 см"],
      ["Туалетный стол", "Туалетный стол - Ш157 В77.5 Г44.5 см"],
      ["Зеркало", "Зеркало - Ш1.32 В1.20 см"],
    ],
  },
  {
    slug: "spalnya-leonarda",
    name: "Спальня «Леонарда»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-leonarda-1.jpg",
    images: ["/assets/spalnya-leonarda-1.jpg", "/assets/spalnya-leonarda-2.jpg", "/assets/spalnya-leonarda-3.jpg", "/assets/spalnya-leonarda-4.jpg", "/assets/spalnya-leonarda-5.jpg", "/assets/spalnya-leonarda-6.jpg"],
    description: "Спальня «Леонарда» — спальный гарнитур с кроватью 180/200, со шкафом 6-дверный - Ш2.42 В2.14 Г60см.",
    characteristics: [
      ["Цвет", ""],
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.42 В2.14 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш50 В45 Г39.5 см"],
      ["Комод", "Комод - Ш130 В83 Г46 см"],
      ["Зеркало", "Зеркало - Ш1м В80см"],
    ],
  },
  {
    slug: "spalnya-leonarda-2",
    name: "Спальня «Леонарда»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-leonarda-2-1.jpg",
    images: ["/assets/spalnya-leonarda-2-1.jpg", "/assets/spalnya-leonarda-2-2.jpg", "/assets/spalnya-leonarda-2-3.jpg", "/assets/spalnya-leonarda-2-4.jpg", "/assets/spalnya-leonarda-2-5.jpg", "/assets/spalnya-leonarda-2-6.jpg", "/assets/spalnya-leonarda-2-7.jpg"],
    description: "Спальня «Леонарда» — спальный гарнитур с кроватью 180/200, со шкафом 6-дверный - Ш2.42 В2.14 Г60см.",
    characteristics: [
      ["Цвет", ""],
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.42 В2.14 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш50 В45 Г39.5 см"],
      ["Комод", "Комод - Ш130 В83 Г46 см"],
      ["Зеркало", "Зеркало - Ш1м В80см"],
    ],
  },
  {
    slug: "spalnya-emel",
    name: "Спальня «Эмель»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "84 000 ₽ / компл.",
    image: "/assets/spalnya-emel-1.jpg",
    images: ["/assets/spalnya-emel-1.jpg", "/assets/spalnya-emel-2.jpg", "/assets/spalnya-emel-3.jpg"],
    description: "Спальня «Эмель» — спальный гарнитур в цвете Белый, с кроватью Ш-1.84, Г-2.03, со шкафом Ш-2.70, В-2.10, Г-57.",
    characteristics: [
      ["Производство", "Производство г.Ставрополь"],
      ["Фабрика", "Фабрика Arina home"],
      ["Цвет", "Белый"],
      ["Шкаф", "Ш-2.70, В-2.10, Г-57"],
      ["Комод", "Ш-1.20, В-94, Г-47"],
      ["Тумба", "Ш-53, В-43, Г-41"],
      ["Кровать", "Ш-1.84, Г-2.03"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-laura-4",
    name: "Спальня «Лаура»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "62 400 ₽ / компл.",
    image: "/assets/spalnya-laura-4-1.jpg",
    images: ["/assets/spalnya-laura-4-1.jpg", "/assets/spalnya-laura-4-2.jpg", "/assets/spalnya-laura-4-3.jpg", "/assets/spalnya-laura-4-4.jpg", "/assets/spalnya-laura-4-5.jpg", "/assets/spalnya-laura-4-6.jpg"],
    description: "Спальня «Лаура» — спальный гарнитур в цвете Сатин, с кроватью 160/200, со шкафом 3-дверный - Ш150 В2.10 Г60см.",
    characteristics: [
      ["Цвет", "Сатин/"],
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "без матраса, без ортопеда"],
      ["Шкаф", "Шкаф 3-дверный - Ш150 В2.10 Г60см"],
      ["Кровать", "Кровать - 160/200"],
      ["Тумба", "Тумба - Ш48 В40 Г40 см"],
      ["Комод", "Комод - Ш96 В90 Г45.5 см"],
      ["Зеркало", "Зеркало - Ш105 В88.5 см"],
    ],
  },
  {
    slug: "spalnya-lali-2",
    name: "Спальня «Лали»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "126 900 ₽ / компл.",
    image: "/assets/spalnya-lali-2-1.jpg",
    images: ["/assets/spalnya-lali-2-1.jpg", "/assets/spalnya-lali-2-2.jpg", "/assets/spalnya-lali-2-3.jpg", "/assets/spalnya-lali-2-4.jpg", "/assets/spalnya-lali-2-5.jpg"],
    description: "Спальня «Лали» — спальный гарнитур в цвете Сатин, с кроватью 180/200, со шкафом 5-дверный - Ш2.55 В2.20 Г64.5 см.",
    characteristics: [
      ["Цвет", "Сатин"],
      ["Фабрика", "Фабрика ЭРА"],
      ["Матрас", "без матраса"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.55 В2.20 Г64.5 см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш68.5 В69 Г44 см"],
      ["Комод", "Комод - Ш131 В88 Г53.5 см"],
      ["Зеркало", "Зеркало - Ш1.21 В103 см"],
    ],
  },
  {
    slug: "spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-2",
    name: "Спальня «Кассандра» с 6-дверным шкафом Цвет: бел/серебро/глянец",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 128 100 ₽ / компл.",
    image: "/assets/spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-2-1.jpg",
    images: ["/assets/spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-2-1.jpg", "/assets/spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-2-2.jpg", "/assets/spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-2-3.jpg", "/assets/spalnya-kassandra-6dv-cvet-bel-serebro-glyanec-2-4.jpg"],
    description: "Спальня «Кассандра» с 6-дверным шкафом Цвет: бел/серебро/глянец — спальный гарнитур с кроватью 180/200, со шкафом 6-дверный - Ш2.84 В2.35 Г65.см.",
    characteristics: [
      ["Фабрика", "Фабрика СКФМ"],
      ["Матрас", "без матраса"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.84 В2.35 Г65.см"],
      ["Шкаф", "Шкаф 4-дверный Ш2.070мм Г650мм В2350мм"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш65 В67 Г46 см"],
      ["Туалетный стол", "Туалетный стол - Ш1.56 В78 Г53.5 см"],
      ["Зеркало", "Зеркало Ш1.16 В1.13 см"],
    ],
  },
  {
    slug: "spalnya-izmir-6-dv-2",
    name: "Спальня «Измир» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "116 500 ₽ / компл.",
    image: "/assets/spalnya-izmir-6-dv-2-1.jpg",
    images: ["/assets/spalnya-izmir-6-dv-2-1.jpg", "/assets/spalnya-izmir-6-dv-2-2.jpg", "/assets/spalnya-izmir-6-dv-2-3.jpg", "/assets/spalnya-izmir-6-dv-2-4.jpg", "/assets/spalnya-izmir-6-dv-2-5.jpg", "/assets/spalnya-izmir-6-dv-2-6.jpg"],
    description: "Спальня «Измир» с 6-дверным шкафом — спальный гарнитур в цвете Белый/Серебро, с кроватью 1.8см, Ш2.26см, Г2.08см, В1.36см, со шкафом 6-дверный дверный.",
    characteristics: [
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Цвет", "Белый/Серебро"],
      ["Фасады", "прямой, крашеный ЛМДФ (эмаль глянцевая) с фрезеровкой"],
      ["Корпус", "Ламинированный ДСП"],
      ["Цвет", "мягкое основание микровелюр темно-синего цвета"],
      ["Характеристика", "прямолинейный фацет"],
      ["Шкаф", "6-дверный"],
      ["Кровать", "1.8см, Ш2.26см, Г2.08см, В1.36см"],
      ["Тумба", "Ш59см, Г40см, В48см"],
      ["Комод", "Ш1.18см, Г44см, В83см"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-izmir-6-dv-3",
    name: "Спальня «Измир» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "116 500 ₽ / компл.",
    image: "/assets/spalnya-izmir-6-dv-3-1.jpg",
    images: ["/assets/spalnya-izmir-6-dv-3-1.jpg", "/assets/spalnya-izmir-6-dv-3-2.jpg", "/assets/spalnya-izmir-6-dv-3-3.jpg", "/assets/spalnya-izmir-6-dv-3-4.jpg", "/assets/spalnya-izmir-6-dv-3-5.jpg", "/assets/spalnya-izmir-6-dv-3-6.jpg", "/assets/spalnya-izmir-6-dv-3-7.jpg", "/assets/spalnya-izmir-6-dv-3-8.jpg"],
    description: "Спальня «Измир» с 6-дверным шкафом — спальный гарнитур в цвете Сатин",
    characteristics: [
      ["Производство", "Ставрополь СКФМ"],
      ["Цвет", "Сатин (песочно-бежевый)"],
      ["Фасады", "прямой, крашеный ЛМДФ (эмаль глянцевая) с фрезеровкой"],
      ["Характеристика", "зеркальное золото (Турция)"],
      ["Корпус", "Ламинированный ДСП"],
      ["Цвет", "мягкое основание микровелюр темно-синего цвета"],
      ["Характеристика", "прямолинейный фацет"],
      ["Шкаф", "ш-2.61, г-603, в-2.30"],
      ["Кровать", "Кровать 1.8- ш-2.26, г-2.08"],
      ["Тумба", "Тумба- ш-59.2, г-40.3, в-48.2"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-parma-4dv",
    name: "Спальня «Парма» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "75 000 ₽ / компл.",
    image: "/assets/spalnya-parma-4dv-1.jpg",
    images: ["/assets/spalnya-parma-4dv-1.jpg"],
    description: "Спальня «Парма» с 4-дверным шкафом — спальный гарнитур в цвете графит, с кроватью 180/200, со шкафом 4-дверный Ш1.81 / В2.20 / Г60см.",
    characteristics: [
      ["Цвет", "графит"],
      ["Матрас", "без матраса"],
      ["Кровать", "Кровать 180/200"],
      ["Фабрика", "Фабрика Милана групп"],
      ["Шкаф", "Шкаф 4-дверный Ш1.81 / В2.20 / Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба- Ш60 / В50 / Г44 см"],
      ["Комод", "Комод Ш140 / В80 / Г50см"],
      ["Зеркало", "Зеркало Ш1.20 / В92см"],
    ],
  },
  {
    slug: "spalnya-parma-4dv-2",
    name: "Спальня «Парма» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "75 000 ₽ / компл.",
    image: "/assets/spalnya-parma-4dv-2-1.jpg",
    images: ["/assets/spalnya-parma-4dv-2-1.jpg", "/assets/spalnya-parma-4dv-2-2.jpg", "/assets/spalnya-parma-4dv-2-3.jpg", "/assets/spalnya-parma-4dv-2-4.jpg"],
    description: "Спальня «Парма» с 4-дверным шкафом — спальный гарнитур в цвете Белый, с кроватью 180/200, со шкафом 4-дверный Ш1.81 / В2.20 / Г60см.",
    characteristics: [
      ["Цвет", "Белый"],
      ["Матрас", "без матраса"],
      ["Кровать", "Кровать 180/200"],
      ["Фабрика", "Фабрика Милана групп"],
      ["Шкаф", "Шкаф 4-дверный Ш1.81 / В2.20 / Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба- Ш60 / В50 / Г44 см"],
      ["Комод", "Комод Ш140 / В80 / Г50см"],
      ["Зеркало", "Зеркало Ш1.20 / В92см"],
    ],
  },
  {
    slug: "spalnya-dia-6ti-2",
    name: "Спальня «Диа» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "99 000 ₽ / компл.",
    image: "/assets/spalnya-dia-6ti-2-1.jpg",
    images: ["/assets/spalnya-dia-6ti-2-1.jpg"],
    description: "Спальня «Диа» с 6-дверным шкафом — спальный гарнитур с кроватью 180/200, со шкафом 2705х616х2200.",
    characteristics: [
      ["Кровать", "Кровать 180/200"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика «milan group»"],
      ["Комод", "Цены высокая из-за того что в наличии комод, и туалетный столик"],
      ["Кровать", "2080х3080х1220"],
      ["Шкаф", "Шкаф 2705х616х2200"],
      ["Тумба", "Тумба левая/правая"],
      ["Туалетный стол", "Туалетный стол 1400х468х788"],
      ["Зеркало", "Подзеркальник 900х800х28"],
      ["Комод", "Комод 1000х470х895"],
    ],
  },
  {
    slug: "spalnya-dzhakonda-4dv",
    name: "Спальня «Джаконда» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "105 000 ₽ / компл.",
    image: "/assets/spalnya-dzhakonda-4dv-1.jpg",
    images: ["/assets/spalnya-dzhakonda-4dv-1.jpg"],
    description: "Спальня «Джаконда» с 4-дверным шкафом — спальный гарнитур в цвете белая, с кроватью 180/200, со шкафом В2349 х Ш2196 х Г682.",
    characteristics: [
      ["Цвет", "белая"],
      ["Кровать", "180/200"],
      ["Матрас", "без матраса"],
      ["Фабрика", "Фабрика «СлонимМебель»"],
      ["Цвет", "Светлый крем глянец/Золотая патина, ноче ренуар"],
      ["Фасады", "МДФ крашенный"],
      ["Шкаф", "В2349 х Ш2196 х Г682"],
      ["Кровать", "В1446 х Ш2034 х Г2116"],
      ["Комод", "В860 х Ш1161 х Г539"],
      ["Зеркало", "В1070 х Ш946 х Г85"],
    ],
  },
  {
    slug: "spalnya-valensiya-6ti-krem-2",
    name: "Спальня «Валенсия» с 6-дверным шкафом крем",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "128 000 ₽ / компл.",
    image: "/assets/spalnya-valensiya-6ti-krem-2-1.jpg",
    images: ["/assets/spalnya-valensiya-6ti-krem-2-1.jpg", "/assets/spalnya-valensiya-6ti-krem-2-2.jpg", "/assets/spalnya-valensiya-6ti-krem-2-3.jpg", "/assets/spalnya-valensiya-6ti-krem-2-4.jpg", "/assets/spalnya-valensiya-6ti-krem-2-5.jpg", "/assets/spalnya-valensiya-6ti-krem-2-6.jpg", "/assets/spalnya-valensiya-6ti-krem-2-7.jpg"],
    description: "Спальня «Валенсия» с 6-дверным шкафом крем — спальный гарнитур в цвете Белый глянец /Золотая патина, с кроватью 1800/2000, со шкафом 2896/696/2442",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика « Слониммебель»."],
      ["Цвет", "Белый глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Мягкое Велюр."],
      ["Шкаф", "2896/696/2442 (ШхГхВ)"],
      ["Туалетный стол", "1633/482/486 (ШхГхВ)"],
    ],
  },
  {
    slug: "spalnya-vena-6dv",
    name: "Спальня «Вена с 6-дверным шкафом»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "124 000 ₽ / компл.",
    image: "/assets/spalnya-vena-6dv-1.jpg",
    images: ["/assets/spalnya-vena-6dv-1.jpg"],
    description: "Спальня «Вена с 6-дверным шкафом» — спальный гарнитур в цвете белая, с кроватью В1549хШ2084хГ2079, со шкафом В2246хШ2646хГ702.",
    characteristics: [
      ["Цвет", "белая"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика «СлонимМебель»"],
      ["Шкаф", "В2246хШ2646хГ702"],
      ["Кровать", "В1549хШ2084хГ2079"],
      ["Комод", "В874хШ1567хГ507"],
      ["Тумба", "В642хШ660"],
      ["Зеркало", "Ш1091хВ1203"],
      ["Ортопед", "Ортопед (ламели) в комплекте."],
    ],
  },
  {
    slug: "spalnya-stefani-4dv",
    name: "Спальня «Стефани» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 134 500 ₽ / компл.",
    image: "/assets/spalnya-stefani-4dv-1.jpg",
    images: ["/assets/spalnya-stefani-4dv-1.jpg"],
    description: "Спальня «Стефани» с 4-дверным шкафом — спальный гарнитур в цвете Крем золото, изголовье велюр бежевый, с кроватью 2452/1326/2060 (Ш/В/Г)",
    characteristics: [
      ["Фабрика", "Фабрика «Arida»"],
      ["Матрас", "Без матраса"],
      ["Шкаф", "Наполнение комфорт для шкафа в комплекте"],
      ["Цвет", "Крем золото, изголовье велюр бежевый"],
      ["Кровать", "- Кровать 2452/1326/2060 (Ш/В/Г) (с/м 180/200)"],
      ["Тумба", "550/460/464 ( Ш/В/Г)"],
      ["Шкаф", "1830/605/2254"],
      ["Туалетный стол", "1422/1900/489 (Ш/В/Г)"],
    ],
  },
  {
    slug: "spalnya-sofiya-6dv",
    name: "Спальня «София» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 140 400 ₽ / компл.",
    image: "/assets/spalnya-sofiya-6dv-1.jpg",
    images: ["/assets/spalnya-sofiya-6dv-1.jpg", "/assets/spalnya-sofiya-6dv-2.jpg", "/assets/spalnya-sofiya-6dv-3.jpg"],
    description: "Спальня «София» с 6-дверным шкафом — спальный гарнитур в цвете Сатин",
    characteristics: [
      ["Фабрика", "Фабрика «ARIDA»"],
      ["Цвет", "Сатин (велюр серо-бежевый)"],
      ["Матрас", "Без матраса"],
      ["Характеристика", "Прикроватная банкетка"],
      ["Кровать", "180/200"],
      ["Тумба", ""],
      ["Шкаф", "ш 2802/ в 2264 / г 707"],
      ["Туалетный стол", "ш 1733 / в 788 / г 585"],
      ["Зеркало", "ш 1170 / в 870 / г 30"],
    ],
  },
  {
    slug: "spalnya-sofiya-4dv",
    name: "Спальня «София» с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 135 800 ₽ / компл.",
    image: "/assets/spalnya-sofiya-4dv-1.jpg",
    images: ["/assets/spalnya-sofiya-4dv-1.jpg", "/assets/spalnya-sofiya-4dv-2.jpg", "/assets/spalnya-sofiya-4dv-3.jpg"],
    description: "Спальня «София» с 4-дверным шкафом — спальный гарнитур в цвете Сатин",
    characteristics: [
      ["Фабрика", "Фабрика «ARIDA»"],
      ["Цвет", "Сатин (обивка велюр серо-бежевый)"],
      ["Матрас", "Без матраса"],
      ["Шкаф", "Наполнение комфорт для шкафа в комплекте."],
      ["Характеристика", "Прикроватная банкетка"],
      ["Кровать", "ш 2000 / в 1430 / г 2120 с/м 180/200"],
      ["Тумба", ""],
      ["Шкаф", "ш 1800/ в 2264 / г 707"],
      ["Туалетный стол", "ш 1733 / в 788 / г 585"],
      ["Зеркало", "ш 1170 / в 870 / г 30"],
    ],
  },
  {
    slug: "spalnya-selena-5ti-belyy-tkan-seraya-2",
    name: "Спальня «Селена» с 5-дверным шкафом белый ткань серая",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "93 900 ₽ / компл.",
    image: "/assets/spalnya-selena-5ti-belyy-tkan-seraya-2-1.jpg",
    images: ["/assets/spalnya-selena-5ti-belyy-tkan-seraya-2-1.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-2-2.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-2-3.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-2-4.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-2-5.jpg", "/assets/spalnya-selena-5ti-belyy-tkan-seraya-2-6.jpg"],
    description: "Спальня «Селена» с 5-дверным шкафом белый ткань серая — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом Ш 2290 / В 2110 / Г 540.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortune"],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Ш 2290 / В 2110 / Г 540"],
      ["Тумба", "Ш 690 / В 480 / Г 420"],
    ],
  },
  {
    slug: "spalnya-nensi-6dv",
    name: "Спальня «Нэнси» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "124 500 ₽ / компл.",
    image: "/assets/spalnya-nensi-6dv-1.jpg",
    images: ["/assets/spalnya-nensi-6dv-1.jpg", "/assets/spalnya-nensi-6dv-2.jpg", "/assets/spalnya-nensi-6dv-3.jpg", "/assets/spalnya-nensi-6dv-4.jpg", "/assets/spalnya-nensi-6dv-5.jpg", "/assets/spalnya-nensi-6dv-6.jpg", "/assets/spalnya-nensi-6dv-7.jpg"],
    description: "Спальня «Нэнси» с 6-дверным шкафом — спальный гарнитур в цвете Серый/платинум, с кроватью Ш 2070 / Д 2100 / В 1440, со шкафом Ш 2720 / В 2230 / Г 620.",
    characteristics: [
      ["Фабрика", "Фабрика Fortuna home"],
      ["Цвет", "Серый/платинум"],
      ["Матрас", "Без матраса"],
      ["Шкаф", "Ш 2720 / В 2230 / Г 620"],
      ["Тумба", "Ш 532 / В 612 / Г 530"],
      ["Комод", "Ш 1302 / В 906 / Г 510"],
      ["Зеркало", "Ш 1080 / В 830"],
      ["Кровать", "Ш 2070 / Д 2100 / В 1440"],
    ],
  },
  {
    slug: "spalnya-nicca-luxury-6dv",
    name: "Спальня «Ницца Luxury» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "150 200 ₽ / компл.",
    image: "/assets/spalnya-nicca-luxury-6dv-1.jpg",
    images: ["/assets/spalnya-nicca-luxury-6dv-1.jpg", "/assets/spalnya-nicca-luxury-6dv-2.jpg", "/assets/spalnya-nicca-luxury-6dv-3.jpg", "/assets/spalnya-nicca-luxury-6dv-4.jpg"],
    description: "Спальня «Ницца Luxury» с 6-дверным шкафом — спальный гарнитур в цвете Белый/серебро, с кроватью 2600х2130х1720",
    characteristics: [
      ["Фабрика", "Фабрика «Fortuna Home»"],
      ["Матрас", "Без матраса"],
      ["Цвет", "Белый/серебро"],
      ["Фасады", "МДФ"],
      ["Покрытие", "Глянцевое покрытие"],
      ["Корпус", "ЛДСП"],
      ["Покрытие", "Велюр"],
      ["Шкаф", "2500х540х2160 (ШхГхВ)"],
      ["Кровать", "2600х2130х1720 (ШхГхВ)"],
      ["Матрас", "1800х2000"],
    ],
  },
  {
    slug: "spalnya-monako-6dv",
    name: "Спальня «Монако» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "116 100 ₽ / компл.",
    image: "/assets/spalnya-monako-6dv-1.jpg",
    images: ["/assets/spalnya-monako-6dv-1.jpg"],
    description: "Спальня «Монако» с 6-дверным шкафом — спальный гарнитур в цвете Белый/глянец, с кроватью 2460х2090х1390",
    characteristics: [
      ["Фабрика", "Фабрика «Fortuna Home»"],
      ["Матрас", "Без матраса"],
      ["Цвет", "Белый/глянец"],
      ["Фасады", "МДФ"],
      ["Покрытие", "Глянцевое покрытие"],
      ["Корпус", "ЛДСП Белый"],
      ["Покрытие", "Велюр"],
      ["Шкаф", ""],
      ["Кровать", "2460х2090х1390 (ШхГхВ)"],
      ["Матрас", "1800х2000"],
    ],
  },
  {
    slug: "spalnya-monako-6dv-2",
    name: "Спальня «Монако» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "116 100 ₽ / компл.",
    image: "/assets/spalnya-monako-6dv-2-1.jpg",
    images: ["/assets/spalnya-monako-6dv-2-1.jpg"],
    description: "Спальня «Монако» с 6-дверным шкафом — спальный гарнитур в цвете Белый/глянец, с кроватью 2460х2090х1390",
    characteristics: [
      ["Фабрика", "Фабрика «Fortuna Home»"],
      ["Матрас", "Без матраса"],
      ["Цвет", "Белый/глянец"],
      ["Фасады", "МДФ"],
      ["Покрытие", "Глянцевое покрытие"],
      ["Корпус", "ЛДСП Белый"],
      ["Покрытие", "Велюр"],
      ["Шкаф", ""],
      ["Кровать", "2460х2090х1390 (ШхГхВ)"],
      ["Матрас", "1800х2000"],
    ],
  },
  {
    slug: "spalnya-miya-6ti",
    name: "Спальня «Мия» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "140 000 ₽ / компл.",
    image: "/assets/spalnya-miya-6ti-1.jpg",
    images: ["/assets/spalnya-miya-6ti-1.jpg", "/assets/spalnya-miya-6ti-2.jpg", "/assets/spalnya-miya-6ti-3.jpg", "/assets/spalnya-miya-6ti-4.jpg", "/assets/spalnya-miya-6ti-5.jpg"],
    description: "Спальня «Мия» с 6-дверным шкафом — спальный гарнитур в цвете Серый платинум",
    characteristics: [
      ["Цвет", "Серый платинум (матовая)"],
      ["Кровать", "180/200"],
      ["Матрас", "Без матраса"],
      ["Ортопед", "Ортопед Ломелии в комплекте"],
      ["Фасады", "МДФ."],
      ["Корпус", "ЛДСП Серый."],
      ["Покрытие", "Лаковое покрытие крашеная эмаль."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "2720х2230х620мм (ШхВхГ)"],
      ["Кровать", "2260х2200х1680"],
    ],
  },
  {
    slug: "spalnya-milena-6ti",
    name: "Спальня Милена с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "144 900 ₽ / компл.",
    image: "/assets/spalnya-milena-6ti-1.jpg",
    images: ["/assets/spalnya-milena-6ti-1.jpg", "/assets/spalnya-milena-6ti-2.jpg", "/assets/spalnya-milena-6ti-3.jpg", "/assets/spalnya-milena-6ti-4.jpg", "/assets/spalnya-milena-6ti-5.jpg", "/assets/spalnya-milena-6ti-6.jpg"],
    description: "Спальня Милена с 6-дверным шкафом — спальный гарнитур в цвете Мокко, с кроватью 180/200, со шкафом Ш 2707 В 2120 Г 635.",
    characteristics: [
      ["Цвет", "Мокко"],
      ["Кровать", "180/200"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика «Fortune Home»"],
      ["Шкаф", "Ш 2707 В 2120 Г 635"],
      ["Тумба", "Ш 668 В 580 Г 503"],
      ["Туалетный стол", "Ш 1680 В 768 Г 553"],
      ["Зеркало", "Ш 1233 В 878"],
      ["Кровать", "Ш 2080 Д 2450 в 1320"],
    ],
  },
  {
    slug: "spalnya-mirella-6dv",
    name: "Спальня «Мирелла» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "141 900 ₽ / компл.",
    image: "/assets/spalnya-mirella-6dv-1.jpg",
    images: ["/assets/spalnya-mirella-6dv-1.jpg"],
    description: "Спальня «Мирелла» с 6-дверным шкафом — спальный гарнитур в цвете Крем глянец /Золотая патина, со шкафом 3000/650/2460(ШхГхВ.",
    characteristics: [
      ["Фабрика", "Фабрика «Fortuna Home»"],
      ["Матрас", "Без матраса"],
      ["Цвет", "Крем глянец /Золотая патина."],
      ["Фасады", "МДФ"],
      ["Покрытие", "Глянцевое лаковое покрытие"],
      ["Корпус", "ЛДСП Белый"],
      ["Покрытие", "Покрытие изголовья Велюр"],
      ["Шкаф", "3000/650/2460(ШхГхВ)"],
      ["Туалетный стол", "1810/500/795(ШхГхВ)"],
      ["Зеркало", "1470/100/1254(ШхГхВ)"],
    ],
  },
  {
    slug: "spalnya-lorena-6dv",
    name: "Спальня «Лорена» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "104 500 ₽ / компл.",
    image: "/assets/spalnya-lorena-6dv-1.jpg",
    images: ["/assets/spalnya-lorena-6dv-1.jpg", "/assets/spalnya-lorena-6dv-2.jpg", "/assets/spalnya-lorena-6dv-3.jpg"],
    description: "Спальня «Лорена» с 6-дверным шкафом — спальный гарнитур в цвете Крем глянец /Золотая патина, со шкафом 2750/574/2490(ШхГхВ.",
    characteristics: [
      ["Фабрика", "Фабрика «Fortunа Home»"],
      ["Матрас", "Без матраса"],
      ["Цвет", "Крем глянец /Золотая патина"],
      ["Фасады", "МДФ"],
      ["Покрытие", "Глянцевое лаковое покрытие"],
      ["Корпус", "ЛДСП Ваниль"],
      ["Покрытие", "Мягкое Велюр"],
      ["Шкаф", "2750/574/2490(ШхГхВ)"],
      ["Туалетный стол", "1650/500/775(ШхГхВ)"],
      ["Зеркало", "1064/100/1180(ШхГхВ)"],
    ],
  },
  {
    slug: "spalnya-vivaldi-6ti-3",
    name: "Спальня Вивальди с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "138 000 ₽ / компл.",
    image: "/assets/spalnya-vivaldi-6ti-3-1.jpg",
    images: ["/assets/spalnya-vivaldi-6ti-3-1.jpg", "/assets/spalnya-vivaldi-6ti-3-2.jpg", "/assets/spalnya-vivaldi-6ti-3-3.jpg", "/assets/spalnya-vivaldi-6ti-3-4.jpg", "/assets/spalnya-vivaldi-6ti-3-5.jpg", "/assets/spalnya-vivaldi-6ti-3-6.jpg", "/assets/spalnya-vivaldi-6ti-3-7.jpg", "/assets/spalnya-vivaldi-6ti-3-8.jpg", "/assets/spalnya-vivaldi-6ti-3-9.jpg", "/assets/spalnya-vivaldi-6ti-3-10.jpg"],
    description: "Спальня Вивальди с 6-дверным шкафом — спальный гарнитур в цвете мокко, с кроватью 180/200, со шкафом 2720ш.2160в.570г.",
    characteristics: [
      ["Цвет", "Цвет мокко"],
      ["Кровать", "180/200"],
      ["Фабрика", "Фабрика «FortunaHome»"],
      ["Шкаф", "2720ш.2160в.570г."],
      ["Кровать", "3250ш.2060д.1500в"],
      ["Кровать", "3400ш.2060д.1500в"],
      ["Туалетный стол", "1610ш.925в.480г."],
      ["Тумба", "Тумба 670ш500в.450г."],
      ["Комод", "Комод 1570х800х520."],
      ["Тумба", "690х500х450."],
    ],
  },
  {
    slug: "spalnya-batichella-6ti",
    name: "Спальня «Батичелла» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "139 600 ₽ / компл.",
    image: "/assets/spalnya-batichella-6ti-1.jpg",
    images: ["/assets/spalnya-batichella-6ti-1.jpg", "/assets/spalnya-batichella-6ti-2.jpg", "/assets/spalnya-batichella-6ti-3.jpg"],
    description: "Спальня «Батичелла» с 6-дверным шкафом — спальный гарнитур в цвете крем, с кроватью 180, со шкафом 300х246х65см",
    characteristics: [
      ["Цвет", "крем"],
      ["Кровать", "180"],
      ["Матрас", "Без матраса"],
      ["Шкаф", "300х246х65см (ШхВхГ)."],
      ["Кровать", "213х177х214см"],
      ["Туалетный стол", "181х79,5х50см"],
      ["Зеркало", "147х126см (ШхВ)."],
      ["Тумба", "68х71,4х47см"],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
    ],
  },
  {
    slug: "spalnya-agata-6ti-belaya-2",
    name: "Спальня «Агата» с 6-дверным шкафом белая",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "122 400 ₽ / компл.",
    image: "/assets/spalnya-agata-6ti-belaya-2-1.jpg",
    images: ["/assets/spalnya-agata-6ti-belaya-2-1.jpg"],
    description: "Спальня «Агата» с 6-дверным шкафом белая — спальный гарнитур в цвете Белый глянец, с кроватью 1800/2000, со шкафом 6-дверный 2650х580х2170",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Fortuna Home»."],
      ["Цвет", "Белый глянец."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие крашенная эмаль."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Велюр."],
      ["Шкаф", "Шкаф 6-дверный 2650х580х2170 (ШхГхВ)"],
      ["Кровать", "Кровать 2460х2090х1390 (ШхГхВ) под матрас 1800х2000"],
    ],
  },
  {
    slug: "spalnya-tiffani-6-dv-krem-zoloto-velyur-molochnyy",
    name: "Спальня «Тиффани» с 6-дверным шкафом крем золото (велюр молочный)»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 111 200 ₽ / компл.",
    image: "/assets/spalnya-tiffani-6-dv-krem-zoloto-velyur-molochnyy-1.jpg",
    images: ["/assets/spalnya-tiffani-6-dv-krem-zoloto-velyur-molochnyy-1.jpg"],
    description: "Спальня «Тиффани» с 6-дверным шкафом крем золото (велюр молочный)» — спальный гарнитур с кроватью 180х200, со шкафом ш 2720 / г 604 / в 2300.",
    characteristics: [
      ["Кровать", "(кровать 180х200)."],
      ["Матрас", "без матраса."],
      ["Фабрика", "ФАБРИКА «Арида»"],
      ["Тумба", "ш 655 / г 489 / в 370"],
      ["Шкаф", "ш 2720 / г 604 / в 2300"],
      ["Туалетный стол", "ш 1686 / г 512 / в 1174"],
      ["Кровать", "1.8 ш 2750 / г 2058 / в 1404"],
    ],
  },
  {
    slug: "spalnya-mariya-eko-6dv",
    name: "Спальня «Мария Эко» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 127 400 ₽ / компл.",
    image: "/assets/spalnya-mariya-eko-6dv-1.jpg",
    images: ["/assets/spalnya-mariya-eko-6dv-1.jpg", "/assets/spalnya-mariya-eko-6dv-2.jpg", "/assets/spalnya-mariya-eko-6dv-3.jpg", "/assets/spalnya-mariya-eko-6dv-4.jpg", "/assets/spalnya-mariya-eko-6dv-5.jpg", "/assets/spalnya-mariya-eko-6dv-6.jpg", "/assets/spalnya-mariya-eko-6dv-7.jpg", "/assets/spalnya-mariya-eko-6dv-8.jpg"],
    description: "Спальня «Мария Эко» с 6-дверным шкафом — спальный гарнитур в цвете Патина/серая, с кроватью Ш2090 / Г2062 / В1580, со шкафом Ш2700 / Г684/В2198.",
    characteristics: [
      ["Цвет", "Патина/серая"],
      ["Матрас", "Без матраса, без ПМ"],
      ["Матрас", "Без матраса, ПМ"],
      ["Фабрика", "Фабрика «ARIDA»"],
      ["Шкаф", "Наполнение комфорт для шкафа в комплекте"],
      ["Кровать", "Ш2090 / Г2062 / В1580"],
      ["Тумба", "Ш700 / Г461/ В700"],
      ["Шкаф", "Ш2700 / Г684/В2198"],
      ["Комод", "Ш1610 / Г510 / В874"],
      ["Зеркало", "Ш1030 / В1200"],
    ],
  },
  {
    slug: "spalnya-mariya-6ti-patina-seraya-2",
    name: "Спальня «Мария» с 6-дверным шкафом патина/серая",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 137 300 ₽ / компл.",
    image: "/assets/spalnya-mariya-6ti-patina-seraya-2-1.jpg",
    images: ["/assets/spalnya-mariya-6ti-patina-seraya-2-1.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-2-2.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-2-3.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-2-4.jpg", "/assets/spalnya-mariya-6ti-patina-seraya-2-5.jpg"],
    description: "Спальня «Мария» с 6-дверным шкафом патина/серая — спальный гарнитур с кроватью 180/200, со шкафом ш 2700 / г 684 / в 2198.",
    characteristics: [
      ["Кровать", "180/200"],
      ["Матрас", "Без матраса."],
      ["Шкаф", "Наполнение комфорт для шкафа в комплекте!"],
      ["Фабрика", "Фабрика «ARIDA»."],
      ["Кровать", "1.8 ш 2090 / г 2062 / в 1580"],
      ["Тумба", "ш 700 / г 461/ в 700"],
      ["Шкаф", "ш 2700 / г 684 / в 2198"],
      ["Комод", "ш 1610 / г 510 / в 874"],
      ["Зеркало", "ш 1030 / в 1200"],
    ],
  },
  {
    slug: "spalnya-marella-6ti-belyy-serebro",
    name: "Спальня «Марелла» с 6-дверным шкафом белый/серебро",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "147 200 ₽ / компл.",
    image: "/assets/spalnya-marella-6ti-belyy-serebro-1.jpg",
    images: ["/assets/spalnya-marella-6ti-belyy-serebro-1.jpg"],
    description: "Спальня «Марелла» с 6-дверным шкафом белый/серебро — спальный гарнитур с кроватью 1800/2000, со шкафом Ш2900 / Г680 / В2420.",
    characteristics: [
      ["Кровать", "1800/2000"],
      ["Матрас", "Без матраса и ортопеда."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Кровать", "Ш3240 / Г2150 / В1595"],
      ["Туалетный стол", "Ш1800 / Г530 / В730"],
      ["Зеркало", "Ш1400 / Г110 / В1245"],
      ["Шкаф", "Ш2900 / Г680 / В2420"],
      ["Тумба", "Ш720 / Г535 / В730"],
    ],
  },
  {
    slug: "spalnya-madrid-5dv",
    name: "Спальня «Мадрид» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 120 000 ₽ / компл.",
    image: "/assets/spalnya-madrid-5dv-1.jpg",
    images: ["/assets/spalnya-madrid-5dv-1.jpg", "/assets/spalnya-madrid-5dv-2.jpg", "/assets/spalnya-madrid-5dv-3.jpg", "/assets/spalnya-madrid-5dv-4.jpg", "/assets/spalnya-madrid-5dv-5.jpg", "/assets/spalnya-madrid-5dv-6.jpg", "/assets/spalnya-madrid-5dv-7.jpg"],
    description: "Спальня «Мадрид» с 5-дверным шкафом — спальный гарнитур в цвете Бежевый, с кроватью 180/200.",
    characteristics: [
      ["Кровать", "Кровать 180/200"],
      ["Цвет", "Бежевый"],
      ["Фабрика", "Фабрика «Арида»"],
      ["Матрас", "Без матраса"],
      ["Матрас", "Без матраса с ПМ (подъемный механизм). Нет в наличии с ПМ"],
      ["Кровать", "Кровать (ш2094/г2105/в1232)"],
      ["Тумба", ""],
      ["Шкаф", ""],
      ["Комод", "(ш1170 / г470 / в804)"],
      ["Зеркало", "(ш1170 / г22 / в800)"],
    ],
  },
  {
    slug: "spalnya-eliza-lyuks-5dv",
    name: "Спальня «Элиза Люкс» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "137 400 ₽ / компл.",
    image: "/assets/spalnya-eliza-lyuks-5dv-1.jpg",
    images: ["/assets/spalnya-eliza-lyuks-5dv-1.jpg", "/assets/spalnya-eliza-lyuks-5dv-2.jpg"],
    description: "Спальня «Элиза Люкс» с 5-дверным шкафом — спальный гарнитур в цвете Белый/ матовый, с кроватью д 2180 / ш 2030 / в.",
    characteristics: [
      ["Фабрика", "Фабрика «Арида»"],
      ["Матрас", "Без матраса"],
      ["Цвет", "Белый/ матовый"],
      ["Фасады", "МДФ."],
      ["Покрытие", "Матовое покрытие"],
      ["Корпус", "ЛДСП Белый"],
      ["Покрытие", "Покрытие изголовья Эко-кожа"],
      ["Кровать", "д 2180 / ш 2030 / в"],
      ["Туалетный стол", "ш 1625 / г 520 / в 760"],
      ["Зеркало", "ш 1155 / г 85 / в 1145"],
    ],
  },
  {
    slug: "spalnya-daniella-5ti-krem-zoloto",
    name: "Спальня «Даниэлла» с 5-дверным шкафом крем/золото",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "120 700 ₽ / компл.",
    image: "/assets/spalnya-daniella-5ti-krem-zoloto-1.jpg",
    images: ["/assets/spalnya-daniella-5ti-krem-zoloto-1.jpg", "/assets/spalnya-daniella-5ti-krem-zoloto-2.jpg", "/assets/spalnya-daniella-5ti-krem-zoloto-3.jpg", "/assets/spalnya-daniella-5ti-krem-zoloto-4.jpg", "/assets/spalnya-daniella-5ti-krem-zoloto-5.jpg"],
    description: "Спальня «Даниэлла» с 5-дверным шкафом крем/золото — спальный гарнитур в цвете Крем глянец /Золотая патина, с кроватью 1800/2000.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Цвет", "Крем глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Кровать", "Ш2090 / Г2130 / В1390"],
      ["Туалетный стол", "Ш1638 / Г550 / В792"],
    ],
  },
  {
    slug: "spalnya-dzhokonda-3h-radika-oreh",
    name: "Спальня «Джоконда» 3х Радика орех",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "128 200 ₽ / компл.",
    image: "/assets/spalnya-dzhokonda-3h-radika-oreh-1.jpg",
    images: ["/assets/spalnya-dzhokonda-3h-radika-oreh-1.jpg"],
    description: "Спальня «Джоконда» 3х Радика орех — спальный гарнитур в цвете Орех Радика глянец /Золотая патина, с кроватью 1600/2000.",
    characteristics: [
      ["Кровать", "1600/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Цвет", "Орех Радика глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Орех."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Кровать", "Ш1925 / Г2140 / В1627"],
      ["Туалетный стол", "Ш1662 / Г490 / В810"],
    ],
  },
  {
    slug: "spalnya-dzhokonda-5ti-krem-zoloto",
    name: "Спальня «Джоконда» с 5-дверным шкафом крем золото",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "137 100 ₽ / компл.",
    image: "/assets/spalnya-dzhokonda-5ti-krem-zoloto-1.jpg",
    images: ["/assets/spalnya-dzhokonda-5ti-krem-zoloto-1.jpg", "/assets/spalnya-dzhokonda-5ti-krem-zoloto-2.jpg", "/assets/spalnya-dzhokonda-5ti-krem-zoloto-3.jpg", "/assets/spalnya-dzhokonda-5ti-krem-zoloto-4.jpg", "/assets/spalnya-dzhokonda-5ti-krem-zoloto-5.jpg", "/assets/spalnya-dzhokonda-5ti-krem-zoloto-6.jpg"],
    description: "Спальня «Джоконда» с 5-дверным шкафом крем золото — спальный гарнитур в цвете Крем глянец /Золотая патина, с кроватью 1800/2000.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Цвет", "Крем глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Кровать", "Ш2125 / Г 2140 / В1677"],
      ["Туалетный стол", "Ш1662 / Г490 / В810"],
    ],
  },
  {
    slug: "spalnya-graciya-5ti",
    name: "Спальня «Грация»-с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 122 600 ₽ / компл.",
    image: "/assets/spalnya-graciya-5ti-1.jpg",
    images: ["/assets/spalnya-graciya-5ti-1.jpg", "/assets/spalnya-graciya-5ti-2.jpg", "/assets/spalnya-graciya-5ti-3.jpg", "/assets/spalnya-graciya-5ti-4.jpg"],
    description: "Спальня «Грация»-с 5-дверным шкафом — спальный гарнитур в цвете серый, с кроватью 1800/2000, со шкафом Ш 2250 / Г 585 / В 2200.",
    characteristics: [
      ["Цвет", "серый"],
      ["Кровать", "1800/2000"],
      ["Матрас", "Без матраса"],
      ["Фабрика", "Фабрика «ARIDA”"],
      ["Кровать", "Ш 2410 / Г 2100 / В 1290"],
      ["Тумба", "Ш 550 / Г 460 / В 489"],
      ["Шкаф", "Ш 2250 / Г 585 / В 2200"],
      ["Туалетный стол", "Ш 1200 / Г 485 / В 811"],
      ["Зеркало", "ЗЕРКАЛО Д 900"],
    ],
  },
  {
    slug: "spalnya-veneciya-klassik-6ti-stv-krem-zoloto",
    name: "Спальня «Венеция Классик» с 6-дверным шкафом крем золото",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "150 900 ₽ / компл.",
    image: "/assets/spalnya-veneciya-klassik-6ti-stv-krem-zoloto-1.jpg",
    images: ["/assets/spalnya-veneciya-klassik-6ti-stv-krem-zoloto-1.jpg", "/assets/spalnya-veneciya-klassik-6ti-stv-krem-zoloto-2.jpg", "/assets/spalnya-veneciya-klassik-6ti-stv-krem-zoloto-3.jpg", "/assets/spalnya-veneciya-klassik-6ti-stv-krem-zoloto-4.jpg", "/assets/spalnya-veneciya-klassik-6ti-stv-krem-zoloto-5.jpg"],
    description: "Спальня «Венеция Классик» с 6-дверным шкафом крем золото — спальный гарнитур в цвете Крем глянец /Золотая патина, с кроватью 1800/2000.",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Цвет", "Крем глянец /Золотая патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Глянцевое лаковое покрытие."],
      ["Корпус", "ЛДСП Белый."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Кровать", "Ш2118/ Г2137/ В1753"],
      ["Туалетный стол", "Ш1814/ Г505/ В790"],
    ],
  },
  {
    slug: "spalnya-berta-5ti-zhemchug-2",
    name: "Спальня «Берта» с 5-дверным шкафом жемчуг",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 109 300 ₽ / компл.",
    image: "/assets/spalnya-berta-5ti-zhemchug-2-1.jpg",
    images: ["/assets/spalnya-berta-5ti-zhemchug-2-1.jpg", "/assets/spalnya-berta-5ti-zhemchug-2-2.jpg", "/assets/spalnya-berta-5ti-zhemchug-2-3.jpg"],
    description: "Спальня «Берта» с 5-дверным шкафом жемчуг — спальный гарнитур в цвете Жемчуг матовый /Золото патина, с кроватью 1800/2000, со шкафом 2333/665/2250",
    characteristics: [
      ["Кровать", "1800/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Цвет", "Жемчуг матовый /Золото патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие."],
      ["Корпус", "ЛДСП Ваниль."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Шкаф", "2333/665/2250 (ШхГхВ)"],
      ["Туалетный стол", "1548/512/840 (ШхГхВ)"],
    ],
  },
  {
    slug: "spalnya-berta-4h-zhemchug",
    name: "Спальня «Берта» с 4-дверным шкафом жемчуг",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "104 300 ₽ / компл.",
    image: "/assets/spalnya-berta-4h-zhemchug-1.jpg",
    images: ["/assets/spalnya-berta-4h-zhemchug-1.jpg"],
    description: "Спальня «Берта» с 4-дверным шкафом жемчуг — спальный гарнитур в цвете Жемчуг матовый /Золото патина, с кроватью 1600/2000, со шкафом 4-дверный Ш1890/ Г665/ В2250.",
    characteristics: [
      ["Кровать", "1600/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Цвет", "Жемчуг матовый /Золото патина."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие."],
      ["Корпус", "ЛДСП Ваниль."],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Шкаф", "Шкаф 4-дверный Ш1890/ Г665/ В2250"],
      ["Туалетный стол", "Ш1548/ Г512/ В840"],
    ],
  },
  {
    slug: "spalnya-berta-4h-farina-oreh",
    name: "Спальня «Берта» с 4-дверным шкафом фарина орех",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "104 300 ₽ / компл.",
    image: "/assets/spalnya-berta-4h-farina-oreh-1.jpg",
    images: ["/assets/spalnya-berta-4h-farina-oreh-1.jpg"],
    description: "Спальня «Берта» с 4-дверным шкафом фарина орех — спальный гарнитур с кроватью 1600/2000, со шкафом 4-дверный Ш1890/ Г665/ В2250.",
    characteristics: [
      ["Кровать", "1600/2000."],
      ["Матрас", "Без матраса."],
      ["Фабрика", "Фабрика «Arida»."],
      ["Фасады", "МДФ."],
      ["Покрытие", "Лаковое покрытие."],
      ["Корпус", "ЛДСП"],
      ["Покрытие", "Покрытие изголовья Велюр."],
      ["Шкаф", "Шкаф 4-дверный Ш1890/ Г665/ В2250"],
      ["Туалетный стол", "Ш1548/ Г512/ В840"],
      ["Зеркало", "Ш1000/ Г24/ В700"],
    ],
  },
  {
    slug: "spalnya-yasmina",
    name: "Спальня « Ясмина »",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "104 800 ₽ / компл.",
    image: "/assets/spalnya-yasmina-1.jpg",
    images: ["/assets/spalnya-yasmina-1.jpg", "/assets/spalnya-yasmina-2.jpg", "/assets/spalnya-yasmina-3.jpg", "/assets/spalnya-yasmina-4.jpg", "/assets/spalnya-yasmina-5.jpg", "/assets/spalnya-yasmina-6.jpg", "/assets/spalnya-yasmina-7.jpg"],
    description: "Спальня « Ясмина » — спальный гарнитур со шкафом Ш-2.65, Г-60, В-2.24.",
    characteristics: [
      ["Фабрика", "Фабрика СКФМ"],
      ["Шкаф", "Ш-2.65, Г-60, В-2.24"],
      ["Туалетный стол", "Ш-1.47, Г-42, В-80"],
      ["Тумба", "Ш-60, Г-40, В-40"],
      ["Кровать", ""],
      ["Зеркало", "100-70"],
      ["Матрас", "Без матраса, Без ортопеда."],
    ],
  },
  {
    slug: "spalnya-avrora",
    name: "Спальня «Аврора»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "81 000 ₽ / компл.",
    image: "/assets/spalnya-avrora-1.jpg",
    images: ["/assets/spalnya-avrora-1.jpg", "/assets/spalnya-avrora-2.jpg", "/assets/spalnya-avrora-3.jpg", "/assets/spalnya-avrora-4.jpg", "/assets/spalnya-avrora-5.jpg", "/assets/spalnya-avrora-6.jpg"],
    description: "Спальня «Аврора» — спальный гарнитур в цвете Белый золото, со шкафом Ш-2.50, Г-60, В-2.20.",
    characteristics: [
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Цвет", "Белый золото"],
      ["Шкаф", "Ш-2.50, Г-60, В-2.20"],
      ["Кровать", ""],
      ["Тумба", ""],
      ["Туалетный стол", ""],
      ["Зеркало", "Ш-93, Г-20, В-91"],
      ["Матрас", "Без матраса, и без ортопеда."],
    ],
  },
  {
    slug: "spalnya-florenciya-2",
    name: "Спальня «Флоренция»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "126 000 ₽ / компл.",
    image: "/assets/spalnya-florenciya-2-1.jpg",
    images: ["/assets/spalnya-florenciya-2-1.jpg", "/assets/spalnya-florenciya-2-2.jpg", "/assets/spalnya-florenciya-2-3.jpg", "/assets/spalnya-florenciya-2-4.jpg", "/assets/spalnya-florenciya-2-5.jpg", "/assets/spalnya-florenciya-2-6.jpg", "/assets/spalnya-florenciya-2-7.jpg", "/assets/spalnya-florenciya-2-8.jpg"],
    description: "Спальня «Флоренция» — спальный гарнитур в цвете Белый/Глянец, с кроватью 180/200, со шкафом 5-дверный - Ш2.50 В2.44 Г56.5 см.",
    characteristics: [
      ["Цвет", "Белый/Глянец"],
      ["Фабрика", "🏭Фабрика ЭРА"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.50 В2.44 Г56.5 см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш62 В63.5 Г44.5 см"],
      ["Туалетный стол", "Туалетный стол - Ш157 В77.5 Г44.5 см"],
      ["Зеркало", "Зеркало - Ш1.32 В1.20 см"],
      ["Матрас", "без матраса"],
    ],
  },
  {
    slug: "spalnya-milana-4dv",
    name: "Спальня «Милана с 4-дверным шкафом»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "78 500 ₽ / компл.",
    image: "/assets/spalnya-milana-4dv-1.jpg",
    images: ["/assets/spalnya-milana-4dv-1.jpg", "/assets/spalnya-milana-4dv-2.jpg", "/assets/spalnya-milana-4dv-3.jpg", "/assets/spalnya-milana-4dv-4.jpg", "/assets/spalnya-milana-4dv-5.jpg"],
    description: "Спальня «Милана с 4-дверным шкафом» — спальный гарнитур с кроватью 1.60/2.00, В-1.30, Ш-226, со шкафом Ш-1.86, Г-60, В-2.25.",
    characteristics: [
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Кровать", "1.60/2.00, В-1.30, Ш-226"],
      ["Туалетный стол", "Ш-1.40, Г-43, В-85"],
      ["Шкаф", "Ш-1.86, Г-60, В-2.25"],
      ["Тумба", "Ш-60, Г-40, В-48"],
      ["Зеркало", "Ш-1.00, Г-20, В-90"],
      ["Матрас", "Без матраса и ортопеда"],
    ],
  },
  {
    slug: "spalnya-izmir-6-dv-4",
    name: "Спальня «Измир» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "123 000 ₽ / компл.",
    image: "/assets/spalnya-izmir-6-dv-4-1.jpg",
    images: ["/assets/spalnya-izmir-6-dv-4-1.jpg", "/assets/spalnya-izmir-6-dv-4-2.jpg", "/assets/spalnya-izmir-6-dv-4-3.jpg", "/assets/spalnya-izmir-6-dv-4-4.jpg", "/assets/spalnya-izmir-6-dv-4-5.jpg", "/assets/spalnya-izmir-6-dv-4-6.jpg", "/assets/spalnya-izmir-6-dv-4-7.jpg"],
    description: "Спальня «Измир» с 6-дверным шкафом — спальный гарнитур в цвете Сатин/ золото",
    characteristics: [
      ["Производство", "Ставрополь СКФМ"],
      ["Цвет", "Сатин/ золото (песочно-бежевый)"],
      ["Фасады", "прямой, крашеный ЛМДФ (эмаль глянцевая) с фрезеровкой"],
      ["Корпус", "Ламинированный ДСП"],
      ["Цвет", "мягкое основание микровелюр темно-синего цвета"],
      ["Характеристика", "прямолинейный фацет"],
      ["Шкаф", "2.61, г: 60,"],
      ["Кровать", "2.26, г: 2.08,"],
      ["Тумба", "59, г: 40, в: 48"],
      ["Комод", "1.18, г: 442, в: 83"],
      ["Матрас", "не входит"],
    ],
  },
  {
    slug: "spalnya-laura-5",
    name: "Спальня «Лаура»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 68 500 ₽ / компл.",
    image: "/assets/spalnya-laura-5-1.jpg",
    images: ["/assets/spalnya-laura-5-1.jpg", "/assets/spalnya-laura-5-2.jpg", "/assets/spalnya-laura-5-3.jpg", "/assets/spalnya-laura-5-4.jpg", "/assets/spalnya-laura-5-5.jpg", "/assets/spalnya-laura-5-6.jpg", "/assets/spalnya-laura-5-7.jpg", "/assets/spalnya-laura-5-8.jpg"],
    description: "Спальня «Лаура» — спальный гарнитур в цвете Белый, с кроватью 180/200, со шкафом 4-дверный - Ш2000 В2.10 Г60 см.",
    characteristics: [
      ["Цвет", "Белый"],
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Шкаф", "Шкаф 4-дверный - Ш2000 В2.10 Г60 см"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.51 В2.10 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш48 В40 Г40 см"],
      ["Комод", "Комод - Ш96 В90 Г45.5 см"],
      ["Зеркало", "Зеркало - Ш105 В88.5 см"],
      ["Матрас", "Без матраса и ортопеда."],
      ["Матрас", "Без матраса."],
    ],
  },
  {
    slug: "spalnya-siena-4dv",
    name: "Спальня « Сиена » с 4-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "94 900 ₽ / компл.",
    image: "/assets/spalnya-siena-4dv-1.jpg",
    images: ["/assets/spalnya-siena-4dv-1.jpg", "/assets/spalnya-siena-4dv-2.jpg", "/assets/spalnya-siena-4dv-3.jpg", "/assets/spalnya-siena-4dv-4.jpg", "/assets/spalnya-siena-4dv-5.jpg", "/assets/spalnya-siena-4dv-6.jpg", "/assets/spalnya-siena-4dv-7.jpg", "/assets/spalnya-siena-4dv-8.jpg"],
    description: "Спальня «Сиена» с 4-дверным шкафом — спальный гарнитур в цвете Орех/сатин, с кроватью 180/2, Ш 2.44, Г 2.07, В 1.15, со шкафом Ш 1.76, Г 60, В 2.24.",
    characteristics: [
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Цвет", "◽ Цвет Орех/сатин"],
      ["Шкаф", "Ш 1.76, Г 60, В 2.24"],
      ["Кровать", "180/2, Ш 2.44, Г 2.07, В 1.15"],
      ["Тумба", "Ш 64, Г 47, В 39"],
      ["Туалетный стол", "Ш 1.46, Г 45, В 85"],
      ["Зеркало", "Ш 1.14, Г 20, В 1.19"],
      ["Матрас", "Без матраса, без ортопеда."],
    ],
  },
  {
    slug: "spalnya-siena-6dv",
    name: "Спальня « Сиена » с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "114 900 ₽ / компл.",
    image: "/assets/spalnya-siena-6dv-1.jpg",
    images: ["/assets/spalnya-siena-6dv-1.jpg", "/assets/spalnya-siena-6dv-2.jpg", "/assets/spalnya-siena-6dv-3.jpg", "/assets/spalnya-siena-6dv-4.jpg", "/assets/spalnya-siena-6dv-5.jpg", "/assets/spalnya-siena-6dv-6.jpg"],
    description: "Спальня « Сиена » с 6-дверным шкафом — спальный гарнитур в цвете Орех/сатин, с кроватью 180/2, Ш 2.44, Г 2.07, В 1.15, со шкафом Ш 2.65, Г 60, В 2.24.",
    characteristics: [
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Цвет", "Цвет Орех/сатин"],
      ["Шкаф", "Ш 2.65, Г 60, В 2.24"],
      ["Кровать", "180/2, Ш 2.44, Г 2.07, В 1.15"],
      ["Тумба", "Ш 64, Г 47, В 39"],
      ["Туалетный стол", "Ш 1.46, Г 45, В 85"],
      ["Зеркало", "Ш 1.14, Г 20, В 1.19"],
      ["Матрас", "Без матраса, без ортопеда."],
    ],
  },
  {
    slug: "spalnya-laura-6",
    name: "Спальня «Лаура»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "63 400 ₽ / компл.",
    image: "/assets/spalnya-laura-6-1.jpg",
    images: ["/assets/spalnya-laura-6-1.jpg", "/assets/spalnya-laura-6-2.jpg", "/assets/spalnya-laura-6-3.jpg", "/assets/spalnya-laura-6-4.jpg", "/assets/spalnya-laura-6-5.jpg", "/assets/spalnya-laura-6-6.jpg"],
    description: "Спальня «Лаура» — спальный гарнитур в цвете Сатин/белый, с кроватью 160/200, со шкафом 3-дверный - Ш150 В2.10 Г60см.",
    characteristics: [
      ["Цвет", "Сатин/белый"],
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Шкаф", "Шкаф 3-дверный - Ш150 В2.10 Г60см"],
      ["Кровать", "Кровать - 160/200"],
      ["Тумба", "Тумба - Ш48 В40 Г40 см"],
      ["Комод", "Комод - Ш96 В90 Г45.5 см"],
      ["Зеркало", "Зеркало - Ш105 В88.5 см"],
      ["Матрас", "без матраса, без ортопеда"],
    ],
  },
  {
    slug: "spalnya-laura-7",
    name: "Спальня «Лаура»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "от 68 500 ₽ / компл.",
    image: "/assets/spalnya-laura-7-1.jpg",
    images: ["/assets/spalnya-laura-7-1.jpg", "/assets/spalnya-laura-7-2.jpg", "/assets/spalnya-laura-7-3.jpg", "/assets/spalnya-laura-7-4.jpg", "/assets/spalnya-laura-7-5.jpg", "/assets/spalnya-laura-7-6.jpg", "/assets/spalnya-laura-7-7.jpg"],
    description: "Спальня «Лаура» — спальный гарнитур в цвете Сатин, с кроватью 180/200, со шкафом 4-дверный - Ш2000 В2.10 Г60 см.",
    characteristics: [
      ["Цвет", "Сатин"],
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Шкаф", "Шкаф 4-дверный - Ш2000 В2.10 Г60 см"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.51 В2.10 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш48 В40 Г40 см"],
      ["Комод", "Комод - Ш96 В90 Г45.5 см"],
      ["Зеркало", "Зеркало - Ш105 В88.5 см"],
      ["Матрас", "Без матраса, без ортопеда"],
      ["Матрас", "без матраса, без ортопеда"],
    ],
  },
  {
    slug: "spalnya-laura-8",
    name: "Спальня «Лаура»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "73 000 ₽ / компл.",
    image: "/assets/spalnya-laura-8-1.jpg",
    images: ["/assets/spalnya-laura-8-1.jpg", "/assets/spalnya-laura-8-2.jpg", "/assets/spalnya-laura-8-3.jpg", "/assets/spalnya-laura-8-4.jpg", "/assets/spalnya-laura-8-5.jpg"],
    description: "Спальня «Лаура» — спальный гарнитур в цвете Серый/серебро, с кроватью Кровать 180/200, со шкафом 5-дверный - Ш2.51 В2.10 Г60см.",
    characteristics: [
      ["Цвет", "Серый/серебро"],
      ["Фабрика", "🏭Фабрика СКФМ"],
      ["Кровать", "📐Кровать 180/200"],
      ["Шкаф", "Шкаф 5-дверный - Ш2.51 В2.10 Г60см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш48 В40 Г40 см"],
      ["Комод", "Комод - Ш96 В90 Г45.5 см"],
      ["Зеркало", "Зеркало - Ш105 В88.5 см"],
      ["Матрас", "без матраса, без ортопеда"],
    ],
  },
  {
    slug: "spalnya-monika-6ti-dv",
    name: "Спальня «Моника» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "99 000 ₽ / компл.",
    image: "/assets/spalnya-monika-6ti-dv-1.jpg",
    images: ["/assets/spalnya-monika-6ti-dv-1.jpg", "/assets/spalnya-monika-6ti-dv-2.jpg"],
    description: "Спальня «Моника» с 6-дверным шкафом — спальный гарнитур с кроватью Ш2210; В1210; Г2070",
    characteristics: [
      ["Производство", "Производство Краснодарский край"],
      ["Фабрика", "Фабрика Регион-Мебель"],
      ["Шкаф", "Ш2700; В2210; Г520"],
      ["Туалетный стол", "Ш1490; В870; Г480"],
      ["Зеркало", "Ш1120; В940; Г20"],
      ["Комод", "Ш540; В1050; Г470"],
      ["Тумба", "Ш540; В460; Г470"],
      ["Кровать", "Ш2210; В1210; Г2070 (спальное место 180х200)"],
    ],
  },
  {
    slug: "spalnya-naomi",
    name: "Спальня Наоми",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "123 000 ₽ / компл.",
    image: "/assets/spalnya-naomi-1.jpg",
    images: ["/assets/spalnya-naomi-1.jpg"],
    description: "Спальня Наоми — спальный гарнитур с кроватью по спинке ширина 2.40см, со шкафом высота 2.40см.",
    characteristics: [
      ["Шкаф", "шкаф высота 2.40см"],
      ["Шкаф", "ширина шкафа 2.50см"],
      ["Кровать", "кровать по спинке ширина 2.40см"],
      ["Тумба", "тумбочки прикроватные 60 см"],
      ["Туалетный стол", "туалетный столик ширина 1.50см"],
      ["Зеркало", "зеркало + пуфик в комплекте"],
      ["Корпус", "корпус надежный лдсп"],
    ],
  },
  {
    slug: "spalnya-dilara-6dv-krem-serebro",
    name: "Спальня «Дилара» с 6-дверным шкафом крем-серебро",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "135 000 ₽ / компл.",
    image: "/assets/spalnya-dilara-6dv-krem-serebro-1.jpg",
    images: ["/assets/spalnya-dilara-6dv-krem-serebro-1.jpg", "/assets/spalnya-dilara-6dv-krem-serebro-2.jpg", "/assets/spalnya-dilara-6dv-krem-serebro-3.jpg", "/assets/spalnya-dilara-6dv-krem-serebro-4.jpg", "/assets/spalnya-dilara-6dv-krem-serebro-5.jpg", "/assets/spalnya-dilara-6dv-krem-serebro-6.jpg", "/assets/spalnya-dilara-6dv-krem-serebro-7.jpg"],
    description: "Спальня «Дилара» с 6-дверным шкафом крем-серебро — спальный гарнитур с кроватью вместе с прикроватными тумбами: 350см, со шкафом 295х235х63см",
    characteristics: [
      ["Шкаф", "295х235х63см (ШхВхГ)"],
      ["Комод", "172х82х55см"],
      ["Кровать", "Кровать вместе с прикроватными тумбами: 350см"],
      ["Характеристика", "240см"],
      ["Характеристика", "161см"],
      ["Зеркало", "122х106см (ШхВ)"],
    ],
  },
  {
    slug: "spalnya-viktoriya-5dv",
    name: "Спальня «Виктория» с 5-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "80 000 ₽ / компл.",
    image: "/assets/spalnya-viktoriya-5dv-1.jpg",
    images: ["/assets/spalnya-viktoriya-5dv-1.jpg"],
    description: "Спальня «Виктория» с 5-дверным шкафом — спальный гарнитур в цвете Капучино, с кроватью 180/200, со шкафом Высота шкафа 210см.",
    characteristics: [
      ["Фабрика", "Фабрика «Фараон»"],
      ["Цвет", "Цвет Капучино"],
      ["Шкаф", "Высота шкафа 210см"],
      ["Шкаф", "Глубина шкафа 52см"],
      ["Шкаф", "Ширина шкафа 2м10см"],
      ["Кровать", "Кровать 180/200."],
      ["Фасады", "крашеный МДФ."],
      ["Корпус", "ЛДСП."],
      ["Матрас", "Без матраса, ламелии в комплекте."],
    ],
  },
  {
    slug: "spalnya-vivaldi-6dv-seryy-serebro",
    name: "Спальня «Вивальди» с 6-дверным шкафом серый/серебро",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: "/assets/spalnya-vivaldi-6dv-seryy-serebro-1.jpg",
    images: ["/assets/spalnya-vivaldi-6dv-seryy-serebro-1.jpg", "/assets/spalnya-vivaldi-6dv-seryy-serebro-2.jpg", "/assets/spalnya-vivaldi-6dv-seryy-serebro-3.jpg", "/assets/spalnya-vivaldi-6dv-seryy-serebro-4.jpg"],
    description: "Спальня «Вивальди» с 6-дверным шкафом серый/серебро — спальный гарнитур со шкафом 2700×550×2300 мм.",
    characteristics: [
      ["Шкаф", "2700×550×2300 мм"],
      ["Туалетный стол", "1506×446×930 мм"],
      ["Тумба", "556×450 мм"],
      ["Фабрика", "фабрика «Фараон», Ставрополь"],
      ["Фасады", "МДФ премиум-класса"],
      ["Корпус", "ЛДСП повышенной прочности"],
      ["Матрас", "Без матраса"],
    ],
  },
  {
    slug: "spalnya-atlanta-6dv",
    name: "Спальня «Атланта» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "120 500 ₽ / компл.",
    image: "/assets/spalnya-atlanta-6dv-1.jpg",
    images: ["/assets/spalnya-atlanta-6dv-1.jpg", "/assets/spalnya-atlanta-6dv-2.jpg", "/assets/spalnya-atlanta-6dv-3.jpg", "/assets/spalnya-atlanta-6dv-4.jpg"],
    description: "Спальня «Атланта» с 6-дверным шкафом — спальный гарнитур в цвете Крем, с кроватью Ш265/Г210/ Высота изголовья 140, со шкафом Ш270/Г540/В2120.",
    characteristics: [
      ["Шкаф", "Ш270/Г540/В2120"],
      ["Кровать", "Ш265/Г210/ Высота изголовья 140;"],
      ["Комод", "Ш120/Г48/В94"],
      ["Тумба", "Ш60/Г48/В44"],
      ["Фасады", "МДФ."],
      ["Цвет", "Крем"],
      ["Матрас", "Без матраса, ортопед(ламелии) в комплекте."],
    ],
  },
  {
    slug: "spalnya-adelina-6dv",
    name: "Спальня «Аделина» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "145 000 ₽ / компл.",
    image: "/assets/spalnya-adelina-6dv-1.jpg",
    images: ["/assets/spalnya-adelina-6dv-1.jpg", "/assets/spalnya-adelina-6dv-2.jpg", "/assets/spalnya-adelina-6dv-3.jpg"],
    description: "Спальня «Аделина» с 6-дверным шкафом — спальный гарнитур в цвете Серый, с кроватью 205×152×215 см, со шкафом 280×235×60 см.",
    characteristics: [
      ["Фабрика", "фабрика «Фараон» Ставрополь"],
      ["Цвет", "Серый"],
      ["Шкаф", "280×235×60 см"],
      ["Кровать", "205×152×215 см"],
      ["Тумба", "Длина кровати вместе с тумбами 300 см"],
      ["Комод", "160×80×55 см"],
      ["Тумба", "47×49×50 см"],
      ["Матрас", "Матрас приобретается отдельно, ламелии в комплекте."],
    ],
  },
  {
    slug: "spalnya-avrora-5dv-s-tual-stolikom-i-s-podemnym-mehanizmom",
    name: "Спальня «Аврора с 5-дверным шкафом с туал.столиком и с подъемным механизмом»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "89 000 ₽ / компл.",
    image: "/assets/spalnya-avrora-5dv-s-tual-stolikom-i-s-podemnym-mehanizmom-1.jpg",
    images: ["/assets/spalnya-avrora-5dv-s-tual-stolikom-i-s-podemnym-mehanizmom-1.jpg", "/assets/spalnya-avrora-5dv-s-tual-stolikom-i-s-podemnym-mehanizmom-2.jpg", "/assets/spalnya-avrora-5dv-s-tual-stolikom-i-s-podemnym-mehanizmom-3.jpg", "/assets/spalnya-avrora-5dv-s-tual-stolikom-i-s-podemnym-mehanizmom-4.jpg", "/assets/spalnya-avrora-5dv-s-tual-stolikom-i-s-podemnym-mehanizmom-5.jpg", "/assets/spalnya-avrora-5dv-s-tual-stolikom-i-s-podemnym-mehanizmom-6.jpg"],
    description: "Спальня «Аврора с 5-дверным шкафом с туал.столиком и с подъемным механизмом» — спальный гарнитур в цвете Сатин-черный, со шкафом Ш-2.50, Г-60, В-2.20.",
    characteristics: [
      ["Фабрика", "Фабрика СКФМ"],
      ["Цвет", "Сатин-черный"],
      ["Шкаф", "Ш-2.50, Г-60, В-2.20"],
      ["Кровать", ""],
      ["Тумба", ""],
      ["Туалетный стол", ""],
      ["Зеркало", "Ш-93, Г-20, В-91"],
      ["Матрас", "Без матраса."],
    ],
  },
  {
    slug: "spalnya-avrora-4dv-s-komodom",
    name: "Спальня «Аврора» с 4-дверным шкафом с комодом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "76 500 ₽ / компл.",
    image: "/assets/spalnya-avrora-4dv-s-komodom-1.jpg",
    images: ["/assets/spalnya-avrora-4dv-s-komodom-1.jpg", "/assets/spalnya-avrora-4dv-s-komodom-2.jpg", "/assets/spalnya-avrora-4dv-s-komodom-3.jpg", "/assets/spalnya-avrora-4dv-s-komodom-4.jpg"],
    description: "Спальня «Аврора» с 4-дверным шкафом с комодом — спальный гарнитур в цвете Сатин-черный, со шкафом Ш-2.00, Г-60, В-2.20.",
    characteristics: [
      ["Фабрика", "Фабрика СКФМ"],
      ["Цвет", "Сатин-черный"],
      ["Шкаф", "Ш-2.00, Г-60, В-2.20"],
      ["Кровать", ""],
      ["Тумба", ""],
      ["Комод", "Ш-96, Г-45, В-92"],
      ["Зеркало", "Ш-93, Г-20, В-91"],
      ["Матрас", "Без матраса и ортопеда."],
    ],
  },
  {
    slug: "spalnya-yasmin",
    name: "Спальня «Ясмин»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "97 000 ₽ / компл.",
    image: "/assets/spalnya-yasmin-1.jpg",
    images: ["/assets/spalnya-yasmin-1.jpg", "/assets/spalnya-yasmin-2.jpg", "/assets/spalnya-yasmin-3.jpg", "/assets/spalnya-yasmin-4.jpg"],
    description: "Спальня «Ясмин» — спальный гарнитур со шкафом Ш-178 Г-64 В-224.",
    characteristics: [
      ["Фабрика", "Фабрика СКФМ"],
      ["Шкаф", "Ш-178 Г-64 В-224"],
      ["Туалетный стол", "Ш-1.47 Г-45 В-82"],
      ["Тумба", "Ш-60 Г-40 В-40"],
      ["Кровать", ""],
      ["Зеркало", "100-70"],
      ["Матрас", "Без матраса и ортопеда."],
    ],
  },
  {
    slug: "spalnya-ankara-4",
    name: "Спальня «Анкара»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "122 500 ₽ / компл.",
    image: "/assets/spalnya-ankara-4-1.jpg",
    images: ["/assets/spalnya-ankara-4-1.jpg", "/assets/spalnya-ankara-4-2.jpg", "/assets/spalnya-ankara-4-3.jpg", "/assets/spalnya-ankara-4-4.jpg", "/assets/spalnya-ankara-4-5.jpg", "/assets/spalnya-ankara-4-6.jpg", "/assets/spalnya-ankara-4-7.jpg", "/assets/spalnya-ankara-4-8.jpg"],
    description: "Спальня «Анкара» — спальный гарнитур в цвете Сатин с бежевой спинкой, с кроватью 180/200, со шкафом 6-дверный - Ш2.63 В2.22 Г65см.",
    characteristics: [
      ["Цвет", "Сатин с бежевой спинкой"],
      ["Фабрика", "Фабрика СКФМ"],
      ["Шкаф", "Шкаф 6-дверный - Ш2.63 В2.22 Г65см"],
      ["Кровать", "Кровать - 180/200"],
      ["Тумба", "Тумба - Ш67 В48.5 Г45 см"],
      ["Комод", "Комод - Ш142.5 В90.5 Г45 см"],
      ["Зеркало", "Зеркало - Ш90 В104см"],
      ["Матрас", "без матраса"],
    ],
  },
  {
    slug: "spalnya-laura-6-dverey",
    name: "Спальня «Лаура» с 6-дверным шкафом",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "135 000 ₽ / компл.",
    image: "/assets/spalnya-laura-6-dverey-1.jpg",
    images: ["/assets/spalnya-laura-6-dverey-1.jpg", "/assets/spalnya-laura-6-dverey-2.jpg", "/assets/spalnya-laura-6-dverey-3.jpg", "/assets/spalnya-laura-6-dverey-4.jpg", "/assets/spalnya-laura-6-dverey-5.jpg", "/assets/spalnya-laura-6-dverey-6.jpg", "/assets/spalnya-laura-6-dverey-7.jpg", "/assets/spalnya-laura-6-dverey-8.jpg", "/assets/spalnya-laura-6-dverey-9.jpg"],
    description: "Спальня «Лаура» с 6-дверным шкафом — спальный гарнитур в цвете бежевый, с кроватью 180×200 см, со шкафом почти 3 метра ширины.",
    characteristics: [
      ["Фабрика", "Фабрика «ARIDA» (Ставрополь)"],
      ["Кровать", "▸ Кровать 180×200 см"],
      ["Ортопед", "▸ Ортопедическое основание"],
      ["Шкаф", "▸ Шкаф 6 дверей — почти 3 метра ширины"],
      ["Туалетный стол", "▸ Туалетный стол 153 см"],
      ["Тумба", "▸ Прикроватная тумба"],
      ["Зеркало", "▸ Зеркало"],
      ["Цвет", "Цвет бежевый"],
    ],
  },
  {
    slug: "spalnya-sevilya",
    name: "Спальня «Севилья»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "100 000 ₽ / компл.",
    image: "/assets/spalnya-sevilya-1.jpg",
    images: ["/assets/spalnya-sevilya-1.jpg", "/assets/spalnya-sevilya-2.jpg", "/assets/spalnya-sevilya-3.jpg", "/assets/spalnya-sevilya-4.jpg"],
    description: "Спальня «Севилья» — спальный гарнитур в цвете Кашемир, с кроватью В1224хШ1920хГ2062, со шкафом В2202хШ2307хг616.",
    characteristics: [
      ["Фабрика", "🇧🇾Слониммебель"],
      ["Шкаф", "В2202хШ2307хг616"],
      ["Кровать", "В1224хШ1920хГ2062"],
      ["Зеркало", "В802хШ802хГ22"],
      ["Тумба", "В450хШ558хГ420"],
      ["Комод", "В801хШ1391хГ470"],
      ["Цвет", "Кашемир"],
      ["Фасады", "МДФ крашенный"],
      ["Корпус", "ЛДСП"],
      ["Ортопед", "Ортопед в комплекте"],
    ],
  },
  {
    slug: "spalnya-stefaniya-5dv",
    name: "Спальня «Стефания с 5-дверным шкафом»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "105 000 ₽ / компл.",
    image: "/assets/spalnya-stefaniya-5dv-1.jpg",
    images: ["/assets/spalnya-stefaniya-5dv-1.jpg", "/assets/spalnya-stefaniya-5dv-2.jpg", "/assets/spalnya-stefaniya-5dv-3.jpg", "/assets/spalnya-stefaniya-5dv-4.jpg", "/assets/spalnya-stefaniya-5dv-5.jpg", "/assets/spalnya-stefaniya-5dv-6.jpg"],
    description: "Спальня «Стефания с 5-дверным шкафом» — спальный гарнитур с кроватью 180/200см, со шкафом Ш2.50 х Г58 х В2.26см.",
    characteristics: [
      ["Шкаф", "Ш2.50 х Г58 х В2.26см"],
      ["Тумба", "Ш60 х Г45 х В40см"],
      ["Кровать", "Кровать 180/200см"],
      ["Зеркало", "80/70см"],
      ["Туалетный стол", "Ш1.48 х Г45 х В85см"],
      ["Матрас", "Без ортопеда,без матраса."],
    ],
  },
  {
    slug: "spalnya-medeya-6ti-dv-beloe-serebro",
    name: "Спальня «Медея» с 6-дверным шкафом (белое-серебро)",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: "/assets/spalnya-medeya-6ti-dv-beloe-serebro-1.jpg",
    images: ["/assets/spalnya-medeya-6ti-dv-beloe-serebro-1.jpg"],
    description: "Спальня «Медея» с 6-дверным шкафом (белое-серебро) — спальный гарнитур с кроватью Ш2060; В1200; Д2100, со шкафом Ш2570; В2210; Г520.",
    characteristics: [
      ["Производство", "Производство Краснодарский край"],
      ["Фабрика", "Фабрика Регион-Мебель"],
      ["Шкаф", "Ш2570; В2210; Г520"],
      ["Туалетный стол", "Ш1280; В1720; Г470"],
      ["Тумба", "Ш600; В450; Г460"],
      ["Кровать", "Кровать; Ш2060; В1200; Д2100"],
    ],
  },
  // Telegram bedroom sets import end
  {
    slug: "stol-lapka",
    name: "Стол «Лапка»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: lapkaGallery[0],
    images: lapkaGallery,
    description: "Раздвижной обеденный стол на фигурном центральном основании. Светлая отделка с золотистым орнаментом подчёркивает классический характер модели, а три варианта длины позволяют подобрать стол для кухни или просторной столовой.",
    characteristics: [["Размер", "3 варианта"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золотистый декор"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 × 90 × 80 см", price: "23 000 ₽ / шт." },
      { label: "Средний", dimensions: "160–200 × 90 × 80 см", price: "24 000 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 × 100 × 80 см", price: "25 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-lapka-mramor",
    name: "Стол «Лапка» — мрамор",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: lapkaMarbleGallery[0],
    images: lapkaMarbleGallery,
    description: "Раздвижной обеденный стол на фигурном центральном основании со столешницей под мрамор и классическим орнаментом. Модель «Лапка» — мрамор представлена в двух размерах для кухни или просторной столовой.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / мрамор / золотистый декор"]],
    variants: [
      { label: "Средний", dimensions: "160–200 × 90 × 90 см", price: "25 000 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 × 100 × 80 см", price: "26 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-lapka-orekh",
    name: "Стол «Лапка» орех",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 500 ₽",
    image: lapkaWalnutGallery[0],
    images: lapkaWalnutGallery,
    description: "Раздвижной обеденный стол на фигурном центральном основании в глубоком ореховом оттенке. Контрастный классический орнамент подчёркивает форму столешницы, а три варианта размера позволяют подобрать модель для кухни или просторной столовой.",
    characteristics: [["Размер", "3 варианта"], ["Материал", "уточняется"], ["Цвет", "орех / золотистый декор"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 × 90 × 80 см", price: "23 500 ₽ / шт." },
      { label: "Средний", dimensions: "160–200 × 90 × 90 см", price: "24 500 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 × 100 × 80 см", price: "25 500 ₽ / шт." },
    ],
  },
  {
    slug: "stol-versace",
    name: "Стол «Версаче»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 20 500 ₽",
    image: versaceGallery[0],
    images: versaceGallery,
    description: "Раздвижной обеденный стол с прямоугольной столешницей, фигурными опорами и выразительным классическим орнаментом. Светлая отделка с золотистыми деталями подходит для кухни или столовой в классическом стиле.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золотистый декор"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 × 80 × 80 см", price: "20 500 ₽ / шт." },
      { label: "Большой", dimensions: "160–200 × 90 × 80 см", price: "21 500 ₽ / шт." },
    ],
  },
  {
    slug: "stol-lapka-kruglyy",
    name: "Стол «Лапка» — круглый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "19 000 ₽ / шт.",
    image: roundLapkaGallery[0],
    images: roundLapkaGallery,
    description: "Круглый обеденный стол на фигурном центральном основании. Компактный диаметр подходит для небольшой кухни или уютной обеденной зоны, а светлая отделка с золотистым декором поддерживает классический характер модели.",
    characteristics: [["Размер", "диаметр 90 см"], ["Механизм", "нераздвижной"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золотистый декор"]],
  },
  {
    slug: "stol-roza-gold",
    name: "Стол «Роза» голд",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: rozaGoldGallery[0],
    images: rozaGoldGallery,
    description: "Раздвижной обеденный стол с выразительным золотистым декором и фигурными опорами. Модель «Роза» голд становится заметным центром классической столовой зоны, а три варианта длины позволяют подобрать размер под помещение и количество посадочных мест.",
    characteristics: [["Размер", "3 варианта"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золото"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 × 80 × 80 см", price: "22 000 ₽ / шт." },
      { label: "Средний", dimensions: "160–200 × 90 × 80 см", price: "23 000 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 × 100 × 80 см", price: "24 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-roza",
    name: "Стол «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: rozaGallery[0],
    images: rozaGallery,
    description: "Раздвижной обеденный стол с овальной столешницей, плавными фигурными опорами и классическим золотистым декором. Модель «Роза» представлена в двух вариантах длины для столовой зоны разного размера.",
    characteristics: [["Размер", "2 варианта длины"], ["Ширина и высота", "уточняются"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золотистый декор"]],
    variants: [
      { label: "Средний", dimensions: "160–200 см (длина)", price: "22 000 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 см (длина)", price: "23 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-roza-orekh",
    name: "Стол «Роза» орех",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 500 ₽",
    image: rozaWalnutGallery[0],
    images: rozaWalnutGallery,
    description: "Раздвижной обеденный стол в глубоком ореховом оттенке с овальной столешницей, фигурными опорами и выразительным золотистым декором. Модель «Роза» орех представлена в трёх вариантах длины.",
    characteristics: [["Размер", "3 варианта длины"], ["Ширина и высота", "уточняются"], ["Материал", "уточняется"], ["Цвет", "орех / золотистый декор"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 см (длина)", price: "21 500 ₽ / шт." },
      { label: "Средний", dimensions: "160–200 см (длина)", price: "22 500 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 см (длина)", price: "23 500 ₽ / шт." },
    ],
  },
  {
    slug: "stol-roza-palma",
    name: "Стол «Роза» пальма",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "22 000 ₽ / шт.",
    image: rozaPalmaGallery[0],
    images: rozaPalmaGallery,
    description: "Раздвижной обеденный стол с овальной столешницей, плавными фигурными опорами и аккуратным золотистым декором. Модель «Роза» пальма подходит для классической кухни или столовой и увеличивается с 160 до 200 см.",
    characteristics: [["Размер", "160–200 × 90 × 80 см"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золотистый декор"]],
  },
  {
    slug: "stol-roza-palma-mramor",
    name: "Стол «Роза» пальма/мрамор",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: rozaPalmaMarbleGallery[0],
    images: rozaPalmaMarbleGallery,
    description: "Раздвижной обеденный стол с овальной столешницей под мрамор, плавными фигурными опорами и золотистым декором. Модель «Роза» пальма/мрамор представлена в двух размерах для кухни или классической столовой.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / мрамор / золото"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 × 80 × 80 см", price: "22 000 ₽ / шт." },
      { label: "Большой", dimensions: "160–200 × 90 × 80 см", price: "23 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-infinity",
    name: "Стол «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: infinityGallery[0],
    images: infinityGallery,
    description: "Раздвижной обеденный стол с прямоугольной столешницей и сдержанным классическим декором. Светлая модель «Инфинити» легко сочетается с современной кухней или столовой, а два варианта размера подходят для разных планировок.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "белый"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 × 80 × 80 см", price: "24 000 ₽ / шт." },
      { label: "Большой", dimensions: "160–200 × 90 × 80 см", price: "26 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-grand",
    name: "Стол «Гранд»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: grandGallery[0],
    images: grandGallery,
    description: "Большой раздвижной обеденный стол с овальной столешницей, массивным центральным основанием и выразительным золотистым декором. Модель «Гранд» рассчитана на просторную столовую и большое количество посадочных мест.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золото"]],
    variants: [
      { label: "Большой", dimensions: "200–240 × 100 × 80 см", price: "36 000 ₽ / шт." },
      { label: "Максимальный", dimensions: "240–280 × 110 × 80 см", price: "38 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-grand-mramor",
    name: "Стол «Гранд» мрамор",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 37 000 ₽",
    image: grandMarbleGallery[0],
    images: grandMarbleGallery,
    description: "Большой раздвижной обеденный стол с овальной столешницей под мрамор, массивным центральным основанием и золотистыми деталями. Модель «Гранд» мрамор рассчитана на просторную столовую и большое количество посадочных мест.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / мрамор / золото"]],
    variants: [
      { label: "Большой", dimensions: "200–240 × 100 × 80 см", price: "37 000 ₽ / шт." },
      { label: "Максимальный", dimensions: "240–280 × 110 × 80 см", price: "39 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-gold",
    name: "Стол «Голд»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 40 000 ₽",
    image: goldGallery[0],
    images: goldGallery,
    description: "Большой раздвижной обеденный стол с прямоугольной столешницей со скруглёнными углами, выразительным рисунком под камень и золотистым декором. Модель «Голд» рассчитана на просторную столовую и большое количество посадочных мест.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золотистый декор"]],
    variants: [
      { label: "Большой", dimensions: "200–250 × 100 × 80 см", price: "40 000 ₽ / шт." },
      { label: "Максимальный", dimensions: "240–280 × 110 × 80 см", price: "42 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-gold-kruglyy",
    name: "Стол «Голд» — круглый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: roundGoldGallery[0],
    images: roundGoldGallery,
    description: "Компактный раздвижной обеденный стол на массивном центральном основании с выразительным золотистым декором. В сложенном виде модель «Голд» имеет круглую столешницу длиной 120 см, а после раскладывания увеличивается до 160 см.",
    characteristics: [["Размер в сложенном виде", "120 см"], ["Размер в разложенном виде", "160 см"], ["Высота", "80 см"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золото"]],
  },
  {
    slug: "stol-classic-seryy",
    name: "Стол «Классик» серый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "65 000 ₽ / шт.",
    image: classicPremiumGallery[0],
    images: classicPremiumGallery,
    description: "Раздвижной обеденный стол в светлой классической отделке с серой мягкой группой. Спокойный оттенок сидений делает модель универсальной для кухни, гостиной или отдельной столовой зоны.",
    characteristics: [["Размер", "3 варианта"], ["Материал", "уточняется"], ["Цвет", "белый / серый"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 × 80 × 80 см", price: "65 000 ₽ / шт." },
      { label: "Средний", dimensions: "160–200 × 90 × 80 см", price: "65 000 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 × 100 × 80 см", price: "65 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-classic-gold",
    name: "Стол «Классик» голд",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "65 000 ₽ / шт.",
    image: classicPremiumGoldGallery[0],
    images: classicPremiumGoldGallery,
    description: "Классический раздвижной обеденный стол со светлой столешницей, золотистыми акцентами и мягкими стульями. Модель выглядит торжественно, но остаётся достаточно спокойной для повседневной столовой зоны.",
    characteristics: [["Размер", "3 варианта"], ["Материал", "уточняется"], ["Цвет", "белый / золото / бежевый"]],
    variants: [
      { label: "Компактный", dimensions: "120–160 × 80 × 80 см", price: "65 000 ₽ / шт." },
      { label: "Средний", dimensions: "160–200 × 90 × 80 см", price: "65 000 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 × 100 × 80 см", price: "65 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-rondo-belyy",
    name: "Стол «Рондо» белый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: roundWhiteGallery[0],
    images: roundWhiteGallery,
    description: "Круглый раздвижной стол в белой глянцевой отделке с резным основанием и мягкими стульями в тон. Компактный формат подходит для уютной столовой зоны.",
    characteristics: [["Размер", "120–160 × 80 см"], ["Материал", "уточняется"], ["Цвет", "белый / серебристый"]],
  },
  {
    slug: "stol-rondo-grafit",
    name: "Стол «Рондо» графит",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: roundBlueGallery[0],
    images: roundBlueGallery,
    description: "Круглый обеденный стол с белым корпусом и мягкими графитовыми стульями. Сдержанная цветовая пара хорошо смотрится в светлом интерьере и не перегружает пространство.",
    characteristics: [["Размер", "120–160 × 80 см"], ["Материал", "уточняется"], ["Цвет", "белый / графит"]],
  },
  {
    slug: "stol-roza-belyy",
    name: "Стол «Роза» белый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "50 000 ₽ / шт.",
    image: roundPalmaGallery[0],
    images: roundPalmaGallery,
    description: "Круглый белый стол с фигурными опорами и деликатным классическим декором. Модель визуально лёгкая и хорошо подходит для кухни или небольшой столовой.",
    characteristics: [["Размер", "120–160 × 80 см"], ["Материал", "уточняется"], ["Цвет", "белый / бежевый"]],
  },
  {
    slug: "stol-rondo-mramor",
    name: "Стол «Рондо» мрамор",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: roundSilverGallery[0],
    images: roundSilverGallery,
    description: "Круглый стол со столешницей под серый мрамор и серебристым декором по основанию. Контрастные мягкие стулья добавляют модели более современное звучание.",
    characteristics: [["Размер", "120–160 × 80 см"], ["Материал", "уточняется"], ["Цвет", "белый / серый мрамор"]],
  },
  {
    slug: "stol-grand-kruglyy",
    name: "Стол «Гранд» круглый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: roundGoldSoftGallery[0],
    images: roundGoldSoftGallery,
    description: "Круглый стол с массивным центральным основанием, золотистым декором и мягкими стульями с простёжкой. Модель создаёт выразительный акцент в классической столовой.",
    characteristics: [["Размер", "120–160 × 80 см"], ["Материал", "уточняется"], ["Цвет", "слоновая кость / золото / серый"]],
  },
  {
    slug: "stol-roza-orekh-kruglyy",
    name: "Стол «Роза» орех круглый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: roundWalnutGallery[0],
    images: roundWalnutGallery,
    description: "Круглый стол в тёмном ореховом оттенке с золотистым декором и мягкими стульями. Глубокий цвет делает модель более торжественной и заметной в интерьере.",
    characteristics: [["Размер", "120–160 × 80 см"], ["Материал", "уточняется"], ["Цвет", "орех / золото"]],
  },
  {
    slug: "stol-roza-ayvori",
    name: "Стол «Роза» айвори",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: roundCreamLaceGallery[0],
    images: roundCreamLaceGallery,
    description: "Круглый стол в оттенке айвори с резным декором и мягкими бежевыми стульями. Светлая палитра подчёркивает классическую форму и делает зону обеда визуально мягче.",
    characteristics: [["Размер", "120–160 × 80 см"], ["Материал", "уточняется"], ["Цвет", "айвори / золото / бежевый"]],
  },
  {
    slug: "stol-lapka-serebro-kruglyy",
    name: "Стол «Лапка» серебро круглый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "50 000 ₽ / шт.",
    image: roundSilverLapkaGallery[0],
    images: roundSilverLapkaGallery,
    description: "Круглый стол со светлым корпусом, серой столешницей под мрамор и серебристым декором на основании. Модель сохраняет классический силуэт, но выглядит более прохладно и спокойно.",
    characteristics: [["Размер", "120–160 × 80 см"], ["Материал", "уточняется"], ["Цвет", "белый / серебро / серый мрамор"]],
  },
  {
    slug: "stol-afina",
    name: "Стол «Афина»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 27 000 ₽",
    image: afinaGallery[0],
    images: afinaGallery,
    description: "Круглый деревянный обеденный стол в тёплом ореховом оттенке со стульями на крестовой спинке. Модель «Афина» выглядит спокойнее классических резных столов и подойдёт для кухни или компактной столовой зоны.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "орех / бежевый"]],
    variants: [
      { label: "Круглый", dimensions: "110 см", price: "27 000 ₽ / шт." },
      { label: "Раздвижной", dimensions: "110–145 см", price: "29 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-versal",
    name: "Стол «Версаль»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: versalGallery[0],
    images: versalGallery,
    description: "Большой обеденный стол в цвете орех/золото с полированной глянцевой крышкой и выразительным классическим декором. Модель «Версаль» рассчитана на просторную столовую зону и производится в Армавире.",
    characteristics: [["Размер", "240–280 × 110 см"], ["Крышка", "МДВ, полированный глянец"], ["Ножки и декор", "мебельный пластик"], ["Цвет", "орех / золото"], ["Производство", "Армавир"]],
  },
  {
    slug: "stol-afina-belyy",
    name: "Стол «Афина» белый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "29 000 ₽ / шт.",
    image: afinaWhiteGallery[0],
    images: afinaWhiteGallery,
    description: "Раздвижной обеденный стол «Афина» в светлой отделке с аккуратным золотистым декором и стульями с серой мягкой посадкой. Компактная круглая форма подходит для кухни и небольшой столовой зоны.",
    characteristics: [["Размер", "110–145 см"], ["Материал", "уточняется"], ["Цвет", "белый / золото / серый"]],
  },
  {
    slug: "stol-ingolf",
    name: "Стол «Ингольф»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: ingolfGallery[0],
    images: ingolfGallery,
    description: "Раздвижной обеденный стол «Ингольф» в цвете слоновая кость с глянцевой прямоугольной столешницей и спокойными классическими деталями. Лаконичная форма хорошо подходит для кухни или светлой столовой зоны.",
    characteristics: [["Размер", "160–200 см"], ["Материал", "уточняется"], ["Цвет", "слоновая кость"]],
  },
  {
    slug: "stol-imperiya",
    name: "Стол «Империя»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 29 000 ₽",
    image: imperiyaGallery[0],
    images: imperiyaGallery,
    description: "Раздвижной обеденный стол «Империя» в светлой серо-золотистой отделке с мягкими бирюзовыми стульями. Модель подходит для просторной кухни или столовой зоны и выглядит заметным акцентом без лишней тяжести.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "серый / золото / бирюзовый"]],
    variants: [
      { label: "Средний", dimensions: "160–200 см", price: "29 000 ₽ / шт." },
      { label: "Большой", dimensions: "200–240 см", price: "30 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-rafaello-mini-sheikh",
    name: "Стол «Рафаэлло» + 6 стульев Мини Шейх",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "95 000 ₽ / компл.",
    image: rafaelloMiniSheikhGallery[0],
    images: rafaelloMiniSheikhGallery,
    description: "Обеденный комплект со столом «Рафаэлло» и шестью стульями Мини Шейх. Светлая глянцевая столешница, резной декор и мягкая классическая обивка создают парадную столовую группу для большой кухни или гостиной.",
    characteristics: [["Размер", "2 варианта"], ["Комплектация", "стол + 6 стульев Мини Шейх"], ["Материал", "уточняется"], ["Цвет", "айвори / золото"]],
    variants: [
      { label: "Большой", dimensions: "200–240 см", price: "95 000 ₽ / компл." },
      { label: "Макси", dimensions: "240–280 см", price: "95 000 ₽ / компл." },
    ],
  },
  {
    slug: "stol-gold-silik",
    name: "Стол «Голд» + 6 стульев Силик",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "105 000 ₽ / компл.",
    image: goldSilikGallery[0],
    images: goldSilikGallery,
    description: "Обеденный комплект со столом «Голд» и шестью стульями Силик. Светлая столешница с золотистым рисунком, объёмный резной декор и выразительная обивка стульев делают группу акцентом для просторной столовой зоны.",
    characteristics: [["Размер", "2 варианта"], ["Комплектация", "стол + 6 стульев Силик"], ["Материал", "уточняется"], ["Цвет", "айвори / золото / бордовый"]],
    variants: [
      { label: "Большой", dimensions: "200–240 см", price: "105 000 ₽ / компл." },
      { label: "Макси", dimensions: "240–280 см", price: "105 000 ₽ / компл." },
    ],
  },
  {
    slug: "stol-gold-veneciya",
    name: "Стол «Голд» + 6 стульев Венеция",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "105 000 ₽ / компл.",
    image: goldVeneciyaGallery[0],
    images: goldVeneciyaGallery,
    description: "Обеденный комплект со столом «Голд» и шестью стульями Венеция. Светлая столешница с мраморным рисунком, золотистый декор и выразительные резные спинки создают классическую столовую группу для просторного интерьера.",
    characteristics: [["Размер", "2 варианта"], ["Комплектация", "стол + 6 стульев Венеция"], ["Материал", "уточняется"], ["Цвет", "айвори / золото"]],
    variants: [
      { label: "Большой", dimensions: "200–240 см", price: "105 000 ₽ / компл." },
      { label: "Макси", dimensions: "240–280 см", price: "105 000 ₽ / компл." },
    ],
  },
  {
    slug: "stol-gold-domasko",
    name: "Стол «Голд» + 6 стульев Домаско",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "95 000 ₽ / компл.",
    image: goldDomaskoGallery[0],
    images: goldDomaskoGallery,
    description: "Обеденный комплект со столом «Голд» и шестью стульями Домаско. Тёмная глянцевая отделка, золотистая вставка столешницы и мягкая узорная обивка подчёркивают более насыщенный классический характер модели.",
    characteristics: [["Размер", "2 варианта"], ["Комплектация", "стол + 6 стульев Домаско"], ["Материал", "уточняется"], ["Цвет", "орех / золото"]],
    variants: [
      { label: "Большой", dimensions: "200–240 см", price: "95 000 ₽ / компл." },
      { label: "Макси", dimensions: "240–280 см", price: "95 000 ₽ / компл." },
    ],
  },
  {
    slug: "stol-gold-sheikh",
    name: "Стол «Голд» + 6 стульев Шейх",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "99 000 ₽ / компл.",
    image: goldSheikhGallery[0],
    images: goldSheikhGallery,
    description: "Обеденный комплект со столом «Голд» и шестью стульями Шейх. Светлая основа, крупная декоративная столешница и резные стулья с мягкой обивкой делают комплект заметным центром столовой зоны.",
    characteristics: [["Размер", "2 варианта"], ["Комплектация", "стол + 6 стульев Шейх"], ["Материал", "уточняется"], ["Цвет", "айвори / золото"]],
    variants: [
      { label: "Большой", dimensions: "200–240 см", price: "99 000 ₽ / компл." },
      { label: "Макси", dimensions: "240–280 см", price: "99 000 ₽ / компл." },
    ],
  },
  {
    slug: "stol-borokko-silik",
    name: "Стол «Борокко» + 8 стульев Силик",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "125 000 ₽ / компл.",
    image: borokkoSilikGallery[0],
    images: borokkoSilikGallery,
    description: "Обеденный комплект со столом «Борокко» и восемью стульями Силик. Большой стол с глянцевой светлой столешницей и золочёным резным декором рассчитан на просторную столовую и парадную сервировку.",
    characteristics: [["Размер", "2 варианта"], ["Комплектация", "стол + 8 стульев Силик"], ["Материал", "уточняется"], ["Цвет", "айвори / золото"]],
    variants: [
      { label: "Большой", dimensions: "200–240 см", price: "125 000 ₽ / компл." },
      { label: "Макси", dimensions: "240–280 см", price: "125 000 ₽ / компл." },
    ],
  },
  {
    slug: "stol-gold-sheikh-8",
    name: "Стол «Голд» + 8 стульев Шейх",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "110 000 ₽ / компл.",
    image: goldSheikh8Gallery[0],
    images: goldSheikh8Gallery,
    description: "Обеденный комплект со столом «Голд» и восемью стульями Шейх. Светлая столешница с серебристым декоративным рисунком и мягкие стулья на резном каркасе подходят для большой столовой зоны.",
    characteristics: [["Размер", "2 варианта"], ["Комплектация", "стол + 8 стульев Шейх"], ["Материал", "уточняется"], ["Цвет", "белый / серебро / серый"]],
    variants: [
      { label: "Большой", dimensions: "200–240 см", price: "110 000 ₽ / компл." },
      { label: "Макси", dimensions: "240–280 см", price: "110 000 ₽ / компл." },
    ],
  },
  {
    slug: "stol-gold-sheikh-8-max",
    name: "Стол «Голд» + 8 стульев Шейх 240–280",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "110 000 ₽ / компл.",
    image: goldSheikh8MaxGallery[0],
    images: goldSheikh8MaxGallery,
    description: "Большой обеденный комплект со столом «Голд» размером 240–280 см и восемью стульями Шейх. Светлая глянцевая отделка и серо-синяя мягкая обивка делают комплект спокойным, но выразительным решением для просторной кухни или гостиной.",
    characteristics: [["Размер", "240–280 см"], ["Комплектация", "стол + 8 стульев Шейх"], ["Материал", "уточняется"], ["Цвет", "белый / серебро / серо-синий"]],
    variants: [
      { label: "Макси", dimensions: "240–280 см", price: "110 000 ₽ / компл." },
    ],
  },
  {
    slug: "stolovyy-komplekt-sude",
    name: "Столовый комплект «SUDE»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "270 000 ₽ / компл.",
    image: sudeGallery[0],
    images: sudeGallery,
    description: "Столовый комплект «SUDE» производства Турция в сером цвете: большой стол с выразительной МДФ-столешницей и восемь мягких стульев на деревянном основании. Комплект выглядит современно и премиально, хорошо подходит для просторной столовой зоны.",
    characteristics: [
      ["Размер стола", "208 × 104 × 76 см"],
      ["Комплектация", "стол + 8 стульев"],
      ["Размер стула", "спинка 99 см, сиденье 50 × 44 см"],
      ["Высота сидушки", "44 см"],
      ["Столешница", "МДФ"],
      ["Основание стула и ножки", "дерево"],
      ["Ножка стола", "дерево"],
      ["Цвет", "серый"],
      ["Производство", "Турция"],
    ],
  },
  {
    slug: "stol-graciya",
    name: "Стол «Грация»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 45 000 ₽",
    image: graciyaGallery[0],
    images: graciyaGallery,
    description: "Обеденный стол «Грация» в светлой глянцевой отделке с лаконичной прямоугольной формой и декоративным основанием. Модель рассчитана на большую столовую зону и хорошо сочетается со светлыми стульями с серой мягкой вставкой.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "белый / серый"]],
    variants: [
      { label: "240 см", dimensions: "240 × 110 × 80 см", price: "45 000 ₽ / шт." },
      { label: "270 см", dimensions: "270 × 110 × 80 см", price: "46 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-graciya-oval",
    name: "Стол «Грация овал»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 45 000 ₽",
    image: graciyaOvalGallery[0],
    images: graciyaOvalGallery,
    description: "Овальный обеденный стол «Грация» в светлой глянцевой отделке с золотистым кантом и рельефным основанием. Мягкая овальная форма визуально облегчает большой стол и хорошо подходит для современной столовой зоны.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "айвори / золото"]],
    variants: [
      { label: "200 см", dimensions: "200 × 100 × 80 см", price: "45 000 ₽ / шт." },
      { label: "240 см", dimensions: "240 × 100 × 80 см", price: "46 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-boston",
    name: "Стол «Бостон»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 50 000 ₽",
    image: bostonGallery[0],
    images: bostonGallery,
    description: "Обеденный стол «Бостон» в современном светлом исполнении с глянцевой столешницей, строгими линиями и выразительным рельефным основанием. Доступны сочетания белый/серый и белый/золото.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "белый/серый, белый/золото"]],
    variants: [
      { label: "240 см", dimensions: "240 см", price: "50 000 ₽ / шт." },
      { label: "270 см", dimensions: "270 см", price: "51 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-gold-kruglyy-oreh",
    name: "Стол «Голд» круглый",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 500 ₽ / шт.",
    image: goldRoundWalnutGallery[0],
    images: goldRoundWalnutGallery,
    description: "Круглый стол «Голд» в классическом декоративном исполнении с глянцевой столешницей и золотистыми акцентами. Модель доступна в цветах орех/золото и белый/серебро.",
    characteristics: [["Размер", "120–160 см"], ["Материал", "уточняется"], ["Цвет", "орех/золото, белый/серебро"]],
    variants: [
      { label: "120–160 см", dimensions: "120–160 см", price: "26 500 ₽ / шт." },
    ],
  },
  {
    slug: "stolovyy-nabor-tamila",
    name: "Столовый набор «Tamila»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "195 000 ₽ / компл.",
    image: tamilaGallery[0],
    images: tamilaGallery,
    description: "Столовый набор «Tamila» в цвете беж/золото: стол и 6 мягких стульев с современным округлым силуэтом. Комплект производства Турция подойдёт для светлой столовой зоны с премиальными золотистыми акцентами.",
    characteristics: [["Размер стола", "200 × 103 × 75 см"], ["Комплектация", "стол и 6 стульев"], ["Цвет", "беж/золото"], ["Производство", "Турция"]],
    variants: [
      { label: "Комплект", dimensions: "стол 200 × 103 × 75 см + 6 стульев", price: "195 000 ₽ / компл." },
    ],
  },
  {
    slug: "stol-gold-mokko-razdvizhnoy",
    name: "Стол «Голд Мокко» раздвижной",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 46 000 ₽",
    image: goldMokkoGallery[0],
    images: goldMokkoGallery,
    description: "Раздвижной стол «Голд Мокко» в насыщенной тёмной отделке с глянцевой столешницей и классическим декоративным основанием. Подходит для большой столовой зоны и праздничной сервировки.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "уточняется"], ["Цвет", "мокко"]],
    variants: [
      { label: "200–240 см", dimensions: "200–240 × 100 см", price: "46 000 ₽ / шт." },
      { label: "240–280 см", dimensions: "240–280 × 110 см", price: "48 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-amelia",
    name: "Стол «Амелия»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 27 000 ₽",
    image: ameliaGallery[0],
    images: ameliaGallery,
    description: "Стол «Амелия» в наличии в трёх цветах. Лаконичная раздвижная модель со столешницей со шпоном и ножками из бука подойдёт для современной кухни или столовой зоны.",
    characteristics: [["Размер", "2 варианта"], ["Материал", "столешница со шпоном, ножки из бука"], ["Цвет", "3 цвета в наличии"]],
    variants: [
      { label: "160–200 см", dimensions: "160–200 × 90 × 80 см", price: "27 000 ₽ / шт." },
      { label: "200–240 см", dimensions: "200–240 × 100 × 80 см", price: "28 000 ₽ / шт." },
    ],
  },
  {
    slug: "stol-barokko-nerazdvizhnoy",
    name: "Стол «Барокко»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 48 000 ₽",
    image: barokkoModernGallery[0],
    images: barokkoModernGallery,
    description: "Нераздвижной стол «Барокко» в современном исполнении с древесной столешницей, мягко скруглёнными углами и рельефным основанием. Модель подходит для просторной столовой зоны и доступна в нескольких размерах.",
    characteristics: [["Размер", "3 варианта"], ["Конструкция", "не раздвижной"], ["Материал", "уточняется"]],
    variants: [
      { label: "200 см", dimensions: "200 × 110 см", price: "48 000 ₽ / шт." },
      { label: "240 см", dimensions: "240 × 110 см", price: "49 000 ₽ / шт." },
      { label: "270 см", dimensions: "270 × 110 см", price: "50 000 ₽ / шт." },
    ],
  },

  // Telegram tables and chairs import start
  {
    slug: "telegram-stol-grand-so-stulyami-sheyh",
    name: "Стол «Гранд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-001-1.jpg",
    images: telegramTableChairGallery001,
    description: "Стол «Гранд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–250 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-002-1.jpg",
    images: telegramTableChairGallery002,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "270 × 110 × 80–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–250 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh-2",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-003-1.jpg",
    images: telegramTableChairGallery003,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "270–110 × 80–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-silik",
    name: "Стол «Голд» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/telegram-table-chair-004-1.jpg",
    images: telegramTableChairGallery004,
    description: "Стол «Голд» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "5 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "280 × 110 × 80–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 110 × 80–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240–280 × 110 × 80–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "250–300 × 110 × 80–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 5",
                "dimensions": "300–350 × 110 × 80–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh-3",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 37 000 ₽",
    image: "/assets/telegram-table-chair-005-1.jpg",
    images: telegramTableChairGallery005,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "300 × 350 × 110 × 80–",
                "price": "40 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-grand-so-stulyami-sheyh-2",
    name: "Стол «Гранд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-006-1.jpg",
    images: telegramTableChairGallery006,
    description: "Стол «Гранд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–250 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-mini-sheyhi",
    name: "Стол «Голд» со стульями «Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-007-1.jpg",
    images: telegramTableChairGallery007,
    description: "Стол «Голд» со стульями «Мини Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейхи» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 110 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "300–350 × 110 × 80–",
                "price": "40 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейхи»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-mini-sheyhi-2",
    name: "Стол «Голд» со стульями «Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-008-1.jpg",
    images: telegramTableChairGallery008,
    description: "Стол «Голд» со стульями «Мини Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейхи» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 110 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "300–350 × 110 × 80–",
                "price": "40 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейхи»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-bolshie-sheyhi",
    name: "Стол «Голд» со стульями «Большие Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-009-1.jpg",
    images: telegramTableChairGallery009,
    description: "Стол «Голд» со стульями «Большие Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Большие Шейхи» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 110 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "300–350 × 110 × 80–",
                "price": "40 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Большие Шейхи»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-grand-so-stulyami-mini-sheyh",
    name: "Стол «Гранд» со стульями «Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-010-1.jpg",
    images: telegramTableChairGallery010,
    description: "Стол «Гранд» со стульями «Мини Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 100 × 80–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240–280 × 100 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-grand-so-stulyami-mini-sheyh-2",
    name: "Стол «Гранд» со стульями «Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-011-1.jpg",
    images: telegramTableChairGallery011,
    description: "Стол «Гранд» со стульями «Мини Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 100 × 80–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240–280 × 100 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-grand-so-stulyami-bolshie-sheyhi",
    name: "Стол «Гранд» со стульями «Большие Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-012-1.jpg",
    images: telegramTableChairGallery012,
    description: "Стол «Гранд» со стульями «Большие Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Большие Шейхи» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 100 × 80–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240–280 × 100 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Большие Шейхи»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-bolshie-sheyhi-2",
    name: "Стол «Голд» со стульями «Большие Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-013-1.jpg",
    images: telegramTableChairGallery013,
    description: "Стол «Голд» со стульями «Большие Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Большие Шейхи» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 100 × 80–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240–280 × 100 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Большие Шейхи»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-mini-sheyhi-3",
    name: "Стол «Голд» со стульями «Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-014-1.jpg",
    images: telegramTableChairGallery014,
    description: "Стол «Голд» со стульями «Мини Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейхи» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 100 × 80–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240–280 × 100 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейхи»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold",
    name: "Стол «Голд»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-015-1.jpg",
    images: telegramTableChairGallery015,
    description: "Стол «Голд» для кухни или столовой зоны. В карточке сохранены размеры, цена и основные характеристики из описания.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "26.500"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "26.500",
                "price": "26 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-banan",
    name: "Стол «Голд» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-016-1.jpg",
    images: telegramTableChairGallery016,
    description: "Стол «Голд» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "26.500"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "26.500",
                "price": "26 500 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-suren",
    name: "Стол «Голд» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-017-1.jpg",
    images: telegramTableChairGallery017,
    description: "Стол «Голд» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 5 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh-4",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-018-1.jpg",
    images: telegramTableChairGallery018,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-tumba-so-stulyami-roza",
    name: "Стол «Тумба» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "23 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-019-1.jpg",
    images: telegramTableChairGallery019,
    description: "Стол «Тумба» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh-5",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-020-1.jpg",
    images: telegramTableChairGallery020,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-mini-sheyh",
    name: "Стол «Голд» со стульями «Мини-Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "17 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-021-1.jpg",
    images: telegramTableChairGallery021,
    description: "Стол «Голд» со стульями «Мини-Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "1.20 × 1.60–"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.20 × 1.60–",
                "price": "17 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-kruglyy-so-stulyami-mini-sheyh",
    name: "Стол «Голд-Круглый» со стульями «Мини-Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "30 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-022-1.jpg",
    images: telegramTableChairGallery022,
    description: "Стол «Голд-Круглый» со стульями «Мини-Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейх» — 4 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-kruglyy-so-stulyami-suren",
    name: "Стол «Голд-Круглый» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "20 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-023-1.jpg",
    images: telegramTableChairGallery023,
    description: "Стол «Голд-Круглый» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 5 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-klassika-kruglyy-so-stulyami-suren",
    name: "Стол «Классика-Круглый» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-024-1.jpg",
    images: telegramTableChairGallery024,
    description: "Стол «Классика-Круглый» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "27.500"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "27.500",
                "price": "27 500 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-grand-so-stulyami-sheyh-3",
    name: "Стол «Гранд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-025-1.jpg",
    images: telegramTableChairGallery025,
    description: "Стол «Гранд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-so-stulyami-infiniti",
    name: "Стол «Рифленка» со стульями «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-026-1.jpg",
    images: telegramTableChairGallery026,
    description: "Стол «Рифленка» со стульями «Инфинити» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Инфинити» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Инфинити»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-so-stulyami-medalon",
    name: "Стол «Рифленка» со стульями «Медальон»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-027-1.jpg",
    images: telegramTableChairGallery027,
    description: "Стол «Рифленка» со стульями «Медальон» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Медальон» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Медальон»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-so-stulyami-roza",
    name: "Стол «Рифленка» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-028-1.jpg",
    images: telegramTableChairGallery028,
    description: "Стол «Рифленка» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-so-stulyami-suren",
    name: "Стол «Рифленка» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-029-1.jpg",
    images: telegramTableChairGallery029,
    description: "Стол «Рифленка» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-sheyh",
    name: "Стол «Лапка» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-030-1.jpg",
    images: telegramTableChairGallery030,
    description: "Стол «Лапка» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-sheyh-2",
    name: "Стол «Лапка» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-031-1.jpg",
    images: telegramTableChairGallery031,
    description: "Стол «Лапка» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-sheyh",
    name: "Стол «Роза» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-032-1.jpg",
    images: telegramTableChairGallery032,
    description: "Стол «Роза» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-roza",
    name: "Стол «Лапка» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-033-1.jpg",
    images: telegramTableChairGallery033,
    description: "Стол «Лапка» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-sheyh-2",
    name: "Стол «Роза» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-034-1.jpg",
    images: telegramTableChairGallery034,
    description: "Стол «Роза» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "120х160",
                "price": "21 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-banan",
    name: "Стол «Роза» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-035-1.jpg",
    images: telegramTableChairGallery035,
    description: "Стол «Роза» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "120х160",
                "price": "21 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-roza",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-036-1.jpg",
    images: telegramTableChairGallery036,
    description: "Стол «Роза» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "120х160",
                "price": "21 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-versachi",
    name: "Стол «Лапка» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-037-1.jpg",
    images: telegramTableChairGallery037,
    description: "Стол «Лапка» со стульями «Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Версачи» — 3 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200х240",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версачи»",
                "price": "3 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-versachi-so-stulyami-versachi",
    name: "Стол «Версачи» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 20 000 ₽",
    image: "/assets/telegram-table-chair-038-1.jpg",
    images: telegramTableChairGallery038,
    description: "Стол «Версачи» со стульями «Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Версачи» — 3 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160",
                "price": "20 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200",
                "price": "21 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версачи»",
                "price": "3 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka",
    name: "Стол «Рифленка»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 29 000 ₽",
    image: "/assets/telegram-table-chair-039-1.jpg",
    images: telegramTableChairGallery039,
    description: "Стол «Рифленка» для кухни или столовой зоны. В карточке сохранены размеры, цена и основные характеристики из описания.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240",
                "price": "29 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200",
                "price": "28 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-mramor-so-stulyami-mini-sheyh-s-pugovicami",
    name: "Стол «Лапка Мрамор» со стульями «Мини Шейх С Пуговицами»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-040-1.jpg",
    images: telegramTableChairGallery040,
    description: "Стол «Лапка Мрамор» со стульями «Мини Шейх С Пуговицами» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх С Пуговицами» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх С Пуговицами»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-versachi-so-stulyami-versachi",
    name: "Стол «Роза Версачи» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-041-1.jpg",
    images: telegramTableChairGallery041,
    description: "Стол «Роза Версачи» со стульями «Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Версачи» — 3 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "120х160",
                "price": "21 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версачи»",
                "price": "3 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-korona",
    name: "Стол «Лапка» со стульями «Корона»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-042-1.jpg",
    images: telegramTableChairGallery042,
    description: "Стол «Лапка» со стульями «Корона» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Корона» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200х240",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Корона»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-infiniti",
    name: "Стол «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-043-1.jpg",
    images: telegramTableChairGallery043,
    description: "Стол «Инфинити» для кухни или столовой зоны. В карточке сохранены размеры, цена и основные характеристики из описания.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120х260",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200х240",
                "price": "24 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-versachi-2",
    name: "Стол «Лапка» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-044-1.jpg",
    images: telegramTableChairGallery044,
    description: "Стол «Лапка» со стульями «Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Версачи» — 3 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 90 90–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 100 80–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версачи»",
                "price": "3 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-medalon",
    name: "Стол «Голд» со стульями «Медальон»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-045-1.jpg",
    images: telegramTableChairGallery045,
    description: "Стол «Голд» со стульями «Медальон» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Медальон» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Медальон»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-banan-4",
    name: "Стол «Лапка» со стульями «Банан 4»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-046-1.jpg",
    images: telegramTableChairGallery046,
    description: "Стол «Лапка» со стульями «Банан 4» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан 4» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160х200",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200х240",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан 4»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-roza-zhestkaya-spinka",
    name: "Стол «Роза» со стульями «Роза Жесткая Спинка»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-047-1.jpg",
    images: telegramTableChairGallery047,
    description: "Стол «Роза» со стульями «Роза Жесткая Спинка» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза Жесткая Спинка» — 3 700 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120х160",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200х240",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза Жесткая Спинка»",
                "price": "3 700 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-mramor-so-stulyami-versachi",
    name: "Стол «Роза Мрамор» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-048-1.jpg",
    images: telegramTableChairGallery048,
    description: "Стол «Роза Мрамор» со стульями «Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Версачи» — 3 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "120х160",
                "price": "21 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версачи»",
                "price": "3 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-korona",
    name: "Стол «Роза» со стульями «Корона»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-049-1.jpg",
    images: telegramTableChairGallery049,
    description: "Стол «Роза» со стульями «Корона» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Корона» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160х200",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "120х160",
                "price": "21 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Корона»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka",
    name: "Стол «Лапка»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-050-1.jpg",
    images: telegramTableChairGallery050,
    description: "Стол «Лапка» для кухни или столовой зоны. В карточке сохранены размеры, цена и основные характеристики из описания.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 90 90–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 100 80–",
                "price": "25 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-versache",
    name: "Стол «Лапка» со стульями «Версаче»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-051-1.jpg",
    images: telegramTableChairGallery051,
    description: "Стол «Лапка» со стульями «Версаче» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Производство",
                "Дагестан"
          ],
          [
                "Дополнительно",
                "Стулья «Версаче» — 3 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версаче»",
                "price": "3 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-zhurnalnyy-stol-dzhokonda",
    name: "Журнальный стол «Джоконда»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Журнальные столы",
    price: "21 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-052-1.jpg",
    images: telegramTableChairGallery052,
    description: "Журнальный стол «Джоконда» для гостиной зоны. Модель добавлена с указанными размерами, ценой и фотографиями.",
    characteristics: [
          [
                "Подкатегория",
                "Журнальные столы"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "telegram-stol-riflenka-so-stulyami-suren-2",
    name: "Стол «Рифленка» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-053-1.jpg",
    images: telegramTableChairGallery053,
    description: "Стол «Рифленка» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-medalon-2",
    name: "Стол «Голд» со стульями «Медальон»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-054-1.jpg",
    images: telegramTableChairGallery054,
    description: "Стол «Голд» со стульями «Медальон» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Медальон» — 5 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Медальон»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-roza-2",
    name: "Стол «Лапка» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-055-1.jpg",
    images: telegramTableChairGallery055,
    description: "Стол «Лапка» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 3 700 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 90 × 80–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 90–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "3 700 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-mokko-so-stulyami-mokko",
    name: "Стол «Мокко» со стульями «Мокко»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 28 000 ₽",
    image: "/assets/telegram-table-chair-056-1.jpg",
    images: telegramTableChairGallery056,
    description: "Стол «Мокко» со стульями «Мокко» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мокко» — 5 400 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "28 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "29 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "30 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мокко»",
                "price": "5 400 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-mokko-so-stulyami-oval",
    name: "Стол «Мокко» со стульями «Овал»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 28 000 ₽",
    image: "/assets/telegram-table-chair-057-1.jpg",
    images: telegramTableChairGallery057,
    description: "Стол «Мокко» со стульями «Овал» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Овал» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "28 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "29 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "30 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Овал»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-universal-so-stulyami-korona",
    name: "Стол «Универсал» со стульями «Корона»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-058-1.jpg",
    images: telegramTableChairGallery058,
    description: "Стол «Универсал» со стульями «Корона» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Корона» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Корона»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-sablya-so-stulyami-infiniti",
    name: "Стол «Сабля» со стульями «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-059-1.jpg",
    images: telegramTableChairGallery059,
    description: "Стол «Сабля» со стульями «Инфинити» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Инфинити» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Инфинити»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-so-stulyami-suren-3",
    name: "Стол «Рифленка» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-060-1.jpg",
    images: telegramTableChairGallery060,
    description: "Стол «Рифленка» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-korona-2",
    name: "Стол «Роза» со стульями «Корона»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-061-1.jpg",
    images: telegramTableChairGallery061,
    description: "Стол «Роза» со стульями «Корона» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Корона» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Корона»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-rafaello-so-stulyami-silik",
    name: "Стол «Рафаэлло» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "45 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-062-1.jpg",
    images: telegramTableChairGallery062,
    description: "Стол «Рафаэлло» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 6 800 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-roza-3",
    name: "Стол «Лапка» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-063-1.jpg",
    images: telegramTableChairGallery063,
    description: "Стол «Лапка» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 3 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "3 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-so-stulyami-suren-4",
    name: "Стол «Рифленка» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-064-1.jpg",
    images: telegramTableChairGallery064,
    description: "Стол «Рифленка» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-so-stulyami-oval",
    name: "Стол «Рифленка» со стульями «Овал»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-065-1.jpg",
    images: telegramTableChairGallery065,
    description: "Стол «Рифленка» со стульями «Овал» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Овал» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Овал»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-sheyh-3",
    name: "Стол «Роза» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-066-1.jpg",
    images: telegramTableChairGallery066,
    description: "Стол «Роза» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 600 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh-6",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-067-1.jpg",
    images: telegramTableChairGallery067,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 600 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-roza-2",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-068-1.jpg",
    images: telegramTableChairGallery068,
    description: "Стол «Роза» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-zhurnalnyy-stol-markiza",
    name: "Журнальный стол «Маркиза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Журнальные столы",
    price: "21 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-069-1.jpg",
    images: telegramTableChairGallery069,
    description: "Журнальный стол «Маркиза» для гостиной зоны. Модель добавлена с указанными размерами, ценой и фотографиями.",
    characteristics: [
          [
                "Подкатегория",
                "Журнальные столы"
          ],
          [
                "Размер",
                "21.500"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "21.500",
                "price": "21 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-zhurnalnyy-stol-markiza-2",
    name: "Журнальный стол «Маркиза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Журнальные столы",
    price: "21 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-070-1.jpg",
    images: telegramTableChairGallery070,
    description: "Журнальный стол «Маркиза» для гостиной зоны. Модель добавлена с указанными размерами, ценой и фотографиями.",
    characteristics: [
          [
                "Подкатегория",
                "Журнальные столы"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
  },
  {
    slug: "telegram-stol-grand-so-stulyami-graciya",
    name: "Стол «Гранд» со стульями «Грация»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-071-1.jpg",
    images: telegramTableChairGallery071,
    description: "Стол «Гранд» со стульями «Грация» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Грация» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Грация»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-roza-3",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-072-1.jpg",
    images: telegramTableChairGallery072,
    description: "Стол «Роза» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-versache-so-stulyami-banan",
    name: "Стол «Роза Версаче» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-073-1.jpg",
    images: telegramTableChairGallery073,
    description: "Стол «Роза Версаче» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-gold-so-stulyami-banan",
    name: "Стол «Роза Голд» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-074-1.jpg",
    images: telegramTableChairGallery074,
    description: "Стол «Роза Голд» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-rafaello-so-stulyami-banan",
    name: "Стол «Рафаэлло» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "45 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-075-1.jpg",
    images: telegramTableChairGallery075,
    description: "Стол «Рафаэлло» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "200 × 250"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 250",
                "price": "45 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-borokko-so-stulyami-mini-sheyh",
    name: "Стол «Голд Борокко» со стульями «Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "36 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-076-1.jpg",
    images: telegramTableChairGallery076,
    description: "Стол «Голд Борокко» со стульями «Мини Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "200 × 240–"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх» — 4 600 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "36 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх»",
                "price": "4 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-mini-sheyh-s-pugovicami",
    name: "Стол «Роза» со стульями «Мини Шейх С Пуговицами»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-077-1.jpg",
    images: telegramTableChairGallery077,
    description: "Стол «Роза» со стульями «Мини Шейх С Пуговицами» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх С Пуговицами» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх С Пуговицами»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-banan",
    name: "Стулья «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 200 ₽ / шт.",
    image: "/assets/telegram-table-chair-078-1.jpg",
    images: telegramTableChairGallery078,
    description: "Стулья «Банан» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "4.200"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "4.200",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-palma-so-stulyami-banan",
    name: "Стол «Роза Пальма» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-079-1.jpg",
    images: telegramTableChairGallery079,
    description: "Стол «Роза Пальма» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-palma-so-stulyami-roza",
    name: "Стол «Роза Пальма» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-080-1.jpg",
    images: telegramTableChairGallery080,
    description: "Стол «Роза Пальма» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-ovalnyy-so-stulyami-silik",
    name: "Стол «Голд Овальный» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-081-1.jpg",
    images: telegramTableChairGallery081,
    description: "Стол «Голд Овальный» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-banan-2",
    name: "Стол «Роза» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-082-1.jpg",
    images: telegramTableChairGallery082,
    description: "Стол «Роза» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "22 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-roza-4",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-083-1.jpg",
    images: telegramTableChairGallery083,
    description: "Стол «Роза» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "22 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-rafaello-so-stulyami-mini-sheyh-s-pugovicami",
    name: "Стол «Рафаэлло» со стульями «Мини Шейх С Пуговицами»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "45 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-084-1.jpg",
    images: telegramTableChairGallery084,
    description: "Стол «Рафаэлло» со стульями «Мини Шейх С Пуговицами» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "200 × 250"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх С Пуговицами» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 250",
                "price": "45 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх С Пуговицами»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-borokko-so-stulyami-sheyhi",
    name: "Стол «Голд Борокко» со стульями «Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 26 000 ₽",
    image: "/assets/telegram-table-chair-085-1.jpg",
    images: telegramTableChairGallery085,
    description: "Стол «Голд Борокко» со стульями «Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "5 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Шейхи» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "280 ×–",
                "price": "26 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240 × 280–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "250 × 300–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 5",
                "dimensions": "300 × 350–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейхи»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-borokko-so-stulyami-silik",
    name: "Стол «Голд Борокко» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 26 000 ₽",
    image: "/assets/telegram-table-chair-086-1.jpg",
    images: telegramTableChairGallery086,
    description: "Стол «Голд Борокко» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "5 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "280 ×–",
                "price": "26 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240 × 280–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "250 × 300–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 5",
                "dimensions": "300 × 350–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-infiniti-so-stulyami-banan",
    name: "Стол «Инфинити» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-087-1.jpg",
    images: telegramTableChairGallery087,
    description: "Стол «Инфинити» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-roza",
    name: "Стулья «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-088-1.jpg",
    images: telegramTableChairGallery088,
    description: "Стулья «Роза» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "4.000"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "4.000",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-ovalnyy-so-stulyami-banan",
    name: "Стол «Голд Овальный» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-089-1.jpg",
    images: telegramTableChairGallery089,
    description: "Стол «Голд Овальный» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-stefani-so-stulyami-banan",
    name: "Стол «Стефани» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 28 000 ₽",
    image: "/assets/telegram-table-chair-090-1.jpg",
    images: telegramTableChairGallery090,
    description: "Стол «Стефани» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200–",
                "price": "28 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "29 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-borokko-so-stulyami-sheyh",
    name: "Стол «Голд Борокко» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 38 000 ₽",
    image: "/assets/telegram-table-chair-091-1.jpg",
    images: telegramTableChairGallery091,
    description: "Стол «Голд Борокко» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "4 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "250 × 300–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "300 × 350–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-infiniti",
    name: "Стулья «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-092-1.jpg",
    images: telegramTableChairGallery092,
    description: "Стулья «Инфинити» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "4.500"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "4.500",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-silik",
    name: "Стулья «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "7 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-093-1.jpg",
    images: telegramTableChairGallery093,
    description: "Стулья «Силик» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "7.000"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "7.000",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-silik",
    name: "Стол «Лапка» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-094-1.jpg",
    images: telegramTableChairGallery094,
    description: "Стол «Лапка» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-borokko-so-stulyami-sheyh-2",
    name: "Стол «Голд Борокко» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 38 000 ₽",
    image: "/assets/telegram-table-chair-095-1.jpg",
    images: telegramTableChairGallery095,
    description: "Стол «Голд Борокко» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "4 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "250 × 300–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "300 × 350–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-mini-sheyh",
    name: "Стулья «Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 600 ₽ / шт.",
    image: "/assets/telegram-table-chair-096-1.jpg",
    images: telegramTableChairGallery096,
    description: "Стулья «Мини Шейх» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "4.600"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "4.600",
                "price": "4 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-sheyh-4",
    name: "Стол «Роза» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-097-1.jpg",
    images: telegramTableChairGallery097,
    description: "Стол «Роза» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-kruglyy-so-stulyami-silik",
    name: "Стол «Роза Круглый» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "23 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-098-1.jpg",
    images: telegramTableChairGallery098,
    description: "Стол «Роза Круглый» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "23.500"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "23.500",
                "price": "23 500 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-so-stulyami-sheyh-3",
    name: "Стол «Лапка» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-099-1.jpg",
    images: telegramTableChairGallery099,
    description: "Стол «Лапка» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-bolshie-sheyhi-3",
    name: "Стол «Голд» со стульями «Большие Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-100-1.jpg",
    images: telegramTableChairGallery100,
    description: "Стол «Голд» со стульями «Большие Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Большие Шейхи» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280–",
                "price": "37 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "300 × 350–",
                "price": "40 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Большие Шейхи»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-siliki",
    name: "Стол «Голд» со стульями «Силики»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-101-1.jpg",
    images: telegramTableChairGallery101,
    description: "Стол «Голд» со стульями «Силики» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Силики» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280–",
                "price": "37 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "300 × 350–",
                "price": "40 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силики»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-reflenka-so-stulyami-infiniti",
    name: "Стол «Рефленка» со стульями «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "25 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-102-1.jpg",
    images: telegramTableChairGallery102,
    description: "Стол «Рефленка» со стульями «Инфинити» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 × 240–"
          ],
          [
                "Дополнительно",
                "Стулья «Инфинити» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2 × 240–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Инфинити»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-kubik-so-stulyami-medalon",
    name: "Стол «Кубик» со стульями «Медальон»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-103-1.jpg",
    images: telegramTableChairGallery103,
    description: "Стол «Кубик» со стульями «Медальон» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Медальон» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Медальон»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-infiniti-so-stulyami-infiniti",
    name: "Стол «Инфинити» со стульями «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-104-1.jpg",
    images: telegramTableChairGallery104,
    description: "Стол «Инфинити» со стульями «Инфинити» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Инфинити» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.20 × 1.60–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "1.60 × 2.00–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "2.00 × 2.40–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Инфинити»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-infiniti-so-stulyami-medalony",
    name: "Стол «Инфинити» со стульями «Медальоны»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-105-1.jpg",
    images: telegramTableChairGallery105,
    description: "Стол «Инфинити» со стульями «Медальоны» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Медальоны» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Медальоны»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-mini-sheyhi",
    name: "Стол «Роза» со стульями «Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-106-1.jpg",
    images: telegramTableChairGallery106,
    description: "Стол «Роза» со стульями «Мини Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейхи» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейхи»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-orhideya-so-stulyami-medalon",
    name: "Стол «Орхидея» со стульями «Медальон»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "30 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-107-1.jpg",
    images: telegramTableChairGallery107,
    description: "Стол «Орхидея» со стульями «Медальон» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Медальон» — 5 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Медальон»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyhi",
    name: "Стол «Голд» со стульями «Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-108-1.jpg",
    images: telegramTableChairGallery108,
    description: "Стол «Голд» со стульями «Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Шейхи» — 6 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Шейхи»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-mini-sheyhi-2",
    name: "Стол «Роза» со стульями «Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-109-1.jpg",
    images: telegramTableChairGallery109,
    description: "Стол «Роза» со стульями «Мини Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейхи» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейхи»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-mini-sheyhi-4",
    name: "Стол «Голд» со стульями «Мини-Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/telegram-table-chair-110-1.jpg",
    images: telegramTableChairGallery110,
    description: "Стол «Голд» со стульями «Мини-Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейхи» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2.00 × 2.40 × 1.00–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "2.40 × 2.80 × 1.10–",
                "price": "37 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "3.00 × 3.50 × 1.10–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейхи»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-versache",
    name: "Стулья «Версаче»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "3 200 ₽ / шт.",
    image: "/assets/telegram-table-chair-111-1.jpg",
    images: telegramTableChairGallery111,
    description: "Стулья «Версаче» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "3.200"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "3.200",
                "price": "3 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-infiniti-2",
    name: "Стулья «Инфинити-2»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "3 900 ₽ / шт.",
    image: "/assets/telegram-table-chair-112-1.jpg",
    images: telegramTableChairGallery112,
    description: "Стулья «Инфинити-2» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "3.900"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "3.900",
                "price": "3 900 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-siliki",
    name: "Стулья «Силики»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "6 800 ₽ / шт.",
    image: "/assets/telegram-table-chair-113-1.jpg",
    images: telegramTableChairGallery113,
    description: "Стулья «Силики» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "6.800"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "6.800",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-mini-sheyhi",
    name: "Стулья «Мини-Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "5 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-114-1.jpg",
    images: telegramTableChairGallery114,
    description: "Стулья «Мини-Шейхи» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "5.000"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "5.000",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-mini-sheyhi-2",
    name: "Стулья «Мини-Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-115-1.jpg",
    images: telegramTableChairGallery115,
    description: "Стулья «Мини-Шейхи» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "4.500"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "4.500",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-zhurnalnyy-stol-dario",
    name: "Журнальный стол «Дарио»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Журнальные столы",
    price: "21 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-116-1.jpg",
    images: telegramTableChairGallery116,
    description: "Журнальный стол «Дарио» для гостиной зоны. Модель добавлена с указанными размерами, ценой и фотографиями.",
    characteristics: [
          [
                "Подкатегория",
                "Журнальные столы"
          ]
    ],
  },
  {
    slug: "telegram-stol-haytek-so-stulyami-infiniti",
    name: "Стол «Хайтек» со стульями «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 20 500 ₽",
    image: "/assets/telegram-table-chair-117-1.jpg",
    images: telegramTableChairGallery117,
    description: "Стол «Хайтек» со стульями «Инфинити» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "4 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Инфинити» — 3 600 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.00 × 1.40–20.500",
                "price": "20 500 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "1.20 × 1.60–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "1.60 × 2.00–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "2.00 × 2.40–22.500",
                "price": "22 500 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Инфинити»",
                "price": "3 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-sablya-so-stulyami-infiniti-2",
    name: "Стол «Сабля» со стульями «Инфинити»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "25 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-118-1.jpg",
    images: telegramTableChairGallery118,
    description: "Стол «Сабля» со стульями «Инфинити» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2.00 × 2.40 × 1.00–"
          ],
          [
                "Дополнительно",
                "Стулья «Инфинити» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2.00 × 2.40 × 1.00–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Инфинити»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-sablya-so-stulyami-venskie",
    name: "Стол «Сабля» со стульями «Венские»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "25 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-119-1.jpg",
    images: telegramTableChairGallery119,
    description: "Стол «Сабля» со стульями «Венские» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2.00 × 2.40 × 1.00–"
          ],
          [
                "Дополнительно",
                "Стулья «Венские» — 3 600 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2.00 × 2.40 × 1.00–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Венские»",
                "price": "3 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-mini-sheyh-i-silik",
    name: "Стол «Голд» со стульями «Мини-Шейх и Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/telegram-table-chair-120-1.jpg",
    images: telegramTableChairGallery120,
    description: "Стол «Голд» со стульями «Мини-Шейх и Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейх» — 4 500 ₽ / шт.; Стулья «Силик» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2.00 × 2.40 × 1.00–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "2.40 × 2.80 × 1.10–",
                "price": "37 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "3.00 × 3.50 × 1.20–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейх»",
                "price": "4 500 ₽ / шт."
          },
          {
                "label": "Стулья «Силик»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-suren-lyuks",
    name: "Стулья «Сурен-Люкс»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "7 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-121-1.jpg",
    images: telegramTableChairGallery121,
    description: "Стулья «Сурен-Люкс» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "7.000"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "7.000",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-suren",
    name: "Стулья «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "6 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-122-1.jpg",
    images: telegramTableChairGallery122,
    description: "Стулья «Сурен» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "6.500"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "6.500",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-mini-sheyh",
    name: "Стол «Роза» со стульями «Мини-Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "23 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-123-1.jpg",
    images: telegramTableChairGallery123,
    description: "Стол «Роза» со стульями «Мини-Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "1.60 × 2.00 × 90–"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейх» — 4 600 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.60 × 2.00 × 90–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейх»",
                "price": "4 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-mini-sheyh-2",
    name: "Стол «Голд» со стульями «Мини-Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "37 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-124-1.jpg",
    images: telegramTableChairGallery124,
    description: "Стол «Голд» со стульями «Мини-Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2.40 × 2.80 × 1.10–"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейх» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2.40 × 2.80 × 1.10–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-roza-5",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-125-1.jpg",
    images: telegramTableChairGallery125,
    description: "Стол «Роза» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 3 700 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.20 × 1.60–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "1.60 × 2.00–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "2.00 × 2.40–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "3 700 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-suren",
    name: "Стол «Роза» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-126-1.jpg",
    images: telegramTableChairGallery126,
    description: "Стол «Роза» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.20 × 1.60–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "1.60 × 2.00–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "2.00 × 2.40–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-zhurnalnyy-stol-markiza-pryamoy",
    name: "Журнальный стол «Маркиза-Прямой»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Журнальные столы",
    price: "21 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-127-1.jpg",
    images: telegramTableChairGallery127,
    description: "Журнальный стол «Маркиза-Прямой» для гостиной зоны. Модель добавлена с указанными размерами, ценой и фотографиями.",
    characteristics: [
          [
                "Подкатегория",
                "Журнальные столы"
          ]
    ],
  },
  {
    slug: "telegram-stulya-suren-2",
    name: "Стулья «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "5 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-128-1.jpg",
    images: telegramTableChairGallery128,
    description: "Стулья «Сурен» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "5.500"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "5.500",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-roza-2",
    name: "Стулья «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "3 700 ₽ / шт.",
    image: "/assets/telegram-table-chair-129-1.jpg",
    images: telegramTableChairGallery129,
    description: "Стулья «Роза» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "3.700"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "3.700",
                "price": "3 700 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-ingolf",
    name: "Стулья «Ингольф»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "3 700 ₽ / шт.",
    image: "/assets/telegram-table-chair-130-1.jpg",
    images: telegramTableChairGallery130,
    description: "Стулья «Ингольф» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "3.700"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "3.700",
                "price": "3 700 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-stambul-2-so-stulyami-suren",
    name: "Стол «Стамбул-2» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 32 000 ₽",
    image: "/assets/telegram-table-chair-131-1.jpg",
    images: telegramTableChairGallery131,
    description: "Стол «Стамбул-2» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.60 × 2.00–",
                "price": "32 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "2.00 × 2.40–",
                "price": "34 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-krestik-2",
    name: "Стулья «Крестик-2»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "3 700 ₽ / шт.",
    image: "/assets/telegram-table-chair-132-1.jpg",
    images: telegramTableChairGallery132,
    description: "Стулья «Крестик-2» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "3.700"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "3.700",
                "price": "3 700 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-stambul-so-stulyami-suren",
    name: "Стол «Стамбул» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 31 000 ₽",
    image: "/assets/telegram-table-chair-133-1.jpg",
    images: telegramTableChairGallery133,
    description: "Стол «Стамбул» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.60 × 2.00–",
                "price": "31 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "2.00 × 2.40–",
                "price": "33 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-gold-so-stulyami-roza",
    name: "Стол «Лапка-Gold» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-134-1.jpg",
    images: telegramTableChairGallery134,
    description: "Стол «Лапка-Gold» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 3 700 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.60 × 2.00 × 90–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "2.00 × 2.40 × 1.00–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "3 700 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-mini-sheyh-3",
    name: "Стол «Голд» со стульями «Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 41 000 ₽",
    image: "/assets/telegram-table-chair-135-1.jpg",
    images: telegramTableChairGallery135,
    description: "Стол «Голд» со стульями «Мини Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "4 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 110 × 80–",
                "price": "41 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "43 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "300–350 × 110 × 80–",
                "price": "45 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "400–500 × 110 × 80–",
                "price": "55 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-sablya-so-stulyami-mini-sheyhi",
    name: "Стол «Сабля» со стульями «Мини-Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "25 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-136-1.jpg",
    images: telegramTableChairGallery136,
    description: "Стол «Сабля» со стульями «Мини-Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2.00 × 2.40 × 1.00–"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейхи» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2.00 × 2.40 × 1.00–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейхи»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-reflennyy-so-stulyami-mini-sheyhi",
    name: "Стол «Голд-Рефльенный» со стульями «Мини-Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "41 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-137-1.jpg",
    images: telegramTableChairGallery137,
    description: "Стол «Голд-Рефльенный» со стульями «Мини-Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2.40 × 2.80 × 1.10–"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейхи» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2.40 × 2.80 × 1.10–",
                "price": "41 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейхи»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-versachi-so-stulyami-versachi",
    name: "Стол «Лапка-Версачи» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-138-1.jpg",
    images: telegramTableChairGallery138,
    description: "Стол «Лапка-Версачи» со стульями «Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Версачи» — 3 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.60 × 2.00 × 90–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "2.00 × 2.40 × 1.00–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версачи»",
                "price": "3 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-suren-2",
    name: "Стол «Голд» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "35 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-139-1.jpg",
    images: telegramTableChairGallery139,
    description: "Стол «Голд» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-mramor-so-stulyami-roza",
    name: "Стол «Лапка-Мрамор» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-140-1.jpg",
    images: telegramTableChairGallery140,
    description: "Стол «Лапка-Мрамор» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 3 700 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "1.60 × 2.00 × 90–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "2.00 × 2.40 × 1.00–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "3 700 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-sheyh-original",
    name: "Стулья «Шейх-Оригинал»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "5 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-141-1.jpg",
    images: telegramTableChairGallery141,
    description: "Стулья «Шейх-Оригинал» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "5.000"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "5.000",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-emiliya-so-stulyami-mini-sheyhi",
    name: "Стол «Эмилия» со стульями «Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "43 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-142-1.jpg",
    images: telegramTableChairGallery142,
    description: "Стол «Эмилия» со стульями «Мини Шейхи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Производство",
                "Армавир"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейхи» — 4 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейхи»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-zhurnalnyy-stol-barokko",
    name: "Журнальный стол «Барокко»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Журнальные столы",
    price: "25 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-143-1.jpg",
    images: telegramTableChairGallery143,
    description: "Журнальный стол «Барокко» для гостиной зоны. Модель добавлена с указанными размерами, ценой и фотографиями.",
    characteristics: [
          [
                "Подкатегория",
                "Журнальные столы"
          ]
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-siliki-2",
    name: "Стол «Голд» со стульями «Силики»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-144-1.jpg",
    images: telegramTableChairGallery144,
    description: "Стол «Голд» со стульями «Силики» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Дополнительно",
                "Стулья «Силики» — 7 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Силики»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-london-so-stulyami-loft",
    name: "Стол «Лондон» со стульями «ЛОФТ»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-145-1.jpg",
    images: telegramTableChairGallery145,
    description: "Стол «Лондон» со стульями «ЛОФТ» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «ЛОФТ» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240",
                "price": "36 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «ЛОФТ»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-graciya-so-stulyami-pegas",
    name: "Стол «Грация» со стульями «Пегас»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 45 000 ₽",
    image: "/assets/telegram-table-chair-146-1.jpg",
    images: telegramTableChairGallery146,
    description: "Стол «Грация» со стульями «Пегас» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Пегас» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240 × 110 × 80–",
                "price": "45 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "270 × 110 × 80–",
                "price": "46 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Пегас»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lenta-so-stulyami-suren",
    name: "Стол «Лента» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 31 000 ₽",
    image: "/assets/telegram-table-chair-147-1.jpg",
    images: telegramTableChairGallery147,
    description: "Стол «Лента» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "31 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "30 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-afina-so-stulyami-suren",
    name: "Стол «Афина» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "30 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-148-1.jpg",
    images: telegramTableChairGallery148,
    description: "Стол «Афина» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "160 × 200–"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200–",
                "price": "30 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-milan-so-stulyami-suren",
    name: "Стол «Милан» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "45 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-149-1.jpg",
    images: telegramTableChairGallery149,
    description: "Стол «Милан» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "200 × 240 × 100–"
          ],
          [
                "Материал",
                "МДФ"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240 × 100–",
                "price": "45 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-kruglyy-so-stulyami-mini-sheyh-2",
    name: "Стол «Голд Круглый» со стульями «Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-150-1.jpg",
    images: telegramTableChairGallery150,
    description: "Стол «Голд Круглый» со стульями «Мини Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120 × 160–26.500"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–26.500",
                "price": "26 500 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-kruglyy-razdvizhnoy-so-stulyami-suren",
    name: "Стол «Рифленка Круглый Раздвижной» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "32 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-151-1.jpg",
    images: telegramTableChairGallery151,
    description: "Стол «Рифленка Круглый Раздвижной» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120 × 120 × 80–"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 120 × 80–",
                "price": "32 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-versache-so-stulyami-versache",
    name: "Стол «Лапка Версаче» со стульями «Версаче»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-152-1.jpg",
    images: telegramTableChairGallery152,
    description: "Стол «Лапка Версаче» со стульями «Версаче» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Версаче» — 3 300 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200 × 90–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240 × 100–",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версаче»",
                "price": "3 300 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lapka-mramor-so-stulyami-silik",
    name: "Стол «Лапка Мрамор» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 24 000 ₽",
    image: "/assets/telegram-table-chair-153-1.jpg",
    images: telegramTableChairGallery153,
    description: "Стол «Лапка Мрамор» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160 × 80–",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200 × 90–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240 × 100–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stulya-silik-2",
    name: "Стулья «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "6 800 ₽ / шт.",
    image: "/assets/telegram-table-chair-154-1.jpg",
    images: telegramTableChairGallery154,
    description: "Стулья «Силик» для кухни или столовой зоны. Краткая карточка с ценой и фотографиями товара.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Размер",
                "6.800"
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "6.800",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-riflenka-oval-razdvizhnoy-so-stulyami-suren",
    name: "Стол «Рифленка Овал Раздвижной» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-155-1.jpg",
    images: telegramTableChairGallery155,
    description: "Стол «Рифленка Овал Раздвижной» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200 × 90–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240 × 100–",
                "price": "26 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-ingolf-so-stulyami-vegas",
    name: "Стол «Ингольф» со стульями «Вегас»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/telegram-table-chair-156-1.jpg",
    images: telegramTableChairGallery156,
    description: "Стол «Ингольф» со стульями «Вегас» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Вегас» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200 × 90–",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240 × 100–",
                "price": "24 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Вегас»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-ingolf-so-stulyami-ingolf",
    name: "Стол «Ингольф» со стульями «Ингольф»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/telegram-table-chair-157-1.jpg",
    images: telegramTableChairGallery157,
    description: "Стол «Ингольф» со стульями «Ингольф» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Ингольф» — 3 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200 × 90–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240 × 100–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Ингольф»",
                "price": "3 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-ezhik-razdvizhnoy-so-stulyami-suren",
    name: "Стол «Ежик Раздвижной» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 28 000 ₽",
    image: "/assets/telegram-table-chair-158-1.jpg",
    images: telegramTableChairGallery158,
    description: "Стол «Ежик Раздвижной» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Материал",
                "ы:"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200 × 90–",
                "price": "28 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240 × 100–",
                "price": "29 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-milan-so-stulyami-medalon",
    name: "Стол «Милан» со стульями «Медальон»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "45 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-159-1.jpg",
    images: telegramTableChairGallery159,
    description: "Стол «Милан» со стульями «Медальон» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "200 × 240 × 100–"
          ],
          [
                "Материал",
                "МДФ"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Медальон» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240 × 100–",
                "price": "45 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Медальон»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-izabel-so-stulyami-milen",
    name: "Стол «Изабель» со стульями «Милен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "45 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-160-1.jpg",
    images: telegramTableChairGallery160,
    description: "Стол «Изабель» со стульями «Милен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "280 × 110–"
          ],
          [
                "Материал",
                "МДФ"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Милен» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "280 × 110–",
                "price": "45 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Милен»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-fabi-so-stulyami-pegas-kombi",
    name: "Стол «Фаби» со стульями «Пегас Комби»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 25 000 ₽",
    image: "/assets/telegram-table-chair-161-1.jpg",
    images: telegramTableChairGallery161,
    description: "Стол «Фаби» со стульями «Пегас Комби» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Пегас Комби» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160 × 80–",
                "price": "25 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200 × 90–26.500",
                "price": "26 500 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240 × 100–28.500",
                "price": "28 500 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Пегас Комби»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-monreal-so-stulyami-suren",
    name: "Стол «Монреаль» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "47 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-162-1.jpg",
    images: telegramTableChairGallery162,
    description: "Стол «Монреаль» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "240–"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240–",
                "price": "47 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-silik-2",
    name: "Стол «Голд» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/telegram-table-chair-163-1.jpg",
    images: telegramTableChairGallery163,
    description: "Стол «Голд» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 110 × 80–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "300–350 × 110 × 80–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-borokko-so-stulyami-silik-2",
    name: "Стол «Голд Борокко» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/telegram-table-chair-164-1.jpg",
    images: telegramTableChairGallery164,
    description: "Стол «Голд Борокко» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "4 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 240–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "250 × 300–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "300 × 350–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh-7",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-165-1.jpg",
    images: telegramTableChairGallery165,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–250 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh-8",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-166-1.jpg",
    images: telegramTableChairGallery166,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–250 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-sheyh-9",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/telegram-table-chair-167-1.jpg",
    images: telegramTableChairGallery167,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 100 × 80–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "38 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-silik-3",
    name: "Стол «Голд» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/telegram-table-chair-168-1.jpg",
    images: telegramTableChairGallery168,
    description: "Стол «Голд» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "4 варианта"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–240 × 100 × 80–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "38 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "250–300 × 110 × 80–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "300–350 × 110 × 80–",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-gold-so-stulyami-silik-4",
    name: "Стол «Голд» со стульями «Силик»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 35 000 ₽",
    image: "/assets/telegram-table-chair-169-1.jpg",
    images: telegramTableChairGallery169,
    description: "Стол «Голд» со стульями «Силик» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Силик» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–250 × 100 × 80–",
                "price": "35 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–280 × 110 × 80–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Силик»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-roza-so-stulyami-versache",
    name: "Стол «Роза» со стульями «Версаче»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 21 000 ₽",
    image: "/assets/telegram-table-chair-170-1.jpg",
    images: telegramTableChairGallery170,
    description: "Стол «Роза» со стульями «Версаче» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Версаче» — 3 300 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120–160 × 80 × 80–",
                "price": "21 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160–200 × 90 × 80–",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200–240 × 100 × 80–",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Версаче»",
                "price": "3 300 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-piramida-so-stulyami-skandi-kreslo-i-a",
    name: "Стол «Пирамида» со стульями «Сканди-Кресло и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 52 000 ₽",
    image: "/assets/telegram-table-chair-171-1.jpg",
    images: telegramTableChairGallery171,
    description: "Стол «Пирамида» со стульями «Сканди-Кресло и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Кресло» — 8 500 ₽ / шт.; Стулья «А» — 8 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–",
                "price": "52 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–",
                "price": "54 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "280–",
                "price": "56 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Кресло»",
                "price": "8 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "8 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-diamond-daymond-so-stulyami-skandi-lyuks-i-a",
    name: "Стол «Diamond-Даймонд» со стульями «Сканди-Люкс и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/telegram-table-chair-172-1.jpg",
    images: telegramTableChairGallery172,
    description: "Стол «Diamond-Даймонд» со стульями «Сканди-Люкс и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Люкс» — 7 500 ₽ / шт.; Стулья «А» — 7 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200–",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "37 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Люкс»",
                "price": "7 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "7 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-avrora-so-stulyami-skandi-lyuks-i-a",
    name: "Стол «Аврора» со стульями «Сканди-Люкс и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 42 000 ₽",
    image: "/assets/telegram-table-chair-173-1.jpg",
    images: telegramTableChairGallery173,
    description: "Стол «Аврора» со стульями «Сканди-Люкс и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Люкс» — 7 500 ₽ / шт.; Стулья «А» — 7 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200–",
                "price": "42 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "44 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Люкс»",
                "price": "7 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "7 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lion-so-stulyami-skandi-kreslo-i-a",
    name: "Стол «Лион» со стульями «Сканди-Кресло и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 50 000 ₽",
    image: "/assets/telegram-table-chair-174-1.jpg",
    images: telegramTableChairGallery174,
    description: "Стол «Лион» со стульями «Сканди-Кресло и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Кресло» — 8 500 ₽ / шт.; Стулья «А» — 8 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–",
                "price": "51 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "280–",
                "price": "52 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Кресло»",
                "price": "8 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "8 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-alfa-so-stulyami-skandi-lyuks-i-a",
    name: "Стол «Альфа» со стульями «Сканди-Люкс и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 49 000 ₽",
    image: "/assets/telegram-table-chair-175-1.jpg",
    images: telegramTableChairGallery175,
    description: "Стол «Альфа» со стульями «Сканди-Люкс и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Люкс» — 7 000 ₽ / шт.; Стулья «А» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–",
                "price": "49 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "270–",
                "price": "51 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Люкс»",
                "price": "7 000 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-estel-so-stulyami-skandi-lyuks-i-a",
    name: "Стол «Эстель» со стульями «Сканди-Люкс и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "7 500 ₽ / шт.",
    image: "/assets/telegram-table-chair-176-1.jpg",
    images: telegramTableChairGallery176,
    description: "Стол «Эстель» со стульями «Сканди-Люкс и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Люкс» — 7 500 ₽ / шт.; Стулья «А» — 7 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Люкс»",
                "price": "7 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "7 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-mr-so-stulyami-mobello-i-a",
    name: "Стол «МР» со стульями «Мобелло и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 65 000 ₽",
    image: "/assets/telegram-table-chair-177-1.jpg",
    images: telegramTableChairGallery177,
    description: "Стол «МР» со стульями «Мобелло и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мобелло» — 12 000 ₽ / шт.; Стулья «А» — 12 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240–",
                "price": "65 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "280–",
                "price": "70 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мобелло»",
                "price": "12 000 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "12 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-estel-so-stulyami-skandi-kreslo",
    name: "Стол «Эстель» со стульями «Сканди-Кресло»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 49 000 ₽",
    image: "/assets/telegram-table-chair-178-1.jpg",
    images: telegramTableChairGallery178,
    description: "Стол «Эстель» со стульями «Сканди-Кресло» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Производство",
                "Россия"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Кресло» — 8 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–",
                "price": "49 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "280–",
                "price": "51 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Кресло»",
                "price": "8 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-plaza-so-stulyami-graciya-i-a",
    name: "Стол «Плаза» со стульями «Грация и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 45 000 ₽",
    image: "/assets/telegram-table-chair-179-1.jpg",
    images: telegramTableChairGallery179,
    description: "Стол «Плаза» со стульями «Грация и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Грация» — 6 500 ₽ / шт.; Стулья «А» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240–",
                "price": "45 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "280–",
                "price": "47 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Грация»",
                "price": "6 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-graciya-so-stulyami-milen-i-a",
    name: "Стол «Грация» со стульями «Милен и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-180-1.jpg",
    images: telegramTableChairGallery180,
    description: "Стол «Грация» со стульями «Милен и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Милен» — 6 800 ₽ / шт.; Стулья «А» — 6 800 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "280–",
                "price": "35 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Милен»",
                "price": "6 800 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "6 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-estel-so-stulyami-skandi-i-a",
    name: "Стол «Эстель» со стульями «Сканди и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 49 000 ₽",
    image: "/assets/telegram-table-chair-181-1.jpg",
    images: telegramTableChairGallery181,
    description: "Стол «Эстель» со стульями «Сканди и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди» — 8 500 ₽ / шт.; Стулья «А» — 8 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–",
                "price": "49 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "280–",
                "price": "51 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди»",
                "price": "8 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "8 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-shanel-so-stulyami-graciya-i-a",
    name: "Стол «Шанель» со стульями «Грация и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 46 000 ₽",
    image: "/assets/telegram-table-chair-182-1.jpg",
    images: telegramTableChairGallery182,
    description: "Стол «Шанель» со стульями «Грация и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Грация» — 6 500 ₽ / шт.; Стулья «А» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240–",
                "price": "46 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "280–",
                "price": "48 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Грация»",
                "price": "6 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-nord-so-stulyami-shah-i-a",
    name: "Стол «Норд» со стульями «Шах и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 47 000 ₽",
    image: "/assets/telegram-table-chair-183-1.jpg",
    images: telegramTableChairGallery183,
    description: "Стол «Норд» со стульями «Шах и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шах» — 8 500 ₽ / шт.; Стулья «А» — 8 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–",
                "price": "47 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–",
                "price": "48 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шах»",
                "price": "8 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "8 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-komplekt-samur",
    name: "Комплект «Самур»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "130 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-184-1.jpg",
    images: telegramTableChairGallery184,
    description: "Комплект «Самур» для кухни или столовой зоны. В карточке сохранены размеры, цена и основные характеристики из описания.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "Цвет",
                "Орех"
          ],
          [
                "Материал",
                "МДФ, Бук"
          ],
          [
                "Производство",
                "Россия"
          ]
    ],
  },
  {
    slug: "telegram-stol-skandi-luchi-so-stulyami-plaza-lyuks",
    name: "Стол «Сканди-Лучи» со стульями «Плаза-Люкс»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 42 000 ₽",
    image: "/assets/telegram-table-chair-185-1.jpg",
    images: telegramTableChairGallery185,
    description: "Стол «Сканди-Лучи» со стульями «Плаза-Люкс» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Цвет",
                "Орех"
          ],
          [
                "Материал",
                "МДФ, Бук"
          ],
          [
                "Производство",
                "Россия"
          ],
          [
                "Дополнительно",
                "Стулья «Плаза-Люкс» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240–",
                "price": "42 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "45 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "160 × 200–",
                "price": "40 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Плаза-Люкс»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-versal-so-stulyami-skandi",
    name: "Стол «Версаль» со стульями «Сканди»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "48 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-186-1.jpg",
    images: telegramTableChairGallery186,
    description: "Стол «Версаль» со стульями «Сканди» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Цвет",
                "Орех/белый"
          ],
          [
                "Производство",
                "Россия"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди» — 8 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Сканди»",
                "price": "8 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-kraun-so-stulyami-skandi-kreslo",
    name: "Стол «Краун» со стульями «Сканди-Кресло»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 48 000 ₽",
    image: "/assets/telegram-table-chair-187-1.jpg",
    images: telegramTableChairGallery187,
    description: "Стол «Краун» со стульями «Сканди-Кресло» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Цвет",
                "Орех"
          ],
          [
                "Производство",
                "Россия"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Кресло» — 8 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 110–",
                "price": "48 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 110–",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "280 × 110–",
                "price": "52 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Кресло»",
                "price": "8 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-versal-so-stulyami-inchi",
    name: "Стол «Версаль» со стульями «Инчи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-188-1.jpg",
    images: telegramTableChairGallery188,
    description: "Стол «Версаль» со стульями «Инчи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "240 × 110–"
          ],
          [
                "Цвет",
                "Орех/белый"
          ],
          [
                "Производство",
                "Россия - Турция"
          ],
          [
                "Дополнительно",
                "Стулья «Инчи» — 12 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240 × 110–",
                "price": "55 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Инчи»",
                "price": "12 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-naomi-so-stulyami-skandi-i-a",
    name: "Стол «Наоми» со стульями «Сканди и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 45 000 ₽",
    image: "/assets/telegram-table-chair-189-1.jpg",
    images: telegramTableChairGallery189,
    description: "Стол «Наоми» со стульями «Сканди и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди» — 8 000 ₽ / шт.; Стулья «А» — 8 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "140–",
                "price": "45 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "120–",
                "price": "52 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди»",
                "price": "8 000 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "8 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-samur-so-stulyami-inchi",
    name: "Стол «Самур» со стульями «Инчи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "53 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-190-1.jpg",
    images: telegramTableChairGallery190,
    description: "Стол «Самур» со стульями «Инчи» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "160 × 200–"
          ],
          [
                "Цвет",
                "Орех"
          ],
          [
                "Производство",
                "Россия"
          ],
          [
                "Дополнительно",
                "Стулья «Инчи» — 13 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200–",
                "price": "53 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Инчи»",
                "price": "13 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-efsun-so-stulyami-maybah",
    name: "Стол «Эфсун» со стульями «Майбах»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "48 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-191-1.jpg",
    images: telegramTableChairGallery191,
    description: "Стол «Эфсун» со стульями «Майбах» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "240 × 110–"
          ],
          [
                "Материал",
                "стола «МДФ» крашенный. Работа художников - мастеров с имитацией дерева (ручная работа)"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Майбах» — 12 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240 × 110–",
                "price": "48 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Майбах»",
                "price": "12 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-boston-so-stulyami-suren",
    name: "Стол «Бостон» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 34 000 ₽",
    image: "/assets/telegram-table-chair-192-1.jpg",
    images: telegramTableChairGallery192,
    description: "Стол «Бостон» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Цвет",
                "а в наличии: бел/серебро и беж/золото"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "2.40–",
                "price": "34 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "2.70–",
                "price": "35 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-greciya-so-stulyami-izabel-2",
    name: "Стол «Греция» со стульями «Изабель 2»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 49 000 ₽",
    image: "/assets/telegram-table-chair-193-1.jpg",
    images: telegramTableChairGallery193,
    description: "Стол «Греция» со стульями «Изабель 2» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Изабель 2» — 10 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200  ×  110–",
                "price": "49 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240  ×  110–",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "280  ×  110–",
                "price": "61 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Изабель 2»",
                "price": "10 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-piramida-so-stulyami-lina-kresla",
    name: "Стол «Пирамида» со стульями «Лина-Кресла»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 48 000 ₽",
    image: "/assets/telegram-table-chair-194-1.jpg",
    images: telegramTableChairGallery194,
    description: "Стол «Пирамида» со стульями «Лина-Кресла» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Производство",
                "Дагестан"
          ],
          [
                "Дополнительно",
                "Стулья «Лина-Кресла» — 8 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "240–",
                "price": "48 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "280–",
                "price": "49 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Лина-Кресла»",
                "price": "8 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-lotos-so-stulyami-lotos-i-a",
    name: "Стол «Лотос» со стульями «Лотос и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 44 000 ₽",
    image: "/assets/telegram-table-chair-195-1.jpg",
    images: telegramTableChairGallery195,
    description: "Стол «Лотос» со стульями «Лотос и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Лотос» — 9 000 ₽ / шт.; Стулья «А» — 9 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 100–",
                "price": "44 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 110–",
                "price": "45 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "280 × 110–",
                "price": "46 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Лотос»",
                "price": "9 000 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "9 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-barokko-so-stulyami-brauni-i-a",
    name: "Стол «БАРОККО» со стульями «Брауни и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 50 000 ₽",
    image: "/assets/telegram-table-chair-196-1.jpg",
    images: telegramTableChairGallery196,
    description: "Стол «БАРОККО» со стульями «Брауни и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Брауни» — 8 000 ₽ / шт.; Стулья «А» — 8 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 100–",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 110–",
                "price": "52 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "270 × 110–",
                "price": "54 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Брауни»",
                "price": "8 000 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "8 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-skandi-lyuks-so-stulyami-skandi-lyuks-i-skandi-kreslo",
    name: "Стол «Сканди-Люкс» со стульями «Сканди Люкс и Сканди-Кресло»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 31 000 ₽",
    image: "/assets/telegram-table-chair-197-1.jpg",
    images: telegramTableChairGallery197,
    description: "Стол «Сканди-Люкс» со стульями «Сканди Люкс и Сканди-Кресло» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Цвет",
                "столешница и ножки"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди Люкс» — 7 000 ₽ / шт.; Стулья «Сканди-Кресло» — 8 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "31 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "32 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "33 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди Люкс»",
                "price": "7 000 ₽ / шт."
          },
          {
                "label": "Стулья «Сканди-Кресло»",
                "price": "8 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-estel-so-stulyami-skandi-lyuks-i-a-2",
    name: "Стол «Эстель» со стульями «Сканди - Люкс и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 49 000 ₽",
    image: "/assets/telegram-table-chair-198-1.jpg",
    images: telegramTableChairGallery198,
    description: "Стол «Эстель» со стульями «Сканди - Люкс и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди - Люкс» — 9 500 ₽ / шт.; Стулья «А» — 9 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200–",
                "price": "49 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240–",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "280",
                "price": "51 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди - Люкс»",
                "price": "9 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "9 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-skandi-lyuks-so-stulyami-skandi-lyuks",
    name: "Стол «Сканди - Люкс» со стульями «Сканди Люкс»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 32 000 ₽",
    image: "/assets/telegram-table-chair-199-1.jpg",
    images: telegramTableChairGallery199,
    description: "Стол «Сканди - Люкс» со стульями «Сканди Люкс» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Цвет",
                "«Лина»"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди Люкс» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "160 × 200–",
                "price": "32 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240–",
                "price": "33 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди Люкс»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-skandi-lyuks-so-stulyami-skandi-lyuks-2",
    name: "Стол «Сканди - Люкс» со стульями «Сканди Люкс»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 31 000 ₽",
    image: "/assets/telegram-table-chair-200-1.jpg",
    images: telegramTableChairGallery200,
    description: "Стол «Сканди - Люкс» со стульями «Сканди Люкс» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Цвет",
                "столешница белая, ножки"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди Люкс» — 7 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "31 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "32 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "33 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди Люкс»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-skandi-lyuks-so-stulyami-skandi-lyuks-3",
    name: "Стол «Сканди-Люкс» со стульями «Сканди Люкс»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 31 000 ₽",
    image: "/assets/telegram-table-chair-201-1.jpg",
    images: telegramTableChairGallery201,
    description: "Стол «Сканди-Люкс» со стульями «Сканди Люкс» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Цвет",
                "столешница и ножки"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди Люкс» — 8 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "120 × 160–",
                "price": "31 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200–",
                "price": "32 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200 × 240–",
                "price": "33 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди Люкс»",
                "price": "8 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-estel-so-stulyami-skandi-lyuks-i-a-3",
    name: "Стол «Эстель» со стульями «Сканди-Люкс и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "30 000 ₽ / шт.",
    image: "/assets/telegram-table-chair-202-1.jpg",
    images: telegramTableChairGallery202,
    description: "Стол «Эстель» со стульями «Сканди-Люкс и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Цвет",
                "(белый)"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Люкс» — 7 000 ₽ / шт.; Стулья «А» — 7 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Люкс»",
                "price": "7 000 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-antaliya-so-stulyami-skandi-lyuks-i-a",
    name: "Стол «Анталия» со стульями «Сканди-Люкс и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 40 000 ₽",
    image: "/assets/telegram-table-chair-203-1.jpg",
    images: telegramTableChairGallery203,
    description: "Стол «Анталия» со стульями «Сканди-Люкс и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Люкс» — 8 000 ₽ / шт.; Стулья «А» — 8 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 110–",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 110–",
                "price": "42 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "270 × 110–",
                "price": "44 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Люкс»",
                "price": "8 000 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "8 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "telegram-stol-barokko-so-stulyami-skandi-lyuks-i-a",
    name: "Стол «БАРОККО» со стульями «Сканди-Люкс и А»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 48 000 ₽",
    image: "/assets/telegram-table-chair-204-1.jpg",
    images: telegramTableChairGallery204,
    description: "Стол «БАРОККО» со стульями «Сканди-Люкс и А» для кухни или столовой. Стулья указаны как дополнительная платная опция, поэтому базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Люкс» — 7 500 ₽ / шт.; Стулья «А» — 7 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант",
                "dimensions": "200 × 110–",
                "price": "48 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 110–",
                "price": "49 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "270 × 110–",
                "price": "50 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Люкс»",
                "price": "7 500 ₽ / шт."
          },
          {
                "label": "Стулья «А»",
                "price": "7 500 ₽ / шт."
          }
    ],
  },
  // Telegram tables and chairs import end
  {
    slug: "kuhnya-emiliya-383-krem-zoloto",
    name: "Кухня «Эмилия» 3.83 крем золото",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "92 900 ₽ / компл.",
    image: kitchenEmiliyaGallery[0],
    images: kitchenEmiliyaGallery,
    description: "Кухонный гарнитур «Эмилия» в цвете крем/золото с чёрной столешницей. В комплект входят стеновая панель, плинтуса, пристенный борт с плинтусом и посудосушитель.",
    characteristics: [
      ["Размер", "В 2450 / Ш 383 / Г 600"],
      ["Цвет", "крем / золото"],
      ["Столешница", "чёрная, влагостойкое ЛДСП 48 мм с фрезерованным краем"],
      ["Петли", "дверные петли с доводящим механизмом"],
      ["Ящики", "механизм METABOX, нагрузка до 30 кг"],
      ["Комплектация", "стеновая панель, плинтуса, пристенный борт, посудосушитель"],
      ["Фабрика", "Арида"],
    ],
  },
  {
    slug: "kuhnya-fiona-465-belaya",
    name: "Кухня «Фиона» 4.65 белая",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: kitchenFionaGallery[0],
    images: kitchenFionaGallery,
    description: "Кухонный гарнитур «Фиона» в белом цвете с фасадами из фрезерованного МДФ и лаковым покрытием крашеной эмалью. В комплект входят стеновая панель, плинтус и сушка.",
    characteristics: [
      ["Размер", "4650 × 600 × 2450"],
      ["Цвет", "белая"],
      ["Фасады", "МДФ фрезерованный с элементом рисунка"],
      ["Покрытие", "лаковое покрытие, крашеная эмаль"],
      ["Петли", "с доводчиками"],
      ["Столешница", "влагостойкая, 38 мм"],
      ["Корпус", "ЛДСП Ваниль"],
      ["Комплектация", "стеновая панель, плинтус, сушка"],
      ["Производство", "Levada"],
    ],
  },
  {
    slug: "kuhnya-belladjo-4000-2000",
    name: "Кухня «Белладжо» 4.0/2.0",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "91 000 ₽ / компл.",
    image: kitchenBelladjoGallery[0],
    images: kitchenBelladjoGallery,
    description: "Угловой кухонный гарнитур «Белладжо» в классическом стиле с золотистым декором. В комплект входит стеновая панель. Дверь под духовку не входит в комплектацию и приобретается дополнительно.",
    characteristics: [
      ["Размер", "4000 / 2000 × 600 × 2500"],
      ["Ширина", "4000 / 2000"],
      ["Высота", "2500"],
      ["Глубина", "600"],
      ["Комплектация", "стеновая панель в комплекте"],
      ["Дополнительно", "дверь под духовку — 2 000 ₽"],
      ["Производство", "Levada"],
    ],
  },
  {
    slug: "kuhnya-garvard-430",
    name: "Кухня «Гарвард» 4.30",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "81 000 ₽ / компл.",
    image: kitchenGarvardGallery[0],
    images: kitchenGarvardGallery,
    description: "Кухонный гарнитур «Гарвард» в светлом классическом стиле. Комплект подойдёт для просторной кухни и демонстрирует готовое направление оформления с витринами и декоративными элементами.",
    characteristics: [
      ["Размер", "4.30 м"],
      ["Высота", "2.40 м"],
      ["Производство", "Ставрополь"],
    ],
  },
  {
    slug: "kuhnya-garvard-uglovaya",
    name: "Кухня «Гарвард» угловая",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "95 000 ₽ / компл.",
    image: kitchenGarvardCornerGallery[0],
    images: kitchenGarvardCornerGallery,
    description: "Угловой кухонный гарнитур «Гарвард» в светлом классическом стиле с высокими секциями, витринами и тёмной стеновой зоной под камень. Вариант для просторной кухни, где нужно показать готовое решение с выразительным фасадом и большим объёмом хранения.",
    characteristics: [
      ["Размер", "3.60 × 2.10 м или 3.30 × 2.40 м"],
      ["Высота", "2.40 м"],
      ["Производство", "Ставрополь"],
      ["Материал", "уточняется"],
    ],
    variants: [
      { label: "Вариант 1", dimensions: "3.60 × 2.10 м, высота 2.40 м", price: "95 000 ₽" },
      { label: "Вариант 2", dimensions: "3.30 × 2.40 м, высота 2.40 м", price: "95 000 ₽" },
    ],
  },
  {
    slug: "kuhnya-marian-480",
    name: "Кухня «Мариан» 4.80",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "90 000 ₽ / компл.",
    image: kitchenMarianGallery[0],
    images: kitchenMarianGallery,
    description: "Кухонный гарнитур «Мариан» в светлом глянцевом исполнении с высокими секциями, витринными фасадами и рабочей зоной под мрамор. Модель подходит для просторной кухни и делает интерьер визуально светлее за счёт спокойной классической линии.",
    characteristics: [
      ["Ширина", "4.80 м"],
      ["Высота", "2.40 м"],
      ["Производство", "Ставрополь"],
      ["Материал", "уточняется"],
    ],
  },
  {
    slug: "kuhnya-astoriya-340-zoloto",
    name: "Кухня «Астория» 3.40 золото",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "от 75 800 ₽",
    image: kitchenAstoriyaGallery[0],
    images: kitchenAstoriyaGallery,
    description: "Кухня «Астория» 3.40 золото выполнена в современном классическом стиле и предназначена для просторного помещения. Для изготовления использованы износостойкие материалы, устойчивые к контакту с водой, продуктами и бытовыми загрязнениями. Фасады покрыты светло-бежевым водостойким итальянским лаком и украшены фактурной резьбой с золотистой патиной.",
    characteristics: [
      ["Базовый размер", "340 × 60 × 245 см"],
      ["Размер с пеналами 95 см и 75 см", "510 × 60 × 245 см"],
      ["Цвет", "светлый крем / золото"],
      ["Производство", "фабрика «Заман»"],
      ["Дополнительно", "фасад под духовку не входит в комплект — 2 200 ₽"],
    ],
    variants: [
      { label: "Без пеналов", dimensions: "340 × 60 × 245 см", price: "75 800 ₽ / компл." },
      { label: "С пеналом 75 см", dimensions: "415 × 60 × 245 см", price: "115 000 ₽ / компл." },
      { label: "С пеналом 95 см", dimensions: "435 × 60 × 245 см", price: "115 000 ₽ / компл." },
      { label: "С двумя пеналами", dimensions: "510 × 60 × 245 см", price: "115 000 ₽ / компл." },
      { label: "Фасад под духовку", dimensions: "дополнительная опция", price: "2 200 ₽" },
    ],
    colors: ["светлый крем / золото"],
  },
  {
    slug: "kuhnya-naomi-1800-1200",
    name: "Кухня «Наоми»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "60 000 ₽ / компл.",
    image: kitchenNaomiGallery[0],
    images: kitchenNaomiGallery,
    description: "Кухня «Наоми» — компактный угловой гарнитур в светлом современном стиле от Zaman. В комплект входят дверные петли с доводящим механизмом, влагостойкая столешница толщиной 38 мм, стеновая панель в цвет столешницы с соединительными планками и плинтусом, а также посудосушитель с поддоном. Все размеры указаны по габаритам корпуса без учёта вылета карнизов.",
    characteristics: [
      ["Размер", "1800 / 1200 × 600 × 2600 мм"],
      ["Производство", "Будённовск, Zaman"],
      ["Корпус", "ЛДСП 16 мм, класс безопасности Е1"],
      ["Фасады", "ЛМДФ 16 мм, класс безопасности Е1"],
      ["Покрытие", "лакокрасочные материалы Италии и Турции"],
      ["Комплектация", "столешница 38 мм, стеновая панель, плинтус, посудосушитель"],
      ["Дополнительно", "фасад под духовку не входит в комплект — 2 200 ₽"],
    ],
    variants: [
      { label: "Кухня «Наоми»", dimensions: "1800 / 1200 × 600 × 2600 мм", price: "60 000 ₽ / компл." },
      { label: "Фасад под духовку", dimensions: "дополнительная опция", price: "2 200 ₽" },
    ],
  },
  {
    slug: "kuhnya-dzhuletta-360",
    name: "Кухня «Джулетта» 3.60",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "85 000 ₽ / компл.",
    image: kitchenDzhulettaGallery[0],
    images: kitchenDzhulettaGallery,
    description: "Кухня «Джулетта» — светлый классический гарнитур с золотистыми декоративными акцентами, витринными секциями и выразительной стеновой панелью под камень. Подходит для демонстрации премиального направления кухонных гарнитуров Mebel 95.",
    characteristics: [
      ["Размер", "3.60 м"],
      ["Производство", "Бест Мебель"],
      ["Цвет", "светлый крем / золото"],
      ["Комплектация", "кухонный гарнитур"],
      ["Материал", "уточняется"],
    ],
  },
  {
    slug: "kuhnya-marina-360",
    name: "Кухня «Марина» 3.60",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "70 000 ₽ / компл.",
    image: kitchenMarinaGallery[0],
    images: kitchenMarinaGallery,
    description: "Кухонный гарнитур «Марина» в светлом классическом стиле с декоративными фасадами, витринными секциями и выразительной стеновой панелью под камень. В комплект входит стеновая панель, качество исполнения — Люкс.",
    characteristics: [
      ["Размер", "3.60 м"],
      ["Производство", "Ставрополь"],
      ["Фабрика", "Фламинго"],
      ["Качество", "Люкс"],
      ["Комплектация", "стеновая в комплекте"],
      ["Материал", "уточняется"],
    ],
  },
  {
    slug: "kuhnya-venetsiya",
    name: "Кухня «Венеция»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "от 93 000 ₽",
    image: kitchenVenetsiyaGallery[0],
    images: kitchenVenetsiyaGallery,
    description: "Угловой кухонный гарнитур «Венеция» в классическом стиле с декоративными фасадами, витринными секциями и аккуратными серебристыми или золотистыми акцентами. Гарнитур можно устанавливать на обе стороны, поэтому он подходит для разных планировок кухни.",
    characteristics: [
      ["Размер", "4 варианта"],
      ["Цвет", "белый / серебро, слоновая кость / золото"],
      ["Установка", "на обе стороны"],
      ["Производство", "Аметист, Краснодар"],
      ["Материал", "уточняется"],
    ],
    colorOptions: [
      { label: "белый / серебро", image: "/assets/kitchen-venetsiya-1.jpg" },
      { label: "слоновая кость / золото", image: "/assets/kitchen-venetsiya-ivory-gold-1.jpg" },
    ],
    variants: [
      { label: "Компактный вариант", dimensions: "3.20 × 2.10 м", price: "93 000 ₽", image: "/assets/kitchen-venetsiya-1.jpg" },
      { label: "Средний вариант", dimensions: "3.60 × 2.50 м", price: "98 000 ₽", image: "/assets/kitchen-venetsiya-ivory-gold-1.jpg" },
      { label: "Большой вариант", dimensions: "4.50 × 2.40 м", price: "110 000 ₽", image: "/assets/kitchen-venetsiya-ivory-gold-large.jpg" },
      { label: "Угловой вариант", dimensions: "3.00 × 3.90 м", price: "110 000 ₽", image: "/assets/kitchen-venetsiya-ivory-gold-large.jpg" },
    ],
  },
  {
    slug: "kuhnya-palermo-290",
    name: "Кухня «Палермо» 2.90",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "50 000 ₽ / компл.",
    image: kitchenPalermoGallery[0],
    images: kitchenPalermoGallery,
    description: "Кухонный гарнитур «Палермо» в светлом классическом стиле с мраморной рабочей зоной. Компактный комплект для кухни с аккуратными фасадами и витринными секциями.",
    characteristics: [
      ["Размер", "2.90 м"],
      ["Высота", "2.40 м"],
      ["Производство", "Ставрополь"],
    ],
  },
  {
    slug: "kuhnya-palermo-350-410",
    name: "Кухня «Палермо»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "от 55 000 ₽",
    image: kitchenPalermoLargeGallery[0],
    images: kitchenPalermoLargeGallery,
    description: "Кухонный гарнитур «Палермо» в светлом классическом стиле с мраморной стеновой панелью и выразительной высокой секцией. Для демонстрации добавлены два размера с разной стоимостью.",
    characteristics: [
      ["Размер", "3.50 м или 4.10 м"],
      ["Высота", "2.40 м"],
      ["Производство", "Ставрополь"],
    ],
    variants: [
      { label: "Размер 3.50", dimensions: "3.50 м, высота 2.40 м", price: "55 000 ₽" },
      { label: "Размер 4.10", dimensions: "4.10 м, высота 2.40 м", price: "67 000 ₽" },
    ],
  },
  {
    slug: "kuhnya-azaliya-240",
    name: "Кухня «Азалия» 2.40",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "46 500 ₽ / компл.",
    image: kitchenAzaliyaGallery[0],
    images: kitchenAzaliyaGallery,
    description: "Кухонный гарнитур «Азалия» в классическом светлом исполнении с золотистыми декоративными акцентами и тёмной рабочей зоной. Компактный вариант для кухни, где нужен выразительный фасад и аккуратное хранение.",
    characteristics: [
      ["Размер", "2.40 м"],
      ["Высота", "2.37 м"],
      ["Производство", "Краснодар"],
      ["Фабрика", "Аметист"],
    ],
  },
  {
    slug: "kuhnya-azaliya-lux",
    name: "Кухня «Азалия люкс»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "90 000 ₽ / компл.",
    image: kitchenAzaliyaLuxGallery[0],
    images: kitchenAzaliyaLuxGallery,
    description: "Кухонный гарнитур «Азалия люкс» в светлом классическом стиле с витринными секциями, декоративными фасадами и выразительной рабочей зоной под камень. Для демонстрации добавлены два варианта угловой компоновки с одинаковой стоимостью.",
    characteristics: [
      ["Размер", "4.10 × 2.05 м или 3.90 × 2.25 м"],
      ["Цвета", "слоновая кость / золото, белый / серебро"],
      ["Производство", "Аметист"],
      ["Качество", "Люкс"],
      ["Материал", "уточняется"],
    ],
    colors: ["слоновая кость / золото", "белый / серебро"],
    variants: [
      { label: "Вариант 1", dimensions: "4.10 × 2.05 м", price: "90 000 ₽" },
      { label: "Вариант 2", dimensions: "3.90 × 2.25 м", price: "90 000 ₽" },
    ],
  },
  {
    slug: "kuhnya-art-200",
    name: "Кухня «Арт» 2 м",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "31 000 ₽ / компл.",
    image: kitchenArtGallery[0],
    images: kitchenArtGallery,
    description: "Кухонный гарнитур «Арт» в чистом светлом исполнении с лаконичными рамочными фасадами и стеклянными верхними секциями. Компактный крашеный вариант для небольшой кухни, где важно сохранить аккуратный внешний вид и удобное хранение.",
    characteristics: [
      ["Размер", "2 м"],
      ["Производство", "Краснодар"],
      ["Покрытие", "крашенная"],
      ["Материал", "уточняется"],
    ],
  },
  {
    slug: "kuhnya-albina-240",
    name: "Кухня «Альбина» 2.40",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "36 500 ₽ / компл.",
    image: kitchenAlbinaGallery[0],
    images: kitchenAlbinaGallery,
    description: "Кухонный гарнитур «Альбина» в светлом цвете с лаконичными фасадами и спокойной серой рабочей зоной. Компактное решение для кухни, где важно сохранить аккуратный внешний вид и удобное хранение.",
    characteristics: [
      ["Размер", "2.40 м"],
      ["Производство", "Ставрополь"],
    ],
  },
  {
    slug: "kuhnya-luxe-420",
    name: "Кухня Luxe 4.20",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "78 000 ₽ / компл.",
    image: kitchenLuxeGallery[0],
    images: kitchenLuxeGallery,
    description: "Кухонный гарнитур Luxe в светлом классическом стиле с высокими боковыми секциями, витринами и спокойной рабочей зоной. Решение для просторной кухни с акцентом на симметрию и хранение.",
    characteristics: [
      ["Размер", "4.20 м"],
      ["Высота", "2.45 м"],
      ["Производство", "Ставрополь"],
    ],
  },
  {
    slug: "bufet-150-krasnodar",
    name: "Буфет 1.50",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "23 500 ₽ / шт.",
    image: buffet150Gallery[0],
    images: buffet150Gallery,
    description: "Буфет шириной 1.50 м в спокойном сером оттенке с рельефными фасадами, золотистыми ручками и рабочей поверхностью под мрамор. Подходит для дополнительного хранения посуды, текстиля и кухонных аксессуаров.",
    characteristics: [
      ["Размер", "1.50 м"],
      ["Производство", "Краснодар"],
      ["Материал", "уточняется"],
    ],
  },
  {
    slug: "bufet-140-krasnodar",
    name: "Буфет 1.40",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "23 000 ₽ / шт.",
    image: buffet140Gallery[0],
    images: buffet140Gallery,
    description: "Компактный буфет шириной 1.40 м с серыми рельефными фасадами, золотистыми ручками и светлой столешницей. Подходит для кухни или столовой как дополнительная зона хранения и сервировки.",
    characteristics: [
      ["Размер", "1.40 м"],
      ["Производство", "Краснодар"],
      ["Материал", "уточняется"],
    ],
  },
  {
    slug: "tv-tumba-milan",
    name: "ТВ тумба «Милан»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "22 000 ₽",
    image: tvTumbaMilanGallery[0],
    images: tvTumbaMilanGallery,
    description:
      "ТВ тумба «Милан» в светлом исполнении с рельефными фасадами, открытой центральной нишей и аккуратными золотистыми деталями.",
    characteristics: [
      ["Размер", "148 × 60 × 39 см"],
      ["Тип", "ТВ тумба"],
      ["Цвет", "светлый"],
    ],
  },
  {
    slug: "tv-tumba-markiza-2",
    name: "ТВ тумба «Маркиза 2»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "22 000 ₽",
    image: tvTumbaMarkiza2Gallery[0],
    images: tvTumbaMarkiza2Gallery,
    description:
      "ТВ тумба «Маркиза 2» в классическом светлом исполнении с фигурными фасадами, центральной нишей и декоративными деталями.",
    characteristics: [
      ["Размер", "140 × 60 × 42 см"],
      ["Тип", "ТВ тумба"],
      ["Стиль", "классический"],
    ],
  },
  {
    slug: "tv-tumba-samuel",
    name: "ТВ тумба «Самуэль»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "23 000 ₽",
    image: tvTumbaSamuelGallery[0],
    images: tvTumbaSamuelGallery,
    description:
      "ТВ тумба «Самуэль» в классическом светлом исполнении с центральной открытой нишей, выдвижными ящиками и декоративными опорами.",
    characteristics: [
      ["Размер", "160 × 60 × 40 см"],
      ["Тип", "ТВ тумба"],
      ["Стиль", "классический"],
    ],
  },
  {
    slug: "tv-tumba-rio",
    name: "ТВ тумба «Рио»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "16 800 ₽",
    image: tvTumbaRioGallery[0],
    images: tvTumbaRioGallery,
    description:
      "ТВ тумба «Рио» в белом глянце с открытыми полками и боковой секцией для хранения. Лаконичная модель для современной ТВ-зоны.",
    characteristics: [
      ["Габариты", "1620 × 350 × 520 мм"],
      ["Цвет", "белый глянец"],
      ["Материал", "МДФ"],
      ["Тип", "ТВ тумба"],
    ],
  },
  {
    slug: "prihozhaya-neo-gloria",
    name: "Прихожая «НЕО-Глория»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "57 000 ₽ / компл.",
    image: hallwayNeoGloriaGallery[0],
    images: hallwayNeoGloriaGallery,
    description:
      "Белая прихожая «НЕО-Глория» с высоким шкафом, мягкой зоной с крючками, зеркалом и тумбой для хранения. Модель выглядит светло и аккуратно, подходит для современного коридора или входной зоны.",
    characteristics: [
      ["Размер", "250 × 230 × 40 см"],
      ["Цвет", "белый"],
      ["Комплектация", "шкаф, вешалка с мягкой панелью, зеркало и тумба"],
      ["Материал", "уточняется"],
    ],
  },
  {
    slug: "prihozhaya-neo-gloria-beige",
    name: "Прихожая «НЕО-Глория»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "57 000 ₽ / компл.",
    image: hallwayNeoGloriaBeigeGallery[0],
    images: hallwayNeoGloriaBeigeGallery,
    description:
      "Прихожая «НЕО-Глория» в бежевом цвете с высоким шкафом, мягкой панелью, зеркалом, крючками, выдвижными ящиками и тумбой для хранения.",
    characteristics: [
      ["Размер", "250 × 230 × 42 см"],
      ["Цвет", "бежевый"],
      ["Комплектация", "шкаф, зеркало, мягкая панель с крючками, ящики и тумба"],
    ],
  },
  {
    slug: "prihozhaya-neo-gloria-2-white",
    name: "Прихожая «НЕО-Глория 2»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "40 000 ₽ / компл.",
    image: hallwayNeoGloria2WhiteGallery[0],
    images: hallwayNeoGloria2WhiteGallery,
    description:
      "Прихожая «НЕО-Глория 2» в белом цвете с высоким шкафом, мягкой темной панелью, крючками и тумбой для хранения.",
    characteristics: [
      ["Размер", "150 × 230 × 42 см"],
      ["Цвет", "белый"],
      ["Комплектация", "шкаф, мягкая панель с крючками и тумба"],
    ],
  },
  {
    slug: "prihozhaya-gloria-250",
    name: "Прихожая «Глория 250»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "57 000 ₽ / компл.",
    image: hallwayGloria250Gallery[0],
    images: hallwayGloria250Gallery,
    description:
      "Прихожая «Глория 250» в светлом классическом исполнении с мягкой зоной, зеркальными фасадами и тумбой для хранения. Модель подходит для аккуратной входной зоны и визуально расширяет пространство.",
    characteristics: [
      ["Размер", "250 × 230 × 42 см"],
      ["Фасад", "МДФ крашенный"],
      ["Комплектация", "шкаф, мягкая панель с крючками, зеркало и тумба"],
      ["Материал", "МДФ / ЛДСП"],
    ],
  },
  {
    slug: "prihozhaya-gloria-250-beige",
    name: "Прихожая «Глория»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "57 000 ₽ / компл.",
    image: hallwayGloria250BeigeWideGallery[0],
    images: hallwayGloria250BeigeWideGallery,
    description:
      "Прихожая «Глория» в бежевом цвете с большим зеркальным шкафом, мягкой каретной панелью, крючками, тумбой и боковым блоком с зеркалом и ящиками.",
    characteristics: [
      ["Размер", "250 × 230 × 42 см"],
      ["Цвет", "бежевый"],
      ["Комплектация", "зеркальный шкаф, мягкая панель с крючками, тумба, зеркало и ящики"],
    ],
  },
  {
    slug: "prihozhaya-gloria-250-white",
    name: "Прихожая «Глория»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "57 000 ₽ / компл.",
    image: hallwayGloria250WhiteWideGallery[0],
    images: hallwayGloria250WhiteWideGallery,
    description:
      "Прихожая «Глория» в белом цвете с большим шкафом, мягкой темной панелью, крючками, зеркалом, тумбой и боковым блоком с ящиками.",
    characteristics: [
      ["Размер", "250 × 230 × 42 см"],
      ["Цвет", "белый"],
      ["Комплектация", "шкаф, мягкая панель с крючками, зеркало, тумба и ящики"],
    ],
  },
  {
    slug: "prihozhaya-gloria-250-white-silver",
    name: "Прихожая «Глория»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "57 000 ₽ / компл.",
    image: hallwayGloria250WhiteSilverGallery[0],
    images: hallwayGloria250WhiteSilverGallery,
    description:
      "Прихожая «Глория» в цвете белый серебро с зеркальным шкафом, мягкой темной панелью, крючками, тумбой и боковым блоком с ящиками.",
    characteristics: [
      ["Размер", "250 × 230 × 42 см"],
      ["Цвет", "белый серебро"],
      ["Исполнение", "левосторонняя и правосторонняя"],
      ["Комплектация", "зеркальный шкаф, мягкая панель с крючками, тумба, зеркало и ящики"],
    ],
  },
  {
    slug: "prihozhaya-gloria-2",
    name: "Прихожая «Глория 2»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "44 000 ₽ / компл.",
    image: hallwayGloria2Gallery[0],
    images: hallwayGloria2Gallery,
    description:
      "Компактная прихожая «Глория 2» в цвете ваниль с мягкой панелью, крючками, зеркальным фасадом и нижней тумбой. Хороший вариант для небольшой входной зоны без перегруза пространства.",
    characteristics: [
      ["Размер", "150 × 230 × 42 см"],
      ["Цвет", "ваниль"],
      ["Комплектация", "мягкая панель с крючками, зеркало и тумба"],
      ["Материал", "МДФ / ЛДСП"],
    ],
  },
  {
    slug: "prihozhaya-gloria-2-neo",
    name: "Прихожая «Глория 2» Нео",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "40 000 ₽ / компл.",
    image: hallwayGloria2NeoGallery[0],
    images: hallwayGloria2NeoGallery,
    description:
      "Прихожая «Глория 2» Нео в цвете ваниль с высоким шкафом, мягкой панелью с крючками и тумбой для хранения. Светлая модель для аккуратной входной зоны.",
    characteristics: [
      ["Размер", "150 × 230 × 40 см"],
      ["Цвет", "ваниль"],
      ["Комплектация", "шкаф, мягкая панель с крючками и тумба"],
    ],
  },
  {
    slug: "prihozhaya-gloria-2-neo-mirror",
    name: "Прихожая «Глория 2» Нео",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "40 000 ₽ / компл.",
    image: hallwayGloria2NeoMirrorGallery[0],
    images: hallwayGloria2NeoMirrorGallery,
    description:
      "Прихожая «Глория 2» Нео в цвете ваниль с мягкой темной панелью, крючками, тумбой и двухдверным зеркальным шкафом. Отдельный вариант модели для светлой входной зоны.",
    characteristics: [
      ["Размер", "150 × 230 × 40 см"],
      ["Цвет", "ваниль"],
      ["Комплектация", "мягкая панель с крючками, тумба и зеркальный шкаф"],
    ],
  },
  {
    slug: "prihozhaya-gloria-5-3d",
    name: "Прихожая «Глория 5» 3D",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "45 000 ₽ / компл.",
    image: hallwayGloria5Gallery[0],
    images: hallwayGloria5Gallery,
    description:
      "Прихожая «Глория 5» 3D со светлым корпусом, мягкой каретной панелью, декоративным зеркальным фасадом, крючками и нижней тумбой для хранения. Модель выглядит выразительно и подходит для аккуратной входной зоны.",
    characteristics: [
      ["Размер", "170 × 230 × 40 см"],
      ["Комплектация", "мягкая панель с крючками, зеркало и тумба"],
      ["Материал", "МДФ / ЛДСП"],
    ],
  },
  {
    slug: "prihozhaya-gloria-5",
    name: "Прихожая «Глория 5»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "41 000 ₽ / компл.",
    image: hallwayGloria5ClassicGallery[0],
    images: hallwayGloria5ClassicGallery,
    description:
      "Прихожая «Глория 5» в светлом классическом исполнении с мягкой каретной панелью, зеркальным шкафом, крючками и тумбой для хранения.",
    characteristics: [
      ["Размер", "170 × 230 × 40 см"],
      ["Комплектация", "зеркальный шкаф, мягкая панель с крючками и тумба"],
      ["Стиль", "классический"],
    ],
  },
  {
    slug: "prihozhaya-gloria-5-white-silver",
    name: "Прихожая «Глория 5»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "41 000 ₽ / компл.",
    image: hallwayGloria5WhiteSilverGallery[0],
    images: hallwayGloria5WhiteSilverGallery,
    description:
      "Прихожая «Глория 5» в белом цвете с серебристым декором, зеркальным шкафом, мягкой темной панелью, крючками и тумбой для хранения.",
    characteristics: [
      ["Размер", "170 × 230 × 40 см"],
      ["Цвет", "белый в серебре"],
      ["Комплектация", "зеркальный шкаф, мягкая панель с крючками и тумба"],
    ],
  },
  {
    slug: "prihozhaya-gloria-5-max-vanilla",
    name: "Прихожая «Глория 5 макс»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "50 000 ₽ / компл.",
    image: hallwayGloria5MaxVanillaGallery[0],
    images: hallwayGloria5MaxVanillaGallery,
    description:
      "Прихожая «Глория 5 макс» в цвете ваниль с мягкой каретной панелью, зеркальным шкафом, крючками и тумбой для хранения. Фасад выполнен из МДФ с краской от Техноколор.",
    characteristics: [
      ["Размер", "230 × 230 × 40 см"],
      ["Цвет", "ваниль"],
      ["Корпус", "ЛДСП"],
      ["Фасад", "МДФ"],
      ["Краска", "Техноколор"],
    ],
  },
  {
    slug: "prihozhaya-gloria-6",
    name: "Прихожая «Глория 6»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "от 23 000 ₽ / компл.",
    image: hallwayGloria6Gallery[0],
    images: hallwayGloria6Gallery,
    description:
      "Прихожая «Глория 6» в светлом классическом исполнении с высоким зеркальным шкафом, мягкой панелью с крючками и нижней тумбой для хранения.",
    characteristics: [
      ["Размер", "3 варианта"],
      ["Комплектация", "зеркальный шкаф, мягкая панель с крючками и тумба"],
      ["Стиль", "классический"],
    ],
    variants: [
      { label: "100 см", dimensions: "100 × 230 см", price: "23 000 ₽ / компл." },
      { label: "110 см", dimensions: "110 × 230 см", price: "25 000 ₽ / компл." },
      { label: "120 см", dimensions: "120 × 230 см", price: "37 000 ₽ / компл." },
    ],
  },
  {
    slug: "prihozhaya-gloria-6-neo",
    name: "Прихожая «Глория 6 Нео»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "36 000 ₽ / компл.",
    image: hallwayGloria6NeoGallery[0],
    images: hallwayGloria6NeoGallery,
    description:
      "Прихожая «Глория 6 Нео» в белом цвете с зеркальным шкафом, мягкой темной панелью, крючками и тумбой для хранения.",
    characteristics: [
      ["Размер", "120 × 230 × 40 см"],
      ["Цвет", "белый"],
      ["Фасады", "МДФ крашенный"],
      ["Комплектация", "зеркальный шкаф, мягкая панель с крючками и тумба"],
    ],
  },
  {
    slug: "prihozhaya-gloria-90",
    name: "Прихожая «Глория 90»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "26 500 ₽ / компл.",
    image: hallwayGloria90Gallery[0],
    images: hallwayGloria90Gallery,
    description:
      "Прихожая «Глория 90» в светлом классическом исполнении с мягкой каретной панелью, крючками и нижней тумбой. Банкетка и зеркало доступны отдельно.",
    characteristics: [
      ["Размер", "90 × 230 × 43 см"],
      ["Комплектация", "мягкая панель с крючками и тумба"],
      ["Дополнительно", "банкетка — 10 000 ₽, зеркало — 5 500 ₽"],
    ],
  },
  {
    slug: "prihozhaya-gloria-8",
    name: "Прихожая «Глория 8»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "42 000 ₽ / компл.",
    image: hallwayGloria8Gallery[0],
    images: hallwayGloria8Gallery,
    description:
      "Прихожая «Глория 8» с мягкой панелью, крючками, тумбой и двухдверным зеркальным шкафом. Доступна в белом, бежевом и белом варианте номер 2.",
    characteristics: [
      ["Размер", "180 × 230 см"],
      ["Цвета", "белый, бежевый, белый номер 2"],
      ["Фасады", "МДФ"],
      ["Корпус", "ДСП"],
    ],
    colorOptions: [
      { label: "белый", image: "/assets/hallway-gloria-8-1.jpg" },
      { label: "бежевый", image: "/assets/hallway-gloria-8-beige-1.jpg" },
      { label: "белый номер 2", image: "/assets/hallway-gloria-8-white-2.jpg" },
    ],
  },
  {
    slug: "prihozhaya-gloria-8-white-new",
    name: "Прихожая «Глория 8»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "42 000 ₽ / компл.",
    image: hallwayGloria8WhiteNewGallery[0],
    images: hallwayGloria8WhiteNewGallery,
    description:
      "Прихожая «Глория 8» в белом цвете с двухдверным зеркальным шкафом, мягкой темной панелью, крючками и тумбой для хранения.",
    characteristics: [
      ["Размер", "180 × 230 см"],
      ["Цвет", "белый"],
      ["Фасады", "МДФ"],
      ["Корпус", "ДСП"],
    ],
  },
  {
    slug: "prihozhaya-gloria-210-white",
    name: "Прихожая «Глория»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "54 000 ₽ / компл.",
    image: hallwayGloria210WhiteGallery[0],
    images: hallwayGloria210WhiteGallery,
    description:
      "Прихожая «Глория» в белом цвете с открытой зоной для одежды, крючками, мягким сиденьем, шкафом и верхними секциями для хранения.",
    characteristics: [
      ["Размер", "210 × 230 × 40 см"],
      ["Цвет", "белый"],
      ["Корпус", "ЛДСП"],
      ["Фасад", "МДФ"],
    ],
  },
  {
    slug: "prihozhaya-gloria-210-white-black",
    name: "Прихожая «Глория»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "54 000 ₽ / компл.",
    image: hallwayGloria210WhiteBlackGallery[0],
    images: hallwayGloria210WhiteBlackGallery,
    description:
      "Прихожая «Глория» в белом цвете с контрастной мягкой панелью, зеркальными секциями, крючками, тумбой и шкафом для хранения.",
    characteristics: [
      ["Размер", "210 × 230 × 40 см"],
      ["Цвет", "белый"],
      ["Корпус", "ЛДСП"],
      ["Фасад", "МДФ"],
    ],
  },
  {
    slug: "prihozhaya-gloria-neo-90",
    name: "Прихожая «Глория Нео»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "27 000 ₽ / компл.",
    image: hallwayGloriaNeo90Gallery[0],
    images: hallwayGloriaNeo90Gallery,
    description:
      "Компактная прихожая «Глория Нео» в белом цвете с мягкой темной панелью, крючками, верхней полкой и нижней тумбой для хранения. Хорошее решение для небольшой входной зоны.",
    characteristics: [
      ["Размер", "90 × 230 × 42 см"],
      ["Цвет", "белый"],
      ["Комплектация", "мягкая панель с крючками, верхняя полка и тумба"],
      ["Материал", "МДФ / ЛДСП"],
    ],
  },
  {
    slug: "prihozhaya-gloria-uglovaya",
    name: "Прихожая «Глория угловая»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "29 000 ₽ / компл.",
    image: hallwayGloriaCornerGallery[0],
    images: hallwayGloriaCornerGallery,
    description:
      "Угловая прихожая «Глория» для компактной входной зоны: светлая мягкая панель с каретной стяжкой, крючки, верхняя полка и нижняя тумба.",
    characteristics: [
      ["Размер", "60 × 60 × 230 см"],
      ["Комплектация", "угловая мягкая панель, крючки, верхняя полка и тумба"],
      ["Тип", "угловая прихожая"],
      ["Материал", "МДФ / ЛДСП"],
    ],
  },
  {
    slug: "prihozhaya-novella",
    name: "Прихожая «Новелла»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "43 000 ₽ / компл.",
    image: hallwayNovellaGallery[0],
    images: hallwayNovellaGallery,
    description:
      "Белая прихожая «Новелла» с высоким корпусом, фасадами из МДФ и компактной глубиной 42 см. Модель подходит для светлой входной зоны и дает аккуратное хранение без перегруза пространства.",
    characteristics: [
      ["Размер", "200 × 230 × 42 см"],
      ["Цвет", "белый"],
      ["Корпус", "ДСП"],
      ["Фасад", "МДФ"],
    ],
  },
  {
    slug: "prihozhaya-violetta",
    name: "Прихожая «Виолетта»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "42 000 ₽ / компл.",
    image: hallwayViolettaGallery[0],
    images: hallwayViolettaGallery,
    description:
      "Прихожая «Виолетта» в классическом светлом исполнении с мягкой панелью, крючками, зеркальным шкафом и тумбой для хранения.",
    characteristics: [
      ["Размер", "150 × 235 см"],
      ["Корпус", "ЛДСП"],
      ["Фасад", "крашенный МДФ"],
    ],
  },
  {
    slug: "prihozhaya-milan",
    name: "Прихожая «Милан»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "45 000 ₽ / компл.",
    image: hallwayMilanGallery[0],
    images: hallwayMilanGallery,
    description:
      "Прихожая «Милан» в сером и белом цвете с высоким шкафом, мягкой панелью, крючками и тумбой для хранения.",
    characteristics: [
      ["Размер", "180 × 230 × 50 см"],
      ["Цвета", "серый, белый"],
      ["Фасады", "МДФ"],
      ["Корпус", "МДФ"],
    ],
    colorOptions: [
      { label: "серый", image: "/assets/hallway-milan-gray-1.jpg" },
      { label: "белый", image: "/assets/hallway-milan-white-1.jpg" },
    ],
  },
  {
    slug: "prihozhaya-sairina",
    name: "Прихожая «Сайрина»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "63 000 ₽ / компл.",
    image: hallwaySairinaGallery[0],
    images: hallwaySairinaGallery,
    description:
      "Прихожая «Сайрина» в белом цвете с большой системой шкафов, открытой зоной с крючками и мягким сиденьем.",
    characteristics: [
      ["Размер", "270 × 263 × 50 см"],
      ["Цвет", "белый"],
      ["Комплектация", "шкафы, открытая зона с крючками и тумба-сиденье"],
    ],
  },
  {
    slug: "prihozhaya-lotos",
    name: "Прихожая «Лотос»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "33 000 ₽ / компл.",
    image: hallwayLotosGallery[0],
    images: hallwayLotosGallery,
    description:
      "Прихожая «Лотос» в белом цвете с зеркальным шкафом, мягкой темной панелью, крючками и тумбой для хранения.",
    characteristics: [
      ["Размер", "120 × 215 × 45 см"],
      ["Цвет", "белый"],
      ["Комплектация", "зеркальный шкаф, мягкая панель с крючками и тумба"],
    ],
  },
  {
    slug: "prihozhaya-gloria-5-neo-gray",
    name: "Прихожая «Глория 5 Нео»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "41 000 ₽ / компл.",
    image: hallwayGloria5NeoGrayGallery[0],
    images: hallwayGloria5NeoGrayGallery,
    description:
      "Прихожая «Глория 5 Нео» в сером цвете с зеркальным шкафом, мягкой каретной панелью, крючками и тумбой для хранения.",
    characteristics: [
      ["Размер", "170 × 230 × 40 см"],
      ["Цвет", "серый"],
      ["Фасады", "МДФ крашенный"],
      ["Корпус", "ЛДСП"],
    ],
  },
  {
    slug: "prihozhaya-praga",
    name: "Прихожая «Прага»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "41 000 ₽ / компл.",
    image: hallwayPragaGallery[0],
    images: hallwayPragaGallery,
    description:
      "Прихожая «Прага» в белом цвете со светло-серой мягкой тканевой панелью, зеркальным шкафом, крючками и тумбой для хранения.",
    characteristics: [
      ["Высота", "220 см"],
      ["Ширина", "120 см"],
      ["Цвет", "белый"],
      ["Ткань", "светло-серая"],
      ["Комплектация", "зеркальный шкаф, мягкая панель с крючками и тумба"],
    ],
  },

  // Imported soft furniture start
  {
    slug: "komplekt-faraon-1",
    name: "Комплект Фараон",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-1-1.jpg",
    images: ["/assets/komplekt-faraon-1-1.jpg"],
    description: "Комплект Фараон — мягкий комплект для гостиной, раскладной, цвет Светлый / золото.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"], ["Цвет", "Светлый / золото"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-2",
    name: "Комплект Фараон",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-2-1.jpg",
    images: ["/assets/komplekt-faraon-2-1.jpg"],
    description: "Комплект Фараон — мягкий комплект для гостиной, раскладной, цвет Серый / белый.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"], ["Цвет", "Серый / белый"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-3",
    name: "Комплект Фараон",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-3-1.jpg",
    images: ["/assets/komplekt-faraon-3-1.jpg"],
    description: "Комплект Фараон — мягкий комплект для гостиной, раскладной, цвет Бежевый / темное дерево.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"], ["Цвет", "Бежевый / темное дерево"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-4",
    name: "Комплект Фараон",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-4-1.jpg",
    images: ["/assets/komplekt-faraon-4-1.jpg"],
    description: "Комплект Фараон — мягкий комплект для гостиной, раскладной, цвет Бежевый / золото.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"], ["Цвет", "Бежевый / золото"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-5",
    name: "Комплект Фараон",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-5-1.jpg",
    images: ["/assets/komplekt-faraon-5-1.jpg"],
    description: "Комплект Фараон — мягкий комплект для гостиной, раскладной, цвет Бирюзовый / белый.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"], ["Цвет", "Бирюзовый / белый"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-6",
    name: "Комплект Фараон",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-6-1.jpg",
    images: ["/assets/komplekt-faraon-6-1.jpg"],
    description: "Комплект Фараон — мягкий комплект для гостиной, раскладной, цвет Светло-бежевый.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"], ["Цвет", "Светло-бежевый"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-7",
    name: "Комплект Фараон",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-7-1.jpg",
    images: ["/assets/komplekt-faraon-7-1.jpg"],
    description: "Комплект Фараон — мягкий комплект для гостиной, раскладной, цвет Бирюзовый / золото.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"], ["Цвет", "Бирюзовый / золото"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-troyka-27-03-1",
    name: "Комплект Фараон тройка",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-troyka-27-03-1-1.jpg",
    images: ["/assets/komplekt-faraon-troyka-27-03-1-1.jpg"],
    description: "Комплект Фараон тройка — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-troyka-27-03-2",
    name: "Комплект Фараон тройка",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-troyka-27-03-2-1.jpg",
    images: ["/assets/komplekt-faraon-troyka-27-03-2-1.jpg"],
    description: "Комплект Фараон тройка — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-troyka-27-03-3",
    name: "Комплект Фараон тройка",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-troyka-27-03-3-1.jpg",
    images: ["/assets/komplekt-faraon-troyka-27-03-3-1.jpg"],
    description: "Комплект Фараон тройка — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-troyka-27-03-4",
    name: "Комплект Фараон тройка",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-troyka-27-03-4-1.jpg",
    images: ["/assets/komplekt-faraon-troyka-27-03-4-1.jpg"],
    description: "Комплект Фараон тройка — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-troyka-27-03-5",
    name: "Комплект Фараон тройка",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-troyka-27-03-5-1.jpg",
    images: ["/assets/komplekt-faraon-troyka-27-03-5-1.jpg"],
    description: "Комплект Фараон тройка — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-faraon-troyka-27-03-6",
    name: "Комплект Фараон тройка",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-faraon-troyka-27-03-6-1.jpg",
    images: ["/assets/komplekt-faraon-troyka-27-03-6-1.jpg","/assets/komplekt-faraon-troyka-27-03-6-2.jpg"],
    description: "Комплект Фараон тройка — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "220 см"], ["Размер кресла", "110 см"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-romano-1",
    name: "Комплект Романо",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-romano-1-1.jpg",
    images: ["/assets/komplekt-romano-1-1.jpg","/assets/komplekt-romano-1-2.jpg","/assets/komplekt-romano-1-3.jpg","/assets/komplekt-romano-1-4.jpg"],
    description: "Комплект Романо — мягкий комплект для гостиной, диван нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "240 см"], ["Размер кресла", "130 см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-romano-2",
    name: "Комплект Романо",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-romano-2-1.jpg",
    images: ["/assets/komplekt-romano-2-1.jpg","/assets/komplekt-romano-2-2.jpg","/assets/komplekt-romano-2-3.jpg","/assets/komplekt-romano-2-4.jpg"],
    description: "Комплект Романо — мягкий комплект для гостиной, диван нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "240 см"], ["Размер кресла", "130 см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-romano-3",
    name: "Комплект Романо",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-romano-3-1.jpg",
    images: ["/assets/komplekt-romano-3-1.jpg","/assets/komplekt-romano-3-2.jpg","/assets/komplekt-romano-3-3.jpg","/assets/komplekt-romano-3-4.jpg"],
    description: "Комплект Романо — мягкий комплект для гостиной, диван нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "240 см"], ["Размер кресла", "130 см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-romano-4",
    name: "Комплект Романо",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-romano-4-1.jpg",
    images: ["/assets/komplekt-romano-4-1.jpg","/assets/komplekt-romano-4-2.jpg","/assets/komplekt-romano-4-3.jpg","/assets/komplekt-romano-4-4.jpg"],
    description: "Комплект Романо — мягкий комплект для гостиной, диван нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "240 см"], ["Размер кресла", "130 см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-roza-1",
    name: "Комплект Роза",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-roza-1-1.jpg",
    images: ["/assets/komplekt-roza-1-1.jpg","/assets/komplekt-roza-1-2.jpg","/assets/komplekt-roza-1-3.jpg","/assets/komplekt-roza-1-4.jpg"],
    description: "Комплект Роза — мягкий комплект для гостиной, диван нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "230 см"], ["Размер кресла", "120 см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-roza-2",
    name: "Комплект Роза",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-roza-2-1.jpg",
    images: ["/assets/komplekt-roza-2-1.jpg","/assets/komplekt-roza-2-2.jpg","/assets/komplekt-roza-2-3.jpg","/assets/komplekt-roza-2-4.jpg"],
    description: "Комплект Роза — мягкий комплект для гостиной, диван нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "230 см"], ["Размер кресла", "120 см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-sultan-troyka-1",
    name: "Комплект Султан тройка",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-sultan-troyka-1-1.jpg",
    images: ["/assets/komplekt-sultan-troyka-1-1.jpg","/assets/komplekt-sultan-troyka-1-2.jpg","/assets/komplekt-sultan-troyka-1-3.jpg","/assets/komplekt-sultan-troyka-1-4.jpg"],
    description: "Комплект Султан тройка — мягкий комплект для гостиной, диван нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "250 см"], ["Размер кресла", "120 см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-sultan-troyka-2",
    name: "Комплект Султан тройка",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-sultan-troyka-2-1.jpg",
    images: ["/assets/komplekt-sultan-troyka-2-1.jpg","/assets/komplekt-sultan-troyka-2-2.jpg","/assets/komplekt-sultan-troyka-2-3.jpg","/assets/komplekt-sultan-troyka-2-4.jpg"],
    description: "Комплект Султан тройка — мягкий комплект для гостиной, диван нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер дивана", "250 см"], ["Размер кресла", "120 см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "divan-sultan",
    name: "Диван «Султан»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/divan-sultan-1.jpg",
    images: ["/assets/divan-sultan-1.jpg","/assets/divan-sultan-2.jpg","/assets/divan-sultan-3.jpg","/assets/divan-sultan-4.jpg"],
    description: "Диван «Султан» — нераскладная модель для гостиной с двумя вариантами цвета.",
    characteristics: [["Подкатегория", "Диваны"], ["Механизм", "нераскладной"], ["Цвета", "голубой с золотым декором, светлый бежево-кремовый"]],
    colorOptions: [{"label":"Голубой с золотым декором","image":"/assets/divan-sultan-1.jpg"},{"label":"Светлый бежево-кремовый","image":"/assets/divan-sultan-2.jpg"}],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-marokko-1",
    name: "Комплект Марокко",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-marokko-1-1.jpg",
    images: ["/assets/komplekt-marokko-1-1.jpg","/assets/komplekt-marokko-1-2.jpg","/assets/komplekt-marokko-1-3.jpg"],
    description: "Комплект Марокко — диван и два кресла для гостиной, спинка дивана откидная.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла"], ["Диван", "длина 2.40 м, ширина 1 м, высота 90 см"], ["Сидушка дивана", "175 × 55 см"], ["Диван в откидном виде", "175 × 90 см"], ["Кресло", "длина 80 см, ширина 80 см, высота 1 м"], ["Сидушка кресла", "55 × 55 см"], ["Механизм", "диван нераскладной, только спинка откидная"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-marokko-2",
    name: "Комплект Марокко",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-marokko-2-1.jpg",
    images: ["/assets/komplekt-marokko-2-1.jpg"],
    description: "Комплект Марокко — диван и два кресла для гостиной, спинка дивана откидная.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла"], ["Диван", "длина 2.40 м, ширина 1 м, высота 90 см"], ["Сидушка дивана", "175 × 55 см"], ["Диван в откидном виде", "175 × 90 см"], ["Кресло", "длина 80 см, ширина 80 см, высота 1 м"], ["Сидушка кресла", "55 × 55 см"], ["Механизм", "диван нераскладной, только спинка откидная"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-neapol-1",
    name: "Комплект Неаполь",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-neapol-1-1.jpg",
    images: ["/assets/komplekt-neapol-1-1.jpg","/assets/komplekt-neapol-1-2.jpg","/assets/komplekt-neapol-1-3.jpg"],
    description: "Комплект Неаполь — диван и кресло для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Диван", "длина 2.40 м, ширина 85 см, высота 125 см"], ["Сидячее место дивана", "длина 175 см, глубина 65 см"], ["Кресло", "длина 125 см, ширина 85 см, высота 125 см"], ["Сидячее место кресла", "длина 60 см, глубина 60 см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-neapol-2",
    name: "Комплект Неаполь",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-neapol-2-1.jpg",
    images: ["/assets/komplekt-neapol-2-1.jpg","/assets/komplekt-neapol-2-2.jpg","/assets/komplekt-neapol-2-3.jpg","/assets/komplekt-neapol-2-4.jpg"],
    description: "Комплект Неаполь — диван и кресло для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Диван", "длина 2.40 м, ширина 85 см, высота 125 см"], ["Сидячее место дивана", "длина 175 см, глубина 65 см"], ["Кресло", "длина 125 см, ширина 85 см, высота 125 см"], ["Сидячее место кресла", "длина 60 см, глубина 60 см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-emiliya-1",
    name: "Комплект Эмилия",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-emiliya-1-1.jpg",
    images: ["/assets/komplekt-emiliya-1-1.jpg","/assets/komplekt-emiliya-1-2.jpg","/assets/komplekt-emiliya-1-3.jpg","/assets/komplekt-emiliya-1-4.jpg"],
    description: "Комплект Эмилия — диван и кресло для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Диван", "длина 2.40 м, ширина 1 м, высота 92 см"], ["Сидячее место дивана", "длина 1.90 м, глубина 95 см"], ["Кресло", "длина 1 м, ширина 1 м, высота 92 см"], ["Сидячее место кресла", "длина 52 см, глубина 95 см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-emiliya-2",
    name: "Комплект Эмилия",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-emiliya-2-1.jpg",
    images: ["/assets/komplekt-emiliya-2-1.jpg","/assets/komplekt-emiliya-2-2.jpg","/assets/komplekt-emiliya-2-3.jpg","/assets/komplekt-emiliya-2-4.jpg","/assets/komplekt-emiliya-2-5.jpg"],
    description: "Комплект Эмилия — диван и кресло для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Диван", "длина 2.40 м, ширина 1 м, высота 92 см"], ["Сидячее место дивана", "длина 1.90 м, глубина 95 см"], ["Кресло", "длина 1 м, ширина 1 м, высота 92 см"], ["Сидячее место кресла", "длина 52 см, глубина 95 см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-emiliya-3",
    name: "Комплект Эмилия",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-emiliya-3-1.jpg",
    images: ["/assets/komplekt-emiliya-3-1.jpg","/assets/komplekt-emiliya-3-2.jpg","/assets/komplekt-emiliya-3-3.jpg","/assets/komplekt-emiliya-3-4.jpg","/assets/komplekt-emiliya-3-5.jpg","/assets/komplekt-emiliya-3-6.jpg"],
    description: "Комплект Эмилия — диван и кресло для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Диван", "длина 2.40 м, ширина 1 м, высота 92 см"], ["Сидячее место дивана", "длина 1.90 м, глубина 95 см"], ["Кресло", "длина 1 м, ширина 1 м, высота 92 см"], ["Сидячее место кресла", "длина 52 см, глубина 95 см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-aylin-135-1",
    name: "Комплект Айлин",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "135 000 ₽",
    image: "/assets/komplekt-aylin-135-1-1.jpg",
    images: ["/assets/komplekt-aylin-135-1-1.jpg","/assets/komplekt-aylin-135-1-2.jpg","/assets/komplekt-aylin-135-1-3.jpg","/assets/komplekt-aylin-135-1-4.jpg","/assets/komplekt-aylin-135-1-5.jpg","/assets/komplekt-aylin-135-1-6.jpg","/assets/komplekt-aylin-135-1-7.jpg"],
    description: "Комплект Айлин — диван, два кресла и семь подушек для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла, семь подушек"], ["Диван", "длина 2.30 м, ширина 1 м, высота 1.25 м"], ["Сидячее место дивана", "1.75 × 67 см"], ["Кресло", "длина 1 м, ширина 1 м, высота 1.22 м"], ["Сидячее место кресла", "50 × 65 см"], ["Особенности", "съемная спинка дивана"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-aylin-135-2",
    name: "Комплект Айлин",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "135 000 ₽",
    image: "/assets/komplekt-aylin-135-2-1.jpg",
    images: ["/assets/komplekt-aylin-135-2-1.jpg","/assets/komplekt-aylin-135-2-2.jpg","/assets/komplekt-aylin-135-2-3.jpg","/assets/komplekt-aylin-135-2-4.jpg"],
    description: "Комплект Айлин — диван, два кресла и семь подушек для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла, семь подушек"], ["Диван", "длина 2.30 м, ширина 1 м, высота 1.25 м"], ["Сидячее место дивана", "1.75 × 67 см"], ["Кресло", "длина 1 м, ширина 1 м, высота 1.22 м"], ["Сидячее место кресла", "50 × 65 см"], ["Особенности", "съемная спинка дивана"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-peppino-85-1",
    name: "Комплект Пеппино",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-peppino-85-1-1.jpg",
    images: ["/assets/komplekt-peppino-85-1-1.jpg","/assets/komplekt-peppino-85-1-2.jpg","/assets/komplekt-peppino-85-1-3.jpg","/assets/komplekt-peppino-85-1-4.jpg"],
    description: "Комплект Пеппино — диван, два кресла и пять подушек для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла, пять подушек"], ["Диван", "ширина 2.42 м, глубина 1 м, высота 83 см"], ["Сидушка дивана", "182 × 70 см"], ["Кресло", "ширина 118 см"], ["Сидушка кресла", "65 × 60 см"], ["Особенности", "спинки и чехлы съемные"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-peppino-85-2",
    name: "Комплект Пеппино",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-peppino-85-2-1.jpg",
    images: ["/assets/komplekt-peppino-85-2-1.jpg","/assets/komplekt-peppino-85-2-2.jpg","/assets/komplekt-peppino-85-2-3.jpg","/assets/komplekt-peppino-85-2-4.jpg"],
    description: "Комплект Пеппино — диван, два кресла и пять подушек для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла, пять подушек"], ["Диван", "ширина 2.42 м, глубина 1 м, высота 83 см"], ["Сидушка дивана", "182 × 70 см"], ["Кресло", "ширина 118 см"], ["Сидушка кресла", "65 × 60 см"], ["Особенности", "спинки и чехлы съемные"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-gucci-1",
    name: "Комплект Gucci",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/komplekt-gucci-1-1.jpg",
    images: ["/assets/komplekt-gucci-1-1.jpg","/assets/komplekt-gucci-1-2.jpg","/assets/komplekt-gucci-1-3.jpg","/assets/komplekt-gucci-1-4.jpg"],
    description: "Комплект Gucci — диван и кресло с металлическим декором.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Диван", "длина 235 см, сидячее место 185 × 65 см"], ["Диван в откидном виде", "185 × 100 см"], ["Высота спинки дивана", "93 см"], ["Глубина дивана от стены", "90 см"], ["Кресло", "ширина 72 см, глубина 52 см, высота спинки 88 см"], ["Сидячее место кресла", "52 × 56 см"], ["Декор", "металл"], ["Механизм", "диван нераскладной, только спинка откидная"], ["Расцветка", "ткань и декор можно сделать на ваш вкус"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-gucci-2",
    name: "Комплект Gucci",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/komplekt-gucci-2-1.jpg",
    images: ["/assets/komplekt-gucci-2-1.jpg","/assets/komplekt-gucci-2-2.jpg","/assets/komplekt-gucci-2-3.jpg","/assets/komplekt-gucci-2-4.jpg","/assets/komplekt-gucci-2-5.jpg","/assets/komplekt-gucci-2-6.jpg"],
    description: "Комплект Gucci — диван и кресло с металлическим декором.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Диван", "длина 235 см, сидячее место 185 × 65 см"], ["Диван в откидном виде", "185 × 100 см"], ["Высота спинки дивана", "93 см"], ["Глубина дивана от стены", "90 см"], ["Кресло", "ширина 72 см, глубина 52 см, высота спинки 88 см"], ["Сидячее место кресла", "52 × 56 см"], ["Декор", "металл"], ["Механизм", "диван нераскладной, только спинка откидная"], ["Расцветка", "ткань и декор можно сделать на ваш вкус"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-lord-55-1",
    name: "Комплект Лорд",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "55 000 ₽",
    image: "/assets/komplekt-lord-55-1-1.jpg",
    images: ["/assets/komplekt-lord-55-1-1.jpg","/assets/komplekt-lord-55-1-2.jpg","/assets/komplekt-lord-55-1-3.jpg"],
    description: "Комплект Лорд — раскладной диван и кресла для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресла"], ["Общий размер", "4.40 м"], ["Механизм", "диван и кресла раскладные"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-lord-55-2",
    name: "Комплект Лорд",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "55 000 ₽",
    image: "/assets/komplekt-lord-55-2-1.jpg",
    images: ["/assets/komplekt-lord-55-2-1.jpg","/assets/komplekt-lord-55-2-2.jpg","/assets/komplekt-lord-55-2-3.jpg"],
    description: "Комплект Лорд — раскладной диван и кресла для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресла"], ["Общий размер", "4.40 м"], ["Механизм", "диван и кресла раскладные"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-milena-54-1",
    name: "Комплект Милена",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "54 000 ₽",
    image: "/assets/komplekt-milena-54-1-1.jpg",
    images: ["/assets/komplekt-milena-54-1-1.jpg","/assets/komplekt-milena-54-1-2.jpg","/assets/komplekt-milena-54-1-3.jpg"],
    description: "Комплект Милена — раскладной диван и кресла для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресла"], ["Общий размер", "4.40 м"], ["Механизм", "диван и кресла раскладные"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-milena-54-2",
    name: "Комплект Милена",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "54 000 ₽",
    image: "/assets/komplekt-milena-54-2-1.jpg",
    images: ["/assets/komplekt-milena-54-2-1.jpg","/assets/komplekt-milena-54-2-2.jpg","/assets/komplekt-milena-54-2-3.jpg","/assets/komplekt-milena-54-2-4.jpg","/assets/komplekt-milena-54-2-5.jpg","/assets/komplekt-milena-54-2-6.jpg","/assets/komplekt-milena-54-2-7.jpg"],
    description: "Комплект Милена — раскладной диван и кресла для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресла"], ["Общий размер", "4.40 м"], ["Механизм", "диван и кресла раскладные"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-ugol-milena-54",
    name: "Комплект Угол Милена",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "54 000 ₽",
    image: "/assets/komplekt-ugol-milena-54-1.jpg",
    images: ["/assets/komplekt-ugol-milena-54-1.jpg","/assets/komplekt-ugol-milena-54-2.jpg"],
    description: "Комплект Угол Милена — раскладной диван и кресло для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Общий размер", "380 × 190 см"], ["Механизм", "диван и кресло раскладные"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-bellona-latest-1",
    name: "Комплект Bellona",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "87 000 ₽",
    image: "/assets/komplekt-bellona-latest-1-1.jpg",
    images: ["/assets/komplekt-bellona-latest-1-1.jpg","/assets/komplekt-bellona-latest-1-2.jpg","/assets/komplekt-bellona-latest-1-3.jpg","/assets/komplekt-bellona-latest-1-4.jpg","/assets/komplekt-bellona-latest-1-5.jpg","/assets/komplekt-bellona-latest-1-6.jpg"],
    description: "Комплект Bellona — диван и два кресла для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла, шесть подушек"], ["Диван", "ширина 2.55 м, глубина 1 м, высота 80 см"], ["Лежачее место", "180 × 70 см"], ["Спальное место", "180 × 130 см"], ["Кресло", "ширина 1.30 м, глубина 1 м, высота 80 см"], ["Сидячее место кресла", "65 × 65 см"], ["Механизм", "выкатной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-bellona-latest-2",
    name: "Комплект Bellona",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-bellona-latest-2-1.jpg",
    images: ["/assets/komplekt-bellona-latest-2-1.jpg","/assets/komplekt-bellona-latest-2-2.jpg","/assets/komplekt-bellona-latest-2-3.jpg","/assets/komplekt-bellona-latest-2-4.jpg","/assets/komplekt-bellona-latest-2-5.jpg"],
    description: "Комплект Bellona — диван и два кресла для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла, семь подушек"], ["Диван", "ширина 2.55 м, глубина 1 м, высота 80 см"], ["Лежачее место", "180 × 70 см"], ["Кресло", "ширина 80 см, глубина 90 см, высота 90 см"], ["Сидячее место кресла", "60 × 60 см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-bellona-latest-3",
    name: "Комплект Bellona",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-bellona-latest-3-1.jpg",
    images: ["/assets/komplekt-bellona-latest-3-1.jpg","/assets/komplekt-bellona-latest-3-2.jpg","/assets/komplekt-bellona-latest-3-3.jpg","/assets/komplekt-bellona-latest-3-4.jpg","/assets/komplekt-bellona-latest-3-5.jpg","/assets/komplekt-bellona-latest-3-6.jpg"],
    description: "Комплект Bellona — диван и два кресла для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла, семь подушек"], ["Диван", "ширина 2.55 м, глубина 1 м, высота 80 см"], ["Лежачее место", "180 × 70 см"], ["Кресло", "ширина 80 см, глубина 90 см, высота 90 см"], ["Сидячее место кресла", "60 × 60 см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-milord",
    name: "Комплект Милорд",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-milord-1.jpg",
    images: ["/assets/komplekt-milord-1.jpg","/assets/komplekt-milord-2.jpg","/assets/komplekt-milord-3.jpg","/assets/komplekt-milord-4.jpg"],
    description: "Комплект Милорд — мягкий комплект для гостиной, нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-lord",
    name: "Комплект «Лорд»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/komplekt-lord-1.jpg",
    images: ["/assets/komplekt-lord-1.jpg","/assets/komplekt-lord-2.jpg","/assets/komplekt-lord-3.jpg","/assets/komplekt-lord-4.jpg","/assets/komplekt-lord-5.jpg"],
    description: "Комплект «Лорд» — мягкий комплект для гостиной, размер 180х120.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "180х120"], ["Производство", "Ставрополь"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-lord-2",
    name: "Комплект «Лорд»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/komplekt-lord-2-1.jpg",
    images: ["/assets/komplekt-lord-2-1.jpg","/assets/komplekt-lord-2-2.jpg","/assets/komplekt-lord-2-3.jpg","/assets/komplekt-lord-2-4.jpg"],
    description: "Комплект «Лорд» — мягкий комплект для гостиной, размер 270х170.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "270х170"], ["Производство", "Армавир"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-barselona",
    name: "Комплект «Барселона»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "55 000 ₽",
    image: "/assets/komplekt-barselona-1.jpg",
    images: ["/assets/komplekt-barselona-1.jpg","/assets/komplekt-barselona-2.jpg","/assets/komplekt-barselona-3.jpg","/assets/komplekt-barselona-4.jpg","/assets/komplekt-barselona-5.jpg","/assets/komplekt-barselona-6.jpg","/assets/komplekt-barselona-7.jpg","/assets/komplekt-barselona-8.jpg","/assets/komplekt-barselona-9.jpg","/assets/komplekt-barselona-10.jpg"],
    description: "Комплект «Барселона» — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Производство", "Ставрополь"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-barselona-2",
    name: "Комплект «Барселона»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "55 000 ₽",
    image: "/assets/komplekt-barselona-2-1.jpg",
    images: ["/assets/komplekt-barselona-2-1.jpg","/assets/komplekt-barselona-2-2.jpg","/assets/komplekt-barselona-2-3.jpg","/assets/komplekt-barselona-2-4.jpg","/assets/komplekt-barselona-2-5.jpg","/assets/komplekt-barselona-2-6.jpg","/assets/komplekt-barselona-2-7.jpg","/assets/komplekt-barselona-2-8.jpg","/assets/komplekt-barselona-2-9.jpg","/assets/komplekt-barselona-2-10.jpg"],
    description: "Комплект «Барселона» — мягкий комплект для гостиной, размер 270х170.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "270х170"], ["Производство", "Ставраполь"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-milena",
    name: "Комплект Милена",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/komplekt-milena-1.jpg",
    images: ["/assets/komplekt-milena-1.jpg","/assets/komplekt-milena-2.jpg","/assets/komplekt-milena-3.jpg","/assets/komplekt-milena-4.jpg","/assets/komplekt-milena-5.jpg","/assets/komplekt-milena-6.jpg","/assets/komplekt-milena-7.jpg","/assets/komplekt-milena-8.jpg","/assets/komplekt-milena-9.jpg","/assets/komplekt-milena-10.jpg"],
    description: "Комплект Милена — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-milena-2",
    name: "Комплект «Милена»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/komplekt-milena-2-1.jpg",
    images: ["/assets/komplekt-milena-2-1.jpg","/assets/komplekt-milena-2-2.jpg","/assets/komplekt-milena-2-3.jpg","/assets/komplekt-milena-2-4.jpg","/assets/komplekt-milena-2-5.jpg","/assets/komplekt-milena-2-6.jpg"],
    description: "Комплект «Милена» — мягкий комплект для гостиной, раскладной, размер 380х190.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "380х190"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "divan-korona-2",
    name: "Диван «Корона-2»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "80 000 ₽",
    image: "/assets/divan-korona-2-1.jpg",
    images: ["/assets/divan-korona-2-1.jpg","/assets/divan-korona-2-2.jpg","/assets/divan-korona-2-3.jpg","/assets/divan-korona-2-4.jpg","/assets/divan-korona-2-5.jpg","/assets/divan-korona-2-6.jpg"],
    description: "Диван «Корона-2» — мягкая мебель для уютной зоны отдыха, раскладной.",
    characteristics: [["Подкатегория", "Диваны"], ["Механизм", "раскладной"]],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-bellona",
    name: "Комплект Bellona",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-bellona-1.jpg",
    images: ["/assets/komplekt-bellona-1.jpg","/assets/komplekt-bellona-2.jpg","/assets/komplekt-bellona-3.jpg","/assets/komplekt-bellona-4.jpg","/assets/komplekt-bellona-5.jpg","/assets/komplekt-bellona-6.jpg"],
    description: "Комплект Bellona — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-bellona-2",
    name: "Комплект Bellona",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "90 000 ₽",
    image: "/assets/komplekt-bellona-2-1.jpg",
    images: ["/assets/komplekt-bellona-2-1.jpg","/assets/komplekt-bellona-2-2.jpg","/assets/komplekt-bellona-2-3.jpg","/assets/komplekt-bellona-2-4.jpg","/assets/komplekt-bellona-2-5.jpg"],
    description: "Комплект Bellona — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-chester",
    name: "Комплект «Честер»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "85 000 ₽",
    image: "/assets/komplekt-chester-1.jpg",
    images: ["/assets/komplekt-chester-1.jpg","/assets/komplekt-chester-2.jpg","/assets/komplekt-chester-3.jpg","/assets/komplekt-chester-4.jpg"],
    description: "Комплект «Честер» — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "uglovoy-divan-chester",
    name: "Угловой диван «Честер»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "93 000 ₽",
    image: "/assets/uglovoy-divan-chester-1.jpg",
    images: ["/assets/uglovoy-divan-chester-1.jpg"],
    description: "Угловой диван «Честер» — угловой диван для просторной зоны отдыха, размер 310х210.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "310х210"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "komplekt-bersen",
    name: "Комплект «Bersen»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-bersen-1.jpg",
    images: ["/assets/komplekt-bersen-1.jpg","/assets/komplekt-bersen-2.jpg","/assets/komplekt-bersen-3.jpg"],
    description: "Комплект «Bersen» — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-mango",
    name: "Комплект «Манго»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "77 000 ₽",
    image: "/assets/komplekt-mango-1.jpg",
    images: ["/assets/komplekt-mango-1.jpg","/assets/komplekt-mango-2.jpg","/assets/komplekt-mango-3.jpg","/assets/komplekt-mango-4.jpg"],
    description: "Комплект «Манго» — мягкий комплект для гостиной, размер 310х225.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "310х225"], ["Производство", "Армавир"]],
    subcategory: "Комплекты",
  },
  {
    slug: "uglovoy-divan-elizaveta",
    name: "Угловой диван «Елизавета»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "80 000 ₽",
    image: "/assets/uglovoy-divan-elizaveta-1.jpg",
    images: ["/assets/uglovoy-divan-elizaveta-1.jpg","/assets/uglovoy-divan-elizaveta-2.jpg","/assets/uglovoy-divan-elizaveta-3.jpg"],
    description: "Угловой диван «Елизавета» — угловой диван для просторной зоны отдыха, размер 410х240х190.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "410х240х190"], ["Производство", "Армавир"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "divan-afina",
    name: "Угловой диван «Афина»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/divan-afina-1.jpg",
    images: ["/assets/divan-afina-1.jpg","/assets/divan-afina-2.jpg","/assets/divan-afina-3.jpg","/assets/divan-afina-4.jpg","/assets/divan-afina-5.jpg","/assets/divan-afina-6.jpg","/assets/divan-afina-7.jpg","/assets/divan-afina-8.jpg","/assets/divan-afina-9.jpg"],
    description: "Угловой диван «Афина» — мягкая мебель для уютной зоны отдыха, размер 290х250.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "290х250"], ["Производство", "Армавир"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "komplekt-interio",
    name: "Комплект Интерио",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "65 000 ₽",
    image: "/assets/komplekt-interio-1.jpg",
    images: ["/assets/komplekt-interio-1.jpg","/assets/komplekt-interio-2.jpg","/assets/komplekt-interio-3.jpg"],
    description: "Комплект Интерио — мягкий комплект для гостиной, нераскладной, размер 2.30 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.30 м/см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-verdi",
    name: "Комплект Verdi",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "73 000 ₽",
    image: "/assets/komplekt-verdi-1.jpg",
    images: ["/assets/komplekt-verdi-1.jpg","/assets/komplekt-verdi-2.jpg","/assets/komplekt-verdi-3.jpg"],
    description: "Комплект Verdi — мягкий комплект для гостиной, нераскладной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-melek-shah",
    name: "Комплект Мелек шах",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "90 000 ₽",
    image: "/assets/komplekt-melek-shah-1.jpg",
    images: ["/assets/komplekt-melek-shah-1.jpg"],
    description: "Комплект Мелек шах — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-tureckaya-model-hande",
    name: "Комплект Турецкая модель «Ханде»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-tureckaya-model-hande-1.jpg",
    images: ["/assets/komplekt-tureckaya-model-hande-1.jpg"],
    description: "Комплект Турецкая модель «Ханде» — мягкий комплект для гостиной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-tureckaya-model-graf",
    name: "Комплект Турецкая модель «ГРАФ»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/komplekt-tureckaya-model-graf-1.jpg",
    images: ["/assets/komplekt-tureckaya-model-graf-1.jpg"],
    description: "Комплект Турецкая модель «ГРАФ» — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-verdi-2",
    name: "Комплект Verdi",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-verdi-2-1.jpg",
    images: ["/assets/komplekt-verdi-2-1.jpg","/assets/komplekt-verdi-2-2.jpg","/assets/komplekt-verdi-2-3.jpg","/assets/komplekt-verdi-2-4.jpg"],
    description: "Комплект Verdi — мягкий комплект для гостиной, нераскладной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-korolevskaya",
    name: "Комплект Королевская",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "115 000 ₽",
    image: "/assets/komplekt-korolevskaya-1.jpg",
    images: ["/assets/komplekt-korolevskaya-1.jpg","/assets/komplekt-korolevskaya-2.jpg","/assets/komplekt-korolevskaya-3.jpg","/assets/komplekt-korolevskaya-4.jpg","/assets/komplekt-korolevskaya-5.jpg"],
    description: "Комплект Королевская — мягкий комплект для гостиной, нераскладной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-model-romashka",
    name: "Комплект Модель РОМАШКА",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "102 000 ₽",
    image: "/assets/komplekt-model-romashka-1.jpg",
    images: ["/assets/komplekt-model-romashka-1.jpg","/assets/komplekt-model-romashka-2.jpg","/assets/komplekt-model-romashka-3.jpg","/assets/komplekt-model-romashka-4.jpg","/assets/komplekt-model-romashka-5.jpg","/assets/komplekt-model-romashka-6.jpg","/assets/komplekt-model-romashka-7.jpg","/assets/komplekt-model-romashka-8.jpg"],
    description: "Комплект Модель РОМАШКА — мягкий комплект для гостиной, размер 1,90х1.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "1,90х1"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-ankara-divan-dva-kresla-7-podushek",
    name: "Комплект «АнКаРа»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "120 000 ₽",
    image: "/assets/komplekt-ankara-divan-dva-kresla-7-podushek-1.jpg",
    images: ["/assets/komplekt-ankara-divan-dva-kresla-7-podushek-1.jpg","/assets/komplekt-ankara-divan-dva-kresla-7-podushek-2.jpg","/assets/komplekt-ankara-divan-dva-kresla-7-podushek-3.jpg"],
    description: "Комплект «АнКаРа» — мягкий комплект для гостиной, нераскладной, размер 2.30 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, два кресла, 7 подушек"], ["Размер", "2.30 м/см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-lori",
    name: "Комплект LORI",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "79 000 ₽",
    image: "/assets/komplekt-lori-1.jpg",
    images: ["/assets/komplekt-lori-1.jpg"],
    description: "Комплект LORI — мягкий комплект для гостиной, нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-brosko-new",
    name: "Комплект BROSKO New",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/komplekt-brosko-new-1.jpg",
    images: ["/assets/komplekt-brosko-new-1.jpg","/assets/komplekt-brosko-new-2.jpg","/assets/komplekt-brosko-new-3.jpg"],
    description: "Комплект BROSKO New — мягкий комплект для гостиной, нераскладной, размер 2.25 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.25 м/см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-malta",
    name: "Комплект «Мальта»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-malta-1.jpg",
    images: ["/assets/komplekt-malta-1.jpg","/assets/komplekt-malta-2.jpg","/assets/komplekt-malta-3.jpg","/assets/komplekt-malta-4.jpg","/assets/komplekt-malta-5.jpg"],
    description: "Комплект «Мальта» — мягкий комплект для гостиной, размер 180х90.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "180х90"], ["Производство", "Армавир"]],
    subcategory: "Комплекты",
  },
  {
    slug: "divan-dakota",
    name: "Диван «Дакота»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "36 500 ₽",
    image: "/assets/divan-dakota-1.jpg",
    images: ["/assets/divan-dakota-1.jpg","/assets/divan-dakota-2.jpg","/assets/divan-dakota-3.jpg","/assets/divan-dakota-4.jpg","/assets/divan-dakota-5.jpg","/assets/divan-dakota-6.jpg"],
    description: "Диван «Дакота» — мягкая мебель для уютной зоны отдыха, размер 126х195.",
    characteristics: [["Подкатегория", "Диваны"], ["Размер", "126х195"], ["Производство", "Краснодар"]],
    subcategory: "Диваны",
  },
  {
    slug: "divan-mehiko",
    name: "Диван «Мехико»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "38 500 ₽",
    image: "/assets/divan-mehiko-1.jpg",
    images: ["/assets/divan-mehiko-1.jpg","/assets/divan-mehiko-2.jpg","/assets/divan-mehiko-3.jpg","/assets/divan-mehiko-4.jpg"],
    description: "Диван «Мехико» — мягкая мебель для уютной зоны отдыха, размер 193х148.",
    characteristics: [["Подкатегория", "Диваны"], ["Размер", "193х148"], ["Производство", "Ставрополь"]],
    subcategory: "Диваны",
  },
  {
    slug: "divan-london",
    name: "Диван «Лондон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "32 500 ₽",
    image: "/assets/divan-london-1.jpg",
    images: ["/assets/divan-london-1.jpg","/assets/divan-london-2.jpg","/assets/divan-london-3.jpg","/assets/divan-london-4.jpg"],
    description: "Диван «Лондон» — мягкая мебель для уютной зоны отдыха, размер 140х190.",
    characteristics: [["Подкатегория", "Диваны"], ["Размер", "140х190"], ["Производство", "Ставрополь"]],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-london",
    name: "Комплект «Лондон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/komplekt-london-1.jpg",
    images: ["/assets/komplekt-london-1.jpg","/assets/komplekt-london-2.jpg","/assets/komplekt-london-3.jpg","/assets/komplekt-london-4.jpg"],
    description: "Комплект «Лондон» — мягкий комплект для гостиной, размер 270х190.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "270х190"], ["Производство", "Ставрополь"]],
    subcategory: "Комплекты",
  },
  {
    slug: "divan-denver",
    name: "Диван «Денвер»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "48 000 ₽",
    image: "/assets/divan-denver-1.jpg",
    images: ["/assets/divan-denver-1.jpg","/assets/divan-denver-2.jpg","/assets/divan-denver-3.jpg","/assets/divan-denver-4.jpg"],
    description: "Диван «Денвер» — мягкая мебель для уютной зоны отдыха, размер 148х192.",
    characteristics: [["Подкатегория", "Диваны"], ["Размер", "148х192"], ["Производство", "Ставрополь"]],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-palermo",
    name: "Комплект «Палермо»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "98 000 ₽",
    image: "/assets/komplekt-palermo-1.jpg",
    images: ["/assets/komplekt-palermo-1.jpg","/assets/komplekt-palermo-2.jpg"],
    description: "Комплект «Палермо» — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Производство", "Краснодар"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-boston",
    name: "Комплект «Бостон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "105 000 ₽",
    image: "/assets/komplekt-boston-1.jpg",
    images: ["/assets/komplekt-boston-1.jpg","/assets/komplekt-boston-2.jpg","/assets/komplekt-boston-3.jpg","/assets/komplekt-boston-4.jpg","/assets/komplekt-boston-5.jpg"],
    description: "Комплект «Бостон» — мягкий комплект для гостиной, размер 175х85.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "175х85"], ["Производство", "Краснодар"]],
    subcategory: "Комплекты",
  },
  {
    slug: "uglovoy-divan-graciya",
    name: "Угловой диван «Грация»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "62 000 ₽",
    image: "/assets/uglovoy-divan-graciya-1.jpg",
    images: ["/assets/uglovoy-divan-graciya-1.jpg","/assets/uglovoy-divan-graciya-2.jpg"],
    description: "Угловой диван «Грация» — угловой диван для просторной зоны отдыха, размер 385х200.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "385х200"], ["Производство", "Армавир"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "divan-monako",
    name: "Диван «Монако»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "52 000 ₽",
    image: "/assets/divan-monako-1.jpg",
    images: ["/assets/divan-monako-1.jpg","/assets/divan-monako-2.jpg","/assets/divan-monako-3.jpg"],
    description: "Диван «Монако» — мягкая мебель для уютной зоны отдыха.",
    characteristics: [["Подкатегория", "Диваны"], ["Производство", "Ставрополь"]],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-palermo-ugol-puf",
    name: "Комплект Палермо угол + пуф",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "53 000 ₽",
    image: "/assets/komplekt-palermo-ugol-puf-1.jpg",
    images: ["/assets/komplekt-palermo-ugol-puf-1.jpg"],
    description: "Комплект Палермо угол + пуф — мягкий комплект для гостиной, размер 270х182.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "270х182"]],
    subcategory: "Комплекты",
  },
  {
    slug: "uglovoy-divan-optima",
    name: "Угловой диван «Оптима»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "120 000 ₽",
    image: "/assets/uglovoy-divan-optima-1.jpg",
    images: ["/assets/uglovoy-divan-optima-1.jpg","/assets/uglovoy-divan-optima-2.jpg"],
    description: "Угловой диван «Оптима» — угловой диван для просторной зоны отдыха, размер 400х183.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "400х183"], ["Производство", "Казахстан"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "komplekt-madlen",
    name: "Комплект «Мадлен»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/komplekt-madlen-1.jpg",
    images: ["/assets/komplekt-madlen-1.jpg","/assets/komplekt-madlen-2.jpg","/assets/komplekt-madlen-3.jpg"],
    description: "Комплект «Мадлен» — мягкий комплект для гостиной, размер 300х210.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "300х210"], ["Производство", "Армавир"]],
    subcategory: "Комплекты",
  },
  {
    slug: "divan-chester",
    name: "Диван «Честер»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "37 500 ₽",
    image: "/assets/divan-chester-1.jpg",
    images: ["/assets/divan-chester-1.jpg","/assets/divan-chester-2.jpg","/assets/divan-chester-3.jpg","/assets/divan-chester-4.jpg","/assets/divan-chester-5.jpg","/assets/divan-chester-6.jpg"],
    description: "Диван «Честер» — мягкая мебель для уютной зоны отдыха, размер 180х120.",
    characteristics: [["Подкатегория", "Диваны"], ["Размер", "180х120"], ["Производство", "Армавир"]],
    subcategory: "Диваны",
  },
  {
    slug: "divan-lord",
    name: "Диван «Лорд»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "32 500 ₽",
    image: "/assets/divan-lord-1.jpg",
    images: ["/assets/divan-lord-1.jpg","/assets/divan-lord-2.jpg","/assets/divan-lord-3.jpg","/assets/divan-lord-4.jpg","/assets/divan-lord-5.jpg"],
    description: "Диван «Лорд» — мягкая мебель для уютной зоны отдыха, размер 120х190.",
    characteristics: [["Подкатегория", "Диваны"], ["Размер", "120х190"], ["Производство", "Ставрополь"]],
    subcategory: "Диваны",
  },
  {
    slug: "divan-barselona",
    name: "Диван «Барселона»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "29 000 ₽",
    image: "/assets/divan-barselona-1.jpg",
    images: ["/assets/divan-barselona-1.jpg","/assets/divan-barselona-2.jpg","/assets/divan-barselona-3.jpg"],
    description: "Диван «Барселона» — мягкая мебель для уютной зоны отдыха, размер 120х180.",
    characteristics: [["Подкатегория", "Диваны"], ["Размер", "120х180"], ["Производство", "Ставраполь"]],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-model-novella",
    name: "Комплект Модель \"Новелла\"",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "120 000 ₽",
    image: "/assets/komplekt-model-novella-1.jpg",
    images: ["/assets/komplekt-model-novella-1.jpg","/assets/komplekt-model-novella-2.jpg","/assets/komplekt-model-novella-3.jpg","/assets/komplekt-model-novella-4.jpg","/assets/komplekt-model-novella-5.jpg"],
    description: "Комплект Модель \"Новелла\" — мягкий комплект для гостиной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-edem",
    name: "Комплект Эдем",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "98 000 ₽",
    image: "/assets/komplekt-edem-1.jpg",
    images: ["/assets/komplekt-edem-1.jpg","/assets/komplekt-edem-2.jpg","/assets/komplekt-edem-3.jpg","/assets/komplekt-edem-4.jpg","/assets/komplekt-edem-5.jpg","/assets/komplekt-edem-6.jpg"],
    description: "Комплект Эдем — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-peppino",
    name: "Комплект Peppino",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "98 000 ₽",
    image: "/assets/komplekt-peppino-1.jpg",
    images: ["/assets/komplekt-peppino-1.jpg","/assets/komplekt-peppino-2.jpg","/assets/komplekt-peppino-3.jpg","/assets/komplekt-peppino-4.jpg"],
    description: "Комплект Peppino — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-myagkaya-troyka-lora",
    name: "Комплект Мягкая тройка «Лора»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/komplekt-myagkaya-troyka-lora-1.jpg",
    images: ["/assets/komplekt-myagkaya-troyka-lora-1.jpg","/assets/komplekt-myagkaya-troyka-lora-2.jpg","/assets/komplekt-myagkaya-troyka-lora-3.jpg","/assets/komplekt-myagkaya-troyka-lora-4.jpg"],
    description: "Комплект Мягкая тройка «Лора» — мягкий комплект для гостиной, нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-prado",
    name: "Комплект Прадо",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "113 000 ₽",
    image: "/assets/komplekt-prado-1.jpg",
    images: ["/assets/komplekt-prado-1.jpg","/assets/komplekt-prado-2.jpg","/assets/komplekt-prado-3.jpg","/assets/komplekt-prado-4.jpg"],
    description: "Комплект Прадо — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-korolevskaya-2",
    name: "Комплект Королевская",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "125 000 ₽",
    image: "/assets/komplekt-korolevskaya-2-1.jpg",
    images: ["/assets/komplekt-korolevskaya-2-1.jpg","/assets/komplekt-korolevskaya-2-2.jpg","/assets/komplekt-korolevskaya-2-3.jpg"],
    description: "Комплект Королевская — мягкий комплект для гостиной, нераскладной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-dzhovanna",
    name: "Комплект Джованна",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "130 000 ₽",
    image: "/assets/komplekt-dzhovanna-1.jpg",
    images: ["/assets/komplekt-dzhovanna-1.jpg"],
    description: "Комплект Джованна — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Материал", "ы"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "divan-faraon-na-zakaz",
    name: "Диван Фараон На заказ",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "90 000 ₽",
    image: "/assets/divan-faraon-na-zakaz-1.jpg",
    images: ["/assets/divan-faraon-na-zakaz-1.jpg","/assets/divan-faraon-na-zakaz-2.jpg","/assets/divan-faraon-na-zakaz-3.jpg","/assets/divan-faraon-na-zakaz-4.jpg","/assets/divan-faraon-na-zakaz-5.jpg"],
    description: "Диван Фараон На заказ — мягкая мебель для уютной зоны отдыха, раскладной.",
    characteristics: [["Подкатегория", "Диваны"], ["Механизм", "раскладной"]],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-tureckaya-model",
    name: "Комплект ТУРЕЦКАЯ МОДЕЛЬ",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "95 000 ₽",
    image: "/assets/komplekt-tureckaya-model-1.jpg",
    images: ["/assets/komplekt-tureckaya-model-1.jpg","/assets/komplekt-tureckaya-model-2.jpg"],
    description: "Комплект ТУРЕЦКАЯ МОДЕЛЬ — мягкий комплект для гостиной, размер 320х250.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "320х250"], ["Производство", ":"]],
    subcategory: "Комплекты",
  },
  {
    slug: "uglovoy-divan-marsel-ugol-v-nalichii",
    name: "Угловой диван Марсель Угол в наличии",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/uglovoy-divan-marsel-ugol-v-nalichii-1.jpg",
    images: ["/assets/uglovoy-divan-marsel-ugol-v-nalichii-1.jpg","/assets/uglovoy-divan-marsel-ugol-v-nalichii-2.jpg"],
    description: "Угловой диван Марсель Угол в наличии — угловой диван для просторной зоны отдыха.",
    characteristics: [["Подкатегория", "Угловые диваны"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "divan",
    name: "Диван",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "55 000 ₽",
    image: "/assets/divan-1.jpg",
    images: ["/assets/divan-1.jpg","/assets/divan-2.jpg"],
    description: "Диван — мягкая мебель для уютной зоны отдыха, тик-так.",
    characteristics: [["Подкатегория", "Диваны"], ["Механизм", "тик-так"]],
    subcategory: "Диваны",
  },
  {
    slug: "divan-dior",
    name: "Диван «DIOR«",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "65 000 ₽",
    image: "/assets/divan-dior-1.jpg",
    images: ["/assets/divan-dior-1.jpg","/assets/divan-dior-2.jpg"],
    description: "Диван «DIOR« — мягкая мебель для уютной зоны отдыха.",
    characteristics: [["Подкатегория", "Диваны"]],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-dema",
    name: "Комплект ДЕМА",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "50 000 ₽",
    image: "/assets/komplekt-dema-1.jpg",
    images: ["/assets/komplekt-dema-1.jpg","/assets/komplekt-dema-2.jpg","/assets/komplekt-dema-3.jpg","/assets/komplekt-dema-4.jpg","/assets/komplekt-dema-5.jpg","/assets/komplekt-dema-6.jpg","/assets/komplekt-dema-7.jpg","/assets/komplekt-dema-8.jpg","/assets/komplekt-dema-9.jpg","/assets/komplekt-dema-10.jpg"],
    description: "Комплект ДЕМА — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-model-kaliforniya",
    name: "Комплект Модель КАЛИФОРНИЯ",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "135 000 ₽",
    image: "/assets/komplekt-model-kaliforniya-1.jpg",
    images: ["/assets/komplekt-model-kaliforniya-1.jpg","/assets/komplekt-model-kaliforniya-2.jpg","/assets/komplekt-model-kaliforniya-3.jpg","/assets/komplekt-model-kaliforniya-4.jpg"],
    description: "Комплект Модель КАЛИФОРНИЯ — мягкий комплект для гостиной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "uglovoy-divan-ugol-graf",
    name: "Угловой диван Угол Граф",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/uglovoy-divan-ugol-graf-1.jpg",
    images: ["/assets/uglovoy-divan-ugol-graf-1.jpg"],
    description: "Угловой диван Угол Граф — угловой диван для просторной зоны отдыха, размер 340х240.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "340х240"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "komplekt-dezhavyu",
    name: "Комплект Дежавю",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "от 90 000 ₽",
    image: "/assets/komplekt-dezhavyu-1.jpg",
    images: ["/assets/komplekt-dezhavyu-1.jpg"],
    description: "Комплект Дежавю — модель на заказ, доступна с креслом и без кресла.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "3.10 × 2.10 м"], ["Вариант с креслом", "100 000 ₽"], ["Вариант без кресла", "90 000 ₽"], ["Изготовление", "на заказ"]],
    subcategory: "Комплекты",
  },
  {
    slug: "uglovoy-divan-oskar",
    name: "Угловой диван OSKAR",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "105 000 ₽",
    image: "/assets/uglovoy-divan-oskar-1.jpg",
    images: ["/assets/uglovoy-divan-oskar-1.jpg","/assets/uglovoy-divan-oskar-2.jpg","/assets/uglovoy-divan-oskar-3.jpg"],
    description: "Угловой диван OSKAR — модель на заказ с регулируемыми подголовниками и столешницей на угловом отсеке.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "315 × 250 × 102 см"], ["Высота", "90 см, с поднятым подголовником 106 см"], ["Высота подлокотника", "66 см"], ["Посадочное место дивана", "188 × 61 см"], ["Посадочное место мини", "124 × 61 см"], ["Высота посадки", "48 см от пола"], ["Спальное место", "245 × 122 см"], ["Бельевой ящик", "116 × 60 × 18 см"], ["Особенности", "регулируемые подголовники, столешница на угловом отсеке"], ["Изготовление", "на заказ"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "komplekt-slozhno-predstavit-chto-to-bolee-izyaschnoe",
    name: "Комплект Сложно представить,что-то более изящное",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "90 000 ₽",
    image: "/assets/komplekt-slozhno-predstavit-chto-to-bolee-izyaschnoe-1.jpg",
    images: ["/assets/komplekt-slozhno-predstavit-chto-to-bolee-izyaschnoe-1.jpg","/assets/komplekt-slozhno-predstavit-chto-to-bolee-izyaschnoe-2.jpg","/assets/komplekt-slozhno-predstavit-chto-to-bolee-izyaschnoe-3.jpg","/assets/komplekt-slozhno-predstavit-chto-to-bolee-izyaschnoe-4.jpg","/assets/komplekt-slozhno-predstavit-chto-to-bolee-izyaschnoe-5.jpg","/assets/komplekt-slozhno-predstavit-chto-to-bolee-izyaschnoe-6.jpg"],
    description: "Комплект Сложно представить,что-то более изящное — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-korona-2",
    name: "Комплект «Корона 2»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/komplekt-korona-2-1.jpg",
    images: ["/assets/komplekt-korona-2-1.jpg","/assets/komplekt-korona-2-2.jpg","/assets/komplekt-korona-2-3.jpg","/assets/komplekt-korona-2-4.jpg"],
    description: "Комплект «Корона 2» — мягкий комплект для гостиной, раскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-ugol-stegannyy",
    name: "Комплект Угол стёганный",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "55 000 ₽",
    image: "/assets/komplekt-ugol-stegannyy-1.jpg",
    images: ["/assets/komplekt-ugol-stegannyy-1.jpg","/assets/komplekt-ugol-stegannyy-2.jpg","/assets/komplekt-ugol-stegannyy-3.jpg"],
    description: "Комплект Угол стёганный — мягкий комплект для гостиной, раскладной, размер 370х180.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "370х180"], ["Механизм", "раскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "uglovoy-divan-ugol",
    name: "Угловой диван Угол",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "65 000 ₽",
    image: "/assets/uglovoy-divan-ugol-1.jpg",
    images: ["/assets/uglovoy-divan-ugol-1.jpg","/assets/uglovoy-divan-ugol-2.jpg","/assets/uglovoy-divan-ugol-3.jpg","/assets/uglovoy-divan-ugol-4.jpg"],
    description: "Угловой диван Угол — угловой диван для просторной зоны отдыха.",
    characteristics: [["Подкатегория", "Угловые диваны"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "komplekt-plaza",
    name: "Комплект Плаза",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "70 000 ₽",
    image: "/assets/komplekt-plaza-1.jpg",
    images: ["/assets/komplekt-plaza-1.jpg","/assets/komplekt-plaza-2.jpg","/assets/komplekt-plaza-3.jpg","/assets/komplekt-plaza-4.jpg","/assets/komplekt-plaza-5.jpg"],
    description: "Комплект Плаза — мягкий комплект для гостиной, нераскладной.",
    characteristics: [["Подкатегория", "Комплекты"], ["Механизм", "нераскладной"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-vavilon",
    name: "Комплект Вавилон",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "200 000 ₽",
    image: "/assets/komplekt-vavilon-1.jpg",
    images: ["/assets/komplekt-vavilon-1.jpg","/assets/komplekt-vavilon-2.jpg"],
    description: "Комплект Вавилон — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-valensiya",
    name: "Комплект «Валенсия»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "90 000 ₽",
    image: "/assets/komplekt-valensiya-1.jpg",
    images: ["/assets/komplekt-valensiya-1.jpg","/assets/komplekt-valensiya-2.jpg","/assets/komplekt-valensiya-3.jpg"],
    description: "Комплект «Валенсия» — мягкий комплект для гостиной, размер 146х192.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "146х192"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-lord-troyka",
    name: "Комплект «Лорд тройка»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/komplekt-lord-troyka-1.jpg",
    images: ["/assets/komplekt-lord-troyka-1.jpg","/assets/komplekt-lord-troyka-2.jpg","/assets/komplekt-lord-troyka-3.jpg","/assets/komplekt-lord-troyka-4.jpg","/assets/komplekt-lord-troyka-5.jpg","/assets/komplekt-lord-troyka-6.jpg","/assets/komplekt-lord-troyka-7.jpg","/assets/komplekt-lord-troyka-8.jpg","/assets/komplekt-lord-troyka-9.jpg","/assets/komplekt-lord-troyka-10.jpg"],
    description: "Комплект «Лорд тройка» — мягкий комплект для гостиной, размер 180х120.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "180х120"], ["Производство", "Ставрополь"]],
    subcategory: "Комплекты",
  },
  {
    slug: "divan-afina-2",
    name: "Угловой диван «Афина»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "75 000 ₽",
    image: "/assets/divan-afina-2-1.jpg",
    images: ["/assets/divan-afina-2-1.jpg"],
    description: "Угловой диван «Афина» — мягкая мебель для уютной зоны отдыха, размер 290х250.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "290х250"], ["Производство", "Армавир"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "uglovoy-divan-tokio",
    name: "Угловой диван «Токио»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "57 000 ₽",
    image: "/assets/uglovoy-divan-tokio-1.jpg",
    images: ["/assets/uglovoy-divan-tokio-1.jpg","/assets/uglovoy-divan-tokio-2.jpg","/assets/uglovoy-divan-tokio-3.jpg","/assets/uglovoy-divan-tokio-4.jpg","/assets/uglovoy-divan-tokio-5.jpg","/assets/uglovoy-divan-tokio-6.jpg","/assets/uglovoy-divan-tokio-7.jpg","/assets/uglovoy-divan-tokio-8.jpg"],
    description: "Угловой диван «Токио» — угловой диван для просторной зоны отдыха, размер 330х185.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "330х185"], ["Производство", "Армавир"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "divan-tvist",
    name: "Диван «Твист»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/divan-tvist-1.jpg",
    images: ["/assets/divan-tvist-1.jpg","/assets/divan-tvist-2.jpg","/assets/divan-tvist-3.jpg","/assets/divan-tvist-4.jpg","/assets/divan-tvist-5.jpg","/assets/divan-tvist-6.jpg"],
    description: "Диван «Твист» — мягкая мебель для уютной зоны отдыха, раскладной.",
    characteristics: [["Подкатегория", "Диваны"], ["Материал", "независимый пружинный блок"], ["Производство", "Краснодар"], ["Механизм", "раскладной"]],
    subcategory: "Диваны",
  },
  {
    slug: "uglovoy-divan-deniya-maks-s-atomankoy",
    name: "Угловой диван «Дения Макс с атоманкой»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "60 000 ₽",
    image: "/assets/uglovoy-divan-deniya-maks-s-atomankoy-1.jpg",
    images: ["/assets/uglovoy-divan-deniya-maks-s-atomankoy-1.jpg","/assets/uglovoy-divan-deniya-maks-s-atomankoy-2.jpg","/assets/uglovoy-divan-deniya-maks-s-atomankoy-3.jpg","/assets/uglovoy-divan-deniya-maks-s-atomankoy-4.jpg","/assets/uglovoy-divan-deniya-maks-s-atomankoy-5.jpg","/assets/uglovoy-divan-deniya-maks-s-atomankoy-6.jpg","/assets/uglovoy-divan-deniya-maks-s-atomankoy-7.jpg"],
    description: "Угловой диван «Дения Макс с атоманкой» — угловой диван для просторной зоны отдыха, размер 336х167.",
    characteristics: [["Подкатегория", "Угловые диваны"], ["Размер", "336х167"], ["Производство", "Ставрополь"]],
    subcategory: "Угловые диваны",
  },
  {
    slug: "divan-divan-krovat-bentli",
    name: "Диван-кровать «Бентли»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "45 000 ₽",
    image: "/assets/divan-divan-krovat-bentli-1.jpg",
    images: ["/assets/divan-divan-krovat-bentli-1.jpg","/assets/divan-divan-krovat-bentli-2.jpg","/assets/divan-divan-krovat-bentli-3.jpg","/assets/divan-divan-krovat-bentli-4.jpg","/assets/divan-divan-krovat-bentli-5.jpg","/assets/divan-divan-krovat-bentli-6.jpg","/assets/divan-divan-krovat-bentli-7.jpg"],
    description: "Диван-кровать «Бентли» — мягкая мебель для уютной зоны отдыха, тик-так.",
    characteristics: [["Подкатегория", "Диваны"], ["Материал", "ППУ"], ["Производство", "Ставрополь"], ["Механизм", "тик-так"], ["Механизм", "раскладной"]],
    subcategory: "Диваны",
  },
  {
    slug: "komplekt-lion",
    name: "Комплект Лион",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/komplekt-lion-1.jpg",
    images: ["/assets/komplekt-lion-1.jpg"],
    description: "Комплект Лион — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-estel",
    name: "Комплект ЭСТЕЛЬ",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "115 000 ₽",
    image: "/assets/komplekt-estel-1.jpg",
    images: ["/assets/komplekt-estel-1.jpg","/assets/komplekt-estel-2.jpg","/assets/komplekt-estel-3.jpg","/assets/komplekt-estel-4.jpg"],
    description: "Комплект ЭСТЕЛЬ — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-trend-sezona",
    name: "Комплект ТРЕНД СЕЗОНА",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/komplekt-trend-sezona-1.jpg",
    images: ["/assets/komplekt-trend-sezona-1.jpg","/assets/komplekt-trend-sezona-2.jpg","/assets/komplekt-trend-sezona-3.jpg","/assets/komplekt-trend-sezona-4.jpg"],
    description: "Комплект ТРЕНД СЕЗОНА — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-komplekt-myagkoy-mebeli-adel",
    name: "Комплект мягкой мебели «АДЕЛЬ»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "80 000 ₽",
    image: "/assets/komplekt-komplekt-myagkoy-mebeli-adel-1.jpg",
    images: ["/assets/komplekt-komplekt-myagkoy-mebeli-adel-1.jpg","/assets/komplekt-komplekt-myagkoy-mebeli-adel-2.jpg","/assets/komplekt-komplekt-myagkoy-mebeli-adel-3.jpg","/assets/komplekt-komplekt-myagkoy-mebeli-adel-4.jpg","/assets/komplekt-komplekt-myagkoy-mebeli-adel-5.jpg"],
    description: "Комплект мягкой мебели «АДЕЛЬ» — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-mango-2",
    name: "Комплект манго",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "45 000 ₽",
    image: "/assets/komplekt-mango-2-1.jpg",
    images: ["/assets/komplekt-mango-2-1.jpg","/assets/komplekt-mango-2-2.jpg","/assets/komplekt-mango-2-3.jpg"],
    description: "Комплект манго — мягкий комплект для гостиной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-mango-3",
    name: "Комплект манго",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "55 000 ₽",
    image: "/assets/komplekt-mango-3-1.jpg",
    images: ["/assets/komplekt-mango-3-1.jpg","/assets/komplekt-mango-3-2.jpg","/assets/komplekt-mango-3-3.jpg","/assets/komplekt-mango-3-4.jpg","/assets/komplekt-mango-3-5.jpg"],
    description: "Комплект манго — мягкий комплект для гостиной, размер 2.40 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "2.40 м/см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-izmir",
    name: "Комплект Измир",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "100 000 ₽",
    image: "/assets/komplekt-izmir-1.jpg",
    images: ["/assets/komplekt-izmir-1.jpg","/assets/komplekt-izmir-2.jpg","/assets/komplekt-izmir-3.jpg"],
    description: "Комплект Измир — мягкий комплект для гостиной, размер 225 м/см.",
    characteristics: [["Подкатегория", "Комплекты"], ["Размер", "225 м/см"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt",
    name: "Комплект",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "110 000 ₽",
    image: "/assets/komplekt-1.jpg",
    images: ["/assets/komplekt-1.jpg","/assets/komplekt-2.jpg","/assets/komplekt-3.jpg"],
    description: "Комплект — в наличии диван и кресло.",
    characteristics: [["Подкатегория", "Комплекты"], ["В наличии", "диван, кресло"], ["Диван", "ширина 2.60 м, высота 90 см, глубина 1.10 м"], ["Спальное место дивана", "173 × 100 см"], ["Посадка дивана", "47 см от пола"], ["Кресло", "ширина 95 см, высота 105 см, глубина 95 см"], ["Посадка кресла", "47 см от пола"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-exclusive",
    name: "Комплект Exclusive",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "102 000 ₽",
    image: "/assets/komplekt-exclusive-1.jpg",
    images: ["/assets/komplekt-exclusive-1.jpg","/assets/komplekt-exclusive-2.jpg","/assets/komplekt-exclusive-3.jpg","/assets/komplekt-exclusive-4.jpg"],
    description: "Комплект Exclusive — в комплекте диван и кресло, декор из дерева и металла.",
    characteristics: [["Подкатегория", "Комплекты"], ["В комплекте", "диван, кресло"], ["Диван", "ширина 245 см, сидячее место 170 × 60 см"], ["Диван в откидном виде", "170 × 90 см"], ["Высота спинки дивана", "89 см"], ["Глубина дивана от стены", "98 см"], ["Высота боковины дивана", "67 см от пола"], ["Кресло", "длина 80 см, глубина от стены 85 см"], ["Сидячее место кресла", "70 × 60 см"], ["Глубина кресла", "70 см"], ["Высота спинки кресла", "95 см"], ["Декор", "дерево и металл"], ["Механизм", "диван нераскладной, только спинка откидная"], ["Расцветка", "ткань и декор можно сделать на ваш вкус"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-inchi",
    name: "Комплект «ИНЧИ»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "100 000 ₽",
    image: "/assets/komplekt-inchi-1.jpg",
    images: ["/assets/komplekt-inchi-1.jpg","/assets/komplekt-inchi-2.jpg","/assets/komplekt-inchi-3.jpg"],
    description: "Комплект «ИНЧИ» — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  {
    slug: "komplekt-myagkaya-plaza",
    name: "Комплект Мягкая плаза",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    price: "65 000 ₽",
    image: "/assets/komplekt-myagkaya-plaza-1.jpg",
    images: ["/assets/komplekt-myagkaya-plaza-1.jpg","/assets/komplekt-myagkaya-plaza-2.jpg","/assets/komplekt-myagkaya-plaza-3.jpg","/assets/komplekt-myagkaya-plaza-4.jpg"],
    description: "Комплект Мягкая плаза — мягкий комплект для гостиной.",
    characteristics: [["Подкатегория", "Комплекты"]],
    subcategory: "Комплекты",
  },
  // Imported soft furniture end

  // Telegram main catalog import start
  {
    slug: "main-stol-grand-so-stulyami-sheyh",
    name: "Стол «Гранд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 36 000 ₽",
    image: "/assets/main-catalog-001-1.jpg",
    images: mainCatalogGallery001,
    description: "Стол «Гранд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "200-240 × 100 × 80 -",
                "price": "36 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240-280 × 110 × 80 -",
                "price": "38 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-roza",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "22 000 ₽ / шт.",
    image: "/assets/main-catalog-002-1.jpg",
    images: mainCatalogGallery002,
    description: "Стол «Роза» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "160-200 × 90 × 80 -"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "22 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-roza-2",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/main-catalog-003-1.jpg",
    images: mainCatalogGallery003,
    description: "Стол «Роза» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "160 × 200 -",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200 × 240 -",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-sheyh",
    name: "Стол «Роза» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "22 000 ₽ / шт.",
    image: "/assets/main-catalog-004-1.jpg",
    images: mainCatalogGallery004,
    description: "Стол «Роза» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "160-200 × 90 × 80 -"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 300 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "22 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 300 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-roza-3",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "23 000 ₽ / шт.",
    image: "/assets/main-catalog-005-1.jpg",
    images: mainCatalogGallery005,
    description: "Стол «Роза» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "160-200 × 90 × 80 -"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 3 600 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "3 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-lapka-mramor-so-stulyami-mini-sheyh",
    name: "Стол «Лапка мрамор» со стульями «Мини-Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "25 500 ₽ / шт.",
    image: "/assets/main-catalog-006-1.jpg",
    images: mainCatalogGallery006,
    description: "Стол «Лапка мрамор» со стульями «Мини-Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ":160/200"
          ],
          [
                "Дополнительно",
                "Стулья «Мини-Шейх» — 5 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Мини-Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "98 000 ₽ / шт.",
    image: "/assets/main-catalog-007-1.jpg",
    images: mainCatalogGallery007,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-2",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "85 000 ₽ / шт.",
    image: "/assets/main-catalog-008-1.jpg",
    images: mainCatalogGallery008,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-3",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "65 000 ₽ / шт.",
    image: "/assets/main-catalog-009-1.jpg",
    images: mainCatalogGallery009,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-4",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "60 000 ₽ / шт.",
    image: "/assets/main-catalog-010-1.jpg",
    images: mainCatalogGallery010,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-5",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "75 000 ₽ / шт.",
    image: "/assets/main-catalog-011-1.jpg",
    images: mainCatalogGallery011,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-6",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "90 000 ₽ / шт.",
    image: "/assets/main-catalog-012-1.jpg",
    images: mainCatalogGallery012,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-7",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "80 000 ₽ / шт.",
    image: "/assets/main-catalog-013-1.jpg",
    images: mainCatalogGallery013,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-8",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: "/assets/main-catalog-014-1.jpg",
    images: mainCatalogGallery014,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-9",
    name: "Стол",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "50 000 ₽ / шт.",
    image: "/assets/main-catalog-015-1.jpg",
    images: mainCatalogGallery015,
    description: "Стол для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-komplekt-faraon",
    name: "Комплект «Фараон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "75 000 ₽",
    image: "/assets/main-catalog-016-1.jpg",
    images: mainCatalogGallery016,
    description: "Комплект «Фараон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                ":Ш 220/ В 45/ Гл 60"
          ]
    ],
  },
  {
    slug: "main-komplekt-faraon-2",
    name: "Комплект «Фараон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "78 000 ₽",
    image: "/assets/main-catalog-017-1.jpg",
    images: mainCatalogGallery017,
    description: "Комплект «Фараон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-faraon",
    name: "Угловой диван «Фараон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "140 000 ₽",
    image: "/assets/main-catalog-018-1.jpg",
    images: mainCatalogGallery018,
    description: "Угловой диван «Фараон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Материал",
                "отбивки: велюр"
          ]
    ],
  },
  {
    slug: "main-krovat-veneciya",
    name: "Кровать «Венеция»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "22 000 ₽",
    image: "/assets/main-catalog-019-1.jpg",
    images: mainCatalogGallery019,
    description: "Кровать «Венеция» для спальни с комфортным спальным местом.",
    characteristics: [
          [
                "Размер",
                "90/2м"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-krovat-kleopatra",
    name: "Кровать «Клеопатра»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "18 000 ₽",
    image: "/assets/main-catalog-020-1.jpg",
    images: mainCatalogGallery020,
    description: "Кровать «Клеопатра» для спальни с комфортным спальным местом.",
    characteristics: [
          [
                "Размер",
                "90/2м"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-krovat-ilona",
    name: "Кровать «Илона»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "20 000 ₽",
    image: "/assets/main-catalog-021-1.jpg",
    images: mainCatalogGallery021,
    description: "Кровать «Илона» для спальни с комфортным спальным местом.",
    characteristics: [
          [
                "Размер",
                "90/2м"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-komplekt-barselona",
    name: "Комплект «Барселона»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "60 000 ₽",
    image: "/assets/main-catalog-022-1.jpg",
    images: mainCatalogGallery022,
    description: "Комплект «Барселона» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "220 кресло 95"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-komplekt-lord",
    name: "Комплект «Лорд»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "65 000 ₽",
    image: "/assets/main-catalog-023-1.jpg",
    images: mainCatalogGallery023,
    description: "Комплект «Лорд» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "220 кресло 100"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-divan-lord",
    name: "Диван «Лорд»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "35 000 ₽",
    image: "/assets/main-catalog-024-1.jpg",
    images: mainCatalogGallery024,
    description: "Диван «Лорд» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                "220"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-komplekt-leon",
    name: "Комплект «Леон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "65 000 ₽",
    image: "/assets/main-catalog-025-1.jpg",
    images: mainCatalogGallery025,
    description: "Комплект «Леон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "230 кресло 110"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-komplekt-mango",
    name: "Комплект «MANGO»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "65 000 ₽",
    image: "/assets/main-catalog-026-1.jpg",
    images: mainCatalogGallery026,
    description: "Комплект «MANGO» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "170х60"
          ]
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-sheyh-2",
    name: "Стол «Роза» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 22 000 ₽",
    image: "/assets/main-catalog-027-1.jpg",
    images: mainCatalogGallery027,
    description: "Стол «Роза» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "120-160 × 80 × 80 -",
                "price": "22 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "23 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-tv-tumba-milan",
    name: "ТВ тумба «Милан»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "25 000 ₽",
    image: "/assets/main-catalog-028-1.jpg",
    images: mainCatalogGallery028,
    description: "ТВ тумба «Милан» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Размер",
                ": 148/60/39"
          ]
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-sheyh",
    name: "Стол «Лапка» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 000 ₽ / шт.",
    image: "/assets/main-catalog-029-1.jpg",
    images: mainCatalogGallery029,
    description: "Стол «Лапка» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ":160/200"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 6 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-sheyh",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "50 000 ₽ / шт.",
    image: "/assets/main-catalog-030-1.jpg",
    images: mainCatalogGallery030,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "250/100/80"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 7 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "7 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-ya-siliki",
    name: "Стол «Голд» со стульями «Я Силики»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "50 000 ₽ / шт.",
    image: "/assets/main-catalog-031-1.jpg",
    images: mainCatalogGallery031,
    description: "Стол «Голд» со стульями «Я Силики» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "240/280"
          ],
          [
                "Дополнительно",
                "Стулья «Я Силики» — 9 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Я Силики»",
                "price": "9 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-afina-so-stulyami-ya-ingolf",
    name: "Стол «Афина» со стульями «Я Ингольф»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/main-catalog-032-1.jpg",
    images: mainCatalogGallery032,
    description: "Стол «Афина» со стульями «Я Ингольф» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 1.10"
          ],
          [
                "Дополнительно",
                "Стулья «Я Ингольф» — 4 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Я Ингольф»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-versal-so-stulyami-ya-sheyh",
    name: "Стол «Версаль» со стульями «Я Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "55 000 ₽ / шт.",
    image: "/assets/main-catalog-033-1.jpg",
    images: mainCatalogGallery033,
    description: "Стол «Версаль» со стульями «Я Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "240/280х110"
          ],
          [
                "Цвет",
                "орех/золото"
          ],
          [
                "Производство",
                "Армавир"
          ],
          [
                "Дополнительно",
                "Стулья «Я Шейх» — 7 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Я Шейх»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-ingolf-so-stulyami-ingolf",
    name: "Стол «Ингольф» со стульями «Ингольф»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/main-catalog-034-1.jpg",
    images: mainCatalogGallery034,
    description: "Стол «Ингольф» со стульями «Ингольф» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "-160/200"
          ],
          [
                "Цвет",
                "комплекта Слоновая кость."
          ],
          [
                "Дополнительно",
                "Стулья «Ингольф» — 4 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Ингольф»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-banan",
    name: "Стол «Роза» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "22 000 ₽ / шт.",
    image: "/assets/main-catalog-035-1.jpg",
    images: mainCatalogGallery035,
    description: "Стол «Роза» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ":160/200"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-imperiya-so-stulyami-medalony",
    name: "Стол «Империя» со стульями «Медальоны»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "29 000 ₽ / шт.",
    image: "/assets/main-catalog-036-1.jpg",
    images: mainCatalogGallery036,
    description: "Стол «Империя» со стульями «Медальоны» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 200/240"
          ],
          [
                "Дополнительно",
                "Стулья «Медальоны» — 7 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Медальоны»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-versachi",
    name: "Стол «Роза» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "22 000 ₽ / шт.",
    image: "/assets/main-catalog-037-1.jpg",
    images: mainCatalogGallery037,
    description: "Стол «Роза» со стульями «Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ":160/200"
          ],
          [
                "Дополнительно",
                "Стулья «Версачи» — 3 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Версачи»",
                "price": "3 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-afina-so-stulyami-ingolf",
    name: "Стол «Афина» со стульями «Ингольф»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/main-catalog-038-1.jpg",
    images: mainCatalogGallery038,
    description: "Стол «Афина» со стульями «Ингольф» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ":110/145"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Ингольф» — 4 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Ингольф»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-roza",
    name: "Стол «Лапка» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 000 ₽ / шт.",
    image: "/assets/main-catalog-039-1.jpg",
    images: mainCatalogGallery039,
    description: "Стол «Лапка» со стульями «Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ":160/200"
          ],
          [
                "Дополнительно",
                "Стулья «Роза» — 4 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Роза»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-versachi",
    name: "Стол «Лапка» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 000 ₽ / шт.",
    image: "/assets/main-catalog-040-1.jpg",
    images: mainCatalogGallery040,
    description: "Стол «Лапка» со стульями «Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ":160/200"
          ],
          [
                "Дополнительно",
                "Стулья «Версачи» — 3 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Версачи»",
                "price": "3 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-afina-so-stulyami-medalony",
    name: "Стол «Афина» со стульями «Медальоны»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "27 000 ₽ / шт.",
    image: "/assets/main-catalog-041-1.jpg",
    images: mainCatalogGallery041,
    description: "Стол «Афина» со стульями «Медальоны» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 110"
          ],
          [
                "Дополнительно",
                "Стулья «Медальоны» — 7 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Медальоны»",
                "price": "7 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-spalnya-royal",
    name: "Спальня «Рояль»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "82 000 ₽",
    image: "/assets/main-catalog-042-1.jpg",
    images: mainCatalogGallery042,
    description: "Спальня «Рояль» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Спальня «Рояль» 4х дв. Производство Ставрополь (FORTUNA HOME)."
          ],
          [
                "Цвет",
                "Жемчуг глянец ."
          ]
    ],
  },
  {
    slug: "main-spalnya-elit-lux-4dv",
    name: "Спальня «Элит Lux 4дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "75 500 ₽",
    image: "/assets/main-catalog-043-1.jpg",
    images: mainCatalogGallery043,
    description: "Спальня «Элит Lux 4дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Шкаф 4х дв: 180х52х217см"
          ],
          [
                "Цвет",
                "серый графит"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-spalnya-kassandra-6dv",
    name: "Спальня «Кассандра 6дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "115 000 ₽",
    image: "/assets/main-catalog-044-1.jpg",
    images: mainCatalogGallery044,
    description: "Спальня «Кассандра 6дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "2790х650х2300"
          ],
          [
                "Цвет",
                "Бежевый / Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Белый"
          ],
          [
                "Материал",
                "фасадов: МДФ"
          ],
          [
                "Производство",
                "СКФМ"
          ]
    ],
  },
  {
    slug: "main-spalnya-adelina-4dv",
    name: "Спальня «Аделина 4дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "66 900 ₽",
    image: "/assets/main-catalog-045-1.jpg",
    images: mainCatalogGallery045,
    description: "Спальня «Аделина 4дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Шкаф 4-х дв: Ш2100хГ520хВ2150мм"
          ],
          [
                "Производство",
                "21Век"
          ]
    ],
  },
  {
    slug: "main-kuhnya-virdzhiniya",
    name: "Кухня «Вирджиния»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "80 000 ₽",
    image: "/assets/main-catalog-046-1.jpg",
    images: mainCatalogGallery046,
    description: "Кухня «Вирджиния» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "3400х1400 х 600"
          ],
          [
                "Цвет",
                "Светлый Крем / Серый"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-virdzhiniya-2",
    name: "Кухня «Вирджиния»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "81 900 ₽",
    image: "/assets/main-catalog-047-1.jpg",
    images: mainCatalogGallery047,
    description: "Кухня «Вирджиния» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "с пеналом 3600х600х2450"
          ],
          [
                "Цвет",
                "Светлый Крем/Серый"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-virdzhiniya-3",
    name: "Кухня «Вирджиния»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "84 900 ₽",
    image: "/assets/main-catalog-048-1.jpg",
    images: mainCatalogGallery048,
    description: "Кухня «Вирджиния» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "с пеналом 3800х600х2450"
          ],
          [
                "Цвет",
                "Серый"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-belladzho",
    name: "Кухня «Белладжо»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "119 500 ₽",
    image: "/assets/main-catalog-049-1.jpg",
    images: mainCatalogGallery049,
    description: "Кухня «Белладжо» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2100/3850"
          ],
          [
                "Цвет",
                "Светлый беж+патина серебро"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-belladzho-2",
    name: "Кухня «Белладжо»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "77 900 ₽",
    image: "/assets/main-catalog-050-1.jpg",
    images: mainCatalogGallery050,
    description: "Кухня «Белладжо» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ":2750×1450- Г600 х В2500"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-belladzho-3",
    name: "Кухня «Белладжо»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "63 000 ₽",
    image: "/assets/main-catalog-051-1.jpg",
    images: mainCatalogGallery051,
    description: "Кухня «Белладжо» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2600х600х2500"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-astoriya-260sm",
    name: "Кухня «Астория 260см»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "60 000 ₽",
    image: "/assets/main-catalog-052-1.jpg",
    images: mainCatalogGallery052,
    description: "Кухня «Астория 260см» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2600х600х2450"
          ],
          [
                "Цвет",
                "Крем"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-astoriya-340",
    name: "Кухня «Астория 340»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "72 000 ₽",
    image: "/assets/main-catalog-053-1.jpg",
    images: mainCatalogGallery053,
    description: "Кухня «Астория 340» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "3400х600х2420"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-provans-2m",
    name: "Кухня «Прованс 2м»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "35 000 ₽",
    image: "/assets/main-catalog-054-1.jpg",
    images: mainCatalogGallery054,
    description: "Кухня «Прованс 2м» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 2м (Высота 2.20см)"
          ],
          [
                "Материал",
                "корпуса: ЛДСП"
          ],
          [
                "Производство",
                "СБК"
          ]
    ],
  },
  {
    slug: "main-kuhnya-nikol",
    name: "Кухня «Николь»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "48 000 ₽",
    image: "/assets/main-catalog-055-1.jpg",
    images: mainCatalogGallery055,
    description: "Кухня «Николь» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 3м высота 2.25см"
          ],
          [
                "Материал",
                "корпуса: ЛДСП"
          ],
          [
                "Производство",
                "СБК"
          ]
    ],
  },
  {
    slug: "main-kuhnya-brauni-1",
    name: "Кухня «Брауни 1»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "30 000 ₽",
    image: "/assets/main-catalog-056-1.jpg",
    images: mainCatalogGallery056,
    description: "Кухня «Брауни 1» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 1.60м. (Высота 2.20м)"
          ],
          [
                "Материал",
                "корпуса: ЛДСП"
          ],
          [
                "Производство",
                "СБК"
          ]
    ],
  },
  {
    slug: "main-kuhnya-kg2",
    name: "Кухня «КГ2»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "27 500 ₽",
    image: "/assets/main-catalog-057-1.jpg",
    images: mainCatalogGallery057,
    description: "Кухня «КГ2» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 2м высота 2.20"
          ],
          [
                "Материал",
                "корпуса: ЛДСП"
          ],
          [
                "Производство",
                "СБК"
          ]
    ],
  },
  {
    slug: "main-kuhnya-nikol-2",
    name: "Кухня «Николь»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "39 000 ₽",
    image: "/assets/main-catalog-058-1.jpg",
    images: mainCatalogGallery058,
    description: "Кухня «Николь» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 2.40 высота 2.25см"
          ],
          [
                "Материал",
                "корпуса: ЛДСП"
          ],
          [
                "Производство",
                "СБК"
          ]
    ],
  },
  {
    slug: "main-kuhnya-provans-2",
    name: "Кухня «Прованс 2»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "46 000 ₽",
    image: "/assets/main-catalog-059-1.jpg",
    images: mainCatalogGallery059,
    description: "Кухня «Прованс 2» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Материал",
                "корпуса: ЛДСП"
          ],
          [
                "Производство",
                "СБК"
          ]
    ],
  },
  {
    slug: "main-spalnya-eliza-5dv",
    name: "Спальня «Элиза 5дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "120 000 ₽",
    image: "/assets/main-catalog-060-1.jpg",
    images: mainCatalogGallery060,
    description: "Спальня «Элиза 5дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "1800 х 2000"
          ],
          [
                "Цвет",
                "товара: беж"
          ],
          [
                "Производство",
                "Беларусь \"Слониммебель\""
          ]
    ],
  },
  {
    slug: "main-tv-tumba-allegro",
    name: "ТВ тумба «Аллегро»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "75 000 ₽",
    image: "/assets/main-catalog-061-1.jpg",
    images: mainCatalogGallery061,
    description: "ТВ тумба «Аллегро» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Цвет",
                "товара: Светлый"
          ],
          [
                "Производство",
                "Беларусь \"Слоним\""
          ]
    ],
  },
  {
    slug: "main-spalnya-stella-6dv",
    name: "Спальня «Стелла 6дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "94 000 ₽",
    image: "/assets/main-catalog-062-1.jpg",
    images: mainCatalogGallery062,
    description: "Спальня «Стелла 6дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Шкаф для одежды: 6 дв В2430 x Ш2755 х Г630"
          ],
          [
                "Производство",
                "Беларусь Слониммебель"
          ]
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-roza-4",
    name: "Стол «Роза» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "42 000 ₽ / шт.",
    image: "/assets/main-catalog-063-1.jpg",
    images: mainCatalogGallery063,
    description: "Стол «Роза» со стульями «Роза» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-stol-lapka-oazis-so-stulyami-ya-suren",
    name: "Стол «Лапка Оазис» со стульями «Я Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "66 000 ₽ / шт.",
    image: "/assets/main-catalog-064-1.jpg",
    images: mainCatalogGallery064,
    description: "Стол «Лапка Оазис» со стульями «Я Сурен» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-isanta",
    name: "Прихожая «Исанта»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "40 000 ₽",
    image: "/assets/main-catalog-065-1.jpg",
    images: mainCatalogGallery065,
    description: "Прихожая «Исанта» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 150х230х60"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-gloriya-3",
    name: "Прихожая «Глория 3»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "45 000 ₽",
    image: "/assets/main-catalog-066-1.jpg",
    images: mainCatalogGallery066,
    description: "Прихожая «Глория 3» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 205х230х60"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-violetta",
    name: "Прихожая «Виолетта»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "42 000 ₽",
    image: "/assets/main-catalog-067-1.jpg",
    images: mainCatalogGallery067,
    description: "Прихожая «Виолетта» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 150/235"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-afrodita",
    name: "Прихожая «Афродита»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "45 000 ₽",
    image: "/assets/main-catalog-068-1.jpg",
    images: mainCatalogGallery068,
    description: "Прихожая «Афродита» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                "150//230/50"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-gloriya-7",
    name: "Прихожая «Глория 7»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "45 000 ₽",
    image: "/assets/main-catalog-069-1.jpg",
    images: mainCatalogGallery069,
    description: "Прихожая «Глория 7» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 180х230"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-gloriya-5-maksi",
    name: "Прихожая «Глория 5 Макси»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "60 000 ₽",
    image: "/assets/main-catalog-070-1.jpg",
    images: mainCatalogGallery070,
    description: "Прихожая «Глория 5 Макси» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 230х230×40"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-gloriya-5-maksi-2",
    name: "Прихожая «Глория 5 Макси»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "55 000 ₽",
    image: "/assets/main-catalog-071-1.jpg",
    images: mainCatalogGallery071,
    description: "Прихожая «Глория 5 Макси» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 250х230"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-gloriya-5",
    name: "Прихожая «Глория 5»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "41 000 ₽",
    image: "/assets/main-catalog-072-1.jpg",
    images: mainCatalogGallery072,
    description: "Прихожая «Глория 5» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 170х230х40"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-gloriya-90",
    name: "Прихожая «Глория 90»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "26 500 ₽",
    image: "/assets/main-catalog-073-1.jpg",
    images: mainCatalogGallery073,
    description: "Прихожая «Глория 90» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 90х230х43"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-gloriya-p-1",
    name: "Прихожая «Глория П 1»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "53 000 ₽",
    image: "/assets/main-catalog-074-1.jpg",
    images: mainCatalogGallery074,
    description: "Прихожая «Глория П 1» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 208х230х43"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-isanta-uglovaya",
    name: "Прихожая «Исанта Угловая»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "30 000 ₽",
    image: "/assets/main-catalog-075-1.jpg",
    images: mainCatalogGallery075,
    description: "Прихожая «Исанта Угловая» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                ": 60х60х230"
          ]
    ],
  },
  {
    slug: "main-shkaf-liana",
    name: "Шкаф «Лиана»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "41 000 ₽",
    image: "/assets/main-catalog-076-1.jpg",
    images: mainCatalogGallery076,
    description: "Шкаф «Лиана» для хранения одежды и повседневных вещей.",
    characteristics: [
          [
                "Размер",
                ": 140/235/57"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-isanta",
    name: "ТВ тумба «Исанта»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "22 000 ₽",
    image: "/assets/main-catalog-077-1.jpg",
    images: mainCatalogGallery077,
    description: "ТВ тумба «Исанта» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Размер",
                ": 1.70см"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-sofiya",
    name: "ТВ тумба «София»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "25 000 ₽",
    image: "/assets/main-catalog-078-1.jpg",
    images: mainCatalogGallery078,
    description: "ТВ тумба «София» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Размер",
                ": 1.70см"
          ]
    ],
  },
  {
    slug: "main-shkaf-neo",
    name: "Шкаф «Нео»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "50 000 ₽",
    image: "/assets/main-catalog-079-1.jpg",
    images: mainCatalogGallery079,
    description: "Шкаф «Нео» для хранения одежды и повседневных вещей.",
    characteristics: [
          [
                "Размер",
                ": 235х235х60"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-liliya",
    name: "Прихожая «ЛИЛИЯ»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "41 000 ₽",
    image: "/assets/main-catalog-080-1.jpg",
    images: mainCatalogGallery080,
    description: "Прихожая «ЛИЛИЯ» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                "240/120/40"
          ]
    ],
  },
  {
    slug: "main-pufy-pufiki",
    name: "Пуфы «Пуфики»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Пуфы и банкетки",
    price: "5 000 ₽",
    image: "/assets/main-catalog-081-1.jpg",
    images: mainCatalogGallery081,
    description: "Пуфы «Пуфики» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Пуфы и банкетки"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-markiza",
    name: "ТВ тумба «Маркиза»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "22 000 ₽",
    image: "/assets/main-catalog-082-1.jpg",
    images: mainCatalogGallery082,
    description: "ТВ тумба «Маркиза» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Размер",
                ": 1.40см"
          ]
    ],
  },
  {
    slug: "main-spalnya-kassandra-4-dv",
    name: "Спальня «Кассандра 4-Дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "140 000 ₽",
    image: "/assets/main-catalog-083-1.jpg",
    images: mainCatalogGallery083,
    description: "Спальня «Кассандра 4-Дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Спальня Кассандра 4-дв. Цвет: белая/серебро"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-spalnya-kassandra-6-dv",
    name: "Спальня «Кассандра 6-Дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "145 000 ₽",
    image: "/assets/main-catalog-084-1.jpg",
    images: mainCatalogGallery084,
    description: "Спальня «Кассандра 6-Дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Спальня Кассандра 6-дв. Цвет: серебро/глянец"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-spalnya-toskana-4h",
    name: "Спальня «Тоскана 4х»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "70 000 ₽",
    image: "/assets/main-catalog-085-1.jpg",
    images: mainCatalogGallery085,
    description: "Спальня «Тоскана 4х» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Спальня Тоскана 4х.дв."
          ],
          [
                "Цвет",
                "« Кашемир»"
          ],
          [
                "Производство",
                "Краснодар."
          ]
    ],
  },
  {
    slug: "main-spalnya-lorena-6ti",
    name: "Спальня «Лорена 6ти»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽",
    image: "/assets/main-catalog-086-1.jpg",
    images: mainCatalogGallery086,
    description: "Спальня «Лорена 6ти» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Спальня Лорена 6ти.дв."
          ],
          [
                "Цвет",
                "крем"
          ],
          [
                "Корпус",
                "ЛДСП Белый"
          ],
          [
                "Материал",
                "фасадов: МДФ."
          ],
          [
                "Производство",
                "Ставрополь \"FortunaHome\""
          ]
    ],
  },
  {
    slug: "main-spalnya-veneciya-klassik",
    name: "Спальня «Венеция Классик»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "130 000 ₽",
    image: "/assets/main-catalog-087-1.jpg",
    images: mainCatalogGallery087,
    description: "Спальня «Венеция Классик» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Цвет",
                "Крем глянец /Шелкография."
          ],
          [
                "Корпус",
                "ЛДСП Белый."
          ],
          [
                "Материал",
                "фасадов: МДФ."
          ]
    ],
  },
  {
    slug: "main-kuhnya-emiliya",
    name: "Кухня «Эмилия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "110 000 ₽",
    image: "/assets/main-catalog-088-1.jpg",
    images: mainCatalogGallery088,
    description: "Кухня «Эмилия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Цвет",
                "Бежевый/Золотая патина."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ]
    ],
  },
  {
    slug: "main-kuhnya-aziza",
    name: "Кухня «Азиза»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "65 000 ₽",
    image: "/assets/main-catalog-089-1.jpg",
    images: mainCatalogGallery089,
    description: "Кухня «Азиза» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "210150 см"
          ],
          [
                "Материал",
                "МДФ крашенный"
          ],
          [
                "Производство",
                ", Firdaus"
          ]
    ],
  },
  {
    slug: "main-kuhnya-veneciya",
    name: "Кухня «Венеция»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "125 000 ₽",
    image: "/assets/main-catalog-090-1.jpg",
    images: mainCatalogGallery090,
    description: "Кухня «Венеция» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "450 х600х2400"
          ],
          [
                "Цвет",
                "Крем/Золотая патина."
          ],
          [
                "Корпус",
                "ЛДСП Белый."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ]
    ],
  },
  {
    slug: "main-kuhnya-veneciya-2",
    name: "Кухня «Венеция»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "97 000 ₽",
    image: "/assets/main-catalog-091-1.jpg",
    images: mainCatalogGallery091,
    description: "Кухня «Венеция» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "3.20 на 2.10"
          ],
          [
                "Цвет",
                "беж/Золото"
          ],
          [
                "Производство",
                "Аметист!(Краснодар)"
          ]
    ],
  },
  {
    slug: "main-kuhnya-veneciya-3",
    name: "Кухня «Венеция»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "87 000 ₽",
    image: "/assets/main-catalog-092-1.jpg",
    images: mainCatalogGallery092,
    description: "Кухня «Венеция» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "4.20"
          ],
          [
                "Цвет",
                "Беж/Золото"
          ],
          [
                "Производство",
                "Аметист!"
          ]
    ],
  },
  {
    slug: "main-kuhnya-luna",
    name: "Кухня «Луна»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "115 000 ₽",
    image: "/assets/main-catalog-093-1.jpg",
    images: mainCatalogGallery093,
    description: "Кухня «Луна» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 455"
          ],
          [
                "Производство",
                "Арида"
          ]
    ],
  },
  {
    slug: "main-kuhnya-valensiya",
    name: "Кухня «Валенсия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "75 000 ₽",
    image: "/assets/main-catalog-094-1.jpg",
    images: mainCatalogGallery094,
    description: "Кухня «Валенсия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 2550/12006002500"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-valensiya-2",
    name: "Кухня «Валенсия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "98 000 ₽",
    image: "/assets/main-catalog-095-1.jpg",
    images: mainCatalogGallery095,
    description: "Кухня «Валенсия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "600х2500"
          ],
          [
                "Цвет",
                "Крем"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-valensiya-3",
    name: "Кухня «Валенсия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "125 000 ₽",
    image: "/assets/main-catalog-096-1.jpg",
    images: mainCatalogGallery096,
    description: "Кухня «Валенсия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ":3850×2400 & 4100×2150--600/2500"
          ],
          [
                "Цвет",
                "крем"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-belladzho-4",
    name: "Кухня «Белладжо»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "115 000 ₽",
    image: "/assets/main-catalog-097-1.jpg",
    images: mainCatalogGallery097,
    description: "Кухня «Белладжо» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2000/3700"
          ],
          [
                "Цвет",
                "Крем"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-astoriya",
    name: "Кухня «Астория»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "65 000 ₽",
    image: "/assets/main-catalog-098-1.jpg",
    images: mainCatalogGallery098,
    description: "Кухня «Астория» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2600х600х2420"
          ],
          [
                "Цвет",
                "Крем"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-astoriya-2",
    name: "Кухня «Астория»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "75 000 ₽",
    image: "/assets/main-catalog-099-1.jpg",
    images: mainCatalogGallery099,
    description: "Кухня «Астория» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "3400х600х2420"
          ],
          [
                "Цвет",
                "Крем"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-graciya",
    name: "Кухня «Грация»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "96 000 ₽",
    image: "/assets/main-catalog-100-1.jpg",
    images: mainCatalogGallery100,
    description: "Кухня «Грация» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "600х2500"
          ],
          [
                "Цвет",
                "Крем"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-da-vinchi",
    name: "Кухня «Да Винчи»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "102 000 ₽",
    image: "/assets/main-catalog-101-1.jpg",
    images: mainCatalogGallery101,
    description: "Кухня «Да Винчи» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "4200х600х2500"
          ],
          [
                "Цвет",
                "Светло бежевая/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-da-vinchi-2",
    name: "Кухня «Да-Винчи»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "90 000 ₽",
    image: "/assets/main-catalog-102-1.jpg",
    images: mainCatalogGallery102,
    description: "Кухня «Да-Винчи» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "3600х600х2500"
          ],
          [
                "Цвет",
                "Светло бежевая/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-malta",
    name: "Кухня «МАЛЬТА»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "57 000 ₽",
    image: "/assets/main-catalog-103-1.jpg",
    images: mainCatalogGallery103,
    description: "Кухня «МАЛЬТА» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2.60"
          ],
          [
                "Цвет",
                "а: крем золото, крем серебро"
          ]
    ],
  },
  {
    slug: "main-kuhnya-dzhuletta",
    name: "Кухня «Джульетта»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "90 000 ₽",
    image: "/assets/main-catalog-104-1.jpg",
    images: mainCatalogGallery104,
    description: "Кухня «Джульетта» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Цвет",
                "Престиж Брюле/Золотая патина."
          ],
          [
                "Корпус",
                "ЛДСП Ваниль."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ],
          [
                "Производство",
                "Firdaus"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-veneciya-klassik",
    name: "ТВ тумба «Венеция Классик»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "80 000 ₽",
    image: "/assets/main-catalog-105-1.jpg",
    images: mainCatalogGallery105,
    description: "ТВ тумба «Венеция Классик» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Фасады",
                "МДФ"
          ]
    ],
  },
  {
    slug: "main-spalnya-adelaida",
    name: "Спальня «Аделаида»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽",
    image: "/assets/main-catalog-106-1.jpg",
    images: mainCatalogGallery106,
    description: "Спальня «Аделаида» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "ш1874/г 2100 /в 1495"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-monreal",
    name: "ТВ тумба «Монреаль»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "80 000 ₽",
    image: "/assets/main-catalog-107-1.jpg",
    images: mainCatalogGallery107,
    description: "ТВ тумба «Монреаль» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Размер",
                "ш 1670 / г 520 / в 690"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-veneciya-stayl",
    name: "ТВ тумба «Венеция Стайл»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "75 000 ₽",
    image: "/assets/main-catalog-108-1.jpg",
    images: mainCatalogGallery108,
    description: "ТВ тумба «Венеция Стайл» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Описание",
                "характеристики уточняются"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-monreal-2",
    name: "ТВ тумба «Монреаль»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "78 000 ₽",
    image: "/assets/main-catalog-109-1.jpg",
    images: mainCatalogGallery109,
    description: "ТВ тумба «Монреаль» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Описание",
                "характеристики уточняются"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-madlen",
    name: "ТВ тумба «Мадлен»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "65 000 ₽",
    image: "/assets/main-catalog-110-1.jpg",
    images: mainCatalogGallery110,
    description: "ТВ тумба «Мадлен» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Описание",
                "характеристики уточняются"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-berta",
    name: "ТВ тумба «Берта»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "63 000 ₽",
    image: "/assets/main-catalog-111-1.jpg",
    images: mainCatalogGallery111,
    description: "ТВ тумба «Берта» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Описание",
                "характеристики уточняются"
          ]
    ],
  },
  {
    slug: "main-kuhnya-belladzho-5",
    name: "Кухня «Белладжо»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "110 500 ₽",
    image: "/assets/main-catalog-112-1.jpg",
    images: mainCatalogGallery112,
    description: "Кухня «Белладжо» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2000/3700"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-virdzhiniya-4",
    name: "Кухня «Вирджиния»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "65 000 ₽",
    image: "/assets/main-catalog-113-1.jpg",
    images: mainCatalogGallery113,
    description: "Кухня «Вирджиния» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "с пеналом 3800х600х2450"
          ],
          [
                "Цвет",
                "Светлый Крем/Шампань патина."
          ],
          [
                "Корпус",
                "ЛДСП Ваниль."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-verona",
    name: "Кухня «Верона»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "96 500 ₽",
    image: "/assets/main-catalog-114-1.jpg",
    images: mainCatalogGallery114,
    description: "Кухня «Верона» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "600х2500"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск\"Заман\""
          ]
    ],
  },
  {
    slug: "main-komplekt-chester",
    name: "Комплект «Честер»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "65 000 ₽",
    image: "/assets/main-catalog-115-1.jpg",
    images: mainCatalogGallery115,
    description: "Комплект «Честер» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "245 кресло 125"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-ameliya",
    name: "Угловой диван «Амелия»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "75 000 ₽",
    image: "/assets/main-catalog-116-1.jpg",
    images: mainCatalogGallery116,
    description: "Угловой диван «Амелия» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                "290/205 Мини диван 160"
          ],
          [
                "Производство",
                "Армавир"
          ]
    ],
  },
  {
    slug: "main-divan-afina",
    name: "Угловой диван «Афина»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "80 000 ₽",
    image: "/assets/main-catalog-117-1.jpg",
    images: mainCatalogGallery117,
    description: "Угловой диван «Афина» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                "300/260 Мини диван 180"
          ],
          [
                "Производство",
                "Армавир"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-elizaveta",
    name: "Угловой диван «Елизавета»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "90 000 ₽",
    image: "/assets/main-catalog-118-1.jpg",
    images: mainCatalogGallery118,
    description: "Угловой диван «Елизавета» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                "400/240"
          ],
          [
                "Производство",
                "Армавир"
          ]
    ],
  },
  {
    slug: "main-komplekt-mini-madonna",
    name: "Комплект «Мини Мадонна»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "55 000 ₽",
    image: "/assets/main-catalog-119-1.jpg",
    images: mainCatalogGallery119,
    description: "Комплект «Мини Мадонна» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "290/220 кресло 125"
          ],
          [
                "Производство",
                "Армавир"
          ]
    ],
  },
  {
    slug: "main-komplekt-kleopatra",
    name: "Комплект «Клеопатра»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "80 000 ₽",
    image: "/assets/main-catalog-120-1.jpg",
    images: mainCatalogGallery120,
    description: "Комплект «Клеопатра» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                ". 360/3650 кресло 125"
          ],
          [
                "Производство",
                "Армавир"
          ]
    ],
  },
  {
    slug: "main-komplekt-london",
    name: "Комплект «Лондон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "65 000 ₽",
    image: "/assets/main-catalog-121-1.jpg",
    images: mainCatalogGallery121,
    description: "Комплект «Лондон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "230 кресло 105"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-komplekt-oksford",
    name: "Комплект «Оксфорд»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "70 000 ₽",
    image: "/assets/main-catalog-122-1.jpg",
    images: mainCatalogGallery122,
    description: "Комплект «Оксфорд» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "230 кресло 100"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-divan-ameliya",
    name: "Диван «Амелия»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "75 000 ₽",
    image: "/assets/main-catalog-123-1.jpg",
    images: mainCatalogGallery123,
    description: "Диван «Амелия» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                "290/205 Мини диван 160"
          ],
          [
                "Производство",
                "Армавир"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-palermo-ugol-puf",
    name: "Угловой диван «Палермо Угол + Пуф»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "60 000 ₽",
    image: "/assets/main-catalog-124-1.jpg",
    images: mainCatalogGallery124,
    description: "Угловой диван «Палермо Угол + Пуф» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                ": 270/182"
          ],
          [
                "Производство",
                "Армавир"
          ]
    ],
  },
  {
    slug: "main-komplekt-komfort",
    name: "Комплект «Комфорт»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "65 000 ₽",
    image: "/assets/main-catalog-125-1.jpg",
    images: mainCatalogGallery125,
    description: "Комплект «Комфорт» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "270/170 кресло 95"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-divan-tokio",
    name: "Угловой диван «Токио»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "67 000 ₽",
    image: "/assets/main-catalog-126-1.jpg",
    images: mainCatalogGallery126,
    description: "Угловой диван «Токио» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                "330/185"
          ],
          [
                "Производство",
                "Армавир"
          ]
    ],
  },
  {
    slug: "main-divan-chester",
    name: "Диван «Честер»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "45 000 ₽",
    image: "/assets/main-catalog-127-1.jpg",
    images: mainCatalogGallery127,
    description: "Диван «Честер» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                "245"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-komplekt-mango-2",
    name: "Комплект «Манго»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "80 000 ₽",
    image: "/assets/main-catalog-128-1.jpg",
    images: mainCatalogGallery128,
    description: "Комплект «Манго» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ]
    ],
  },
  {
    slug: "main-divan-korona-2",
    name: "Диван «Корона-2»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "85 000 ₽",
    image: "/assets/main-catalog-129-1.jpg",
    images: mainCatalogGallery129,
    description: "Диван «Корона-2» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Цвет",
                "декора: Белый с серебром"
          ]
    ],
  },
  {
    slug: "main-divan-london",
    name: "Диван «Лондон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "40 000 ₽",
    image: "/assets/main-catalog-130-1.jpg",
    images: mainCatalogGallery130,
    description: "Диван «Лондон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                "230"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-ya-banan",
    name: "Стол «Роза» со стульями «Я Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "40 000 ₽ / шт.",
    image: "/assets/main-catalog-131-1.jpg",
    images: mainCatalogGallery131,
    description: "Стол «Роза» со стульями «Я Банан» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120/160"
          ],
          [
                "Механизм",
                "раздвижной"
          ]
    ],
  },
  {
    slug: "main-stol-versachi-so-stulyami-versachi",
    name: "Стол «Версачи» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "30 000 ₽ / шт.",
    image: "/assets/main-catalog-132-1.jpg",
    images: mainCatalogGallery132,
    description: "Стол «Версачи» со стульями «Версачи» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120/160"
          ],
          [
                "Механизм",
                "раздвижной"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-roza",
    name: "Стол «Голд» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "40 000 ₽ / шт.",
    image: "/assets/main-catalog-133-1.jpg",
    images: mainCatalogGallery133,
    description: "Стол «Голд» со стульями «Роза» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120/160"
          ],
          [
                "Механизм",
                "раздвижной"
          ]
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-versachi-2",
    name: "Стол «Роза» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "35 000 ₽ / шт.",
    image: "/assets/main-catalog-134-1.jpg",
    images: mainCatalogGallery134,
    description: "Стол «Роза» со стульями «Версачи» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120/160"
          ],
          [
                "Механизм",
                "раздвижной"
          ]
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-versachi-3",
    name: "Стол «Роза» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "30 000 ₽ / шт.",
    image: "/assets/main-catalog-135-1.jpg",
    images: mainCatalogGallery135,
    description: "Стол «Роза» со стульями «Версачи» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120/160"
          ],
          [
                "Механизм",
                "раздвижной"
          ]
    ],
  },
  {
    slug: "main-krovat-veneciya-2",
    name: "Кровать «Венеция»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "20 000 ₽",
    image: "/assets/main-catalog-136-1.jpg",
    images: mainCatalogGallery136,
    description: "Кровать «Венеция» для спальни с комфортным спальным местом.",
    characteristics: [
          [
                "Размер",
                "90/2м"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-krovat-palermo",
    name: "Кровать «Палермо»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "20 000 ₽",
    image: "/assets/main-catalog-137-1.jpg",
    images: mainCatalogGallery137,
    description: "Кровать «Палермо» для спальни с комфортным спальным местом.",
    characteristics: [
          [
                "Размер",
                "90/2м"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-krovat-veneciya-3",
    name: "Кровать «Венеция»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "27 000 ₽",
    image: "/assets/main-catalog-138-1.jpg",
    images: mainCatalogGallery138,
    description: "Кровать «Венеция» для спальни с комфортным спальным местом.",
    characteristics: [
          [
                "Размер",
                "180/2"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-versachi-2",
    name: "Стол «Лапка» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "38 000 ₽ / шт.",
    image: "/assets/main-catalog-139-1.jpg",
    images: mainCatalogGallery139,
    description: "Стол «Лапка» со стульями «Версачи» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2/240"
          ]
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-roza-2",
    name: "Стол «Лапка» со стульями «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "45 000 ₽ / шт.",
    image: "/assets/main-catalog-140-1.jpg",
    images: mainCatalogGallery140,
    description: "Стол «Лапка» со стульями «Роза» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2/240"
          ]
    ],
  },
  {
    slug: "main-stol-rafaello-so-stulyami-ya-mini-sheyh",
    name: "Стол «Рафаэлло» со стульями «Я Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "95 000 ₽ / шт.",
    image: "/assets/main-catalog-141-1.jpg",
    images: mainCatalogGallery141,
    description: "Стол «Рафаэлло» со стульями «Я Мини Шейх» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 2/240 и 240/280"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-ya-veneciya",
    name: "Стол «Голд» со стульями «Я Венеция»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "105 000 ₽ / шт.",
    image: "/assets/main-catalog-143-1.jpg",
    images: mainCatalogGallery143,
    description: "Стол «Голд» со стульями «Я Венеция» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2/240 и 240/280"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-ya-domasko",
    name: "Стол «Голд» со стульями «Я Домаско»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "95 000 ₽ / шт.",
    image: "/assets/main-catalog-144-1.jpg",
    images: mainCatalogGallery144,
    description: "Стол «Голд» со стульями «Я Домаско» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2/240 и 240/280"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-ya-sheyh",
    name: "Стол «Голд» со стульями «Я Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "99 000 ₽ / шт.",
    image: "/assets/main-catalog-145-1.jpg",
    images: mainCatalogGallery145,
    description: "Стол «Голд» со стульями «Я Шейх» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2/240 и 240/280"
          ]
    ],
  },
  {
    slug: "main-divan-oshn",
    name: "Диван «OSHN»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "35 000 ₽",
    image: "/assets/main-catalog-146-1.jpg",
    images: mainCatalogGallery146,
    description: "Диван «OSHN» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                ": 221х100х89"
          ],
          [
                "Производство",
                "Буденновск \"OSHN\""
          ]
    ],
  },
  {
    slug: "main-divan-oshn-2",
    name: "Диван «OSHN»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "37 000 ₽",
    image: "/assets/main-catalog-147-1.jpg",
    images: mainCatalogGallery147,
    description: "Диван «OSHN» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                ": 240х110х100"
          ],
          [
                "Производство",
                "Буденновск \"OSHN\""
          ]
    ],
  },
  {
    slug: "main-divan-oshn-3",
    name: "Диван «OSHN»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "34 300 ₽",
    image: "/assets/main-catalog-148-1.jpg",
    images: mainCatalogGallery148,
    description: "Диван «OSHN» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                ": 233х96х95"
          ],
          [
                "Производство",
                "Буденновск \"OSHN\""
          ]
    ],
  },
  {
    slug: "main-divan-oshn-4",
    name: "Диван «OSHN»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "29 000 ₽",
    image: "/assets/main-catalog-149-1.jpg",
    images: mainCatalogGallery149,
    description: "Диван «OSHN» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                ": 220х93х82"
          ],
          [
                "Производство",
                "Буденновск \"OSHN\""
          ]
    ],
  },
  {
    slug: "main-divan-oshn-5",
    name: "Диван «OSHN»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "39 000 ₽",
    image: "/assets/main-catalog-150-1.jpg",
    images: mainCatalogGallery150,
    description: "Диван «OSHN» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                ": 220х106х102"
          ],
          [
                "Производство",
                "Буденновск \"OSHN\""
          ]
    ],
  },
  {
    slug: "main-spalnya-afrodita-lyuks",
    name: "Спальня «Афродита Люкс»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "57 500 ₽",
    image: "/assets/main-catalog-151-1.jpg",
    images: mainCatalogGallery151,
    description: "Спальня «Афродита Люкс» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "160х200"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-stulya-ya-banan",
    name: "Стулья «Я Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 500 ₽ / шт.",
    image: "/assets/main-catalog-152-1.jpg",
    images: mainCatalogGallery152,
    description: "Стулья «Я Банан» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ]
    ],
  },
  {
    slug: "main-stulya-ya-roza",
    name: "Стулья «Я Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 000 ₽ / шт.",
    image: "/assets/main-catalog-153-1.jpg",
    images: mainCatalogGallery153,
    description: "Стулья «Я Роза» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ]
    ],
  },
  {
    slug: "main-stulya-ya-roza-2",
    name: "Стулья «Я Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "3 700 ₽ / шт.",
    image: "/assets/main-catalog-154-1.jpg",
    images: mainCatalogGallery154,
    description: "Стулья «Я Роза» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ]
    ],
  },
  {
    slug: "main-stulya-ya-sheyh",
    name: "Стулья «Я Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "5 300 ₽ / шт.",
    image: "/assets/main-catalog-155-1.jpg",
    images: mainCatalogGallery155,
    description: "Стулья «Я Шейх» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ]
    ],
  },
  {
    slug: "main-stulya-roza",
    name: "Стулья «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 300 ₽ / шт.",
    image: "/assets/main-catalog-156-1.jpg",
    images: mainCatalogGallery156,
    description: "Стулья «Роза» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ]
    ],
  },
  {
    slug: "main-stulya-sheyh",
    name: "Стулья «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "5 300 ₽ / шт.",
    image: "/assets/main-catalog-157-1.jpg",
    images: mainCatalogGallery157,
    description: "Стулья «Шейх» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ]
    ],
  },
  {
    slug: "main-stulya-roza-2",
    name: "Стулья «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "3 700 ₽ / шт.",
    image: "/assets/main-catalog-158-1.jpg",
    images: mainCatalogGallery158,
    description: "Стулья «Роза» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ]
    ],
  },
  {
    slug: "main-stol-gold-i-stulya-sheyh",
    name: "Стол «Голд И Стулья Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "95 000 ₽ / шт.",
    image: "/assets/main-catalog-159-1.jpg",
    images: mainCatalogGallery159,
    description: "Стол «Голд И Стулья Шейх» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 2/240 и 240/280"
          ]
    ],
  },
  {
    slug: "main-stol-gold",
    name: "Стол «Голд»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "45 000 ₽ / шт.",
    image: "/assets/main-catalog-160-1.jpg",
    images: mainCatalogGallery160,
    description: "Стол «Голд» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "200/240 и 240/280"
          ]
    ],
  },
  {
    slug: "main-stol-sheyh-so-stulyami-sheyh",
    name: "Стол «Шейх» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "75 000 ₽ / шт.",
    image: "/assets/main-catalog-161-1.jpg",
    images: mainCatalogGallery161,
    description: "Стол «Шейх» со стульями «Шейх» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "240/100/80"
          ]
    ],
  },
  {
    slug: "main-stol-borokko-so-stulyami-ya-suren-6-shtuk",
    name: "Стол «Борокко» со стульями «Я Сурен 6 Штук»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "95 000 ₽ / шт.",
    image: "/assets/main-catalog-162-1.jpg",
    images: mainCatalogGallery162,
    description: "Стол «Борокко» со стульями «Я Сурен 6 Штук» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "200/240"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-ya-silik-8-shtuk",
    name: "Стол «Голд» со стульями «Я Силик 8 Штук»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "115 000 ₽ / шт.",
    image: "/assets/main-catalog-163-1.jpg",
    images: mainCatalogGallery163,
    description: "Стол «Голд» со стульями «Я Силик 8 Штук» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 2/240"
          ]
    ],
  },
  {
    slug: "main-stol-borokko-so-stulyami-ya-silik-8-shtuk",
    name: "Стол «Борокко» со стульями «Я Силик 8 Штук»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "125 000 ₽ / шт.",
    image: "/assets/main-catalog-164-1.jpg",
    images: mainCatalogGallery164,
    description: "Стол «Борокко» со стульями «Я Силик 8 Штук» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 2/240"
          ]
    ],
  },
  {
    slug: "main-stol-borokko-so-stulyami-ya-sheyh-8-shtuk",
    name: "Стол «Борокко» со стульями «Я Шейх 8 Штук»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "105 000 ₽ / шт.",
    image: "/assets/main-catalog-165-1.jpg",
    images: mainCatalogGallery165,
    description: "Стол «Борокко» со стульями «Я Шейх 8 Штук» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 2/240"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-ya-sheyh-8-shtuk",
    name: "Стол «Голд» со стульями «Я Шейх 8 Штук»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "105 000 ₽ / шт.",
    image: "/assets/main-catalog-166-1.jpg",
    images: mainCatalogGallery166,
    description: "Стол «Голд» со стульями «Я Шейх 8 Штук» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 2/240"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-ya-sheyh-8-shtuk-2",
    name: "Стол «Голд» со стульями «Я Шейх 8 Штук»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "110 000 ₽ / шт.",
    image: "/assets/main-catalog-167-1.jpg",
    images: mainCatalogGallery167,
    description: "Стол «Голд» со стульями «Я Шейх 8 Штук» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                ": 2/240"
          ]
    ],
  },
  {
    slug: "main-komplekt-bursa",
    name: "Комплект «Бурса»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "123 000 ₽",
    image: "/assets/main-catalog-168-1.jpg",
    images: mainCatalogGallery168,
    description: "Комплект «Бурса» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "190 /65"
          ]
    ],
  },
  {
    slug: "main-komplekt-korona-3",
    name: "Комплект «Корона-3»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "95 000 ₽",
    image: "/assets/main-catalog-169-1.jpg",
    images: mainCatalogGallery169,
    description: "Комплект «Корона-3» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ]
    ],
  },
  {
    slug: "main-komplekt-mango-3",
    name: "Комплект «Манго»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "65 000 ₽",
    image: "/assets/main-catalog-170-1.jpg",
    images: mainCatalogGallery170,
    description: "Комплект «Манго» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ]
    ],
  },
  {
    slug: "main-divan-faraon",
    name: "Диван «Фараон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "48 000 ₽",
    image: "/assets/main-catalog-171-1.jpg",
    images: mainCatalogGallery171,
    description: "Диван «Фараон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ]
    ],
  },
  {
    slug: "main-komplekt-faraon-3",
    name: "Комплект «Фараон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "76 000 ₽",
    image: "/assets/main-catalog-172-1.jpg",
    images: mainCatalogGallery172,
    description: "Комплект «Фараон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ]
    ],
  },
  {
    slug: "main-komplekt-stegannyy",
    name: "Комплект «Стёганный»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "58 000 ₽",
    image: "/assets/main-catalog-173-1.jpg",
    images: mainCatalogGallery173,
    description: "Комплект «Стёганный» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "Общий  420см"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-stegannyy",
    name: "Угловой диван «Стёганный»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "58 000 ₽",
    image: "/assets/main-catalog-174-1.jpg",
    images: mainCatalogGallery174,
    description: "Угловой диван «Стёганный» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                "Общий  370х180см"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-stegannyy-2",
    name: "Угловой диван «Стёганный»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "52 000 ₽",
    image: "/assets/main-catalog-175-1.jpg",
    images: mainCatalogGallery175,
    description: "Угловой диван «Стёганный» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                "Общий  370х180см"
          ]
    ],
  },
  {
    slug: "main-divan",
    name: "Диван",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "32 000 ₽",
    image: "/assets/main-catalog-176-1.jpg",
    images: mainCatalogGallery176,
    description: "Диван для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                "220 см"
          ]
    ],
  },
  {
    slug: "main-divan-2",
    name: "Диван",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "30 000 ₽",
    image: "/assets/main-catalog-177-1.jpg",
    images: mainCatalogGallery177,
    description: "Диван для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                "220 см"
          ]
    ],
  },
  {
    slug: "main-spalnya-afina-6d",
    name: "Спальня «Афина 6Д»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "146 000 ₽",
    image: "/assets/main-catalog-178-1.jpg",
    images: mainCatalogGallery178,
    description: "Спальня «Афина 6Д» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "спального места: 180200"
          ],
          [
                "Цвет",
                "Орех"
          ],
          [
                "Материал",
                "ЛДСП, МДФ"
          ],
          [
                "Производство",
                "Беларусь \"Слониммебель\""
          ]
    ],
  },
  {
    slug: "main-spalnya-allegro-6dv",
    name: "Спальня «Аллегро 6ДВ»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "115 000 ₽",
    image: "/assets/main-catalog-179-1.jpg",
    images: mainCatalogGallery179,
    description: "Спальня «Аллегро 6ДВ» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "2370/2875/666"
          ],
          [
                "Цвет",
                "Орех /Золотая патина"
          ],
          [
                "Фасады",
                ":"
          ],
          [
                "Материал",
                ":"
          ],
          [
                "Производство",
                "Беларусь \"Слониммебель\""
          ]
    ],
  },
  {
    slug: "main-spalnya-allegro-6-dv",
    name: "Спальня «Аллегро 6 Дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "115 000 ₽",
    image: "/assets/main-catalog-180-1.jpg",
    images: mainCatalogGallery180,
    description: "Спальня «Аллегро 6 Дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "спального места: 180200"
          ],
          [
                "Цвет",
                "Бежевый"
          ],
          [
                "Фасады",
                ":"
          ],
          [
                "Материал",
                ":"
          ],
          [
                "Производство",
                "Беларусь \"Слониммебель\""
          ]
    ],
  },
  {
    slug: "main-spalnya-feliciya-6dv",
    name: "Спальня «Фелиция 6дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "148 000 ₽",
    image: "/assets/main-catalog-181-1.jpg",
    images: mainCatalogGallery181,
    description: "Спальня «Фелиция 6дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "2740х640х2460"
          ],
          [
                "Цвет",
                "Крем глянец /Серебро патина"
          ],
          [
                "Корпус",
                "ЛДСП Белый"
          ],
          [
                "Материал",
                "фасадов: МДФ"
          ],
          [
                "Производство",
                "Ставрополь \"FortunaHome\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-versal",
    name: "Кухня «Версаль»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "87 000 ₽",
    image: "/assets/main-catalog-182-1.jpg",
    images: mainCatalogGallery182,
    description: "Кухня «Версаль» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 3600х600х2450(ШхГхВ)"
          ],
          [
                "Цвет",
                "Бежевый/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Ставрополь \"FortunaHome\""
          ]
    ],
  },
  {
    slug: "main-spalnya-afina-6dv",
    name: "Спальня «Афина 6дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "146 000 ₽",
    image: "/assets/main-catalog-183-1.jpg",
    images: mainCatalogGallery183,
    description: "Спальня «Афина 6дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "спального места: 180200"
          ],
          [
                "Цвет",
                "Цвет беж"
          ],
          [
                "Материал",
                "ЛДСП, МДФ"
          ],
          [
                "Производство",
                "Беларусь \"СлонимМебель\""
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-graciya",
    name: "Угловой диван «Грация»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "155 000 ₽",
    image: "/assets/main-catalog-184-1.jpg",
    images: mainCatalogGallery184,
    description: "Угловой диван «Грация» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ]
    ],
  },
  {
    slug: "main-komplekt-graciya",
    name: "Комплект «Грация»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "128 000 ₽",
    image: "/assets/main-catalog-185-1.jpg",
    images: mainCatalogGallery185,
    description: "Комплект «Грация» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ]
    ],
  },
  {
    slug: "main-komplekt-mango-4",
    name: "Комплект «MANGO»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "85 000 ₽",
    image: "/assets/main-catalog-186-1.jpg",
    images: mainCatalogGallery186,
    description: "Комплект «MANGO» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                ": Диван 330/260"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-veneciya-klassik-2",
    name: "ТВ тумба «Венеция Классик»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "75 000 ₽",
    image: "/assets/main-catalog-187-1.jpg",
    images: mainCatalogGallery187,
    description: "ТВ тумба «Венеция Классик» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Фасады",
                "МДФ"
          ]
    ],
  },
  {
    slug: "main-kuhnya-veneciya-4",
    name: "Кухня «Венеция»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "129 500 ₽",
    image: "/assets/main-catalog-188-1.jpg",
    images: mainCatalogGallery188,
    description: "Кухня «Венеция» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "450 х600х2400"
          ],
          [
                "Цвет",
                "Крем/Золотая патина."
          ],
          [
                "Корпус",
                "ЛДСП Белый."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ]
    ],
  },
  {
    slug: "main-kuhnya-assol",
    name: "Кухня «Ассоль»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "70 000 ₽",
    image: "/assets/main-catalog-189-1.jpg",
    images: mainCatalogGallery189,
    description: "Кухня «Ассоль» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Цвет",
                "крем золото"
          ],
          [
                "Материал",
                "МДФ крашенный"
          ],
          [
                "Производство",
                "E-Art, г.Ставраполь"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-berta-2",
    name: "ТВ тумба «Берта»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "65 000 ₽",
    image: "/assets/main-catalog-190-1.jpg",
    images: mainCatalogGallery190,
    description: "ТВ тумба «Берта» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Описание",
                "характеристики уточняются"
          ]
    ],
  },
  {
    slug: "main-stol-dzhokonda",
    name: "Стол «Джоконда»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "90 000 ₽ / шт.",
    image: "/assets/main-catalog-191-1.jpg",
    images: mainCatalogGallery191,
    description: "Стол «Джоконда» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "( 1,8х2,3х1)"
          ],
          [
                "Производство",
                "Эра Ставрополь"
          ]
    ],
  },
  {
    slug: "main-kuhnya-milana",
    name: "Кухня «Милана»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "120 000 ₽",
    image: "/assets/main-catalog-192-1.jpg",
    images: mainCatalogGallery192,
    description: "Кухня «Милана» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 5.10"
          ],
          [
                "Производство",
                "Левада Ставрополь"
          ]
    ],
  },
  {
    slug: "main-komplekt-dva",
    name: "Комплект «Два»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "110 000 ₽",
    image: "/assets/main-catalog-193-1.jpg",
    images: mainCatalogGallery193,
    description: "Комплект «Два» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, 2 кресла"
          ]
    ],
  },
  {
    slug: "main-komplekt-relaks",
    name: "Комплект «РЕЛАКС»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "95 000 ₽",
    image: "/assets/main-catalog-194-1.jpg",
    images: mainCatalogGallery194,
    description: "Комплект «РЕЛАКС» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "165х70"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
  },
  {
    slug: "main-komplekt-dva-2",
    name: "Комплект «Два»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "90 000 ₽",
    image: "/assets/main-catalog-195-1.jpg",
    images: mainCatalogGallery195,
    description: "Комплект «Два» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, 2 кресла"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-faraon-2",
    name: "Угловой диван «Фараон»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "90 000 ₽",
    image: "/assets/main-catalog-196-1.jpg",
    images: mainCatalogGallery196,
    description: "Угловой диван «Фараон» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                ": 3/2"
          ]
    ],
  },
  {
    slug: "main-spalnya-batichella-6dv",
    name: "Спальня «Батичелла 6дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "139 000 ₽",
    image: "/assets/main-catalog-197-1.jpg",
    images: mainCatalogGallery197,
    description: "Спальня «Батичелла 6дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "спального места: 180200см"
          ],
          [
                "Цвет",
                "крем"
          ],
          [
                "Материал",
                "МДФ, ХДФ, ЛДСП, ППУ, жидкая поталь"
          ],
          [
                "Производство",
                "Ставрополь \"FortunaHome\""
          ]
    ],
  },
  {
    slug: "main-spalnya-viktoriya-5dv",
    name: "Спальня «Виктория 5дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "85 000 ₽",
    image: "/assets/main-catalog-198-1.jpg",
    images: mainCatalogGallery198,
    description: "Спальня «Виктория 5дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Шкаф: 5-ти дв: Ш2350хГ520х2400"
          ],
          [
                "Производство",
                "21Век"
          ]
    ],
  },
  {
    slug: "main-spalnya-adelina-4dv-2",
    name: "Спальня «Аделина 4дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "75 000 ₽",
    image: "/assets/main-catalog-199-1.jpg",
    images: mainCatalogGallery199,
    description: "Спальня «Аделина 4дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Шкаф 4-х дв: Ш2100хГ520хВ2150мм"
          ],
          [
                "Цвет",
                "Серый графит"
          ],
          [
                "Производство",
                "21Век"
          ]
    ],
  },
  {
    slug: "main-spalnya-mona-liza-5dv",
    name: "Спальня «Мона-Лиза 5дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "120 000 ₽",
    image: "/assets/main-catalog-200-1.jpg",
    images: mainCatalogGallery200,
    description: "Спальня «Мона-Лиза 5дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "шкафа (ВхШхГ): 2400х2540х630."
          ],
          [
                "Цвет",
                "Крем глянец/Золотая патина."
          ],
          [
                "Корпус",
                "ЛДСП Белый."
          ],
          [
                "Материал",
                "фасадов: МДФ."
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-spalnya-bogemiya-4-dv",
    name: "Спальня «Богемия 4 Дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "60 000 ₽",
    image: "/assets/main-catalog-201-1.jpg",
    images: mainCatalogGallery201,
    description: "Спальня «Богемия 4 Дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Шкаф 4х дв: 2600х600х2200"
          ],
          [
                "Производство",
                "21 век"
          ]
    ],
  },
  {
    slug: "main-spalnya-nika-4dv",
    name: "Спальня «Ника 4дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "95 000 ₽",
    image: "/assets/main-catalog-202-1.jpg",
    images: mainCatalogGallery202,
    description: "Спальня «Ника 4дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Поступила спальня Ника 4дв"
          ],
          [
                "Цвет",
                "Беж+ золото"
          ],
          [
                "Производство",
                "21Век"
          ]
    ],
  },
  {
    slug: "main-kuhnya-provans-2-2",
    name: "Кухня «Прованс 2»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "35 000 ₽",
    image: "/assets/main-catalog-203-1.jpg",
    images: mainCatalogGallery203,
    description: "Кухня «Прованс 2» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Цвет",
                "Белый/серый антарес"
          ],
          [
                "Материал",
                "корпса:ЛДСП"
          ],
          [
                "Производство",
                "СБК"
          ]
    ],
  },
  {
    slug: "main-kuhnya-gletcher-3m-geynsboro",
    name: "Кухня «Глетчер 3м Гейнсборо»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "49 000 ₽",
    image: "/assets/main-catalog-204-1.jpg",
    images: mainCatalogGallery204,
    description: "Кухня «Глетчер 3м Гейнсборо» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Материал",
                "корпуса: ЛДСП"
          ],
          [
                "Производство",
                "СБК"
          ]
    ],
  },
  {
    slug: "main-kuhnya-elegiya",
    name: "Кухня «Элегия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "81 000 ₽",
    image: "/assets/main-catalog-205-1.jpg",
    images: mainCatalogGallery205,
    description: "Кухня «Элегия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 3050/1500см Г600хВ2500"
          ],
          [
                "Цвет",
                "светлый крем"
          ],
          [
                "Корпус",
                "ЛДСП"
          ],
          [
                "Материал",
                "фасадов: МДФ"
          ],
          [
                "Производство",
                "Буденновск «Заман»"
          ]
    ],
  },
  {
    slug: "main-kuhnya-valensiya-4",
    name: "Кухня «Валенсия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "69 500 ₽",
    image: "/assets/main-catalog-206-1.jpg",
    images: mainCatalogGallery206,
    description: "Кухня «Валенсия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 3000×600х2500"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-valensiya-5",
    name: "Кухня «Валенсия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "73 000 ₽",
    image: "/assets/main-catalog-207-1.jpg",
    images: mainCatalogGallery207,
    description: "Кухня «Валенсия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "3000х600х2500"
          ],
          [
                "Цвет",
                "Олива шампань"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-vivaldi",
    name: "Кухня «Вивальди»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "120 000 ₽",
    image: "/assets/main-catalog-208-1.jpg",
    images: mainCatalogGallery208,
    description: "Кухня «Вивальди» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "Пенал 2х дв 1.05см"
          ],
          [
                "Цвет",
                "Серый"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-vivaldi-2",
    name: "Кухня «Вивальди»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "71 000 ₽",
    image: "/assets/main-catalog-209-1.jpg",
    images: mainCatalogGallery209,
    description: "Кухня «Вивальди» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2900х600х2500"
          ],
          [
                "Цвет",
                "Крем/Золотая патина."
          ],
          [
                "Корпус",
                "ЛДСП Ваниль."
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка."
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-valensiya-6",
    name: "Кухня «Валенсия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "95 000 ₽",
    image: "/assets/main-catalog-210-1.jpg",
    images: mainCatalogGallery210,
    description: "Кухня «Валенсия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 4200х600х2500"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-valensiya-7",
    name: "Кухня «Валенсия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "94 500 ₽",
    image: "/assets/main-catalog-211-1.jpg",
    images: mainCatalogGallery211,
    description: "Кухня «Валенсия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "600х2500"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-valensiya-8",
    name: "Кухня «Валенсия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "81 000 ₽",
    image: "/assets/main-catalog-212-1.jpg",
    images: mainCatalogGallery212,
    description: "Кухня «Валенсия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 3000×1200-600х2500"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-kuhnya-belladzho-6",
    name: "Кухня «Белладжо»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "110 000 ₽",
    image: "/assets/main-catalog-213-1.jpg",
    images: mainCatalogGallery213,
    description: "Кухня «Белладжо» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                "2000/3700"
          ],
          [
                "Цвет",
                "Крем/Золотая патина"
          ],
          [
                "Корпус",
                "ЛДСП Ваниль"
          ],
          [
                "Материал",
                "фасадов: МДФ фрезерованный с элементом рисунка"
          ],
          [
                "Производство",
                "Буденновск \"Заман\""
          ]
    ],
  },
  {
    slug: "main-shkaf-yuneora-3",
    name: "Шкаф «Юнеора 3»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "18 000 ₽",
    image: "/assets/main-catalog-214-1.jpg",
    images: mainCatalogGallery214,
    description: "Шкаф «Юнеора 3» для хранения одежды и повседневных вещей.",
    characteristics: [
          [
                "Размер",
                ": 120/190"
          ]
    ],
  },
  {
    slug: "main-shkaf-yuneora-4",
    name: "Шкаф «Юнеора 4»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "18 000 ₽",
    image: "/assets/main-catalog-215-1.jpg",
    images: mainCatalogGallery215,
    description: "Шкаф «Юнеора 4» для хранения одежды и повседневных вещей.",
    characteristics: [
          [
                "Размер",
                ": 120/190"
          ]
    ],
  },
  {
    slug: "main-shkaf-luntik",
    name: "Шкаф «Лунтик»",
    category: "Шкафы",
    categorySlug: "shkafy",
    price: "18 000 ₽",
    image: "/assets/main-catalog-216-1.jpg",
    images: mainCatalogGallery216,
    description: "Шкаф «Лунтик» для хранения одежды и повседневных вещей.",
    characteristics: [
          [
                "Размер",
                ": 120/190"
          ]
    ],
  },
  {
    slug: "main-krovat-geometriya",
    name: "Кровать «Геометрия»",
    category: "Кровати",
    categorySlug: "krovati",
    price: "19 900 ₽",
    image: "/assets/main-catalog-217-1.jpg",
    images: mainCatalogGallery217,
    description: "Кровать «Геометрия» для спальни с комфортным спальным местом.",
    characteristics: [
          [
                "Размер",
                "90х200"
          ]
    ],
  },
  {
    slug: "main-divan-ameliya-2",
    name: "Диван «Амелия»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Диваны",
    price: "80 000 ₽",
    image: "/assets/main-catalog-218-1.jpg",
    images: mainCatalogGallery218,
    description: "Диван «Амелия» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Диваны"
          ],
          [
                "Размер",
                "1,40/2,00"
          ],
          [
                "Производство",
                "Краснодарский край Фабрика Миал"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-madlen",
    name: "Угловой диван «Мадлен»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "70 000 ₽",
    image: "/assets/main-catalog-219-1.jpg",
    images: mainCatalogGallery219,
    description: "Угловой диван «Мадлен» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                ": 340/1,87/1,65"
          ],
          [
                "Производство",
                "Краснодарский край"
          ]
    ],
  },
  {
    slug: "main-kuhnya-azaliya",
    name: "Кухня «Азалия»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "60 000 ₽",
    image: "/assets/main-catalog-220-1.jpg",
    images: mainCatalogGallery220,
    description: "Кухня «Азалия» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Цвет",
                "белая в серебре"
          ],
          [
                "Корпус",
                "ЛДСП"
          ],
          [
                "Фасады",
                "ы МДФ под Эмалью"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-kuhnya-adelina",
    name: "Кухня «АДЕЛИНА»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "75 100 ₽",
    image: "/assets/main-catalog-221-1.jpg",
    images: mainCatalogGallery221,
    description: "Кухня «АДЕЛИНА» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Цвет",
                "бел/шампань левый/правый пенал"
          ],
          [
                "Корпус",
                "ЛДСП"
          ],
          [
                "Фасады",
                "ы МДФ под Эмалью"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-spalnya-allegro-6dv-2",
    name: "Спальня «Аллегро 6дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "110 000 ₽",
    image: "/assets/main-catalog-222-1.jpg",
    images: mainCatalogGallery222,
    description: "Спальня «Аллегро 6дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "спального места: 180200"
          ],
          [
                "Цвет",
                "Орех"
          ],
          [
                "Фасады",
                ":"
          ],
          [
                "Материал",
                ":"
          ],
          [
                "Производство",
                "Беларусь \"СлонимМебель\""
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-navinka",
    name: "Угловой диван «Навинка»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "85 000 ₽",
    image: "/assets/main-catalog-223-1.jpg",
    images: mainCatalogGallery223,
    description: "Угловой диван «Навинка» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                ": Диван 340/220"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-komplekt-shayh",
    name: "Комплект «Шайх»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "65 000 ₽",
    image: "/assets/main-catalog-224-1.jpg",
    images: mainCatalogGallery224,
    description: "Комплект «Шайх» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ]
    ],
  },
  {
    slug: "main-spalnya-monika",
    name: "Спальня «Моника»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "65 000 ₽",
    image: "/assets/main-catalog-225-1.jpg",
    images: mainCatalogGallery225,
    description: "Спальня «Моника» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-spalnya-azaliya-6-lyuks",
    name: "Спальня «Азалия-6 Люкс»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "57 000 ₽",
    image: "/assets/main-catalog-226-1.jpg",
    images: mainCatalogGallery226,
    description: "Спальня «Азалия-6 Люкс» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "кровати 180/200"
          ],
          [
                "Цвет",
                "Глянец"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-spalnya-agata",
    name: "Спальня «Агата»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "130 000 ₽",
    image: "/assets/main-catalog-227-1.jpg",
    images: mainCatalogGallery227,
    description: "Спальня «Агата» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Шкаф 2700ш.2120в.560г."
          ],
          [
                "Цвет",
                "Крем глянец / Золото патина"
          ],
          [
                "Корпус",
                "ЛДСП Белый"
          ],
          [
                "Материал",
                "фасадов: МДФ"
          ],
          [
                "Производство",
                "Ставрополь \"FortunaHome\""
          ]
    ],
  },
  {
    slug: "main-spalnya-bodrum-6dv",
    name: "Спальня «Бодрум 6дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "90 000 ₽",
    image: "/assets/main-catalog-228-1.jpg",
    images: mainCatalogGallery228,
    description: "Спальня «Бодрум 6дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Шкаф для одежды: 6 дв. В2200 х Ш2660 х Г585"
          ],
          [
                "Производство",
                "Беларусь"
          ]
    ],
  },
  {
    slug: "main-spalnya-garda-5dv",
    name: "Спальня «Гарда 5дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "60 000 ₽",
    image: "/assets/main-catalog-229-1.jpg",
    images: mainCatalogGallery229,
    description: "Спальня «Гарда 5дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Спальня Гарда 5дв"
          ],
          [
                "Цвет",
                "Сосна Джексон"
          ],
          [
                "Корпус",
                "Ламинированная ДСП"
          ],
          [
                "Фасады",
                "МДФ"
          ],
          [
                "Производство",
                "Беларусь \"СлонимМебель\""
          ]
    ],
  },
  {
    slug: "main-spalnya-versal-6-dv",
    name: "Спальня «Версаль 6 Дв»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "150 000 ₽",
    image: "/assets/main-catalog-230-1.jpg",
    images: mainCatalogGallery230,
    description: "Спальня «Версаль 6 Дв» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Цвет",
                "товара: Светлый"
          ],
          [
                "Корпус",
                "ЛДСП Белый"
          ],
          [
                "Материал",
                "фасадов: МДФ"
          ],
          [
                "Производство",
                "Беларусь \"Слониммебель\""
          ]
    ],
  },
  {
    slug: "main-komplekt-relaks-2",
    name: "Комплект «РЕЛАКС»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "110 000 ₽",
    image: "/assets/main-catalog-231-1.jpg",
    images: mainCatalogGallery231,
    description: "Комплект «РЕЛАКС» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "165х70"
          ],
          [
                "Производство",
                "Дагестан."
          ]
    ],
  },
  {
    slug: "main-komplekt-dva-3",
    name: "Комплект «Два»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "95 000 ₽",
    image: "/assets/main-catalog-232-1.jpg",
    images: mainCatalogGallery232,
    description: "Комплект «Два» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, 2 кресла"
          ]
    ],
  },
  {
    slug: "main-komplekt-vhodit",
    name: "Комплект «Входит»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "125 000 ₽",
    image: "/assets/main-catalog-233-1.jpg",
    images: mainCatalogGallery233,
    description: "Комплект «Входит» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, 2 кресла"
          ],
          [
                "Размер",
                "180/70"
          ]
    ],
  },
  {
    slug: "main-komplekt-siyama",
    name: "Комплект «СИЯМА»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "85 000 ₽",
    image: "/assets/main-catalog-234-1.jpg",
    images: mainCatalogGallery234,
    description: "Комплект «СИЯМА» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ]
    ],
  },
  {
    slug: "main-komplekt-sevilya",
    name: "Комплект «Севилья»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "155 000 ₽",
    image: "/assets/main-catalog-235-1.jpg",
    images: mainCatalogGallery235,
    description: "Комплект «Севилья» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, 2 кресла"
          ]
    ],
  },
  {
    slug: "main-komplekt-fudzheyra",
    name: "Комплект «ФУДЖЕЙРА»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "205 000 ₽",
    image: "/assets/main-catalog-236-1.jpg",
    images: mainCatalogGallery236,
    description: "Комплект «ФУДЖЕЙРА» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, 2 кресла"
          ]
    ],
  },
  {
    slug: "main-spalnya-zlata",
    name: "Спальня «Злата»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "80 000 ₽",
    image: "/assets/main-catalog-237-1.jpg",
    images: mainCatalogGallery237,
    description: "Спальня «Злата» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "180/200"
          ],
          [
                "Цвет",
                "Крем"
          ],
          [
                "Производство",
                "Краснодарский край Фабрика «Миал»."
          ]
    ],
  },
  {
    slug: "main-spalnya-nika",
    name: "Спальня «Ника»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "90 000 ₽",
    image: "/assets/main-catalog-238-1.jpg",
    images: mainCatalogGallery238,
    description: "Спальня «Ника» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "180/200"
          ],
          [
                "Цвет",
                "Капучино"
          ]
    ],
  },
  {
    slug: "main-spalnya-magdalena",
    name: "Спальня «Магдалена»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "79 000 ₽",
    image: "/assets/main-catalog-239-1.jpg",
    images: mainCatalogGallery239,
    description: "Спальня «Магдалена» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "180/200"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-spalnya-miya",
    name: "Спальня «Мия»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "80 000 ₽",
    image: "/assets/main-catalog-240-1.jpg",
    images: mainCatalogGallery240,
    description: "Спальня «Мия» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "180/200"
          ],
          [
                "Цвет",
                "Мокко"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-tv-tumba-tv-gruppa-eveniz",
    name: "ТВ тумба «TV ГРУППА EVENIZ»",
    category: "Тумбы",
    categorySlug: "tumby",
    price: "130 000 ₽",
    image: "/assets/main-catalog-241-1.jpg",
    images: mainCatalogGallery241,
    description: "ТВ тумба «TV ГРУППА EVENIZ» для ТВ-зоны и хранения аксессуаров.",
    characteristics: [
          [
                "Производство",
                "Турция"
          ]
    ],
  },
  {
    slug: "main-kuhnya-ot-fabriki-seol",
    name: "Кухня «От Фабрики Сеол»",
    category: "Кухонные гарнитуры",
    categorySlug: "kuhonnye-garnitury",
    price: "55 000 ₽",
    image: "/assets/main-catalog-242-1.jpg",
    images: mainCatalogGallery242,
    description: "Кухня «От Фабрики Сеол» для аккуратной и удобной кухни.",
    characteristics: [
          [
                "Размер",
                ": 3.20м (высота 2,50м)"
          ],
          [
                "Корпус",
                "ЛДСП"
          ],
          [
                "Фасады",
                "МДФ в пленке ПВХ"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-banan",
    name: "Стол «Лапка» со стульями «Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 23 000 ₽",
    image: "/assets/main-catalog-243-1.jpg",
    images: mainCatalogGallery243,
    description: "Стол «Лапка» со стульями «Банан» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Банан» — 4 200 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "120-160 × 80 × 80 -",
                "price": "23 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "24 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200-240 × 100 × 80 -",
                "price": "25 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Банан»",
                "price": "4 200 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-sheyh-2",
    name: "Стол «Голд» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 39 000 ₽",
    image: "/assets/main-catalog-244-1.jpg",
    images: mainCatalogGallery244,
    description: "Стол «Голд» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "4 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 5 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "39 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200-240 × 100 × 80 -",
                "price": "40 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "240-280 × 100 × 80 -",
                "price": "41 000 ₽ / шт."
          },
          {
                "label": "Вариант 4",
                "dimensions": "300-350 × 100 × 80 -",
                "price": "42 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "5 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stolovyy-komplekt-gold",
    name: "Столовый комплект «Голд»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "90 000 ₽",
    image: "/assets/main-catalog-245-1.jpg",
    images: mainCatalogGallery245,
    description: "Столовый комплект «Голд» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "Размер",
                "200/240"
          ]
    ],
  },
  {
    slug: "main-stolovyy-komplekt-gold-kruglyy",
    name: "Столовый комплект «Голд Круглый»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "45 000 ₽",
    image: "/assets/main-catalog-246-1.jpg",
    images: mainCatalogGallery246,
    description: "Столовый комплект «Голд Круглый» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "Размер",
                "120/160"
          ]
    ],
  },
  {
    slug: "main-stolovyy-komplekt-roza",
    name: "Столовый комплект «Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Комплекты",
    price: "40 000 ₽",
    image: "/assets/main-catalog-247-1.jpg",
    images: mainCatalogGallery247,
    description: "Столовый комплект «Роза» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "Размер",
                "120/160"
          ]
    ],
  },
  {
    slug: "main-prihozhaya-gloriya-5-2",
    name: "Прихожая «Глория 5»",
    category: "Прихожие",
    categorySlug: "prihozhie",
    price: "45 000 ₽",
    image: "/assets/main-catalog-248-1.jpg",
    images: mainCatalogGallery248,
    description: "Прихожая «Глория 5» для компактного хранения вещей в прихожей.",
    characteristics: [
          [
                "Размер",
                "170/230"
          ]
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-ya-mini-sheyhi",
    name: "Стол «Роза» со стульями «Я Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "50 000 ₽ / шт.",
    image: "/assets/main-catalog-249-1.jpg",
    images: mainCatalogGallery249,
    description: "Стол «Роза» со стульями «Я Мини Шейхи» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120/160"
          ]
    ],
  },
  {
    slug: "main-stol-gold-mokko-so-stulyami-ya-mini-sheyhi",
    name: "Стол «Голд Мокко» со стульями «Я Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "85 000 ₽ / шт.",
    image: "/assets/main-catalog-250-1.jpg",
    images: mainCatalogGallery250,
    description: "Стол «Голд Мокко» со стульями «Я Мини Шейхи» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "/ 200/240"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-ya-mini-sheyhi",
    name: "Стол «Голд» со стульями «Я Мини Шейхи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "90 000 ₽ / шт.",
    image: "/assets/main-catalog-251-1.jpg",
    images: mainCatalogGallery251,
    description: "Стол «Голд» со стульями «Я Мини Шейхи» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "200/240"
          ]
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-ya-banan",
    name: "Стол «Лапка» со стульями «Я Банан»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "50 000 ₽ / шт.",
    image: "/assets/main-catalog-252-1.jpg",
    images: mainCatalogGallery252,
    description: "Стол «Лапка» со стульями «Я Банан» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120/160"
          ]
    ],
  },
  {
    slug: "main-stulya-ya",
    name: "Стулья «Я»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "4 600 ₽ / шт.",
    image: "/assets/main-catalog-253-1.jpg",
    images: mainCatalogGallery253,
    description: "Стулья «Я» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
  },
  {
    slug: "main-stulya-taburetki",
    name: "Стулья «Табуретки»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "1 600 ₽ / шт.",
    image: "/assets/main-catalog-254-1.jpg",
    images: mainCatalogGallery254,
    description: "Стулья «Табуретки» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ]
    ],
  },
  {
    slug: "main-stulya-ya-2",
    name: "Стулья «Я»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Стулья",
    price: "5 000 ₽ / шт.",
    image: "/assets/main-catalog-255-1.jpg",
    images: mainCatalogGallery255,
    description: "Стулья «Я» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Стулья"
          ],
          [
                "Производство",
                "Дагестан"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-sheyh-ugol",
    name: "Угловой диван «Шейх Угол»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "65 000 ₽",
    image: "/assets/main-catalog-256-1.jpg",
    images: mainCatalogGallery256,
    description: "Угловой диван «Шейх Угол» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                ": Диван 340/220"
          ]
    ],
  },
  {
    slug: "main-komplekt-sheyh",
    name: "Комплект «Шейх»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "55 000 ₽",
    image: "/assets/main-catalog-257-1.jpg",
    images: mainCatalogGallery257,
    description: "Комплект «Шейх» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "Производство",
                "Краснодар"
          ]
    ],
  },
  {
    slug: "main-stol-sheyh-so-stulyami-sheyh-2",
    name: "Стол «Шейх» со стульями «Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "34 000 ₽ / шт.",
    image: "/assets/main-catalog-258-1.jpg",
    images: mainCatalogGallery258,
    description: "Стол «Шейх» со стульями «Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "160-200 × 100 × 80 -"
          ],
          [
                "Дополнительно",
                "Стулья «Шейх» — 4 600 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "160-200 × 100 × 80 -",
                "price": "34 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Шейх»",
                "price": "4 600 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-ya-roza",
    name: "Стол «Роза» со стульями «Я Роза»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "23 000 ₽ / шт.",
    image: "/assets/main-catalog-259-1.jpg",
    images: mainCatalogGallery259,
    description: "Стол «Роза» со стульями «Я Роза» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120х160"
          ],
          [
                "Дополнительно",
                "Стулья «Я Роза» — 3 800 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Я Роза»",
                "price": "3 800 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-roza-so-stulyami-ya-versachi",
    name: "Стол «Роза» со стульями «Я Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "23 000 ₽ / шт.",
    image: "/assets/main-catalog-260-1.jpg",
    images: mainCatalogGallery260,
    description: "Стол «Роза» со стульями «Я Версачи» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120х160"
          ],
          [
                "Дополнительно",
                "Стулья «Я Версачи» — 3 000 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Я Версачи»",
                "price": "3 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-graciya-so-stulyami-pegas",
    name: "Стол «Грация» со стульями «Пегас»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 45 000 ₽",
    image: "/assets/main-catalog-262-1.jpg",
    images: mainCatalogGallery262,
    description: "Стол «Грация» со стульями «Пегас» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Пегас» — 4 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "240 × 110 × 80 -",
                "price": "45 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "270 × 110 × 80 -",
                "price": "46 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Пегас»",
                "price": "4 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-mokko",
    name: "Стол «Лапка» со стульями «Мокко»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 30 000 ₽",
    image: "/assets/main-catalog-263-1.jpg",
    images: mainCatalogGallery263,
    description: "Стол «Лапка» со стульями «Мокко» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мокко» — 5 400 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "120-160 × 80 × 80 -",
                "price": "30 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "31 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200-240 × 100 × 80 -",
                "price": "32 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мокко»",
                "price": "5 400 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-mokko-so-stulyami-mokko",
    name: "Стол «Мокко» со стульями «Мокко»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 28 000 ₽",
    image: "/assets/main-catalog-264-1.jpg",
    images: mainCatalogGallery264,
    description: "Стол «Мокко» со стульями «Мокко» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мокко» — 5 400 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "120-160 × 80 × 80 -",
                "price": "28 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "29 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "200-240 × 100 × 80 -",
                "price": "30 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мокко»",
                "price": "5 400 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-komplekt-dva-4",
    name: "Комплект «Два»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "85 000 ₽",
    image: "/assets/main-catalog-265-1.jpg",
    images: mainCatalogGallery265,
    description: "Комплект «Два» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, 2 кресла"
          ],
          [
                "Размер",
                "170х65"
          ]
    ],
  },
  {
    slug: "main-stol-graciya-oval",
    name: "Стол «Грация овал»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 45 000 ₽",
    image: "/assets/main-catalog-266-1.jpg",
    images: mainCatalogGallery266,
    description: "Стол «Грация овал» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "200 × 100 × 80 -",
                "price": "45 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 100 × 80 -",
                "price": "46 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-lapka-so-stulyami-medalon",
    name: "Стол «Лапка» со стульями «Медальон»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "19 500 ₽ / шт.",
    image: "/assets/main-catalog-267-1.jpg",
    images: mainCatalogGallery267,
    description: "Стол «Лапка» со стульями «Медальон» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "90 см в не разложенном состоянии"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Медальон» — 5 500 ₽ / шт."
          ]
    ],
    addOns: [
          {
                "label": "Стулья «Медальон»",
                "price": "5 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-mokko-so-stulyami-mokko-2",
    name: "Стол «Мокко» со стульями «Мокко»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 30 000 ₽",
    image: "/assets/main-catalog-268-1.jpg",
    images: mainCatalogGallery268,
    description: "Стол «Мокко» со стульями «Мокко» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Мокко» — 5 400 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "200 × 240 -",
                "price": "30 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "160 × 200 -",
                "price": "29 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "120 × 160 -",
                "price": "28 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мокко»",
                "price": "5 400 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-afina-so-stulyami-suren",
    name: "Стол «Афина» со стульями «Сурен»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "30 000 ₽ / шт.",
    image: "/assets/main-catalog-269-1.jpg",
    images: mainCatalogGallery269,
    description: "Стол «Афина» со стульями «Сурен» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "160 × 200-"
          ],
          [
                "Дополнительно",
                "Стулья «Сурен» — 6 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "160 × 200-",
                "price": "30 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сурен»",
                "price": "6 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-graf-so-stulyami-graf",
    name: "Стол «Граф» со стульями «Граф»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 50 000 ₽",
    image: "/assets/main-catalog-270-1.jpg",
    images: mainCatalogGallery270,
    description: "Стол «Граф» со стульями «Граф» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Граф» — 12 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "240 -",
                "price": "50 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "270 -",
                "price": "51 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Граф»",
                "price": "12 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-stol-mini-sheyh-so-stulyami-mini-sheyh",
    name: "Стол «Мини Шейх» со стульями «Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "26 500 ₽ / шт.",
    image: "/assets/main-catalog-271-1.jpg",
    images: mainCatalogGallery271,
    description: "Стол «Мини Шейх» со стульями «Мини Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "120-160 -"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх» — 4 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "120-160 -",
                "price": "26 500 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх»",
                "price": "4 500 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-spalnya-afrodita-lyuks-4hdv-bezh",
    name: "Спальня «Афродита Люкс 4хдв Беж»",
    category: "Спальные гарнитуры",
    categorySlug: "spalnye-garnitury",
    price: "55 000 ₽",
    image: "/assets/main-catalog-272-1.jpg",
    images: mainCatalogGallery272,
    description: "Спальня «Афродита Люкс 4хдв Беж» для спальни с продуманным хранением и классическим оформлением.",
    characteristics: [
          [
                "Размер",
                "Спальня Афродита люкс 4хдв беж"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-komplekt-stegannyy-2",
    name: "Комплект «Стёганный»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "57 000 ₽",
    image: "/assets/main-catalog-274-1.jpg",
    images: mainCatalogGallery274,
    description: "Комплект «Стёганный» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "Обший 4.10 см"
          ]
    ],
  },
  {
    slug: "main-stol-tachenka-versachi-so-stulyami-versachi",
    name: "Стол «Таченка версачи» со стульями «Версачи»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "28 000 ₽ / шт.",
    image: "/assets/main-catalog-275-1.jpg",
    images: mainCatalogGallery275,
    description: "Стол «Таченка версачи» со стульями «Версачи» для обеденной зоны, кухни или гостиной.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "160/80/80"
          ]
    ],
  },
  {
    slug: "main-stol-gold-so-stulyami-mini-sheyh",
    name: "Стол «Голд» со стульями «Мини Шейх»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 46 000 ₽",
    image: "/assets/main-catalog-276-1.jpg",
    images: mainCatalogGallery276,
    description: "Стол «Голд» со стульями «Мини Шейх» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Механизм",
                "раздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Мини Шейх» — 5 400 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "200 × 240 × 100 -",
                "price": "46 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 280 × 110 -",
                "price": "48 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Мини Шейх»",
                "price": "5 400 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-komplekt-vysota-93",
    name: "Комплект «Высота 93»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "62 000 ₽",
    image: "/assets/main-catalog-277-1.jpg",
    images: mainCatalogGallery277,
    description: "Комплект «Высота 93» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "НА ЗАКАЗ В ЛЮБОЙ РАСЦВЕТКЕ ЗА 3-5 ДНЕЙ"
          ]
    ],
  },
  {
    slug: "main-stol-ameliya-so-stulyami-ameliya",
    name: "Стол «Амелия» со стульями «Амелия»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 27 000 ₽",
    image: "/assets/main-catalog-278-1.jpg",
    images: mainCatalogGallery278,
    description: "Стол «Амелия» со стульями «Амелия» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "2 варианта"
          ],
          [
                "Дополнительно",
                "Стулья «Амелия» — 6 000 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "160-200 × 90 × 80 -",
                "price": "27 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "200-240 × 100 × 80 -",
                "price": "28 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Амелия»",
                "price": "6 000 ₽ / шт."
          }
    ],
  },
  {
    slug: "main-komplekt-vysota-93-sm",
    name: "Комплект «Высота 93 См»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "45 000 ₽",
    image: "/assets/main-catalog-279-1.jpg",
    images: mainCatalogGallery279,
    description: "Комплект «Высота 93 См» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "63/63"
          ]
    ],
  },
  {
    slug: "main-komplekt-lord-troyka",
    name: "Комплект «Лорд Тройка»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "56 000 ₽",
    image: "/assets/main-catalog-280-1.jpg",
    images: mainCatalogGallery280,
    description: "Комплект «Лорд Тройка» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "230 кресло 100"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-uglovoy-divan-barselona-ugol",
    name: "Угловой диван «Барселона Угол»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Угловые диваны",
    price: "52 000 ₽",
    image: "/assets/main-catalog-281-1.jpg",
    images: mainCatalogGallery281,
    description: "Угловой диван «Барселона Угол» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Угловые диваны"
          ],
          [
                "Размер",
                "270/170 кресло 95"
          ],
          [
                "Производство",
                "Ставрополь"
          ]
    ],
  },
  {
    slug: "main-komplekt-barselona-troyka",
    name: "Комплект «Барселона Тройка»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "52 000 ₽",
    image: "/assets/main-catalog-282-1.jpg",
    images: mainCatalogGallery282,
    description: "Комплект «Барселона Тройка» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                "220 кресло 95"
          ],
          [
                "Производство",
                "Ставраполь"
          ]
    ],
  },
  {
    slug: "main-komplekt-korona-2",
    name: "Комплект «Корона 2»",
    category: "Мягкая мебель",
    categorySlug: "myagkaya-mebel",
    subcategory: "Комплекты",
    price: "72 000 ₽",
    image: "/assets/main-catalog-283-1.jpg",
    images: mainCatalogGallery283,
    description: "Комплект «Корона 2» для уютной гостиной с практичной посадкой и выразительной отделкой.",
    characteristics: [
          [
                "Подкатегория",
                "Комплекты"
          ],
          [
                "В комплекте",
                "диван, кресло"
          ],
          [
                "Размер",
                ": Ширина 240 см"
          ]
    ],
  },
  {
    slug: "main-stol-barokko-so-stulyami-skandi-lyuks",
    name: "Стол «БАРОККО» со стульями «Сканди-Люкс»",
    category: "Столы и стулья",
    categorySlug: "stoly-i-stulya",
    subcategory: "Столы",
    price: "от 48 000 ₽",
    image: "/assets/main-catalog-284-1.jpg",
    images: mainCatalogGallery284,
    description: "Стол «БАРОККО» со стульями «Сканди-Люкс» для кухни или столовой. Стулья указаны как дополнительная платная опция, базовая цена относится к столу.",
    characteristics: [
          [
                "Подкатегория",
                "Столы"
          ],
          [
                "Размер",
                "3 варианта"
          ],
          [
                "Механизм",
                "нераздвижной"
          ],
          [
                "Дополнительно",
                "Стулья «Сканди-Люкс» — 7 500 ₽ / шт."
          ]
    ],
    variants: [
          {
                "label": "Вариант 1",
                "dimensions": "200 × 110 -",
                "price": "48 000 ₽ / шт."
          },
          {
                "label": "Вариант 2",
                "dimensions": "240 × 110 -",
                "price": "49 000 ₽ / шт."
          },
          {
                "label": "Вариант 3",
                "dimensions": "270 × 110 -",
                "price": "50 000 ₽ / шт."
          }
    ],
    addOns: [
          {
                "label": "Стулья «Сканди-Люкс»",
                "price": "7 500 ₽ / шт."
          }
    ],
  },
  // Telegram main catalog import end
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryProducts(slug: string) {
  return products.filter((product) => product.categorySlug === slug);
}

