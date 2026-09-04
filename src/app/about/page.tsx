import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { AreasCovered } from "@/components/AreasCovered";
import { CTABand } from "@/components/CTABand";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: `Welton Property is a ${site.baseTown}-based construction company covering building, design, plumbing, electrics, landscaping and plastering across ${site.county}.`,
  path: "/about",
});

/*
 * NOTE FOR LAUNCH — the copy below deliberately avoids inventing specifics.
 * Ask Harry for the following and drop them in:
 *   • the year the company started, and the founding story in his own words
 *   • how many people are on the team / which trades are employed vs. trusted subbies
 *   • any accreditations to name (Gas Safe, NICEIC/NAPIT, TrustMark, Checkatrade)
 *   • whether workmanship guarantees are offered, and for how long
 */

const values = [
  {
    title: "Straight about money",
    body: "We’ll talk through what the work costs before we start. If something changes, you hear about it at the time. And if a job comes in cheaper than we thought, you pay the cheaper number.",
  },
  {
    title: "We turn up when we say",
    body: "The most common complaint about builders is that they disappear for a fortnight. We only run a few jobs at a time so that doesn’t happen.",
  },
  {
    title: "The invisible bits matter",
    body: "Sub-bases, damp proofing, fixings, falls. None of it shows up in a photo, and all of it decides whether a driveway is still flat in twenty years.",
  },
  {
    title: "You shouldn’t be cleaning up after us",
    body: "Floors get sheeted, the site gets tidied at the end of each day, and the waste leaves with us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Portsmouth builders, working across the south coast"
        intro={`Welton Property is a construction company based in ${site.baseTown}, working across ${site.county} and ${site.region}.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">Our story</p>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-700/90">
                <p>
                  We cover building and structural work, architectural design,
                  plumbing and heating, electrics, landscaping, plastering and
                  rendering, plus the project management that keeps a job in
                  sequence.
                </p>
                <p>
                  We’re a local firm and we intend to stay one. Most of our
                  work comes from people who saw us working on a
                  neighbour’s house.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-card">
                <Image
                  src="/images/projects/block-paving-driveway-porch.jpg"
                  alt="Completed block paving driveway alongside an oak-framed porch"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-16/10 overflow-hidden rounded-lg shadow-card">
                <Image
                  src="/images/projects/structural-joists-extension.jpg"
                  alt="New floor joists and decking installed during an extension build"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we operate"
            title="How we try to work"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-brand-50 p-7 ring-1 ring-brand-200"
              >
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-700/85">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AreasCovered />
      <CTABand
        title="Want to talk it through?"
        body={`Drop Harry a line at ${site.email}, or send over the details of what you’re planning and we’ll come and take a look.`}
      />
    </>
  );
}
