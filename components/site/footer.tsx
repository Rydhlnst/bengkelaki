import Link from "next/link";
import {
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Logo } from "@/components/site/logo";
import { business } from "@/config/business";
import { brands } from "@/data/brands";
import { areas } from "@/data/areas";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col gap-4">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {business.name} adalah toko dan bengkel aki di {business.city} yang
            menyediakan pilihan aki mobil dan motor serta layanan pemeriksaan
            dan pemasangan aki.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={waLink(waGeneralMessage())}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp"
              className="grid size-9 place-items-center rounded-sm bg-white/10 transition-colors hover:bg-white/20"
            >
              <MessageCircleIcon className="size-4" />
            </a>
            <a
              href={`tel:${business.phoneIntl}`}
              aria-label="Telepon toko"
              className="grid size-9 place-items-center rounded-sm bg-white/10 transition-colors hover:bg-white/20"
            >
              <PhoneIcon className="size-4" />
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-sm bg-white/10 transition-colors hover:bg-white/20"
            >
              <InstagramGlyph className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Katalog produk">
          <h2 className="text-xs font-extrabold tracking-[0.18em] text-white/50 uppercase">
            Katalog
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/aki-mobil" className="text-white/80 transition-colors hover:text-white">
                Aki Mobil
              </Link>
            </li>
            <li>
              <Link href="/aki-motor" className="text-white/80 transition-colors hover:text-white">
                Aki Motor
              </Link>
            </li>
            <li>
              <Link href="/produk" className="text-white/80 transition-colors hover:text-white">
                Semua Produk
              </Link>
            </li>
            <li>
              <Link
                href="/produk?tipe=mf"
                className="text-white/80 transition-colors hover:text-white"
              >
                Aki Kering / MF
              </Link>
            </li>
            <li>
              <Link
                href="/produk?tipe=basah"
                className="text-white/80 transition-colors hover:text-white"
              >
                Aki Basah
              </Link>
            </li>
            <li>
              <Link href="/layanan" className="text-white/80 transition-colors hover:text-white">
                Layanan Bengkel
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Merek dan area layanan">
          <h2 className="text-xs font-extrabold tracking-[0.18em] text-white/50 uppercase">
            Merek Aki
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {brands.map((brand) => (
              <li key={brand.slug}>
                <Link
                  href={`/merek/${brand.slug}`}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Aki {brand.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-xs font-extrabold tracking-[0.18em] text-white/50 uppercase">
            Area Layanan
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/area/${area.slug}`}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-extrabold tracking-[0.18em] text-white/50 uppercase">
            Kontak &amp; Jam Buka
          </h2>
          <ul className="mt-4 flex flex-col gap-3.5 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-white/50" />
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {business.address}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-white/50" />
              <a
                href={`tel:${business.phoneIntl}`}
                className="transition-colors hover:text-white"
              >
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircleIcon className="mt-0.5 size-4 shrink-0 text-white/50" />
              <a
                href={waLink(waGeneralMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Chat WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <ClockIcon className="mt-0.5 size-4 shrink-0 text-white/50" />
              <div className="flex flex-col gap-1">
                {business.hours.map((h) => (
                  <span key={h.day}>
                    {h.day}: {h.time}
                  </span>
                ))}
              </div>
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <Link href="/kebijakan-privasi" className="text-white/60 transition-colors hover:text-white">
              Kebijakan Privasi
            </Link>
            <Link href="/tentang" className="text-white/60 transition-colors hover:text-white">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Seluruh hak cipta.
          </p>
          <p>
            Toko &amp; bengkel aki mobil motor di {business.city} dan
            sekitarnya.
          </p>
        </div>
      </div>
    </footer>
  );
}
