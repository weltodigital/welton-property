"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

/**
 * Floating enquiry form pinned to the bottom-right corner.
 *
 * Deliberately does not close on an outside click — people lose half-typed
 * enquiries that way. Escape and the close button are the ways out.
 */
export function ContactWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape, and hand focus back to the button that opened it.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Move focus into the panel so keyboard users land on the first field.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLInputElement>("input, textarea")?.focus();
  }, [open]);

  // The contact page already leads with this form.
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-label="Send us an enquiry"
          className="flex max-h-[min(78vh,40rem)] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl bg-white shadow-lift ring-1 ring-ink-900/12"
        >
          <div className="flex items-start justify-between gap-4 bg-ink-900 px-5 py-4">
            <div>
              <p className="font-display text-base font-bold text-white">
                Tell us about the job
              </p>
              <p className="mt-0.5 text-xs text-brand-100/70">
                We normally reply within one working day.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              className="-m-1.5 rounded-md p-1.5 text-brand-200 hover:bg-white/10 hover:text-white"
            >
              <span className="sr-only">Close enquiry form</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto px-5 py-5">
            <ContactForm compact />
            <p className="mt-4 border-t border-ink-900/10 pt-4 text-xs text-ink-700/70">
              Prefer to talk?{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-brand-700 underline underline-offset-2"
              >
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className="inline-flex items-center gap-2.5 rounded-full bg-brand-700 py-3.5 pl-5 pr-5 text-sm font-semibold text-white shadow-lift transition-colors hover:bg-brand-800"
      >
        {open ? (
          <>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Close
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M4 5.5h16v11H9l-5 4v-4H4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinejoin="round"
              />
            </svg>
            Get in touch
          </>
        )}
      </button>
    </div>
  );
}
