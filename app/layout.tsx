import type { Metadata } from "next";
import Script from "next/script";
import SiteFooter from "./components/site-footer";
import "../recovery/deployed-assets/_next/static/chunks/0eay0~-68.o85.css";
import "./overrides.css";
import "./brand.css";
import "./site-footer.css";

const siteUrl = "https://www.noquietnights.co.uk";
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hospitality Marketing for Restaurants, Pubs & Bars | No Quiet Nights",
    template: "%s | No Quiet Nights",
  },
  description:
    "Hospitality marketing for UK restaurants, pubs and bars, covering local SEO, social media, paid advertising and customer follow-up.",
  applicationName: "No Quiet Nights",
  authors: [{ name: "No Quiet Nights" }],
  creator: "No Quiet Nights",
  publisher: "No Quiet Nights",
  category: "Hospitality Marketing",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  formatDetection: { email: false, address: false, telephone: false },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, noarchive: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "No Quiet Nights",
    title: "Hospitality Marketing for Restaurants, Pubs & Bars | No Quiet Nights",
    description: "Hospitality marketing that helps UK venues get found, bring in customers and give them reasons to come back.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Marketing for Restaurants, Pubs & Bars | No Quiet Nights",
    description: "Hospitality marketing that helps UK venues get found, bring in customers and give them reasons to come back.",
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "No Quiet Nights",
      url: siteUrl,
      logo: `${siteUrl}/brand/no-quiet-nights-logo.svg`,
      description: "UK hospitality marketing agency for restaurants, pubs, bars and drinks brands.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      knowsAbout: ["Hospitality marketing", "Restaurant marketing", "Pub marketing", "Bar marketing", "Drinks brand marketing", "Local SEO", "Social media management", "Paid advertising", "Customer retention"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "No Quiet Nights",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
        {children}
        <SiteFooter />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-726NVF79ZM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-726NVF79ZM');`}
        </Script>
      </body>
    </html>
  );
}
