export type ServiceOffering = { slug: string; title: string; description: string; image: string; imageAlt: string };

export const serviceOfferings: ServiceOffering[] = [
  { slug: "jual-beli-aki", title: "Jual Beli Aki", description: "Butuh aki sekarang? Kami bantu pilihkan aki mobil, motor, atau kendaraan listrik dari merek terpercaya.", image: "/images/services/jual-beli-aki.png", imageAlt: "Teknisi mengganti aki mobil" },
  { slug: "jumper-aki", title: "Jumper Aki", description: "Kendaraan mogok karena aki drop? Hubungi kami dan kirim lokasi untuk bantuan jumper.", image: "/images/services/jumper-aki.png", imageAlt: "Teknisi melakukan jumper aki mobil" },
  { slug: "cas-aki", title: "Cas Aki", description: "Aki kehilangan daya? Kami bantu cek dan isi ulang untuk mengetahui apakah aki masih layak dipakai.", image: "/images/services/cas-aki.png", imageAlt: "Proses pengisian daya aki mobil" },
  { slug: "aki-mobil", title: "Ganti Aki di Lokasi", description: "Tidak perlu mencari bengkel. Aki lama dicek, lalu aki baru dipasang langsung di lokasi Anda.", image: "/images/services/aki-mobil.png", imageAlt: "Pemasangan aki mobil di ruang mesin" },
];
