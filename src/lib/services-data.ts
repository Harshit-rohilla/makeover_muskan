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
  {
    id: "lessons",
    title: "Lessons & Consultations",
    services: [
      {
        id: "one-on-one",
        title: "1-on-1 Makeup Lesson",
        description: "Personalized makeup lesson tailored to your features, style, and skill level.",
        price: "From $120",
        duration: "1.5-2 hours",
        features: ["Personalized routine", "Product recommendations", "Technique training", "Take-home guide", "Follow-up support"],
        icon: "\u{1F393}",
      },
      {
        id: "consultation",
        title: "Beauty Consultation",
        description: "Expert analysis of your features with personalized product and technique recommendations.",
        price: "From $75",
        duration: "45 minutes",
        features: ["Skin analysis", "Color matching", "Product guide", "Technique tips", "Written summary"],
        icon: "\u{1F484}",
      },
    ],
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  { year: "2015", title: "The Beginning", description: "Started the journey with a passion for colors and a dream of making people feel beautiful. Completed professional makeup certification." },
  { year: "2017", title: "First Editorial Feature", description: "Landed the first magazine cover shoot, opening doors to the editorial and fashion world." },
  { year: "2019", title: "Studio Launch", description: "Opened Makeover by Muskan, a dedicated space for consultations, lessons, and bridal preparations." },
  { year: "2021", title: "Award Recognition", description: "Received the Regional Makeup Artist of the Year award, celebrating years of dedication to the craft." },
  { year: "2023", title: "Going International", description: "Expanded to destination weddings and international fashion weeks, bringing artistry across borders." },
  { year: "2025", title: "10 Years Strong", description: "Celebrating a decade of beauty, with thousands of happy clients and a growing team of talented artists." },
];

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Bridal Looks" },
  { value: 15, suffix: "", label: "Awards Won" },
];
