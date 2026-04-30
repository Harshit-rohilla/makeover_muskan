"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/shared/SectionHeading";
import { TIMELINE_ENTRIES } from "@/lib/services-data";

export default function JourneyTimeline() {
  return (
    <section>
      <SectionHeading
        title="The Journey"
        subtitle="Key milestones that shaped our story"
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-rose/20 sm:-translate-x-px" />

        <div className="space-y-12">
          {TIMELINE_ENTRIES.map((entry, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={entry.year}
                initial={{
                  opacity: 0,
                  x: isLeft ? -30 : 30,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-rose border-4 border-cream -translate-x-1/2 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="text-gold font-bold text-sm tracking-widest">
                    {entry.year}
                  </span>
                  <h4 className="text-lg font-bold text-charcoal mt-1 mb-2">
                    {entry.title}
                  </h4>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
