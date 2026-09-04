import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/cn";

const Arrow = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
    aria-hidden="true"
  >
    <path
      d="M2 8h11m-4.5-4.5L13 8l-4.5 4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ServiceCard({
  service,
  priority = false,
  wide = false,
}: {
  service: Service;
  priority?: boolean;
  /** Horizontal layout that spans the full grid width — used to close off an odd row. */
  wide?: boolean;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group overflow-hidden rounded-lg bg-white shadow-card ring-1 ring-ink-900/8 transition-shadow duration-200 hover:shadow-lift",
        wide
          ? "grid sm:col-span-2 lg:col-span-3 sm:grid-cols-[minmax(0,1fr)_1.4fr]"
          : "flex flex-col",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-brand-100",
          wide ? "aspect-16/10 sm:aspect-auto sm:min-h-56" : "aspect-16/10",
        )}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes={
            wide
              ? "(min-width: 640px) 40vw, 100vw"
              : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          }
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col p-6",
          wide && "justify-center p-8 sm:p-10",
        )}
      >
        <h3 className={cn("font-bold", wide ? "text-xl" : "text-lg")}>
          {service.title}
        </h3>
        <p
          className={cn(
            "mt-2 leading-relaxed text-ink-700/80",
            wide ? "max-w-xl text-base" : "flex-1 text-sm",
          )}
        >
          {service.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          Learn more
          <Arrow />
        </span>
      </div>
    </Link>
  );
}
