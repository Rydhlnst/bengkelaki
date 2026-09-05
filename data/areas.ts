export type Area = {
  slug: string;
  name: string;
  city: string;
  description: string;
  travelNote: string;
};

// Jakarta catalog coverage. Confirm workshop location and service availability before visiting.
export const areas: Area[] = [
  ["jakarta-selatan", "Jakarta Selatan"],
  ["jakarta-pusat", "Jakarta Pusat"],
  ["jakarta-barat", "Jakarta Barat"],
  ["jakarta-timur", "Jakarta Timur"],
  ["jakarta-utara", "Jakarta Utara"],
].map(([slug, name]) => ({
  slug,
  name,
  city: "Jakarta",
  description: `Cari aki mobil atau motor untuk kendaraan Anda di ${name}. Bandingkan tipe dan harga di katalog, lalu konsultasikan kecocokan dan stok melalui WhatsApp.`,
  travelNote: "Hubungi kami untuk memastikan alamat bengkel, jam buka, dan ketersediaan layanan sebelum berkunjung.",
}));

export function getArea(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
