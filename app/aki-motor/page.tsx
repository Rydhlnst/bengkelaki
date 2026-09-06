import type { Metadata } from "next";
import { VehicleCategory } from "@/components/shop/vehicle-category";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Aki Motor Darurat ${business.city} — Teknisi Express 24 Jam`,
  description:
    "Layanan aki motor darurat 24 jam di Jakarta untuk motor matic, sport, dan harian. Teknisi express membantu cek, jumper, ganti, dan pasang aki di lokasi.",
  path: "/aki-motor",
});

export default function AkiMotorPage() {
  return (
    <VehicleCategory
      vehicleType="motor"
      heading={`Bantuan Aki Motor Darurat di ${business.city}`}
      intro={[
        "Motor sulit starter? Teknisi kami membantu mengecek aki MF untuk motor matic seperti BeAT, Scoopy, Vario, Mio, NMAX, hingga motor sport 150cc seperti CBR dan GSX.",
        "Bingung menentukan tipe GTX5L-BS, YTX5L-BS, atau tipe lain? Kirim tipe motor, tahun, dan lokasi via WhatsApp. Teknisi membantu memastikan kecocokan dan pemasangan di tempat.",
      ]}
      faqQuestion="FAQ Aki Motor Darurat"
    />
  );
}
