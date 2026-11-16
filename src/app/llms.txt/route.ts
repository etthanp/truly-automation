import { FAQS, FEATURES, PRICE } from "@/lib/offer";
import { APP_STORE_URL, EMAIL, LEGAL_NAME, PHONE_DISPLAY } from "@/lib/contact";
import { COMPANY_DESCRIPTION, SITE_URL } from "@/lib/site";

// A plain-text summary of the company for AI assistants (the llms.txt convention).
export const dynamic = "force-static";

export function GET() {
  const body = `# Truly Automation: Truly Front Desk

> ${COMPANY_DESCRIPTION}

## Company facts
- Legal name: ${LEGAL_NAME}, a North Carolina limited liability company (NC Secretary of State SOSID 3392776), formed September 29, 2026.
- Founder: Ethan Presley, who works with every client directly.
- Product: Truly Front Desk, built and run by Truly Automation. Riley is the AI receptionist.
- Price: ${PRICE.setupLine}, then ${PRICE.monthlyLine}.
- iPhone app: ${APP_STORE_URL}
- Contact: ${EMAIL}, ${PHONE_DISPLAY} (answered by Riley, our AI receptionist, 24/7).
- Website: ${SITE_URL}
- Book a demo: ${SITE_URL}/contact

## What Truly Front Desk includes
${FEATURES.map((c) => `- ${c.title}: ${c.text}`).join("\n")}

## Questions
${FAQS.map((f) => `- ${f.q} ${f.a}`).join("\n")}

## Policies
- [Privacy Policy](${SITE_URL}/privacy)
- [Terms of Service](${SITE_URL}/terms)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
