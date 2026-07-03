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
    businessName: "Sunrise Dental",
    ownerName: "Dr. Patel",
    industry: "dental office",
    city: "Nashville, TN",
    email: "info@sunrisedental.com",
    website: "sunrisedental.com",
  },
  {
    businessName: "Green Thumb Landscaping",
    industry: "landscaping company",
    city: "Franklin, TN",
    email: "hello@greenthumb.com",
  },
  {
    businessName: "The Rustic Fork",
    ownerName: "Sarah",
    industry: "restaurant",
    city: "Brentwood, TN",
    email: "contact@therusticfork.com",
    website: "therusticfork.com",
  },
];
