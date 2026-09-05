import Link from "next/link";
import type { Metadata } from "next";
import {
  BikeIcon,
  BatteryChargingIcon,
  CarIcon,
  CircleCheckIcon,
  GaugeIcon,
  WhatsAppIcon,
  WrenchIcon,
} from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { SectionHeading } from "@/components/site/section-heading";
import { FaqSection } from "@/components/site/faq-section";
import { business } from "@/config/business";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: `Layanan Bengkel Aki — Ganti & Cek Aki di ${business.city}`,
  description:
    "Layanan bengkel aki: jual aki mobil dan motor, ganti aki, cek kondisi aki, cek tegangan aki, dan konsultasi pemilihan aki. Datang langsung atau tanya via WhatsApp.",
  path: "/layanan",
});

const serviceIcons = {
  "ganti-mobil": CarIcon,
  "ganti-motor": BikeIcon,
  "cek-aki": BatteryChargingIcon,
  "cek-tegangan": GaugeIcon,
  konsultasi: WhatsAppIcon,
  pemasangan: WrenchIcon,
} as const;

const serviceFaqs = faqs.filter((f) =>
  [
    "Apakah tersedia pemasangan aki?",
    "Apakah bisa konsultasi sebelum membeli?",
    "Apakah aki baru bisa langsung dipasang?",
    "Bagaimana mengetahui aki mulai lemah?",
  ].includes(f.question)
);

const steps = [
  {
    title: "Datang atau Tanya Dulu",
    description:
      "Bisa langsung datang ke bengkel, atau kirim tipe kendaraan Anda via WhatsApp untuk konsultasi awal.",
  },
  {
    title: "Kami Cek Aki Anda",
    description:
      "Aki lama dicek dulu — kondisi fisik, tegangan, dan hasil pengisian daya — supaya Anda tidak ganti aki kalau belum perlu.",
  },
  {
    title: "Rekomendasi & Harga",
    description:
      "Kami rekomendasikan pilihan aki yang sesuai kendaraan dan anggaran Anda, lengkap dengan harganya.",
  },
  {
    title: "Pasang & Selesai",
    description:
      "Aki baru langsung dipasang, kendaraan dites starter, dan Anda bisa langsung jalan.",
  },
];

export default function LayananPage() {
  return (
    <>
      <div className="border-b bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Breadcrumbs items={[{ label: "Layanan" }]} />
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            Layanan Bengkel Aki di {business.city}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Kami tidak hanya menjual aki. Kalau mobil Anda susah starter,
            datang saja — kami cek dulu kondisi akinya. Kadang masalahnya bukan
            di aki, dan Anda berhak tahu sebelum membeli yang baru.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a
              href={waLink(waGeneralMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Tanya Layanan via WhatsApp
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <SectionHeading
          eyebrow="Daftar Layanan"
          title="Apa Saja yang Kami Kerjakan?"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="flex scroll-mt-32 flex-col gap-3 rounded-md border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-sm bg-primary/10 text-primary">
                  <Icon className="size-5.5" aria-hidden />
                </span>
                <h2 className="text-base font-extrabold tracking-wide uppercase">
                  {service.name}
                </h2>
                <div className="flex flex-col gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="border-y bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <SectionHeading
            eyebrow="Proses"
            title="Alur Pengerjaan di Bengkel Kami"
            description="Tanpa proses yang berbelit. Umumnya pemasangan aki selesai dalam waktu singkat."
          />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2.5 rounded-md border bg-card p-5">
                <span className="grid size-8 place-items-center rounded-full bg-primary text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="text-sm font-extrabold tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="flex flex-col items-start gap-5 rounded-md border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">
              Aki Anda Mulai Lemah?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Jangan menunggu sampai tiba-tiba mati di jalan. Datang untuk cek
              kondisi aki, atau tanyakan dulu lewat WhatsApp.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={waLink(waGeneralMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Chat WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/20">
              <Link href="/kontak">Cek Lokasi Bengkel</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="FAQ" title="Pertanyaan Seputar Layanan" />
          <div className="mt-4 max-w-3xl">
            <FaqSection items={serviceFaqs} />
          </div>
        </div>

        {!business.onSiteService ? (
          <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
            <CircleCheckIcon className="size-4 text-primary" aria-hidden />
            Catatan: layanan antar dan pemasangan aki ke lokasi pelanggan belum
            tersedia — pemasangan dilakukan di bengkel kami.
          </p>
        ) : null}
      </div>
    </>
  );
}
