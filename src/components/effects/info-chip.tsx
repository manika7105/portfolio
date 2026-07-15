"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfoChipProps {
  label: string;
  description?: string;
  className?: string;
}

export function InfoChip({ label, description, className }: InfoChipProps) {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!description) {
    return (
      <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated-2)] px-3.5 py-1.5 font-mono text-[0.8rem] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-a)] hover:bg-[var(--accent-soft)] hover:text-[var(--fg)]",
        className
      )}
      >
        {label}
      </span>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "inline-flex cursor-help items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated-2)] px-3.5 py-1.5 font-mono text-[0.8rem] text-[var(--fg)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-a)] hover:bg-[var(--accent-soft)] hover:shadow-[0_4px_16px_-4px_var(--accent-soft)]",
          className
        )}
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            role="tooltip"
            className="absolute bottom-full left-1/2 z-30 mb-3 w-60 max-w-[80vw] -translate-x-1/2 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-3.5 text-left shadow-xl"
          >
            <p className="font-display text-xs font-semibold text-[var(--accent-a)]">
              {label}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
