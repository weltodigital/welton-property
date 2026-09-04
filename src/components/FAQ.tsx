export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-semibold text-ink-900 marker:content-none">
            {item.q}
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-45"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4">
                <path
                  d="M8 2v12M2 8h12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl pr-8 leading-relaxed text-ink-700/85">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
