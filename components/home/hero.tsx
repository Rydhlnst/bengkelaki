import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon, MapPinIcon, WhatsAppIcon, ZapIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BatteryArt } from "@/components/site/battery-art";
import { getProduct } from "@/data/products";
import { brands } from "@/data/brands";
import { formatIDR } from "@/lib/format";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export function Hero() {
  const featured = getProduct("gs-astra-ns40zl")!;
  return (
    <section className="overflow-hidden bg-[#101c22] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-14 pb-12 md:pt-20 md:pb-16 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10">
          <Badge variant="outline" className="mb-7 gap-2 rounded-full border-cyan-300/25 bg-cyan-300/5 px-3 py-1.5 text-cyan-200"><MapPinIcon className="size-3.5"/> PARTNER AKI ANDALAN JAKARTA</Badge>
          <h1 className="max-w-xl text-[2.75rem] leading-[1.08] font-extrabold tracking-[-0.055em] sm:text-6xl lg:text-[4.25rem]">Energi baru.<br/>Untuk setiap<br/><span className="text-cyan-300">jalan Jakarta.</span></h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-300 sm:text-base">Dari rutinitas pagi sampai perjalanan pulang. Temukan aki mobil &amp; motor yang tepat, dengan harga jelas dan bantuan pemasangan.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 bg-cyan-300 text-slate-950 hover:bg-cyan-200"><Link href="#cari-aki">Temukan Aki Saya <ArrowUpRightIcon/></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-white/25 text-white hover:bg-white/10 hover:text-white"><a href={waLink(waGeneralMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/> Konsultasi Dulu</a></Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-300">{["Harga transparan", "Pilihan multi-brand", "Bantu pasang"].map(point => <li key={point} className="flex items-center gap-1.5"><CheckIcon className="size-4 text-cyan-300"/>{point}</li>)}</ul>
        </div>
        <div className="relative isolate pt-6 pb-4">
          <div aria-hidden className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse,rgba(6,182,212,0.17),transparent_68%)]"/>
          <div aria-hidden className="absolute inset-x-8 top-6 bottom-20 -z-10 rounded-[50%] border border-cyan-200/10"/>
          <div className="flex items-center justify-between px-5 text-[10px] font-semibold tracking-[.2em] text-slate-400"><span>POWER YOUR EVERYDAY</span><ZapIcon className="size-5 text-cyan-300"/></div>
          <BatteryArt product={featured} className="relative drop-shadow-2xl"/>
          <Card className="relative mx-3 -mt-2 rounded-2xl border border-white/15 bg-white/5 py-0 text-white shadow-none backdrop-blur">
            <CardContent className="flex items-center justify-between gap-3 p-5">
              <div><p className="mb-1 text-[10px] font-bold tracking-widest text-cyan-300">PILIHAN POPULER · AKI MOBIL</p><h2 className="text-base font-bold">{featured.name}</h2><p className="mt-1 text-xs text-slate-400">{featured.voltage} · {featured.capacity} · Ilustrasi produk</p></div>
              <Link href={`/produk/${featured.slug}`} className="shrink-0 text-right"><span className="block text-[10px] text-slate-400">Mulai dari</span><span className="text-lg font-extrabold">{formatIDR(featured.price)}</span><span className="mt-1 flex items-center justify-end gap-1 text-xs text-cyan-300">Lihat detail <ArrowUpRightIcon className="size-3"/></span></Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-7 gap-y-5 px-4 py-6"><p className="text-[10px] leading-4 tracking-widest text-slate-400">PILIHAN MEREK<br/>UNTUK KENDARAAN ANDA</p>{brands.map(brand => <Link key={brand.slug} href={`/merek/${brand.slug}`} className="text-lg font-extrabold tracking-tight text-slate-300 transition-colors hover:text-cyan-300">{brand.name}</Link>)}</div></div>
    </section>
  );
}
