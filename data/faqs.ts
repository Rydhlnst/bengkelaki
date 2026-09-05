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
      "Aki basah memakai cairan eletrit yang perlu dicek dan ditambah secara berkala, harganya umumnya lebih murah. Aki kering (MF / maintenance free) tidak perlu dicek airnya, lebih praktis, dan garansinya biasanya lebih panjang, tetapi harganya lebih tinggi. Keduanya tersedia di toko kami untuk mobil; untuk motor umumnya sudah memakai MF.",
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
    question: "Berapa harga aki mobil?",
    answer:
      "Harga aki mobil di toko kami mulai dari kisaran Rp 500 ribuan untuk tipe kecil (NS40) sampai lebih dari Rp 1,5 juta untuk tipe besar seperti N70. Harga terbaru dan tersedianya stok bisa ditanyakan langsung lewat WhatsApp atau dilihat di halaman produk.",
  },
  {
    question: "Berapa harga aki motor?",
    answer:
      "Harga aki motor umumnya berkisar antara Rp 200 ribuan sampai Rp 500 ribuan tergantung tipe dan mereknya. Tipe kecil seperti GTX5L-BS berada di kisaran bawah, sedangkan tipe premium seperti Motobatt berada di kisaran atas.",
  },
  {
    question: "Apakah bisa konsultasi sebelum membeli?",
    answer:
      "Bisa, dan sebaiknya memang begitu. Kirim merek, tipe, dan tahun kendaraan Anda melalui WhatsApp. Kami bantu rekomendasikan pilihan aki yang sesuai beserta estimasi harganya. Konsultasi gratis dan tidak ada kewajiban membeli.",
  },
  {
    question: "Apakah bisa cek stok melalui WhatsApp?",
    answer:
      "Bisa. Karena stok di toko fisik bisa berubah cepat, kami sarankan konfirmasi dulu ketersediaan tipe aki melalui WhatsApp sebelum datang. Kami akan balas dengan info stok terbaru dan estimasi harga.",
  },
];

export const productFaqs = (productName: string, brandName: string): Faq[] => [
  {
    question: `Apakah ${productName} cocok untuk kendaraan saya?`,
    answer:
      "Tipe aki kendaraan bisa berbeda berdasarkan model, tahun produksi, dan spesifikasi kelistrikan kendaraan. Sebelum membeli, cocokkan ukuran aki, kapasitas (Ah), dan posisi terminal dengan aki yang sedang terpasang. Jika belum yakin, hubungi kami melalui WhatsApp dengan mengirimkan merek, tipe, serta tahun kendaraan Anda.",
  },
  {
    question: `Apakah ${productName} ready stok?`,
    answer:
      "Stok pada halaman ini diperbarui secara berkala, tetapi bisa berubah sepanjang hari karena aki juga dijual langsung di toko. Konfirmasi ketersediaan melalui WhatsApp sebelum datang agar tidak sia-sia.",
  },
  {
    question: `Berapa lama garansi ${productName}?`,
    answer:
      "Garansi mengikuti ketentuan yang tercantum pada halaman produk ini dan berlaku sesuai syarat garansi dari pabrikannya. Simpan struk pembelian sebagai bukti klaim garansi. Tanyakan detail syarat garansi kepada tim kami saat pembelian.",
  },
  {
    question: `Apakah ${brandName} lebih baik dibanding merek lain?`,
    answer:
      "Setiap merek punya kelebihannya masing-masing. Yang paling penting adalah mencocokkan tipe, ukuran, dan kapasitas aki dengan kendaraan Anda. Kalau bingung memilih antara beberapa merek, tanyakan lewat WhatsApp, kami bantu sesuaikan dengan kebutuhan dan anggaran Anda.",
  },
];
