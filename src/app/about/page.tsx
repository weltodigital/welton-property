import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBar } from "@/components/TrustBar";
import { AreasCovered } from "@/components/AreasCovered";
import { CTABand } from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Welton Property is a ${site.baseTown}-based construction company covering building, design, plumbing, electrics, landscaping and plastering across ${site.county}.`,
  alternates: { canonical: "/about" },
};

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
    title: "We quote what it costs",
    body: "An itemised written quote, and a conversation if something changes rather than a surprise on the final invoice. If a job turns out cheaper than quoted, you pay the cheaper number.",
  },
  {
    title: "We turn up when we say",
    body: "The single most common complaint about builders is that they vanish. We run a manageable number of jobs at once precisely so that does not happen to you.",
  },
  {
    title: "We do the invisible bits properly",
    body: "Sub-bases, damp proofing, fixings, falls. Nobody ever compliments a sub-base — but it is the difference between a driveway that lasts twenty years and one that sinks in three.",
  },
  {
    title: "We leave it clean",
    body: "Sheeted floors, a tidy site at the end of each day, and all waste taken away. You should not be sweeping up after us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A south coast builder that covers the whole job"
        intro={`Welton Property is a construction company based in ${site.baseTown}, working across ${site.county} and ${site.region}.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">Our story</p>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-700/90">
                <p>
                  Welton Property grew out of a simple frustration: homeowners
                  were being asked to act as their own project manager. Find a
                  builder, then an electrician, then a plasterer. Chase all
                  three. Work out whose fault it is when the dates slip.
                </p>
                <p>
                  We decided to bring the trades together instead. Today we
                  cover building and structural work, architectural design,
                  plumbing and heating, electrics, landscaping, plastering and
                  rendering — plus the project management that holds them in
                  sequence.
                </p>
                <p>
                  It means you get one quote, one programme and one person to
                  ring. It also means we cannot pass the blame anywhere, which
                  is rather the point.
                </p>
                <p>
                  We are a local firm and we intend to stay one. Most of our
                  work comes from people who saw us on a neighbour&rsquo;s
                  house, which is a strong incentive to leave every street we
                  work on looking better than we found it.
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

      <TrustBar />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we operate"
            title="Four things we will not compromise on"
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
        body={`Drop Harry a line at ${site.email} or send us the details of what you are planning. We will come out, take a look and give you a straight answer.`}
      />
    </>
  );
}
