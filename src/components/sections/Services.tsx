import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section
      id="services"
      aria-label="Servicios"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que un proyecto necesita, bajo una sola visión"
          description="Desde el primer boceto hasta la última visita de obra — una práctica integral construida sobre la claridad, el oficio y la responsabilidad."
        />

        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-paper/10 bg-graphite/40 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-paper/25 hover:bg-graphite/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                {/* soft glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-paper/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-ink transition-transform duration-500 group-hover:scale-110">
                  <Icon
                    className="h-5.5 w-5.5 text-paper/85"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  {description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
