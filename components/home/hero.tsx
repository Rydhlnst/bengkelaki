import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, ClockIcon, MapPinIcon, WhatsAppIcon, WrenchIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { referenceMedia } from "@/data/reference-media";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-brand-dark">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:gap-10 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-24">
        <div className="relative z-10">
          <Badge className="rounded-md bg-brand-yellow px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-brand-dark uppercase"><ClockIcon className="size-3.5" /> Layanan Darurat Aki · 24 Jam</Badge>
          <h1 className="mt-6 max-w-3xl text-[2.65rem] leading-[0.98] font-black tracking-[-0.06em] text-balance md:mt-7 md:text-7xl">AKI DROP<br />DI JAKARTA?<br /><span className="text-brand-red">KAMI DATANG.</span></h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-dark/70 md:mt-6 md:text-lg">Mobil atau motor tidak bisa starter? Hubungi AkiExpress24jam. Teknisi datang ke lokasi Anda untuk cek, jumper, ganti, dan pasang aki—siang atau malam.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="h-auto min-h-11 w-full bg-brand-red py-3 text-white shadow-lg shadow-brand-red/15 hover:bg-brand-red/90 sm:w-auto"><a href={waLink(waGeneralMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Panggil Teknisi 24 Jam</a></Button><Button asChild size="lg" variant="outline" className="h-auto min-h-11 w-full border-brand-dark/20 bg-white py-3 text-brand-dark hover:bg-brand-dark hover:text-white sm:w-auto"><Link href="#produk"><ArrowRightIcon /> Cek Aki yang Cocok</Link></Button></div>
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-bold text-brand-dark/75 sm:mt-8 sm:text-sm">{["Respon via WhatsApp", "Teknisi ke lokasi", "Cek sebelum ganti", "Mobil & motor"].map((item) => <span key={item} className="flex items-center gap-2"><CheckIcon className="size-4 shrink-0 text-brand-red" />{item}</span>)}</div>
        </div>
        <div className="relative lg:mt-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-[0_16px_34px_rgba(7,17,31,0.12)]"><Image src={referenceMedia.profile.src} alt={referenceMedia.profile.alt} fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /><div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 bg-brand-dark/90 p-3 text-white sm:inset-x-4 sm:bottom-4 sm:p-4"><div><p className="text-[10px] font-black tracking-[0.16em] text-brand-yellow uppercase sm:text-xs">Bantuan darurat aki</p><p className="mt-1 text-xs font-bold sm:text-sm">Kirim lokasi, kami berangkat</p></div><WrenchIcon className="size-5 shrink-0 text-brand-yellow" /></div></div>
          <div className="grid grid-cols-2 gap-2 pt-3 text-xs text-brand-dark/75 sm:gap-3 sm:pt-4 sm:text-sm"><div className="flex gap-1.5"><MapPinIcon className="size-4 shrink-0 text-brand-red" /><span>Seluruh wilayah Jakarta</span></div><div className="flex gap-1.5"><ClockIcon className="size-4 shrink-0 text-brand-red" /><span>Non-stop 24 jam</span></div></div>
          <Link href="/layanan" className="mt-3 flex items-center gap-2 text-xs font-black text-brand-red hover:underline sm:mt-4 sm:text-sm">Lihat bantuan aki <ArrowRightIcon className="size-4" /></Link>
        </div>
      </div>
    </section>
  );
}
