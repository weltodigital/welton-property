import { Container } from "@/components/Container";
import { credentials } from "@/lib/credentials";
import { cn } from "@/lib/cn";

/** Column counts kept as whole class strings so Tailwind can see them. */
const columns: Record<number, string> = {
  1: "mx-auto max-w-md",
  2: "mx-auto max-w-3xl sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function TrustBar() {
  const layout = columns[credentials.length] ?? columns[4];

  return (
    <section className="border-b border-ink-900/10 bg-brand-50">
      <Container>
        <div className={cn("grid gap-8 py-12", layout)}>
          {credentials.map((item) => (
            <div key={item.label}>
              <p className="font-display text-3xl font-extrabold text-brand-700">
                {item.stat}
              </p>
              <p className="mt-1.5 text-sm font-bold text-ink-900">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-700/75">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
