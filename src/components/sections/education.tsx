"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { CountUp } from "@/components/effects/count-up";
import { education } from "@/lib/data";
import type { EducationItem } from "@/types";

function EducationEntry({ edu, i }: { edu: EducationItem; i: number }) {
  const [active, setActive] = React.useState(false);
  const numericScore = parseFloat(edu.score.match(/[\d.]+/)?.[0] ?? "0");
  const isPercent = edu.score.includes("%");
  const Icon = i === 0 ? GraduationCap : School;

  return (
    <Reveal delay={i * 0.1}>
      <div className="relative pl-12 sm:pl-16">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 16,
            delay: i * 0.1 + 0.2,
          }}
          className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--accent-a)] bg-[var(--bg)] text-[var(--accent-a)] sm:h-10 sm:w-10"
        >
          <Icon size={16} />
        </motion.span>

        <TiltCard maxTilt={4} className="group block rounded-2xl">
          <motion.div
            onViewportEnter={() => setActive(true)}
            viewport={{ once: true, margin: "-40px" }}
            className="card-surface flex flex-col justify-between gap-4 rounded-2xl p-6 transition-colors group-hover:border-[var(--accent-a)] sm:flex-row sm:items-center"
          >
            <div>
              <p className="eyebrow">
                {edu.start} – {edu.ongoing ? "Present" : edu.end}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {edu.institution}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{edu.degree}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                {edu.location}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 sm:pl-4">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated-2)] px-4 py-2.5 text-center">
                <p className="font-display text-xl font-semibold">
                  <CountUp
                    active={active}
                    value={numericScore}
                    decimals={edu.score.includes(".") ? 2 : 0}
                    suffix={isPercent ? "%" : ""}
                  />
                </p>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-wide text-[var(--muted)]">
                  {isPercent ? "Score" : "CGPA"}
                </p>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </Reveal>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-4 py-28">
      <Reveal>
        <p className="eyebrow">Education</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          The foundation.
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-[var(--border)] sm:left-[19px]" />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% - 1rem)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[15px] top-2 w-px bg-[linear-gradient(180deg,var(--accent-a),var(--accent-b))] sm:left-[19px]"
        />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <EducationEntry key={edu.institution + edu.degree} edu={edu} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
