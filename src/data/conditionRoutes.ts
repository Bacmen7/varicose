// Maps the ?c=<slug> query on /conditions to a condition name and its
// dedicated overview article route.

export const conditionNameMap: Record<string, string> = {
  "varicose-veins": "Varicose Veins",
  "spider-veins": "Spider Veins",
  "chronic-venous-insufficiency": "Chronic Venous Insufficiency",
  "dvt-and-leg-swelling": "DVT and Leg Swelling",
  "vein-ulcers": "Swelling, Skin Changes and Ulcers",
};

export const overviewRouteMap: Record<string, string> = {
  "varicose-veins": "/varicose-veins-overview",
  "spider-veins": "/spider-veins-overview",
  "chronic-venous-insufficiency": "/chronic-venous-insufficiency-overview",
  "dvt-and-leg-swelling": "/dvt-and-leg-swelling-overview",
  "vein-ulcers": "/vein-ulcers-overview",
};

const conditionImageMap: Record<string, string> = {
  "varicose-veins": "/user/varicose veins.png",
  "spider-veins": "/user/spider vein.png",
  "chronic-venous-insufficiency": "/user/chronic venus insufficiency.png",
  "dvt-and-leg-swelling": "/user/deep vein reflux.png",
  "vein-ulcers": "/user/swelling.png",
};

export function getConditionImage(slug: string | null) {
  return (slug && conditionImageMap[slug]) || "/user/varicose veins.png";
}

export function buildFeatured(name: string, overviewHref: string) {
  return [
    {
      href: overviewHref,
      image: "/user/varicose veins.png",
      category: "Get started",
      title: `What is ${name}?`,
    },
    {
      href: `${overviewHref}#symptoms`,
      image: "/user/leg pain and heaviness.png",
      category: "Early signs",
      title: `Which symptoms point to ${name}?`,
    },
    {
      href: `${overviewHref}#diagnosis`,
      image: "/user/chronic venus insufficiency.png",
      category: "Diagnosis",
      title: `How is ${name} diagnosed?`,
    },
    {
      href: `${overviewHref}#treatment`,
      image: "/user/deep vein reflux.png",
      category: "Treatment",
      title: `How is ${name} treated?`,
    },
    {
      href: "/blog/when-to-see-doctor",
      image:
        "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
      category: "Recovery",
      title: "How long does recovery take after vein treatment?",
    },
  ];
}

export function buildCategoryLinks(name: string, overviewHref: string) {
  return [
    { label: "An overview", href: overviewHref },
    { label: "Symptoms and warning signs", href: `${overviewHref}#symptoms` },
    { label: "Causes and risk factors", href: `${overviewHref}#causes` },
    { label: "How it is diagnosed", href: `${overviewHref}#diagnosis` },
    { label: "Treatment options", href: `${overviewHref}#treatment` },
    { label: `Living with ${name.toLowerCase()}`, href: `${overviewHref}#prevention` },
  ];
}
