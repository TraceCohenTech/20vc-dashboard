import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.valueaddvc.com/20vc",
      lastModified: new Date("2026-07-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
