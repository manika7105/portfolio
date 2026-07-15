// import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
// import { TiltCard } from "@/components/effects/tilt-card";
// import { Card } from "@/components/ui/card";
// import { InfoChip } from "@/components/effects/info-chip";
// import { skills } from "@/lib/data";
// import { techDescriptions } from "@/lib/tech-descriptions";

// export function Skills() {
//   return (
//     <section id="skills" className="mx-auto max-w-5xl px-4 py-28">
//       <Reveal>
//         <p className="eyebrow">Skills</p>
//         <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
//           Tools I build with.
//         </h2>
//         <p className="mt-3 text-sm text-[var(--muted)]">
//           Hover or tap any skill for a quick rundown.
//         </p>
//       </Reveal>

//       <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.1}>
//         {skills.map((group) => (
//           <RevealItem key={group.category}>
//             <TiltCard maxTilt={5} className="group h-full rounded-2xl">
//               <Card className="h-full">
//                 <h3 className="font-display text-lg font-semibold">
//                   {group.category}
//                 </h3>
//                 <div className="mt-5 flex flex-wrap gap-2.5">
//                   {group.items.map((item) => (
//                     <InfoChip
//                       key={item}
//                       label={item}
//                       description={techDescriptions[item]}
//                     />
//                   ))}
//                 </div>
//               </Card>
//             </TiltCard>
//           </RevealItem>
//         ))}
//       </RevealGroup>
//     </section>
//   );
// }


import { BarChart3, Code2, Database, Globe } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { Card } from "@/components/ui/card";
import { InfoChip } from "@/components/effects/info-chip";
import { skills } from "@/lib/data";
import { techDescriptions } from "@/lib/tech-descriptions";

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  Languages: Code2,
  Web: Globe,
  "Data & ML": BarChart3,
  "Databases & Tools": Database,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-28">
      <Reveal>
        <p className="eyebrow">Skills</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Tools I build with.
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          <i>The languages, frameworks, and tools behind my projects.</i>
        </p>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.1}>
        {skills.map((group) => {
          const Icon = CATEGORY_ICONS[group.category] ?? Code2;
          return (
            <RevealItem key={group.category}>
              <TiltCard maxTilt={5} className="group h-full rounded-2xl">
                <Card className="relative h-full">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--accent-soft)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-a)] transition-transform duration-300 group-hover:scale-110">
                        <Icon size={17} />
                      </span>
                      <h3 className="font-display text-lg font-semibold">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[0.65rem] text-[var(--muted)]">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <InfoChip
                        key={item}
                        label={item}
                        description={techDescriptions[item]}
                      />
                    ))}
                  </div>
                </Card>
              </TiltCard>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}