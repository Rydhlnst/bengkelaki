"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClockIcon,
  MapPinIcon,
  MenuIcon,
  WhatsAppIcon,
  PhoneIcon,
  SearchIcon,
} from "@/lib/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { business } from "@/config/business";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";
import { cn } from "cn";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Aki Mobil", href: "/aki-mobil" },
  { label: "Aki Motor", href: "/aki-motor" },
  { label: "Semua Produk", href: "/produk" },
  { label: "Layanan", href: "/layanan" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/85">
      {/* utility bar — desktop only */}
      <div className="hidden bg-brand-dark text-white md:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 px-4 text-xs">
          <div className="flex min-w-0 items-center gap-5">
            <span className="flex min-w-0 items-center gap-1.5">
              <MapPinIcon className="size-3.5 shrink-0 text-white/60" />
              <span className="truncate">{business.addressShort}</span>
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <ClockIcon className="size-3.5 shrink-0 text-white/60" />
              <span>
                {business.hours[0].day} {business.hours[0].time}
              </span>
            </span>
          </div>
          <a
            href={`tel:${business.phoneIntl}`}
            className="flex shrink-0 items-center gap-1.5 font-semibold transition-colors hover:text-white/80"
          >
            <PhoneIcon className="size-3.5 shrink-0 text-white/60" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      {/* main bar */}
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4">
        <Logo />

        <nav aria-label="Navigasi utama" className="hidden items-center lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-xs font-semibold transition-colors",
                isActive(pathname, item.href)
                  ? "bg-primary/8 text-primary"
                  : "text-foreground/75 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <Button
            asChild
            variant="ghost"
            size="icon-sm"
            aria-label="Cari produk aki"
            className="text-foreground"
          >
            <Link href="/produk">
              <SearchIcon />
            </Link>
          </Button>
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <a href={waLink(waGeneralMessage())} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Konsultasi Aki
            </a>
          </Button>

          {/* mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-sm"
                className="lg:hidden"
                aria-label="Buka menu navigasi"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs gap-0 p-0 sm:max-w-xs">
              <SheetHeader className="border-b p-5">
                <SheetTitle className="text-base">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Navigasi seluler" className="flex flex-col p-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-sm px-3 py-3 text-sm font-semibold transition-colors",
                      isActive(pathname, item.href)
                        ? "bg-muted text-primary"
                        : "text-foreground/80 hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2.5 border-t p-5">
                <Button asChild className="w-full">
                  <a
                    href={waLink(waGeneralMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    Tanya Aki yang Cocok
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={`tel:${business.phoneIntl}`}>
                    <PhoneIcon />
                    {business.phoneDisplay}
                  </a>
                </Button>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {business.addressShort}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
