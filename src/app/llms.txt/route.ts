import { industries } from "@/lib/industries";
import { CORE } from "@/lib/industries/core";
import { EMAIL, LEGAL_NAME, PHONE_DISPLAY } from "@/lib/contact";
import { COMPANY_DESCRIPTION, SITE_URL } from "@/lib/site";

// A plain-text summary of the company for AI assistants (the llms.txt convention).
export const dynamic = "force-static";

export function GET() {
  const body = `# Truly Automation

> ${COMPANY_DESCRIPTION}

## Company facts
- Legal name: ${LEGAL_NAME}, a North Carolina limited liability company (NC Secretary of State SOSID 3392776), formed September 29, 2026.
- Founder: Ethan Presley, who works with every client directly.
- Serves local service businesses across the United States.
- Contact: ${EMAIL}, ${PHONE_DISPLAY} (answered by our AI receptionist, 24/7).
- Website: ${SITE_URL}

## What we do
${CORE.map((c) => `- ${c.title}: ${c.text}`).join("\n")}
- Google and Facebook ads: set up and managed in every plan. Ad spend is paid on the client's own card.

## How we work
- Every plan is personalized. Clients choose what they want from us.
- Territory Lock: we work with one business per industry per city, so we never market a client's direct competitor.
- Free marketing checkup: ${SITE_URL}/contact

## Industries
${industries.map((i) => `- [${i.name}](${SITE_URL}/${i.slug}): ${i.tagline}`).join("\n")}

## Policies
- [Privacy Policy](${SITE_URL}/privacy)
- [Terms of Service](${SITE_URL}/terms)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
