export function allowedEmail(email: string | null | undefined, owner = process.env.FRONT_DESK_OWNER_EMAIL) {
  return !!owner && !!email && email.trim().toLowerCase() === owner.trim().toLowerCase();
}
export function sameOrigin(req: Request) {
  const origin=req.headers.get('origin');
  return !!origin && origin===new URL(req.url).origin && req.headers.get('sec-fetch-site')!=='cross-site';
}
export const resources = ['desk','operations','push','backup'] as const;
export function validResource(value:string):value is typeof resources[number] {return resources.some(r=>r===value);}
