"use client";

import * as React from "react";

export function CursorGlow() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return;

    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translate3d(${mouseX - 220}px, ${
              mouseY - 220
            }px, 0)`;
          }
          raf = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[440px] w-[440px] rounded-full opacity-[0.06] blur-3xl md:block"
      style={{
        background:
          "radial-gradient(circle, var(--accent-a), var(--accent-b) 55%, transparent 75%)",
      }}
    />
  );
}
