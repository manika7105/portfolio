"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

export function Preloader() {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const timer = setTimeout(
      () => setShow(false),
      prefersReducedMotion ? 0 : 1100
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
        >
          <motion.div className="relative flex items-center font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.initials.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="belt-stripe absolute -bottom-3 left-0 w-full origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
