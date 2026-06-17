import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/clinic";

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.262.598 4.473 1.732 6.42L3.2 28.8l6.59-1.72A12.78 12.78 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16.001 3.2Zm0 23.36c-2.01 0-3.98-.54-5.7-1.56l-.41-.24-3.91 1.02 1.04-3.81-.27-.42a10.55 10.55 0 0 1-1.62-5.55c0-5.83 4.74-10.56 10.57-10.56 5.82 0 10.56 4.73 10.56 10.56 0 5.82-4.73 10.56-10.56 10.56Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.77-2.19-.18-.32-.02-.5.14-.66.15-.15.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.6 0 1.53 1.13 3.01 1.29 3.22.16.21 2.23 3.4 5.4 4.77.76.33 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  );
}

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Diwasha Dental on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-4 py-3 text-sm font-medium text-white shadow-lg whatsapp-pulse transition-all duration-500 hover:scale-105 md:bottom-7 md:right-7 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppGlyph className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
