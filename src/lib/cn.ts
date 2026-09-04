/** Tiny class-name joiner — keeps conditional Tailwind classes readable. */
export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
