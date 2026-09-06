import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { SectionHeading } from "@/components/site/section-heading";
import { FaqSection } from "@/components/site/faq-section";
import { ProductCard } from "@/components/shop/product-card";
import { JsonLd } from "@/components/site/json-ld";
import { business } from "@/config/business";
import { brands } from "@/data/brands";
import { products, type VehicleType } from "@/data/products";
import { faqs } from "@/data/faqs";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

const categoryFaqs = faqs.filter((f) =>
  [
    "Aki mobil tahan berapa lama?",
    "Apa perbedaan aki basah dan aki kering (MF)?",
    "Bagaimana mengetahui tipe aki mobil saya?",
    "Apakah tersedia pemasangan aki?",
    "Apakah teknisi bisa menyiapkan tipe aki melalui WhatsApp?",
  ].includes(f.question)
);

export function VehicleCategory({
  vehicleType,
  heading,
  intro,
  faqQuestion,
}: {
  vehicleType: VehicleType;
  heading: string;
  intro: string[];
  faqQuestion: string;
}) {
  const list = products.filter((p) => p.vehicleType === vehicleType);
  const relatedBrands = brands.filter((b) =>
    b.vehicleTypes.includes(vehicleType)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: heading,
    description: intro[0],
    url: `${business.siteUrl}/${vehicleType === "mobil" ? "aki-mobil" : "aki-motor"}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: list.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${business.siteUrl}/produk/${p.slug}`,
      })),
    },
  };

  return (
    <>
      <div className="border-b bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Breadcrumbs
            items={[{ label: vehicleType === "mobil" ? "Aki Mobil" : "Aki Motor" }]}
          />
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            {heading}
          </h1>
          <div className="mt-4 flex max-w-3xl flex-col gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={waLink(waGeneralMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Tanya Aki yang Cocok
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/20">
              <Link href="#daftar-aki">
                Lihat Daftar Aki
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14" id="daftar-aki">
        <SectionHeading
          eyebrow="Referensi Tipe"
          title={vehicleType === "mobil" ? "Pilihan Aki Mobil" : "Pilihan Aki Motor"}
          description={`${list.length} tipe tersedia. Ketersediaan dapat berubah — konfirmasi kecocokan dan pemasangan express via WhatsApp.`}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-10 rounded-md border bg-card p-6">
          <h2 className="font-heading text-base font-extrabold tracking-wide uppercase">
            Cari Berdasarkan Merek
          </h2>
          <ul className="mt-3.5 flex flex-wrap gap-2">
            {relatedBrands.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/merek/${b.slug}`}
                  className="inline-block rounded-sm border bg-background px-3.5 py-2 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
                >
                  Aki {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <SectionHeading eyebrow="FAQ" title={faqQuestion} />
          <div className="mt-4 max-w-3xl">
            <FaqSection items={categoryFaqs} />
          </div>
        </div>
      </div>

      <JsonLd data={jsonLd} />
    </>
  );
}
