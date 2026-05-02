import type { Metadata } from "next";
import BioSection from "@/components/about/BioSection";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import Stats from "@/components/about/Stats";
import SectionDivider from "@/components/shared/SectionDivider";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the artist behind Makeover by Muskan — six years of passion, artistry, and making people feel beautiful.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Makeover by Muskan",
    description:
      "Learn about the artist behind Makeover by Muskan — six years of passion, artistry, and making people feel beautiful.",
    url: "/about",
    images: [
      {
        url: "/images/about/artist.jpg",
        width: 1200,
        height: 630,
        alt: "Makeover by Muskan - Meet the Artist",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <section
        className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <BioSection />
      </section>

      <SectionDivider from="var(--color-cream)" to="var(--color-blush)" />

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ backgroundColor: "var(--color-blush)" }}
      >
        <Stats />
      </section>

      <SectionDivider from="var(--color-blush)" to="var(--color-cream)" />

      <section
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <JourneyTimeline />
      </section>

      <SectionDivider from="var(--color-cream)" to="var(--color-rose)" />

      <section
        className="py-20 sm:py-28 text-center px-4"
        style={{ backgroundColor: "var(--color-rose)" }}
      >
        <AnimatedContainer>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Whether it&apos;s your wedding day or a creative editorial shoot,
            I&apos;d love to hear from you.
          </p>
          <WhatsAppButton label="Get in Touch" />
        </AnimatedContainer>
      </section>

      <SectionDivider from="var(--color-rose)" to="var(--color-charcoal)" />
    </>
  );
}
