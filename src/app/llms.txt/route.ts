import { industries } from "@/lib/industries";
import { FEATURES } from "@/lib/frontdesk";
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
- Truly Automation builds and runs its AI front desk systems for each client.
- Serves local businesses across the United States.
- Contact: ${EMAIL}, ${PHONE_DISPLAY} (answered by our AI receptionist, 24/7).
- Website: ${SITE_URL}

## What every AI front desk includes
${FEATURES.map((c) => `- ${c.title}: ${c.text}`).join("\n")}

## How we work
- We learn the business, build its front desk, test it with the owner before it takes real calls, then keep running and updating it.
- The AI only answers from information the business approves, tells callers the truth if asked whether it's an AI, and hands off to a person when needed.
- Free front desk checkup: ${SITE_URL}/contact

## Industries
${industries.map((i) => `- [${i.name}](${SITE_URL}/${i.slug}): ${i.tagline}`).join("\n")}

## Policies
- [Privacy Policy](${SITE_URL}/privacy)
- [Terms of Service](${SITE_URL}/terms)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
