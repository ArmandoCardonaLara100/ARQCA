import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { PROJECTS } from "@/lib/data";

export function Projects() {
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
          {PROJECTS.map((project) => (
            <StaggerItem key={project.name}>
              <article className="group overflow-hidden rounded-[2rem] border border-paper/10 bg-graphite/30 transition-all duration-500 hover:border-paper/25 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[16/10] overflow-hidden">
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
                </div>

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
                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-ivory/50 group-hover:bg-ivory group-hover:text-ink"
                    >
                      <ArrowUpRight className="h-4.5 w-4.5" />
                    </span>
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
    </section>
  );
}
