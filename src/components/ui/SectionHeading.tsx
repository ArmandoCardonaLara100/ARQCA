import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Eyebrow + headline + optional description used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p
        className={cn(
          "flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-paper/60 uppercase",
          align === "center" && "justify-center"
        )}
      >
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-paper/70" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-paper/60 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
