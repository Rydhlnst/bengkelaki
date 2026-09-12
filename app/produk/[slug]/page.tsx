import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CircleHelpIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon, WhatsAppIcon, WrenchIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/shop/product-card";
import { business } from "@/config/business";
import { productFaqs } from "@/data/faqs";
import { getProductReferenceImage } from "@/data/reference-media";
import { batteryTypeLabels, getProduct, getRelatedProducts, products, type Product } from "@/data/products";
import { getBrand } from "@/data/brands";
import { buildMetadata } from "@/lib/seo";
import { waLink, waProductMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const image = getProductReferenceImage(product.brandSlug, product.vehicleType);
  return buildMetadata({ title: product.seoTitle, description: product.seoDescription, path: "/produk/" + product.slug, image: image?.src });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const brand = getBrand(product.brandSlug);
  const media = getProductReferenceImage(product.brandSlug, product.vehicleType);
  const related = getRelatedProducts(product);
  const faqs = productFaqs(product.name, brand?.name ?? "aki ini");
  const specs: Array<[string, string]> = [
    ["Merek", brand?.name ?? product.brandSlug],
    ["Jenis Aki", batteryTypeLabels[product.batteryType]],
    ["Tegangan", product.voltage],
    ["Kapasitas", product.capacity],
    ...(product.dimensions ? [["Ukuran (P x L x T)", product.dimensions] as [string, string]] : []),
    ["Posisi Terminal", product.terminalPosition],
    ["Garansi", product.warranty],
    ["No. SKU", product.sku],
  ];
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    url: `${business.siteUrl}/produk/${product.slug}`,
    ...(media ? { image: [media.src.startsWith("http") ? media.src : business.siteUrl + media.src] } : {}),
    sku: product.sku,
    brand: { "@type": "Brand", name: brand?.name ?? product.brandSlug },
    additionalProperty: specs.slice(1, 5).map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
    offers: {
      "@type": "Offer",
      url: `${business.siteUrl}/produk/${product.slug}`,
      priceCurrency: "IDR",
      price: product.price,
      availability: `https://schema.org/${product.stock === "tersedia" ? "InStock" : "LimitedAvailability"}`,
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: business.name },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
      <Breadcrumbs items={[{ label: "Referensi Tipe Aki", href: "/produk" }, { label: product.name }]} />
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white shadow-sm">
            {media ? <Image src={media.src} alt={media.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-8" priority /> : <div className="flex h-full items-center justify-center bg-brand-dark p-7 text-white md:p-10"><div><p className="text-xs font-black tracking-[0.18em] text-brand-yellow uppercase">{brand?.name ?? product.brandSlug}</p><p className="mt-8 text-6xl font-black tracking-[-0.08em] md:text-8xl">{product.capacity}</p><p className="mt-2 text-sm font-bold text-white/60">{product.voltage} · {batteryTypeLabels[product.batteryType]} · {product.sku}</p></div></div>}
            <div className="absolute bottom-4 left-4 rounded-full bg-brand-dark px-3 py-1.5 text-xs font-black text-white shadow-sm">{product.capacity} · {product.voltage}</div>
          </div>
          <div className="grid grid-cols-3 gap-3">{[{ icon: ShieldCheckIcon, label: "Garansi " + product.warranty }, { icon: WrenchIcon, label: "Bisa pasang" }, { icon: MapPinIcon, label: "Area " + business.city }].map(({ icon: Icon, label }) => <div key={label} className="flex flex-col gap-2 rounded-xl border bg-white p-3 text-xs font-bold"><Icon className="size-4 text-primary" />{label}</div>)}</div>
        </div>

        <div className="flex flex-col gap-5">
          <div><Link href={"/merek/" + product.brandSlug} className="text-xs font-black tracking-[0.16em] text-primary uppercase hover:underline">{brand?.name ?? product.brandSlug}</Link><h1 className="mt-2 text-3xl font-black tracking-tight">{product.name}</h1><p className="mt-2 text-sm font-bold text-muted-foreground">Aki {product.vehicleType === "mobil" ? "Mobil" : "Motor"} · {product.voltage} · {product.capacity}</p></div>
          <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-sm font-semibold text-muted-foreground">Siap dicek dan dipasang teknisi express</span><Badge className={cnStock(product.stock)}>{product.stock === "tersedia" ? "Siap Ditangani" : "Konfirmasi Dulu"}</Badge></div>
          <p className="text-sm leading-relaxed text-muted-foreground">{product.shortDescription}</p>
          <dl className="grid grid-cols-2 gap-4 rounded-xl border bg-white p-4 text-sm">{specs.slice(0, 4).map(([label, value]) => <div key={label}><dt className="text-xs text-muted-foreground">{label}</dt><dd className="font-black">{value}</dd></div>)}</dl>
          <div className="flex flex-col gap-2.5 sm:flex-row"><Button asChild size="lg" className="flex-1"><a href={waLink(waProductMessage(product))} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Tanya Teknisi via WhatsApp</a></Button><Button asChild size="lg" variant="outline"><a href={"tel:" + business.phoneIntl}><PhoneIcon /> Telepon</a></Button></div>
          <div className="flex items-start gap-2.5 rounded-xl border border-brand-yellow bg-brand-yellow/20 p-3.5 text-xs leading-relaxed"><CircleHelpIcon className="mt-0.5 size-4 shrink-0 text-brand-red" /><p>Belum yakin tipe ini cocok? Kirim merek, tipe, tahun kendaraan, dan lokasi lewat WhatsApp — kami bantu pastikan sebelum penggantian.</p></div>
        </div>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-10">
          <section><h2 className="text-xl font-black tracking-tight">Tentang {product.name}</h2><div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">{product.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
          <section><h2 className="text-xl font-black tracking-tight">Spesifikasi</h2><dl className="mt-3 divide-y rounded-xl border">{specs.map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm odd:bg-muted/60"><dt className="text-muted-foreground">{label}</dt><dd className="text-right font-bold">{value}</dd></div>)}</dl></section>
          <section><h2 className="text-xl font-black tracking-tight">Cocok untuk kendaraan apa?</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Daftar di bawah adalah contoh kendaraan yang umumnya memakai tipe ini. Model dan tahun produksi bisa berbeda — tetap cocokkan dengan aki yang terpasang.</p><ul className="mt-3 flex flex-wrap gap-2">{product.compatibleVehicles.map((vehicle) => <li key={vehicle} className="rounded-full border bg-white px-3 py-1.5 text-xs font-bold">{vehicle}</li>)}</ul></section>
          <section><h2 className="text-xl font-black tracking-tight">Pertanyaan seputar produk</h2><div className="mt-2"><FaqSection items={faqs} /></div></section>
        </div>
        <aside className="flex flex-col gap-8"><section className="rounded-2xl border bg-white p-5"><h2 className="font-heading text-base font-black tracking-wide uppercase">Keunggulan</h2><ul className="mt-3 flex flex-col gap-2.5 text-sm">{product.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" /><span className="text-muted-foreground">{highlight}</span></li>)}</ul></section><section className="rounded-2xl border p-5"><h2 className="font-heading text-base font-black tracking-wide uppercase">Cara memastikan aki cocok</h2><ol className="mt-3 flex list-decimal flex-col gap-2.5 pl-4 text-sm leading-relaxed text-muted-foreground"><li>Lihat tipe yang tercetak di label aki lama.</li><li>Cocokkan tegangan, kapasitas, dan posisi terminal.</li><li>Jika ragu, kirim tipe kendaraan lewat WhatsApp.</li></ol><Button asChild className="mt-4 w-full"><a href={waLink(waProductMessage(product))} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Tanya Kecocokan &amp; Pemasangan</a></Button></section></aside>
      </div>
      <section className="mt-14"><SectionHeading eyebrow="Tipe aki lain" title="Aki lain yang sering dibandingkan" /><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
      <JsonLd data={productJsonLd} />
    </div>
  );
}

function cnStock(stock: Product["stock"]) {
  return stock === "tersedia" ? "bg-emerald-100 px-2.5 py-1 text-[11px] font-black text-emerald-800" : "bg-amber-100 px-2.5 py-1 text-[11px] font-black text-amber-800";
}
