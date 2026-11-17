import {emptyClientConfig, type ClientConfig} from './client-setup-model';

export const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
export const timezones = ['America/New_York','America/Chicago','America/Denver','America/Los_Angeles','America/Phoenix','America/Anchorage','Pacific/Honolulu'];
export function scheduleLabel(c:ClientConfig) {
  return c.days.map(day=>daysOfWeek[day]).join(', ')+' · '+c.opens+'–'+c.closes+' · '+c.timezone;
}
export function intakeError(c:ClientConfig, step:number, complete:boolean) {
  if (step===0) {
    if (c.businessName.trim().length<2) return 'Enter a business name with at least two characters.';
    if (complete && (!c.industry.trim() || !c.facts.trim())) return 'Enter the business type and approved facts.';
  }
  if (step===1) {
    if (complete && !c.appointmentLabel.trim()) return 'Enter the type of appointment the receptionist should book.';
    if (!c.days.length) return 'Choose at least one booking day.';
    const minutes=(t:string)=>Number(t.slice(0,2))*60+Number(t.slice(3));
    if (!c.opens || !c.closes || minutes(c.closes)-minutes(c.opens)<c.durationMinutes) return 'Choose hours that fit at least one full appointment on the same day.';
  }
  if (step===2) {
    if (complete && [c.staffName,c.staffEmail,c.transferPhone,c.fallbackPhone,c.instructions].some(v=>!v.trim())) return 'Enter the staff contact, both phone numbers and the callback instructions.';
    if (c.staffEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.staffEmail)) return 'Enter a valid staff email.';
    if ([c.transferPhone,c.fallbackPhone].some(v=>v && !/^\+[1-9]\d{7,14}$/.test(v))) return 'Enter each phone with its country code, such as +17045550100.';
  }
  return '';
}
export function exportIntake(config:ClientConfig) {
  return JSON.stringify({format:'truly-front-desk-intake',version:1,config},null,2);
}
export function readIntake(raw:string):ClientConfig {
  const error='Choose a version 1 Truly Front Desk intake file.';
  let parsed;
  try { parsed=JSON.parse(raw); } catch { throw Error(error); }
  if (parsed?.format!=='truly-front-desk-intake'||parsed.version!==1||!parsed.config) throw Error(error);
  const c={...emptyClientConfig};
  for (const key of Object.keys(c) as (keyof ClientConfig)[]) {
    const value=parsed.config[key];
    if (key==='days') {
      if (!Array.isArray(value)||value.length>7||!value.every(n=>Number.isInteger(n)&&n>=0&&n<=6)||new Set(value).size!==value.length) throw Error(error);
      c.days=[...value].sort();
    } else if (key==='durationMinutes') {
      if (![15,30,45,60].includes(value)) throw Error(error);
      c.durationMinutes=value;
    } else {
      const limit=({facts:2500,instructions:1500,staffEmail:254,staffName:100,timezone:80} as Partial<Record<keyof ClientConfig,number>>)[key]??120;
      if (typeof value!=='string'||value.trim().length>limit) throw Error(error);
      c[key]=value.trim();
    }
  }
  if (![c.opens,c.closes].every(v=>/^([01]\d|2[0-3]):[0-5]\d$/.test(v))) throw Error(error);
  try { new Intl.DateTimeFormat('en',{timeZone:c.timezone}); } catch { throw Error(error); }
  for (const step of [0,1,2]) { const message=intakeError(c,step,true); if(message) throw Error(message); }
  return c;
}
export function receptionistDraft(c:ClientConfig) {
  return [
    'You are the front desk receptionist for '+c.businessName+'. Use the following approved business information.',
    c.facts,
    'Booking: '+c.appointmentLabel+', '+c.durationMinutes+' minutes. '+scheduleLabel(c)+'. Check live availability and confirm the booking only after the calendar tool succeeds.',
    'For a human handoff, use the configured live transfer. If it is unanswered, collect the caller’s callback details and save a callback task. Responsible staff: '+c.staffName+'.',
    'Business instructions: '+c.instructions,
    'If an answer is outside the approved facts, offer a human callback.'
  ].join('\n\n');
}
