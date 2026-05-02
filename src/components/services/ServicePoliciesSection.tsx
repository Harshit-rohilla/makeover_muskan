"use client";

import { motion } from "motion/react";

const POLICIES = [
  "50% advance required to confirm your booking.",
  "Travels to venue (travel charges applicable for outstation bookings).",
  "Paid trial session available on request.",
  "Prices listed are starting prices and are negotiable.",
  "All prices are subject to change without prior notice.",
  "Final quote is determined by date, venue, and add-on services.",
  "Once a booking is confirmed, cancellations are non-refundable.",
];

function PolicyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-gold shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="8" x2="17" y2="8" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="7" y1="16" x2="13" y2="16" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-rose shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ServicePoliciesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-white rounded-2xl shadow-sm border border-blush/40 p-8 sm:p-10"
    >
      <div className="flex items-center gap-3 mb-6">
        <PolicyIcon />
        <h2
          className="text-xl sm:text-2xl font-bold text-charcoal"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Policies
        </h2>
      </div>

      <ul className="space-y-3">
        {POLICIES.map((policy) => (
          <li key={policy} className="flex items-start gap-3 text-charcoal/70 text-sm leading-relaxed">
            <CheckIcon />
            {policy}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
