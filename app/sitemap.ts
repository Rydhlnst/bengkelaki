import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { products } from "@/data/products";
import { brands } from "@/data/brands";
import { areas } from "@/data/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: business.siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${business.siteUrl}/aki-mobil`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${business.siteUrl}/aki-motor`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${business.siteUrl}/produk`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${business.siteUrl}/layanan`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${business.siteUrl}/tentang`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${business.siteUrl}/kontak`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${business.siteUrl}/kebijakan-privasi`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${business.siteUrl}/produk/${p.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const brandRoutes: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${business.siteUrl}/merek/${b.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${business.siteUrl}/area/${a.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...brandRoutes, ...areaRoutes];
}
