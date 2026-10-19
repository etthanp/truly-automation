import type { Industry } from "./types";

const gyms: Industry = {
  slug: "gyms",
  name: "Gyms & Fitness",
  who: "gyms and fitness studios",
  one: "gym",
  category: "Health & wellness",
  icon: "🏋️",
  tagline: "Free trial booking, membership pricing and member retention.",
  meta: {
    title: "Marketing for Gyms and Fitness Studios | Truly Automation",
    description:
      "Marketing built for gyms, CrossFit boxes and fitness studios: free trial booking by text, a membership price finder, trial-to-member follow-up, win-back campaigns, January and summer pushes and referral programs. One gym per area.",
  },
  hero: {
    line1: "Free trials booked.",
    line2: "Members who stay.",
    sub: "The marketing team built for gyms and fitness studios. New people book a free class by text, trials turn into members, and members who stop showing up get a nudge before they cancel.",
    cards: {
      lead: {
        label: "Trial Line",
        title: "Free trial class",
        fields: [["Goal", "Lose 20 lbs"], ["Experience", "Beginner"], ["Town", "Concord"], ["Booked", "Tuesday 6:00 PM"]],
      },
      side: {
        label: "New Year Push",
        title: "January",
        rows: [["Trial signups", "96"], ["Showed up", "71"], ["New members", "44"]],
      },
      small: { label: "Check-In Nudge", title: "Hasn't been in 14 days", text: "Text sent, booked Thursday class" },
    },
  },
  problems: [
    { title: "Trials don't turn into members", text: "People try a class, say they'll think about it, and never come back." },
    { title: "Members quietly quit", text: "Members stop showing up for weeks before they cancel, and nobody notices in time." },
    { title: "Big box gyms are cheap", text: "$10 gyms make price the first question, and you need to show why you're different." },
    { title: "Busy in January, slow by March", text: "New Year signups fade fast, and summer is slow." },
  ],
  systems: [
    { icon: "📲", title: "Trial Line", text: "Calls, DMs and web visitors get a text back in seconds with open class times and a free trial booked.", tier: 1 },
    { icon: "🧮", title: "Membership Finder", text: "Visitors pick their goal and see which membership fits and what it costs.", tier: 1 },
    { icon: "🔁", title: "Trial-to-Member Follow-Up", text: "After a trial, a short series of texts with a member offer and a coach check-in.", tier: 1 },
    { icon: "👀", title: "Check-In Nudges", text: "Members who haven't checked in for two weeks get a friendly text from their coach before they cancel.", tier: 1 },
    { icon: "🔎", title: "SEO & AI search", text: "Show up on Google, Maps and ChatGPT for “gym near me,” personal training and every class you offer.", tier: 1 },
    { icon: "🔒", title: "Territory Lock", text: "We work with one gym per area. The gym down the road can't hire us.", tier: 1 },
    { icon: "🎉", title: "New Year & Summer Pushes", text: "Challenge campaigns timed for January and summer, the two biggest signup seasons.", tier: 2 },
    { icon: "🏆", title: "Transformation Stories", text: "Member success stories turned into pages, posts and ads, with permission.", tier: 2 },
    { icon: "👯", title: "Bring-a-Friend", text: "Members invite friends to free classes, with rewards for every friend who joins.", tier: 2 },
    { icon: "🏢", title: "Corporate Wellness Outreach", text: "Group memberships for local employers and their teams.", tier: 2 },
    { icon: "↩️", title: "Win-Back Campaigns", text: "Former members get a come-back offer at the right time.", tier: 2 },
    { icon: "🎥", title: "Social Content", text: "Workout clips, coach intros and member wins posted every week.", tier: 2 },
  ],
  packages: [
    { name: "Warm-Up", tagline: "Everything a gym needs to book free trials, turn them into members and keep members showing up." },
    { name: "Full Rep", tagline: "Warm-Up plus seasonal challenges, transformation stories, referrals, corporate wellness and weekly content." },
  ],
  estimator: {
    name: "Membership Finder",
    question: "Which membership fits me?",
    blurb: "Visitors see what membership fits their goal and what it costs, then book a free trial on the spot.",
    bullets: ["Uses your real plans", "Free trial booked in one tap", "No price shock at the front desk"],
    projectLabel: "Plan",
    projects: [
      { key: "open", label: "Open gym", unit: "none", fixed: [35, 60], note: "Per month. No long contract." },
      { key: "classes", label: "Unlimited classes", unit: "none", fixed: [120, 180], note: "Per month. Includes open gym." },
      { key: "pt", label: "Personal training", unit: "count", unitLabel: "Sessions per month", perWord: "session", per: [50, 80], start: 8 },
    ],
    toggles: [
      { key: "nutrition", label: "Add nutrition coaching", fixed: [50, 100] },
      { key: "family", label: "Add a family member", fixed: [25, 50], only: ["open", "classes"] },
    ],
    cta: "Book my free trial",
  },
  demo: {
    name: "Trial Line",
    business: "Ironworks Fitness",
    greeting:
      "Hey, this is Ava with Ironworks Fitness! Sorry we missed your call, our coaches are running a class. I can help right here by text. What are you looking to work on?",
    chips: ["How much is a membership?", "I'm a total beginner", "Can I try a free class?"],
    busy: "Your coaches are running a class",
    steps: [
      { t: "The call comes in", d: "Someone wants to finally get in shape and calls about classes. Your coaches are mid-class, so nobody can grab it." },
      { t: "It texts back in seconds", d: "They get an encouraging text before they talk themselves out of it." },
      { t: "The free trial gets booked", d: "Ava asks about their goal and schedule, answers price questions, and books a free trial class." },
    ],
    goal: "a free trial class",
    facts: `Business: Ironworks Fitness (a demo gym on the Truly Automation website)
Location: Concord, serving Kannapolis, Harrisburg and Midland
Hours: Mon-Fri 5am-9pm, Sat 7am-2pm, Sun 8am-12pm.
Offers: open gym, strength and conditioning classes, beginner bootcamp, personal training, nutrition coaching. Beginner friendly, coaches scale every workout.
Prices: open gym $35-$60/month; unlimited classes $120-$180/month (includes open gym); personal training $50-$80 per session; nutrition coaching $50-$100/month. No long contracts. First class free.
Trial class times: Tomorrow 6:00 AM, 12:00 PM, 6:00 PM; Thursday 5:30 PM; Saturday 9:00 AM.
Rules: be encouraging and judgment-free. If they mention a recent injury, heart condition or pregnancy, say a coach will go over it and they may want to check with their doctor first. Never give medical advice or promise specific results.`,
  },
  faqs: [
    { q: "How do you turn trials into members?", a: "After every trial, a short series of texts follows up with a member offer and a check-in from the coach, so the decision doesn't fade." },
    { q: "Can you help with retention?", a: "Yes. Check-In Nudges text members who haven't been in for two weeks, which catches people before they cancel." },
    { q: "Do you handle social media?", a: "In Full Rep we post workout clips, coach intros and member wins every week." },
    { q: "How soon will I see more trials?", a: "The Trial Line and follow-up start working the week they go live. Google rankings and ads build over 60 to 90 days." },
  ],
};

export default gyms;
