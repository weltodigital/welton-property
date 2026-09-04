import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ServiceList } from "@/components/ServiceList";
import { CTABand } from "@/components/CTABand";
import { AreasCovered } from "@/components/AreasCovered";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description: `Building, architectural design, plumbing, electrics, landscaping, plastering and project management across ${site.baseTown} and ${site.county}.`,
  path: "/services",
});

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
          <ServiceList />
        </Container>
      </section>


      <AreasCovered />
      <CTABand />
    </>
  );
}
