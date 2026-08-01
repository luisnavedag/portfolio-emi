import { contact } from '../data/site'

/**
 * Acceso directo a WhatsApp, siempre a mano.
 * En pantallas chicas sube para no taparse con el rail del pie.
 */
export default function WhatsAppFab() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Escribir por WhatsApp al ${contact.whatsapp}`}
      className="group fixed right-4 bottom-16 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-amber pr-0 text-ink shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition-[padding,background-color] duration-300 hover:bg-bone sm:right-6 lg:bottom-8"
    >
      <span className="flex h-13 w-13 shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.85-.86 2.06 0 1.22.88 2.39 1 2.56.12.16 1.72 2.63 4.17 3.69.58.25 1.04.4 1.39.51.53.17 1 .15 1.37.09.42-.06 1.3-.53 1.48-1.05.18-.51.18-.95.13-1.04-.05-.09-.19-.15-.44-.27Z" />
        </svg>
      </span>
      <span className="max-w-0 font-mono text-[11px] tracking-[0.12em] whitespace-nowrap uppercase opacity-0 transition-[max-width,opacity,padding] duration-300 group-hover:max-w-[8rem] group-hover:pr-5 group-hover:opacity-100 max-lg:hidden">
        Escribime
      </span>
    </a>
  )
}
