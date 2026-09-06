import { business } from "@/config/business";
import type { Product } from "@/data/products";

export function waLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function waGeneralMessage(): string {
  return `Halo ${business.name}, saya mau tanya aki yang cocok untuk kendaraan saya.\n\nMerek kendaraan:\nTipe:\nTahun:\n\nMohon dibantu rekomendasinya.`;
}

export function waProductMessage(product: Product): string {
  return `Halo ${business.name}, saya tertarik dengan ${product.name}.\n\nKendaraan saya:\nMerek:\nTipe:\nTahun:\n\nMohon dibantu cek kecocokan, ketersediaan, dan pemasangannya.`;
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

Mohon dibantu menentukan tindakan dan aki yang sesuai untuk kondisi kendaraan saya.`;
}

export function waStockCheckMessage(productName: string): string {
  return `Halo ${business.name}, saya membutuhkan bantuan untuk ${productName}. Apakah tipe ini tersedia dan bisa dipasang oleh teknisi?`;
}

export function waBrandMessage(brandName: string): string {
  return `Halo ${business.name}, saya mencari aki ${brandName} untuk kendaraan saya.\n\nKendaraan saya:\nMerek:\nTipe:\nTahun:\n\nMohon dibantu menentukan tipe yang cocok dan layanan pemasangannya.`;
}

export function waAreaMessage(areaName: string): string {
  return `Halo ${business.name}, saya dari ${areaName} dan membutuhkan bantuan aki darurat.\n\nKendaraan saya:\nJenis: Mobil / Motor\nMerek:\nTipe:\nTahun:\n\nApakah teknisi bisa membantu cek dan pasang aki di lokasi saya?`;
}
