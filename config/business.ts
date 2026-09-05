// ============================================================
// KONFIGURASI BISNIS — semua data di bawah ini adalah PLACEHOLDER.
// Ganti sesuai data bengkel Anda sebelum go-live.
// ============================================================

export const business = {
  // TODO: ganti nama bengkel
  name: "Bengkel Aki",
  tagline: "Toko & Bengkel Aki Mobil Motor",
  shortDescription:
    "Toko dan bengkel aki di Jakarta. Jual aki mobil dan motor berbagai merek, lengkap dengan layanan pemeriksaan dan pemasangan.",

  // TODO: ganti kota & alamat
  city: "Jakarta",
  province: "DKI Jakarta",
  address: "Jakarta — hubungi kami untuk alamat bengkel",
  addressShort: "Jakarta · Aki mobil & motor",
  plusCode: "",

  // TODO: ganti nomor telepon & WhatsApp (format WhatsApp: 62xxx tanpa tanda +)
  phoneDisplay: "0812-3456-7890",
  phoneIntl: "+6281234567890",
  whatsapp: "6281234567890",
  email: "halo@bengkelaki.example",

  // TODO: ganti link sosial & maps
  instagram: "https://instagram.com/bengkelaki",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jakarta",
  googleMapsEmbed:
    "https://www.google.com/maps?q=Jakarta&output=embed",

  // TODO: ganti jam operasional
  hours: [
    { day: "Senin – Jumat", time: "08.00 – 17.00" },
    { day: "Sabtu", time: "08.00 – 16.00" },
    { day: "Minggu", time: "09.00 – 14.00" },
  ],
  hoursNote: "Jam operasional bisa berubah saat hari besar.",

  // TODO: ganti dengan domain asli saat deploy
  siteUrl: "https://www.bengkelaki.example",

  // Aktifkan hanya jika layanan benar-benar tersedia.
  onSiteService: false,
  openingDate: "2015",
} as const;

export type Business = typeof business;
