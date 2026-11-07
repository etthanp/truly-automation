import {apnsConfigured,apnsEnvironment,sendAPNs} from '@/lib/front-desk/mobile/apns';
import {store,prefix,mobileSession,mobileJSON as json,smallJSON,upstream,digest} from '@/lib/front-desk/mobile/store';
import {deviceID,bridgeURL,type NativeDevice} from '@/lib/front-desk/mobile/devices';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function GET(req:Request){try{
 const session=await mobileSession(req);if(!session)return json({error:'Sign in again.'},401);
 const db=store(),id=await db.get<string>(prefix+'session-device:'+session.hash),device=id?await db.get<NativeDevice>(prefix+'device:'+id):null;
 const own=device?.sessionHash===session.hash?device:null;
 return json({configured:apnsConfigured(),registered:!!own,confirmedAt:own?.confirmedAt||null,lastTestAt:own?.lastTestAt||null,lastStatus:own?.lastStatus||null});
}catch{return json({error:'Notification settings could not be loaded.'},503);}}
export async function POST(req:Request){
 let body:Record<string,unknown>;try{body=await smallJSON(req,2000);}catch{return json({error:'Invalid notification request.'},400);}
 try{
 const session=await mobileSession(req);if(!session)return json({error:'Sign in again.'},401);
 const db=store(),sessionKey=prefix+'session-device:'+session.hash,now=new Date().toISOString();
 const previousId=await db.get<string>(sessionKey);const previous=previousId?await db.get<NativeDevice>(prefix+'device:'+previousId):null;
 const owned=previous?.sessionHash===session.hash?previous:null;
 if(body.action==='disable'){
  if(owned&&previousId){await db.del(prefix+'device:'+previousId);await db.del(sessionKey);try{await upstream('push','POST',{action:'unsubscribe',id:owned.endpointId});}catch{}}
  return json({ok:true});
 }
 if(body.action==='confirm'){
  if(!owned?.lastTestAt||owned.lastStatus!=='Accepted')return json({error:'Send a test alert and confirm it appeared first.'},409);
  await db.set(prefix+'device:'+previousId,{...owned,confirmedAt:now},{ex:30*86400});return json({ok:true});
 }
 if(!apnsConfigured())return json({error:'Apple notifications will be available after the developer account and push key are connected.'},503);
 if(body.action==='register'){
  const token=typeof body.deviceToken==='string'?body.deviceToken.toLowerCase():'',environment=body.environment;
  if(!/^[a-f0-9]{32,200}$/.test(token)||!['sandbox','production'].includes(String(environment)))return json({error:'This phone could not be registered.'},400);
  if(environment!==apnsEnvironment())return json({error:'Phone alerts are configured for the TestFlight and App Store app. This development build needs a separate sandbox key.'},409);
  const id=deviceID(token,String(environment)),existing=await db.get<NativeDevice>(prefix+'device:'+id);
  if(existing&&existing.email!==session.email&&Date.parse(existing.sessionExpiresAt)>Date.now())return json({error:'Sign out of the other Truly account on this phone first.'},409);
  const endpoint=bridgeURL(id),endpointId=Buffer.from(digest(endpoint),'hex').toString('base64url');
  const device:NativeDevice={email:session.email,sessionHash:session.hash,sessionExpiresAt:session.expiresAt,token,environment:environment as 'sandbox'|'production',endpointId,label:'Truly iPhone',createdAt:existing?.createdAt||now,...(existing?.email===session.email?{confirmedAt:existing.confirmedAt,lastTestAt:existing.lastTestAt,lastStatus:existing.lastStatus}:{})};
  // Write receiver first; subscriptions are not active until the backend accepts them.
  await db.set(prefix+'device:'+id,device,{ex:30*86400});
  const response=await upstream('push','POST',{action:'subscribe',endpoint,label:'Truly iPhone'});
  if(!response.ok){if(existing)await db.set(prefix+'device:'+id,existing,{ex:30*86400});else await db.del(prefix+'device:'+id);return json({error:'The alert connection could not be saved. Try again.'},502);}
  await db.set(sessionKey,id,{ex:30*86400});
  if(owned&&previousId&&previousId!==id){await db.del(prefix+'device:'+previousId);try{await upstream('push','POST',{action:'unsubscribe',id:owned.endpointId});}catch{}}
  return json({ok:true});
 }
 if(body.action==='test'){
  if(!owned||!previousId)return json({error:'Enable notifications on this phone first.'},409);
  if(!await db.set(prefix+'test:'+previousId,'1',{ex:60,nx:true}))return json({error:'Wait a minute before sending another test.'},429);
  const result=await sendAPNs(owned.token,owned.environment,'truly-test');
  await db.set(prefix+'device:'+previousId,{...owned,lastTestAt:now,confirmedAt:undefined,lastStatus:result.status},{ex:30*86400});
  return json({ok:result.status==='Accepted',message:result.detail},result.status==='Accepted'?200:502);
 }
 return json({error:'Invalid notification action.'},400);
 }catch{return json({error:'Notification settings could not be saved. Try again.'},503);}
}
