"use client";

import { useEffect, useRef, useState } from "react";

// East Coast Water Quality lead texting demo. A lead comes in from any source and an assistant
// runs the first few texts from Chris's own cell, following his playbook: an opener for that
// source, qualifying questions, a recommendation with a video, then it hands the conversation to
// Chris. Everything shows in his normal Messages app, and the moment he texts a customer himself
// the assistant stops. Every customer and phone number below is made up.

type SourceId = "angi" | "lowes" | "facebook" | "google" | "website";

const SOURCES: Record<SourceId, { name: string; via: string; dot: string; icon: string }> = {
  angi: { name: "Angi", via: "Angi lead", dot: "bg-[#e5533d]", icon: "from-[#ff7a66] to-[#e5533d]" },
  lowes: { name: "Lowe's", via: "Install request", dot: "bg-[#1f4fa3]", icon: "from-[#3d6fd1] to-[#1f4fa3]" },
  facebook: { name: "Facebook", via: "Lead form ad", dot: "bg-[#3b5bdb]", icon: "from-[#5c7cfa] to-[#3b5bdb]" },
  google: { name: "Google", via: "Local Services", dot: "bg-[#2f9e44]", icon: "from-[#51cf66] to-[#2f9e44]" },
  website: { name: "Website", via: "Contact form", dot: "bg-ember", icon: "from-[#ffa94d] to-ember" },
};

type Turn = { who: "ai" | "them"; body: string };
type Script = { first: string; last: string; town: string; phone: string; ask: string; turns: Turn[]; handoff: string };

// Example conversations in Chris's style. His real playbook replaces these.
const SCRIPTS: Record<SourceId, Script> = {
  angi: {
    first: "Sarah", last: "Mitchell", town: "Chesapeake", phone: "(757) 555-0182",
    ask: "White spots on everything, interested in a softener",
    turns: [
      { who: "ai", body: "Hi Sarah, this is Chris with East Coast Water Quality. I just got your request through Angi. Thanks for reaching out! Is your home on city water or a well?" },
      { who: "them", body: "City water. White spots on everything and our skin is so dry" },
      { who: "ai", body: "That's really common in Chesapeake, the water runs hard here. How many people live in the home, and how many bathrooms?" },
      { who: "them", body: "4 of us, 2 and a half baths" },
      { who: "ai", body: "Got it. For a home your size I usually recommend a whole-house softener with a carbon filter. It takes care of the spots and the chlorine. Here's a 2 minute video on how it works: eastcoastwaterquality.com" },
      { who: "them", body: "That looks great. How much does something like that run?" },
    ],
    handoff: "asked about price",
  },
  lowes: {
    first: "Linda", last: "Carver", town: "Virginia Beach", phone: "(757) 555-0129",
    ask: "Bought a softener at Lowe's, needs it installed",
    turns: [
      { who: "ai", body: "Hi Linda, it's Chris with East Coast Water Quality. Lowe's sent over your install request for your water softener. Happy to help! Is the unit already at the house?" },
      { who: "them", body: "Yes it's in the garage" },
      { who: "ai", body: "Perfect. Do you know where your main water line comes into the house, and is there an outlet close by?" },
      { who: "them", body: "Garage wall, and there's an outlet right there" },
      { who: "ai", body: "That's about as easy as it gets. What days usually work best for you?" },
      { who: "them", body: "Any weekday morning" },
    ],
    handoff: "is ready to book an install",
  },
  facebook: {
    first: "Kayla", last: "Brooks", town: "Suffolk", phone: "(757) 555-0198",
    ask: "Free water test form",
    turns: [
      { who: "ai", body: "Hi Kayla, this is Chris with East Coast Water Quality. I saw you asked about a free water test on Facebook. Are you on city water or a well?" },
      { who: "them", body: "Well. It smells like rotten eggs, especially the hot water" },
      { who: "ai", body: "That's usually sulfur, and we see it a lot on wells around Suffolk. Any orange or brown staining in the toilets or sinks?" },
      { who: "them", body: "Yes, in both toilets" },
      { who: "ai", body: "That tells me there's iron too. Good news, one system handles both. Here's a family in Suffolk with the same problem: eastcoastwaterquality.com. Want me to set up your free water test so we know exactly what's in it?" },
      { who: "them", body: "Yes please! Is Saturday possible?" },
    ],
    handoff: "wants to schedule a water test",
  },
  google: {
    first: "Marcus", last: "Greene", town: "Norfolk", phone: "(757) 555-0164",
    ask: "Reverse osmosis for drinking water",
    turns: [
      { who: "ai", body: "Hi Marcus, Chris here with East Coast Water Quality. Thanks for finding us on Google! What's going on with your water?" },
      { who: "them", body: "Mostly the taste. We buy cases of bottled water every week" },
      { who: "ai", body: "A lot of our Norfolk customers were in the same spot. A reverse osmosis system under the kitchen sink gives you bottled-quality water right from the tap. Here's a quick video: eastcoastwaterquality.com" },
      { who: "them", body: "Do you guys offer financing?" },
    ],
    handoff: "asked about financing",
  },
  website: {
    first: "Greg", last: "Simmons", town: "Moyock", phone: "(252) 555-0120",
    ask: "Well water, whole-house system",
    turns: [
      { who: "ai", body: "Hi Greg, this is Chris with East Coast Water Quality. I got your message from our website. Thanks for reaching out! Tell me a little about what you're seeing with your water." },
      { who: "them", body: "We just bought a house in Moyock on a well and have no idea what's in it" },
      { who: "ai", body: "Congrats on the new place! The best first step is a free water test, then we know exactly what you need. How many people are in the home?" },
      { who: "them", body: "Me, my wife and 2 kids. When could you come out?" },
    ],
    handoff: "wants to schedule a water test",
  },
};

