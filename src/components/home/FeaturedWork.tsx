"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import PortfolioImageCard, {
  PORTFOLIO_GRID_SPAN_CLASSES,
} from "@/components/portfolio/PortfolioImageCard";
import { HOME_PORTFOLIO_IMAGES } from "@/lib/portfolio-data";

export default function FeaturedWork() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="Featured Work"
        subtitle="A curated selection of our finest transformations"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] sm:auto-rows-[320px] gap-4">
        {HOME_PORTFOLIO_IMAGES.map((image, i) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`min-h-0 ${PORTFOLIO_GRID_SPAN_CLASSES[image.span || "normal"]}`}
          >
            <PortfolioImageCard image={image} interactive={false} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link href="/portfolio">
          <motion.span
            className="inline-block border-b-2 border-rose text-charcoal font-medium tracking-wide hover:text-rose transition-colors pb-1"
            whileHover={{ y: -2 }}
          >
            View Full Portfolio &rarr;
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
