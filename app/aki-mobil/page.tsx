import type { Metadata } from "next";
import { VehicleCategory } from "@/components/shop/vehicle-category";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Aki Mobil Darurat ${business.city} — Teknisi Express 24 Jam`,
  description:
    "Layanan aki mobil darurat 24 jam di Jakarta. Teknisi express membantu cek, jumper, ganti, dan pasang aki untuk NS40, NS60, N50, N70, dan tipe lainnya.",
  path: "/aki-mobil",
});

export default function AkiMobilPage() {
  return (
    <VehicleCategory
      vehicleType="mobil"
      heading={`Bantuan Aki Mobil Darurat di ${business.city}`}
      intro={[
        "Mobil tidak bisa starter atau aki mulai lemah? Teknisi kami membantu mengecek tipe aki, membawa pengganti yang sesuai, dan memasangnya di lokasi Anda.",
        "Layanan tersedia untuk aki basah dan aki kering (MF) pada city car, MPV, SUV, sedan, pickup, hingga kendaraan niaga. Kirim merek, tipe, tahun kendaraan, dan lokasi melalui WhatsApp untuk bantuan express.",
      ]}
      faqQuestion="FAQ Aki Mobil Darurat"
    />
  );
}
