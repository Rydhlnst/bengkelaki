import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon, CheckIcon, ClockIcon, PhoneIcon, ShieldCheckIcon, TagIcon, TruckIcon, WhatsAppIcon, WrenchIcon, ZapIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/home/hero";
import { CategoryCards } from "@/components/home/category-cards";
import { BatteryFinder } from "@/components/home/battery-finder";
import { JakartaCoverage } from "@/components/home/jakarta-coverage";
import { ServiceSupportGrid } from "@/components/home/service-support-grid";
import { GalleryGrid } from "@/components/home/gallery-grid";
import { Testimonials } from "@/components/home/testimonials";
import { FaqSection } from "@/components/site/faq-section";
import { SectionHeading } from "@/components/site/section-heading";
import { business } from "@/config/business";
import { faqs } from "@/data/faqs";
import { products, type Product } from "@/data/products";
import { getProductReferenceImage, referenceMedia, referenceSourceUrl } from "@/data/reference-media";
import { formatIDR } from "@/lib/format";
import { waGeneralMessage, waLink, waProductMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Jasa Aki 24 Jam Jakarta | " + business.name,
  description: "Layanan aki panggilan 24 jam Jakarta. Cek, ganti, jumper, dan pasang aki langsung di lokasi Anda dengan teknisi profesional.",
};

