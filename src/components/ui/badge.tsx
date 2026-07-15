import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated-2)] px-2.5 py-1 font-mono text-[0.68rem] tracking-wide text-[var(--muted)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
