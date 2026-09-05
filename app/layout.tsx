import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "cn";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { StickyMobileCTA } from "@/components/site/sticky-mobile-cta";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { JsonLd } from "@/components/site/json-ld";
import { business } from "@/config/business";
import { areas } from "@/data/areas";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `Toko Aki ${business.city} | Aki Mobil & Motor — ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description:
    "Cari aki mobil dan motor di Jakarta? Lihat pilihan aki, spesifikasi dan harga di Berkah Aki. Tanya stok dan tipe aki yang cocok langsung via WhatsApp.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: business.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#101c22",
};

const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: business.siteUrl,
    logo: `${business.siteUrl}/icon`,
    sameAs: [business.instagram],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.siteUrl,
    inLanguage: "id-ID",
  },
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${business.siteUrl}/#bengkel`,
    name: business.name,
    description: business.shortDescription,
    url: business.siteUrl,
    telephone: business.phoneIntl,
    priceRange: "Rp150.000 - Rp2.000.000",
    image: `${business.siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.province,
      addressCountry: "ID",
    },
    areaServed: [business.city, ...areas.map((area) => area.name)],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [business.instagram],
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={cn("h-full antialiased", jakartaSans.variable)}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={siteJsonLd} />
        <Header />
        <main className="flex-1 pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
