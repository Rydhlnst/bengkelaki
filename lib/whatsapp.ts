import { business } from "@/config/business";
import type { Product } from "@/data/products";

export function waLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function waGeneralMessage(): string {
  return `Halo ${business.name}, saya mau tanya aki yang cocok untuk kendaraan saya.\n\nMerek kendaraan:\nTipe:\nTahun:\n\nMohon dibantu rekomendasinya.`;
}

export function waProductMessage(product: Product): string {
  return `Halo ${business.name}, saya tertarik dengan ${product.name}.\n\nKendaraan saya:\nMerek:\nTipe:\nTahun:\n\nMohon dibantu cek kecocokan, stok, dan pemasangannya.`;
}

export function waFinderMessage(input: {
  vehicleType?: string;
  vehicleBrand?: string;
  model?: string;
}): string {
  return `Halo ${business.name}, saya mencari aki untuk:

Jenis kendaraan: ${input.vehicleType ?? "-"}
Merek: ${input.vehicleBrand ?? "-"}
Tipe/Model: ${input.model ?? "-"}

Mohon dibantu rekomendasi aki yang cocok beserta harganya.`;
}

export function waStockCheckMessage(productName: string): string {
  return `Halo ${business.name}, apakah ${productName} masih tersedia? Kalau iya, boleh tahu harga terbarunya?`;
}

export function waBrandMessage(brandName: string): string {
  return `Halo ${business.name}, saya mencari aki ${brandName} untuk kendaraan saya.\n\nKendaraan saya:\nMerek:\nTipe:\nTahun:\n\nMohon info tipe yang cocok dan harganya.`;
}

export function waAreaMessage(areaName: string): string {
  return `Halo ${business.name}, saya dari ${areaName} dan sedang mencari aki.\n\nKendaraan saya:\nJenis: Mobil / Motor\nMerek:\nTipe:\nTahun:\n\nApakah ada stok yang cocok?`;
}
