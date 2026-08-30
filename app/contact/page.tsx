import type { Metadata } from "next";
import ServiceHeader from "../services/service-header";
import LeadForm, { contactEmailDisplay, contactEmailHref } from "../components/lead-form";

export const metadata: Metadata = {
  title: "Contact No Quiet Nights",
  description: "Talk to No Quiet Nights about hospitality marketing for your restaurant, pub, bar or drinks brand.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact No Quiet Nights",
    description: "Tell us what needs to get busier and we will point you towards the most sensible marketing starting point.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ServiceHeader />
      <main>
        <section className="pricing-hero page-top">
          <p className="eyebrow">Contact No Quiet Nights</p>
          <h1>Tell us what needs<br/><em>to get busier.</em></h1>
          <div className="pricing-hero-aside">
            <p>Restaurant, pub, bar or drinks brand, tell us what is quiet, what you are trying to grow and what you have already tried.</p>
            <p>Prefer email? <a href={contactEmailHref}>{contactEmailDisplay}</a></p>
          </div>
        </section>
        <LeadForm eyebrow="Project enquiry" heading="Start with the problem, not the package." />
      </main>
    </>
  );
}
