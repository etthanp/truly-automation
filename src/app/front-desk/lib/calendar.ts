import { dayKey, overlaps, type Item } from './frontdesk';

export const CALENDAR = { timezone: 'America/New_York', durationMinutes: 30, opens: 6, closes: 21, horizonDays: 30, noticeMinutes: 30 } as const;
export function easternISO(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) throw new Error('Choose a valid Eastern date and time.');
  const target = Date.parse(`${value}:00Z`);
  if (!Number.isFinite(target)) throw new Error('Choose a valid date.');
  let guess = target;
  const format = (n: number) => new Intl.DateTimeFormat('sv-SE', { timeZone: CALENDAR.timezone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }).format(new Date(n)).replace(' ', 'T');
  for (let i = 0; i < 3; i++) guess = target - (Date.parse(`${format(guess)}Z`) - guess);
  if (format(guess).slice(0, 16) !== value) throw new Error('This Eastern time does not exist. Choose another time.');
  return new Date(guess).toISOString();
}
export function bookingError(start: string, now: string) {
  const n = Date.parse(start), current = Date.parse(now);
  if (!Number.isFinite(n)) return 'Choose a valid start time.';
  if (n < current + CALENDAR.noticeMinutes * 60000) return 'Choose a time at least 30 minutes from now.';
  if (n > current + CALENDAR.horizonDays * 86400000) return 'Choose a time within the next 30 days.';
  const p = new Intl.DateTimeFormat('en-GB', { timeZone: CALENDAR.timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }).format(new Date(n)).split(':').map(Number);
  if (p[0] < CALENDAR.opens || p[0] >= CALENDAR.closes || ![0,30].includes(p[1]) || p[2] !== 0 || n % 1000 !== 0) return 'Discovery calls start on the hour or half-hour, from 6 a.m. through 8:30 p.m. Eastern.';
  return null;
}
export function availableSlots(date: string, appointments: Item[], now: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Use a date in YYYY-MM-DD format, in Eastern Time.');
  const slots: { start: string; end: string; label: string }[] = [];
  for (let minutes = 360; minutes < 1260; minutes += 30) {
    const start = easternISO(`${date}T${String(Math.floor(minutes / 60)).padStart(2,'0')}:${String(minutes % 60).padStart(2,'0')}`);
    const end = new Date(Date.parse(start) + 1800000).toISOString();
    if (!bookingError(start, now) && !overlaps(start, end, appointments)) slots.push({ start, end, label: new Intl.DateTimeFormat('en-US', { timeZone: CALENDAR.timezone, dateStyle: 'full', timeStyle: 'short' }).format(new Date(start)) + ' Eastern' });
  }
  return slots;
}
export function defaultBookingDate(now: string) { return dayKey(new Date(Date.parse(now) + 86400000).toISOString()); }
