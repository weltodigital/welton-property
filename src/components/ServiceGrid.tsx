import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

/**
 * Seven services do not divide evenly into a three-column grid, so the last
 * one runs full width as a horizontal card rather than sitting alone.
 */
export function ServiceGrid({ prioritise = 3 }: { prioritise?: number }) {
  const grid = services.slice(0, 6);
  const trailing = services.slice(6);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {grid.map((service, i) => (
        <ServiceCard
          key={service.slug}
          service={service}
          priority={i < prioritise}
        />
      ))}
      {trailing.map((service) => (
        <ServiceCard key={service.slug} service={service} wide />
      ))}
    </div>
  );
}
