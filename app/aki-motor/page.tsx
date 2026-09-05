import type { Metadata } from "next";
import { VehicleCategory } from "@/components/shop/vehicle-category";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Aki Motor ${business.city} — Cek Harga & Tipe`,
  description:
    "Jual aki motor di Jakarta untuk matic, sport, dan motor harian. Tipe GTX5L-BS, YTX5L-BS, YTX7A-BS, dan lainnya. Cek harga dan stok via WhatsApp.",
  path: "/aki-motor",
});

export default function AkiMotorPage() {
  return (
    <VehicleCategory
      vehicleType="motor"
      heading={`Aki Motor di ${business.city} — Cek Harga & Tipe`}
      intro={[
        "Aki motor yang kami jual umumnya tipe MF (maintenance free) untuk motor matic harian seperti BeAT, Scoopy, Vario, Mio, NMAX, sampai motor sport 150cc seperti CBR dan GSX.",
        "Bingung pilih antara GTX5L-BS, YTX5L-BS, atau tipe lain? Kirim tipe motor Anda via WhatsApp, kami bantu tentukan yang paling sesuai beserta harganya. Bisa langsung pasang di tempat.",
      ]}
      faqQuestion="Pertanyaan Seputar Pembelian Aki Motor"
    />
  );
}
