import { Container } from "@/components/Container";
import { areasCovered, site } from "@/lib/site";

export function AreasCovered() {
  return (
    <section className="border-t border-ink-900/10 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-end">
          <div className="max-w-md">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Where we work
            </h2>
            <p className="mt-3 leading-relaxed text-ink-700/85">
              We&rsquo;re based in {site.baseTown} and we keep the travel
              sensible, so we can get back quickly if something needs attention.
              If you&rsquo;re just outside this lot, ask anyway.
            </p>
          </div>
          <p className="text-xl leading-relaxed text-ink-900 sm:text-2xl">
            {areasCovered.map((area, i) => (
              <span key={area}>
                {i > 0 && <span className="text-brand-300"> / </span>}
                {area}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
