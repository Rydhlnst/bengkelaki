"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_HOSTS = new Set(["wa.me", "api.whatsapp.com", "web.whatsapp.com"]);

function getContactMethod(href: string): "phone" | "whatsapp" | null {
  if (href.startsWith("tel:")) return "phone";

  try {
    const url = new URL(href, window.location.origin);
    return WHATSAPP_HOSTS.has(url.hostname.toLowerCase()) ? "whatsapp" : null;
  } catch {
    return null;
  }
}

export function GoogleAdsTracking() {
  useEffect(() => {
    function handleContactClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href");
      if (!href || typeof window.gtag !== "function") return;

      const contactMethod = getContactMethod(href);
      if (!contactMethod) return;

      window.gtag("event", "contact_click", {
        contact_method: contactMethod,
      });
    }

    document.addEventListener("click", handleContactClick);
    return () => document.removeEventListener("click", handleContactClick);
  }, []);

  return null;
}
