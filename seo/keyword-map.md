# No Quiet Nights — On-page SEO keyword ownership

This file is the canonical keyword-to-URL map for the site. New pages should not be published against an existing primary intent without first deciding whether the new page replaces, supports or intentionally differs from the existing owner.

## Money pages

| URL | Primary search intent | Secondary territory | Role |
| --- | --- | --- | --- |
| `/` | hospitality marketing agency UK | hospitality digital marketing agency UK; specialist hospitality marketing agency | Main commercial entity page |
| `/restaurants` | restaurant marketing agency UK | restaurant digital marketing agency; restaurant marketing services | Restaurant money page |
| `/pubs-bars` | pub marketing agency UK | bar marketing agency UK; pub and bar marketing | Pub/bar money page |
| `/drinks-brands` | drinks marketing agency UK | beverage marketing agency UK; drinks brand marketing agency | Drinks money page |
| `/services` | hospitality marketing services UK | hospitality digital marketing services | Service discovery hub |
| `/pricing` | No Quiet Nights hospitality marketing pricing | hospitality marketing packages; agency plans from £165 | Our packages only, not general market-cost intent |
| `/work` | hospitality marketing results | hospitality marketing measurement; agency proof | Trust and measurement page |
| `/about` | No Quiet Nights | UK hospitality marketing specialists | Brand/trust page |

## Service pages

| URL | Primary search intent | Supporting BOFU guides |
| --- | --- | --- |
| `/services/local-seo` | local SEO for restaurants, pubs and bars UK | `/insights/hospitality-local-seo-cost-uk`, `/insights/restaurant-seo-cost-uk`, `/insights/pub-seo-cost-uk` |
| `/services/social-media-management` | hospitality social media management UK | restaurant/pub/drinks social media cost guides |
| `/services/paid-ads` | hospitality PPC agency UK | hospitality paid media cost; SEO vs Google Ads; Google vs Meta comparisons |
| `/services/crm-repeat-customers` | hospitality CRM and customer retention marketing UK | `/insights/hospitality-email-marketing-crm-cost-uk` |
| `/services/website-conversion` | hospitality website conversion optimisation UK | hospitality website cost; drinks brand website cost |
| `/services/content-production` | hospitality photography and video content UK | supporting service page; do not create generic cost page without SERP validation |
| `/services/launch-growth-strategy` | hospitality marketing strategy UK | venue marketing-budget and drinks-launch-budget guides |

## Restaurant BOFU cluster

| URL | Primary query / intent |
| --- | --- |
| `/insights/restaurant-marketing-agency-cost-uk` | restaurant marketing agency cost UK |
| `/insights/is-a-restaurant-marketing-agency-worth-it` | is a restaurant marketing agency worth it |
| `/insights/how-to-choose-a-restaurant-marketing-agency` | how to choose a restaurant marketing agency |
| `/insights/restaurant-marketing-agency-vs-freelancer` | restaurant marketing agency vs freelancer |
| `/insights/restaurant-marketing-agency-vs-in-house` | restaurant marketing agency vs in-house |
| `/insights/restaurant-marketing-agency-specialist-vs-generalist` | restaurant specialist vs generalist marketing agency |
| `/insights/restaurant-seo-cost-uk` | restaurant SEO cost UK |
| `/insights/restaurant-social-media-management-cost-uk` | restaurant social media management cost UK |
| `/insights/how-much-should-restaurant-spend-on-marketing-uk` | restaurant marketing budget UK |
| `/insights/google-ads-vs-meta-ads-restaurants` | Google Ads vs Meta Ads for restaurants |

Rule: none of these pages should target the head term `restaurant marketing agency UK`; that belongs to `/restaurants`.

## Pub and bar BOFU cluster

