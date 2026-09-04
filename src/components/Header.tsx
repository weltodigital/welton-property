"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile drawer whenever the route changes. Adjusting state during
  // render (rather than in an effect) avoids a second render pass.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Contact strip */}
      <div className="hidden bg-ink-900 text-brand-100 md:block">
        <Container className="flex h-10 items-center justify-between text-xs">
          <p className="text-brand-200/80">
            Serving {site.baseTown} and {site.region} · {site.openingHours}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="font-semibold hover:text-white"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="font-semibold hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </Container>
      </div>

      <div className="border-b border-ink-900/10 bg-white/95 backdrop-blur-sm">
        <Container className="flex h-18 items-center justify-between gap-4 py-3">
          <Logo />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.href === "/services") {
                return (
                  <div key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                        active
                          ? "text-brand-700"
                          : "text-ink-800 hover:text-brand-700",
                      )}
                    >
                      {link.label}
                      <svg
                        viewBox="0 0 12 12"
                        className="h-2.5 w-2.5 transition-transform group-hover:rotate-180"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 4.5 6 8.5l4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                    </Link>
                    <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="overflow-hidden rounded-lg border border-ink-900/10 bg-white p-1.5 shadow-lift">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                            >
                              {service.navLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "text-brand-700"
                      : "text-ink-800 hover:text-brand-700",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Wrapper controls visibility: putting `hidden` on the Button
                itself loses to the `inline-flex` in its own base classes,
                since both are unconditional display utilities. */}
            <span className="hidden sm:block">
              <Button href="/contact">Get in touch</Button>
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md ring-1 ring-inset ring-ink-900/12 lg:hidden"
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-ink-900/10 bg-white lg:hidden"
        >
          <Container className="py-6">
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base font-semibold",
                        isActive(link.href)
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink-900",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-6 px-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
                Our services
              </p>
              <ul className="mt-2 space-y-0.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink-700"
                    >
                      {service.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 space-y-3 border-t border-ink-900/10 pt-6">
              <Button href="/contact" className="w-full">
                Get in touch
              </Button>
              <Button href={site.phoneHref} variant="ghost" className="w-full">
                Call {site.phone}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
