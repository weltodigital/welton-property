import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
          That page has been knocked through.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700/85">
          The page you were after does not exist any more. Try our services or
          our recent projects — or just give us a ring on{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-brand-700 underline underline-offset-2"
          >
            {site.phone}
          </a>
          .
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/services" variant="ghost">
            Browse services
          </Button>
        </div>
      </Container>
    </section>
  );
}
