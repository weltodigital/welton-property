/**
 * Claims shown in the trust bar on the homepage and About page.
 * Every one of these is a public promise — only add something you can stand behind.
 *
 * The layout adapts to however many entries are here (see TrustBar.tsx), so it is
 * safe to add or remove items.
 */
export const credentials = [
  {
    stat: "7",
    label: "Trades in-house",
    detail: "One company for the whole job, not six numbers to chase.",
  },
  {
    stat: "Free",
    label: "Written quotes",
    detail: "Itemised and fixed, so you know the number before we start.",
  },
] as const;
