import type { Industry, System } from "./types";

/**
 * What Truly Automation specializes in. These show first, in this order, on every industry page
 * (3 per row: outreach, AI receptionist, qualifying; chatbot, text-back, SEO; reviews, website).
 */
export const CORE: Omit<System, "tier">[] = [
  {
    icon: "📞",
    title: "Outreach",
    text: "Our team does the outreach for you, calling and emailing the local partners, past customers and businesses that can send you steady work. Real conversations, not spam.",
  },
  {
    icon: "🤖",
    title: "AI Receptionist",
    text: "An AI receptionist answers your calls 24/7, sounds like a real person, answers questions about your services, and never lets a customer hit voicemail.",
  },
  {
    icon: "📅",
    title: "Lead Qualifying & Calendar Booking",
    text: "We qualify every lead for you. The AI asks the right questions, filters out the tire-kickers, and books the good ones straight into your calendar.",
  },
  {
    icon: "💬",
    title: "AI Website Chatbot",
    text: "A chatbot on your website that answers questions, gives price ranges and books appointments while visitors are still on the page, day or night.",
  },
  {
    icon: "📲",
    title: "Missed-Call Text-Back",
    text: "Every missed call gets a text back in seconds, so the customer talks to you instead of calling the next business on Google.",
  },
  {
    icon: "🔎",
    title: "SEO & AI Search",
    text: "Show up on Google, Google Maps and ChatGPT when people nearby search for what you do.",
  },
  {
    icon: "⭐",
    title: "Review Checkup",
    text: "We reach out to your past customers to collect the reviews you never asked for, then set up automatic review requests after every future job or visit.",
  },
  {
    icon: "🖥️",
    title: "Website",
    text: "A fast, professional website built for your business, hosted and kept updated, and made to turn visitors into calls and bookings.",
  },
];

// Industry systems that repeat a core service (text-back lines, SEO, reviews, website, chat).
const DUPLICATE_TITLE = /\bSEO\b|AI search|Territory Lock|Review|Text-?Back|Chat ?bot|Website|\bLine$/i;
const DUPLICATE_TEXT = /[Mm]issed calls? (get|gets) a text|text back in seconds|^Missed calls and/;

/** The four systems built specifically for this industry, shown after the core services. */
export function personalSystems(ind: Industry, count = 4): System[] {
  const keep = ind.systems.filter((s) => !DUPLICATE_TITLE.test(s.title) && !DUPLICATE_TEXT.test(s.text));
  return [...keep.filter((s) => s.tier === 1), ...keep.filter((s) => s.tier === 2)].slice(0, count);
}
