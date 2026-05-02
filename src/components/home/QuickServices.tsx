"use client";

import { motion } from "motion/react";
import Link from "next/link";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import SectionHeading from "@/components/shared/SectionHeading";

const highlights = [
  {
    icon: "\u{1F48D}",
    title: "Bridal",
    description: "Your perfect day deserves a perfect look. Timeless elegance that lasts from ceremony to last dance.",
  },
  {
    icon: "\u{1F4F8}",
    title: "Editorial",
    description: "High-fashion looks for photoshoots, magazines, and runway. Bold, creative, unforgettable.",
  },
  {
    icon: "\u{1F389}",
    title: "Events",
    description: "Red carpet ready for any occasion. Glamorous finishes that turn heads all night long.",
  },
];

export default function QuickServices() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="What We Do"
        subtitle="Professional artistry for every occasion"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <AnimatedContainer key={item.title} delay={i * 0.1}>
            <motion.div
              className="glass rounded-2xl p-8 text-center h-full hover:shadow-lg transition-shadow group"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </AnimatedContainer>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link href="/services">
          <motion.span
            className="inline-block border-b-2 border-rose text-charcoal font-medium tracking-wide hover:text-rose transition-colors pb-1"
            whileHover={{ y: -2 }}
          >
            View All Services & Pricing &rarr;
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
