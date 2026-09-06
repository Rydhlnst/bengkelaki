import Image from "next/image";
import { QuoteIcon } from "@/lib/icons";
import { SectionHeading } from "@/components/site/section-heading";
import { business } from "@/config/business";
import { referenceMedia } from "@/data/reference-media";
import styles from "./testimonials.module.css";

export function Testimonials() {
  const image = referenceMedia.gallery[0];
  const reviews = business.testimonials.slice(0, 4);

  return (
    <section id="testimoni" className="w-screen max-w-none overflow-hidden bg-[#FAFAF8] py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-8">
          <SectionHeading
            eyebrow="Testimoni pelanggan"
            title="Pengalaman pelanggan setelah aki terpasang"
            description="Ulasan pelanggan membantu Anda melihat bagaimana tim kami menangani kebutuhan aki di lokasi."
          />
          <div className="grid grid-cols-[1.08fr_0.92fr] gap-2 sm:gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg shadow-brand-dark/10">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 58vw, 45vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-dark/5 sm:p-6">
              <div>
                <p className="text-3xl font-black tracking-tight text-brand-dark sm:text-4xl">{business.stats[0].value}</p>
                <p className="mt-1 text-xs font-bold text-muted-foreground sm:mt-2 sm:text-sm">{business.stats[0].label}</p>
              </div>
              <div className="mt-5 border-t border-brand-dark/10 pt-4 sm:mt-8 sm:pt-5">
                <p className="text-2xl font-black tracking-tight text-brand-dark sm:text-3xl">{business.stats[1].value}</p>
                <p className="mt-1 text-xs font-bold text-muted-foreground sm:mt-2 sm:text-sm">{business.stats[1].label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden sm:mt-10" aria-label="Ulasan pelanggan berjalan">
        <div className={`${styles.track} flex w-max`}>
          {[0, 1].map((group) => (
            <div key={group} className="flex gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={group === 1}>
              {reviews.map((review) => (
                <article key={`${group}-${review.name}`} tabIndex={group === 0 ? 0 : -1} className="w-[min(86vw,24rem)] flex-none rounded-xl bg-white p-5 shadow-sm ring-1 ring-brand-dark/5 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-brand-red/40 sm:w-[clamp(20rem,45vw,42rem)] sm:rounded-2xl sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-1 text-brand-red" aria-label={`${review.rating} dari 5 bintang`}>
                      {Array.from({ length: review.rating }, (_, index) => <span key={index} aria-hidden="true">★</span>)}
                    </div>
                    <QuoteIcon className="size-6 text-brand-dark/15" aria-hidden="true" />
                  </div>
                  <blockquote className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:mt-5">“{review.text}”</blockquote>
                  <p className="mt-6 text-sm font-black text-brand-dark sm:mt-7">{review.name}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
