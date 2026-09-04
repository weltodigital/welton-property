import type { Metadata } from "next";
import { Container } from "@/components/Container";
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
        title="What we do"
        intro={`From the first survey drawing to the last coat of render, across ${site.baseTown} and the wider ${site.county} coast.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ServiceGrid />
        </Container>
      </section>


      <AreasCovered />
      <CTABand />
    </>
  );
}
