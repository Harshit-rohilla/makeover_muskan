import { NavLink, CategoryOption } from "@/types";

export const SITE_CONFIG = {
  name: "Makeover by Muskan",
  tagline: "Where Beauty Meets Artistry",
  description:
    "Professional makeup artistry for bridal, editorial, events, and everyday beauty. Transforming faces, boosting confidence.",
  siteUrl: "https://makeoverbymuskan.com",
  whatsappNumber: "8882622014",
  whatsappMessage: "Hi! I'd like to book a makeup session.",
  instagram: "https://instagram.com/makeoverby_muskann",
  email: "mkrohilla236@gmail.com",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export const CATEGORIES: CategoryOption[] = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal" },
  { id: "editorial", label: "Editorial" },
  { id: "party", label: "Party Glam" },
  { id: "special-effects", label: "Special Effects" },
  { id: "everyday", label: "Everyday" },
];

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
