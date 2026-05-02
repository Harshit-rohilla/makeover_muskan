import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/shared/ScrollToTop";
import JsonLd from "@/components/shared/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { HERO_OG_IMAGE } from "@/lib/hero-assets";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF8F0",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Makeover by Muskan | Professional Makeup Artist",
    template: "%s | Makeover by Muskan",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "makeup artist",
    "bridal makeup",
    "editorial makeup",
    "beauty studio",
    "professional makeup",
    "wedding makeup",
    "makeup services",
    "beauty transformations",
    "makeup artist near me",
    "luxury beauty",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    title: "Makeover by Muskan | Professional Makeup Artist",
    description: SITE_CONFIG.description,
    images: [
      {
        url: HERO_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Makeover by Muskan - Professional Makeup Artistry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makeover by Muskan | Professional Makeup Artist",
    description: SITE_CONFIG.description,
    images: [HERO_OG_IMAGE],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.siteUrl,
  image: `${SITE_CONFIG.siteUrl}${HERO_OG_IMAGE}`,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.whatsappNumber,
  sameAs: [SITE_CONFIG.instagram],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Your City",
    addressRegion: "Your State",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={localBusinessJsonLd} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton floating />
        <ScrollToTop />
      </body>
    </html>
  );
}
