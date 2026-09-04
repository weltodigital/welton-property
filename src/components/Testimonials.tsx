import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  // Hidden entirely until real reviews are added — see src/lib/testimonials.ts
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What clients say"
          title="Homeowners across the south coast"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.quote}
              className="flex flex-col rounded-lg bg-brand-50 p-7 ring-1 ring-brand-200"
            >
              <p className="flex-1 leading-relaxed text-ink-800">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-brand-200 pt-4 text-sm">
                <p className="font-bold text-ink-900">{t.name}</p>
                <p className="text-ink-700/70">
                  {t.service} · {t.location}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
