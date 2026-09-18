import type { Metadata } from "next";
import { business } from "@/config/business";

export function buildMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = path ? business.siteUrl + path : business.siteUrl;
  const imageUrl = image.startsWith("http") ? image : business.siteUrl + image;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "id_ID",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
