"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <Tag
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-charcoal/60"}`}
        >
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className={`mt-4 h-[2px] w-16 origin-left ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "bg-gold" : "bg-rose"}`}
      />
    </motion.div>
  );
}
