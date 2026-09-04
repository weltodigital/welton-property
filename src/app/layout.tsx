import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { areasCovered, site } from "@/lib/site";
import { services } from "@/lib/services";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Builders in ${site.baseTown} & ${site.county}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "builders Portsmouth",
    "extensions Portsmouth",
    "construction company Hampshire",
    "block paving Portsmouth",
    "plastering Portsmouth",
    "electrician Portsmouth",
    "plumber Portsmouth",
    "landscaping Hampshire",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Builders in ${site.baseTown} & ${site.county}`,
    description: site.description,
    images: [
      {
        url: "/images/projects/kitchen-extension-interior.jpg",
        width: 1920,
        height: 1080,
        alt: "Open-plan kitchen extension built by Welton Property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Builders in ${site.baseTown} & ${site.county}`,
    description: site.description,
    images: ["/images/projects/kitchen-extension-interior.jpg"],
  },
  robots: { index: true, follow: true },
};

/** schema.org LocalBusiness — helps Welton Property show up in local map results. */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#organisation`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/icon.png`,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: areasCovered.map((name) => ({ "@type": "City", name })),
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      url: `${site.url}/services/${service.slug}`,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${display.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
