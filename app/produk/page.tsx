import { Suspense } from "react";
import type { Metadata } from "next";
import { Catalog } from "@/components/shop/catalog";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { SectionHeading } from "@/components/site/section-heading";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Referensi Aki Mobil & Motor Jakarta — Bantuan Express",
  description:
    "Referensi tipe aki mobil dan motor untuk bantuan darurat Jakarta. Cek spesifikasi, kapasitas, garansi, dan kecocokan sebelum teknisi datang.",
  path: "/produk",
});

export default function ProdukPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
      <Breadcrumbs items={[{ label: "Referensi Tipe Aki" }]} />
      <SectionHeading
        className="mt-4"
        level={1}
        eyebrow="Referensi Aki"
        title="Referensi Tipe Aki Mobil & Motor"
        description="Gunakan pencarian atau filter untuk menemukan tipe aki sesuai kendaraan. Kirim hasilnya melalui WhatsApp agar teknisi dapat membantu cek, ganti, dan pasang aki express."
      />
      <div className="mt-8">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Memuat referensi aki…</p>}>
          <Catalog products={products} />
        </Suspense>
      </div>
    </div>
  );
}
