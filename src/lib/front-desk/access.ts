export type DeskAccess={role:'owner'|'member';clientId:string|null;businessName:string};
// Deployment-managed allowlist. Entries are never accepted from a form, query or cookie.
export function deskAccess(email:string|null|undefined,owner=process.env.FRONT_DESK_OWNER_EMAIL,team=process.env.FRONT_DESK_TEAM_EMAILS,raw=process.env.FRONT_DESK_CLIENTS):DeskAccess|null{
 if(!owner?.trim()||!email?.trim())return null;
 const candidate=email.trim().toLowerCase();
 if(candidate===owner.trim().toLowerCase())return {role:'owner',clientId:null,businessName:'Truly Automation'};
 let clients:{id:string;name:string;emails:string[]}[]=[];
 if(raw){try{const parsed=JSON.parse(raw);if(!Array.isArray(parsed)||parsed.length>100)throw Error();const ids=new Set<string>();for(const c of parsed){if(!c||typeof c!=='object'||Object.keys(c).some(k=>!['id','name','emails'].includes(k))||typeof c.id!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(c.id)||ids.has(c.id)||typeof c.name!=='string'||!c.name.trim()||c.name.length>120||!Array.isArray(c.emails)||!c.emails.length||c.emails.length>20||c.emails.some((e:unknown)=>typeof e!=='string'||e.length>254||!/^\S+@\S+\.\S+$/.test(e)))throw Error();ids.add(c.id);clients.push(c);}}catch{return null;}}
 const matches=clients.filter(c=>c.emails.some(e=>e.trim().toLowerCase()===candidate));
 const teammate=(team||'').split(',').some(e=>e.trim().toLowerCase()===candidate);
 if(matches.length>1||(teammate&&matches.length))return null;
 if(matches.length===1)return {role:'member',clientId:matches[0].id,businessName:matches[0].name};
 return teammate?{role:'member',clientId:null,businessName:'Truly Automation'}:null;
}
export function deskRole(email:string|null|undefined,owner=process.env.FRONT_DESK_OWNER_EMAIL,team=process.env.FRONT_DESK_TEAM_EMAILS){return deskAccess(email,owner,team)?.role||null;}
export function allowedEmail(email:string|null|undefined,owner=process.env.FRONT_DESK_OWNER_EMAIL,team=process.env.FRONT_DESK_TEAM_EMAILS){return deskAccess(email,owner,team)!==null;}
const memberActions = new Set(['contact.create','contact.update','task.create','task.resolve','task.acknowledge','task.reopen','appointment.create','appointment.reschedule','appointment.cancel','calendar.block']);
export function memberRequestAllowed(resource:string,method:string,workspace:string|null,body?:unknown) {
  if(resource!=='desk'||(workspace!==null&&workspace!=='truly'))return false;
  if(method==='GET')return workspace==='truly';
  if(method!=='POST'||!body||typeof body!=='object'||Array.isArray(body))return false;
  const data=body as Record<string,unknown>;
  return data.workspace==='truly'&&typeof data.action==='string'&&memberActions.has(data.action);
}
export function deskOrigin(req:Request){return new URL(process.env.AUTH_URL || req.url).origin;}
export function sameOrigin(req: Request) {
  const origin=req.headers.get('origin');
  return !!origin && origin===deskOrigin(req) && req.headers.get('sec-fetch-site')!=='cross-site';
}
export const resources = ['desk','operations','push','backup'] as const;
export function validResource(value:string):value is typeof resources[number] {return resources.some(r=>r===value);}
