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
    businessName: "Test Business",
    ownerName: "Ethan",
    industry: "dental office",
    city: "Rock Hill, SC",
    email: "ethan@trulyautomation.com",
  },
  {
    businessName: "Palmetto Benefit Solutions",
    ownerName: "Will",
    industry: "insurance agency",
    city: "Rock Hill, SC",
    email: "will@palmettobenefits.net",
    website: "palmettobenefitsolutions.com",
  },
  {
    businessName: "Allied Benefit Systems",
    ownerName: "Susie",
    industry: "insurance agency",
    city: "Rock Hill, SC",
    email: "sleary-belk@alliedbenefit.com",
    website: "alliedbenefit.com",
  },
];
