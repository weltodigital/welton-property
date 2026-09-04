export const site = {
  name: "Welton Property",
  legalName: "Welton Property Ltd",
  tagline: "Building, renovating and finishing homes across the south coast",
  description:
    "Welton Property is a Portsmouth-based construction company delivering extensions, renovations, architectural design, plumbing, electrics, landscaping and plastering across Hampshire and the south coast.",
  url: "https://weltonproperty.co.uk",
  email: "harry@weltonproperty.co.uk",
  phone: "07361 216937",
  phoneHref: "tel:+447361216937",
  baseTown: "Portsmouth",
  county: "Hampshire",
  region: "the south coast",
  // TODO: confirm the registered/trading address before launch — used in schema.org markup
  address: {
    locality: "Portsmouth",
    region: "Hampshire",
    country: "GB",
  },
  geo: { latitude: 50.8198, longitude: -1.088 },
  openingHours: "Mon–Fri 7:30am–5:30pm, Sat by arrangement",
  social: {
    // TODO: add real profile URLs, or delete the entries you don't use
    facebook: "",
    instagram: "",
  },
} as const;

/** Towns used through the copy and in the local-SEO service-area markup. */
export const areasCovered = [
  "Portsmouth",
  "Southsea",
  "Fareham",
  "Gosport",
  "Havant",
  "Waterlooville",
  "Emsworth",
  "Chichester",
  "Petersfield",
  "Hayling Island",
  "Portchester",
  "Cosham",
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
