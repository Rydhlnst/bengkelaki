"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BikeIcon,
  CarIcon,
  WhatsAppIcon,
  SearchIcon,
} from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getVehicleBrands } from "@/data/vehicles";
import type { VehicleType } from "@/data/products";
import { waFinderMessage, waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function BatteryFinder() {
  const [vehicleType, setVehicleType] = useState<VehicleType>("mobil");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const brandOptions = useMemo(() => getVehicleBrands(vehicleType), [vehicleType]);
  const modelOptions = useMemo(
    () => brandOptions.find((b) => b.slug === brand)?.models ?? [],
    [brandOptions, brand]
  );

  const params = new URLSearchParams();
  params.set("jenis", vehicleType);
  // "merek" filters battery brands in the catalog, not vehicle manufacturers.
  const vehicleBrandName = brandOptions.find((option) => option.slug === brand)?.name;
  if (vehicleBrandName) params.set("model", vehicleBrandName);
  if (model) params.set("model", model);
  if (query.trim()) params.set("q", query.trim());

  const waMessage = waLink(
    waFinderMessage({
      vehicleType: vehicleType === "mobil" ? "Mobil" : "Motor",
      vehicleBrand: brandOptions.find((b) => b.slug === brand)?.name,
      model,
    })
  );

  return (
    <Card className="gap-0 rounded-2xl border border-primary/15 bg-card p-5 shadow-[0_12px_48px_-20px_rgba(8,124,145,0.25)] md:p-8">
      <div className="grid gap-4 lg:grid-cols-[auto_1fr_1fr_auto] lg:items-end">
        <fieldset>
          <legend className="mb-1.5 text-xs font-extrabold tracking-[0.14em] text-muted-foreground uppercase">
            Jenis Kendaraan
          </legend>
          <div className="flex gap-2">
            {(
              [
                { value: "mobil", label: "Mobil", Icon: CarIcon },
                { value: "motor", label: "Motor", Icon: BikeIcon },
              ] as const
            ).map(({ value, label, Icon }) => (
              <Button
                key={value}
                type="button"
                aria-pressed={vehicleType === value}
                onClick={() => {
                  setVehicleType(value);
                  setBrand("");
                  setModel("");
                }}
                className={cn(
                  "flex h-11 flex-1 items-center justify-center gap-2 rounded-sm border px-5 text-sm font-bold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:flex-none",
                  vehicleType === value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:bg-muted"
                )}
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </Button>
            ))}
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="finder-brand"
            className="mb-1.5 block text-xs font-extrabold tracking-[0.14em] text-muted-foreground uppercase"
          >
            Merek Kendaraan
          </label>
          <Select
            value={brand}
            onValueChange={(v) => {
              setBrand(v);
              setModel("");
            }}
          >
            <SelectTrigger id="finder-brand" size="default" className="w-full border border-input bg-background px-3">
              <SelectValue placeholder="Pilih merek" />
            </SelectTrigger>
            <SelectContent position="popper">
              {brandOptions.map((b) => (
                <SelectItem key={b.slug} value={b.slug}>
                  {b.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            htmlFor="finder-model"
            className="mb-1.5 block text-xs font-extrabold tracking-[0.14em] text-muted-foreground uppercase"
          >
            Model Kendaraan{" "}
            <span className="font-semibold normal-case opacity-70">(opsional)</span>
          </label>
          <Select value={model} onValueChange={setModel} disabled={!brand}>
            <SelectTrigger id="finder-model" size="default" className="w-full border border-input bg-background px-3">
              <SelectValue placeholder={brand ? "Pilih model" : "Pilih merek dulu"} />
            </SelectTrigger>
            <SelectContent position="popper">
              {modelOptions.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button asChild size="lg" className="h-11 w-full lg:w-auto">
          <Link href={`/produk?${params.toString()}`}>
            <SearchIcon />
            Cari Aki yang Cocok
          </Link>
        </Button>
      </div>

      <div className="mt-4 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Atau ketik nama aki, mis. NS40…"
            aria-label="Cari tipe aki"
            className="border border-input bg-background px-3"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Tidak yakin tipenya?{" "}
          <a
            href={waMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
          >
            <WhatsAppIcon className="size-3.5" aria-hidden />
            Tanya via WhatsApp
          </a>
        </p>
      </div>
    </Card>
  );
}
