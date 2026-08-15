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
  // ↓ Example. Copy this shape for each real lead, then delete this one.
  // {
  //   businessName: "Summit Comfort Heating & Air",
  //   ownerName: "Dave",
  //   industry: "HVAC contractor",
  //   city: "Fayetteville, NC",
  //   email: "dave@summitcomfortair.com",
  //   website: "summitcomfortair.com",
  // },
];
