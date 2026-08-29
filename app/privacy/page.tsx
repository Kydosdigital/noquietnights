import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for enquiries made through No Quiet Nights.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    n: "01",
    title: "What this site collects",
    text: "The project brief is composed in your own email application. The site itself does not store the form answers. If you send that email, the receiving business will hold the contact details and information you chose to include.",
  },
  {
    n: "02",
    title: "Why the information is used",
    text: "Enquiry information is used to review the fit, respond to the request, prepare a scope and keep a record of the commercial conversation where necessary.",
  },
  {
    n: "03",
    title: "Analytics and cookies",
    text: "This release does not install advertising cookies or third-party analytics by default. If measurement tools are added later, this notice and the consent experience should be updated before they go live.",
  },
  {
    n: "04",
    title: "Your choices",
    text: "You can ask for access, correction or deletion of enquiry information by emailing hello@noquietnights.co.uk. Legal, accounting or contract records may need to be retained where the law requires it.",
  },
  {
    n: "05",
    title: "Policy details still to be completed",
    text: "The final legal entity, registered address, data-controller contact and retention schedule should be inserted once they are confirmed. This page is a practical starting policy and is not legal advice.",
  },
];

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="privacy-page page-top section-pad">
        <header>
          <p className="eyebrow">Plain-English privacy</p>
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
