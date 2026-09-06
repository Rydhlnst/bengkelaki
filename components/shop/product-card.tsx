import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getBrand } from "@/data/brands";
import { getProductReferenceImage } from "@/data/reference-media";
import { batteryTypeLabels, type Product } from "@/data/products";
import { formatIDR } from "@/lib/format";
import { waProductMessage, waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const brand = getBrand(product.brandSlug);
  const media = getProductReferenceImage(product.brandSlug, product.vehicleType);
  const compat = product.compatibleVehicles.slice(0, 3).join(", ");
  const hasMore = product.compatibleVehicles.length > 3;

  return (
    <Card className={cn("group flex flex-col gap-0 overflow-hidden bg-card py-0 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg", className)}>
      <Link href={"/produk/" + product.slug} className="relative block aspect-[4/3] overflow-hidden bg-white">
        {media ? <Image src={media.src} alt={media.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center bg-brand-dark text-4xl font-black text-brand-yellow">{product.capacity}</div>}
        <span className="absolute top-3 left-3 rounded-full bg-brand-dark px-2.5 py-1 text-[10px] font-black text-white uppercase">{product.vehicleType === "mobil" ? "Aki Mobil" : "Aki Motor"}</span>
      </Link>
      <CardContent className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2"><span className="text-[10px] font-black tracking-[0.14em] text-brand-red uppercase">{brand?.name ?? product.brandSlug}</span><Badge className={product.stock === "tersedia" ? "bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-800" : "bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800"}>{product.stock === "tersedia" ? "Ready" : "Stok Terbatas"}</Badge></div>
        <h3 className="text-lg font-black tracking-tight"><Link href={"/produk/" + product.slug} className="hover:text-primary">{product.name}</Link></h3>
        <p className="text-xs font-semibold text-muted-foreground">{product.voltage} · {product.capacity} · {batteryTypeLabels[product.batteryType]}</p>
        <p className="text-xs leading-relaxed text-muted-foreground"><span className="font-bold text-foreground">Cocok untuk:</span> {compat}{hasMore ? " dan sejenisnya" : ""}</p>
        <div className="mt-auto pt-4"><p className="text-lg font-black">{formatIDR(product.price)}</p><div className="mt-3 flex gap-2"><Button asChild size="sm" className="flex-1"><Link href={"/produk/" + product.slug}>Detail <ArrowRightIcon data-icon="inline-end" /></Link></Button><Button asChild size="sm" variant="outline" aria-label={"Tanya " + product.name + " via WhatsApp"} className="px-2.5"><a href={waLink(waProductMessage(product))} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span className="sr-only sm:not-sr-only">Tanya</span></a></Button></div></div>
      </CardContent>
    </Card>
  );
}
