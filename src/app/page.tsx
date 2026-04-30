import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import QuickServices from "@/components/home/QuickServices";
import CallToAction from "@/components/home/CallToAction";
import SectionDivider from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "Makeover by Muskan | Professional Makeup Artist",
  description:
    "Professional makeup artistry for bridal, editorial, events, and everyday beauty. Book your session with Makeover by Muskan today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Makeover by Muskan | Professional Makeup Artist",
    description:
      "Professional makeup artistry for bridal, editorial, events, and everyday beauty. Book your session today.",
    url: "/",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Makeover by Muskan - Professional Makeup Artistry",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />

      <section style={{ backgroundColor: "var(--color-cream)" }}>
        <FeaturedWork />
      </section>

      <SectionDivider from="var(--color-cream)" to="var(--color-blush)" height="100px" />

      <section style={{ backgroundColor: "var(--color-blush)" }}>
        <QuickServices />
      </section>

      <SectionDivider from="var(--color-blush)" to="var(--color-mauve)" height="100px" />

      <CallToAction />

      <SectionDivider from="var(--color-charcoal)" to="var(--color-charcoal)" height="0px" />
    </>
  );
}
