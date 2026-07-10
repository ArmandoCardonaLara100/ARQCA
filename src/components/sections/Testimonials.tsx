"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, Quote, User, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? TESTIMONIALS[openIndex] : null;

  // Close on Escape and lock body scroll while the modal is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section
      id="testimonials"
      aria-label="Testimonios de clientes"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen los Clientes"
        />

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <figure className="flex h-full flex-col rounded-3xl border border-paper/10 bg-graphite/40 p-7 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-400 hover:-translate-y-1.5 hover:border-paper/25 hover:shadow-[0_20px_44px_rgba(0,0,0,0.28)]">
                <Quote
                  className="h-6 w-6 shrink-0 text-paper/25"
                  strokeWidth={1.5}
                  aria-hidden
                />
                {/* Clamped to 6 lines so every card stays compact and equal */}
                <blockquote className="mt-3.5 text-sm leading-relaxed text-paper/60 italic line-clamp-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="mt-4 inline-flex w-fit cursor-pointer items-center gap-1.5 text-xs font-semibold tracking-wide text-paper/70 transition-colors duration-300 hover:text-paper"
                  aria-label={`Leer el testimonio completo de ${testimonial.name}`}
                >
                  Leer completo
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden />
                </button>

                <figcaption className="mt-auto flex items-center gap-3.5 pt-6">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/15 bg-ink"
                  >
                    <User className="h-4 w-4 text-paper/50" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-paper/45">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Full-testimonial modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Testimonio de ${active.name}`}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-accent/90 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setOpenIndex(null)}
          >
            <motion.figure
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full max-w-lg rounded-3xl border border-paper/10 bg-graphite p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Cerrar testimonio"
                className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors duration-300 hover:border-paper/40 hover:text-paper"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>

              <Quote
                className="h-8 w-8 text-paper/25"
                strokeWidth={1.5}
                aria-hidden
              />
              <blockquote className="mt-5 max-h-[50vh] overflow-y-auto pr-2 text-base leading-relaxed text-paper/80 italic">
                &ldquo;{active.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-paper/10 pt-6">
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/15 bg-ink"
                >
                  <User className="h-4.5 w-4.5 text-paper/50" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {active.name}
                  </span>
                  <span className="block text-xs text-paper/45">
                    {active.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
