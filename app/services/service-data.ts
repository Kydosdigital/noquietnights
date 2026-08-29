export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  promise: string;
  intro: string;
  image: string;
  imageAlt: string;
  outcomes: string[];
  work: { title: string; text: string }[];
  proof: { label: string; text: string }[];
  bestFor: string[];
};

export const services: Service[] = [
  {
    slug: "social-media-management",
    eyebrow: "Social media management",
    title: "Stay visible without living on your phone.",
    promise: "We plan, create and manage hospitality social content that gives people a reason to notice you, visit and come back.",
    intro: "A restaurant does not need random posts. It needs a consistent story around the food, the room, the people, the offers and the moments that make somebody choose your venue tonight.",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Restaurant table with food prepared for guests",
    outcomes: ["A feed that looks current and worth visiting", "Planned content around offers, events and quieter days", "More useful engagement with local customers", "A clear monthly content and campaign plan"],
    work: [
      { title: "Plan", text: "We map the month around your commercial priorities, not just national awareness days." },
      { title: "Create", text: "We turn your existing photos, videos, menus and offers into platform-ready content." },
      { title: "Publish", text: "We schedule consistent posts and stories across the agreed channels." },
      { title: "Manage", text: "We keep an eye on comments, community activity and the content that is actually getting attention." }
    ],
    proof: [
      { label: "Content consistency", text: "Before-and-after posting cadence, content mix and profile quality." },
      { label: "Audience response", text: "Reach, saves, shares, profile visits and meaningful engagement from platform reporting." },
      { label: "Commercial activity", text: "Campaign links, enquiries, offer redemptions or booking actions where tracking is available." }
    ],
    bestFor: ["Restaurants with inconsistent posting", "Pubs and bars with events or weekly offers", "Hospitality teams without time to manage social properly"]
  },
  {
    slug: "paid-ads",
    eyebrow: "Meta + Google advertising",
    title: "Put the right offer in front of people ready to act.",
    promise: "Paid media should create measurable demand, not just impressions.",
    intro: "We use Meta and Google to reach local customers, capture high-intent searches and retarget people who have already shown interest in your venue.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Busy modern restaurant dining room",
    outcomes: ["More qualified local traffic", "Campaigns built around bookings, events, private hire or offers", "Retargeting for people who did not convert first time", "Clear reporting on spend and useful actions"],
    work: [
      { title: "Offer", text: "First we make sure there is a strong commercial reason for somebody to click." },
      { title: "Target", text: "We build local, interest, intent and retargeting audiences around the campaign." },
      { title: "Test", text: "We test creative, copy, audiences and landing-page routes before scaling spend." },
      { title: "Measure", text: "We track the actions that matter, not just reach and clicks." }
    ],
    proof: [
      { label: "Ads Manager", text: "Spend, reach, clicks, cost per result and campaign-level performance." },
      { label: "Google Ads", text: "Search terms, intent, conversion actions and cost by campaign." },
      { label: "Booking journey", text: "Tracked enquiries, bookings or landing-page actions where the venue systems allow it." }
    ],
    bestFor: ["Venues with a strong offer that needs more reach", "Private hire and event campaigns", "New menu, launch and seasonal demand"]
  },
  {
    slug: "local-seo",
    eyebrow: "Local SEO + Google visibility",
    title: "Show up when somebody nearby is deciding where to go.",
    promise: "Local search is one of the highest-intent moments in hospitality.",
    intro: "People search for restaurants, Sunday roasts, cocktails, private dining, brunch and venues near them every day. We improve the signals that help Google understand where you are, what you offer and why you are relevant.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Warm hospitality venue interior with tables and lights",
    outcomes: ["A stronger Google Business Profile", "Better local relevance for high-intent searches", "Improved review strategy and map visibility", "SEO recommendations connected to what customers actually search for"],
    work: [
      { title: "Google profile", text: "Categories, services, descriptions, photos, menus, links and conversion paths." },
      { title: "Local search", text: "We map the searches that matter by location, occasion and venue type." },
      { title: "Website SEO", text: "We improve page relevance, titles, internal links and local signals." },
      { title: "Reviews", text: "We build a practical process for generating and responding to customer reviews." }
    ],
    proof: [
      { label: "Search visibility", text: "Google Search Console impressions, clicks and query movement." },
      { label: "Google Business Profile", text: "Views, calls, website clicks, direction requests and profile activity." },
      { label: "Rank tracking", text: "Before-and-after visibility for agreed local search terms, without pretending rankings are guaranteed." }
    ],
    bestFor: ["Independent restaurants", "Pubs and bars competing locally", "Venues with strong reviews but weak Google visibility"]
  },
  {
    slug: "content-production",
    eyebrow: "Photography + video production",
    title: "Give people something worth stopping for.",
    promise: "When you need fresh assets, we can build an on-site content crew around the venue.",
    intro: "Food, drinks, atmosphere and people are visual. We scope photography, video and short-form production separately so the right crew turns up for the job rather than hiding production costs inside a generic package.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a1875?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Cocktails being served in a bar",
    outcomes: ["A bank of current, usable venue content", "Food and drink assets for organic and paid campaigns", "Short-form video designed for Reels and TikTok", "Campaign-specific shoots for launches and events"],
    work: [
      { title: "Shot list", text: "We agree what the business actually needs before the camera comes out." },
      { title: "Production", text: "Photography, videography, creator-led content or a mixed crew depending on scope." },
      { title: "Edit", text: "Assets are edited for the channels and campaigns they are meant to serve." },
      { title: "Deploy", text: "The content feeds into social, advertising, website and CRM campaigns." }
    ],
    proof: [
      { label: "Asset delivery", text: "A clear deliverables list showing exactly what was shot and supplied." },
      { label: "Creative performance", text: "Compare which images and videos produce stronger watch time, clicks, saves or ad response." },
      { label: "Usage", text: "Show how one shoot becomes weeks of organic, paid, website and email creative." }
    ],
    bestFor: ["Venues with outdated imagery", "Restaurants launching a new menu", "Bars, events and hospitality brands needing regular short-form video"]
  },
  {
    slug: "crm-repeat-customers",
    eyebrow: "CRM + repeat customers",
    title: "Do not pay to reacquire every customer from scratch.",
    promise: "We help venues capture customer relationships and create reasons for people to come back.",
    intro: "A booking, birthday, event registration, Wi-Fi sign-up or offer can become the start of a customer relationship, provided the data is collected transparently and with the right permissions.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Guests dining together in a restaurant",
    outcomes: ["A growing permission-based customer database", "Better follow-up after enquiries and visits", "Birthday, VIP and win-back campaigns", "Less dependence on constantly finding strangers"],
    work: [
      { title: "Capture", text: "We identify practical ways to collect useful first-party data through existing customer journeys." },
      { title: "Segment", text: "New, recent, regular, high-value and lapsed customers should not all receive the same message." },
      { title: "Automate", text: "We build agreed email and SMS journeys for follow-up, reminders and return visits." },
      { title: "Reactivate", text: "We create campaigns for customers who already know the venue but have stopped visiting." }
    ],
    proof: [
      { label: "Database growth", text: "Opt-in contacts added through agreed sources and campaigns." },
      { label: "Email + SMS", text: "Delivery, opens, clicks, replies and attributed actions where available." },
      { label: "Return activity", text: "Win-back redemptions, repeat bookings or customer-segment response where venue systems can track it." }
    ],
    bestFor: ["Venues with an existing booking database they rarely use", "Businesses with strong one-off trade but weak repeat marketing", "Operators wanting birthday, loyalty or VIP journeys"]
  },
  {
    slug: "website-conversion",
    eyebrow: "Website + conversion",
    title: "Make the next action impossible to miss.",
    promise: "A hospitality website should help somebody decide, trust you and act quickly.",
    intro: "Menus buried in PDFs, broken booking links and unclear offers lose demand. We improve or build websites around the commercial actions the venue needs customers to take.",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Restaurant service and dining environment",
    outcomes: ["Clearer booking and enquiry journeys", "Landing pages built around specific campaigns", "Better mobile experience", "SEO and conversion working together instead of separately"],
    work: [
      { title: "Audit", text: "We look for friction between the visitor arriving and the action you want them to take." },
      { title: "Prioritise", text: "Booking, menu, private hire, events, location and contact information are given the right hierarchy." },
      { title: "Build", text: "We create focused pages and conversion paths around real customer intent." },
      { title: "Track", text: "Important buttons, forms and campaign actions are measured where possible." }
    ],
    proof: [
      { label: "Before + after", text: "Documented changes to booking paths, page hierarchy and mobile usability." },
      { label: "Analytics", text: "Traffic, engagement and conversion events from the agreed analytics setup." },
      { label: "Campaign pages", text: "Performance of dedicated landing pages compared with sending every visitor to the homepage." }
    ],
    bestFor: ["Restaurants with outdated or confusing websites", "Private hire and event-led venues", "Businesses running ads without dedicated landing pages"]
  },
  {
    slug: "launch-growth-strategy",
    eyebrow: "Launch + growth strategy",
    title: "Give the venue a plan before you give it more marketing activity.",
    promise: "We build the commercial marketing plan around the actual problem, from a quiet Tuesday to a completely new opening.",
    intro: "The work can include positioning, offer development, launch sequencing, local SEO, content, paid media, database capture, partnerships and repeat-customer journeys. The mix depends on what needs to move.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Restaurant dining table set for service",
    outcomes: ["A clear 30, 60 or 90-day marketing plan", "Offers built around real commercial gaps", "Channels working together instead of in isolation", "A monthly growth review focused on what to do next"],
    work: [
      { title: "Diagnose", text: "We identify the quiet periods, weak journeys and missed commercial opportunities." },
      { title: "Plan", text: "We decide what needs to happen, in what order, and what success should look like." },
      { title: "Launch", text: "Content, SEO, paid, CRM, offers and partnerships are activated around one joined-up plan." },
      { title: "Learn", text: "We review evidence and change the next month based on what actually happened." }
    ],
    proof: [
      { label: "Plan vs action", text: "A documented strategy with owners, dates, channels and measurable objectives." },
      { label: "Commercial reporting", text: "Campaign evidence connected back to the agreed business objective." },
      { label: "Iteration", text: "A visible record of what we tested, what happened and what we changed next." }
    ],
    bestFor: ["New restaurant and bar launches", "Venues with quiet periods that need a focused growth plan", "Operators tired of disconnected agencies and suppliers"]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
