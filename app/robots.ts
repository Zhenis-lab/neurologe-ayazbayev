import type { MetadataRoute } from "next";

const siteUrl = "https://zhenis-neurologie-online.ayazbayev.chatgpt.site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
