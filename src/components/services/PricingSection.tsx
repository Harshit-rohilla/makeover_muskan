"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "./ServiceCard";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

export default function PricingSection() {
  return (
    <div className="space-y-20">
      {SERVICE_CATEGORIES.map((category) => (
        <div key={category.id}>
          <AnimatedContainer>
            <h3
              className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-10"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              {category.title}
            </h3>
          </AnimatedContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
