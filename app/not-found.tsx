import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { business } from "@/config/business";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-20 md:items-center md:py-28 md:text-center">
      <p className="text-7xl font-extrabold tracking-tight text-primary">404</p>
      <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        Halaman yang Anda cari tidak ada atau sudah dipindahkan. Coba cari aki
        dari layanan aki darurat, atau hubungi teknisi kami langsung.
      </p>
      <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/produk">
            Cari Aki
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full border-foreground/20 sm:w-auto">
          <a
            href={waLink(waGeneralMessage())}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Chat WhatsApp
          </a>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        {business.name} — layanan aki darurat di {business.city}
      </p>
    </div>
  );
}
