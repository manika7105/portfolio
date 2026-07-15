"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  as?: "div" | "span";
}

const DISTANCE = 28;

function getVariants(direction: RevealProps["direction"]): Variants {
  const offset =
    direction === "up"
      ? { y: DISTANCE }
      : direction === "left"
        ? { x: -DISTANCE }
        : direction === "right"
          ? { x: DISTANCE }
          : {};

  return {
    hidden: { opacity: 0, scale: 0.97, ...offset },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={getVariants(direction)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul";
}) {
  const MotionTag = as === "ul" ? motion.ul : motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  as = "div",
}: Omit<RevealProps, "as"> & { as?: "div" | "li" }) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag className={className} variants={getVariants(direction)}>
      {children}
    </MotionTag>
  );
}
