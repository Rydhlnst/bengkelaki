import { MapPinIcon, WhatsAppIcon, PhoneIcon } from "@/lib/icons";
import { business } from "@/config/business";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div
        className="grid grid-cols-3 border-t bg-background shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={waLink(waGeneralMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 flex-col items-center justify-center gap-0.5 bg-[#15803D] text-white"
          aria-label="Chat WhatsApp"
        >
          <WhatsAppIcon className="size-4.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>
        <a
          href={`tel:${business.phoneIntl}`}
          className="flex h-14 flex-col items-center justify-center gap-0.5 bg-brand-dark text-white"
          aria-label={`Telepon ${business.phoneDisplay}`}
        >
          <PhoneIcon className="size-4.5" />
          <span className="text-[11px] font-bold">Telepon</span>
        </a>
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 flex-col items-center justify-center gap-0.5 bg-secondary text-secondary-foreground"
          aria-label="Buka lokasi di Google Maps"
        >
          <MapPinIcon className="size-4.5" />
          <span className="text-[11px] font-bold">Lokasi</span>
        </a>
      </div>
    </div>
  );
}
