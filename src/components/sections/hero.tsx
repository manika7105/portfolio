"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";

// import { ParticleField } from "@/components/effects/particle-field";

import { Magnetic } from "@/components/effects/magnetic";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 120, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), spring);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const handlePointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  React.useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4"
    >
      <div className="noise-veil pointer-events-none absolute inset-0" />

      {/* Layered gradient blobs for depth, sitting behind the particle constellation */}
      <div
        aria-hidden
        className="hero-blob-a pointer-events-none absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full opacity-[0.16] blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-a), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="hero-blob-b pointer-events-none absolute -right-20 top-[20%] h-[380px] w-[380px] rounded-full opacity-[0.14] blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-b), transparent 70%)",
        }}
      />

      {/* <ParticleField /> */}

      <div
        style={{ perspective: 1200 }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start pt-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-6"
        >
          {profile.location} · Open to opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="font-display text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.98] tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="belt-stripe mt-5 w-56 origin-left"
        />

        <div className="mt-6 h-9 overflow-hidden">
          <motion.p
            key={roleIndex}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-mono text-lg text-[var(--muted)] sm:text-xl"
          >
            {profile.roles[roleIndex]}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-balance text-base text-[var(--muted)] sm:text-lg"
        >
          CS undergrad building intuitive web experiences and exploring applied machine learning — driven by curiosity, consistency, and a passion for solving real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Button
              variant="gradient"
              size="lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View my work
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button variant="outline" size="lg" asChild>
              <a href={profile.resumeUrl} download>
                <FileDown size={16} />
                Resume
              </a>
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button variant="ghost" size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} />
                Say hello
              </a>
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--muted)]"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  );
}
