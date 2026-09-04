import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Supplied wordmark. The artwork is black on transparent, so the dark footer
 * gets a white-inked copy of the same file rather than a CSS filter.
 */
const LOGO = {
  dark: "/images/brand/welton-property-logo.png",
  light: "/images/brand/welton-property-logo-white.png",
  width: 777,
  height: 361,
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label={`${site.name} — home`}
    >
      <Image
        src={light ? LOGO.light : LOGO.dark}
        alt={site.name}
        width={LOGO.width}
        height={LOGO.height}
        priority
        className={light ? "h-12 w-auto" : "h-10 w-auto sm:h-11"}
      />
    </Link>
  );
}
