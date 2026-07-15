"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, XCircle } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { TiltCard } from "@/components/effects/tilt-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Magnetic } from "@/components/effects/magnetic";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { profile } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-28">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mt-4 max-w-lg text-[var(--muted)]">
            Have a project, opportunity, or idea to discuss? I'd love to connect and explore how we can build something meaningful together.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal direction="right" className="space-y-4">
          <TiltCard maxTilt={6} className="group block rounded-2xl">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors group-hover:border-[var(--accent-a)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-a)]">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm text-[var(--muted)]">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
            </a>
          </TiltCard>

          <TiltCard maxTilt={6} className="group block rounded-2xl">
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors group-hover:border-[var(--accent-a)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-a)]">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm text-[var(--muted)]">Phone</p>
                <p className="font-medium">{profile.phone}</p>
              </div>
            </a>
          </TiltCard>

          <TiltCard maxTilt={6} className="group block rounded-2xl">
            <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors group-hover:border-[var(--accent-a)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-a)]">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm text-[var(--muted)]">Location</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal>
          <TiltCard maxTilt={2} glare={false} className="block rounded-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="card-surface rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  error={!!errors.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  error={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="What's this about?"
                error={!!errors.subject}
                {...register("subject")}
              />
              {errors.subject && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Tell me a little about the opportunity or idea..."
                error={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.2}>
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </Magnetic>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-1.5 text-sm text-[var(--accent-a)]"
                  >
                    <CheckCircle2 size={16} />
                    Message sent — I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-1.5 text-sm text-red-400"
                  >
                    <XCircle size={16} />
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
