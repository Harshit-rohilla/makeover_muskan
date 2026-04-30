"use client";

import { motion } from "motion/react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="glass rounded-2xl p-8 h-full relative overflow-hidden group"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {service.popular && (
          <div className="absolute top-4 right-4 bg-gold text-white text-xs px-3 py-1 rounded-full font-medium">
            Popular
          </div>
        )}

        <span className="text-3xl block mb-4">{service.icon}</span>

        <h3 className="text-xl font-bold text-charcoal mb-2">{service.title}</h3>

        <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-bold text-rose">{service.price}</span>
        </div>
        <p className="text-charcoal/40 text-xs mb-6">{service.duration}</p>

        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-charcoal/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201, 146, 110, 0.08) 0%, transparent 60%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
