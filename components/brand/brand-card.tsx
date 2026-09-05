import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { BatteryBrand } from "@/data/battery-brands";

export function BrandCard({ brand }: { brand: BatteryBrand }) {
  const content = (
    <CardContent className="flex min-h-32 flex-col items-center justify-center gap-3 p-5 text-center">
      {brand.logo ? (
        <Image
          src={brand.logo}
          alt={brand.alt ?? `Logo ${brand.name}`}
          width={160}
          height={56}
          className="h-14 w-auto max-w-40 object-contain"
        />
      ) : null}
      <span className="text-sm font-extrabold tracking-wide uppercase">
        {brand.name}
      </span>
      {brand.availability === "candidate" ? (
        <span className="text-[10px] text-muted-foreground">
          Konfirmasi ketersediaan
        </span>
      ) : null}
    </CardContent>
  );

  return brand.href ? (
    <Link
      href={brand.href}
      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <Card className="rounded-2xl border bg-card py-0 shadow-none transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
        {content}
      </Card>
    </Link>
  ) : (
    <Card className="rounded-2xl border bg-card py-0 shadow-none">
      {content}
    </Card>
  );
}
