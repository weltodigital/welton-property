import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { CTABand } from "@/components/CTABand";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Our Projects",
  description: `Recent building, driveway, landscaping and rendering projects completed by Welton Property across ${site.baseTown} and ${site.county}.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Recent projects across the south coast"
        intro="All photographed on the jobs themselves: driveways, gardens and decking through to structural work, extensions and full external re-renders."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={i < 3}
              />
            ))}
          </div>

          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-ink-700/70">
            Want to see something closer to your own project? We’ve got more
            photos than fit on a page, so tell us what you’re planning and
            we’ll send over the most relevant ones.
          </p>
        </Container>
      </section>

      <CTABand
        title="Fancy your house on this page?"
        body="Send us a few details about what you’ve got in mind and we’ll book a site visit at a time that suits you."
      />
    </>
  );
}
