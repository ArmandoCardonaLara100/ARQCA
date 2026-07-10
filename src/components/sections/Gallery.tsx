"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  X,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { GALLERY_SLIDES } from "@/lib/data";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD = 60;

const slideVariants = {
  enter: (direction: number) => ({ x: `${direction * 100}%`, opacity: 0.4 }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({ x: `${direction * -100}%`, opacity: 0.4 }),
};

export function Gallery() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [fullscreen, setFullscreen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const count = GALLERY_SLIDES.length;

  const goTo = useCallback(
    (next: number, dir?: number) => {
      const wrapped = (next + count) % count;
      setSlide(([current]) => [wrapped, dir ?? (wrapped > current ? 1 : -1)]);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Autoplay — paused on hover, while fullscreen, or when toggled off
  useEffect(() => {
    if (!autoplay || hovered || fullscreen !== null || reduce) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoplay, hovered, fullscreen, next, reduce]);

  // Keyboard controls for the fullscreen viewer
  useEffect(() => {
    if (fullscreen === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(null);
      if (e.key === "ArrowRight") setFullscreen((i) => ((i ?? 0) + 1) % count);
      if (e.key === "ArrowLeft")
        setFullscreen((i) => ((i ?? 0) - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullscreen, count]);

  return (
    <section
      id="gallery"
      aria-label="Galería de imágenes"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Galería"
          title="Velarias y Andador Universitario"
          description="Fragmentos de la obra construida de la Universidad UNIVA, León, Guanajuato, MX. Participación con Constructora ARQUIA en la elaboración del diseño arquitectónico y proyecto ejecutivo."
        />

        <Reveal className="mt-16" delay={0.1}>
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative overflow-hidden rounded-[2rem] border border-paper/10 sm:rounded-[2.5rem]"
            role="region"
            aria-roledescription="carousel"
            aria-label={`Presentación de galería, imagen ${index + 1} de ${count}`}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/9]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: reduce ? 0 : 0.55, ease: [0.32, 0.72, 0, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -SWIPE_THRESHOLD) next();
                    else if (info.offset.x > SWIPE_THRESHOLD) prev();
                  }}
                  onTap={() => setFullscreen(index)}
                  className="absolute inset-0 cursor-zoom-in"
                >
                  <Image
                    src={GALLERY_SLIDES[index].src}
                    alt={GALLERY_SLIDES[index].label}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 sm:px-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Imagen anterior"
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-ink/50 text-paper backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-ink/80"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Imagen siguiente"
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-ink/50 text-paper backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-ink/80"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 sm:top-6 sm:right-6">
              <button
                type="button"
                onClick={() => setAutoplay((a) => !a)}
                aria-label={autoplay ? "Pausar presentación" : "Reproducir presentación"}
                aria-pressed={autoplay}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 bg-ink/50 text-paper backdrop-blur-md transition-colors hover:bg-ink/80"
              >
                {autoplay ? (
                  <Pause className="h-4 w-4" aria-hidden />
                ) : (
                  <Play className="h-4 w-4" aria-hidden />
                )}
              </button>
              <button
                type="button"
                onClick={() => setFullscreen(index)}
                aria-label="Abrir imagen en pantalla completa"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 bg-ink/50 text-paper backdrop-blur-md transition-colors hover:bg-ink/80"
              >
                <Maximize2 className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="mt-7 flex justify-center gap-2.5" role="tablist" aria-label="Paginación de galería">
            {GALLERY_SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la imagen ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-400",
                  i === index
                    ? "w-8 bg-ivory"
                    : "w-2 bg-paper/25 hover:bg-paper/50"
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {fullscreen !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Vista en pantalla completa, ${GALLERY_SLIDES[fullscreen].label}`}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-accent/90 p-4 backdrop-blur-xl sm:p-10"
            onClick={() => setFullscreen(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="relative aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_SLIDES[fullscreen].src}
                alt={GALLERY_SLIDES[fullscreen].label}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={() => setFullscreen(null)}
              aria-label="Cerrar vista en pantalla completa"
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 bg-ink/60 text-paper backdrop-blur-md transition-colors hover:bg-ink"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFullscreen((i) => ((i ?? 0) - 1 + count) % count);
              }}
              aria-label="Imagen anterior"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 bg-ink/60 text-paper backdrop-blur-md transition-colors hover:bg-ink sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFullscreen((i) => ((i ?? 0) + 1) % count);
              }}
              aria-label="Imagen siguiente"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 bg-ink/60 text-paper backdrop-blur-md transition-colors hover:bg-ink sm:right-8"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
