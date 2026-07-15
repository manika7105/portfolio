"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { profile, socials } from "@/lib/data";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold">
            {profile.name}
            <span className="text-gradient">.</span>
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {profile.roles.join(" · ")}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials
            .filter((s) => s.icon in ICONS)
            .map((s) => {
              const Icon = ICONS[s.icon as keyof typeof ICONS];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent-a)] hover:text-[var(--fg)]"
                >
                  <Icon size={15} />
                </a>
              );
            })}
        </div>

        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3.5 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--accent-a)] hover:text-[var(--fg)]"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>

      <p className="mt-8 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}. Designed & developed with Next.js, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
}
