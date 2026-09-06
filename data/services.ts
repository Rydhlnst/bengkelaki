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
    slug: "ganti-aki-mobil-darurat",
    name: "Ganti Aki Mobil Darurat",
    icon: "ganti-mobil",
    shortDescription:
      "Penggantian aki mobil di lokasi untuk kondisi kendaraan yang tidak bisa starter.",
    description: [
      "Teknisi mengecek tipe aki mobil yang sesuai untuk city car, MPV, SUV, pickup, dan kendaraan niaga.",
      "Kirim lokasi dan tipe kendaraan melalui WhatsApp agar teknisi dapat menyiapkan bantuan dengan cepat.",
    ],
  },
  {
    slug: "ganti-aki-motor-darurat",
    name: "Ganti Aki Motor Darurat",
    icon: "ganti-motor",
    shortDescription:
      "Penggantian aki motor di lokasi untuk motor matic, sport, dan motor harian.",
    description: [
      "Teknisi mengecek tipe MF yang sesuai untuk motor matic 110-160cc, motor sport, dan naked bike.",
      "Kirim lokasi Anda, kami cek tipe aki yang sesuai dan membantu pemasangan bila diperlukan.",
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
      "Mobil susah starter? Kami cek dulu kondisi aki sebelum menentukan apakah perlu penggantian.",
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
      "Kirim merek, tipe, tahun kendaraan, dan lokasi melalui WhatsApp. Kami bantu menentukan tipe aki serta tindakan yang sesuai.",
      "Konsultasi awal melalui WhatsApp gratis dan langsung diarahkan ke kebutuhan kendaraan Anda.",
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Bisa Konsultasi Sebelum Tindakan",
    description:
      "Tidak yakin penyebab kendaraan sulit starter? Kirim tipe kendaraan melalui WhatsApp dan kami bantu arahkan pemeriksaan.",
  },
  {
    title: "Biaya Transparan",
    description:
      "Teknisi menjelaskan hasil pemeriksaan dan tindakan yang diperlukan sebelum pengerjaan.",
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
      "Lebih mudah untuk konsultasi, pemasangan, dan bantuan lanjutan karena tim berada di area Jakarta.",
  },
];
