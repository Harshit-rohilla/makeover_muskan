import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import OccasionPricingGrid from "@/components/services/OccasionPricingGrid";
import ServicePoliciesSection from "@/components/services/ServicePoliciesSection";
import BrandMarquee from "@/components/services/BrandMarquee";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import SectionDivider from "@/components/shared/SectionDivider";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import JsonLd from "@/components/shared/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { OCCASION_PRICES, getWhatsAppUrl } from "@/lib/indian-occasion-pricing";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Professional bridal and occasion makeup in Delhi/NCR and outstation. View INR pricing for bridal, party, haldi, mehndi, sangeet, and more at Makeover by Muskan.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Pricing | Makeover by Muskan",
    description:
      "Makeup services for every occasion in Delhi/NCR and outstation — bridal, party, haldi, mehndi, sangeet, and more. Prices in INR.",
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
    itemListElement: OCCASION_PRICES.map((occasion) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: occasion.title,
      },
      price: occasion.priceNcr,
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: occasion.priceNcr,
        priceCurrency: "INR",
        description: "Starting price for Delhi/NCR",
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />

      <section className="w-full" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <SectionHeading
            as="h1"
            title="Services & Pricing"
            subtitle="Professional artistry for every occasion — Delhi/NCR and beyond"
          />
          <OccasionPricingGrid />
          <ServicePoliciesSection />
        </div>
      </section>

      <SectionDivider from="var(--color-cream)" to="var(--color-charcoal)" />

      <BrandMarquee />

      <SectionDivider from="var(--color-charcoal)" to="var(--color-blush)" />

      <section className="w-full py-20 sm:py-28 text-center px-4" style={{ backgroundColor: "var(--color-blush)" }}>
        <AnimatedContainer>
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Ready to Book?
          </h2>
          <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
            Send a message on WhatsApp to discuss your occasion and lock in your date.
          </p>
          <WhatsAppButton
            label="Book Your Session"
            href={getWhatsAppUrl("Hi! I'd like to book a makeup session with Makeover by Muskan.")}
          />
        </AnimatedContainer>
      </section>

      <SectionDivider from="var(--color-blush)" to="var(--color-cream)" />
    </>
  );
}
