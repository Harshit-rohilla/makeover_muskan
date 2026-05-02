import { ServiceCategory, TimelineEntry, Stat } from "@/types";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "bridal",
    title: "Bridal",
    services: [
      {
        id: "bridal-classic",
        title: "Classic Bridal",
        description: "Timeless bridal makeup designed to photograph beautifully and last all day. Includes consultation and trial.",
        price: "From $350",
        duration: "2-3 hours",
        features: ["Pre-wedding consultation", "Full trial session", "Day-of application", "Touch-up kit", "Lash application"],
        icon: "\u{1F48D}",
        popular: true,
      },
      {
        id: "bridal-party",
        title: "Bridal Party Package",
        description: "Complete makeup for the bride and her party. Coordinated looks that complement each other beautifully.",
        price: "From $150/person",
        duration: "1-1.5 hours each",
        features: ["Bride + bridesmaids", "Coordinated looks", "Mother of bride/groom", "Flower girl (complimentary)", "Group discount available"],
        icon: "\u{1F470}",
      },
    ],
  },
  {
    id: "editorial",
    title: "Editorial & Fashion",
    services: [
      {
        id: "editorial-shoot",
        title: "Editorial Shoot",
        description: "High-fashion, editorial-quality makeup for photoshoots, lookbooks, and magazine features.",
        price: "From $250",
        duration: "2-4 hours",
        features: ["Concept discussion", "Multiple look changes", "On-set touch-ups", "High-definition finish", "Creative direction"],
        icon: "\u{1F4F8}",
      },
      {
        id: "fashion-runway",
        title: "Fashion & Runway",
        description: "Backstage makeup for fashion shows and runway events. Quick, flawless application under pressure.",
        price: "Custom quote",
        duration: "Varies",
        features: ["Backstage expertise", "Quick-change capability", "Designer collaboration", "Multiple models", "Full show coverage"],
        icon: "\u2728",
      },
    ],
  },
  {
    id: "events",
    title: "Events & Special Occasions",
    services: [
      {
        id: "party-glam",
        title: "Party & Event Glam",
        description: "Red carpet-ready makeup for galas, proms, anniversaries, and special celebrations.",
        price: "From $150",
        duration: "1-1.5 hours",
        features: ["Glamorous finish", "Long-lasting formula", "Lash application", "Lip color selection", "Travel to location"],
        icon: "\u{1F389}",
        popular: true,
      },
      {
        id: "sfx",
        title: "Special Effects",
        description: "Creative and theatrical SFX makeup for film, theatre, Halloween, and costume events.",
        price: "From $200",
        duration: "2-5 hours",
        features: ["Prosthetic application", "Body painting", "Aging & character work", "Wound simulation", "Custom creations"],
        icon: "\u{1F3AD}",
      },
    ],
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    year: "2019",
    title: "Professional Training",
    description:
      "Completed professional makeup artistry training and certification—the foundation that everything else was built on.",
  },
  {
    year: "2020",
    title: "Working with Clients",
    description:
      "Started taking on professional bookings, working hands-on with brides and clients and turning technique into real-world experience.",
  },
  {
    year: "2022",
    title: "Studio Launch",
    description:
      "Opened Makeover by Muskan, a dedicated space for consultations, lessons, and bridal preparations as the practice grew.",
  },
  {
    year: "2023",
    title: "Bridal & Beyond",
    description:
      "Expanded into destination weddings and editorial work, with a growing focus on bridal artistry and memorable wedding-day looks.",
  },
  {
    year: "2026",
    title: "6+ Years of Beauty",
    description:
      "Six years and counting: hundreds of happy clients, 100+ bridal transformations, and the same passion for helping every face shine.",
  },
];

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Bridal Looks" },
  { value: 50, suffix: "+", label: "Luxury Brands" },
];
