"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { WhatsAppIcon, SearchIcon, SlidersHorizontalIcon, XIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "@/components/shop/product-card";
import { brands } from "@/data/brands";
import type { BatteryType, Product, VehicleType } from "@/data/products";
import { filterProducts, type SortOption } from "@/lib/catalog";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";
import { cn } from "cn";

type Props = { products: Product[] };

export function Catalog({ products }: Props) {
  const sp = useSearchParams();
  const initialBrand = sp.get("merek");
  const initialType = sp.get("tipe");

  const [query, setQuery] = useState(sp.get("q") ?? "");
  const [vehicleType, setVehicleType] = useState<VehicleType | "all">(
    (sp.get("jenis") as VehicleType) ?? "all"
  );
  const [batteryTypes, setBatteryTypes] = useState<BatteryType[]>(
    initialType === "mf" || initialType === "basah" ? [initialType] : []
  );
  const [brandFilter, setBrandFilter] = useState<string[]>(
    initialBrand ? [initialBrand] : []
  );
  const [model, setModel] = useState(sp.get("model") ?? "");
  const [sort, setSort] = useState<SortOption>(
    (sp.get("urutkan") as SortOption) ?? "relevan"
  );
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(
    () =>
      filterProducts(products, {
        q: query,
        vehicleType,
        batteryTypes,
        brands: brandFilter,
        model,
        sort,
      }),
    [products, query, vehicleType, batteryTypes, brandFilter, model, sort]
  );

  const activeFilterCount =
    (vehicleType !== "all" ? 1 : 0) +
    batteryTypes.length +
    brandFilter.length +
    (model ? 1 : 0);

  function resetFilters() {
    setQuery("");
    setVehicleType("all");
    setBatteryTypes([]);
    setBrandFilter([]);
    setModel("");
    setSort("relevan");
  }

  const filterPanel = (
    <div className="flex flex-col gap-6">
      <fieldset>
        <legend className="mb-2.5 text-xs font-extrabold tracking-[0.14em] text-muted-foreground uppercase">
          Jenis Kendaraan
        </legend>
        <div className="flex flex-col gap-2.5">
          {(
            [
              { value: "all", label: "Semua" },
              { value: "mobil", label: "Mobil" },
              { value: "motor", label: "Motor" },
            ] as const
          ).map(({ value, label }) => (
            <button
              key={value}
              type="button"
              aria-pressed={vehicleType === value}
              onClick={() => setVehicleType(value)}
              className={cn(
                "flex h-10 items-center rounded-sm border px-3.5 text-sm font-bold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                vehicleType === value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:bg-muted"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2.5 text-xs font-extrabold tracking-[0.14em] text-muted-foreground uppercase">
          Jenis Aki
        </legend>
        <div className="flex flex-col gap-3">
          {(
            [
              { value: "mf", label: "Maintenance Free" },
              { value: "basah", label: "Aki Basah" },
            ] as const
          ).map(({ value, label }) => (
            <div key={value} className="flex items-center gap-2.5">
              <Checkbox
                id={`tipe-${value}`}
                checked={batteryTypes.includes(value)}
                onCheckedChange={(checked) =>
                  setBatteryTypes((prev) =>
                    checked ? [...prev, value] : prev.filter((v) => v !== value)
                  )
                }
              />
              <Label htmlFor={`tipe-${value}`} className="text-sm font-medium">
                {label}
              </Label>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2.5 text-xs font-extrabold tracking-[0.14em] text-muted-foreground uppercase">
          Merek Aki
        </legend>
        <div className="flex flex-col gap-3">
          {brands.map((brand) => {
            const count = products.filter((p) => p.brandSlug === brand.slug).length;
            return (
              <div key={brand.slug} className="flex items-center gap-2.5">
                <Checkbox
                  id={`brand-${brand.slug}`}
                  checked={brandFilter.includes(brand.slug)}
                  onCheckedChange={(checked) =>
                    setBrandFilter((prev) =>
                      checked
                        ? [...prev, brand.slug]
                        : prev.filter((v) => v !== brand.slug)
                    )
                  }
                />
                <Label
                  htmlFor={`brand-${brand.slug}`}
                  className="flex w-full items-center justify-between gap-2 text-sm font-medium"
                >
                  {brand.name}
                  <span className="text-xs text-muted-foreground">{count}</span>
                </Label>
              </div>
            );
          })}
        </div>
      </fieldset>

      {activeFilterCount > 0 ? (
        <Button variant="outline" size="sm" onClick={resetFilters} className="self-start">
          <XIcon />
          Hapus Filter
        </Button>
      ) : null}
    </div>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
      <aside className="hidden lg:block" aria-label="Filter produk">
        <div className="sticky top-32 flex flex-col gap-6 rounded-md border bg-card p-5">
          {filterPanel}
        </div>
      </aside>

      <div className="flex min-w-0 flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative w-full min-w-0 basis-full sm:flex-1 sm:basis-auto">
            <SearchIcon
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari tipe aki atau kendaraan, mis. NS40 / Avanza…"
              aria-label="Cari produk"
              className="border border-input bg-background pr-3 pl-9"
            />
          </div>
          <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
            <SelectTrigger
              aria-label="Urutkan produk"
              className="w-44 shrink-0 border border-input bg-background px-3"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="relevan">Paling Relevan</SelectItem>
              <SelectItem value="termurah">Harga Terendah</SelectItem>
              <SelectItem value="termahal">Harga Tertinggi</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="lg:hidden"
            aria-expanded={showFilters}
            onClick={() => setShowFilters((v) => !v)}
          >
            <SlidersHorizontalIcon />
            Filter
            {activeFilterCount > 0 ? (
              <Badge className="ml-1 grid size-5 place-items-center rounded-full bg-primary p-0 text-[10px] text-white">
                {activeFilterCount}
              </Badge>
            ) : null}
          </Button>
        </div>

        {showFilters ? (
          <div className="rounded-md border bg-card p-5 lg:hidden">{filterPanel}</div>
        ) : null}

        {model ? (
          <p className="text-sm text-muted-foreground">
            Menampilkan aki untuk kendaraan{" "}
            <span className="font-bold text-foreground">“{model}”</span>.{" "}
            <button
              type="button"
              onClick={() => setModel("")}
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              <XIcon className="size-3.5" aria-hidden />
              Hapus
            </button>
          </p>
        ) : null}

        <p aria-live="polite" className="text-sm text-muted-foreground">
          Menampilkan <span className="font-bold text-foreground">{filtered.length}</span>{" "}
          dari {products.length} produk
        </p>

        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-md border border-dashed bg-muted p-8 sm:items-center sm:text-center">
            <h2 className="text-lg font-extrabold tracking-tight">
              Aki yang Anda cari belum ada di katalog
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Stok toko kami lebih banyak dari yang tampil di website. Kirim
              tipe kendaraan Anda, kami cek ketersediaannya langsung dari toko.
            </p>
            <Button asChild size="lg">
              <a
                href={waLink(waGeneralMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Tanya Aki yang Cocok
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
