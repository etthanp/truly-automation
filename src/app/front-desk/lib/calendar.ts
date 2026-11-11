import { overlaps, type Item } from './frontdesk';
export type BusinessCalendar={timezone:string;durationMinutes:number;opens:number;closes:number;horizonDays:number;noticeMinutes:number;days:number[];appointmentLabel:string;staffName:string};
export const CALENDAR:BusinessCalendar={timezone:'America/New_York',durationMinutes:30,opens:6,closes:21,horizonDays:30,noticeMinutes:30,days:[0,1,2,3,4,5,6],appointmentLabel:'30-minute discovery call',staffName:'Ethan or Max'};
export function localDay(iso:string,timezone:string){return new Intl.DateTimeFormat('en-CA',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(iso));}
export function zonedISO(value:string,timezone=CALENDAR.timezone){
 if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value))throw Error('Choose a valid local date and time.');
 const target=Date.parse(`${value}:00Z`);if(!Number.isFinite(target))throw Error('Choose a valid date.');
 const format=(n:number)=>new Intl.DateTimeFormat('sv-SE',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).format(new Date(n)).replace(' ','T');
 let guess=target;for(let i=0;i<4;i++)guess=target-(Date.parse(`${format(guess)}Z`)-guess);
 if(format(guess).slice(0,16)!==value)throw Error('This local time does not exist. Choose another time.');
 if([guess-3600000,guess+3600000].some(n=>format(n).slice(0,16)===value))throw Error('This local time occurs twice during the clock change. Choose another time.');
 return new Date(guess).toISOString();
}
export const easternISO=(value:string)=>zonedISO(value,CALENDAR.timezone);
export function bookingError(start:string,now:string,c:BusinessCalendar=CALENDAR){
 const n=Date.parse(start),current=Date.parse(now);if(!Number.isFinite(n)||!Number.isFinite(current))return 'Choose a valid start time.';
 if(n<current+c.noticeMinutes*60000)return `Choose a time at least ${c.noticeMinutes} minutes from now.`;
 if(n>current+c.horizonDays*86400000)return `Choose a time within the next ${c.horizonDays} days.`;
 const date=localDay(start,c.timezone),weekday=new Date(`${date}T12:00:00Z`).getUTCDay();
 const p=new Intl.DateTimeFormat('en-GB',{timeZone:c.timezone,hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).format(new Date(n)).split(':').map(Number);
 const minutes=p[0]*60+p[1],opens=Math.round(c.opens*60),closes=Math.round(c.closes*60);
 if(!c.days.includes(weekday)||minutes<opens||minutes+c.durationMinutes>closes||(minutes-opens)%c.durationMinutes!==0||p[2]!==0||n%1000!==0)return `Choose an available ${c.durationMinutes}-minute slot during the business’s booking hours (${c.timezone}).`;
 const end=new Date(n+c.durationMinutes*60000),endParts=new Intl.DateTimeFormat('en-GB',{timeZone:c.timezone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(end).split(':').map(Number);
 if(localDay(end.toISOString(),c.timezone)!==date||endParts[0]*60+endParts[1]!==minutes+c.durationMinutes)return 'Choose a slot that does not cross a clock change.';
 try{if(zonedISO(`${date}T${String(p[0]).padStart(2,'0')}:${String(p[1]).padStart(2,'0')}`,c.timezone)!==new Date(n).toISOString())return 'Choose an unambiguous local time.';}catch{return 'Choose a slot outside the clock change.';}
 return null;
}
export function availableSlots(date:string,appointments:Item[],now:string,c:BusinessCalendar=CALENDAR){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(`${date}T12:00:00Z`))||new Date(`${date}T12:00:00Z`).toISOString().slice(0,10)!==date)throw Error('Use a valid date in YYYY-MM-DD format.');
 const slots:{start:string;end:string;label:string}[]=[];
 for(let minutes=Math.round(c.opens*60);minutes+c.durationMinutes<=Math.round(c.closes*60);minutes+=c.durationMinutes){
  let start:string;try{start=zonedISO(`${date}T${String(Math.floor(minutes/60)).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`,c.timezone);}catch{continue;}
  const end=new Date(Date.parse(start)+c.durationMinutes*60000).toISOString();
  if(!bookingError(start,now,c)&&!overlaps(start,end,appointments))slots.push({start,end,label:new Intl.DateTimeFormat('en-US',{timeZone:c.timezone,dateStyle:'full',timeStyle:'short'}).format(new Date(start))+` (${c.timezone})`});
 }
 return slots;
}
export function defaultBookingDate(now:string){return localDay(new Date(Date.parse(now)+86400000).toISOString(),CALENDAR.timezone);}
