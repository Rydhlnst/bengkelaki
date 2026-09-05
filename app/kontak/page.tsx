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
import { FaqSection } from "@/components/site/faq-section";
import { business } from "@/config/business";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: `Kontak & Lokasi Bengkel — ${business.name} ${business.city}`,
  description: `Alamat, nomor telepon, jam operasional, dan peta lokasi ${business.name} di ${business.city}. Tanya stok dan harga aki langsung via WhatsApp.`,
  path: "/kontak",
});

const contactFaqs = faqs.filter((f) =>
  ["Apakah bisa cek stok melalui WhatsApp?", "Apakah bisa konsultasi sebelum membeli?"].includes(
    f.question
  )
);

export default function KontakPage() {
  const contactMethods = [
    {
      icon: MessageCircleIcon,
      title: "WhatsApp",
      description: "Paling cepat dibalas. Tanya stok, harga, dan tipe aki yang cocok.",
      action: (
        <a
          href={waLink(waGeneralMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-primary hover:underline"
        >
          Chat Sekarang
        </a>
      ),
    },
    {
      icon: PhoneIcon,
      title: "Telepon",
      description: "Untuk pertanyaan singkat atau konfirmasi sebelum datang.",
      action: (
        <a
          href={`tel:${business.phoneIntl}`}
          className="text-sm font-bold text-primary hover:underline"
        >
          {business.phoneDisplay}
        </a>
      ),
    },
    {
      icon: MapPinIcon,
      title: "Datang Langsung",
      description: business.address,
      action: (
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-primary hover:underline"
        >
          Buka Google Maps
        </a>
      ),
    },
  ];

  return (
    <>
      <div className="border-b bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Breadcrumbs items={[{ label: "Kontak" }]} />
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            Hubungi {business.name}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Tanya stok, harga, atau tipe aki yang cocok — bisa lewat WhatsApp
            tanpa perlu datang dulu. Kalau akinya sudah drop total, datang
            langsung ke bengkel kami di alamat bawah ini.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {contactMethods.map(({ icon: Icon, title, description, action }) => (
            <div key={title} className="flex flex-col gap-2.5 rounded-md border bg-card p-6">
              <span className="grid size-11 place-items-center rounded-sm bg-primary/10 text-primary">
                <Icon className="size-5.5" aria-hidden />
              </span>
              <h2 className="text-base font-extrabold tracking-wide uppercase">{title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              <div className="mt-auto pt-1">{action}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4 rounded-md border bg-card p-6">
            <h2 className="flex items-center gap-2 font-heading text-base font-extrabold tracking-wide uppercase">
              <ClockIcon className="size-4.5 text-primary" aria-hidden />
              Jam Operasional
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              {business.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between gap-4 border-b pb-2.5 last:border-b-0"
                >
                  <span className="font-bold">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground">{business.hoursNote}</p>
            <Button asChild variant="outline" className="mt-auto">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon />
                Petunjuk Arah via Google Maps
              </a>
            </Button>
          </div>
          <div className="overflow-hidden rounded-md border">
            <iframe
              src={business.googleMapsEmbed}
              title={`Peta lokasi ${business.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full lg:h-full lg:min-h-96"
            />
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Sebelum Datang"
            title="Pertanyaan yang Sering Ditanyakan"
          />
          <div className="mt-4 max-w-3xl">
            <FaqSection items={contactFaqs} />
          </div>
        </div>
      </div>
    </>
  );
}
