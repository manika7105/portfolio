import Image from "next/image";
import { Reveal } from "@/components/effects/reveal";
import { CountUp } from "@/components/effects/count-up";
import {
  profile,
  education,
  projects,
  experience,
  certifications,
} from "@/lib/data";

export function About() {
  const currentEducation = education[0];

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-28">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          A little about me.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
        <Reveal direction="right" className="mx-auto lg:mx-0">
          <div className="group relative w-64 shrink-0 sm:w-72">
            <div className="absolute -inset-1 rounded-[2rem] bg-[linear-gradient(140deg,var(--accent-a),var(--accent-b))] opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-[var(--border)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover object-top grayscale-[15%] contrast-[1.03] transition-all duration-500 ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.25))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-balance leading-relaxed text-[var(--muted)]">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-4">
              <div>
                <p className="font-display text-3xl font-semibold">
                  <CountUp
                    value={parseFloat(currentEducation.score.match(/[\d.]+/)?.[0] ?? "0")}
                    decimals={2}
                  />
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">CGPA</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">
                  <CountUp value={projects.length} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">Projects built</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">
                  <CountUp value={experience.length} />
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">Internships</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">
                  <CountUp value={certifications.length} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">Certifications</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
