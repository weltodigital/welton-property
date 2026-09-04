import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <figure className="group overflow-hidden rounded-lg bg-white shadow-card ring-1 ring-ink-900/8">
      <div className="relative aspect-4/3 overflow-hidden bg-brand-100">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-white/95 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-brand-800">
          {project.category}
        </span>
      </div>
      <figcaption className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-bold">{project.title}</h3>
          <span className="shrink-0 text-xs font-semibold text-brand-700">
            {project.location}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
          {project.summary}
        </p>
      </figcaption>
    </figure>
  );
}
