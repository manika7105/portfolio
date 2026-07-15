"use client";

import * as React from "react";
import Image from "next/image";
import { BadgeCheck, ImageOff, Maximize2 } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { Lightbox } from "@/components/effects/lightbox";
import { certifications } from "@/lib/data";
import type { Certification } from "@/types";

function CertificateCard({ cert }: { cert: Certification }) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [flipped, setFlipped] = React.useState(false);

  return (
    <>
      <div
        className={`flip-card-container h-64 cursor-pointer ${flipped ? "is-flipped" : ""}`}
        onClick={() => setFlipped((v) => !v)}
      >
        <div className="flip-card-inner">
          {/* Front: certificate info */}
          <div className="flip-card-face flip-card-front card-surface flex h-full flex-col rounded-2xl p-6">
            <BadgeCheck size={20} className="text-[var(--accent-a)]" />
            <h3 className="mt-4 font-display text-base font-semibold leading-snug">
              {cert.name}
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{cert.issuer}</p>
            <p className="mt-3 font-mono text-xs text-[var(--muted)]">
              {cert.date}
            </p>
            <span className="mt-auto pt-4 text-xs text-[var(--muted)]/70">
              Hover to see the certificate ↻
            </span>
          </div>

          {/* Back: certificate image */}
          <div className="flip-card-face flip-card-back overflow-hidden rounded-2xl border border-[var(--border)]">
            {cert.image ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(true);
                }}
                className="group relative block h-full w-full"
                aria-label={`View ${cert.name} certificate fullscreen`}
              >
                <Image
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                    <Maximize2 size={13} />
                    View fullscreen
                  </span>
                </div>
              </button>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--bg-elevated-2)] px-4 text-center">
                <ImageOff size={20} className="text-[var(--muted)]" />
                <p className="text-xs text-[var(--muted)]">
                  Certificate image coming soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Lightbox
        src={lightboxOpen ? (cert.image ?? null) : null}
        alt={`${cert.name} certificate`}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-4 py-28">
      <Reveal>
        <p className="eyebrow">Certifications</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Always improving.
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          <i>Certifications reflecting my commitment to continuous learning and growth.</i>
        </p>
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {certifications.map((cert) => (
          <RevealItem key={cert.name}>
            <CertificateCard cert={cert} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
