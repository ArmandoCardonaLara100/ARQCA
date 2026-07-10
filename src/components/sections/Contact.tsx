import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/site-config";

const CHANNELS = [
  {
    icon: Phone,
    label: "Teléfono",
    href: CONTACT.phoneHref,
    external: false,
  },
  {
    icon: Mail,
    label: "Correo",
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: CONTACT.whatsapp,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: CONTACT.instagram,
    external: true,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    href: CONTACT.mapsLink,
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contacto"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contacto"
          title="Construyendo Sueños"
          description="Cuéntanos sobre tu terreno, tus ideas o tus preguntas — respondemos cada mensaje personalmente."
        />

        {/* Circular contact buttons — centered, wrapping evenly; single row from lg up */}
        <StaggerContainer className="mx-auto mt-16 flex max-w-3xl flex-wrap items-start justify-center gap-x-8 gap-y-12 sm:mt-20 sm:gap-x-6 lg:gap-x-10">
          {CHANNELS.map(({ icon: Icon, label, href, external }) => (
            <StaggerItem key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={label}
                className="group flex w-24 cursor-pointer flex-col items-center gap-4 sm:w-28"
              >
                <span className="relative flex h-24 w-24 items-center justify-center rounded-full border border-paper/10 bg-graphite/50 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-paper/30 group-hover:bg-graphite/70 group-focus-visible:scale-105 sm:h-28 sm:w-28">
                  {/* soft glow on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full bg-paper/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <Icon
                    className="relative h-8 w-8 text-paper/85 transition-colors duration-300 group-hover:text-paper sm:h-9 sm:w-9"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <span className="text-sm font-medium tracking-wide text-paper/70 transition-colors duration-300 group-hover:text-paper">
                  {label}
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
