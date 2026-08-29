import type { Metadata } from "next";
import "../recovery/deployed-assets/_next/static/chunks/0eay0~-68.o85.css";
import "./overrides.css";

export const metadata: Metadata = {
  title: "Hospitality marketing packages from £165 | NO QUIET NIGHTS",
  description:
    "Transparent hospitality marketing packages for UK restaurants, pubs and bars, including local SEO, demand generation, CRM and repeat-customer growth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
