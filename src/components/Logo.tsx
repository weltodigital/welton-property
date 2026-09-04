import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Typographic wordmark with a roofline mark.
 * There was no logo file supplied — swap this out when brand assets arrive.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="Welton Property — home"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <rect
          width="32"
          height="32"
          rx="6"
          className={light ? "fill-brand-200" : "fill-brand-700"}
        />
        <path
          d="M7 18.5 16 10l9 8.5"
          className={light ? "stroke-ink-900" : "stroke-brand-200"}
          strokeWidth="2.4"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M11 22.5h10"
          className={light ? "stroke-ink-900/55" : "stroke-white/70"}
          strokeWidth="2.4"
          strokeLinecap="square"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "whitespace-nowrap font-display text-[1.0625rem] font-extrabold tracking-tight",
            light ? "text-white" : "text-ink-900",
          )}
        >
          Welton Property
        </span>
        <span
          className={cn(
            "mt-1 whitespace-nowrap text-[0.625rem] font-semibold uppercase tracking-[0.16em]",
            light ? "text-brand-200" : "text-brand-700",
          )}
        >
          Construction &amp; Design
        </span>
      </span>
    </Link>
  );
}
