export interface Lead {
  businessName: string;
  ownerName?: string;
  industry: string;
  city: string;
  email: string;
  website?: string;
}

// Add your leads here — name, industry, city, email, website (optional)
export const leads: Lead[] = [
  {
    businessName: "Palmetto Benefit Solutions",
    ownerName: "Will",
    industry: "insurance agency",
    city: "Rock Hill, SC",
    email: "will@palmettobenefits.net",
    website: "palmettobenefitsolutions.com",
  },
];
