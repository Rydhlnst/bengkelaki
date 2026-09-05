import Link from "next/link";
import type { Metadata } from "next";
import {
  CircleCheckIcon,
  ClockIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: `Tentang ${business.name} — Toko & Bengkel Aki di ${business.city}`,
  description: `Kenali ${business.name}, toko dan bengkel aki di ${business.city}. Lihat jam operasional, lokasi, dan alasan pelanggan membeli aki di tempat kami.`,
  path: "/tentang",
});

export default function TentangPage() {
  return (
    <>
      <div className="border-b bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Breadcrumbs items={[{ label: "Tentang" }]} />
          <Badge className="mt-4 bg-primary/10 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-primary uppercase">
            Toko &amp; Bengkel Aki di {business.city}
          </Badge>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            Toko Aki yang Bisa Anda Tanya Dulu, Sebelum Beli
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {business.name} melayani penjualan dan pemasangan aki mobil dan
            motor. Kami tahu membeli aki itu sering mendadak — makanya kami
            usahakan prosesnya sesederhana mungkin: tanya dulu boleh, cek dulu
            boleh, dan Anda tidak dipaksa beli yang tidak perlu.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-8">
            <section aria-labelledby="yang-kami-kerjakan">
              <h2 id="yang-kami-kerjakan" className="text-xl font-extrabold tracking-tight">
                Yang Kami Kerjakan Sehari-hari
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                {[
                  "Menjual aki mobil dan motor berbagai merek — dari pilihan hemat sampai premium.",
                  "Memeriksa kondisi aki dan tegangan pengisian, bukan asal ganti.",
                  "Memasang aki baru langsung di tempat dan mengetes starter sebelum Anda pulang.",
                  "Membantu mencarikan tipe aki yang cocok kalau Anda tidak yakin, cukup kirim tipe kendaraan via WhatsApp.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CircleCheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="prinsip-kami">
              <h2 id="prinsip-kami" className="text-xl font-extrabold tracking-tight">
                Cara Kami Bekerja
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Kalau aki Anda masih bagus, kami akan bilang masih bagus.
                  Kalau memang sudah lemah, kami jelaskan kenapa dan tawarkan
                  pilihan sesuai anggaran Anda — bukan yang paling mahal.
                </p>
                <p>
                  Harga yang tertulis di katalog website adalah harga yang sama
                  dengan di toko. Kalau harga berubah (misalnya karena kenaikan
                  harga dari prinsipal), kami sebutkan langsung saat Anda
                  bertanya, tanpa perlu datang dulu.
                </p>
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-4 self-start rounded-md border bg-card p-6">
            <h2 className="font-heading text-base font-extrabold tracking-wide uppercase">
              Info Bengkel
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
            <div className="mt-2 flex flex-col gap-2.5">
              <Button asChild>
                <a
                  href={waLink(waGeneralMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircleIcon />
                  Chat WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kontak">Halaman Kontak</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
