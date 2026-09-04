import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { getService, services } from "@/lib/services";
import { projectsForService } from "@/lib/projects";
import { areasCovered, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} in ${site.baseTown} & ${site.county}`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — ${site.name}`,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
      images: [{ url: service.image, width: 1920, height: 1080 }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projectsForService(service.slug).slice(0, 3);
  const others = services.filter((s) => s.slug !== service.slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <Image
          src={service.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/85 to-ink-950/40"
        />
        <Container className="relative py-20 sm:py-28">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-brand-100/60">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-200">{service.title}</li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {service.title} in {site.baseTown}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-100/85">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="onDark">
                Get in touch
              </Button>
              <Button href={site.phoneHref} variant="ghost">
                Call {site.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro + offerings */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="eyebrow">About this service</p>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-700/90">
                {service.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-brand-50 p-8 ring-1 ring-brand-200">
              <h2 className="text-lg font-bold">What we cover</h2>
              <ul className="mt-5 space-y-3">
                {service.offerings.map((offering) => (
                  <li key={offering} className="flex gap-3 text-sm text-ink-800">
                    <svg
                      viewBox="0 0 16 16"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
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
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-brand-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How it runs"
            title={`Our ${service.title.toLowerCase()} process`}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {service.process.map((step, i) => (
              <div
                key={step.title}
                className="rounded-lg bg-white p-7 shadow-card ring-1 ring-ink-900/8"
              >
                <span className="font-display text-sm font-extrabold text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-700/85">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-white py-20 sm:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Recent work"
                title={`${service.title} projects`}
              />
              <Button href="/projects" variant="secondary">
                View all projects
              </Button>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQs */}
      <section className="border-t border-ink-900/10 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="Questions"
              title={`${service.title} FAQs`}
              intro={`Answers to what people usually ask before booking ${service.title.toLowerCase()} work.`}
            />
            <FAQ items={service.faqs} />
          </div>
        </Container>
      </section>

      {/* Areas + other services */}
      <section className="bg-brand-50 py-16">
        <Container>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
            {service.title} across {site.county}
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-ink-700/85">
            We take on {service.title.toLowerCase()} work in{" "}
            {areasCovered.slice(0, -1).join(", ")} and {areasCovered.at(-1)}.
          </p>

          <h2 className="mt-12 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
            Other services
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="inline-block rounded-md bg-white px-4 py-2 text-sm font-semibold text-ink-800 ring-1 ring-ink-900/10 hover:text-brand-700 hover:ring-brand-300"
                >
                  {other.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
