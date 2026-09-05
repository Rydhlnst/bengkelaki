export type Service = {
  slug: string;
  name: string;
  icon:
    | "ganti-mobil"
    | "ganti-motor"
    | "cek-aki"
    | "cek-tegangan"
    | "konsultasi"
    | "pemasangan";
  shortDescription: string;
  description: string[];
};

// Aktifkan "antar-pasang" hanya jika layanan benar-benar tersedia (lihat config/business.ts).
export const services: Service[] = [
  {
    slug: "jual-aki-mobil",
    name: "Jual Aki Mobil",
    icon: "ganti-mobil",
    shortDescription:
      "Pilihan aki mobil berbagai merek dan tipe, dari city car sampai SUV dan kendaraan niaga.",
    description: [
      "Tersedia aki mobil basah dan MF (maintenance free) untuk berbagai jenis kendaraan, mulai dari city car, MPV, SUV, sampai pickup dan kendaraan niaga.",
      "Cek katalog di website, lalu tanyakan stok dan harga terbaru melalui WhatsApp sebelum datang.",
    ],
  },
  {
    slug: "jual-aki-motor",
    name: "Jual Aki Motor",
    icon: "ganti-motor",
    shortDescription:
      "Aki MF untuk motor matic, sport, dan motor harian berbagai merek.",
    description: [
      "Aki motor yang tersedia umumnya berbentuk MF (maintenance free) untuk motor matic 110-160cc serta motor sport dan naked bike.",
      "Bawa motor Anda ke bengkel, kami cek tipe aki yang sesuai dan langsung pasang bila diperlukan.",
    ],
  },
  {
    slug: "ganti-aki",
    name: "Ganti Aki Mobil & Motor",
    icon: "pemasangan",
    shortDescription:
      "Penggantian aki langsung di tempat, termasuk pemeriksaan kondisi aki lama.",
    description: [
      "Sebelum mengganti, aki lama Anda kami cek dulu untuk memastikan aki memang sudah tidak layak pakai. Kadang masalah ada di kelistrikan atau alternator, bukan aki.",
      "Penggantian aki umumnya selesai dalam waktu singkat, tanpa perlu booking.",
    ],
  },
  {
    slug: "cek-kondisi-aki",
    name: "Cek Kondisi Aki",
    icon: "cek-aki",
    shortDescription:
      "Mobil susah starter? Kami cek dulu kondisi aki Anda sebelum Anda membeli aki baru.",
    description: [
      "Pemeriksaan meliputi kondisi fisik aki, sambungan terminal, dan hasil pengisian daya. Dari hasil cek ini kami akan bilang apakah aki masih bisa dipakai atau memang harus diganti.",
      "Layanan ini juga berguna sebelum mudik atau perjalanan jauh.",
    ],
  },
  {
    slug: "cek-tegangan-aki",
    name: "Cek Tegangan Aki",
    icon: "cek-tegangan",
    shortDescription:
      "Pengukuran tegangan aki saat mesin mati dan saat mesin hidup.",
    description: [
      "Tegangan aki yang turun di bawah batas normal biasanya jadi tanda awal aki lemah. Kami ukur tegangan saat mesin mati dan saat mesin hidup untuk melihat kondisi pengisian daya.",
      "Hasil pengukuran kami jelaskan langsung, supaya Anda tahu apa yang perlu dilakukan berikutnya.",
    ],
  },
  {
    slug: "konsultasi-aki",
    name: "Konsultasi Pemilihan Aki",
    icon: "konsultasi",
    shortDescription:
      "Tidak tahu tipe aki kendaraan Anda? Tanya dulu, gratis, lewat WhatsApp.",
    description: [
      "Kirim merek, tipe, dan tahun kendaraan Anda melalui WhatsApp. Kami bantu carikan tipe aki yang sesuai, lengkap dengan estimasi harganya.",
      "Konsultasi ini gratis dan tidak ada kewajiban untuk membeli.",
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Bisa Tanya Sebelum Beli",
    description:
      "Tidak yakin tipe aki kendaraan Anda? Kirim tipe kendaraan melalui WhatsApp dan kami bantu mencarikan aki yang sesuai.",
  },
  {
    title: "Harga Jelas",
    description:
      "Lihat pilihan produk dan estimasi harga di website sebelum datang ke bengkel.",
  },
  {
    title: "Bisa Langsung Pasang",
    description:
      "Tidak perlu repot memasang sendiri. Tanyakan ketersediaan layanan pemasangan kepada tim kami.",
  },
  {
    title: "Banyak Pilihan Aki",
    description:
      "Tersedia berbagai pilihan aki mobil dan motor dari brand terpercaya, dari yang hemat sampai premium.",
  },
  {
    title: "Bengkel Lokal",
    description:
      "Lebih mudah untuk konsultasi, pemasangan, dan layanan setelah pembelian karena bengkelnya dekat dan mudah dijangkau.",
  },
];
