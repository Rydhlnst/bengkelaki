import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ClockIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/shop/product-card";
import { business } from "@/config/business";
import { areas, getArea } from "@/data/areas";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import { waAreaMessage, waLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: `Toko Aki ${area.name} — Mobil & Motor`,
    description: `Mencari toko aki di ${area.name}? ${business.name} melayani pembelian aki mobil dan motor untuk area ${area.name} dan sekitarnya. Cek stok dan harga via WhatsApp.`,
    path: `/area/${area.slug}`,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const popular = products.filter((p) => p.popular || p.featured).slice(0, 4);
  const nearby = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <div className="border-b bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Breadcrumbs
            items={[{ label: "Area Layanan" }, { label: area.name }]}
          />
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            Toko Aki {area.name} untuk Mobil &amp; Motor
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {area.description}
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={waLink(waAreaMessage(area.name))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleIcon />
                Tanya Stok dari {area.name}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/20">
              <Link href="/produk">Lihat Katalog Aki</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <h2 className="text-xl font-extrabold tracking-tight text-foreground">
              Beli Aki dari {area.name}? Bisa Langsung ke Sini
            </h2>
            <p>
              Bengkel kami berlokasi di {business.address}. Dari {area.name},{" "}
              {area.travelNote}
            </p>
            <p>
              Sebelum datang, sebaiknya konfirmasi dulu tipe aki dan
              ketersediaan stoknya lewat WhatsApp. Kalau aki yang Anda cari
              ready, Anda tinggal datang, dan aki bisa langsung dipasang oleh
              tim kami.
            </p>
            <p>
              Belum tahu tipe aki kendaraan Anda? Kirim merek, tipe, dan tahun
              kendaraan lewat WhatsApp — kami bantu carikan aki yang cocok
              sebelum Anda berangkat dari {area.name}.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-md border bg-card p-6">
            <h2 className="font-heading text-base font-extrabold tracking-wide uppercase">
              Lokasi &amp; Kontak
            </h2>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  {business.address}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${business.phoneIntl}`} className="font-bold hover:underline">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span className="flex flex-col gap-0.5 text-muted-foreground">
                  {business.hours.map((h) => (
                    <span key={h.day}>
                      <span className="font-semibold text-foreground">{h.day}</span> {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
            <Button asChild className="mt-auto">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon />
                Buka Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <SectionHeading
            eyebrow="Rekomendasi"
            title="Aki yang Paling Sering Dicari"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <SectionHeading
          eyebrow="Area Lainnya"
          title="Area Layanan Lain di Sekitar"
        />
        <ul className="mt-6 flex flex-wrap gap-2">
          {nearby.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/area/${a.slug}`}
                className="inline-block rounded-sm border bg-background px-3.5 py-2 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
              >
                Toko Aki {a.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