type Msg = { from: "me" | "them"; body: string; time: string; auto?: boolean };
type Status = "assistant" | "ready" | "you";
type Lead = Omit<Script, "turns" | "handoff"> & {
  id: string;
  source: SourceId;
  thread: Msg[];
  typing: boolean;
  status: Status;
  aiSent: number;
  handoff: string;
};
type Note = { id: string; app: "messages" | SourceId; title: string; body: string; time: string; open: View };
type View = { screen: "lock" } | { screen: "messages" } | { screen: "thread"; id: string };

const ASSISTANT_ID = "assistant";
const now = () => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const fullName = (l: { first: string; last: string }) => `${l.first} ${l.last}`;

function seedLead(source: SourceId, id: string, times: string[], status: Status, extra: Msg[] = []): Lead {
  const s = SCRIPTS[source];
  const thread: Msg[] = s.turns.map((t, i) => ({ from: t.who === "ai" ? "me" : "them", body: t.body, time: times[i] ?? times[times.length - 1], auto: t.who === "ai" }));
  const { turns, ...rest } = s;
  return { ...rest, id, source, thread: [...thread, ...extra], typing: false, status, aiSent: turns.filter((t) => t.who === "ai").length };
}

const SEED_LEADS: Lead[] = [
  seedLead("facebook", "seed-fb", ["8:12 AM", "8:14 AM", "8:14 AM", "8:16 AM", "8:16 AM", "8:19 AM"], "you", [
    { from: "me", body: "Saturday works! I can be there at 10. What's the address?", time: "8:31 AM" },
  ]),
];
const SEED_ASSISTANT: Msg[] = [
  { from: "them", body: "Your turn: Kayla Brooks (Facebook) wants to schedule a water test. I stopped texting her. Well water in Suffolk, sulfur smell plus iron staining.", time: "8:19 AM" },
];
const SEED_NOTES: Note[] = [
  { id: "n-seed", app: "messages", title: "ECWQ Assistant", body: SEED_ASSISTANT[0].body, time: "8:19 AM", open: { screen: "thread", id: ASSISTANT_ID } },
];

