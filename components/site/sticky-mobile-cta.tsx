import { WhatsAppIcon, PhoneIcon } from "@/lib/icons";
import { business } from "@/config/business";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div
        className="grid grid-cols-2 divide-x divide-brand-dark/10 border-t bg-white shadow-[0_-8px_24px_rgba(7,17,31,0.12)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={waLink(waGeneralMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 items-center justify-center gap-2 bg-brand-yellow px-3 text-brand-dark transition-colors active:bg-brand-yellow/80"
          aria-label="Chat WhatsApp"
        >
          <WhatsAppIcon className="size-5" aria-hidden />
          <span className="text-xs font-black">WhatsApp</span>
        </a>
        <a
          href={`tel:${business.phoneIntl}`}
          className="flex h-14 items-center justify-center gap-2 bg-brand-red px-3 text-white transition-colors active:bg-brand-red/85"
          aria-label={`Telepon ${business.phoneDisplay}`}
        >
          <PhoneIcon className="size-5" aria-hidden />
          <span className="text-xs font-black">Telepon</span>
        </a>
      </div>
    </div>
  );
}
