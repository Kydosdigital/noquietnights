import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for enquiries and website measurement on No Quiet Nights.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    n: "01",
    title: "What we collect",
    text: "If you contact No Quiet Nights, we may receive the contact details and business information you choose to send us. We use that information to respond to your enquiry and discuss the work you asked about.",
  },
  {
    n: "02",
    title: "Why we use it",
    text: "We use enquiry information to review your request, reply to you, prepare a scope or quote and keep a record of the commercial conversation where necessary.",
  },
  {
    n: "03",
    title: "Analytics",
    text: "We use Google Analytics to understand how people use the website, including pages visited and general website activity. This helps us improve the site and our marketing.",
  },
  {
    n: "04",
    title: "Your choices",
    text: "You can ask for access, correction or deletion of personal information by emailing hello@noquietnights.co.uk. Some legal, accounting or contract records may need to be retained where required.",
  },
  {
    n: "05",
    title: "Policy details",
    text: "This page is a plain-English summary of how the website currently handles enquiries and analytics. Formal legal details should be reviewed and updated as the business, tools and data-processing arrangements develop.",
  },
];

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="privacy-page page-top section-pad">
        <header>
          <p className="eyebrow">Privacy</p>
          <h1>Your details are for the <em>conversation.</em></h1>
          <p>Last reviewed 29 August 2026</p>
        </header>
        <div className="privacy-copy">
          {sections.map((section) => (
            <section key={section.n}>
              <span>{section.n}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
