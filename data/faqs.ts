export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Aki mobil tahan berapa lama?",
    answer:
      "Umumnya aki mobil dipakai sekitar 1,5 sampai 3 tahun tergantung pemakaian. Sering jarang dipakai, sering macet, atau banyak memakai aksesori listrik saat mesin mati bisa memperpendek usia aki. Aki kering (MF) biasanya dipakai lebih lama dibanding aki basah dengan perawatan yang setara.",
  },
  {
    question: "Bagaimana mengetahui aki mulai lemah?",
    answer:
      "Tanda-tanda yang paling umum: mesin terasa berat saat distarter, lampu dan klakson melemah, ada indikator aki menyala di panel, atau aki terlihat menggelembung. Kalau mobil Anda mulai menunjukkan tanda-tanda ini, sebaiknya segera cek kondisi aki agar tidak tiba-tiba mati total.",
  },
  {
    question: "Apa perbedaan aki basah dan aki kering (MF)?",
    answer:
      "Aki basah memakai cairan elektrolit yang perlu dicek dan ditambah secara berkala. Aki kering (MF / maintenance free) tidak perlu dicek airnya dan lebih praktis untuk penggunaan harian. Teknisi kami membantu mengecek tipe yang sesuai dengan kendaraan Anda.",
  },
  {
    question: "Bagaimana mengetahui tipe aki mobil saya?",
    answer:
      "Tipe aki biasanya tercetak di label aki yang terpasang, misalnya NS40ZL, NS60L, atau N70ZL. Kalau labelnya sudah tidak terbaca, Anda bisa membawa kendaraan ke bengkel kami untuk dicek, atau kirim merek, tipe, dan tahun kendaraan lewat WhatsApp untuk kami bantu carikan tipe yang sesuai.",
  },
  {
    question: "Apakah aki baru bisa langsung dipasang?",
    answer:
      "Bisa. Aki kering (MF) umumnya bisa langsung dipasang. Untuk aki basah, pengisian eletrit dan pemakaian awal perlu mengikuti petunjuk di kemasan. Tim kami akan membantu proses pemasangannya sampai kendaraan bisa distarter.",
  },
  {
    question: "Apakah tersedia pemasangan aki?",
    answer:
      "Ya, pemasangan aki mobil dan motor tersedia di bengkel kami. Cukup datang langsung, umumnya pemasangan selesai dalam waktu singkat. Untuk ketersediaan teknisi saat Anda datang, konfirmasi dulu lewat WhatsApp agar tidak menunggu lama.",
  },
  {
    question: "Apakah teknisi bisa datang saat aki mati?",
    answer:
      "Bisa. Kirim lokasi, tipe kendaraan, dan gejala yang dirasakan melalui WhatsApp. Teknisi kami akan membantu cek, jumper, atau mengganti aki di lokasi sesuai kebutuhan.",
  },
  {
    question: "Berapa lama teknisi aki datang?",
    answer:
      "Waktu tiba mengikuti lokasi dan kondisi lalu lintas. Setelah menerima lokasi, tim kami menginformasikan estimasi kedatangan dan mengirim teknisi express yang tersedia.",
  },
  {
    question: "Apakah bisa konsultasi sebelum ganti aki?",
    answer:
      "Bisa. Kirim merek, tipe, tahun kendaraan, dan gejala yang dirasakan melalui WhatsApp. Kami bantu mengarahkan pemeriksaan dan tindakan yang sesuai. Konsultasi awal gratis.",
  },
  {
    question: "Apakah teknisi bisa menyiapkan tipe aki melalui WhatsApp?",
    answer:
      "Bisa. Kirim tipe kendaraan dan lokasi melalui WhatsApp agar teknisi dapat mengecek kecocokan serta menyiapkan bantuan yang sesuai.",
  },
];

export const productFaqs = (productName: string, brandName: string): Faq[] => [
  {
    question: `Apakah ${productName} cocok untuk kendaraan saya?`,
    answer:
      "Tipe aki kendaraan bisa berbeda berdasarkan model, tahun produksi, dan spesifikasi kelistrikan kendaraan. Sebelum mengganti, cocokkan ukuran aki, kapasitas (Ah), dan posisi terminal dengan aki yang sedang terpasang. Jika belum yakin, hubungi kami melalui WhatsApp dengan mengirimkan merek, tipe, serta tahun kendaraan Anda.",
  },
  {
    question: `Apakah ${productName} bisa disiapkan teknisi?`,
    answer:
      "Ketersediaan tipe aki dapat berubah sepanjang hari. Konfirmasi melalui WhatsApp sebelum teknisi berangkat agar pemeriksaan dan pemasangan dapat disiapkan.",
  },
  {
    question: `Berapa lama garansi ${productName}?`,
    answer:
      "Garansi mengikuti ketentuan yang tercantum pada halaman produk ini dan berlaku sesuai syarat garansi dari pabrikannya. Simpan bukti pemasangan sebagai dokumen layanan. Tanyakan detail syarat garansi kepada tim kami saat penanganan.",
  },
  {
    question: `Apakah ${brandName} lebih baik dibanding merek lain?`,
    answer:
      "Setiap merek punya kelebihannya masing-masing. Yang paling penting adalah mencocokkan tipe, ukuran, dan kapasitas aki dengan kendaraan Anda. Kalau bingung memilih antara beberapa merek, tanyakan lewat WhatsApp, kami bantu sesuaikan dengan kebutuhan dan anggaran Anda.",
  },
];
