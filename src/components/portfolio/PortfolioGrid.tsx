"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import PortfolioImageCard, { PORTFOLIO_GRID_SPAN_CLASSES } from "./PortfolioImageCard";
import ImageLightbox from "./ImageLightbox";
import { PORTFOLIO_IMAGES } from "@/lib/portfolio-data";
import { PortfolioImage } from "@/types";

export default function PortfolioGrid() {
  const [lightboxImage, setLightboxImage] = useState<PortfolioImage | null>(null);

  const filtered = PORTFOLIO_IMAGES;

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] sm:auto-rows-[320px] gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`min-h-0 ${PORTFOLIO_GRID_SPAN_CLASSES[image.span || "normal"]}`}
            >
              <PortfolioImageCard
                image={image}
                interactive
                onOpen={() => setLightboxImage(image)}
              />
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
