import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { AreasCovered } from "@/components/AreasCovered";
import { areasCovered, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with Welton Property. Building, design, plumbing, electrics, landscaping and plastering across ${site.baseTown} and ${site.county}.`,
  alternates: { canonical: "/contact" },
};

const details = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "We read every enquiry ourselves.",
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    note: site.openingHours,
  },
  {
    label: "Areas covered",
    value: `${site.baseTown} and ${site.county}`,
    note: `${areasCovered.slice(0, 6).join(", ")} and the surrounding coast.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your project"
        intro="Send us a few details and we will come out, take a proper look and talk you through what the work involves."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
            <div>
              <h2 className="text-2xl font-extrabold">Send us a message</h2>
              <p className="mt-3 leading-relaxed text-ink-700/85">
                The more you can tell us the more useful our first reply will
                be — but a couple of lines is plenty to get started.
              </p>
              <div className="mt-9">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:pt-2">
              <div className="rounded-lg bg-brand-50 p-8 ring-1 ring-brand-200">
                <h2 className="text-lg font-bold">Or reach us directly</h2>
                <dl className="mt-6 space-y-6">
                  {details.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
                        {item.label}
                      </dt>
                      <dd className="mt-1.5">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-semibold text-ink-900 underline underline-offset-2 hover:text-brand-700"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-semibold text-ink-900">
                            {item.value}
                          </span>
                        )}
                        <p className="mt-1 text-sm leading-relaxed text-ink-700/75">
                          {item.note}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 rounded-lg border border-ink-900/10 p-8">
                <h2 className="text-lg font-bold">What happens next</h2>
                <ol className="mt-5 space-y-4 text-sm leading-relaxed text-ink-700/85">
                  <li className="flex gap-3">
                    <span className="font-display font-extrabold text-brand-500">
                      1
                    </span>
                    We reply within one working day to ask anything we need to
                    know.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display font-extrabold text-brand-500">
                      2
                    </span>
                    We book a site visit at a time that suits you, including
                    evenings.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display font-extrabold text-brand-500">
                      3
                    </span>
                    We agree the work and the timings before anything
                    starts.
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <AreasCovered />
    </>
  );
}