const showcaseProducts = products.filter((product) => getProductReferenceImage(product.brandSlug, product.vehicleType)).slice(0, 8);
const proofItems = [
  { label: "Buka 24 Jam", icon: ClockIcon },
  { label: "Datang ke Lokasi", icon: TruckIcon },
  { label: "Cek & Pasang", icon: WrenchIcon },
  { label: "Khusus Jakarta", icon: ShieldCheckIcon },
];
const trustItems = [
  { label: "Respon cepat", icon: ZapIcon },
  { label: "Teknisi berpengalaman", icon: WrenchIcon },
  { label: "Produk bergaransi", icon: ShieldCheckIcon },
  { label: "Harga transparan", icon: TagIcon },
];
const quickLinks = [
  { label: "Produk", href: "#produk" },
  { label: "Jasa Aki", href: "#layanan" },
  { label: "Aki Mobil", href: "/aki-mobil" },
  { label: "Aki Motor", href: "/aki-motor" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Dokumentasi", href: "#dokumentasi" },
  { label: "Jakarta", href: "#area-layanan" },
  { label: "FAQ", href: "#faq" },
];
const steps = [
  { number: "01", title: "Kirim Lokasi", description: "WhatsApp tipe kendaraan dan lokasi Anda di Jakarta." },
  { number: "02", title: "Kami Cek Kebutuhan", description: "Tim membantu memastikan tipe aki dan penanganan yang diperlukan." },
  { number: "03", title: "Teknisi Berangkat", description: "Teknisi datang membawa aki dan perlengkapan yang sesuai." },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <nav className="bg-white shadow-[0_1px_12px_rgba(23,34,49,0.06)]" aria-label="Akses cepat"><div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">{quickLinks.map((link) => <Link key={link.label} href={link.href} className="shrink-0 rounded-md px-3 py-2 text-xs font-black text-brand-dark transition-colors hover:bg-brand-yellow/60">{link.label}</Link>)}</div></nav>
      <section className="bg-brand-yellow/90" aria-label="Bukti layanan"><div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">{proofItems.map(({ label, icon: Icon }) => <div key={label} className="flex items-center gap-2 px-4 py-4 text-sm font-black text-brand-dark md:justify-center"><Icon className="size-4 shrink-0" /><span>{label}</span></div>)}</div></section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20" id="tentang"><div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"><div className="relative overflow-hidden rounded-xl bg-white p-2 shadow-xl shadow-brand-dark/10"><div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Image src={referenceMedia.profile.src} alt={referenceMedia.profile.alt} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" /></div><div className="absolute right-6 bottom-6 rounded-lg bg-brand-dark px-4 py-3 text-white shadow-lg"><p className="text-[10px] font-black tracking-[0.16em] text-brand-yellow uppercase">Profil layanan</p><p className="mt-1 text-sm font-bold">Siap bantu di lokasi</p></div></div><div><Badge className="bg-brand-red px-2.5 py-1 text-[11px] font-black tracking-wide text-white uppercase">Tentang Kami</Badge><h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight md:text-5xl">Aki soak tidak perlu membuat rencana Anda berhenti.</h2><p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{business.shortDescription}</p><div className="mt-7 grid gap-3 sm:grid-cols-3">{["Teknisi profesional", "Harga transparan", "Konsultasi sebelum beli"].map((item) => <div key={item} className="flex items-start gap-2 pt-3 text-sm font-bold"><CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-red" />{item}</div>)}</div><Button asChild className="mt-8 bg-brand-red text-white hover:bg-brand-red/90"><Link href="/tentang">Kenal Lebih Dekat <ArrowRightIcon /></Link></Button></div></div></section>

      <section className="bg-brand-dark py-16 text-white md:py-20" id="cari-aki"><div className="mx-auto max-w-6xl px-4"><div className="max-w-2xl"><p className="text-xs font-black tracking-[0.18em] text-brand-yellow uppercase">Pilih dengan tepat</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Cari aki yang cocok untuk kendaraan Anda</h2><p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">Pilih jenis kendaraan dan mereknya. Jika belum yakin, tim kami siap membantu lewat WhatsApp.</p></div><div className="mt-8"><BatteryFinder /></div></div></section>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20"><SectionHeading eyebrow="Kategori" title="Solusi aki untuk mobil dan motor" description="Pilih kategori kendaraan untuk melihat pilihan aki yang tersedia." /><CategoryCards /></section>
      <ServiceSupportGrid />
      <section className="bg-[#FAFAF8] py-16 md:py-20" id="produk"><div className="mx-auto max-w-6xl px-4"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><SectionHeading eyebrow="Produk" title="Aki yang tersedia" description="Pilihan produk dan harga bersumber dari katalog. Gunakan gambar aktual sebagai referensi produk." /><Button asChild variant="outline" className="w-fit border-brand-dark/15 text-brand-dark hover:bg-brand-dark hover:text-white"><Link href="/produk">Lihat Semua Produk <ArrowRightIcon /></Link></Button></div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{showcaseProducts.map((product) => <ProductShowcaseCard key={product.id} product={product} />)}</div></div></section>
      <section className="bg-[#F1F2EF] py-16 md:py-20"><div className="mx-auto max-w-6xl px-4"><SectionHeading eyebrow="Cara kerja" title="Aki bermasalah? Beres dalam 3 langkah" description="Proses singkat untuk kondisi kendaraan yang butuh penanganan segera." /><div className="mt-8 grid gap-4 md:grid-cols-3">{steps.map((step) => <div key={step.number} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-brand-dark/5"><p className="text-4xl font-black text-brand-red">{step.number}</p><h3 className="mt-5 text-lg font-black">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p></div>)}</div></div></section>
      <JakartaCoverage />
      <section className="bg-[#FAFAF8] py-16 md:py-20" id="dokumentasi"><div className="mx-auto max-w-6xl px-4"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><SectionHeading eyebrow="Dokumentasi" title="Galeri layanan aki" description="Bukti pemasangan pelanggan dan dokumentasi aktivitas teknisi di lapangan." /><a href={referenceSourceUrl} target="_blank" rel="noopener noreferrer" className="w-fit text-sm font-black text-brand-red hover:underline">Lihat sumber asli <ArrowRightIcon className="inline size-4" /></a></div><GalleryGrid /></div></section>
      <Testimonials />
      <section className="bg-white py-16 md:py-20"><div className="mx-auto max-w-6xl px-4"><SectionHeading eyebrow="Kepercayaan" title="Kenapa pelanggan memilih kami" description="Informasi layanan yang penting saat Anda membutuhkan aki dengan cepat." /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{trustItems.map(({ label, icon: Icon }) => <div key={label} className="rounded-lg bg-[#FAFAF8] p-5 shadow-sm ring-1 ring-brand-dark/5"><div className="flex size-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red"><Icon className="size-5" aria-hidden="true" /></div><h3 className="mt-5 text-base font-black">{label}</h3></div>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20" id="faq"><SectionHeading eyebrow="Pertanyaan umum" title="Sebelum memanggil teknisi" description="Jawaban singkat untuk pertanyaan yang paling sering ditanyakan pelanggan." /><div className="mx-auto mt-8 max-w-3xl"><FaqSection items={faqs.slice(0, 6)} /></div></section>
      <section className="bg-brand-red py-16 text-white md:py-20"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between"><div><Badge className="bg-brand-yellow px-2.5 py-1 text-[11px] font-black tracking-wide text-brand-dark uppercase">Bantuan darurat aki · Jakarta</Badge><h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight md:text-5xl">AKI BERMASALAH DI JAKARTA?</h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">Jangan tunggu mobil benar-benar tidak bisa digunakan. Hubungi teknisi kami sekarang.</p></div><div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><Button asChild size="lg" className="bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90"><a href={waLink(waGeneralMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Chat Teknisi Sekarang</a></Button><Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white hover:text-brand-red"><a href={"tel:" + business.phoneIntl}><PhoneIcon /> Telepon</a></Button></div></div></section>
    </>
  );
}

function ProductShowcaseCard({ product }: { product: Product }) {
  const media = getProductReferenceImage(product.brandSlug, product.vehicleType);
  return <Card className="group flex h-full flex-col overflow-hidden bg-white shadow-sm shadow-brand-dark/5"><div className="relative aspect-[4/3] overflow-hidden bg-white">{media ? <Image src={media.src} alt={media.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" /> : null}</div><CardContent className="flex flex-1 flex-col p-5"><p className="text-[10px] font-black tracking-[0.16em] text-brand-red uppercase">{product.vehicleType === "mobil" ? "Aki Mobil" : "Aki Motor"}</p><h3 className="mt-2 text-lg font-black">{product.name}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{product.shortDescription}</p><div className="mt-auto pt-5"><p className="text-lg font-black">{formatIDR(product.price)}</p><Button asChild size="sm" className="mt-3 w-full bg-brand-red text-white hover:bg-brand-red/90"><a href={waLink(waProductMessage(product))} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Tanya &amp; Pesan</a></Button></div></CardContent></Card>;
}
