import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { EMAIL, LEGAL_NAME, MAILING_ADDRESS, PHONE_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy | Truly Automation",
  description: "How Truly Automation LLC collects, uses and protects your information.",
};

const UPDATED = "October 12, 2026";

const sections: LegalSection[] = [
  {
    title: "Who we are",
    body: [
      `${LEGAL_NAME} ("Truly Automation," "we," "us") is a North Carolina limited liability company that provides marketing services to small businesses. This policy covers trulyautomation.com, our forms, and the calls, texts and emails you exchange with us.`,
    ],
  },
  {
    title: "Information we collect",
    body: [
      "Information you give us:",
      {
        list: [
          "Free checkup and contact requests: your name, phone number, email, business name, type of business, service area and anything you choose to tell us.",
          "Client onboarding: business details, service information, photos and logos you share, account access you grant us, and a billing contact.",
          "Calls, texts and emails you send us.",
        ],
      },
      "Website demo: if you try the AI receptionist demo on our site, the messages you type are sent to our AI provider to generate replies. The demo uses made-up businesses, so please don't enter personal or sensitive information.",
      "Payments: payments are processed by Stripe. We see the payment amount and status and the last digits of your card or bank account, but we never receive or store full card or bank account numbers.",
      "Automatic information: like most websites, our hosting provider keeps standard server logs (such as IP address, browser type, pages visited and time of visit) for security and performance. We do not use advertising cookies or tracking pixels on this site.",
    ],
  },
  {
    title: "How we use information",
    body: [
      {
        list: [
          "To reply to you and prepare the free marketing checkup you asked for.",
          "To provide the services in a client's agreement, including websites, Google Business Profile management, review requests, social media, advertising and AI receptionist services.",
          "To send invoices, receipts and messages about your account.",
          "To keep our website and services secure and working properly.",
          "To meet legal, tax and accounting requirements.",
        ],
      },
    ],
  },
  {
    title: "Information we handle for our clients",
    body: [
      "When we run marketing or an AI receptionist for a client, we may handle information about that client's customers, such as a caller's name, phone number and message, or a customer's email for a review request. We use that information only to provide services to that client, following the client's instructions. If you are a customer of one of our clients, you can also contact that business directly about your information.",
    ],
  },
  {
    title: "Text messaging",
    body: [
      "If you text us, or text with an AI receptionist we operate for one of our clients, we use your phone number to respond to you and continue that conversation.",
      {
        list: [
          "Message frequency varies. Message and data rates may apply.",
          "Reply STOP at any time to stop receiving messages. Reply HELP for help, or contact us using the details below.",
          "Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.",
          "Text messaging opt-in data and consent will not be shared with any third parties.",
        ],
      },
    ],
  },
  {
    title: "How we share information",
    body: [
      "We do not sell your personal information. We share it only:",
      {
        list: [
          "With service providers that help us run our business, such as website hosting (Vercel), form handling (Formspree), payment processing (Stripe), email, phone and texting providers, and AI services (Anthropic). They may use the information only to provide their services to us.",
          "With the client a lead or customer contacted, when we are providing services for that client.",
          "When required by law, or to protect our rights, our clients or the public.",
          "If our business is sold or merged, as part of that transaction.",
        ],
      },
    ],
  },
  {
    title: "How long we keep information",
    body: [
      "We keep information for as long as we need it for the purposes above, including while a client works with us and afterward as required for tax, accounting and legal records. When we no longer need it, we delete it or remove the details that identify you.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable safeguards, such as access controls, two-step login on our accounts and trusted providers, to protect your information. No system is perfectly secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your choices",
    body: [
      `You can ask us to see, correct or delete the personal information we hold about you by emailing ${EMAIL}. You can stop marketing emails by using the unsubscribe link or replying to tell us, and stop texts by replying STOP. We will still send messages we need to about an active account, such as invoices.`,
    ],
  },
  {
    title: "Children",
    body: [
      "Our website and services are meant for businesses and are not directed to children under 13. We do not knowingly collect information from children under 13.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. When we do, we will change the date at the top of this page. Big changes will be explained on this page or sent to our clients by email.",
    ],
  },
  {
    title: "Contact us",
    body: [
      `${LEGAL_NAME}`,
      `${MAILING_ADDRESS}`,
      `Email: ${EMAIL}`,
      `Phone: ${PHONE_DISPLAY}`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={UPDATED}
      intro="This policy explains what information Truly Automation collects, how we use it, and the choices you have. We keep it short and in plain English."
      sections={sections}
    />
  );
}
