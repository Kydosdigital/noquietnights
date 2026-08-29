import type { Metadata } from "next";
import { PageSchema, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency UK",
  description: "Restaurant marketing built around local discovery, direct bookings, fuller services and repeat visits across the UK.",
  alternates: { canonical: "/restaurants" },
  openGraph: { title: "Restaurant Marketing Agency UK | No Quiet Nights", description: "Local discovery, direct bookings, fuller services and repeat visits for UK restaurants.", url: "/restaurants", type: "website" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Restaurant Marketing",
  serviceType: "Restaurant marketing agency services",
  provider: { "@type": "Organization", "@id": "https://no-quiet-nights.vercel.app/#organization", name: "No Quiet Nights" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  audience: { "@type": "Audience", audienceType: "Restaurants and hospitality operators" },
  url: "https://no-quiet-nights.vercel.app/restaurants",
};

export default function RestaurantsPage() {
  return <><SiteHeader/><main id="main-content">
    <PageSchema name="Restaurant Marketing Agency UK" description="Restaurant marketing built around local discovery, direct bookings, fuller services and repeat visits." path="/restaurants"/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}}/>
    <section className="restaurant-hero page-top"><div className="restaurant-hero-photo"><img alt="A chef finishing plates in a working kitchen" src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=82"/></div><div className="restaurant-hero-copy"><p className="eyebrow">Restaurant growth</p><h1>Turn “where should we eat?” into a table at <em>yours.</em></h1><p>Win local discovery, give people a reason to book, remove reservation friction and turn first-time diners into regulars.</p><div><a className="button button-ink" href="/start?type=restaurant">Find my empty-table gap <span>↗</span></a><a className="text-link" href="/pricing">See restaurant plans <span>→</span></a></div></div><div className="restaurant-reservation"><span>TABLE FOR TWO?</span><strong>19:30</strong><small>Make yours the obvious booking.</small></div></section>
    <section className="not-saturday section-pad"><div><p className="eyebrow light">The real brief</p><h2>Your busiest night<br/>is <em>not the brief.</em></h2></div><p>Saturday may look after itself. The work is lunch, early week, the second sitting, private dining, a new menu—or the month after the launch noise disappears.</p><div className="seat-map" aria-label="Illustration showing table capacity"><span>Booked</span><i></i><i></i><i className="empty"></i><i></i><i className="empty"></i><i></i><i></i><i className="empty"></i><i></i><i></i><i></i><i className="empty"></i></div></section>
    <section className="booking-journey section-pad"><p className="eyebrow">The booking starts before the widget</p><h2>Five decisions between<br/>hungry and <em>booked.</em></h2><ol><li><span>01</span><h3>Search</h3><p>Maps, local results and social discovery.</p></li><li><span>02</span><h3>Appetite</h3><p>Food, room, story and offer.</p></li><li><span>03</span><h3>Confidence</h3><p>Reviews, menu clarity and useful proof.</p></li><li><span>04</span><h3>Action</h3><p>A fast, obvious reservation route.</p></li><li><span>05</span><h3>Return</h3><p>Permission, follow-up and a new reason.</p></li></ol></section>
    <section className="restaurant-opportunity section-pad"><div className="restaurant-opportunity-head"><p className="eyebrow light">One fuller service</p><h2>What could the<br/><em>gap be worth?</em></h2><p>Use the capacity you already know. We start with the service that needs movement and connect marketing activity to the commercial opportunity.</p></div><div className="revenue-dial"><div className="dial-heading"><span>Capacity example</span><strong>£2,448<small>/month</small></strong><p>Illustrative value of 18 extra covers × £34 average spend × 4 target services. This is a capacity model, not a forecast.</p></div></div></section>
    <section className="restaurant-offers section-pad"><div className="offer-photo"><img alt="Restaurant dish prepared for service" src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=82"/></div><div className="offer-copy"><p className="eyebrow">Protect the margin</p><h2>A reason to book is<br/><em>not always a discount.</em></h2><div className="offer-list"><article><span>01</span><h3>A ritual</h3><p>The set night people put in the diary.</p></article><article><span>02</span><h3>A collaboration</h3><p>A chef, producer or local partner with a real story.</p></article><article><span>03</span><h3>A limited moment</h3><p>A menu, terrace, tasting or occasion that will not wait.</p></article><article><span>04</span><h3>A return reason</h3><p>Something earned by coming back—not given away before the first visit.</p></article></div></div></section>
    <section className="restaurant-final"><span>Next service</span><h2>Which sitting should<br/>be <em>fuller?</em></h2><p>Tell us the day, menu, opening or revenue line that needs movement.</p><a className="button button-cream" href="/start?type=restaurant">Find my restaurant starting point <span>↗</span></a></section>
  </main><SiteFooter/></>;
}