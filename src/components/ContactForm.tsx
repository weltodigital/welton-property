"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";

const fieldBase =
  "w-full rounded-md border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/45 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300";

export function ContactForm({
  defaultService,
  compact = false,
}: {
  defaultService?: string;
  /** Tighter spacing for the floating widget, where width is at a premium. */
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrors({});
    setFormError(null);

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setErrors(json.errors ?? {});
        setFormError(
          json.error ??
            (json.errors
              ? "Please check the highlighted fields."
              : "Something went wrong. Please try again."),
        );
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setFormError(
        `We could not send that. Please email ${site.email} directly.`,
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className={cn(
          "rounded-lg bg-brand-50 ring-1 ring-brand-200",
          compact ? "p-6" : "p-8",
        )}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600">
          <svg viewBox="0 0 20 20" className="h-5 w-5 text-white" aria-hidden="true">
            <path
              d="M4 10.5 8.5 15 16 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold">Thanks, that’s with us.</h3>
        <p className="mt-2 leading-relaxed text-ink-700/85">
          We read every enquiry ourselves and normally come back within one
          working day. If it’s urgent, call us on{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-brand-700 underline underline-offset-2"
          >
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-700 underline underline-offset-2"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={compact ? "space-y-4" : "space-y-5"}
    >
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={cn("grid gap-4", !compact && "gap-5 sm:grid-cols-2")}>
        <Field
          label="Your name"
          name="name"
          required
          autoComplete="name"
          error={errors.name}
        />
        <Field
          label="Email address"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={errors.email}
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone}
        />
        <Field
          label="Postcode"
          name="postcode"
          autoComplete="postal-code"
          placeholder="PO1 2AB"
          error={errors.postcode}
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-ink-900"
        >
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService ?? ""}
          className={cn(fieldBase, "mt-2 appearance-none bg-white")}
        >
          <option value="">Select a service…</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-ink-900"
        >
          Tell us about the job <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          required
          placeholder="A rough idea of what you’re planning, the property, and any timings you’ve got in mind."
          aria-invalid={Boolean(errors.message)}
          className={cn(
            fieldBase,
            "mt-2 resize-y",
            errors.message && "border-red-500 focus:ring-red-200",
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {formError && (
        <p
          role="alert"
          className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
        >
          {formError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="text-xs text-ink-700/65">
          We only use your details to answer your enquiry.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink-900">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        className={cn(
          fieldBase,
          "mt-2",
          error && "border-red-500 focus:ring-red-200",
        )}
        {...rest}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
