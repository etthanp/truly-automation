import {deskAccess} from '@/lib/front-desk/access';
import {sendAPNs} from '@/lib/front-desk/mobile/apns';
import {store,prefix,secureEqual,mobileJSON as json,digest} from '@/lib/front-desk/mobile/store';
import type {NativeDevice} from '@/lib/front-desk/mobile/devices';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function POST(req:Request,context:{params:Promise<{deviceId:string}>}){
 const key=process.env.FRONT_DESK_PORTAL_KEY,provided=req.headers.get('x-truly-portal-key')||'';
 if(!key||key.length<64||provided.length>512||!secureEqual(key,provided))return json({error:'Unauthorized.'},401);
 const {deviceId}=await context.params;
 if(!/^[a-f0-9]{64}$/.test(deviceId))return json({error:'Not found.'},404);
 try{
 const db=store(),device=await db.get<NativeDevice>(prefix+'device:'+deviceId);
 const access=device?deskAccess(device.email):null;
 if(!device||!access||(device.clientId||null)!==access.clientId||await db.exists(prefix+'deleted:'+digest(device.email))||Date.parse(device.sessionExpiresAt)<=Date.now()||!await db.exists(prefix+'session:'+device.sessionHash))return json({status:'Expired',detail:'Sign in and enable alerts on this phone again.'},410);
 const alert=req.headers.get('x-truly-alert-id')||'test';
 if(alert.length>250)return json({error:'Invalid alert.'},400);
 const dedup=prefix+'accepted:'+deviceId+':'+digest(alert);
 if(alert!=='test'&&await db.exists(dedup))return json({status:'Accepted',detail:'Apple already accepted this alert.'});
 const result=await sendAPNs(device.token,device.environment,digest(alert));
 if(result.status==='Accepted'&&alert!=='test')await db.set(dedup,'1',{ex:86400});
 return json(result,result.status==='Accepted'?200:result.status==='Expired'?410:result.status==='Retry pending'?503:502);
 }catch{return json({status:'Retry pending',detail:'The Apple alert bridge is temporarily unavailable.'},503);}
}
