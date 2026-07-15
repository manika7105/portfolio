"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Maximize2, Medal, Trophy } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { Lightbox } from "@/components/effects/lightbox";
import { achievement, achievementPhotos } from "@/lib/data";

function PhotoCard({
  photo,
  rotate,
}: {
  photo: (typeof achievementPhotos)[number];
  rotate: number;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <RevealItem>
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
          style={{ rotate, aspectRatio: photo.aspect ?? "4/5" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="card-surface group relative w-full max-w-xs overflow-hidden rounded-2xl p-2 shadow-lg"
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-[var(--bg-elevated-2)]">
            {photo.src ? (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative block h-full w-full"
                aria-label={`View photo: ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                    <Maximize2 size={13} />
                    View
                  </span>
                </div>
              </button>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-a)]">
                  <Camera size={20} />
                </span>
                <p className="text-xs text-[var(--muted)]">
                  Photo coming soon
                </p>
              </div>
            )}
          </div>
          <p className="px-2 pb-1 pt-3 text-center font-mono text-xs text-[var(--muted)]">
            {photo.caption}
          </p>
        </motion.div>
      </RevealItem>

      <Lightbox
        src={open ? photo.src : null}
        alt={photo.alt}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl px-4 py-28">
      <Reveal>
        <p className="eyebrow">Achievement</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Beyond the editor.
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          <i>The experiences that shaped the person behind the code.</i>
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <TiltCard maxTilt={2} glare={false} className="mt-14 block rounded-3xl">
          <div className="card-surface relative overflow-hidden rounded-3xl p-10 sm:p-14">
            <div className="noise-veil pointer-events-none absolute inset-0" />

            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="eyebrow inline-flex items-center gap-1.5 text-[var(--accent-a)]">
                  <Trophy size={13} />
                  {achievement.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                  {achievement.title}
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
                  {achievement.description}
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-center">
                <TiltCard maxTilt={15} glare={false} className="group">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-[var(--accent-a)] bg-[var(--bg-elevated)] shadow-[0_0_40px_var(--accent-soft)] sm:h-36 sm:w-36"
                  >
                    <span className="absolute inset-2 rounded-full border border-dashed border-[var(--accent-a)]/30" />
                    <Medal
                      size={20}
                      className="absolute top-6 text-[var(--accent-a)] opacity-70"
                    />
                    <div className="belt-stripe absolute bottom-7 w-16" />
                    <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                      1st
                    </span>
                  </motion.div>
                </TiltCard>
                <span className="mt-3 font-mono text-xs uppercase tracking-wide text-[var(--muted)]">
                  Awarded · Oct 2023
                </span>
              </div>
            </div>

            <RevealGroup
              className="relative mt-12 grid grid-cols-1 items-center justify-items-center gap-8 border-t border-[var(--border)] pt-10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.15}
            >
            {achievementPhotos.map((photo, i) => (
              <PhotoCard
                key={photo.src ?? photo.caption}
                photo={photo}
                rotate={i % 2 === 0 ? -3 : 3}
              />
            ))}
            </RevealGroup>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  );
}
