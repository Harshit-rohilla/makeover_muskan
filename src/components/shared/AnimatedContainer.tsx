"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

const getInitial = (direction: string) => {
  switch (direction) {
    case "up": return { y: 40, opacity: 0 };
    case "down": return { y: -40, opacity: 0 };
    case "left": return { x: 40, opacity: 0 };
    case "right": return { x: -40, opacity: 0 };
    default: return { y: 40, opacity: 0 };
  }
};

export default function AnimatedContainer({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
