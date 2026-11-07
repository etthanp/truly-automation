export function allowedEmail(email: string | null | undefined, owner = process.env.FRONT_DESK_OWNER_EMAIL) {
  return !!owner && !!email && email.trim().toLowerCase() === owner.trim().toLowerCase();
}
export function deskOrigin(req:Request){return new URL(process.env.AUTH_URL || req.url).origin;}
export function sameOrigin(req: Request) {
  const origin=req.headers.get('origin');
  return !!origin && origin===deskOrigin(req) && req.headers.get('sec-fetch-site')!=='cross-site';
}
export const resources = ['desk','operations','push','backup'] as const;
export function validResource(value:string):value is typeof resources[number] {return resources.some(r=>r===value);}
