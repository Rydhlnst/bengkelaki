export type Area = {
  slug: string;
  name: string;
  city: string;
  description: string;
  travelNote: string;
};

// Area layanan aki darurat Jakarta. Konfirmasi jangkauan teknisi sebelum berangkat.
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
  description: `Butuh bantuan aki darurat di ${name}? Teknisi AkiExpress24jam siap membantu cek, jumper, ganti, dan pasang aki mobil atau motor melalui WhatsApp.`,
  travelNote: "Hubungi kami untuk memastikan alamat bengkel, jam buka, dan ketersediaan layanan sebelum berkunjung.",
}));

export function getArea(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
