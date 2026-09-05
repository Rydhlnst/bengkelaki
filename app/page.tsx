import Link from "next/link";
import {
  ArrowRightIcon,
  BikeIcon,
  BatteryChargingIcon,
  CarIcon,
  CircleCheckIcon,
  ClockIcon,
  GaugeIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  QuoteIcon,
  WrenchIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CategoryCards } from "@/components/home/category-cards";
import { Hero } from "@/components/home/hero";
import { BatteryFinder } from "@/components/home/battery-finder";
import { SectionHeading } from "@/components/site/section-heading";
import { FaqSection } from "@/components/site/faq-section";
import { ProductCard } from "@/components/shop/product-card";
import { BrandCard } from "@/components/brand/brand-card";
import { business } from "@/config/business";
import { products } from "@/data/products";
import {
  availableBatteryBrands,
  candidateBatteryBrands,
} from "@/data/battery-brands";
import { services, whyChooseUs } from "@/data/services";
import { areas } from "@/data/areas";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: `Toko Aki ${business.city} | Aki Mobil & Motor — ${business.name}`,
  description:
    "Cari aki mobil dan motor di Jakarta? Lihat pilihan aki, spesifikasi dan harga di Berkah Aki. Tanya stok dan tipe aki yang cocok langsung via WhatsApp.",
  path: "/",
});

const serviceIcons = {
  "ganti-mobil": CarIcon,
  "ganti-motor": BikeIcon,
  "cek-aki": BatteryChargingIcon,
  "cek-tegangan": GaugeIcon,
  konsultasi: MessageCircleIcon,
  pemasangan: WrenchIcon,
} as const;

const quickCategories = [
  { label: "Aki Mobil", href: "/aki-mobil" },
  { label: "Aki Motor", href: "/aki-motor" },
  { label: "Aki Basah", href: "/produk?tipe=basah" },
  { label: "Aki Kering / MF", href: "/produk?tipe=mf" },
  { label: "Aki Premium", href: "/merek/motobatt" },
  { label: "Berdasarkan Brand", href: "/produk" },
];

