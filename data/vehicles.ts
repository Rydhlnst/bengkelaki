import type { VehicleType } from "./products";

export type VehicleBrand = {
  slug: string;
  name: string;
  type: VehicleType;
  models: string[];
};

export const vehicleBrands: VehicleBrand[] = [
  {
    slug: "toyota",
    name: "Toyota",
    type: "mobil",
    models: [
      "Avanza",
      "Rush",
      "Kijang Innova",
      "Calya",
      "Agya",
      "Raize",
      "Fortuner",
      "Camry",
      "Yaris",
      "Hiace",
    ],
  },
  {
    slug: "daihatsu",
    name: "Daihatsu",
    type: "mobil",
    models: ["Xenia", "Terios", "Sigra", "Ayla", "Gran Max", "Sirion", "Rocky"],
  },
  {
    slug: "honda",
    name: "Honda",
    type: "mobil",
    models: ["Brio", "Brio Satya", "Jazz", "City", "Civic", "HR-V", "CR-V", "BR-V", "Mobilio", "Accord"],
  },
  {
    slug: "suzuki",
    name: "Suzuki",
    type: "mobil",
    models: ["Ertiga", "Karimun Wagon R", "APV", "Baleno", "XL7", "Ignis", "Carry"],
  },
  {
    slug: "mitsubishi",
    name: "Mitsubishi",
    type: "mobil",
    models: ["Xpander", "Pajero Sport", "Triton", "Outlander", "L300"],
  },
  {
    slug: "yamaha",
    name: "Yamaha",
    type: "motor",
    models: ["Mio", "Mio Sporty", "Lexi", "NMAX", "Aerox", "Fazzio"],
  },
  {
    slug: "honda-motor",
    name: "Honda",
    type: "motor",
    models: ["BeAT", "Scoopy", "Genio", "Vario 110", "Vario 125", "Vario 150", "PCX 125", "PCX 160", "CB150", "CBR150R"],
  },
  {
    slug: "kawasaki",
    name: "Kawasaki",
    type: "motor",
    models: ["Ninja 250", "Ninja 150", "W175"],
  },
  {
    slug: "suzuki-motor",
    name: "Suzuki",
    type: "motor",
    models: ["GSX150", "Satria FU", "Address"],
  },
];

export function getVehicleBrands(type: VehicleType): VehicleBrand[] {
  return vehicleBrands.filter((v) => v.type === type);
}
