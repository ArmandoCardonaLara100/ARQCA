import { ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Main label, e.g. "Hero Image" */
  label: string;
  /** Secondary hint, e.g. recommended size "1920 × 1080" */
  hint?: string;
  icon?: LucideIcon;
  className?: string;
  /** "center" (default) or "bottom-left" for placeholders that sit behind content */
  labelPosition?: "center" | "bottom-left";
};

/**
 * Reserved image container.
 *
 * TO REPLACE WITH A REAL IMAGE:
 *   <div className="relative {same aspect/rounding classes}">
 *     <Image src="/images/your-photo.jpg" alt="…" fill className="object-cover" />
 *   </div>
 */
export function ImagePlaceholder({
  label,
  hint,
  icon: Icon = ImageIcon,
  className,
  labelPosition = "center",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Marcador de posición: ${label}`}
      className={cn(
        "placeholder-grid relative flex h-full w-full overflow-hidden bg-graphite/50",
        labelPosition === "center"
          ? "items-center justify-center"
          : "items-end justify-start p-6 sm:p-8",
        className
      )}
    >
      {/* soft vignette for depth */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]"
      />
      <div
        className={cn(
          "relative flex gap-3",
          labelPosition === "center"
            ? "flex-col items-center px-6 text-center"
            : "flex-row items-center text-left"
        )}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/15 bg-ink/60">
          <Icon className="h-5 w-5 text-paper/50" aria-hidden />
        </span>
        <span
          className={cn(labelPosition === "bottom-left" && "flex flex-col gap-0.5")}
        >
          <span className="block text-sm font-medium tracking-wide text-paper/60">
            {label}
          </span>
          {hint && (
            <span className="block text-xs tracking-widest text-paper/35 uppercase">
              {hint}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
