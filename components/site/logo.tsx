import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";
import { cn } from "cn";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link href="/" className={cn("flex shrink-0 items-center gap-2", className)} aria-label={`${business.name} — beranda`}>
      <Image src="/images/ui/aki-express-logo.png" alt="" width={56} height={56} className="size-12 object-contain" priority={!inverted} />
      <span className="flex min-w-0 flex-col leading-none">
        <span className={cn("text-lg font-extrabold tracking-tight", inverted ? "text-white" : "text-foreground")}>{business.name}</span>
        <span className={cn("text-[10px] font-bold tracking-[0.14em] uppercase", inverted ? "text-brand-yellow" : "text-brand-red")}>24 Jam Siap Melayani</span>
      </span>
    </Link>
  );
}