| URL | Primary query / intent |
| --- | --- |
| `/insights/pub-marketing-agency-cost-uk` | pub marketing agency cost UK |
| `/insights/bar-marketing-agency-cost-uk` | bar marketing agency cost UK |
| `/insights/best-pub-marketing-agency-uk` | best pub marketing agency UK |
| `/insights/pub-marketing-agency-worth-it` | is a pub marketing agency worth it |
| `/insights/pub-marketing-agency-vs-freelancer` | pub marketing agency vs freelancer |
| `/insights/pub-marketing-agency-vs-in-house` | pub marketing agency vs in-house |
| `/insights/pub-marketing-agency-specialist-vs-generalist` | pub specialist vs generalist marketing agency |
| `/insights/pub-seo-cost-uk` | pub SEO cost UK |
| `/insights/pub-social-media-management-cost-uk` | pub social media management cost UK |
| `/insights/pub-private-hire-marketing-agency-cost` | pub private hire marketing cost |
| `/insights/how-much-should-pub-spend-marketing-uk` | pub marketing budget UK |
| `/insights/google-ads-vs-meta-ads-pubs` | Google Ads vs Meta Ads for pubs |

Rule: the head terms `pub marketing agency UK` and `bar marketing agency UK` belong to `/pubs-bars`. Cost/comparison pages must stay modifier-led.

## Drinks BOFU cluster

| URL | Primary query / intent |
| --- | --- |
| `/insights/drinks-marketing-agency-cost-uk` | drinks marketing agency cost UK |
| `/insights/how-to-choose-a-drinks-marketing-agency-uk` | how to choose a drinks marketing agency UK |
| `/insights/is-a-drinks-marketing-agency-worth-it` | is a drinks marketing agency worth it |
| `/insights/drinks-marketing-agency-vs-freelancer` | drinks marketing agency vs freelancer |
| `/insights/drinks-marketing-agency-vs-in-house` | drinks marketing agency vs in-house |
| `/insights/drinks-marketing-agency-vs-pr-agency` | drinks marketing agency vs PR agency |
| `/insights/drinks-brand-marketing-budget-uk` | drinks brand marketing budget UK |
| `/insights/drinks-brand-social-media-management-cost-uk` | drinks brand social media management cost UK |
| `/insights/drinks-brand-website-cost-uk` | drinks brand website cost UK |
| `/insights/how-much-should-you-spend-launching-a-drinks-brand-uk` | drinks brand launch budget UK |
| `/insights/influencer-marketing-vs-paid-social-drinks-brands` | influencer marketing vs paid social for drinks brands |
| `/insights/drinks-brand-launch-pr-vs-paid-social` | PR vs paid social for drinks brand launch |

Rule: the head terms `drinks marketing agency UK`, `drinks brand marketing agency` and `beverage marketing agency UK` belong to `/drinks-brands`.

## Cross-hospitality service BOFU cluster

| URL | Primary query / intent |
| --- | --- |
| `/insights/hospitality-local-seo-cost-uk` | hospitality local SEO cost UK |
| `/insights/hospitality-paid-media-management-cost-uk` | hospitality paid media management cost UK |
| `/insights/hospitality-email-marketing-crm-cost-uk` | hospitality email marketing / CRM cost UK |
| `/insights/hospitality-website-cost-uk` | hospitality website cost UK |
| `/insights/hospitality-seo-vs-google-ads` | hospitality SEO vs Google Ads |

Rule: broad service head terms belong to the matching `/services/...` page. BOFU guides own cost, comparison and buying-decision modifiers.

## Internal-link architecture

Preferred commercial journey:

`BOFU guide → relevant money/service page → pricing → start`

Supporting discovery journey:

`Money/service page → relevant buyer guides → pricing/start`

Use descriptive anchors such as `restaurant marketing agency cost UK`, `local SEO for restaurants`, `pub marketing agency`, and `hospitality marketing pricing`. Avoid making every internal link `click here`, `learn more` or the same exact-match phrase repeatedly.

## Publishing guardrails

1. Do not add `<meta name="keywords">`; keyword ownership is implemented through page purpose, copy, metadata, headings, entities and internal links.
2. Do not create location or near-duplicate service pages without checking whether the SERP shows genuinely different intent.
3. Every indexable page needs one clear primary intent, a self-referencing canonical and a route into the commercial site architecture.
4. BOFU articles should answer the query early, use extractable headings/tables/lists where useful, and link to the page that owns the underlying commercial head term.
5. FAQ schema is only used when the FAQ content is visible on the page and genuinely useful.
6. New cost articles must not turn `/pricing` into a market-rate guide; `/pricing` owns No Quiet Nights package/pricing intent.
