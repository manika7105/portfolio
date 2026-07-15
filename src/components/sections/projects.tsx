import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { InfoChip } from "@/components/effects/info-chip";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/effects/magnetic";
import { projects, socials } from "@/lib/data";
import { techDescriptions } from "@/lib/tech-descriptions";

export function Projects() {
  const githubUrl = socials.find((s) => s.icon === "github")?.href ?? "#";

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-28">
      <Reveal>
        <p className="eyebrow">Projects</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Things I&apos;ve built.
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          <i>A selection of projects that showcase my skills and technical growth.</i>
        </p>
      </Reveal>

      <div className="mt-16 space-y-24">
        {projects.map((project, i) => (
          <Reveal key={project.slug} direction={i % 2 === 0 ? "left" : "right"}>
            <article
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <TiltCard
                maxTilt={7}
                className="group overflow-hidden rounded-2xl border border-[var(--border)]"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </TiltCard>

              <div>
                <h3 className="font-display text-2xl font-semibold sm:text-[1.8rem]">
                  {project.name}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>

                <RevealGroup as="ul" className="mt-5 space-y-2" stagger={0.06}>
                  {project.features.map((feature, idx) => (
                    <RevealItem
                      key={idx}
                      as="li"
                      direction="left"
                      className="flex gap-2.5 text-sm text-[var(--muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-a)]" />
                      {feature}
                    </RevealItem>
                  ))}
                </RevealGroup>

                <p className="mt-6 text-xs text-[var(--muted)]">
                  {/* Hover or tap a technology to see what it does */}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <InfoChip
                      key={t}
                      label={t}
                      description={techDescriptions[t]}
                    />
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <Magnetic strength={0.2}>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GithubIcon size={14} />
                          Code
                        </a>
                      </Button>
                    </Magnetic>
                  )}
                  {project.liveUrl && (
                    <Magnetic strength={0.2}>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo
                          <ArrowUpRight size={14} />
                        </a>
                      </Button>
                    </Magnetic>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <TiltCard maxTilt={3} glare={false} className="mt-20 block rounded-2xl">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-elevated)] px-8 py-10 text-center shadow-[var(--shadow-sm)] transition-all hover:border-[var(--accent-a)] hover:shadow-[var(--shadow-md)] sm:flex-row sm:text-left"
          >
            <div className="noise-veil pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <h3 className="font-display text-xl font-semibold">
                Explore more projects
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                More experiments, mini-apps, and learning projects live on my
                GitHub — from Python scripts to early-stage builds.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-a)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View GitHub profile <ArrowUpRight size={12} />
              </span>
            </div>
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--accent-a)] group-hover:bg-[var(--accent-soft)] group-hover:shadow-[0_0_24px_var(--accent-soft)]">
              <GithubIcon
                size={22}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </TiltCard>
      </Reveal>
    </section>
  );
}
