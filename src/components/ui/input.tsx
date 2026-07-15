import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--fg)] outline-none transition-colors placeholder:text-[var(--muted)]",
          error
            ? "border-red-400 focus:border-red-400"
            : "border-[var(--border)] focus:border-[var(--accent-a)]",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
