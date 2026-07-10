"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NAV_LINKS } from "@/lib/data";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "relative z-50 mx-auto flex h-16 max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled
            ? "mt-3 max-w-6xl rounded-full border border-paper/10 bg-ink/70 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "mt-0 border border-transparent bg-transparent"
        )}
      >
        {/* Brand — logo mark immediately left of the wordmark */}
        <a
          href="#home"
          aria-label={`${SITE.brand} — inicio`}
          className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-[0.18em]"
        >
          <BrandLogo priority size={80} className="h-9 w-9 sm:h-10 sm:w-10" />
          {SITE.brand}
        </a>

        {/* Centered navigation (desktop) */}
        <nav
          aria-label="Navegación principal"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-paper/70 transition-colors duration-300 hover:bg-paper/5 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-ivory px-6 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-ivory/90 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] active:scale-[0.97] sm:inline-flex"
          >
            Hablemos
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors hover:bg-paper/5 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              aria-label="Navegación móvil"
              className="flex h-full flex-col items-center justify-center gap-2"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="rounded-full px-6 py-3 font-display text-2xl font-medium text-paper/80 transition-colors hover:text-paper"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-6 rounded-full bg-ivory px-8 py-3.5 text-sm font-semibold text-ink"
              >
                Hablemos
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
