import Link from "next/link";
import { business } from "@/config/business";
import { cn } from "cn";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex shrink-0 items-center", className)}
      aria-label={`${business.name} — beranda`}
    >
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "truncate text-lg font-extrabold tracking-tight",
            inverted ? "text-white" : "text-foreground"
          )}
        >
          {business.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-bold tracking-[0.14em] uppercase",
            inverted ? "text-white/60" : "text-muted-foreground"
          )}
        >
          Toko &amp; Bengkel Aki
        </span>
      </span>
    </Link>
  );
}
