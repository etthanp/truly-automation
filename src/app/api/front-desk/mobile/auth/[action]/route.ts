import {randomInt} from 'node:crypto';
import {authConfigured} from '@/lib/front-desk/auth';
import {deskRole} from '@/lib/front-desk/access';
import {consumeChallenge,mailLimit} from '@/lib/front-desk/mobile/challenge';
import {store,prefix,opaque,proof,digest,codeHash,lifetime,mobileSession,mobileJSON as json,smallJSON,upstream} from '@/lib/front-desk/mobile/store';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function POST(req:Request,context:{params:Promise<{action:string}>}){
 const {action}=await context.params;
 if(!['request','verify','logout','delete'].includes(action))return json({error:'Not found.'},404);
 if(!authConfigured())return json({error:'Sign-in is temporarily unavailable.'},503);
 let body:Record<string,unknown>;try{body=await smallJSON(req,2000);}catch{return json({error:'Check your sign-in details.'},400);}
 try{
  const db=store();
  if(action==='delete'){
   const session=await mobileSession(req);if(!session)return json({error:'Sign in again.'},401);
   const identity=digest(session.email),members=await db.smembers<string[]>(prefix+'sessions:'+identity);
   await db.set(prefix+'deleted:'+identity,'1');
   for(const hash of members){const deviceId=await db.get<string>(prefix+'session-device:'+hash);if(deviceId){const device=await db.get<{email:string;endpointId:string}>(prefix+'device:'+deviceId);if(device?.email===session.email){await db.del(prefix+'device:'+deviceId);try{await upstream('push','POST',{action:'unsubscribe',id:device.endpointId});}catch{}}}await db.del(prefix+'session:'+hash,prefix+'session-device:'+hash);}
   await db.del(prefix+'sessions:'+identity);return json({ok:true});
  }
  if(action==='logout'){
   const session=await mobileSession(req);if(!session)return json({ok:true});
   const deviceId=await db.get<string>(prefix+'session-device:'+session.hash);
   if(deviceId){const device=await db.get<{sessionHash:string;endpointId:string}>(prefix+'device:'+deviceId);if(device?.sessionHash===session.hash){await db.del(prefix+'device:'+deviceId);try{await upstream('push','POST',{action:'unsubscribe',id:device.endpointId});}catch{/* Receiver denies deleted devices even when upstream is temporarily unavailable. */}}}
   await db.del(prefix+'session:'+session.hash,prefix+'session-device:'+session.hash);return json({ok:true});
  }
  if(action==='request'){
   const email=typeof body.email==='string'?body.email.trim().toLowerCase():'';
   const challenge=typeof body.challenge==='string'?body.challenge:'';
   if(email.length>200||!/^\S+@\S+\.\S+$/.test(email)||!/^[A-Za-z0-9_-]{43}$/.test(challenge))return json({error:'Enter a valid email address.'},400);
   const id=opaque();
   // Match website limits; return the same neutral result for unauthorized addresses.
   if(deskRole(email)&&!await db.exists(prefix+'deleted:'+digest(email))){
    const key='truly:front-desk:auth:mail:'+email;
    if(!await db.eval(mailLimit,[key,key+':cooldown'],[]))return json({error:'Wait a minute before requesting another code. Too many requests may require a longer wait.'},429);
    const code=String(randomInt(0,1000000)).padStart(6,'0');
    await db.set(prefix+'challenge:'+id,{email,proof:challenge,codeHash:codeHash(id,code),attempts:0},{ex:600});
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:'Truly Automation <ethan@trulyautomation.com>',to:email,subject:'Your Truly iPhone sign-in code',text:`Your Truly iPhone sign-in code is ${code}.\n\nEnter it in the app on the phone that requested it. It expires in 10 minutes and works once. If you did not request it, ignore this email.`}),signal:AbortSignal.timeout(10000)});
    if(!response.ok){await db.del(prefix+'challenge:'+id);return json({error:'We could not send the code. Please try again shortly.'},503);}
   }
   return json({challengeId:id,expiresIn:600,message:'If this email is authorized, a code is on its way.'});
  }
  const id=String(body.challengeId||''),code=String(body.code||''),verifier=String(body.verifier||'');
  if(!/^[A-Za-z0-9_-]{43}$/.test(id)||!/^\d{6}$/.test(code)||!/^[A-Za-z0-9_-]{43}$/.test(verifier))return json({error:'Enter the six-digit code from your newest email.'},400);
  const verified=await db.eval(consumeChallenge,[prefix+'challenge:'+id],[proof(verifier),codeHash(id,code)]);
  const email=typeof verified==='string'?verified:'';
  const role=email&&deskRole(email);
  if(!email||!role||await db.exists(prefix+'deleted:'+digest(email)))return json({error:'This code is incorrect, expired, or already used. Request a new code if needed.'},401);
  const token=opaque(),now=new Date(),expiresAt=new Date(now.getTime()+lifetime*1000).toISOString();
  await db.set(prefix+'session:'+digest(token),{email,createdAt:now.toISOString(),expiresAt},{ex:lifetime});
  await db.sadd(prefix+'sessions:'+digest(email),digest(token));await db.expire(prefix+'sessions:'+digest(email),30*86400);
  const first=email.split('@')[0].split(/[._-]/)[0];
  return json({token,expiresAt,user:{email,name:first.charAt(0).toUpperCase()+first.slice(1),role},workspace:{id:'truly',name:'Truly Automation'}});
 }catch{return json({error:'The sign-in service did not respond. Please try again.'},503);}
}
