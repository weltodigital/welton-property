import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CTABand } from "@/components/CTABand";
import { AreasCovered } from "@/components/AreasCovered";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Building, architectural design, plumbing, electrics, landscaping, plastering and project management across ${site.baseTown} and ${site.county}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Every trade you need, under one roof"
        intro={`From the first survey drawing to the last coat of render. We cover seven trades in-house across ${site.baseTown} and the wider ${site.county} coast, which means one company is accountable for the whole job.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ServiceGrid />
        </Container>
      </section>

      <section className="bg-brand-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why one contractor"
            title="The handover between trades is where jobs go wrong"
            intro="Waiting three weeks for a plasterer because the electrician finished late is the single most common reason a renovation overruns. When the trades sit in the same company, that gap disappears — and so does the argument about whose fault it was."
            align="center"
          />
        </Container>
      </section>

      <AreasCovered />
      <CTABand />
    </>
  );
}
