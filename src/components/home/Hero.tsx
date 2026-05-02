"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { SITE_CONFIG } from "@/lib/constants";
import { HERO_DESKTOP, HERO_MOBILE } from "@/lib/hero-assets";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjRDMkMyIi8+PC9zdmc+";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Low-quality blurred placeholder — mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={HERO_MOBILE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover scale-110"
          style={{ filter: "blur(30px)" }}
          priority
          aria-hidden="true"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          quality={1}
        />
      </div>

      {/* Low-quality blurred placeholder — desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={HERO_DESKTOP}
          alt=""
          fill
          sizes="100vw"
          className="object-cover scale-110"
          style={{ filter: "blur(30px)" }}
          priority
          aria-hidden="true"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          quality={1}
        />
      </div>

      {/* Full-quality image with reveal animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={imageLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ filter: "blur(20px)", scale: 1.05 }}
          animate={
            imageLoaded
              ? { filter: "blur(0px)", scale: 1 }
              : { filter: "blur(20px)", scale: 1.05 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Full image — mobile */}
          <Image
            src={HERO_MOBILE}
            alt="Makeover by Muskan - Professional Makeup Artistry"
            fill
            sizes="100vw"
            className="object-cover md:hidden"
            priority
            onLoad={handleLoad}
            quality={85}
          />
          {/* Full image — desktop */}
          <Image
            src={HERO_DESKTOP}
            alt="Makeover by Muskan - Professional Makeup Artistry"
            fill
            sizes="100vw"
            className="object-cover hidden md:block"
            priority
            quality={85}
          />
        </motion.div>
      </motion.div>

      {/* Gradient overlay at bottom for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--color-cream) 100%)",
        }}
      />

      {/* Brand text — appears after image loads */}
      <AnimatePresence>
        {imageLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-36 sm:pb-44 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center drop-shadow-2xl"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              {SITE_CONFIG.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="mt-4 text-lg sm:text-xl text-white/90 tracking-widest uppercase text-center drop-shadow-lg"
            >
              {SITE_CONFIG.tagline}
            </motion.p>
          </div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <AnimatePresence>
        {imageLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
