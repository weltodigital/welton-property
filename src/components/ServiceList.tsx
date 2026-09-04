import Link from "next/link";
import { services } from "@/lib/services";

/**
 * A divided list rather than a card grid. Two reasons: there is no honest
 * photography for half these trades, and seven items never sat properly in a
 * three-column grid. Rows also let the real project photos elsewhere on the
 * page carry the imagery on their own.
 */
export function ServiceList() {
  return (
    <div className="border-t border-ink-900/12">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group grid gap-x-8 gap-y-2 border-b border-ink-900/12 py-7 transition-colors hover:bg-brand-50/60 sm:grid-cols-[16rem_1fr_auto] sm:items-baseline sm:py-8"
        >
          <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-700">
            {service.title}
          </h3>
          <p className="max-w-2xl leading-relaxed text-ink-700/85">
            {service.summary}
          </p>
          <span
            aria-hidden="true"
            className="hidden text-brand-600 transition-transform duration-200 group-hover:translate-x-1 sm:block"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4">
              <path
                d="M2 8h11m-4.5-4.5L13 8l-4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
