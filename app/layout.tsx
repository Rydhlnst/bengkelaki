import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "cn";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ContactLocation } from "@/components/home/contact-location";
import { StickyMobileCTA } from "@/components/site/sticky-mobile-cta";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { JsonLd } from "@/components/site/json-ld";
import { GoogleAdsTracking } from "@/components/site/google-ads-tracking";
import { business } from "@/config/business";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: { default: `Jasa Aki 24 Jam Jakarta | ${business.name}`, template: `%s | ${business.name}` },
  description: "Jasa aki 24 jam Jakarta. Teknisi datang ke lokasi untuk cek, ganti, jumper, dan pasang aki mobil maupun motor.",
  keywords: ["aki darurat Jakarta", "aki express Jakarta", "teknisi aki panggilan 24 jam", "ganti aki di lokasi Jakarta", "jumper aki Jakarta", "cas aki Jakarta", "bantuan aki mobil mogok", "bantuan aki motor mogok", "pasang aki di lokasi"],
  robots: { index: true, follow: true },
  openGraph: { siteName: business.name, locale: "id_ID", type: "website", title: `${business.name} — Jasa Aki 24 Jam Jakarta`, description: business.shortDescription },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#172231" };

const siteJsonLd = [
  { "@context": "https://schema.org", "@type": "Organization", name: business.name, url: business.siteUrl, logo: `${business.siteUrl}/images/ui/aki-express-logo.png`, sameAs: [business.facebook, business.shopee] },
  { "@context": "https://schema.org", "@type": "WebSite", name: business.name, url: business.siteUrl, inLanguage: "id-ID" },
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${business.siteUrl}/#bengkel`,
    name: business.name,
    description: business.shortDescription,
    url: business.siteUrl,
    telephone: business.phoneIntl,
    image: `${business.siteUrl}/opengraph-image`,
    address: { "@type": "PostalAddress", streetAddress: business.address, addressLocality: business.city, addressRegion: business.province, addressCountry: "ID" },
    areaServed: business.serviceAreas,
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" }],
    sameAs: [business.facebook, business.shopee],
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={cn("h-full antialiased", jakartaSans.variable)}>
      <body className="flex min-h-full flex-col font-sans">
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18437592119');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18437592119"
          strategy="afterInteractive"
        />
        <GoogleAdsTracking />
        <JsonLd data={siteJsonLd} />
        <Header />
        <main className="flex-1 pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">{children}</main>
        <ContactLocation />
        <Footer />
        <StickyMobileCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
