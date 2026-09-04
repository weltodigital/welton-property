import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { CTABand } from "@/components/CTABand";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Projects",
  description: `Recent building, driveway, landscaping and rendering projects completed by Welton Property across ${site.baseTown} and ${site.county}.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Recent projects across the south coast"
        intro="Photographed on the jobs themselves — driveways, gardens and decking through to structural work, extensions and full external re-renders."
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
            Want to see something closer to your own project? We have more
            photographs than we can sensibly fit on a page — tell us what you
            are planning and we will send over the most relevant examples.
          </p>
        </Container>
      </section>

      <CTABand
        title="Fancy your house on this page?"
        body="Send us a few details about what you have in mind and we will book a site visit at a time that suits you."
      />
    </>
  );
}
