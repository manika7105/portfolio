"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  active?: boolean;
}

export function CountUp({
  value,
  suffix = "",
  decimals = 0,
  className,
  active = true,
}: CountUpProps) {
  const [display, setDisplay] = React.useState(() => (0).toFixed(decimals));

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20 });

  React.useEffect(() => {
    if (active) {
      motionValue.set(value);
    }
  }, [active, value, motionValue]);

  React.useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
    return unsubscribe;
  }, [spring, decimals]);

  return (
    <motion.span className={className}>
      {display}
      {suffix}
    </motion.span>
  );
}
