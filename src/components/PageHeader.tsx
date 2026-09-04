import { Container } from "@/components/Container";

/** Standard dark banner used at the top of interior pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink-900">
      <Container className="py-16 sm:py-20">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100/80">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
