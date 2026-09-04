import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/services";
import { areasCovered, navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-brand-100">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-100/70">
              {site.legalName} — building, renovating and finishing homes across{" "}
              {site.baseTown}, {site.county} and {site.region}.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={site.phoneHref}
                className="-my-1 block py-1.5 font-semibold text-white hover:text-brand-200"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="-my-1 block py-1.5 font-semibold text-white hover:text-brand-200"
              >
                {site.email}
              </a>
              <p className="pt-1 text-brand-100/60">{site.openingHours}</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="-my-1 inline-block py-1 text-brand-100/75 hover:text-white"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="-my-1 inline-block py-1 text-brand-100/75 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">
              Areas we cover
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-100/75">
              {areasCovered.join(" · ")} and the surrounding {site.county}{" "}
              coast.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-brand-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="-my-1.5 inline-block py-1.5 hover:text-white"
            >
              Privacy policy
            </Link>
            <Link
              href="/contact"
              className="-my-1.5 inline-block py-1.5 hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
