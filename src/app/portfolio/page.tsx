import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import BeforeAfter from "@/components/portfolio/BeforeAfter";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionDivider from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of bridal, editorial, event, and everyday beauty transformations at Makeover by Muskan.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | Makeover by Muskan",
    description:
      "Browse our portfolio of bridal, editorial, event, and everyday beauty transformations.",
    url: "/portfolio",
    images: [
      {
        url: "/images/portfolio/img-01.jpg",
        width: 1200,
        height: 630,
        alt: "Makeover by Muskan - Portfolio",
      },
    ],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section
        className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <SectionHeading
          as="h1"
          title="Our Portfolio"
          subtitle="Explore our work across bridal, editorial, events, and more"
        />
        <PortfolioGrid />
      </section>

      <SectionDivider from="var(--color-cream)" to="var(--color-blush)" />

      <section style={{ backgroundColor: "var(--color-blush)" }}>
        <BeforeAfter />
      </section>

      <SectionDivider from="var(--color-blush)" to="var(--color-cream)" />
    </>
  );
}
