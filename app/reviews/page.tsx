import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

export const metadata: Metadata = {
  title: "Restaurant & Hospitality Reviews | No Quiet Nights",
  description: "Client reviews and feedback from restaurants, pubs, bars and hospitality businesses working with No Quiet Nights across the UK.",
  alternates: { canonical: "https://www.noquietnights.co.uk/reviews" },
  openGraph: {
    title: "Restaurant & Hospitality Reviews | No Quiet Nights",
    description: "Feedback from hospitality businesses across the UK working with No Quiet Nights.",
    url: "https://www.noquietnights.co.uk/reviews",
    type: "website",
  },
  robots: { index: false, follow: true },
};

const reviewSlots = [
  { city: "Manchester", type: "Independent restaurant", service: "Social + local visibility" },
  { city: "Leeds", type: "Independent bar", service: "Local SEO + campaigns" },
  { city: "Birmingham", type: "Restaurant group", service: "Paid media + strategy" },
  { city: "Liverpool", type: "Bar operator", service: "Campaigns + customer growth" },
  { city: "London", type: "Independent restaurant", service: "Full-service marketing" },
  { city: "Bristol", type: "Restaurant owner", service: "Social + Google" },
  { city: "Sheffield", type: "Neighbourhood restaurant", service: "Local SEO + content" },
  { city: "Newcastle", type: "Pub operator", service: "Paid demand + offers" },
  { city: "Glasgow", type: "Hospitality venue", service: "Social + campaigns" },
  { city: "Edinburgh", type: "Restaurant team", service: "Content + local search" },
  { city: "Cardiff", type: "Independent venue", service: "Growth strategy + ads" },
  { city: "Nottingham", type: "Restaurant operator", service: "CRM + repeat customers" },
];

const cities = ["Manchester","Leeds","Birmingham","Liverpool","London","Bristol","Sheffield","Newcastle","Glasgow","Edinburgh","Cardiff","Nottingham","Leicester","Bradford","Salford","Stockport"];

export default function ReviewsPage() {
  return (
    <>
      <ServiceHeader />
      <main className="reviews-page">
        <section className="reviews-hero section-pad">
          <p className="eyebrow">Hospitality reviews</p>
          <h1>Good venues.<br/><em>Better marketing.</em></h1>
          <div className="reviews-hero-copy">
            <p>We are building a UK-wide collection of feedback from restaurants, pubs, bars and hospitality businesses that have worked with No Quiet Nights.</p>
            <p className="reviews-intro-note">Verified client feedback will be added here as publication approval is received.</p>
          </div>
        </section>

        <section className="reviews-band">
          <div className="reviews-band-inner">
            <span>RESTAURANTS</span><i>•</i><span>PUBS</span><i>•</i><span>BARS</span><i>•</i><span>HOSPITALITY</span><i>•</i><span>UK-WIDE</span>
          </div>
        </section>

        <section className="reviews-grid section-pad">
          {reviewSlots.map((review, index) => (
            <article className="review-card" key={review.city + "-" + review.type}>
              <div className="review-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{review.city}</b>
              </div>
              <blockquote><p>Client review awaiting publication approval.</p></blockquote>
              <div className="review-card-meta">
                <strong>{review.type}</strong>
                <small>{review.service}</small>
              </div>
            </article>
          ))}
        </section>

        <section className="reviews-uk section-pad">
          <div>
            <p className="eyebrow light">Across the UK</p>
            <h2>Hospitality is local.<br/><em>Our thinking travels.</em></h2>
          </div>
          <div className="reviews-city-cloud" aria-label="UK locations">
            {cities.map((city) => <span key={city}>{city}</span>)}
          </div>
        </section>

        <section className="reviews-proof section-pad">
          <p className="eyebrow">What we want every review to answer</p>
          <div className="reviews-proof-grid">
            <article><span>01</span><h2>Did the marketing become clearer?</h2><p>Less disconnected activity, more joined-up thinking around what actually helps the venue grow.</p></article>
            <article><span>02</span><h2>Did the venue become easier to find?</h2><p>Stronger local search, more consistent content and better visibility when customers are deciding where to go.</p></article>
            <article><span>03</span><h2>Did activity connect to customers?</h2><p>Campaigns should lead somewhere useful: bookings, enquiries, visits, customer data or repeat business.</p></article>
          </div>
        </section>

        <section className="pricing-final">
          <span>Your venue could be next.</span>
          <h2>Bring us the quiet bit.<br/><em>We&apos;ll find the leak.</em></h2>
          <p>Tell us what is not working. We will tell you where we would start.</p>
          <Link className="button button-cream" href="/start">Start a conversation <span>↗</span></Link>
        </section>
      </main>
    </>
  );
}