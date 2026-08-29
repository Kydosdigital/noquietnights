import type { Metadata } from "next";
import Link from "next/link";
import ServiceHeader from "../services/service-header";

export const metadata: Metadata = {
  title: "Meet the No Quiet Nights Team",
  description:
    "Meet the specialists behind No Quiet Nights across hospitality strategy, paid media, local SEO, social, CRM, websites, creative and client success.",
  alternates: { canonical: "/team" },
  robots: { index: false, follow: true },
};

const team = [
  {
    name: "Maya Bennett",
    role: "Founder & Managing Director",
    image: "/images/team/maya-bennett.jpg",
    imageAlt: "Placeholder portrait for Maya Bennett",
    bio: "Maya leads No Quiet Nights and keeps every project focused on the commercial outcome that matters most: more customers, stronger revenue and fewer quiet trading periods.",
    thinking: "How the whole marketing system fits together",
    drink: "Espresso martini",
  },
  {
    name: "Daniel Okafor",
    role: "Hospitality Growth Director",
    image: "/images/team/daniel-okafor.jpg",
    imageAlt: "Placeholder portrait for Daniel Okafor",
    bio: "Daniel turns business challenges into practical growth strategies, from underperforming midweek services to launches, offers and customer journeys that create stronger demand.",
    thinking: "Tuesday-night occupancy",
    drink: "Old fashioned",
  },
  {
    name: "Priya Mehta",
    role: "Paid Media Lead",
    image: "/images/team/priya-mehta.jpg",
    imageAlt: "Placeholder portrait for Priya Mehta",
    bio: "Priya leads Google Ads and Meta Ads strategy. Her focus is not simply generating clicks, but turning paid attention into bookings, enquiries and measurable local demand.",
    thinking: "What the next campaign should make people do",
    drink: "Spicy margarita",
  },
  {
    name: "Elliot James",
    role: "SEO & Local Search Lead",
    image: "/images/team/elliot-james.jpg",
    imageAlt: "Placeholder portrait for Elliot James",
    bio: "Elliot helps hospitality businesses become easier to find when customers are deciding where to eat, drink or spend their evening, across Google Search, Maps and local discovery.",
    thinking: "Who owns the map pack",
    drink: "Pale ale",
  },
  {
    name: "Amara Cole",
    role: "Content & Social Lead",
    image: "/images/team/amara-cole.jpg",
    imageAlt: "Placeholder portrait for Amara Cole",
    bio: "Amara turns hospitality brands into content people actually want to stop and watch, blending social strategy, campaigns, storytelling and ideas that support real customer demand.",
    thinking: "The first three seconds",
    drink: "French 75",
  },
  {
    name: "Lewis Grant",
    role: "CRM & Retention Strategist",
    image: "/images/team/lewis-grant.jpg",
    imageAlt: "Placeholder portrait for Lewis Grant",
    bio: "Lewis focuses on what happens after discovery and first visit, building email, SMS, reactivation, loyalty and automated follow-up that gives customers reasons to come back.",
    thinking: "The second visit",
    drink: "Negroni",
  },
  {
    name: "Nadia Khan",
    role: "Website & Conversion Lead",
    image: "/images/team/nadia-khan.jpg",
    imageAlt: "Placeholder portrait for Nadia Khan",
    bio: "Nadia improves websites around one question: does this make it easier for someone to become a customer? She works across landing pages, booking journeys and conversion.",
    thinking: "Where people drop out",
    drink: "Lychee martini",
  },
  {
    name: "Jordan Blake",
    role: "Creative Producer",
    image: "/images/team/jordan-blake.jpg",
    imageAlt: "Placeholder portrait for Jordan Blake",
    bio: "Jordan leads the visual side of campaigns, from photography and short-form video to paid-social creative and campaign concepts designed to feel native to hospitality.",
    thinking: "What deserves to be filmed",
    drink: "Whisky sour",
  },
  {
    name: "Chloe Morgan",
    role: "Client Success & Account Manager",
    image: "/images/team/chloe-morgan.jpg",
    imageAlt: "Placeholder portrait for Chloe Morgan",
    bio: "Chloe keeps projects moving and clients clear on what is happening, what is working and what comes next, making sure strategy becomes action rather than another document.",
    thinking: "What needs to happen next",
    drink: "Picante",
  },
];

export default function TeamPage() {
  return (
    <>
      <ServiceHeader />
      <main className="team-page">
        <section className="team-hero section-pad">
          <p className="eyebrow">Sample team · placeholder profiles</p>
          <h1>Meet the people<br/><em>behind the noise.</em></h1>
          <div className="team-hero-copy">
            <p>Strategists, creatives, performance marketers and hospitality obsessives, working together to help good venues stay busy.</p>
            <p className="team-placeholder-note">These names and portraits are temporary placeholders while we build out the real No Quiet Nights team.</p>
          </div>
        </section>

        <section className="team-grid section-pad">
          {team.map((person, index) => (
            <article className="team-card" key={person.name}>
              <figure className="team-photo">
                <img src={person.image} alt={person.imageAlt} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </figure>
              <div className="team-card-copy">
                <p className="team-role">{person.role}</p>
                <h2>{person.name}</h2>
                <p className="team-bio">{person.bio}</p>
                <dl className="team-details">
                  <div><dt>Usually thinking about</dt><dd>{person.thinking}</dd></div>
                  <div><dt>At the bar</dt><dd>{person.drink}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </section>

        <section className="team-capabilities section-pad">
          <p className="eyebrow light">One team, one commercial job</p>
          <h2>Strategy + SEO + paid media + content + CRM + websites + creative.</h2>
          <p>Different specialists, one joined-up growth system. That means the person thinking about Google visibility can work with the person building your campaign, the person improving your booking journey and the person bringing customers back.</p>
          <Link className="button button-cream" href="/services">See how we work <span>↗</span></Link>
        </section>

        <section className="pricing-final">
          <span>Need more than another agency supplier?</span>
          <h2>Bring us the quiet bit.<br/><em>We'll build around it.</em></h2>
          <p>Tell us what is not working and we will point you to the right combination of strategy, channel and specialist support.</p>
          <Link className="button button-cream" href="/start">Start a conversation <span>↗</span></Link>
        </section>
      </main>
    </>
  );
}
