import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none rounded-xl border bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--fg)] outline-none transition-colors placeholder:text-[var(--muted)]",
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
Textarea.displayName = "Textarea";

export { Textarea };
