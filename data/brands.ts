import type { VehicleType } from "./products";

export type Brand = {
  slug: string;
  name: string;
  origin: string;
  vehicleTypes: VehicleType[];
  shortDescription: string;
  description: string[];
  strengths: string[];
};

export const brands: Brand[] = [
  {
    slug: "gs-astra",
    name: "GS Astra",
    origin: "Indonesia",
    vehicleTypes: ["mobil", "motor"],
    shortDescription:
      "Merek aki yang sudah lama dipakai kendaraan di Indonesia, tersedia untuk mobil dan motor.",
    description: [
      "GS Astra salah satu merek aki yang paling umum ditemukan di bengkel-bengkel Indonesia. Produknya mencakup aki basah dan aki MF (maintenance free) untuk mobil, serta aki MF untuk motor.",
      "Karena banyak kendaraan di Indonesia memang dirancang memakai ukuran tipe GS Astra (NS40, NS60, N50, dan lainnya), merk ini sering menjadi pilihan pengganti aki standar pabrik.",
    ],
    strengths: [
      "Pilihan tipe paling lengkap untuk mobil di Indonesia",
      "Tersedia versi aki basah dan MF",
      "Mudah dicari penggantinya karena tipe standar banyak dipakai pabrikan",
    ],
  },
  {
    slug: "yuasa",
    name: "Yuasa",
    origin: "Jepang",
    vehicleTypes: ["mobil", "motor"],
    shortDescription:
      "Merek aki asal Jepang untuk mobil dan motor, banyak dipakai sebagai aki standar pabrik.",
    description: [
      "Yuasa dikenal lewat aki motor MF-nya yang banyak dipakai motor matic dan sport, mulai dari tipe kecil seperti YTX5L-BS sampai YTX7A-BS.",
      "Untuk mobil, Yuasa juga menyediakan pilihan aki dengan tipe standar JIS (NS40, NS60, dan seterusnya) sebagai alternatif pengganti aki standar pabrik.",
    ],
    strengths: [
      "Pilihan utama aki motor MF untuk motor matic dan sport",
      "Tersedia juga untuk mobil dengan tipe standar JIS",
      "Kapasitas dan ukuran mengikuti standar pabrikan",
    ],
  },
  {
    slug: "amaron",
    name: "Amaron",
    origin: "India",
    vehicleTypes: ["mobil", "motor"],
    shortDescription:
      "Aki MF dengan garansi panjang untuk mobil dan motor, populer sebagai pilihan pengganti.",
    description: [
      "Amaron memproduksi aki MF untuk mobil dan motor. Untuk mobil, tipe yang umum di Indonesia seperti 38B20L dan NS60 sering dipakai untuk city car dan MPV.",
      "Untuk motor, Amaron menyediakan aki MF dengan ukuran standar yang biasa dipakai motor matic harian.",
    ],
    strengths: [
      "Fokus pada aki MF (maintenance free)",
      "Garansi produk yang tergolong panjang di kelasnya",
      "Tersedia untuk mobil dan motor",
    ],
  },
  {
    slug: "incoe",
    name: "Incoe",
    origin: "Indonesia",
    vehicleTypes: ["mobil", "motor"],
    shortDescription:
      "Aki MF dengan harga lebih terjangkau untuk mobil dan motor harian.",
    description: [
      "Incoe adalah merek aki MF yang sering dicari karena harganya lebih terjangkau dibanding merek lain dengan tipe yang sama.",
      "Cocok untuk kendaraan harian yang pemakaiannya tidak berat, baik mobil city car maupun motor matic.",
    ],
    strengths: [
      "Harga lebih terjangkau di kelas aki MF",
      "Tersedia untuk mobil dan motor",
      "Pilihan yang umum untuk kendaraan harian",
    ],
  },
  {
    slug: "motobatt",
    name: "Motobatt",
    origin: "Amerika Serikat",
    vehicleTypes: ["motor"],
    shortDescription:
      "Aki motor AGM premium dengan terminal quad-flex, sering dipakai untuk upgrade.",
    description: [
      "Motobatt dikenal lewat aki AGM dengan desain terminal quad-flex yang membuat satu tipe bisa dipakai di banyak model motor.",
      "Biasanya dipilih untuk upgrade aki motor, termasuk motor dengan aksesori tambahan atau motor yang jarang dipakai.",
    ],
    strengths: [
      "Konstruksi AGM yang kuat untuk motor",
      "Terminal quad-flex fleksibel untuk banyak model",
      "Sering dipakai untuk upgrade dari aki standar",
    ],
  },
  {
    slug: "bosch",
    name: "Bosch",
    origin: "Jerman",
    vehicleTypes: ["mobil"],
    shortDescription:
      "Merek otomotif Jerman dengan pilihan aki MF untuk mobil penumpang.",
    description: [
      "Bosch menyediakan aki MF untuk mobil penumpang dengan berbagai kapasitas, dari city car sampai MPV dan SUV.",
      "S3/S4/M3 dan seri lainnya tinggal disesuaikan dengan tipe aki yang dipakai kendaraan Anda.",
    ],
    strengths: [
      "Merek otomotif yang sudah dikenal luas",
      "Pilihan aki MF untuk mobil penumpang",
      "Tersedia dalam berbagai kapasitas",
    ],
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
