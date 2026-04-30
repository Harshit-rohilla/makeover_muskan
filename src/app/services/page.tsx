import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import PricingSection from "@/components/services/PricingSection";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import SectionDivider from "@/components/shared/SectionDivider";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import JsonLd from "@/components/shared/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore our makeup services and pricing for bridal, editorial, events, lessons, and consultations at Makeover by Muskan.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Pricing | Makeover by Muskan",
    description:
      "Explore our makeup services and pricing for bridal, editorial, events, lessons, and consultations.",
    url: "/services",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Makeover by Muskan - Services & Pricing",
      },
    ],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "BeautySalon",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
  },
  serviceType: "Makeup Artistry",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Makeup Services",
    itemListElement: SERVICE_CATEGORIES.flatMap((cat) =>
      cat.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        price: service.price,
        priceCurrency: "USD",
      }))
    ),
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />

      <section
        className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <SectionHeading
          as="h1"
          title="Services & Pricing"
          subtitle="Professional artistry tailored to your needs and occasion"
        />
        <PricingSection />
      </section>

      <SectionDivider from="var(--color-cream)" to="var(--color-blush)" />

      <section
        className="py-20 sm:py-28 text-center px-4"
        style={{ backgroundColor: "var(--color-blush)" }}
      >
        <AnimatedContainer>
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Ready to Book?
          </h2>
          <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
            Send us a message on WhatsApp to discuss your needs and schedule
            your session.
          </p>
          <WhatsAppButton label="Book Your Session" />
        </AnimatedContainer>
      </section>

      <SectionDivider from="var(--color-blush)" to="var(--color-cream)" />
    </>
  );
}
