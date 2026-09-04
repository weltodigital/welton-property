export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  service: string;
};

/**
 * REAL customer reviews only.
 *
 * This array is intentionally empty — the testimonial section is hidden on the
 * site until it has entries, so nothing invented ever goes live. Paste in real
 * quotes (ideally with permission, and matching a public Google/Checkatrade
 * review so they can be verified) using this shape:
 *
 *   {
 *     quote: "They re-rendered the front of the house and rebuilt the porch...",
 *     name: "Sarah T.",
 *     location: "Havant",
 *     service: "Rendering & porch",
 *   },
 */
export const testimonials: Testimonial[] = [];
