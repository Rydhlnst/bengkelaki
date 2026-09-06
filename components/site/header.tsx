"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClockIcon, MapPinIcon, MenuIcon, WhatsAppIcon, PhoneIcon, SearchIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { business } from "@/config/business";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";
import { cn } from "cn";

const navItems = [{ label: "Beranda", href: "/" }, { label: "Layanan", href: "/layanan" }, { label: "Area Jakarta", href: "/area/jakarta-pusat" }, { label: "Aki Mobil", href: "/aki-mobil" }, { label: "Aki Motor", href: "/aki-motor" }, { label: "Produk", href: "/produk" }, { label: "Tentang", href: "/tentang" }];
function isActive(pathname: string, href: string) { return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`); }

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/90">
    <div className="hidden bg-brand-dark text-white md:block"><div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 px-4 text-xs"><div className="flex min-w-0 items-center gap-5"><span className="flex min-w-0 items-center gap-1.5"><MapPinIcon className="size-3.5 shrink-0 text-brand-yellow" /><span className="truncate">Jakarta</span></span><span className="hidden items-center gap-1.5 lg:flex"><ClockIcon className="size-3.5 shrink-0 text-brand-yellow" />24 Jam Non-Stop</span></div><a href={`tel:${business.phoneIntl}`} className="flex shrink-0 items-center gap-1.5 font-semibold hover:text-brand-yellow"><PhoneIcon className="size-3.5 text-brand-yellow" />{business.phoneDisplay}</a></div></div>
    <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4"><Logo /><nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} className={cn("flex min-h-11 items-center rounded-full px-5 py-3 text-xs font-semibold", isActive(pathname, item.href) ? "bg-brand-red text-white" : "text-foreground/75 hover:bg-brand-red/10 hover:text-brand-red")}>{item.label}</Link>)}</nav><div className="flex shrink-0 items-center gap-1.5"><Button asChild variant="ghost" size="icon-sm" aria-label="Cari produk aki"><Link href="/produk"><SearchIcon /></Link></Button><Button asChild size="sm" className="hidden bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 lg:inline-flex"><a href={waLink(waGeneralMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Hubungi Teknisi</a></Button><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="outline" size="icon-sm" className="lg:hidden" aria-label="Buka menu navigasi"><MenuIcon /></Button></SheetTrigger><SheetContent side="right" className="w-full max-w-xs gap-0 p-0 sm:max-w-xs"><SheetHeader className="border-b bg-brand-dark p-5 text-left"><Logo inverted /><SheetTitle className="sr-only">Navigasi {business.name}</SheetTitle><p className="text-[10px] font-black tracking-[0.18em] text-brand-yellow uppercase">Navigasi Jakarta</p></SheetHeader><nav aria-label="Navigasi seluler" className="flex flex-col gap-1 p-3">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cn("flex min-h-12 items-center rounded-lg px-4 py-3.5 text-sm font-semibold", isActive(pathname, item.href) ? "bg-brand-red/10 text-brand-red" : "text-foreground/80 hover:bg-brand-red/5 hover:text-brand-red")}>{item.label}</Link>)}</nav><div className="mt-auto flex flex-col gap-3 border-t p-5"><Button asChild className="h-auto min-h-11 w-full bg-brand-yellow py-3 text-brand-dark hover:bg-brand-yellow/90"><a href={waLink(waGeneralMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Hubungi Teknisi</a></Button><Button asChild variant="outline" className="h-auto min-h-11 w-full border-brand-red py-3 text-brand-red hover:bg-brand-red/10"><a href={`tel:${business.phoneIntl}`}><PhoneIcon />{business.phoneDisplay}</a></Button><p className="mt-1 text-xs leading-relaxed text-muted-foreground">24 Jam Siap Melayani · Jakarta</p></div></SheetContent></Sheet></div></div>
  </header>;
}
