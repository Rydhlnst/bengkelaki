import { Suspense } from "react";
import type { Metadata } from "next";
import { Catalog } from "@/components/shop/catalog";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { SectionHeading } from "@/components/site/section-heading";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Katalog Aki Mobil & Motor — Harga & Spesifikasi",
  description:
    "Katalog lengkap aki mobil dan motor: lihat spesifikasi, kapasitas, garansi, dan harga. Filter berdasarkan jenis kendaraan, jenis aki, dan merek.",
  path: "/produk",
});

export default function ProdukPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
      <Breadcrumbs items={[{ label: "Katalog Produk" }]} />
      <SectionHeading
        className="mt-4"
        level={1}
        eyebrow="Katalog"
        title="Semua Produk Aki Mobil & Motor"
        description="Gunakan pencarian atau filter untuk menemukan aki sesuai kendaraan Anda. Semua harga adalah estimasi terbaru — konfirmasi stok via WhatsApp."
      />
      <div className="mt-8">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Memuat katalog…</p>}>
          <Catalog products={products} />
        </Suspense>
      </div>
    </div>
  );
}
