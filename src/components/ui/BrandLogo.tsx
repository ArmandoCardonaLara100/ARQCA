import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  /** Display sizing via Tailwind (e.g. "h-10 w-10"). object-contain keeps it undistorted. */
  className?: string;
  /** Preload when above the fold (header). */
  priority?: boolean;
  /** Intrinsic pixel size handed to next/image for crisp rendering. */
  size?: number;
};

/**
 * ARQCA brand mark (public/images/logo.png).
 * Reused in the header and statistics section — square, always object-contain.
 */
export function BrandLogo({
  className,
  priority = false,
  size = 96,
}: BrandLogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="ARQCA — Diseño y Construcción"
      width={size}
      height={size}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
