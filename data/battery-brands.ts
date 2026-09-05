export type BatteryBrand = {
  id: string;
  name: string;
  logo?: string;
  alt?: string;
  href?: string;
  availability: "available" | "candidate";
};

// Keep this list separate from product inventory. Candidates are researched as
// relevant to Indonesia, but are never presented as available stock.
export const batteryBrands: BatteryBrand[] = [
  { id: "gs-astra", name: "GS Astra", href: "/merek/gs-astra", availability: "available" },
  { id: "yuasa", name: "Yuasa", href: "/merek/yuasa", availability: "available" },
  { id: "amaron", name: "Amaron", href: "/merek/amaron", availability: "available" },
  { id: "incoe", name: "INCOE", href: "/merek/incoe", availability: "available" },
  { id: "motobatt", name: "Motobatt", href: "/merek/motobatt", availability: "available" },
  { id: "bosch", name: "Bosch", href: "/merek/bosch", availability: "available" },
  { id: "delkor", name: "Delkor", availability: "candidate" },
  { id: "varta", name: "VARTA", availability: "candidate" },
  { id: "furukawa", name: "Furukawa Battery", availability: "candidate" },
  { id: "tianneng", name: "Tianneng", availability: "candidate" },
];

export const availableBatteryBrands = batteryBrands.filter(
  (brand) => brand.availability === "available"
);

export const candidateBatteryBrands = batteryBrands.filter(
  (brand) => brand.availability === "candidate"
);
