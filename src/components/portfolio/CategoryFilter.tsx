"use client";

import { motion } from "motion/react";
import { CATEGORIES } from "@/lib/constants";
import { PortfolioCategory } from "@/types";

interface CategoryFilterProps {
  active: PortfolioCategory;
  onChange: (category: PortfolioCategory) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors"
        >
          {active === cat.id && (
            <motion.div
              layoutId="category-pill"
              className="absolute inset-0 bg-rose rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span
            className={`relative z-10 ${
              active === cat.id ? "text-white" : "text-charcoal/60 hover:text-charcoal"
            }`}
          >
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  );
}
