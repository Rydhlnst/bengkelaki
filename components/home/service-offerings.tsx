import Image from "next/image";
import { ArrowRightIcon, WhatsAppIcon } from "@/lib/icons";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { serviceOfferings } from "@/data/service-offerings";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export function ServiceOfferings() {
  return (
    <section id="jasa-aki" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Jasa aki Jakarta"
          title="Solusi aki saat Anda membutuhkannya"
          description="Dari memilih aki sampai menangani aki bermasalah, teknisi kami siap melayani seluruh wilayah Jakarta."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceOfferings.map((service) => (
            <article key={service.slug} className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-brand-dark/10 transition-shadow hover:shadow-lg hover:shadow-brand-dark/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-xl font-black tracking-tight text-brand-dark">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <div className="mt-auto pt-6">
                  <Button asChild className="w-full bg-brand-red text-white hover:bg-brand-red/90">
                    <a href={waLink(waGeneralMessage())} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon />
                      Hubungi Teknisi
                      <ArrowRightIcon className="ml-auto" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
