import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { Testimonials } from "@/components/Testimonials";
import { AreasCovered } from "@/components/AreasCovered";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const howWeWork = [
  {
    step: "01",
    title: "We come and look",
    body: "A proper site visit, not a guess over the phone. We measure up, talk through what you actually want and tell you honestly what is and is not realistic for your budget.",
  },
  {
    step: "02",
    title: "We build it and clean up",
    body: "A programme you can hold us to, a tidy site every evening, and a snagging walk-round before we ask for the final payment.",
  },
];

const homeFaqs = [
  {
    q: "Do you cover all the trades yourselves?",
    a: "Yes — building, architectural design, plumbing, electrics, landscaping, plastering and rendering are all handled in-house.",
  },
  {
    q: "How much does an extension or renovation cost?",
    a: "It depends far too much on the property to give a meaningful figure here, and anyone who gives you one over the phone is guessing. Get in touch and we will come out and look at the job properly.",
  },
  {
    q: "How far do you travel?",
    a: `We work across ${site.baseTown}, Fareham, Havant, Waterlooville, Chichester and the surrounding ${site.county} coast. If you are slightly outside that, get in touch anyway and we will tell you straight away whether we can help.`,
  },
  {
    q: "Can you help with planning permission?",
    a: "We can. Our architectural team handles measured surveys, drawings, planning applications and building regulations packages.",
  },
];

export default function HomePage() {
  const featured = projects.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <Image
          src="/images/projects/kitchen-extension-interior.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_45%] opacity-55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/80 to-ink-950/25"
        />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-light">
              {site.baseTown} · {site.county} · {site.region}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Builders and renovators on the south coast.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/85">
              Welton Property builds, renovates and finishes homes across{" "}
              {site.baseTown}, {site.county} and {site.region}. Extensions and
              architectural design through to plumbing, electrics, landscaping
              and plastering.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="onDark">
                Get in touch
              </Button>
              <Button href="/projects" variant="ghost">
                See our work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we do"
              title="The work we take on"
              intro="Extensions, structural work and full renovations, architectural design, plumbing and heating, electrics, landscaping and driveways, plastering and rendering."
            />
            <Button href="/services" variant="secondary">
              All services
            </Button>
          </div>

          <div className="mt-12">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="bg-brand-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-lift">
              <Image
                src="/images/projects/rendered-house-porch.jpg"
                alt="Semi-detached house after rendering, with a newly built porch"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="How we work"
                title="No surprises, start to finish"
                intro="Building work has a reputation for going over budget and over time. Most of that comes down to nobody owning the programme."
              />
              <ol className="mt-10 space-y-8">
                {howWeWork.map((item) => (
                  <li key={item.step} className="flex gap-5">
                    <span className="font-display text-sm font-extrabold text-brand-500">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-ink-700/85">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recent work"
              title="Jobs we have finished nearby"
              intro="Real projects, photographed on site. Driveways and gardens through to extensions, structural work and full re-renders."
            />
            <Button href="/projects" variant="secondary">
              View all projects
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={i < 3}
              />
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <AreasCovered />

      {/* FAQ */}
      <section className="bg-brand-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="Common questions"
              title="The things people ask us first"
              intro="A few of the questions we get asked most often. If yours is not here, ask us directly — we would rather answer it than have you guess."
            />
            <div>
              <FAQ items={homeFaqs} />
              <p className="mt-6 text-sm text-ink-700/80">
                Still not sure?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-brand-700 underline underline-offset-2"
                >
                  Send us a message
                </Link>{" "}
                — we would rather answer a question than have you guess.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
