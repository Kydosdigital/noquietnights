import type { Metadata } from "next";
import Script from "next/script";
import "../recovery/deployed-assets/_next/static/chunks/0eay0~-68.o85.css";
import "./overrides.css";

const siteUrl = "https://no-quiet-nights.vercel.app";
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hospitality Marketing for Restaurants, Pubs & Bars | No Quiet Nights",
    template: "%s | No Quiet Nights",
  },
  description:
    "Hospitality marketing for UK restaurants, pubs and bars, combining local SEO, social media, paid demand, CRM and repeat-customer growth.",
  applicationName: "No Quiet Nights",
  authors: [{ name: "No Quiet Nights" }],
  creator: "No Quiet Nights",
  publisher: "No Quiet Nights",
  category: "Hospitality Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    : {
        index: false,
        follow: false,
        noarchive: true,
      },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "No Quiet Nights",
    title: "Hospitality Marketing for Restaurants, Pubs & Bars | No Quiet Nights",
    description:
      "Local SEO, demand generation, CRM and repeat-customer marketing for UK hospitality businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Marketing for Restaurants, Pubs & Bars | No Quiet Nights",
    description:
      "Local SEO, demand generation, CRM and repeat-customer marketing for UK hospitality businesses.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-726NVF79ZM"
          strategy="afterInteractive"
        />
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
