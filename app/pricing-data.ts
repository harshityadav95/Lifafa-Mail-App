// Public USD list prices reviewed 4 November 2026. These are different products
// and entitlements, not feature-equivalent plans. No Lifafa price is defined.
export type PriceProduct = {
  name: string;
  plan: string;
  initials: string;
  tone: string;
  monthly?: number;
  annual?: number;
  once?: number;
  summary: string;
  includes: string[];
  caveat: string;
  source: string;
  otherSource?: { label: string; url: string };
};
export const priceProducts: PriceProduct[] = [
  {
    name: "Bloop.email", plan: "Lifetime license", initials: "b", tone: "blue", once: 4.99,
    summary: "For a native Mac inbox with a one-time license.",
    includes: ["Gmail, Outlook, iCloud and IMAP", "Seven-day free trial, no card required", "Apple Intelligence or separately configured AI providers"],
    caveat: "Mac download for macOS 15+; iPhone is coming soon. The advertised lifetime offer is $4.99 once. Purchases are non-refundable after the trial opportunity; external AI providers may have separate costs.",
    source: "https://bloop.email/#pricing",
    otherSource: { label: "Download & requirements", url: "https://bloop.email/download" },
  },
  {
    name: "Mimestream", plan: "Individual", initials: "mi", tone: "blue",
    monthly: 4.99, annual: 49.99,
    summary: "For people who live in Gmail on a Mac.",
    includes: ["Google accounts, Gmail labels and filters", "Up to five devices; immediate-family sharing", "14-day trial; eligible subscribers can join the iOS beta"],
    caveat: "Gmail only. The iPhone/iPad beta has subscription and capacity requirements.",
    source: "https://mimestream.com/pricing/",
    otherSource: { label: "iOS beta eligibility", url: "https://mimestream.com/ios-beta" },
  },
  {
    name: "Airmail", plan: "Pro", initials: "a", tone: "sky",
    monthly: 7.99, annual: 39.99,
    summary: "For a highly customizable Apple mail workflow.",
    includes: ["Multiple accounts and custom actions", "Snooze, scheduled sends and Smart Folders", "Subscription shared across Apple devices"],
    caveat: "Free basic tier available. US App Store rates shown; the help article still lists $5.99/month and $29.99/year. Regional offers may differ. Business is a separate edition.",
    source: "https://apps.apple.com/us/app/airmail-for-gmail-outlook-mail/id993160329",
    otherSource: { label: "Help article (different rates)", url: "https://help.airmailapp.com/en-us/article/airmail-pro-pricing-and-subscription-plans-189o6bh/" },
  },
  {
    name: "Superhuman Mail", plan: "Starter · per member", initials: "S", tone: "violet",
    monthly: 30, annual: 300,
    summary: "For Gmail and Outlook teams focused on speed.",
    includes: ["AI assistance and keyboard-driven triage", "Shared conversations and team comments", "Calendar and scheduling tools"],
    caveat: "Business is $40/month or $396/year per member and adds Auto Drafts, Ask AI and CRM integrations. Enterprise uses custom pricing.",
    source: "https://superhuman.com/plans/mail",
    otherSource: { label: "Monthly rates & plan details", url: "https://help.superhuman.com/hc/en-us/articles/46178817646861-Pricing-Plans" },
  },
  {
    name: "GotEmail", plan: "All features", initials: "G", tone: "amber",
    monthly: 6.99, annual: 79, once: 79,
    summary: "For a native Mac inbox with on-demand AI.",
    includes: ["Multiple providers and all your Macs", "Built-in AI drafts and summaries", "Monthly, annual or current lifetime offer"],
    caveat: "The $79 lifetime promotion is limited to the next 100 customers; the page displays $199 as the reference price. Seven-day money-back guarantee. A Mac license also unlocks the iPhone TestFlight beta; an iPhone-only presale is separately offered at $19.99.",
    source: "https://gotemail.net/",
    otherSource: { label: "iPhone presale", url: "https://gotemail.net/gotios/" },
  },
  {
    name: "Inbox Zero", plan: "AI Starter · per user", initials: "0", tone: "rose",
    monthly: 20, annual: 216,
    summary: "For automated labels, drafts and inbox cleanup.",
    includes: ["AI sorting, draft replies and cold-email blocking", "Bulk unsubscribe and email analytics", "Seven-day AI-plan trial"],
    caveat: "The email app itself is free. AI Plus is $35/month or $336/year; Professional is $50/month or $504/year per user. Enterprise is custom.",
    source: "https://www.getinboxzero.com/pricing",
  },
];
