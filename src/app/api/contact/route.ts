import { NextResponse } from "next/server";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(body: Payload) {
  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const postcode = str(body.postcode);
  const service = str(body.service);
  const message = str(body.message);

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (phone && phone.replace(/\D/g, "").length < 9)
    errors.phone = "That phone number looks too short.";
  if (message.length < 10)
    errors.message = "Please give us a little more detail (10 characters or more).";
  if (name.length > 100 || email.length > 200 || message.length > 5000)
    errors.message = "That submission is too long.";

  const known = services.map((s) => s.title);
  const safeService =
    service && known.includes(service) ? service : "Not specified";

  return {
    errors,
    data: { name, email, phone, postcode, service: safeService, message },
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — real people never fill this in.
  if (str(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const { errors, data } = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    // Not wired up yet. Log it so nothing is silently lost, and tell the
    // visitor to email directly rather than pretending it sent.
    console.warn(
      "[contact] RESEND_API_KEY / CONTACT_FROM_EMAIL not set — enquiry not emailed:",
      JSON.stringify(data),
    );
    return NextResponse.json(
      {
        ok: false,
        error: `Our enquiry form is not connected yet. Please email ${site.email} directly and we will come straight back to you.`,
      },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Postcode", data.postcode || "—"],
    ["Service", data.service],
  ];

  const html = `
    <h2 style="font-family:sans-serif">New enquiry from weltonproperty.co.uk</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0"><strong>${k}</strong></td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
    <h3 style="font-family:sans-serif">Message</h3>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(data.message)}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [site.email],
        reply_to: data.email,
        subject: `Website enquiry — ${data.service} — ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[contact] Resend rejected the send:", await res.text());
      return NextResponse.json(
        {
          ok: false,
          error: `We could not send that just now. Please email ${site.email} directly.`,
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[contact] send failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `We could not send that just now. Please email ${site.email} directly.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
