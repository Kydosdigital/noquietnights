import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Restaurant Marketing Agency Cost UK: What Should You Pay in 2026? | NO QUIET NIGHTS",
    template: "%s",
  },
};

export default function ArticleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
