import {memberRequestAllowed} from '@/lib/front-desk/access';
import {mobileSession,mobileJSON as json,smallJSON,upstream} from '@/lib/front-desk/mobile/store';
export const runtime='nodejs';export const dynamic='force-dynamic';
async function handler(req:Request){try{
 const session=await mobileSession(req);if(!session)return json({error:'Sign in again to open your front desk.'},401);
 let body:Record<string,unknown>|undefined;
 if(req.method==='POST'){try{body=await smallJSON(req);}catch{return json({error:'Invalid request.'},400);}if(!memberRequestAllowed('desk','POST','truly',body))return json({error:'This action is not available in the iPhone app.'},403);}
 const result=await upstream('desk',req.method,body);
 if(!result.headers.get('content-type')?.includes('application/json'))return json({error:'The front desk connection is unavailable.'},502);
 return new Response(result.body,{status:result.status,headers:{'Content-Type':'application/json','Cache-Control':'private, no-store'}});
}catch{return json({error:'Your front desk could not be reached. Refresh before retrying a change.'},503);}}
export const GET=handler;export const POST=handler;
