"use client";

import { motion } from "motion/react";
import Link from "next/link";
import CloudImage from "@/components/shared/CloudImage";
import SectionHeading from "@/components/shared/SectionHeading";
import { FEATURED_IMAGES } from "@/lib/portfolio-data";

const spanClasses: Record<string, string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 sm:col-span-2 row-span-1",
  tall: "col-span-1 row-span-1 sm:row-span-2",
  large: "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2",
};

export default function FeaturedWork() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="Featured Work"
        subtitle="A curated selection of our finest transformations"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] sm:auto-rows-[320px] gap-4">
        {FEATURED_IMAGES.map((image, i) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
              spanClasses[image.span || "normal"]
            }`}
          >
            <CloudImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p className="text-white text-sm font-medium tracking-wide uppercase">
                {image.category.replace("-", " ")}
              </p>
              <p className="text-white/70 text-xs mt-1">{image.alt}</p>
            </motion.div>
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
