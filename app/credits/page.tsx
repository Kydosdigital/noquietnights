import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography Credits",
  description: "Photography sources and licensing notes for imagery used by No Quiet Nights.",
  alternates: { canonical: "/credits" },
  robots: { index: false, follow: true },
};

const credits = [
  ["01", "Hero service", "Feyza Yıldırım", "Pexels", "https://www.pexels.com/photo/waiter-talking-to-a-customer-in-a-restaurant-19300595/"],
  ["02", "London bar atmosphere", "Gül Işık", "Pexels", "https://www.pexels.com/photo/cozy-bar-interior-with-warm-lighting-in-london-28683064/"],
  ["03", "Cocktail", "Damir K.", "Pexels", "https://www.pexels.com/photo/close-up-of-a-cocktail-on-a-bar-counter-19697396/"],
  ["04", "Chef at the pass", "Amy Vann", "Unsplash", "https://unsplash.com/photos/a-man-in-a-kitchen-preparing-food-on-a-plate-1LwJLrNv8_8"],
  ["05", "Guests around a table", "Keith Lobo", "Pexels", "https://www.pexels.com/photo/three-friends-hanging-out-12832967/"],
  ["06", "Plated food", "Sebastian Coman Photography", "Unsplash", "https://unsplash.com/photos/closeup-photo-of-cooked-food-on-plate-zYd9byYTq8Q"],
  ["07", "Restaurant team", "Gül Işık", "Pexels", "https://www.pexels.com/photo/cozy-restaurant-interior-with-chef-and-waitstaff-29219959/"],
] as const;

export default function CreditsPage() {
  return (
    <main id="main-content">
      <section className="credits-page page-top section-pad">
        <div className="credits-intro">
          <p className="eyebrow">Real photographs. Proper sources.</p>
          <h1>Photography<br /><em>credits.</em></h1>
          <p>The original No Quiet Nights site used named stock photography from Pexels and Unsplash. Source links are retained here for provenance.</p>
        </div>
        <div className="credit-ledger">
          {credits.map(([n, label, photographer, platform, href]) => (
            <a key={n} href={href} target="_blank" rel="noreferrer">
              <span>{n}</span>
              <b>{label}</b>
              <p>{photographer}</p>
              <small>{platform} ↗</small>
            </a>
          ))}
        </div>
        <div className="license-note">
          <p>Licensing</p>
          <span>Pexels and Unsplash permit commercial website use and modification under their respective licences. Always verify the current licence terms before reusing an image outside this site.</span>
          <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Pexels licence ↗</a>
          <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash licence ↗</a>
        </div>
      </section>
    </main>
  );
}
