"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { STATS } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Estadísticas del estudio" className="px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-paper/10 bg-graphite/40 px-6 py-14 sm:px-12 sm:py-16">
        <StaggerContainer className="grid grid-cols-3 items-center gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand mark — aligned with the statistics, same visual weight as a stat */}
          <StaggerItem className="col-span-3 flex justify-center lg:col-span-1">
            <BrandLogo
              size={256}
              className="h-28 w-28 lg:h-32 lg:w-32"
            />
          </StaggerItem>

          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-display text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] text-paper/50 uppercase sm:text-sm">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
