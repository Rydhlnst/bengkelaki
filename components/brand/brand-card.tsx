import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { referenceMedia } from "@/data/reference-media";
import type { BatteryBrand } from "@/data/battery-brands";

export function BrandCard({ brand }: { brand: BatteryBrand }) {
  const media = referenceMedia.brands[brand.id as keyof typeof referenceMedia.brands];
  const content = (
    <CardContent className="flex min-h-40 flex-col items-center justify-center gap-4 p-5 text-center">
      <div className="flex h-16 w-full items-center justify-center">
        {media ? (
          <Image
            src={media.src}
            alt={media.alt}
            width={180}
            height={64}
            className="h-16 w-auto max-w-44 object-contain"
          />
        ) : (
          <span className="text-sm font-black tracking-wide uppercase">{brand.name}</span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">{brand.name}</p>
        {brand.availability === "candidate" ? (
          <span className="text-[10px] text-muted-foreground">Konfirmasi ketersediaan</span>
        ) : null}
      </div>
    </CardContent>
  );

  return brand.href ? (
    <Link href={brand.href} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
      <Card className="border bg-card py-0 shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-md">
        {content}
      </Card>
    </Link>
  ) : (
    <Card className="border bg-card py-0 shadow-sm">{content}</Card>
  );
}
