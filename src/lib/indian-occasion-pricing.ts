import { SITE_CONFIG } from "@/lib/constants";

export interface OccasionPrice {
  id: string;
  title: string;
  priceNcr: number;
  priceOutsideNcr: number;
  whatsappMessage: string;
}

export const OCCASION_PRICES: OccasionPrice[] = [
  {
    id: "party",
    title: "Party Makeup",
    priceNcr: 5000,
    priceOutsideNcr: 8000,
    whatsappMessage: "Hi! I'd like to book Party Makeup with Makeover by Muskan.",
  },
  {
    id: "haldi",
    title: "Haldi",
    priceNcr: 8000,
    priceOutsideNcr: 10000,
    whatsappMessage: "Hi! I'd like to book Haldi makeup with Makeover by Muskan.",
  },
  {
    id: "mehndi",
    title: "Mehndi",
    priceNcr: 8000,
    priceOutsideNcr: 10000,
    whatsappMessage: "Hi! I'd like to book Mehndi makeup with Makeover by Muskan.",
  },
  {
    id: "roka",
    title: "Roka",
    priceNcr: 8000,
    priceOutsideNcr: 10000,
    whatsappMessage: "Hi! I'd like to book Roka makeup with Makeover by Muskan.",
  },
  {
    id: "cocktail",
    title: "Cocktail / Engagement / Reception",
    priceNcr: 12000,
    priceOutsideNcr: 15000,
    whatsappMessage:
      "Hi! I'd like to book Cocktail / Engagement / Reception makeup with Makeover by Muskan.",
  },
  {
    id: "bridal",
    title: "Bridal Makeup",
    priceNcr: 25000,
    priceOutsideNcr: 30000,
    whatsappMessage: "Hi! I'd like to book Bridal Makeup with Makeover by Muskan.",
  },
  {
    id: "sangeet",
    title: "Sangeet",
    priceNcr: 8000,
    priceOutsideNcr: 10000,
    whatsappMessage: "Hi! I'd like to book Sangeet makeup with Makeover by Muskan.",
  },
  {
    id: "carnival",
    title: "Carnival",
    priceNcr: 8000,
    priceOutsideNcr: 10000,
    whatsappMessage: "Hi! I'd like to book Carnival makeup with Makeover by Muskan.",
  },
];

/** Returns a WhatsApp deep-link with the given prefilled message. */
export function getWhatsAppUrl(message?: string): string {
  const text = message ?? "Hi! I'd like to book a makeup session with Makeover by Muskan.";
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Format a number as Indian rupee string, e.g. 25000 → "₹25,000" */
export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}
