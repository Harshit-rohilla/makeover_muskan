export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: PortfolioCategory;
  width: number;
  height: number;
  span?: "normal" | "wide" | "tall" | "large";
}

export type PortfolioCategory =
  | "all"
  | "bridal"
  | "editorial"
  | "party"
  | "special-effects"
  | "everyday";

export interface CategoryOption {
  id: PortfolioCategory;
  label: string;
}

export interface LookComparisonPair {
  id: string;
  left: string;
  right: string;
  leftLabel: string;
  rightLabel: string;
  alt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
