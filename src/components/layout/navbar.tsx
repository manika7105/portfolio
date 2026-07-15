"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certs" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = React.useState<string>("about");
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-300",
        scrolled ? "pt-3" : "pt-5"
      )}
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-4 py-2 shadow-sm backdrop-blur-xl transition-shadow duration-300",
          scrolled && "shadow-lg shadow-black/5"
        )}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
          className="font-display text-lg font-semibold tracking-tight"
        >
          {profile.initials}
          <span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                  active === item.id
                    ? "text-[var(--fg)]"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--bg-elevated-2)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-1.5 rounded-full bg-[var(--fg)] px-3.5 py-1.5 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-105 sm:flex"
          >
            <FileDown size={14} />
            Resume
          </a>
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute left-4 right-4 top-[68px] z-40 rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)]/95 p-4 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "w-full rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                      active === item.id
                        ? "bg-[var(--bg-elevated-2)] text-[var(--fg)]"
                        : "text-[var(--muted)]"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-[var(--fg)] px-3 py-2.5 text-sm font-medium text-[var(--bg)]"
                >
                  <FileDown size={14} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
