import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { areasCovered, site } from "@/lib/site";

export function AreasCovered() {
  return (
    <section className="border-t border-ink-900/10 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <SectionHeading
            eyebrow="Where we work"
            title={`Based in ${site.baseTown}, working across ${site.county}`}
            intro={`We are a local firm and we keep our travel sensible — it is the only way to get to a job quickly when something needs attention. If you are just outside this list, ask anyway.`}
          />
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {areasCovered.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 text-sm font-medium text-ink-800"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0 text-brand-500"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5 6.5 12 13 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
