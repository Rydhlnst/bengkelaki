import Link from "next/link";
import { MessageCircleIcon, ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BatteryArt } from "@/components/site/battery-art";
import { getBrand } from "@/data/brands";
import { batteryTypeLabels, type Product } from "@/data/products";
import { formatIDR } from "@/lib/format";
import { waProductMessage, waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const brand = getBrand(product.brandSlug);
  const compat = product.compatibleVehicles.slice(0, 3).join(", ");
  const hasMore = product.compatibleVehicles.length > 3;

  return (
    <Card
      className={cn(
        "group flex flex-col gap-0 overflow-hidden rounded-2xl border bg-card py-0 shadow-none transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="relative m-2 overflow-hidden rounded-xl bg-muted">
        <Link
          href={`/produk/${product.slug}`}
          aria-label={`Lihat detail ${product.name}`}
          tabIndex={-1}
        >
          <BatteryArt product={product} className="aspect-[4/3] object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105" />
        </Link>
        <div className="absolute top-2 left-2 flex flex-col items-start gap-1">
          {product.originalPrice ? (
            <Badge className="bg-brand-yellow px-1.5 py-0.5 text-[10px] font-extrabold text-foreground">
              Promo
            </Badge>
          ) : null}
          {product.popular ? (
            <Badge className="bg-brand-dark px-1.5 py-0.5 text-[10px] font-extrabold text-white">
              Paling Dicari
            </Badge>
          ) : null}
        </div>
        {product.stock === "terbatas" ? (
          <Badge className="absolute right-2 bottom-2 bg-background/90 px-1.5 py-0.5 text-[10px] font-bold text-foreground backdrop-blur">
            Stok Terbatas
          </Badge>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-extrabold tracking-[0.14em] text-muted-foreground uppercase">
            {brand?.name ?? product.brandSlug}
          </span>
          <span
            className={cn(
              "flex items-center gap-1 text-[11px] font-bold",
              product.stock === "tersedia" ? "text-emerald-700" : "text-amber-700"
            )}
          >
            <span
              aria-hidden
              className={cn(
                "size-1.5 rounded-full",
                product.stock === "tersedia" ? "bg-emerald-600" : "bg-amber-500"
              )}
            />
            {product.stock === "tersedia" ? "Ready" : "Stok Terbatas"}
          </span>
        </div>

        <h3 className="text-base font-extrabold tracking-tight">
          <Link href={`/produk/${product.slug}`} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs font-semibold text-muted-foreground">
          {product.voltage} • {product.capacity} •{" "}
          {batteryTypeLabels[product.batteryType]}
        </p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground/70">Cocok untuk:</span>{" "}
          {compat}
          {hasMore ? " dan sejenisnya" : ""}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-2">
          <div>
            <span className="block text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
              Harga
            </span>
            <span className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                {formatIDR(product.price)}
              </span>
              {product.originalPrice ? (
                <span className="text-xs text-muted-foreground line-through">
                  {formatIDR(product.originalPrice)}
                </span>
              ) : null}
            </span>
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm" className="flex-1">
              <Link href={`/produk/${product.slug}`}>
                Lihat Detail
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              aria-label={`Tanya ${product.name} via WhatsApp`}
              className="px-2.5"
            >
              <a
                href={waLink(waProductMessage(product))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleIcon />
                <span className="sr-only sm:not-sr-only">Tanya</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
