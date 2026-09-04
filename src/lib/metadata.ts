import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Shared social card. Individual pages can pass their own. */
export const defaultOgImage = {
  url: "/images/projects/kitchen-extension-interior.jpg",
  width: 1920,
  height: 1080,
  alt: "Open-plan kitchen extension built by Welton Property",
};

/**
 * Next replaces the whole `openGraph` object when a page declares one, rather
 * than merging field by field. Without this a page would inherit the layout's
 * og:title and og:url and every share card would read as the homepage.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  /** Route path, leading slash, no trailing slash. Empty string for home. */
  path: string;
  image?: { url: string; width: number; height: number; alt?: string };
}): Metadata {
  const fullTitle = path === "" ? title : `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path === "" ? "/" : path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: site.name,
      title: fullTitle,
      description,
      url: `${site.url}${path}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
