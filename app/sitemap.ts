import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://20vc-dashboard.vercel.app",
      lastModified: new Date("2026-07-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
