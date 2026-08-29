const siteUrl = "https://no-quiet-nights.vercel.app";

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteUrl}/pricing#service`,
      name: "Hospitality Marketing Services",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Restaurants, pubs, bars and hospitality businesses",
      },
      serviceType: [
        "Hospitality marketing",
        "Social media management",
        "Local SEO",
        "Paid advertising",
        "CRM and customer retention marketing",
      ],
      offers: {
        "@type": "OfferCatalog",
        name: "No Quiet Nights monthly marketing plans",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Starter",
            price: "165",
            priceCurrency: "GBP",
            url: `${siteUrl}/pricing`,
          },
          {
            "@type": "Offer",
            name: "Visibility",
            price: "295",
            priceCurrency: "GBP",
            url: `${siteUrl}/pricing`,
          },
          {
            "@type": "Offer",
            name: "Demand",
            price: "495",
            priceCurrency: "GBP",
            url: `${siteUrl}/pricing`,
          },
          {
            "@type": "Offer",
            name: "Full House",
            price: "1000",
            priceCurrency: "GBP",
            url: `${siteUrl}/pricing`,
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Pricing", item: `${siteUrl}/pricing` },
      ],
    },
  ],
};

export default function PricingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      {children}
    </>
  );
}
