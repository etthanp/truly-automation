"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkolvvzy";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-navy/35 outline-none focus:border-royal";
const labelClass = "block text-sm font-semibold text-navy";
const hintClass = "mt-1 text-xs text-navy/55";

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({ id, label, hint, placeholder, type = "text", required, textarea }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {!required && <span className="font-normal text-navy/40"> (optional)</span>}
      </label>
      {textarea ? (
        <textarea id={id} name={label} rows={3} required={required} placeholder={placeholder} className={inputClass} />
      ) : (
        <input id={id} name={label} type={type} required={required} placeholder={placeholder} className={inputClass} />
      )}
      {hint && <p className={hintClass}>{hint}</p>}
    </div>
  );
}

function Choice({ id, label, options, hint }: { id: string; label: string; options: string[]; hint?: string }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>{label}</label>
      <select id={id} name={label} required defaultValue="" className={inputClass}>
        <option value="" disabled>Choose one</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {hint && <p className={hintClass}>{hint}</p>}
    </div>
  );
}

function Section({ step, title, intro, children }: { step: number; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
      <legend className="sr-only">{title}</legend>
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-royal text-sm font-bold text-white">
          {step}
        </span>
        <h2 className="text-xl font-extrabold text-navy">{title}</h2>
      </div>
      {intro && <p className="mt-2 text-sm text-navy/65">{intro}</p>}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export default function OnboardingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("_subject", `New client onboarding: ${data.get("Business name customers know") || "client"}`);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-royal/20 bg-white p-10 text-center shadow-sm">
        <p className="text-3xl">🎉</p>
        <h2 className="mt-3 text-2xl font-extrabold text-navy">Got it. You&apos;re all set.</h2>
        <p className="mx-auto mt-3 max-w-lg text-navy/70">
          We&apos;ll review everything and reach out within one business day to book your
          kickoff call. If you still need to send photos, text or email them to Ethan
          anytime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <Section step={1} title="Your business">
        <Field id="legal" label="Legal business name" placeholder="Johnson Construction LLC" required />
        <Field id="dba" label="Business name customers know" placeholder="Johnson Construction" required />
        <Field id="owner" label="Owner name(s)" placeholder="Mike Johnson" required />
        <Field id="contact" label="Main contact for us (if different)" placeholder="Name and role" />
        <Field id="phone" label="Best phone for you" type="tel" placeholder="(910) 555-0123" required />
        <Field id="email" label="Best email for you" type="email" placeholder="you@yourcompany.com" required />
        <Field id="address" label="Business address" placeholder="Street, city, ZIP" required />
        <Field id="since" label="Year you started" placeholder="2015" required />
        <Field id="team" label="Team size" placeholder="2 crews, 8 employees" required />
        <Field id="license" label="Licenses & insurance" placeholder="License #, insured, bonded (if it applies)" />
      </Section>

      <Section step={2} title="Services & service area" intro="This is what goes on your website, your Google profile, and into your AI receptionist.">
        <Field id="services" label="Services you offer" textarea required placeholder="Everything you offer, e.g. driveways, patios, foundations, repairs…" />
        <Field id="best-jobs" label="Jobs you want more of" textarea required placeholder="Bigger projects, commercial work, repeat customers…" />
        <Field id="area" label="Towns you serve" textarea required placeholder="Your city and the nearby towns you cover" />
        <Field id="avoid" label="Jobs or areas you don't want" textarea placeholder="Nothing under $1,000, nothing more than an hour away…" />
        <Field id="hours" label="Business hours" placeholder="Mon–Fri 7am–6pm" required />
        <Field id="emergency" label="After-hours & urgent requests" placeholder="Closed weekends, urgent calls go to my cell" />
        <Field id="ticket" label="Typical small job price" placeholder="$500–1,500" />
        <Field id="install" label="Typical larger project price" placeholder="$8,000–25,000" />
        <Field id="brands" label="Certifications, brands or partners" placeholder="Certified installer, builder partners…" />
        <Field id="financing" label="Financing, warranties & maintenance plans" placeholder="Financing available, 2-year workmanship warranty…" />
      </Section>

      <Section step={3} title="What makes you different" intro="The details only you know. This is what makes your marketing sound like you instead of every other company.">
        <Field id="different" label="Why customers pick you" textarea required placeholder="Family-owned, we show up on time, clean job sites…" />
        <Field id="story" label="How the business started" textarea placeholder="A few sentences is perfect." />
        <Field id="competitors" label="Your main competitors" textarea placeholder="Who you lose jobs to most" />
        <Field id="leads-now" label="Where most of your work comes from now" textarea placeholder="Word of mouth, Google, builders, repeat customers…" />
        <Field id="photos" label="Link to your photos" hint="A Google Drive or Dropbox folder with photos of your team, vehicles and finished work. No link? Text them to Ethan instead." placeholder="https://drive.google.com/…" />
        <Field id="logo" label="Link to your logo" placeholder="Or we'll grab it from your current website" />
      </Section>

      <Section step={4} title="Accounts & access" intro="We need access to manage these for you. Your accounts always stay in your name.">
        <Field id="domain" label="Your website address" placeholder="yourcompany.com" required />
        <Field id="registrar" label="Where the domain is registered" hint="GoDaddy, Namecheap, Google, or 'not sure'. That's fine; we'll help." placeholder="GoDaddy / not sure" required />
        <Choice id="gbp" label="Google Business Profile access" options={["Done: added ethan@trulyautomation.com as a Manager", "I'll do it this week", "I need help with this", "I don't have a Google profile"]} hint="In your Google Business Profile, go to Business Profile settings → People and access → Add, then enter ethan@trulyautomation.com as a Manager." />
        <Choice id="facebook" label="Facebook page access" options={["Done: gave Ethan access to the page", "I'll do it this week", "I need help with this", "We don't have a Facebook page yet"]} hint="If you have a page, share the link below and we'll send you a one-click access request." />
        <Field id="fb-url" label="Facebook / Instagram links" placeholder="facebook.com/… , instagram.com/…" />
        <Choice id="software" label="How you schedule jobs now" options={["Jobber", "Housecall Pro", "ServiceTitan", "QuickBooks", "Google Calendar", "Paper / whiteboard", "Other"]} />
        <Choice id="booking" label="How the AI receptionist should handle a new call" options={["Book the appointment directly", "Collect their info, then text me to call them back", "Book routine jobs, send urgent ones to me right away"]} />
        <Field id="alerts" label="Who gets new-lead alerts" placeholder="Name + cell number(s)" required />
      </Section>

      <Section step={5} title="Billing contact">
        <Field id="billing-name" label="Billing contact name" placeholder="Name" required />
        <Field id="billing-email" label="Billing email" type="email" placeholder="Where invoices and receipts go" required />
        <div className="sm:col-span-2">
          <Field id="anything" label="Anything else we should know" textarea placeholder="Busy season, promotions you run, things you've tried before…" />
        </div>
      </Section>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          That didn&apos;t go through. Check your connection and submit again, or email
          ethan@trulyautomation.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-ember px-8 py-4 text-base font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-[1.01] disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send my onboarding info"}
      </button>
    </form>
  );
}
