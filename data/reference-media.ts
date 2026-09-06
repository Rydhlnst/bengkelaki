export const referenceSourceUrl = "https://www.antarakicepat.com/";

export type ReferenceImage = {
  src: string;
  alt: string;
};

const image = (file: string, alt: string): ReferenceImage => ({
  src: "https://www.antarakicepat.com/wp-content/uploads/2026/05/" + file,
  alt,
});

const localImage = (file: string, alt: string): ReferenceImage => ({
  src: "/images/gallery/customer-proof/" + file,
  alt,
});

export const referenceMedia = {
  profile: image("profil-garasi.png", "Teknisi dan layanan Garasi Aki"),
  products: {
    car: {
      "gs-astra": image("GS-Astra-Produk-2-1.png", "Produk aki mobil GS Astra"),
      incoe: image("INCOE-Produk-5.png", "Produk aki mobil Incoe"),
      delkor: image("DELKOR-Produk.png", "Produk aki mobil Delkor"),
      amaron: image("AMARON-Produk.png", "Produk aki mobil Amaron"),
      varta: image("VARTA-Produk.png", "Produk aki mobil Varta"),
    },
    motor: {
      "gs-astra": image("GS-Astra-Produk-1-1.png", "Produk aki motor GS Astra"),
      motobatt: image("Motobatt-Produk-2.png", "Produk aki motor Motobatt"),
      yuasa: image("YUASA-Produk-1.png", "Produk aki motor Yuasa"),
      dryfull: image("DRYFULL-Produk2.png", "Produk aki motor Dryfull"),
      lakoni: image("Lakoni-Produk-2.png", "Produk aki motor Lakoni"),
      chilwee: image("CHILWEE-Produk-1.png", "Produk aki kendaraan listrik Chilwee"),
    },
  },
  brands: {
    "gs-astra": image("Merk-GS-ASTRA.png", "Logo merek GS Astra"),
    incoe: image("Merk-INCOE.png", "Logo merek Incoe"),
    delkor: image("Merk-DELKOR.png", "Logo merek Delkor"),
    amaron: image("Merk-AMARON.png", "Logo merek Amaron"),
    varta: image("Merk-VARTA.png", "Logo merek Varta"),
    motobatt: image("Merk-MOTOBATT.png", "Logo merek Motobatt"),
    yuasa: image("Merk-YUASA.png", "Logo merek Yuasa"),
    dryfull: image("Merk-DRYFULL.png", "Logo merek Dryfull"),
    lakoni: image("Merk-LAKONI.png", "Logo merek Lakoni"),
    chilwee: image("Merk-CHILWEE.png", "Logo merek Chilwee"),
  },
  gallery: [
    localImage("aki-service-01.jpeg", "Teknisi memasang aki mobil di lokasi pelanggan"),
    localImage("aki-service-02.jpeg", "Teknisi memeriksa aki mobil"),
    localImage("aki-service-03.jpeg", "Pemeriksaan terminal aki mobil"),
    localImage("aki-service-04.jpeg", "Teknisi memasang aki mobil dengan perlengkapan kerja"),
    localImage("aki-service-05.jpeg", "Proses jumper aki mobil"),
    localImage("aki-service-06.jpeg", "Teknisi melakukan penggantian aki mobil"),
    localImage("aki-service-07.jpeg", "Teknisi menangani terminal aki mobil"),
    image("Galeri-GARASI-AKI-3.jpeg", "Dokumentasi layanan aki 3"),
    image("Galeri-GARASI-AKI-4.jpeg", "Dokumentasi layanan aki 4"),
    image("Galeri-GARASI-AKI-5.jpeg", "Dokumentasi layanan aki 5"),
    image("Galeri-GARASI-AKI-10.jpeg", "Dokumentasi layanan aki 10"),
    image("Galeri-GARASI-AKI.jpeg", "Dokumentasi layanan aki"),
    image("Galeri-GARASI-AKI-8.jpeg", "Dokumentasi layanan aki 8"),
  ],
} as const;

export function getProductReferenceImage(brandSlug: string, vehicleType: "mobil" | "motor") {
  const collection = vehicleType === "mobil" ? referenceMedia.products.car : referenceMedia.products.motor;
  return collection[brandSlug as keyof typeof collection];
}