export default function HomePage() {
  const popular = products
    .filter((p) => p.popular || p.featured)
    .slice(0, 4);

  return (
    <>
      <Hero />

      {/* Battery finder */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-12" id="cari-aki">
        <SectionHeading
          eyebrow="Cari Aki"
          title="Cari Aki untuk Kendaraan Anda"
          description="Pilih jenis dan merek kendaraan, lalu lihat pilihan aki yang tersedia. Tanpa perlu menebak tipe aki."
        />
        <div className="mt-6">
          <BatteryFinder />
        </div>
      </section>

      {/* Category cards */}
      <section className="border-y bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionHeading
            eyebrow="Katalog"
            title="Pilih Aki Sesuai Kendaraan"
            description="Semua aki yang dijual lengkap dengan spesifikasi dan kisaran harganya."
          />
          <CategoryCards />
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Kategori produk">
            {quickCategories.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="inline-block rounded-sm border bg-background px-3.5 py-2 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popular products */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Katalog"
            title="Aki Paling Banyak Dicari"
            description="Tipe-tipe yang paling sering dibeli pelanggan. Harga bisa berubah, konfirmasi via WhatsApp untuk stok terbaru."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/produk">
              Lihat Semua Produk
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionHeading
            eyebrow="Alasan Pelanggan"
            title={`Kenapa Beli Aki di ${business.name}?`}
          />
          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 border-l-2 border-primary pl-4">
                <h3 className="flex items-center gap-2 text-base font-extrabold tracking-tight">
                  <CircleCheckIcon className="size-4.5 shrink-0 text-primary" aria-hidden />
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Layanan Bengkel"
          title="Bukan Cuma Jual Aki"
          description="Datang bukan hanya untuk membeli. Kami bantu cek kondisi aki Anda dulu, supaya tidak beli kalau belum perlu."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/layanan#${service.slug}`}
                className="group flex flex-col gap-3 rounded-md border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <span className="grid size-11 place-items-center rounded-sm bg-primary/10 text-primary">
                  <Icon className="size-5.5" aria-hidden />
                </span>
                <h3 className="text-sm font-extrabold tracking-wide uppercase group-hover:text-primary">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Brands */}
      <section className="border-y bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionHeading
            eyebrow="Merek"
            title="Pilihan Merek Aki"
            description="Berbagai pilihan aki dari merek terpercaya untuk mobil dan motor. Konsultasikan tipe kendaraan Anda untuk mendapatkan aki yang paling sesuai."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {availableBatteryBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          <p className="mt-8 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
            Brand lain yang dikenal di pasar Indonesia
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {candidateBatteryBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Sales assistance CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col items-start gap-6 rounded-md border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Tidak Tahu Aki yang Cocok?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Tidak perlu menebak tipe aki kendaraan Anda. Kirim merek, tipe,
              dan tahun kendaraan melalui WhatsApp. Kami bantu rekomendasikan
              pilihan aki yang sesuai.
            </p>
            <p className="text-xs font-semibold text-muted-foreground">
              Konsultasi cepat sebelum datang ke bengkel.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a
              href={waLink(waGeneralMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleIcon />
              Tanya Aki via WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Local SEO */}
      <section className="border-y bg-muted">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:py-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-4">
            <SectionHeading
              eyebrow={`Toko Aki ${business.city}`}
              title={`Toko Aki ${business.city} untuk Mobil & Motor`}
            />
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>Sedang mencari toko aki di {business.city}?</p>
              <p>
                {business.name} menyediakan berbagai pilihan aki mobil dan
                motor untuk berbagai jenis kendaraan — dari city car, MPV,
                SUV, kendaraan niaga, sampai motor matic dan sport.
              </p>
              <p>
                Anda dapat melihat katalog terlebih dahulu melalui website,
                lalu menghubungi kami untuk mengecek stok, harga terbaru, dan
                memastikan tipe aki yang sesuai dengan kendaraan Anda.
              </p>
              <p>
                Untuk kunjungan bengkel di {business.city}, konfirmasi alamat terlebih dahulu. Datang
                langsung untuk pemeriksaan aki dan pemasangan, atau konfirmasi
                dulu via WhatsApp kalau ingin memastikan stok.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-md border bg-card p-6">
            <h3 className="font-heading text-base font-extrabold tracking-wide uppercase">
              Kunjungi Bengkel Kami
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span className="text-muted-foreground">{business.address}</span>
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
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${business.phoneIntl}`} className="font-bold hover:underline">
                  {business.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-auto flex flex-col gap-2.5">
              <Button asChild>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPinIcon />
                  Lihat Area Jakarta
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kontak">Halaman Kontak</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Area Layanan"
          title={`Melayani Pembelian Aki di ${business.city} dan Sekitarnya`}
          description="Pelanggan dari area sekitar bisa cek katalog dan konfirmasi stok dulu via WhatsApp sebelum datang."
        />
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/area/${area.slug}`}
                className="flex flex-col gap-1 rounded-md border bg-card p-4 transition-shadow hover:shadow-md"
              >
                <span className="flex items-center gap-1.5 text-sm font-extrabold">
                  <MapPinIcon className="size-4 text-primary" aria-hidden />
                  {area.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  Aki mobil &amp; motor
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="border-y bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionHeading
            eyebrow="Testimoni"
            title="Sudah Banyak Kendaraan Kembali Jalan"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col gap-4 rounded-md border bg-card p-5">
                <QuoteIcon className="size-5 text-primary" aria-hidden />
                <blockquote className="text-sm leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto border-t pt-3">
                  <span className="block text-sm font-extrabold">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16" id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan Seputar Aki"
          description="Pertanyaan yang paling sering diajukan pelanggan sebelum membeli aki."
        />
        <div className="mt-6">
          <FaqSection items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 md:items-center md:py-16 md:text-center">
          <Badge className="bg-brand-yellow px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-foreground uppercase">
            Cek dulu, baru ganti
          </Badge>
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
            Butuh Aki Sekarang?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            Jangan tunggu sampai mobil tidak bisa starter. Cari aki yang
            sesuai sekarang atau tanyakan langsung tipe aki kendaraan Anda
            kepada kami.
          </p>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="w-full bg-white text-foreground hover:bg-white/85 sm:w-auto">
              <Link href="/produk">Cari Produk</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full bg-[#15803D] text-white hover:bg-[#15803D]/85 sm:w-auto"
            >
              <a
                href={waLink(waGeneralMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleIcon />
                Chat WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
