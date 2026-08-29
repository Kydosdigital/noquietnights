import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="section-pad" style={{ paddingTop: 140, minHeight: "75vh" }}>
      <p className="eyebrow">404 / No Quiet Nights</p>
      <h1
        style={{
          fontFamily: "var(--condensed)",
          fontSize: "clamp(4rem,10vw,10rem)",
          lineHeight: 0.85,
          letterSpacing: "-.06em",
          textTransform: "uppercase",
          maxWidth: 1000,
        }}
      >
        This page went <em style={{ fontFamily: "var(--serif)", textTransform: "none", fontWeight: 400 }}>quiet.</em>
      </h1>
      <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", maxWidth: 650 }}>
        The page may have moved or no longer exist. Use one of the links below to get back to the useful part of the site.
      </p>
      <nav aria-label="404 recovery links" style={{ marginTop: 35, display: "flex", gap: 20, flexWrap: "wrap" }}>
        <a className="button button-ink" href="/pricing">View pricing</a>
        <a href="/insights">Read insights</a>
        <a href="/start">Start a project</a>
      </nav>
    </main>
  );
}
