export function deskRole(email: string | null | undefined, owner = process.env.FRONT_DESK_OWNER_EMAIL, team = process.env.FRONT_DESK_TEAM_EMAILS): 'owner' | 'member' | null {
  if (!owner?.trim() || !email?.trim()) return null;
  const candidate=email.trim().toLowerCase();
  if(candidate===owner.trim().toLowerCase())return 'owner';
  return (team||'').split(',').some(value=>value.trim().toLowerCase()===candidate)?'member':null;
}
export function allowedEmail(email: string | null | undefined, owner = process.env.FRONT_DESK_OWNER_EMAIL, team = process.env.FRONT_DESK_TEAM_EMAILS) {return deskRole(email,owner,team)!==null;}
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
