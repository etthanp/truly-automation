"use client";

import { useEffect, useRef } from "react";

// Accent color for the animated scenes (Truly ember orange). Swap to "201,169,97" for gold.
const ACCENT = "249,115,22";
const ACCENT_LIGHT = "253,186,140";

type Variant = "grid" | "rings" | "lines" | "wave";
type Draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void;

const BLIPS: [number, number][] = [
  [0.9, 0.22],
  [2.2, 0.38],
  [3.6, 0.3],
  [4.4, 0.47],
  [5.5, 0.18],
  [1.5, 0.52],
  [2.9, 0.14],
];

const scenes: Record<Variant, Draw> = {
  // Websites: a perspective field of dots rolling toward the viewer.
  grid: (ctx, w, h, t) => {
    ctx.fillStyle = "#0c0c0c";
    ctx.fillRect(0, 0, w, h);
    const u = w / 400;
    for (let row = 0; row < 24; row++) {
      const depth = row / 23;
      for (let col = -22; col <= 22; col++) {
        const wave = Math.sin(0.4 * col + 0.5 * row + 1.2 * t);
        const x = w / 2 + col * (0.02 * w + 0.07 * w * depth);
        const y = h * (0.3 + 0.68 * depth * depth) - wave * h * 0.035 * depth;
        if (x < -10 || x > w + 10) continue;
        ctx.fillStyle =
          wave > 0.6
            ? `rgba(${ACCENT},${0.25 + 0.75 * depth})`
            : `rgba(255,255,255,${0.1 + 0.5 * depth})`;
        ctx.beginPath();
        ctx.arc(x, y, (0.6 + 2.4 * depth) * u, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  },

  // Google & AI search: a radar sweep lighting up blips.
  rings: (ctx, w, h, t) => {
    ctx.fillStyle = "#120d09";
    ctx.fillRect(0, 0, w, h);
    const u = w / 400;
    const cx = w / 2;
    const cy = h * 0.52;
    const R = 0.75 * Math.max(w, h);
    ctx.lineWidth = u;
    for (let i = 1; i <= 5; i++) {
      ctx.strokeStyle = "rgba(255,255,255,0.07)";
      ctx.beginPath();
      ctx.arc(cx, cy, (R * i) / 5, 0, Math.PI * 2);
      ctx.stroke();
    }
    for (let i = 0; i < 4; i++) {
      const p = (0.12 * t + i / 4) % 1;
      ctx.strokeStyle = `rgba(${ACCENT},${(1 - p) * 0.7})`;
      ctx.lineWidth = 1.5 * u;
      ctx.beginPath();
      ctx.arc(cx, cy, p * R, 0, Math.PI * 2);
      ctx.stroke();
    }
    const sweep = (0.7 * t) % (Math.PI * 2);
    ctx.fillStyle = `rgba(${ACCENT},0.14)`;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R, sweep - 0.5, sweep);
    ctx.closePath();
    ctx.fill();
    for (const [angle, dist] of BLIPS) {
      const glow = Math.max(0, 1 - ((sweep - angle + Math.PI * 2) % (Math.PI * 2)) / 2.5);
      ctx.fillStyle = `rgba(${ACCENT_LIGHT},${0.25 + 0.75 * glow})`;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(angle) * dist * w, cy + Math.sin(angle) * dist * w, (2 + 3 * glow) * u, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx, cy, 3 * u, 0, Math.PI * 2);
    ctx.fill();
  },

  // Advertising: flowing lines carrying glowing points.
  lines: (ctx, w, h, t) => {
    ctx.fillStyle = "#101010";
    ctx.fillRect(0, 0, w, h);
    const u = w / 400;
    for (let i = 0; i < 7; i++) {
      const base = h * (0.18 + (0.64 * i) / 6);
      const yAt = (x: number) => base + Math.sin((x / w) * (3 + 0.6 * i) + t * (0.5 + 0.08 * i) + i) * h * 0.06;
      ctx.strokeStyle = `rgba(255,255,255,${0.1 + (i % 3) * 0.05})`;
      ctx.lineWidth = u;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 6 * u) {
        if (x === 0) ctx.moveTo(x, yAt(x));
        else ctx.lineTo(x, yAt(x));
      }
      ctx.stroke();
      const px = ((t * (0.1 + 0.02 * i) + 0.17 * i) % 1) * w;
      const py = yAt(px);
      const g = ctx.createRadialGradient(px, py, 0, px, py, 14 * u);
      g.addColorStop(0, `rgba(${ACCENT},0.9)`);
      g.addColorStop(1, `rgba(${ACCENT},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(px - 14 * u, py - 14 * u, 28 * u, 28 * u);
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(px, py, 2 * u, 0, Math.PI * 2);
      ctx.fill();
    }
  },

  // AI receptionist: a voice waveform.
  wave: (ctx, w, h, t) => {
    ctx.fillStyle = "#0d0d0d";
    ctx.fillRect(0, 0, w, h);
    const step = w / 44;
    const barW = 0.45 * step;
    for (let i = 0; i < 40; i++) {
      const envelope = Math.sin((Math.PI * (i + 0.5)) / 40);
      const level = Math.abs(Math.sin(0.35 * i + 2 * t) * Math.sin(0.13 * i - 1.3 * t));
      const barH = h * (0.03 + 0.42 * level * envelope);
      const x = step * (i + 2.5);
      ctx.fillStyle = level > 0.55 ? `rgba(${ACCENT},0.95)` : `rgba(235,230,215,${0.25 + 0.45 * envelope})`;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x - barW / 2, h / 2 - barH / 2, barW, barH, barW / 2);
      else ctx.rect(x - barW / 2, h / 2 - barH / 2, barW, barH);
      ctx.fill();
    }
  },
};

function SceneCanvas({ variant }: { variant: Variant }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame = 0;
    let visible = false;
    let w = 1;
    let h = 1;

    const render = (now: number) => {
      scenes[variant](ctx, w, h, now / 1000);
      frame = !reduceMotion && visible ? requestAnimationFrame(render) : 0;
    };

    const resize = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      w = canvas.width = Math.max(1, Math.round(rect.width * dpr));
      h = canvas.height = Math.max(1, Math.round(rect.height * dpr));
      if (!frame) render(performance.now());
    });
    resize.observe(canvas);

    // Only animate while on screen.
    const onScreen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame) frame = requestAnimationFrame(render);
    });
    onScreen.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      onScreen.disconnect();
    };
  }, [variant]);

  return <canvas ref={ref} aria-hidden="true" className="block h-full w-full" />;
}

const cards: { variant: Variant; title: string; text: string }[] = [
  { variant: "grid", title: "Websites", text: "Designed and built" },
  { variant: "rings", title: "Google & SEO", text: "Maps, reviews and AI answers" },
  { variant: "lines", title: "Advertising", text: "Google, Meta and Local Services ads" },
  { variant: "wave", title: "AI receptionist", text: "Missed calls, texts and follow-up" },
];

export default function ServiceScenes() {
  return (
    <div className="mt-14 border border-navy/10 bg-white/40">
      <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4 sm:px-6">
        <p className="flex items-center gap-3 text-sm font-medium text-navy/70">
          <span className="h-2.5 w-2.5 bg-ember" aria-hidden />
          What we do
        </p>
        <a href="#services" className="text-sm font-semibold text-ember transition hover:text-navy">
          All services →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-6 lg:grid-cols-4 lg:gap-5">
        {cards.map((c) => (
          <a key={c.title} href="#services" className="group relative block aspect-[4/5] overflow-hidden bg-black">
            <SceneCanvas variant={c.variant} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 pt-12 sm:p-5 sm:pt-16">
              <p className="text-base font-semibold text-white sm:text-xl">{c.title}</p>
              <p className="mt-1 text-xs text-white/65 sm:text-sm">{c.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
