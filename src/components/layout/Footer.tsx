"use client";

import { ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { CONTACT, SITE } from "@/lib/site-config";

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: CONTACT.instagram },
  { icon: MessageCircle, label: "WhatsApp", href: CONTACT.whatsapp },
  { icon: Mail, label: "Correo", href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Ubicación", href: CONTACT.mapsLink },
];

export function Footer() {
  return (
    <footer className="border-t border-paper/10 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-[0.18em]"
          >
            {SITE.brand}
          </a>
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} {SITE.brand} — {SITE.architect}. Todos
            los derechos reservados.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-2">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-all duration-300 hover:border-paper/50 hover:text-paper"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>

          <span aria-hidden className="mx-1 h-6 w-px bg-paper/10" />

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Volver arriba"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
