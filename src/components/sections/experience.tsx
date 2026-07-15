"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-28">
      <Reveal>
        <p className="eyebrow">Experience</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Where I&apos;ve worked.
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          <i>Hands-on experience gained through internships and real-world development.</i>
        </p>
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
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
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
                  <Briefcase size={15} />
                </motion.span>

                <TiltCard maxTilt={3} className="group block rounded-2xl">
                  <div className="card-surface rounded-2xl p-6 transition-colors group-hover:border-[var(--accent-a)]">
                    <p className="eyebrow">
                      {job.start} — {job.end}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {job.company} · {job.location}
                    </p>

                    <RevealGroup
                      as="ul"
                      className="mt-4 space-y-2"
                      stagger={0.06}
                    >
                      {job.bullets.map((bullet, idx) => (
                        <RevealItem
                          key={idx}
                          as="li"
                          direction="left"
                          className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-a)]" />
                          {bullet}
                        </RevealItem>
                      ))}
                    </RevealGroup>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
