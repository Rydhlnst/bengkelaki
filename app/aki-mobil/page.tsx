import type { Metadata } from "next";
import { VehicleCategory } from "@/components/shop/vehicle-category";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Aki Mobil ${business.city} — Harga & Pilihan Aki`,
  description:
    "Jual aki mobil di Jakarta: tipe NS40, NS60, N50, N70 dari GS Astra, Yuasa, Amaron, dan merek lain. Lihat spesifikasi dan harga, tanya stok via WhatsApp.",
  path: "/aki-mobil",
});

export default function AkiMobilPage() {
  return (
    <VehicleCategory
      vehicleType="mobil"
      heading={`Aki Mobil di ${business.city} — Lengkap dengan Harga`}
      intro={[
        "Mencari aki mobil yang cocok tanpa harus datang duluan ke bengkel? Di halaman ini Anda bisa lihat tipe aki yang tersedia, spesifikasinya, dan harga estimasinya.",
        "Tersedia aki basah dan aki kering (MF) untuk city car, MPV, SUV, sedan, hingga pickup dan kendaraan niaga. Kalau belum yakin tipe yang cocok, kirim merek dan tipe kendaraan Anda via WhatsApp — kami bantu carikan.",
      ]}
      faqQuestion="Pertanyaan Seputar Pembelian Aki Mobil"
    />
  );
}
