export type Project = {
  slug: string;
  title: string;
  location: string;
  /** Slugs from services.ts that this job demonstrates. */
  serviceSlugs: string[];
  category: string;
  image: string;
  alt: string;
  summary: string;
};

/**
 * Real completed jobs, using the client's own photography.
 * Locations are indicative of the areas covered — confirm each one with Harry
 * before launch, and add a `date` if you want them ordered chronologically.
 */
export const projects: Project[] = [
  {
    slug: "kitchen-extension-interior",
    title: "Open-plan kitchen extension",
    location: "Portsmouth",
    serviceSlugs: ["building-construction", "project-management"],
    category: "Extensions",
    image: "/images/projects/kitchen-extension-interior.jpg",
    alt: "Open-plan kitchen and living space with bi-fold doors onto a decked garden",
    summary:
      "A rear extension knocked through to create a single open-plan kitchen, dining and living space, finished with a full-width run of bi-fold doors onto new decking.",
  },
  {
    slug: "rendered-house-porch",
    title: "External render and new porch",
    location: "Havant",
    serviceSlugs: ["plastering-rendering", "building-construction"],
    category: "Rendering",
    image: "/images/projects/rendered-house-porch.jpg",
    alt: "Semi-detached house with fresh white render, grey windows and a new tiled porch",
    summary:
      "A tired frontage transformed with through-coloured silicone render, a new pitched-roof porch in matching brick, and replacement windows throughout.",
  },
  {
    slug: "block-paving-driveway-porch",
    title: "Silver granite block paving driveway",
    location: "Fareham",
    serviceSlugs: ["landscaping"],
    category: "Driveways",
    image: "/images/projects/block-paving-driveway-porch.jpg",
    alt: "Driveway laid in mixed-tone silver and charcoal block paving beside an oak porch",
    summary:
      "A full driveway and path in mixed silver and charcoal blocks, with a linear drainage channel, planted border and porcelain threshold under the oak porch.",
  },
  {
    slug: "sleeper-driveway-landscaping",
    title: "Driveway with sleeper retaining walls",
    location: "Hayling Island",
    serviceSlugs: ["landscaping"],
    category: "Driveways",
    image: "/images/projects/sleeper-driveway-landscaping.jpg",
    alt: "New driveway with brindle block paving, concrete path and timber sleeper retaining walls",
    summary:
      "A sloping front garden re-levelled with railway sleeper retaining walls, then finished with brindle block paving, a gravel bay and a poured concrete path.",
  },
  {
    slug: "brindle-block-driveway",
    title: "Brindle herringbone driveway",
    location: "Waterlooville",
    serviceSlugs: ["landscaping"],
    category: "Driveways",
    image: "/images/projects/brindle-block-driveway.jpg",
    alt: "Brindle block paving laid in a herringbone pattern with a charcoal border and drainage channel",
    summary:
      "Brindle blocks laid in herringbone with a double charcoal soldier course, an Aco channel across the threshold and new sleeper edging.",
  },
  {
    slug: "garden-decking",
    title: "Raised garden decking and steps",
    location: "Portsmouth",
    serviceSlugs: ["landscaping"],
    category: "Gardens",
    image: "/images/projects/garden-decking.jpg",
    alt: "Newly built timber decking with balustrade and steps down to a lawn",
    summary:
      "A raised deck built off the back of the house with a balustrade, wide steps down to the lawn and concealed storage beneath.",
  },
  {
    slug: "structural-joists-extension",
    title: "Structural floor and ceiling joists",
    location: "Gosport",
    serviceSlugs: ["building-construction"],
    category: "Structural",
    image: "/images/projects/structural-joists-extension.jpg",
    alt: "New timber joists and OSB decking over blockwork walls during an extension build",
    summary:
      "The part of the job nobody photographs: new joists, noggins and OSB decking sat on fresh blockwork, all set out level and to building control spec.",
  },
  {
    slug: "garden-groundworks",
    title: "Front garden clearance and groundworks",
    location: "Southsea",
    serviceSlugs: ["landscaping", "building-construction"],
    category: "Groundworks",
    image: "/images/projects/garden-groundworks.jpg",
    alt: "Front garden stripped back to soil and levelled, ready for a new driveway",
    summary:
      "An overgrown front garden cleared, roots removed and the ground levelled ready for the sub-base — the stage that decides whether paving lasts.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const projectsForService = (serviceSlug: string) =>
  projects.filter((p) => p.serviceSlugs.includes(serviceSlug));

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
