"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function CallToAction() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/portfolio/img-01.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Let&apos;s Create Your Look
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-base sm:text-lg mb-10 max-w-lg mx-auto"
        >
          Ready to feel your most beautiful? Get in touch and let&apos;s
          discuss your perfect look for any occasion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <WhatsAppButton label="Book Your Session" />
        </motion.div>
      </div>
    </section>
  );
}
