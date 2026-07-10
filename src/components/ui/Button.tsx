import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out select-none active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-ivory text-ink hover:bg-ivory/90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
  secondary:
    "border border-paper/25 text-paper hover:border-paper/60 hover:bg-paper/5",
  ghost: "text-paper/80 hover:text-paper hover:bg-paper/5",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

/** Anchor styled as a button — used for in-page and external CTAs. */
export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
