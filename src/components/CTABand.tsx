import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export function CTABand({
  title = "Thinking about a project?",
  body = "Tell us what you have in mind and we will come out, take a proper look and give you an honest, itemised quote. No pressure and no charge.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink-900">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow eyebrow-light">Free, no-obligation quote</p>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-brand-100/80">
              {body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button href="/contact" variant="onDark" className="flex-1">
              Request a quote
            </Button>
            <Button href={site.phoneHref} variant="ghost" className="flex-1">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
