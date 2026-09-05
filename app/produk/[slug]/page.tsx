import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CircleHelpIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BatteryArt } from "@/components/site/battery-art";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/shop/product-card";
import { JsonLd } from "@/components/site/json-ld";
import { business } from "@/config/business";
import {
  batteryTypeLabels,
  getRelatedProducts,
  getProduct,
  products,
  type Product,
} from "@/data/products";
import { getBrand } from "@/data/brands";
import { productFaqs } from "@/data/faqs";
import { formatIDR } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";
import { waLink, waProductMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/produk/${product.slug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const brand = getBrand(product.brandSlug);
  const faqs = productFaqs(product.name, brand?.name ?? "aki ini");
  const related = getRelatedProducts(product);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: brand?.name ?? product.brandSlug,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Voltage", value: product.voltage },
      { "@type": "PropertyValue", name: "Kapasitas", value: product.capacity },
      { "@type": "PropertyValue", name: "Jenis Aki", value: batteryTypeLabels[product.batteryType] },
      ...(product.dimensions
        ? [{ "@type": "PropertyValue", name: "Ukuran", value: product.dimensions }]
        : []),
    ],
    offers: {
      "@type": "Offer",
      url: `${business.siteUrl}/produk/${product.slug}`,
      priceCurrency: "IDR",
      price: product.price,
      availability:
        product.stock === "tersedia"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      seller: { "@type": "Organization", name: business.name },
      areaServed: business.city,
    },
  };

  const specs: Array<[string, string]> = [
    ["Merek", brand?.name ?? product.brandSlug],
    ["Jenis Aki", batteryTypeLabels[product.batteryType]],
    ["Tegangan", product.voltage],
    ["Kapasitas", product.capacity],
    ...(product.dimensions
      ? [["Ukuran (P x L x T)", product.dimensions] as [string, string]]
      : []),
    ["Posisi Terminal", product.terminalPosition],
    ["Garansi", product.warranty],
    ["No. SKU", product.sku],
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
      <Breadcrumbs
        items={[
          { label: "Katalog Produk", href: "/produk" },
          { label: product.name },
        ]}
      />

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {/* Visual */}
        <div className="flex flex-col gap-4">
          <BatteryArt
            product={product}
            priorityLabel={`Garansi ${product.warranty}`}
            className="rounded-md border shadow-sm"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheckIcon, label: `Garansi ${product.warranty}` },
              { icon: WrenchIcon, label: "Bisa langsung pasang" },
              { icon: MapPinIcon, label: `Toko di ${business.city}` },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-sm border bg-muted px-3 py-2.5 text-xs font-semibold"
              >
                <Icon className="size-4 shrink-0 text-primary" aria-hidden />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Buy panel */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Link
              href={`/merek/${product.brandSlug}`}
              className="text-xs font-extrabold tracking-[0.16em] text-primary uppercase hover:underline"
            >
              {brand?.name ?? product.brandSlug}
            </Link>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {product.name}
            </h1>
            <p className="text-sm font-semibold text-muted-foreground">
              Aki {product.vehicleType === "mobil" ? "Mobil" : "Motor"}{" "}
              {product.voltage} {product.capacity}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div>
              <span className="block text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                Harga
              </span>
              <span className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold tracking-tight">
                  {formatIDR(product.price)}
                </span>
                {product.originalPrice ? (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatIDR(product.originalPrice)}
                  </span>
                ) : null}
              </span>
            </div>
            <Badge
              className={cnStock(product.stock)}
            >
              <span aria-hidden className="size-1.5 rounded-full bg-current" />
              {product.stock === "tersedia"
                ? "Ready Stok"
                : "Stok Terbatas — Tanya Dulu"}
            </Badge>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>

          <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5 rounded-md border bg-muted p-4 text-sm">
            {specs.slice(0, 4).map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="font-bold">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-2.5 sm:flex-row">
            <Button asChild size="lg" className="flex-1">
              <a
                href={waLink(waProductMessage(product))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleIcon />
                Pesan / Tanya via WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/20">
              <a href={`tel:${business.phoneIntl}`}>
                <PhoneIcon />
                Telepon
              </a>
            </Button>
          </div>

          <div className="flex items-start gap-2.5 rounded-sm border border-amber-300/70 bg-brand-yellow/15 p-3.5 text-xs leading-relaxed text-foreground/80">
            <CircleHelpIcon className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
            <p>
              Belum yakin tipe ini cocok? Cek dulu tipe aki yang terpasang di
              kendaraan Anda, atau kirim merek, tipe, dan tahun kendaraan lewat
              WhatsApp — kami bantu pastikan sebelum Anda membeli.
            </p>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-10">
          <section aria-labelledby="tentang-produk">
            <h2 id="tentang-produk" className="text-xl font-extrabold tracking-tight">
              Tentang {product.name}
            </h2>
            <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              {product.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="spesifikasi">
            <h2 id="spesifikasi" className="text-xl font-extrabold tracking-tight">
              Spesifikasi
            </h2>
            <dl className="mt-3 divide-y rounded-md border">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm odd:bg-muted/60"
                >
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="text-right font-bold">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="cocok-untuk">
            <h2 id="cocok-untuk" className="text-xl font-extrabold tracking-tight">
              Cocok untuk Kendaraan Apa?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Daftar di bawah adalah contoh kendaraan yang umumnya memakai tipe
              ini. Model dan tahun produksi bisa berbeda — tetap cocokkan dengan
              aki yang terpasang, atau tanyakan ke kami.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.compatibleVehicles.map((vehicle) => (
                <li
                  key={vehicle}
                  className="rounded-sm border bg-muted px-3 py-1.5 text-xs font-bold"
                >
                  {vehicle}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq-produk">
            <h2 id="faq-produk" className="text-xl font-extrabold tracking-tight">
              Pertanyaan Seputar Produk
            </h2>
            <div className="mt-2">
              <FaqSection items={faqs} />
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-8">
          <section aria-labelledby="keunggulan" className="rounded-md border bg-muted p-5">
            <h2 id="keunggulan" className="font-heading text-base font-extrabold tracking-wide uppercase">
              Keunggulan
            </h2>
            <ul className="mt-3 flex flex-col gap-2.5 text-sm">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cara-memastikan" className="rounded-md border p-5">
            <h2 id="cara-memastikan" className="font-heading text-base font-extrabold tracking-wide uppercase">
              Cara Memastikan Aki Cocok
            </h2>
            <ol className="mt-3 flex list-decimal flex-col gap-2.5 pl-4 text-sm leading-relaxed text-muted-foreground">
              <li>Lihat tipe yang tercetak di label aki lama Anda (mis. NS40ZL, NS60L).</li>
              <li>Cocokkan tegangan, kapasitas (Ah), dan posisi terminal.</li>
              <li>
                Kalau label sudah tidak terbaca, kirim merek, tipe, dan tahun
                kendaraan lewat WhatsApp ke kami.
              </li>
            </ol>
            <Button asChild className="mt-4 w-full">
              <a
                href={waLink(waProductMessage(product))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleIcon />
                Tanya Stok &amp; Kecocokan
              </a>
            </Button>
          </section>
        </aside>
      </div>

      {/* Related */}
      <section className="mt-14">
        <SectionHeading
          eyebrow="Produk Lain"
          title="Aki Lain yang Sering Dibandingkan"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <JsonLd data={productJsonLd} />
    </div>
  );
}

function cnStock(stock: Product["stock"]) {
  return stock === "tersedia"
    ? "bg-emerald-100 px-2.5 py-1 text-[11px] font-extrabold text-emerald-800"
    : "bg-amber-100 px-2.5 py-1 text-[11px] font-extrabold text-amber-800";
}