export default function LeadTextDemo() {
  const [leads, setLeads] = useState<Lead[]>(SEED_LEADS);
  const [assistant, setAssistant] = useState<Msg[]>(SEED_ASSISTANT);
  const [notes, setNotes] = useState<Note[]>(SEED_NOTES);
  const [view, setView] = useState<View>({ screen: "lock" });
  const [banner, setBanner] = useState<Note | null>(null);
  const [running, setRunning] = useState<SourceId[]>([]);
  const status = useRef<Record<string, Status>>({ "seed-fb": "you" });
  const ids = useRef(10);
  const alive = useRef(true);
  const bannerTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      clearTimeout(bannerTimer.current);
    };
  }, []);

  const patch = (id: string, fn: (l: Lead) => Lead) => setLeads((all) => all.map((l) => (l.id === id ? fn(l) : l)));

  function notify(note: Note) {
    setNotes((n) => [note, ...n]);
    setBanner(note);
    clearTimeout(bannerTimer.current);
    bannerTimer.current = setTimeout(() => setBanner(null), 3500);
  }

  async function runLead(source: SourceId) {
    const s = SCRIPTS[source];
    const id = `lead-${ids.current++}`;
    const name = fullName(s);
    const { turns, ...rest } = s;
    setRunning((r) => [...r, source]);
    status.current[id] = "assistant";
    setLeads((all) => [{ ...rest, id, source, thread: [], typing: false, status: "assistant", aiSent: 0 }, ...all]);

    // The lead lands on Chris's phone the way it does today.
    notify({ id: `in-${id}`, app: source, title: SOURCES[source].name, body: `New lead: ${name}, ${s.town}. "${s.ask}"`, time: now(), open: { screen: "thread", id } });
    await sleep(1800);

    for (const turn of turns) {
      if (!alive.current || status.current[id] !== "assistant") break;
      if (turn.who === "ai") {
        patch(id, (l) => ({ ...l, aiSent: l.aiSent + 1, thread: [...l.thread, { from: "me", body: turn.body, time: now(), auto: true }] }));
        await sleep(1600);
      } else {
        patch(id, (l) => ({ ...l, typing: true }));
        await sleep(1700);
        if (!alive.current) break;
        patch(id, (l) => ({ ...l, typing: false, thread: [...l.thread, { from: "them", body: turn.body, time: now() }] }));
        if (status.current[id] === "assistant")
          notify({ id: `m-${id}-${ids.current++}`, app: "messages", title: name, body: turn.body, time: now(), open: { screen: "thread", id } });
        await sleep(1500);
      }
    }

    if (alive.current && status.current[id] === "assistant") {
      status.current[id] = "ready";
      patch(id, (l) => ({ ...l, status: "ready" }));
      const body = `Your turn: ${name} (${SOURCES[source].name}) ${s.handoff}. I stopped texting them. ${s.town}, "${s.ask}".`;
      const time = now();
      setAssistant((a) => [...a, { from: "them", body, time }]);
      notify({ id: `h-${id}`, app: "messages", title: "ECWQ Assistant", body, time, open: { screen: "thread", id } });
    }
    setRunning((r) => r.filter((x) => x !== source));
  }

  // Chris texts a customer himself: the assistant steps back from that conversation for good.
  function chrisTexts(id: string, body: string) {
    status.current[id] = "you";
    patch(id, (l) => ({ ...l, status: "you", typing: false, thread: [...l.thread, { from: "me", body, time: now() }] }));
  }

  const ready = leads.filter((l) => l.status === "ready").length;
  const autoTexts = leads.reduce((n, l) => n + l.thread.filter((m) => m.auto).length, 0);
  const latest = leads[0];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-4">
        <Stat value={leads.length} label="Leads today" />
        <Stat value={autoTexts} label="Texts sent for you" />
        <Stat value={ready} label="Ready for you to take over" />
        <Stat value="2 sec" label="To the first text" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0 space-y-6">
          <section className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <StepLabel n="1" text="A lead comes in, from anywhere" />
            <p className="mt-2 text-[13px] text-navy/55">Tap a source to send a test lead, then watch your phone.</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {(Object.keys(SOURCES) as SourceId[]).map((s) => (
                <button
                  key={s}
                  onClick={() => runLead(s)}
                  disabled={running.includes(s)}
                  className="flex items-center gap-3 rounded-xl border border-navy/10 bg-[#fbfaf7] px-3 py-3 text-left transition hover:border-royal disabled:opacity-40"
                >
                  <span className={`h-3 w-3 shrink-0 rounded-full ${SOURCES[s].dot}`} />
                  <span className="min-w-0">
                    <span className="block leading-tight font-semibold">{SOURCES[s].name}</span>
                    <span className="block text-xs text-navy/50">{running.includes(s) ? "Texting now..." : SOURCES[s].via}</span>
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <StepLabel n="2" text="Your assistant runs the first few texts, your way" />
            {latest && <Progress lead={latest} />}

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-navy/50 uppercase">It stops and hands off when</p>
                <ul className="mt-2 space-y-1.5 text-sm text-navy/75">
                  {[
                    "They ask about price or financing",
                    "They're ready to schedule",
                    "They ask something your playbook doesn't cover",
                    "After 5 back-and-forths, no matter what",
                    "You text them yourself, instantly",
                  ].map((r) => (
                    <li key={r} className="flex gap-2.5">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-ember" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-navy/50 uppercase">Conversations</p>
                <ul className="mt-2 divide-y divide-navy/5 text-sm">
                  {leads.map((l) => (
                    <li key={l.id}>
                      <button onClick={() => setView({ screen: "thread", id: l.id })} className="flex w-full items-center gap-2 py-2 text-left hover:text-royal">
                        <span className={`h-2 w-2 shrink-0 rounded-full ${SOURCES[l.source].dot}`} />
                        <span className="min-w-0 flex-1 truncate font-medium">{fullName(l)}</span>
                        <StatusPill status={l.status} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <StepLabel n="3" text="All of it, right in your normal texts" />
          <Phone leads={leads} assistant={assistant} notes={notes} banner={banner} view={view} setView={setView} onSend={chrisTexts} />
          <div className="mx-auto mt-3 flex max-w-[340px] gap-1 rounded-full bg-white p-1 text-[13px] font-semibold shadow-sm">
            {(
              [
                ["lock", "Lock screen"],
                ["messages", "Messages"],
              ] as const
            ).map(([screen, label]) => {
              const on = view.screen === screen || (screen === "messages" && view.screen === "thread");
              return (
                <button
                  key={screen}
                  onClick={() => setView({ screen })}
                  className={`flex-1 rounded-full px-3 py-1.5 transition ${on ? "bg-navy text-white" : "text-navy/60 hover:text-navy"}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <p className="mx-auto mt-2 max-w-[300px] text-center text-[12px] text-navy/50">
            Open any conversation and text the customer yourself. The assistant stops right away.
          </p>
        </div>
      </div>
    </div>
  );
}

const STATUS: Record<Status, [string, string]> = {
  assistant: ["Assistant texting", "bg-sky/20 text-[#0b5e85]"],
  ready: ["Ready for you", "bg-ember/15 text-[#b14c06]"],
  you: ["You took over", "bg-emerald-100 text-emerald-800"],
};

function StatusPill({ status }: { status: Status }) {
  const [label, style] = STATUS[status];
  return <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${style}`}>{label}</span>;
}

function Progress({ lead }: { lead: Lead }) {
  const stages = [`Opener for ${SOURCES[lead.source].name}`, "Qualifying questions", "Recommendation and video", "Hands it to you"];
  const done = lead.status === "assistant" ? Math.min(lead.aiSent, 3) : 4;
  return (
    <div className="mt-4 rounded-xl bg-[#f8f5ef] p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-semibold">
          {fullName(lead)} <span className="font-normal text-navy/55">{lead.town}</span>
        </p>
        <StatusPill status={lead.status} />
      </div>
      <ol className="mt-3 grid gap-2 sm:grid-cols-4">
        {stages.map((s, i) => (
          <li key={s} className={`rounded-lg border px-3 py-2 text-[13px] transition ${i < done ? "border-royal/30 bg-white font-semibold text-navy" : "border-navy/10 text-navy/45"}`}>
            <span className={`mb-1 block h-1 rounded-full ${i < done ? "bg-royal" : "bg-navy/10"}`} />
            {lead.status === "you" && i === 3 ? "You took over" : s}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="bg-white px-4 py-3.5">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-navy/55">{label}</div>
    </div>
  );
}

function StepLabel({ n, text }: { n: string; text: string }) {
  return (
    <p className="flex items-center gap-2 text-sm font-semibold">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ember text-xs text-white">{n}</span>
      {text}
    </p>
  );
}

function Avatar({ name, size = "h-10 w-10 text-sm" }: { name: string; size?: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#a5acb8] to-[#858c99] font-semibold text-white ${size}`}>
      {initials}
    </span>
  );
}

const AssistantIcon = ({ size = "h-10 w-10" }: { size?: string }) => (
  <span className={`flex shrink-0 items-center justify-center rounded-full bg-royal text-[12px] font-bold text-white ${size}`}>AI</span>
);

function AppIcon({ app }: { app: Note["app"] }) {
  if (app === "messages")
    return (
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#5cf777] to-[#0ec43a]">
        <span className="h-3.5 w-4 rounded-[50%] bg-white" />
      </span>
    );
  return (
    <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b text-[13px] font-bold text-white ${SOURCES[app].icon}`}>
      {SOURCES[app].name[0]}
    </span>
  );
}

function Phone({
  leads,
  assistant,
  notes,
  banner,
  view,
  setView,
  onSend,
}: {
  leads: Lead[];
  assistant: Msg[];
  notes: Note[];
  banner: Note | null;
  view: View;
  setView: (v: View) => void;
  onSend: (id: string, body: string) => void;
}) {
  const [clock, setClock] = useState({ time: "9:45", date: "Tuesday, November 25" });

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock({
        time: d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }).replace(/\s?[AP]M$/, ""),
        date: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
      });
    };
    tick();
    const t = setInterval(tick, 20000);
    return () => clearInterval(t);
  }, []);

  const dark = view.screen === "lock";
  const lead = view.screen === "thread" ? leads.find((l) => l.id === view.id) : undefined;
  const lastAssistant = assistant[assistant.length - 1];

  return (
    <div className="mx-auto mt-3 w-full max-w-[340px] rounded-[2.8rem] bg-[#111] p-2.5 shadow-xl">
      <div className={`relative h-[640px] overflow-hidden rounded-[2.3rem] ${dark ? "bg-gradient-to-b from-navy via-[#173a7a] to-[#2b6cb0]" : "bg-white"}`}>
        <div className={`relative z-20 flex h-11 items-center justify-between px-7 text-[13px] font-semibold ${dark ? "text-white" : "text-black"}`}>
          <span>{dark ? "" : clock.time}</span>
          <span className="absolute top-2.5 left-1/2 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />
          <span className="flex items-center gap-1.5">
            <span className="text-[11px]">5G</span>
            <span className={`relative h-3 w-6 rounded-[4px] border ${dark ? "border-white/70" : "border-black/40"}`}>
              <span className={`absolute inset-[1.5px] right-[5px] rounded-[2px] ${dark ? "bg-white" : "bg-black"}`} />
            </span>
          </span>
        </div>

        {banner && !dark && (
          <button
            onClick={() => setView(banner.open)}
            className="absolute top-12 right-2.5 left-2.5 z-30 rounded-2xl bg-[#f2f2f4]/95 p-3 text-left text-black shadow-lg ring-1 ring-black/5 backdrop-blur"
          >
            <NoteBody note={banner} />
          </button>
        )}

        {view.screen === "lock" && (
          <div className="flex h-[596px] flex-col px-3 text-white">
            <p className="mt-2 text-center text-[15px] font-semibold text-white/85">{clock.date}</p>
            <p className="text-center text-[78px] leading-none font-bold tracking-tight">{clock.time}</p>
            <div className="mt-6 flex-1 space-y-2 overflow-y-auto pb-6">
              {notes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setView(n.open)}
                  className="block w-full rounded-2xl bg-white/80 p-3 text-left text-black backdrop-blur transition hover:bg-white"
                >
                  <NoteBody note={n} />
                </button>
              ))}
            </div>
            <div className="mx-auto mb-2 h-1.5 w-32 rounded-full bg-white/80" />
          </div>
        )}

        {view.screen === "messages" && (
          <div className="h-[596px] overflow-y-auto px-4 pb-6">
            <p className="text-[32px] font-bold text-black">Messages</p>
            <div className="mt-2 rounded-xl bg-[#eeeef0] px-3 py-1.5 text-[15px] text-black/40">Search</div>
            <ul className="mt-2 divide-y divide-black/10">
              {lastAssistant && (
                <ThreadRow
                  name="ECWQ Assistant"
                  preview={lastAssistant.body}
                  time={lastAssistant.time}
                  icon={<AssistantIcon />}
                  onClick={() => setView({ screen: "thread", id: ASSISTANT_ID })}
                />
              )}
              {leads
                .filter((l) => l.thread.length > 0)
                .map((l) => {
                  const last = l.thread[l.thread.length - 1];
                  return (
                    <ThreadRow
                      key={l.id}
                      name={fullName(l)}
                      preview={l.typing ? "typing..." : last.body}
                      time={last.time}
                      unread={last.from === "them"}
                      icon={<Avatar name={fullName(l)} />}
                      onClick={() => setView({ screen: "thread", id: l.id })}
                    />
                  );
                })}
            </ul>
          </div>
        )}

        {view.screen === "thread" && view.id === ASSISTANT_ID && (
          <Thread title="ECWQ Assistant" subtitle="Tells you when it's your turn" icon={<AssistantIcon size="h-11 w-11" />} msgs={assistant} onBack={() => setView({ screen: "messages" })} />
        )}
        {lead && (
          <Thread
            title={fullName(lead)}
            subtitle={lead.phone}
            icon={<Avatar name={fullName(lead)} size="h-11 w-11 text-base" />}
            msgs={lead.thread}
            typing={lead.typing}
            onBack={() => setView({ screen: "messages" })}
            onSend={(body) => onSend(lead.id, body)}
          />
        )}
      </div>
    </div>
  );
}

function NoteBody({ note }: { note: Note }) {
  return (
    <div className="flex gap-2.5">
      <AppIcon app={note.app} />
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline justify-between gap-2">
          <span className="truncate text-[14px] font-semibold">{note.title}</span>
          <span className="shrink-0 text-[12px] text-black/45">{note.time}</span>
        </span>
        <span className="line-clamp-2 block text-[14px] leading-snug">{note.body}</span>
      </span>
    </div>
  );
}

function ThreadRow({
  name,
  preview,
  time,
  icon,
  unread,
  onClick,
}: {
  name: string;
  preview: string;
  time: string;
  icon: React.ReactNode;
  unread?: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button onClick={onClick} className="flex w-full items-center gap-3 py-2.5 text-left text-black">
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${unread ? "bg-[#0a84ff]" : "bg-transparent"}`} />
        {icon}
        <span className="min-w-0 flex-1">
          <span className="flex items-baseline justify-between gap-2">
            <span className="truncate text-[15px] font-semibold">{name}</span>
            <span className="shrink-0 text-[13px] text-black/45">{time}</span>
          </span>
          <span className="line-clamp-2 block text-[14px] leading-snug text-black/50">{preview}</span>
        </span>
      </button>
    </li>
  );
}

function Thread({
  title,
  subtitle,
  icon,
  msgs,
  typing,
  onBack,
  onSend,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  msgs: Msg[];
  typing?: boolean;
  onBack: () => void;
  onSend?: (body: string) => void;
}) {
  const [text, setText] = useState("");
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => {
    end.current?.scrollIntoView({ block: "nearest" });
  }, [msgs.length, typing]);

  return (
    <div className="flex h-[596px] flex-col text-black">
      <div className="relative border-b border-black/10 bg-[#f6f6f8] px-3 pb-2">
        <button onClick={onBack} className="absolute top-3 left-3 text-[28px] leading-none text-[#0a84ff]" aria-label="Back to Messages">
          ‹
        </button>
        <div className="mx-auto flex flex-col items-center">
          {icon}
          <span className="mt-1 max-w-[220px] truncate text-[12px]">{title}</span>
          <span className="text-[11px] text-black/45">{subtitle}</span>
        </div>
      </div>
      <div className="flex-1 space-y-1.5 overflow-y-auto px-3 py-3">
        {msgs.length > 0 && <p className="pb-1 text-center text-[11px] text-black/45">Text Message, Today {msgs[0].time}</p>}
        {msgs.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.from === "me" ? "items-end" : "items-start"}`}>
            <p
              className={`max-w-[78%] rounded-[18px] px-3 py-2 text-[15px] leading-snug ${
                m.from === "me" ? "rounded-br-md bg-[#0a84ff] text-white" : "rounded-bl-md bg-[#e9e9eb]"
              }`}
            >
              {m.body}
            </p>
            {m.auto && <span className="mt-0.5 mr-1 text-[10px] text-black/35">Sent by your assistant</span>}
          </div>
        ))}
        {typing && (
          <div className="flex w-14 items-center justify-center gap-1 rounded-[18px] rounded-bl-md bg-[#e9e9eb] py-3">
            {[0, 150, 300].map((d) => (
              <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-black/35" style={{ animationDelay: `${d}ms` }} />
            ))}
          </div>
        )}
        <div ref={end} />
      </div>
      {onSend && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!text.trim()) return;
            onSend(text.trim());
            setText("");
          }}
          className="flex items-center gap-2 border-t border-black/5 px-3 py-2"
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="iMessage"
            aria-label="Text this customer yourself"
            className="min-w-0 flex-1 rounded-full border border-black/15 px-3 py-1.5 text-[15px] outline-none"
          />
          <button disabled={!text.trim()} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a84ff] text-white disabled:opacity-30" aria-label="Send">
            ↑
          </button>
        </form>
      )}
    </div>
  );
}
