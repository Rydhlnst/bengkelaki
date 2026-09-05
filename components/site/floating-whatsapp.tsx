import { WhatsAppIcon } from "@/lib/icons";
import { business } from "@/config/business";
import { waGeneralMessage, waLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(waGeneralMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat WhatsApp ${business.name} di ${business.phoneDisplay}`}
      title={`WhatsApp ${business.phoneDisplay}`}
      className="fixed right-4 bottom-[4.75rem] z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.28)] transition-all hover:-translate-y-1 hover:bg-[#20bd5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="size-7" aria-hidden />
    </a>
  );
}
