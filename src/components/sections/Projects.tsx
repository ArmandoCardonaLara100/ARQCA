"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PROJECTS } from "@/lib/data";

const SWIPE_THRESHOLD = 60;
const EASE = [0.32, 0.72, 0, 1] as const;

const slideVariants = {
  enter: (dir: number) => ({ x: `${dir * 100}%`, opacity: 0.4 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir: number) => ({ x: `${dir * -100}%`, opacity: 0.4 }),
};

export function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [[slide, dir], setSlide] = useState<[number, number]>([0, 0]);

  const active = openProject !== null ? PROJECTS[openProject] : null;
  const count = active?.gallery.length ?? 0;

  const openModal = (index: number) => {
    setSlide([0, 0]);
    setOpenProject(index);
  };
  const closeModal = () => setOpenProject(null);

  const paginate = useCallback(
    (newDir: number) => {
      setSlide(([cur]) => [(cur + newDir + count) % count, newDir]);
    },
    [count]
  );
  const goTo = (i: number) =>
    setSlide(([cur]) => [i, i > cur ? 1 : i < cur ? -1 : 0]);

  // Keyboard navigation + close, and body scroll lock while the modal is open
  useEffect(() => {
    if (openProject === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openProject, paginate]);

  return (
    <section
      id="projects"
      aria-label="Proyectos seleccionados"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trabajo Seleccionado"
          title="Proyectos Construidos"
          description="Una selección de trabajo residencial, comercial - que refleja la filosofía de diseño y atención al detalle que define mi trabajo."
        />

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <StaggerItem key={project.name}>
              <article className="group overflow-hidden rounded-[2rem] border border-paper/10 bg-graphite/30 transition-all duration-500 hover:border-paper/25 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                {/* Featured image — opens the project gallery modal */}
                <button
                  type="button"
                  onClick={() => openModal(index)}
                  aria-label={`Ver galería de ${project.name}`}
                  className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden"
                >
                  <Image
                    src={project.src}
                    alt={project.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-5 left-5 rounded-full border border-paper/15 bg-ink/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-paper/90 uppercase backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="absolute top-5 right-5 rounded-full border border-paper/15 bg-ink/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-paper/90 backdrop-blur-md">
                    {project.year}
                  </span>
                </button>

                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight">
                        {project.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-paper/50">
                        {project.location}
                      </p>
                    </div>
                    {/* Arrow trigger — opens the gallery modal */}
                    <button
                      type="button"
                      onClick={() => openModal(index)}
                      aria-label={`Ver galería de ${project.name}`}
                      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-paper/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-ivory/50 group-hover:bg-ivory group-hover:text-ink"
                    >
                      <ArrowUpRight className="h-4.5 w-4.5" aria-hidden />
                    </button>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">
                    {project.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Project gallery modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Galería del proyecto ${active.name}`}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-accent/90 p-4 backdrop-blur-xl sm:p-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-paper/10 bg-graphite shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image viewport */}
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <AnimatePresence initial={false} custom={dir} mode="popLayout">
                  <motion.div
                    key={slide}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: EASE }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
                      else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
                    }}
                    className="absolute inset-0"
                  >
                    {active.gallery[slide] ? (
                      <Image
                        src={active.gallery[slide]}
                        alt={`${active.name} — imagen ${slide + 1}`}
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-cover"
                        draggable={false}
                        priority
                      />
                    ) : (
                      <ImagePlaceholder
                        label={active.name}
                        hint={`Imagen ${slide + 1} de ${count} · reemplaza en data.ts`}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Close */}
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Cerrar galería"
                  className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-ink/50 text-paper backdrop-blur-md transition-colors duration-300 hover:bg-ink/80"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>

                {/* Prev / Next */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
                  <button
                    type="button"
                    onClick={() => paginate(-1)}
                    aria-label="Imagen anterior"
                    className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-ink/50 text-paper backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-ink/80"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => paginate(1)}
                    aria-label="Imagen siguiente"
                    className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-ink/50 text-paper backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-ink/80"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden />
                  </button>
                </div>

                {/* Category / year badges */}
                <span className="absolute bottom-4 left-4 rounded-full border border-paper/15 bg-ink/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-paper/90 uppercase backdrop-blur-md">
                  {active.category}
                </span>
              </div>

              {/* Caption + pagination dots */}
              <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-7">
                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg font-medium tracking-tight">
                    {active.name}
                  </h3>
                  <p className="truncate text-sm text-paper/50">
                    {active.location}
                  </p>
                </div>
                <div
                  className="flex shrink-0 items-center gap-2"
                  role="tablist"
                  aria-label="Paginación de la galería"
                >
                  {active.gallery.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === slide}
                      aria-label={`Ir a la imagen ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={
                        i === slide
                          ? "h-2 w-8 rounded-full bg-ivory transition-all duration-400"
                          : "h-2 w-2 rounded-full bg-paper/25 transition-all duration-400 hover:bg-paper/50"
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
