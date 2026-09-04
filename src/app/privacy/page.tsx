import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} collects and uses personal data.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

/*
 * PLACEHOLDER POLICY — plain-English and broadly UK GDPR-shaped, but it has
 * not been reviewed by a solicitor and it makes assumptions about your setup.
 * Confirm the retention period, your ICO registration status and any analytics
 * or advertising tools you add before treating this as final.
 */

export default function PrivacyPage() {
  const sections = [
    {
      heading: "Who we are",
      body: `${site.legalName} ("we") operates ${site.url}. If you have any question about how we handle your information, email ${site.email}.`,
    },
    {
      heading: "What we collect",
      body: "If you submit our enquiry form we collect the name, email address, phone number, postcode, chosen service and message you give us. We do not ask for payment details through this website.",
    },
    {
      heading: "Why we use it",
      body: "Solely to respond to your enquiry, arrange a site visit and provide a quote. We do not sell your data, and we do not add you to a marketing list without asking you first.",
    },
    {
      heading: "How long we keep it",
      body: "Enquiries are kept for as long as needed to answer them and for our business records afterwards. If you would like your details deleted, email us and we will remove them.",
    },
    {
      heading: "Who else sees it",
      body: "Enquiry emails are delivered through our email provider and stored in our business inbox. We do not share your details with anyone else except where we are legally required to.",
    },
    {
      heading: "Cookies",
      body: "This site does not set advertising or tracking cookies. If we add analytics in future, this page will be updated first.",
    },
    {
      heading: "Your rights",
      body: "Under UK GDPR you can ask to see the personal data we hold about you, have it corrected or have it deleted. Email us and we will deal with it. You may also complain to the Information Commissioner's Office at ico.org.uk.",
    },
  ];

  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" />
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl space-y-9">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold">{section.heading}</h2>
                <p className="mt-2.5 leading-relaxed text-ink-700/90">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
