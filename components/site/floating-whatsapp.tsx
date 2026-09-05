import { MessageCircleIcon } from "lucide-react";
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
      className="group fixed right-4 bottom-[4.75rem] z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-extrabold text-[#073b1d] shadow-[0_10px_28px_rgba(37,211,102,0.28)] transition-all hover:-translate-y-1 hover:bg-[#20bd5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:right-6 md:bottom-6"
    >
      <span className="relative grid size-7 place-items-center rounded-full bg-white/90">
        <MessageCircleIcon className="size-4" aria-hidden />
        <span
          aria-hidden
          className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-white ring-2 ring-[#25D366]"
        />
      </span>
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
