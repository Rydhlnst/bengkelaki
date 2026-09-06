// ============================================================
// KONFIGURASI BISNIS — AkiExpress24jam
// ============================================================

export const business = {
  name: "AkiExpress24jam",
  tagline: "Jasa Aki 24 Jam Jakarta",
  shortDescription:
    "Solusi cepat kebutuhan aki kendaraan dengan teknisi profesional yang siap datang langsung ke lokasi Anda di Jakarta. Cek, ganti, jumper, dan pasang aki 24 jam.",
  city: "Jakarta",
  province: "DKI Jakarta",
  address: "Jl. Sinar Budi Raya, Penjagalan, Jakarta Utara",
  addressShort: "Kantor Pusat",
  plusCode: "",
  phoneDisplay: "0857-1948-7366",
  phoneIntl: "+6285719487366",
  whatsapp: "6285719487366",
  email: "akiexpress24jam@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61589365580629",
  shopee: "https://shopee.co.id/migisofi",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl.+Sinar+Budi+Raya,+Penjagalan,+Jakarta+Utara",
  googleMapsEmbed:
    "https://www.google.com/maps?q=Jl.+Sinar+Budi+Raya,+Penjagalan,+Jakarta+Utara&output=embed",
  hours: [
    { day: "Senin – Minggu", time: "24 Jam Non-Stop" },
  ],
  hoursNote: "Siap melayani panggilan aki 24 jam di Jakarta.",
  siteUrl: "https://www.akiexpress24jam.com",
  onSiteService: true,
  openingDate: "2024",
  brands: [
    "GS ASTRA", "INCOE", "DELKOR", "AMARON", "VARTA",
    "MOTOBATT", "YUASA", "DRYFULL", "LAKONI", "CHILWEE", "MF"
  ],
  services: [
    { title: "Jual Beli Aki", description: "Menyediakan berbagai pilihan aki berkualitas untuk mobil, motor, dan kendaraan listrik dari merek terpercaya.", icon: "battery" },
    { title: "Jumper Aki", description: "Layanan jumper aki siap membantu kendaraan yang mogok akibat aki soak atau kehilangan daya ke lokasi Anda.", icon: "zap" },
    { title: "Cas Aki", description: "Jasa cas aki untuk membantu mengembalikan performa aki kendaraan agar dapat digunakan kembali secara optimal.", icon: "battery-charging" },
    { title: "Aki Mobil", description: "Tersedia berbagai jenis aki mobil berkualitas yang cocok untuk berbagai tipe kendaraan.", icon: "car" },
    { title: "Aki Motor", description: "Menyediakan aki motor berkualitas untuk kebutuhan harian dengan berbagai pilihan merek.", icon: "bike" },
    { title: "Aki Kendaraan Listrik", description: "Menyediakan aki kendaraan listrik yang dikenal tangguh dan memiliki daya tahan tinggi.", icon: "plug" },
  ],
  stats: [
    { value: "100+", label: "Instalasi Aki Berhasil" },
    { value: "97%", label: "Tingkat Kepuasan Pelanggan" },
    { value: "24 Jam", label: "Siap Melayani" },
    { value: "Jakarta", label: "Area Layanan" },
  ],
  testimonials: [
    { name: "Raka Julian", text: "Mobil saya tiba-tiba gak bisa starter pas pagi mau berangkat kerja. Untung nemu AkiExpress24jam dan teknisinya cepet banget datang ke rumah. Pelayanannya ramah dan proses ganti akinya juga cepat.", rating: 5 },
    { name: "Nadia Keisha", text: "Awalnya ragu pesan aki panggilan tapi ternyata pelayanannya oke banget. Admin responsif terus teknisinya jelas pas kasih penjelasan kondisi aki motor saya. Recommended sih.", rating: 5 },
    { name: "Farel Nathan", text: "Pernah pake layanan jumper aki malam hari di Jakarta Timur dan responnya cepet. Gak nyangka masih bisa dilayani malam-malam. Harganya juga masih masuk akal.", rating: 5 },
    { name: "Aurel Vanessa", text: "Saya beli aki mobil DELKOR di AkiExpress24jam dan sampai sekarang performanya bagus banget. Teknisi datang langsung pasang ke lokasi jadi praktis gak perlu keluar rumah.", rating: 5 },
    { name: "Kevin Alvaro", text: "Pelayanan cas aki di AkiExpress24jam memuaskan sih. Orangnya santai tapi kerja tetap profesional. Dijelasin juga kondisi aki kendaraan saya jadi lebih ngerti kapan harus ganti aki baru.", rating: 5 },
  ],
  serviceAreas: [
    "Jakarta Selatan", "Jakarta Timur", "Jakarta Barat", "Jakarta Utara", "Jakarta Pusat",
  ],
} as const;

export type Business = typeof business;
