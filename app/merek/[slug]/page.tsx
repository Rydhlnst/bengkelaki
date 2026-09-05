import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CircleCheckIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/shop/product-card";
import { JsonLd } from "@/components/site/json-ld";
import { business } from "@/config/business";
import { brands, getBrand } from "@/data/brands";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import { waBrandMessage, waLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return buildMetadata({
    title: `Aki ${brand.name} ${business.city} — Harga & Pilihan Tipe`,
    description: `Pilihan aki ${brand.name} untuk mobil dan motor di ${business.city}. Lihat tipe yang tersedia beserta harganya, tanya stok langsung via WhatsApp.`,
    path: `/merek/${brand.slug}`,
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const list = products.filter((p) => p.brandSlug === brand.slug);
  const otherBrands = brands.filter((b) => b.slug !== brand.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Aki ${brand.name} di ${business.city}`,
    description: brand.shortDescription,
    url: `${business.siteUrl}/merek/${brand.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: list.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${business.siteUrl}/produk/${p.slug}`,
      })),
    },
  };

  return (
    <>
      <div className="border-b bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Breadcrumbs
            items={[{ label: "Merek", href: "/produk" }, { label: brand.name }]}
          />
          <div className="mt-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                Aki {brand.name} di {business.city}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Cari aki {brand.name} untuk mobil atau motor? Lihat pilihan
                tipe aki yang tersedia di {business.name}. Hubungi kami untuk
                memastikan tipe aki yang sesuai dengan kendaraan Anda.
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="mt-6">
            <a
              href={waLink(waBrandMessage(brand.name))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleIcon />
              Tanya Aki {brand.name}
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Tentang Merek"
              title={`Tentang Aki ${brand.name}`}
            />
            <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              {brand.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-md border bg-muted p-5">
            <h2 className="font-heading text-base font-extrabold tracking-wide uppercase">
              Kenapa Pilih {brand.name}?
            </h2>
            <ul className="mt-3.5 flex flex-col gap-3 text-sm">
              {brand.strengths.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <CircleCheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Katalog"
            title={`Tipe Aki ${brand.name} yang Tersedia`}
            description={`${list.length} tipe tersedia di toko kami. Stok bisa berubah sepanjang hari — konfirmasi dulu via WhatsApp sebelum datang.`}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-md border bg-card p-6">
          <h2 className="font-heading text-base font-extrabold tracking-wide uppercase">
            Merek Aki Lainnya
          </h2>
          <ul className="mt-3.5 flex flex-wrap gap-2">
            {otherBrands.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/merek/${b.slug}`}
                  className="inline-block rounded-sm border bg-background px-3.5 py-2 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
                >
                  Aki {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <JsonLd data={jsonLd} />
    </>
  );
}
