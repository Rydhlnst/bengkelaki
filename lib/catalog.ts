import type { BatteryType, Product, VehicleType } from "@/data/products";

export type SortOption = "relevan" | "termurah" | "termahal";

export type CatalogFilters = {
  q: string;
  vehicleType: VehicleType | "all";
  batteryTypes: BatteryType[];
  brands: string[];
  model: string;
  sort: SortOption;
};

export function filterProducts(
  products: Product[],
  { q, vehicleType, batteryTypes, brands, model, sort }: CatalogFilters
): Product[] {
  const query = q.trim().toLowerCase();

  const filtered = products.filter((p) => {
    if (vehicleType !== "all" && p.vehicleType !== vehicleType) return false;
    if (batteryTypes.length > 0 && !batteryTypes.includes(p.batteryType)) return false;
    if (brands.length > 0 && !brands.includes(p.brandSlug)) return false;
    if (model) {
      const m = model.toLowerCase();
      const matched = p.compatibleVehicles.some((v) => v.toLowerCase().includes(m));
      if (!matched && !p.name.toLowerCase().includes(m)) return false;
    }
    if (query) {
      const haystack = [
        p.name,
        p.shortDescription,
        p.voltage,
        p.capacity,
        ...p.compatibleVehicles,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  const byPrice: Record<SortOption, (a: Product, b: Product) => number> = {
    relevan: () => 0,
    termurah: (a, b) => a.price - b.price,
    termahal: (a, b) => b.price - a.price,
  };

  if (sort === "relevan") {
    return filtered.sort(
      (a, b) =>
        Number(b.popular ?? false) - Number(a.popular ?? false) ||
        Number(b.featured ?? false) - Number(a.featured ?? false)
    );
  }
  return filtered.sort(byPrice[sort]);
}
