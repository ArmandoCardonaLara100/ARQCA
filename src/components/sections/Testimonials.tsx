import { Quote, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonios de clientes"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que Dicen los Clientes"
          description="Las reseñas de clientes vivirán aquí — reemplaza los marcadores en data.ts conforme lleguen."
        />

        <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-paper/10 bg-graphite/40 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-paper/25">
                <Quote
                  className="h-7 w-7 text-paper/25"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-paper/60 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 bg-ink"
                  >
                    <User className="h-4.5 w-4.5 text-paper/50" />
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
    </section>
  );
}
