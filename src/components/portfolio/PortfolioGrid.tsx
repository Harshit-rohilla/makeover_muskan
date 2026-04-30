"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import CloudImage from "@/components/shared/CloudImage";
import CategoryFilter from "./CategoryFilter";
import ImageLightbox from "./ImageLightbox";
import { PORTFOLIO_IMAGES } from "@/lib/portfolio-data";
import { PortfolioCategory, PortfolioImage } from "@/types";

const spanClasses: Record<string, string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 sm:col-span-2 row-span-1",
  tall: "col-span-1 row-span-1 sm:row-span-2",
  large: "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2",
};

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<PortfolioImage | null>(null);

  const filtered =
    activeCategory === "all"
      ? PORTFOLIO_IMAGES
      : PORTFOLIO_IMAGES.filter((img) => img.category === activeCategory);

  const currentIndex = lightboxImage
    ? filtered.findIndex((img) => img.id === lightboxImage.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) setLightboxImage(filtered[currentIndex - 1]);
    else setLightboxImage(filtered[filtered.length - 1]);
  }, [currentIndex, filtered]);

  const handleNext = useCallback(() => {
    if (currentIndex < filtered.length - 1) setLightboxImage(filtered[currentIndex + 1]);
    else setLightboxImage(filtered[0]);
  }, [currentIndex, filtered]);

  return (
    <>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] sm:auto-rows-[320px] gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                spanClasses[image.span || "normal"]
              }`}
              onClick={() => setLightboxImage(image)}
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

              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-medium tracking-wide uppercase">
                  {image.category.replace("-", " ")}
                </p>
                <p className="text-white/70 text-xs mt-1">{image.alt}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
