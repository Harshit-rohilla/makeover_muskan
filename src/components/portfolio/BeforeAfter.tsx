"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import SectionHeading from "@/components/shared/SectionHeading";
import { LOOK_COMPARISON_PAIRS } from "@/lib/portfolio-data";

function LookSlider({
  left,
  right,
  leftLabel,
  rightLabel,
  alt,
}: {
  left: string;
  right: string;
  leftLabel: string;
  rightLabel: string;
  alt: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPosition(pct);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-4/3 sm:aspect-3/2 rounded-2xl overflow-hidden cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Right image (full width, behind) */}
      <Image
        src={right}
        alt={`${alt} - ${rightLabel}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      {/* Left image (clipped by slider position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div
          className="relative h-full"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100vw",
          }}
        >
          <Image
            src={left}
            alt={`${alt} - ${leftLabel}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-charcoal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
        {leftLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
        {rightLabel}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="Compare Looks"
        subtitle="Drag to explore different styles side by side"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOOK_COMPARISON_PAIRS.map((pair, i) => (
          <motion.div
            key={pair.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <LookSlider
              left={pair.left}
              right={pair.right}
              leftLabel={pair.leftLabel}
              rightLabel={pair.rightLabel}
              alt={pair.alt}
            />
            <p className="text-center text-charcoal/60 text-sm mt-3">
              {pair.alt}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
