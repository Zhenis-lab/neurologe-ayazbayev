import type { MetadataRoute } from "next";

const siteUrl = "https://zhenis-neurologie-online.ayazbayev.chatgpt.site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/uslugi", "/zapis", "/faq", "/kontakt"];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-08-21"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8
  }));
}
