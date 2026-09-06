import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, MapPinIcon, WhatsAppIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { business } from "@/config/business";
import { referenceMedia } from "@/data/reference-media";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";
import styles from "./jakarta-coverage.module.css";

const slugifyArea = (area: string) => area.toLowerCase().replaceAll(" ", "-");

export function JakartaCoverage() {
  const marqueeAreas = business.serviceAreas;

  return (
    <section id="area-layanan" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8">
          <SectionHeading
            eyebrow="Fokus layanan: Jakarta"
            title="Melayani seluruh wilayah Jakarta"
            description="Teknisi kami melayani panggilan aki ke rumah, kantor, apartemen, parkiran, jalan, dan lokasi kendaraan Anda di Jakarta."
          />
          <div className="rounded-lg bg-brand-red p-5 text-white shadow-lg shadow-brand-red/15 md:p-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-black tracking-[0.18em] text-white/70 uppercase">Area layanan</p>
                <p className="mt-2 text-3xl font-black tracking-tight">Jakarta</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">Kirim lokasi kendaraan Anda untuk cek ketersediaan teknisi.</p>
              </div>
              <MapPinIcon className="size-8 shrink-0 text-white/80" aria-hidden="true" />
            </div>
            <Button asChild className="mt-5 w-full bg-white text-brand-red hover:bg-white/90"><a href={waLink(waGeneralMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Tanya layanan Jakarta</a></Button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-lg bg-[#FAFAF8] py-3 ring-1 ring-brand-dark/10 md:mt-8 md:py-4" aria-label="Cakupan wilayah Jakarta">
          <div className={`${styles.track} flex w-max`}>
            {[0, 1].map((group) => (
              <div key={group} className="flex gap-2 pr-2 md:gap-3 md:pr-3" aria-hidden={group === 1}>
                {marqueeAreas.map((area) => <span key={`${group}-${area}`} className="flex items-center gap-1.5 bg-white px-3 py-2 text-[11px] font-black text-brand-dark shadow-sm md:gap-2 md:px-4 md:text-xs"><MapPinIcon className="size-3.5 text-brand-red" />{area}</span>)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 lg:mt-8 lg:grid-cols-5">
          {business.serviceAreas.map((area, index) => (
            <Link key={area} href={`/area/${slugifyArea(area)}`} className={index === 0 ? "flex min-h-14 items-center justify-between gap-2 rounded-lg bg-brand-dark px-3 py-3 text-xs font-black text-white shadow-sm transition-transform hover:-translate-y-0.5 sm:min-h-16 sm:px-4 sm:py-4 sm:text-sm" : "flex min-h-14 items-center justify-between gap-2 rounded-lg bg-white px-3 py-3 text-xs font-black text-brand-dark shadow-sm ring-1 ring-brand-dark/10 transition-all hover:-translate-y-0.5 hover:ring-brand-red/30 sm:min-h-16 sm:px-4 sm:py-4 sm:text-sm"}>
              <span className="flex items-center gap-1.5"><MapPinIcon className={index === 0 ? "size-4 text-brand-yellow sm:size-5" : "size-4 text-brand-red sm:size-5"} />{area}</span>
              <ArrowRightIcon className="size-4 shrink-0 opacity-60" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-5 rounded-lg bg-[#FAFAF8] p-4 ring-1 ring-brand-dark/10 md:mt-10 md:p-6 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-brand-red uppercase">Merek aki tersedia</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/65">Pilihan merek aki yang dapat disiapkan teknisi.</p>
          </div>
          <div className="overflow-hidden" aria-label="Merek aki tersedia">
            <div className={`${styles.brandTrack} flex w-max`}>
              {[0, 1].map((group) => (
                <div key={group} className="flex gap-2 pr-2 md:gap-3 md:pr-3" aria-hidden={group === 1}>
                  {Object.entries(referenceMedia.brands).map(([slug, brand]) => <Link key={`${group}-${slug}`} href={`/merek/${slug}`} className="flex h-18 w-28 shrink-0 items-center justify-center rounded-md bg-white px-3 shadow-sm ring-1 ring-brand-dark/10 transition-transform hover:-translate-y-0.5 sm:h-20 sm:w-36 sm:px-4"><Image src={brand.src} alt={brand.alt} width={180} height={90} className="h-9 w-full object-contain sm:h-10" /></Link>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
