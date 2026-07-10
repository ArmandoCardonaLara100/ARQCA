import Image from "next/image";
import { Compass, PenTool, Ruler } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site-config";

const SPECIALTIES = [
  { icon: PenTool, label: "Diseño residencial y comercial moderno" },
  { icon: Ruler, label: "Detalle preciso y honestidad en los materiales" },
  { icon: Compass, label: "Cada detalle diseñado con precisión" },
];

export function About() {
  return (
    <section
      id="about"
      aria-label="Acerca del arquitecto"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Portrait — swap /images/arquitecto.jpg for your own photograph */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] lg:max-w-none">
            <Image
              src="/images/arquitecto.jpg"
              alt="Reynaldo Cardona Guerrero"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-paper/60 uppercase">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-paper/70" />
              Quiénes Somos
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {SITE.architect}
            </h2>
            <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-paper/50 uppercase">
              Arquitecto Fundador — {SITE.brand}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-paper/70 sm:text-lg">
              Más de 20 años de experiencia respaldan una trayectoria dedicada al diseño y desarrollo de proyectos arquitectónicos de alta calidad.

              Egresado de la Universidad La Salle Bajío en León, Guanajuato, con Licenciatura en Arquitectura y Maestría en Diseño Arquitectónico.

            </p>
            <p className="mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
              Especializado en el diseño y ejecución de una amplia variedad de proyectos, incluyendo viviendas residenciales, edificios comerciales, 
              naves industriales, remodelaciones, diseño de interiores, ampliaciones y soluciones arquitectónicas personalizadas, 
              adaptadas a las necesidades de cada cliente.
            </p>
          </Reveal>

          <StaggerContainer className="mt-10 space-y-4">
            {SPECIALTIES.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <div className="flex items-center gap-4 rounded-2xl border border-paper/10 bg-graphite/40 px-5 py-4 transition-colors duration-300 hover:border-paper/25">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink">
                    <Icon className="h-4 w-4 text-paper/80" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-paper/85 sm:text-base">
                    {label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
