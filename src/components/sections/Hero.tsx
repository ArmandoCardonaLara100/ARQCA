"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/site-config";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: the backdrop drifts slower than the scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Introducción"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6"
    >
      {/* HERO IMAGE — swap /images/house.jpg for your own photograph */}
      <motion.div aria-hidden className="absolute inset-3 sm:inset-5" style={{ y: imageY }}>
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          <Image
            src="/images/house.jpg"
            alt="Fachada de un proyecto de ARQCA"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Legibility overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/30 to-accent/20" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-paper/70 uppercase"
        >
          <span
            aria-hidden
            className="hidden h-1.5 w-1.5 rounded-full bg-paper/80 sm:block"
          />
          {SITE.brand} — {SITE.architect} — Arquitecto
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="mt-6 font-display text-5xl font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          &ldquo;CONSTRUYENDO SUEÑOS&rdquo;
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg"
        >
          Espacios precisos, únicos, inigualables — diseñados con
          intención, construidos con dedicación.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <ButtonLink href="#projects">
            Ver Proyectos
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="secondary"
            className="backdrop-blur-sm"
          >
            Contáctame
          </ButtonLink>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Desplázate a la sección Nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 bg-ink/30 backdrop-blur-sm"
        >
          <ArrowDown className="h-4 w-4 text-paper/80" aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}
