export type VehicleType = "mobil" | "motor";
export type BatteryType = "mf" | "basah";
export type StockStatus = "tersedia" | "terbatas";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brandSlug: string;
  vehicleType: VehicleType;
  batteryType: BatteryType;
  price: number;
  originalPrice?: number;
  voltage: string;
  capacity: string;
  dimensions?: string;
  terminalPosition: string;
  warranty: string;
  sku: string;
  stock: StockStatus;
  featured?: boolean;
  popular?: boolean;
  compatibleVehicles: string[];
  shortDescription: string;
  description: string[];
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
};

// ============================================================
// DATA PRODUK — placeholder. Update harga & stok sesuai kondisi toko.
// ============================================================

export const products: Product[] = [
  {
    id: "p01",
    slug: "gs-astra-ns40zl",
    name: "GS Astra NS40ZL",
    brandSlug: "gs-astra",
    vehicleType: "mobil",
    batteryType: "basah",
    price: 585000,
    originalPrice: 625000,
    voltage: "12V",
    capacity: "35Ah",
    dimensions: "187 x 127 x 200 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "GS-NS40ZL",
    stock: "tersedia",
    featured: true,
    popular: true,
    compatibleVehicles: ["Toyota Avanza", "Daihatsu Xenia", "Toyota Rush", "Daihatsu Terios", "Daihatsu Gran Max"],
    shortDescription: "Aki basah 12V 35Ah yang umum dipakai MPV dan city car keluarga.",
    description: [
      "GS Astra NS40ZL adalah aki basah 12V 35Ah yang banyak dipakai pada MPV dan city car seperti Avanza, Xenia, dan Rush. Tipe ini menjadi salah satu tipe aki mobil yang paling banyak dicari di Indonesia.",
      "Sebelum membeli, cocokkan dulu tipe aki yang sedang terpasang di kendaraan Anda. Jika ragu, kirim tipe dan tahun kendaraan lewat WhatsApp, kami bantu cek.",
    ],
    highlights: [
      "Tipe yang umum dipakai MPV keluarga",
      "Sparepart pengganti mudah dicari",
      "Bisa langsung dipasang di bengkel kami",
    ],
    seoTitle: "Aki GS Astra NS40ZL 12V 35Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki GS Astra NS40ZL 12V 35Ah untuk Avanza, Xenia, Rush dan kendaraan sekelasnya. Cek harga dan stok, tanya langsung via WhatsApp.",
  },
  {
    id: "p02",
    slug: "gs-astra-mf-ns40zl",
    name: "GS Astra MF NS40ZL",
    brandSlug: "gs-astra",
    vehicleType: "mobil",
    batteryType: "mf",
    price: 735000,
    voltage: "12V",
    capacity: "35Ah",
    dimensions: "187 x 127 x 200 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "12 bulan",
    sku: "GS-NS40ZL-MF",
    stock: "tersedia",
    featured: true,
    popular: true,
    compatibleVehicles: ["Toyota Avanza", "Daihatsu Xenia", "Toyota Rush", "Daihatsu Terios"],
    shortDescription: "Versi maintenance free dari tipe NS40ZL, tanpa perlu cek air aki.",
    description: [
      "GS Astra MF NS40ZL adalah versi maintenance free dari tipe NS40ZL. Kapasitas dan ukurannya sama dengan versi basah, tetapi tidak perlu cek dan tambah air aki secara berkala.",
      "Pilihan yang cocok untuk Anda yang ingin aki yang lebih praktis dipakai sehari-hari.",
    ],
    highlights: [
      "Maintenance free, tanpa cek air aki",
      "Ukuran dan terminal sama dengan NS40ZL basah",
      "Garansi lebih panjang dari versi basah",
    ],
    seoTitle: "Aki GS Astra MF NS40ZL 12V 35Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki kering GS Astra MF NS40ZL 12V 35Ah untuk Avanza, Xenia, Rush. Tanpa cek air aki. Cek harga dan stok via WhatsApp.",
  },
  {
    id: "p03",
    slug: "yuasa-ns40zl",
    name: "Yuasa NS40ZL",
    brandSlug: "yuasa",
    vehicleType: "mobil",
    batteryType: "basah",
    price: 649000,
    voltage: "12V",
    capacity: "35Ah",
    dimensions: "187 x 127 x 200 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "YU-NS40ZL",
    stock: "tersedia",
    popular: true,
    compatibleVehicles: ["Toyota Avanza", "Daihatsu Xenia", "Toyota Rush", "Suzuki Ertiga"],
    shortDescription: "Aki basah 12V 35Ah dari Yuasa untuk MPV dan city car.",
    description: [
      "Yuasa NS40ZL adalah aki basah 12V 35Ah dengan tipe standar JIS yang umum dipakai MPV dan city car di Indonesia.",
      "Cocok untuk pengganti aki standar pabrik pada Avanza, Xenia, Ertiga, dan kendaraan sekelasnya.",
    ],
    highlights: [
      "Merek aki yang sudah lama dikenal",
      "Tipe standar JIS, mudah dicocokkan",
      "Bisa langsung dipasang di bengkel kami",
    ],
    seoTitle: "Aki Yuasa NS40ZL 12V 35Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki Yuasa NS40ZL 12V 35Ah untuk Avanza, Xenia, Ertiga. Cek harga terbaru dan ketersediaan stok via WhatsApp.",
  },
  {
    id: "p04",
    slug: "gs-astra-ns60l",
    name: "GS Astra NS60L",
    brandSlug: "gs-astra",
    vehicleType: "mobil",
    batteryType: "basah",
    price: 799000,
    voltage: "12V",
    capacity: "45Ah",
    dimensions: "238 x 129 x 203 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "GS-NS60L",
    stock: "tersedia",
    popular: true,
    compatibleVehicles: ["Toyota Calya", "Daihatsu Sigra", "Toyota Agya", "Daihatsu Ayla", "Suzuki Ertiga"],
    shortDescription: "Aki basah 12V 45Ah untuk LCGC dan MPV kompak.",
    description: [
      "GS Astra NS60L adalah aki basah 12V 45Ah yang umum dipakai mobil LCGC seperti Calya, Sigra, Agya, dan Ayla, serta beberapa MPV kompak.",
      "Ukurannya lebih besar dari NS40, jadi pastikan tipe aki kendaraan Anda memang NS60 sebelum membeli.",
    ],
    highlights: [
      "Tipe umum untuk mobil LCGC",
      "Kapasitas 45Ah untuk kebutuhan listrik standar",
      "Bisa langsung dipasang di bengkel kami",
    ],
    seoTitle: "Aki GS Astra NS60L 12V 45Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki GS Astra NS60L 12V 45Ah untuk Calya, Sigra, Agya, Ayla. Cek harga dan stok langsung via WhatsApp.",
  },
  {
    id: "p05",
    slug: "amaron-go-38b20l",
    name: "Amaron GO 38B20L",
    brandSlug: "amaron",
    vehicleType: "mobil",
    batteryType: "mf",
    price: 655000,
    voltage: "12V",
    capacity: "35Ah",
    dimensions: "187 x 127 x 200 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "18 bulan",
    sku: "AM-GO-38B20L",
    stock: "tersedia",
    featured: true,
    compatibleVehicles: ["Toyota Agya", "Honda Brio", "Suzuki Karimun Wagon R", "Daihatsu Ayla"],
    shortDescription: "Aki MF 12V 35Ah untuk city car, garansi panjang.",
    description: [
      "Amaron GO 38B20L adalah aki maintenance free 12V 35Ah yang cocok untuk city car seperti Agya, Brio, dan Karimun Wagon R.",
      "Karena berbentuk MF, aki ini tidak perlu cek air aki. Garansi produknya juga tergolong panjang untuk kelasnya.",
    ],
    highlights: [
      "Maintenance free, praktis dipakai harian",
      "Garansi 18 bulan",
      "Ukuran kompak untuk city car",
    ],
    seoTitle: "Aki Amaron GO 38B20L 12V 35Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki kering Amaron GO 38B20L 12V 35Ah untuk Agya, Brio, Karimun. Garansi 18 bulan. Tanya stok via WhatsApp.",
  },
  {
    id: "p06",
    slug: "incoe-ns40zl",
    name: "Incoe NS40ZL MF",
    brandSlug: "incoe",
    vehicleType: "mobil",
    batteryType: "mf",
    price: 465000,
    voltage: "12V",
    capacity: "35Ah",
    dimensions: "187 x 127 x 200 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "12 bulan",
    sku: "IN-NS40ZL-MF",
    stock: "tersedia",
    compatibleVehicles: ["Toyota Avanza", "Daihatsu Xenia", "Toyota Rush", "Daihatsu Terios"],
    shortDescription: "Aki MF 12V 35Ah dengan harga lebih terjangkau.",
    description: [
      "Incoe NS40ZL MF adalah aki maintenance free 12V 35Ah dengan harga yang lebih terjangkau dibanding merek lain dengan tipe serupa.",
      "Pilihan yang sering diambil untuk kendaraan harian dengan kebutuhan listrik standar.",
    ],
    highlights: [
      "Harga lebih terjangkau di kelas MF",
      "Tanpa perlu cek air aki",
      "Tipe standar NS40ZL",
    ],
    seoTitle: "Aki Incoe NS40ZL MF 12V 35Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki kering Incoe NS40ZL MF 12V 35Ah, pilihan hemat untuk Avanza, Xenia, dan kendaraan sekelasnya. Cek stok via WhatsApp.",
  },
  {
    id: "p07",
    slug: "gs-astra-mf-ns60l",
    name: "GS Astra MF NS60L",
    brandSlug: "gs-astra",
    vehicleType: "mobil",
    batteryType: "mf",
    price: 935000,
    voltage: "12V",
    capacity: "45Ah",
    dimensions: "238 x 129 x 203 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "12 bulan",
    sku: "GS-NS60L-MF",
    stock: "tersedia",
    compatibleVehicles: ["Toyota Kijang Innova", "Suzuki Ertiga", "Suzuki APV", "Mitsubishi Xpander"],
    shortDescription: "Aki MF 12V 45Ah untuk MPV keluarga.",
    description: [
      "GS Astra MF NS60L adalah aki maintenance free 12V 45Ah yang umum dipakai MPV seperti Innova, Ertiga, APV, dan Xpander.",
      "Tanpa perlu cek air aki, cocok untuk pemakaian harian yang praktis.",
    ],
    highlights: [
      "Maintenance free untuk MPV keluarga",
      "Kapasitas 45Ah",
      "Garansi 12 bulan",
    ],
    seoTitle: "Aki GS Astra MF NS60L 12V 45Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki kering GS Astra MF NS60L 12V 45Ah untuk Innova, Ertiga, APV, Xpander. Cek harga dan stok via WhatsApp.",
  },
  {
    id: "p08",
    slug: "amaron-hi-life-ns60l",
    name: "Amaron HI-LIFE NS60L",
    brandSlug: "amaron",
    vehicleType: "mobil",
    batteryType: "mf",
    price: 985000,
    voltage: "12V",
    capacity: "45Ah",
    dimensions: "238 x 129 x 203 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "18 bulan",
    sku: "AM-HL-NS60L",
    stock: "terbatas",
    compatibleVehicles: ["Toyota Kijang Innova", "Suzuki Ertiga", "Suzuki APV", "Mitsubishi Xpander"],
    shortDescription: "Aki MF 12V 45Ah dengan garansi 18 bulan.",
    description: [
      "Amaron HI-LIFE NS60L adalah aki maintenance free 12V 45Ah untuk MPV dan sedan keluarga. Garansinya 18 bulan, tergolong panjang untuk kelasnya.",
      "Stok tipe ini berjalan terbatas. Tanyakan dulu ketersediaannya sebelum datang.",
    ],
    highlights: [
      "Garansi 18 bulan",
      "Maintenance free",
      "Untuk MPV dan sedan keluarga",
    ],
    seoTitle: "Aki Amaron HI-LIFE NS60L 12V 45Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki kering Amaron HI-LIFE NS60L 12V 45Ah, garansi 18 bulan. Stok terbatas, tanya dulu via WhatsApp.",
  },
  {
    id: "p09",
    slug: "gs-astra-n50zl",
    name: "GS Astra N50ZL",
    brandSlug: "gs-astra",
    vehicleType: "mobil",
    batteryType: "basah",
    price: 1090000,
    voltage: "12V",
    capacity: "50Ah",
    dimensions: "260 x 171 x 225 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "GS-N50ZL",
    stock: "tersedia",
    compatibleVehicles: ["Toyota Camry", "Honda Accord", "Honda CR-V", "Mitsubishi Pajero Sport (lama)"],
    shortDescription: "Aki basah 12V 50Ah untuk sedan dan SUV.",
    description: [
      "GS Astra N50ZL adalah aki basah 12V 50Ah yang umum dipakai sedan dan SUV, terutama model-model generasi sebelumnya.",
      "Karena ukurannya lebih besar, pastikan rumen aki kendaraan Anda memang sesuai tipe N50.",
    ],
    highlights: [
      "Kapasitas 50Ah untuk sedan dan SUV",
      "Tipe standar yang mudah dicocokkan",
      "Bisa langsung dipasang di bengkel kami",
    ],
    seoTitle: "Aki GS Astra N50ZL 12V 50Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki GS Astra N50ZL 12V 50Ah untuk Camry, Accord, CR-V dan sedan/SUV lainnya. Cek harga dan stok via WhatsApp.",
  },
  {
    id: "p10",
    slug: "gs-astra-n70zl",
    name: "GS Astra N70ZL",
    brandSlug: "gs-astra",
    vehicleType: "mobil",
    batteryType: "basah",
    price: 1649000,
    voltage: "12V",
    capacity: "70Ah",
    dimensions: "260 x 171 x 225 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "GS-N70ZL",
    stock: "terbatas",
    popular: true,
    compatibleVehicles: ["Toyota Fortuner", "Mitsubishi Pajero Sport", "Mitsubishi Triton", "Ford Ranger", "Isuzu D-Max"],
    shortDescription: "Aki basah 12V 70Ah untuk double cabin dan SUV diesel.",
    description: [
      "GS Astra N70ZL adalah aki basah 12V 70Ah yang umum dipakai pickup double cabin dan SUV diesel seperti Fortuner, Pajero Sport, Triton, dan Ranger.",
      "Kendaraan diesel butuh tenaga starter lebih besar, jadi kapasitas aki memang biasanya lebih tinggi.",
    ],
    highlights: [
      "Kapasitas 70Ah untuk kendaraan diesel",
      "Tipe umum untuk double cabin dan SUV",
      "Stok terbatas — tanya dulu via WhatsApp",
    ],
    seoTitle: "Aki GS Astra N70ZL 12V 70Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki GS Astra N70ZL 12V 70Ah untuk Fortuner, Pajero Sport, Triton, Ranger. Stok terbatas, tanya via WhatsApp.",
  },
  {
    id: "p11",
    slug: "bosch-m3-ns60l",
    name: "Bosch M3 NS60L",
    brandSlug: "bosch",
    vehicleType: "mobil",
    batteryType: "mf",
    price: 975000,
    voltage: "12V",
    capacity: "45Ah",
    dimensions: "238 x 129 x 203 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "12 bulan",
    sku: "BO-M3-NS60L",
    stock: "tersedia",
    compatibleVehicles: ["Honda Jazz", "Honda City", "Honda Brio Satya", "Toyota Yaris"],
    shortDescription: "Aki MF 12V 45Ah dari Bosch untuk hatchback dan sedan.",
    description: [
      "Bosch M3 NS60L adalah aki maintenance free 12V 45Ah yang cocok untuk hatchback dan sedan seperti Jazz, City, Brio Satya, dan Yaris.",
      "Pilihan untuk Anda yang mencari aki MF dari merek otomotif yang sudah dikenal luas.",
    ],
    highlights: [
      "Merek otomotif dikenal luas",
      "Maintenance free",
      "Kapasitas 45Ah",
    ],
    seoTitle: "Aki Bosch M3 NS60L 12V 45Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki kering Bosch M3 NS60L 12V 45Ah untuk Jazz, City, Brio Satya, Yaris. Cek harga dan stok via WhatsApp.",
  },
  {
    id: "p12",
    slug: "gs-astra-gtx5l-bs",
    name: "GS Astra GTX5L-BS",
    brandSlug: "gs-astra",
    vehicleType: "motor",
    batteryType: "mf",
    price: 245000,
    voltage: "12V",
    capacity: "4Ah",
    dimensions: "114 x 70 x 106 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "GS-GTX5L-BS",
    stock: "tersedia",
    featured: true,
    popular: true,
    compatibleVehicles: ["Honda BeAT", "Honda Scoopy", "Honda Vario 110", "Honda Genio"],
    shortDescription: "Aki MF 12V 4Ah untuk motor matic harian.",
    description: [
      "GS Astra GTX5L-BS adalah aki MF 12V 4Ah yang umum dipakai motor matic 110cc seperti BeAT, Scoopy, Vario 110, dan Genio.",
      "Bentuknya MF sehingga tidak perlu cek air aki. Pemasangan bisa langsung dilakukan di bengkel kami.",
    ],
    highlights: [
      "Tipe umum motor matic 110cc",
      "Maintenance free",
      "Harga terjangkau",
    ],
    seoTitle: "Aki Motor GS Astra GTX5L-BS 12V 4Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki motor MF GS Astra GTX5L-BS 12V 4Ah untuk BeAT, Scoopy, Vario 110, Genio. Cek harga dan stok via WhatsApp.",
  },
  {
    id: "p13",
    slug: "yuasa-ytx5l-bs",
    name: "Yuasa YTX5L-BS",
    brandSlug: "yuasa",
    vehicleType: "motor",
    batteryType: "mf",
    price: 285000,
    voltage: "12V",
    capacity: "4Ah",
    dimensions: "114 x 70 x 106 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "YU-YTX5L-BS",
    stock: "tersedia",
    popular: true,
    compatibleVehicles: ["Honda BeAT", "Honda Scoopy", "Honda Genio", "Yamaha Mio"],
    shortDescription: "Aki MF 12V 4Ah dari Yuasa untuk motor matic.",
    description: [
      "Yuasa YTX5L-BS adalah aki MF 12V 4Ah untuk motor matic harian. Yuasa memang salah satu merek yang paling umum dipakai sebagai aki standar pabrik motor.",
      "Cocok untuk pengganti aki standar pada BeAT, Scoopy, Genio, dan Mio.",
    ],
    highlights: [
      "Merek aki motor yang umum dipakai pabrikan",
      "Maintenance free",
      "Tipe standar YTX5L-BS",
    ],
    seoTitle: "Aki Motor Yuasa YTX5L-BS 12V 4Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki motor MF Yuasa YTX5L-BS 12V 4Ah untuk BeAT, Scoopy, Genio, Mio. Cek harga dan stok via WhatsApp.",
  },
  {
    id: "p14",
    slug: "amaron-gtz5s",
    name: "Amaron GTZ5S",
    brandSlug: "amaron",
    vehicleType: "motor",
    batteryType: "mf",
    price: 265000,
    voltage: "12V",
    capacity: "4Ah",
    dimensions: "114 x 70 x 106 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "12 bulan",
    sku: "AM-GTZ5S",
    stock: "tersedia",
    compatibleVehicles: ["Honda BeAT", "Honda Scoopy", "Honda Vario 110", "Yamaha Mio"],
    shortDescription: "Aki MF 12V 4Ah dengan garansi 12 bulan.",
    description: [
      "Amaron GTZ5S adalah aki MF 12V 4Ah untuk motor matic harian dengan garansi 12 bulan.",
      "Alternatif lain di tipe yang sama dengan GTX5L-BS dan YTX5L-BS, tinggal sesuaikan dengan preferensi merek dan anggaran.",
    ],
    highlights: [
      "Garansi 12 bulan",
      "Maintenance free",
      "Untuk motor matic harian",
    ],
    seoTitle: "Aki Motor Amaron GTZ5S 12V 4Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki motor MF Amaron GTZ5S 12V 4Ah untuk BeAT, Scoopy, Vario 110, Mio. Garansi 12 bulan. Tanya stok via WhatsApp.",
  },
  {
    id: "p15",
    slug: "incoe-gtz5s",
    name: "Incoe GTZ5S",
    brandSlug: "incoe",
    vehicleType: "motor",
    batteryType: "mf",
    price: 195000,
    voltage: "12V",
    capacity: "4Ah",
    dimensions: "114 x 70 x 106 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "IN-GTZ5S",
    stock: "tersedia",
    compatibleVehicles: ["Honda BeAT", "Honda Scoopy", "Honda Genio", "Yamaha Mio"],
    shortDescription: "Aki motor MF dengan harga paling hemat.",
    description: [
      "Incoe GTZ5S adalah aki MF 12V 4Ah untuk motor matic dengan harga paling hemat di kelasnya.",
      "Pilihan yang umum diambil untuk motor harian dengan kebutuhan listrik standar tanpa aksesori tambahan.",
    ],
    highlights: [
      "Harga paling hemat di kelasnya",
      "Maintenance free",
      "Untuk motor matic harian",
    ],
    seoTitle: "Aki Motor Incoe GTZ5S 12V 4Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki motor MF Incoe GTZ5S 12V 4Ah, pilihan hemat untuk BeAT, Scoopy, Vario 110, Mio. Cek stok via WhatsApp.",
  },
  {
    id: "p16",
    slug: "gs-astra-gtx7l-bs",
    name: "GS Astra GTX7L-BS",
    brandSlug: "gs-astra",
    vehicleType: "motor",
    batteryType: "mf",
    price: 335000,
    voltage: "12V",
    capacity: "6Ah",
    dimensions: "147 x 60 x 130 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "GS-GTX7L-BS",
    stock: "tersedia",
    compatibleVehicles: ["Honda Vario 125", "Honda Vario 150", "Honda PCX 125", "Yamaha Lexi"],
    shortDescription: "Aki MF 12V 6Ah untuk motor matic 125-150cc.",
    description: [
      "GS Astra GTX7L-BS adalah aki MF 12V 6Ah yang umum dipakai motor matic kelas 125 sampai 150cc seperti Vario 125/150, PCX 125, dan Lexi.",
      "Kapasitasnya lebih besar dari GTX5L-BS, sesuai dengan kebutuhan listrik motor matic yang lebih besar.",
    ],
    highlights: [
      "Untuk motor matic 125-150cc",
      "Kapasitas 6Ah",
      "Maintenance free",
    ],
    seoTitle: "Aki Motor GS Astra GTX7L-BS 12V 6Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki motor MF GS Astra GTX7L-BS 12V 6Ah untuk Vario 125/150, PCX, Lexi. Cek harga dan stok via WhatsApp.",
  },
  {
    id: "p17",
    slug: "yuasa-ytx7a-bs",
    name: "Yuasa YTX7A-BS",
    brandSlug: "yuasa",
    vehicleType: "motor",
    batteryType: "mf",
    price: 315000,
    voltage: "12V",
    capacity: "7Ah",
    dimensions: "150 x 87 x 94 mm",
    terminalPosition: "Positif kiri (L)",
    warranty: "6 bulan",
    sku: "YU-YTX7A-BS",
    stock: "tersedia",
    popular: true,
    compatibleVehicles: ["Honda CB150", "Honda CBR150R", "Kawasaki Ninja 250 (lama)", "Suzuki GSX150"],
    shortDescription: "Aki MF 12V 7Ah untuk motor sport dan naked bike.",
    description: [
      "Yuasa YTX7A-BS adalah aki MF 12V 7Ah yang umum dipakai motor sport dan naked bike 150cc seperti CB150, CBR150R, dan GSX150.",
      "Tipe ini juga sering dipakai pada motor klasik yang dimodifikasi menggunakan sistem kelistrikan 12V.",
    ],
    highlights: [
      "Untuk motor sport 150cc",
      "Kapasitas 7Ah",
      "Maintenance free",
    ],
    seoTitle: "Aki Motor Yuasa YTX7A-BS 12V 7Ah — Harga & Spesifikasi",
    seoDescription:
      "Aki motor MF Yuasa YTX7A-BS 12V 7Ah untuk CB150, CBR150R, GSX150. Cek harga dan stok via WhatsApp.",
  },
  {
    id: "p18",
    slug: "motobatt-mbtx7u",
    name: "Motobatt MBTX7U",
    brandSlug: "motobatt",
    vehicleType: "motor",
    batteryType: "mf",
    price: 520000,
    voltage: "12V",
    capacity: "7Ah",
    dimensions: "150 x 87 x 94 mm",
    terminalPosition: "Quad-flex (4 terminal)",
    warranty: "12 bulan",
    sku: "MB-MBTX7U",
    stock: "terbatas",
    compatibleVehicles: ["Honda Vario 125/150", "Honda PCX", "Honda CB150", "Yamaha NMAX"],
    shortDescription: "Aki AGM premium dengan terminal quad-flex untuk upgrade.",
    description: [
      "Motobatt MBTX7U adalah aki AGM 12V 7Ah dengan desain terminal quad-flex, sehingga satu tipe bisa dipasang di banyak model motor.",
      "Biasanya dipilih untuk upgrade aki motor, terutama motor dengan aksesori listrik tambahan atau motor yang jarang dipakai.",
    ],
    highlights: [
      "Konstruksi AGM premium",
      "Terminal quad-flex fleksibel",
      "Cocok untuk upgrade dari aki standar",
    ],
    seoTitle: "Aki Motor Motobatt MBTX7U 12V 7Ah AGM — Harga & Spesifikasi",
    seoDescription:
      "Aki motor AGM Motobatt MBTX7U 12V 7Ah untuk upgrade Vario, PCX, CB150, NMAX. Stok terbatas, tanya via WhatsApp.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const score = (x: Product) =>
        (x.brandSlug === product.brandSlug ? 2 : 0) +
        (x.vehicleType === product.vehicleType ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export const batteryTypeLabels: Record<BatteryType, string> = {
  mf: "Aki Kering / MF",
  basah: "Aki Basah",
};
