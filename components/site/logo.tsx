import Link from "next/link";
import { ZapIcon } from "lucide-react";
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
      className={cn("flex shrink-0 items-center gap-2.5", className)}
      aria-label={`${business.name} — beranda`}
    >
      <span
        aria-hidden
        className="grid size-9 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground"
      >
        <ZapIcon className="size-5" />
      </span>
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
