import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ClockIcon, MapPinIcon, WhatsAppIcon, PhoneIcon } from "@/lib/icons";
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return buildMetadata({ title: `Toko Aki ${area.name} — Mobil & Motor`, description: `Mencari toko aki di ${area.name}? ${business.name} melayani pembelian aki mobil dan motor untuk area ${area.name}. Cek stok dan harga via WhatsApp.`, path: `/area/${area.slug}` });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const popular = products.filter((p) => p.popular || p.featured).slice(0, 4);
  const nearby = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <div className="bg-brand-dark text-white"><div className="mx-auto max-w-6xl px-4 py-10 md:py-14"><Breadcrumbs items={[{ label: "Area Jakarta" }, { label: area.name }]} /><h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-balance md:text-4xl">Toko Aki {area.name} untuk Mobil &amp; Motor</h1><p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">{area.description}</p><div className="mt-6 flex flex-col gap-2.5 sm:flex-row"><Button asChild size="lg" className="bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90"><a href={waLink(waAreaMessage(area.name))} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Tanya Stok dari {area.name}</a></Button><Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-dark"><Link href="/produk">Lihat Katalog Aki</Link></Button></div></div></div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14"><div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]"><div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-base"><h2 className="text-xl font-extrabold tracking-tight text-foreground">Beli Aki dari {area.name}? Bisa Langsung Tanya</h2><p>Bengkel kami berlokasi di {business.address}. {area.travelNote}</p><p>Sebelum datang, konfirmasi tipe aki dan ketersediaan stok melalui WhatsApp. Jika ready, aki dapat langsung dipasang oleh tim kami.</p><p>Belum tahu tipe aki kendaraan Anda? Kirim merek, tipe, dan tahun kendaraan melalui WhatsApp — kami bantu carikan aki yang cocok untuk area {area.name}.</p></div><div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-brand-dark/10"><h2 className="font-heading text-base font-extrabold tracking-wide uppercase">Lokasi &amp; Kontak</h2><ul className="flex flex-col gap-3.5 text-sm"><li className="flex items-start gap-2.5"><MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden /><a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{business.address}</a></li><li className="flex items-start gap-2.5"><PhoneIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden /><a href={`tel:${business.phoneIntl}`} className="font-bold hover:underline">{business.phoneDisplay}</a></li><li className="flex items-start gap-2.5"><ClockIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden /><span>{business.hours[0]?.time}</span></li></ul><Button asChild className="mt-auto"><a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer"><MapPinIcon /> Buka Google Maps</a></Button></div></div></div>

      <div className="bg-[#FAFAF8]"><div className="mx-auto max-w-6xl px-4 py-12 md:py-14"><SectionHeading eyebrow="Rekomendasi" title="Aki yang Paling Sering Dicari" /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{popular.map((p) => <ProductCard key={p.id} product={p} />)}</div></div></div>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14"><SectionHeading eyebrow="Area Jakarta lainnya" title="Pilih wilayah Jakarta lain" /><ul className="mt-6 flex flex-wrap gap-2">{nearby.map((a) => <li key={a.slug}><Link href={`/area/${a.slug}`} className="inline-block rounded-sm bg-white px-3.5 py-2 text-xs font-bold shadow-sm ring-1 ring-brand-dark/10 transition-colors hover:text-primary">Toko Aki {a.name}</Link></li>)}</ul></div>
    </>
  );
}
