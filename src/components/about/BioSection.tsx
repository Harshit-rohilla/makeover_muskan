"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function BioSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
          <Image
            src="/images/about/artist.jpg"
            alt="Makeover by Muskan - Makeup Artist"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-blush/30 -z-10" />
        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-rose/20 -z-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-sm uppercase tracking-widest text-rose mb-4 font-medium">
          About the Artist
        </p>

        <h1
          className="text-3xl sm:text-4xl font-bold text-charcoal mb-6"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Passionate About Making You Feel Beautiful
        </h1>

        <div className="space-y-4 text-charcoal/70 leading-relaxed">
          <p>
            With over a decade of experience in the beauty industry, I&apos;ve had the
            privilege of working with hundreds of clients, from blushing brides to
            high-fashion models gracing magazine covers.
          </p>
          <p>
            My philosophy is simple: makeup should enhance your natural beauty, not
            mask it. Every face tells a unique story, and my job is to bring that
            story to life with colors, textures, and techniques that feel authentically
            you.
          </p>
          <p>
            Trained at some of the world&apos;s leading beauty academies and continuously
            inspired by the latest trends, I bring a blend of classic technique and
            modern artistry to every look I create.
          </p>
        </div>

        <div className="mt-8 flex gap-6">
          <div>
            <p className="text-3xl font-bold text-rose">500+</p>
            <p className="text-charcoal/50 text-sm">Happy Clients</p>
          </div>
          <div className="w-px bg-charcoal/10" />
          <div>
            <p className="text-3xl font-bold text-rose">10+</p>
            <p className="text-charcoal/50 text-sm">Years</p>
          </div>
          <div className="w-px bg-charcoal/10" />
          <div>
            <p className="text-3xl font-bold text-rose">15</p>
            <p className="text-charcoal/50 text-sm">Awards</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
