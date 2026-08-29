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
    promise: "We plan, create and manage social content that helps people notice your venue, visit and come back.",
    intro: "Your social media should show people what the food, drinks, atmosphere and experience are really like. We keep it active, useful and tied to the things you actually want to sell.",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Restaurant table with food prepared for guests",
    outcomes: ["A feed that looks current and worth visiting", "Content built around offers, events and quieter days", "More useful engagement with local customers", "A clear monthly content plan"],
    work: [
      { title: "Plan", text: "We plan the month around what your venue needs to promote." },
      { title: "Create", text: "We turn your photos, videos, menus and offers into content for the right platforms." },
      { title: "Publish", text: "We schedule regular posts and stories across the agreed channels." },
      { title: "Manage", text: "We monitor comments, local engagement and the content people respond to most." }
    ],
    proof: [
      { label: "Posting consistency", text: "How regularly the venue posts and whether the profile looks active and current." },
      { label: "Audience response", text: "Reach, saves, shares, profile visits and meaningful engagement." },
      { label: "Customer actions", text: "Tracked clicks, enquiries, offer redemptions or bookings where tracking is available." }
    ],
    bestFor: ["Restaurants with inconsistent posting", "Pubs and bars with events or weekly offers", "Hospitality teams without time to manage social properly"]
  },
  {
    slug: "paid-ads",
    eyebrow: "Meta + Google advertising",
    title: "Put the right offer in front of people ready to act.",
    promise: "Paid ads should help bring in customers, not just generate impressions.",
    intro: "We use Meta and Google to reach people nearby, people searching for what you offer and people who have already shown interest in your venue.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Busy modern restaurant dining room",
    outcomes: ["More useful local traffic", "Campaigns built around bookings, events, private hire or offers", "Follow-up ads for people who did not book first time", "Clear reporting on spend and results"],
    work: [
      { title: "Offer", text: "We make sure there is a strong reason for someone to click before spending money on ads." },
      { title: "Target", text: "We show ads to the people most likely to care, including nearby customers and people already searching." },
      { title: "Test", text: "We test different ads, messages and audiences to see what gets the best response." },
      { title: "Measure", text: "We track enquiries, bookings and useful actions, not just clicks." }
    ],
    proof: [
      { label: "Meta ads", text: "Spend, reach, clicks, cost per result and campaign performance." },
      { label: "Google ads", text: "Searches, clicks, enquiries and cost by campaign." },
      { label: "Bookings and enquiries", text: "Tracked bookings, enquiries or landing-page actions where the venue systems allow it." }
    ],
    bestFor: ["Venues with a strong offer that needs more reach", "Private hire and event campaigns", "New menu, launch and seasonal campaigns"]
  },
  {
    slug: "local-seo",
    eyebrow: "Local SEO + Google visibility",
    title: "Show up when somebody nearby is deciding where to go.",
    promise: "We help more local people find you when they search on Google and Maps.",
    intro: "People search for restaurants, Sunday roasts, cocktails, private dining, brunch and venues near them every day. We help Google understand where you are, what you offer and why you are relevant.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Warm hospitality venue interior with tables and lights",
    outcomes: ["A stronger Google Business Profile", "Better visibility for useful local searches", "A better review process and stronger Maps presence", "Website improvements based on what customers search for"],
    work: [
      { title: "Google profile", text: "We improve your categories, services, descriptions, photos, menus and important links." },
      { title: "Local searches", text: "We find the searches that matter by location, occasion and venue type." },
      { title: "Website SEO", text: "We improve page titles, content, links and local information so Google can understand the site better." },
      { title: "Reviews", text: "We help you create a practical way to ask for and respond to customer reviews." }
    ],
    proof: [
      { label: "Google searches", text: "How often you appear in search, what people search for and how many click through." },
      { label: "Google Business Profile", text: "Profile views, calls, website clicks, direction requests and other activity." },
      { label: "Local rankings", text: "Changes in visibility for the local searches we agree to track." }
    ],
    bestFor: ["Independent restaurants", "Pubs and bars competing locally", "Venues with strong reviews but weak Google visibility"]
  },
  {
    slug: "content-production",
    eyebrow: "Photography + video production",
    title: "Give people something worth stopping for.",
    promise: "When you need fresh photos and videos, we can bring the right content team to your venue.",
    intro: "Food, drinks and atmosphere are visual. We price shoots separately so you get the right photographer, videographer or social content team for the job.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a1875?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Cocktails being served in a bar",
    outcomes: ["A bank of fresh venue content", "Food and drink photos for social media and ads", "Short videos for Reels and TikTok", "Content for launches, events and new menus"],
    work: [
      { title: "Plan the shoot", text: "We agree what you need before anyone turns up with a camera." },
      { title: "Shoot", text: "We arrange photography, video or creator-led content depending on the job." },
      { title: "Edit", text: "We prepare the content for the channels where it will be used." },
      { title: "Use it", text: "The finished content can be used across social media, ads, your website and customer emails." }
    ],
    proof: [
      { label: "What you receive", text: "A clear list of the photos and videos delivered from the shoot." },
      { label: "What performs best", text: "We compare which images and videos get stronger views, clicks, saves or ad results." },
      { label: "How far the content goes", text: "We show how one shoot can support weeks of social, advertising, website and email content." }
    ],
    bestFor: ["Venues with outdated imagery", "Restaurants launching a new menu", "Bars, events and hospitality brands needing regular short-form video"]
  },
  {
    slug: "crm-repeat-customers",
    eyebrow: "Customer follow-up + repeat visits",
    title: "Do not pay to win the same customer from scratch every time.",
    promise: "We help you keep customer details and give people good reasons to come back.",
    intro: "Bookings, birthdays, Wi-Fi sign-ups, offers and events can all help you build a customer list, as long as the information is collected clearly and with the right permission.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Guests dining together in a restaurant",
    outcomes: ["A growing customer email and SMS list", "Better follow-up after enquiries and visits", "Birthday, VIP and win-back campaigns", "Less dependence on constantly finding new people"],
    work: [
      { title: "Collect", text: "We help you collect customer details through bookings, Wi-Fi, offers, events and your website." },
      { title: "Group", text: "Someone who came yesterday should not get the same message as someone who has not visited in six months." },
      { title: "Follow up", text: "We set up agreed email and SMS messages for reminders, offers and return visits." },
      { title: "Bring people back", text: "We create campaigns for previous customers who already know your venue." }
    ],
    proof: [
      { label: "Customer list growth", text: "How many permission-based contacts are added through agreed sources and campaigns." },
      { label: "Email + SMS", text: "Delivery, opens, clicks, replies and tracked actions where available." },
      { label: "Return visits", text: "Win-back redemptions, repeat bookings or responses from previous customers where tracking is possible." }
    ],
    bestFor: ["Venues with a booking database they rarely use", "Businesses with strong one-off trade but weak repeat marketing", "Operators wanting birthday, loyalty or VIP campaigns"]
  },
  {
    slug: "website-conversion",
    eyebrow: "Website + bookings",
    title: "Make the next action impossible to miss.",
    promise: "Your website should help people decide, trust you and book quickly.",
    intro: "Menus buried in PDFs, broken booking links and unclear offers lose customers. We improve or build websites so the important actions are easy to find.",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Restaurant service and dining environment",
    outcomes: ["Clearer booking and enquiry pages", "Landing pages for specific offers and campaigns", "A better mobile experience", "SEO and bookings working together"],
    work: [
      { title: "Check", text: "We look for anything that makes it harder for a visitor to book, enquire or find the information they need." },
      { title: "Prioritise", text: "We make booking, menus, private hire, events, location and contact information easy to find." },
      { title: "Build", text: "We create simple pages around what customers actually want to do." },
      { title: "Track", text: "We measure important buttons, forms and campaign actions where possible." }
    ],
    proof: [
      { label: "Before and after", text: "Clear examples of how booking pages, navigation and mobile usability were improved." },
      { label: "Website activity", text: "Traffic, engagement and important actions from the agreed analytics setup." },
      { label: "Campaign pages", text: "How dedicated offer pages perform compared with sending everyone to the homepage." }
    ],
    bestFor: ["Restaurants with outdated or confusing websites", "Private hire and event-led venues", "Businesses running ads without dedicated landing pages"]
  },
  {
    slug: "launch-growth-strategy",
    eyebrow: "Launch + marketing strategy",
    title: "Have a clear plan before you spend more on marketing.",
    promise: "We build a practical marketing plan around the problem you actually need to solve, from a quiet Tuesday to a new opening.",
    intro: "The plan might include offers, social media, Google, ads, customer follow-up, partnerships and repeat-customer marketing. We choose what makes sense for the venue instead of forcing every channel into the plan.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=82",
    imageAlt: "Restaurant dining table set for service",
    outcomes: ["A clear 30, 60 or 90-day marketing plan", "Offers built around real quiet periods or missed opportunities", "Marketing channels working together", "A monthly review of what worked and what to do next"],
    work: [
      { title: "Find the problem", text: "We identify the quiet periods, weak booking journeys and missed opportunities." },
      { title: "Make the plan", text: "We decide what should happen, in what order and what we need to measure." },
      { title: "Launch", text: "We put the agreed social, Google, ads, offers and customer follow-up into action." },
      { title: "Improve", text: "We review what happened and change the next month based on the results." }
    ],
    proof: [
      { label: "The plan", text: "A clear plan showing what is happening, when, who owns it and what success looks like." },
      { label: "Results", text: "Campaign evidence tied back to the business goal we agreed at the start." },
      { label: "What changed", text: "A simple record of what we tried, what happened and what we changed next." }
    ],
    bestFor: ["New restaurant and bar launches", "Venues with quiet periods that need a focused marketing plan", "Operators tired of different suppliers working separately"]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
