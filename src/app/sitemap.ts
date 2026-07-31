import type { MetadataRoute } from "next";

import { SITE } from "@/constants/site";
import { NAV_ITEMS } from "@/constants/navigation";

// Required so this route can be emitted by `output: export`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Section anchors help search engines surface deep links to the page.
    ...NAV_ITEMS.filter((item) => item.id !== "home").map((item) => ({
      url: `${SITE.url}/#${item.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
