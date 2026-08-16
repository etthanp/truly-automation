export interface Lead {
  businessName: string;
  ownerName?: string;
  industry: string;
  city: string;
  email: string;
  website?: string;
}

// ──────────────────────────────────────────────────────────────────────
// YOUR HVAC LEADS
//
// Every morning at 9am, the system emails everyone in this list a
// personalized cold email (written fresh by AI) pitching the missed-call
// AI receptionist — then marks them contacted so they're never emailed twice.
//
// HOW TO ADD LEADS:
//   1. In Apollo.io, filter for HVAC companies in a city/region you want.
//   2. Grab the verified email + (if shown) the owner's first name.
//   3. Add an entry below following the example shape.
//   4. Push to GitHub — they'll get emailed the next morning at 9am.
//
// Required: businessName, industry, city, email.
// Optional but recommended: ownerName, website (make the email more personal).
// ──────────────────────────────────────────────────────────────────────

export const leads: Lead[] = [
  // TEMP test lead — sends one email to Ethan's own inbox to confirm the system works.
  // Safe to delete after the test (Upstash marks it contacted, so it won't resend).
  {
    businessName: "Test Run HVAC",
    ownerName: "Ethan",
    industry: "HVAC contractor",
    city: "Pembroke, NC",
    email: "ethan.b.pres+demo2@gmail.com",
  },
];
