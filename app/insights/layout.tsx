import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hospitality Marketing Insights | No Quiet Nights",
    template: "%s",
  },
};

export default function InsightsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
