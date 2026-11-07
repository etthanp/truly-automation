import 'server-only';
import {createPrivateKey,sign} from 'node:crypto';
import {connect,constants} from 'node:http2';
export type APNsConfig={APNS_TEAM_ID?:string;APNS_KEY_ID?:string;APNS_PRIVATE_KEY?:string;APNS_BUNDLE_ID?:string};
export const apnsConfigured=(c:APNsConfig=process.env as APNsConfig)=>!!(c.APNS_TEAM_ID&&c.APNS_KEY_ID&&c.APNS_PRIVATE_KEY&&c.APNS_BUNDLE_ID);
let cached:{identity:string;token:string;expires:number}|undefined;
export function providerToken(c:APNsConfig,now=Date.now()){
 if(!apnsConfigured(c))throw Error('Apple notifications are not configured.');
 const identity=c.APNS_TEAM_ID+':'+c.APNS_KEY_ID+':'+c.APNS_PRIVATE_KEY;
 if(cached?.identity===identity&&cached.expires>now)return cached.token;
 const encode=(v:unknown)=>Buffer.from(JSON.stringify(v)).toString('base64url');
 const body=encode({alg:'ES256',kid:c.APNS_KEY_ID})+'.'+encode({iss:c.APNS_TEAM_ID,iat:Math.floor(now/1000)});
 const signature=sign('sha256',Buffer.from(body),{key:createPrivateKey(c.APNS_PRIVATE_KEY!.replace(/\\n/g,'\n')),dsaEncoding:'ieee-p1363'}).toString('base64url');
 const token=body+'.'+signature;cached={identity,token,expires:now+45*60000};return token;
}
export type PushResult={status:'Accepted'|'Expired'|'Retry pending'|'Failed';detail:string};
export function classifyAPNs(status:number,reason:string):PushResult{
 if(status===200)return {status:'Accepted',detail:'Accepted by Apple. Appearance on the phone is not yet confirmed.'};
 if(status===410||reason==='Unregistered'||reason==='BadDeviceToken')return {status:'Expired',detail:'Enable notifications again on this phone.'};
 if(status===429||status>=500||status===0)return {status:'Retry pending',detail:'Apple did not confirm acceptance. A retry may repeat the alert.'};
 return {status:'Failed',detail:'Apple rejected the alert. Review the app notification configuration.'};
}
export async function sendAPNs(deviceToken:string,environment:'sandbox'|'production',collapseId:string,c:APNsConfig=process.env as APNsConfig):Promise<PushResult>{
 if(!apnsConfigured(c))return {status:'Retry pending',detail:'Apple notifications are waiting for configuration.'};
 if(!/^[a-f0-9]{32,200}$/.test(deviceToken)||!['sandbox','production'].includes(environment))return {status:'Failed',detail:'Invalid device registration.'};
 const host=environment==='sandbox'?'https://api.sandbox.push.apple.com':'https://api.push.apple.com';
 try{const authorization='bearer '+providerToken(c);return await new Promise<PushResult>((resolve)=>{
  const client=connect(host);let complete=false;
  const done=(result:PushResult)=>{if(complete)return;complete=true;clearTimeout(timer);client.destroy();resolve(result);};
  const timer=setTimeout(()=>done(classifyAPNs(0,'')),8000);
  client.on('error',()=>done(classifyAPNs(0,'')));
  const req=client.request({[constants.HTTP2_HEADER_METHOD]:'POST',[constants.HTTP2_HEADER_PATH]:'/3/device/'+deviceToken,authorization,'apns-topic':c.APNS_BUNDLE_ID!,'apns-push-type':'alert','apns-priority':'10','apns-expiration':String(Math.floor(Date.now()/1000)+3600),'apns-collapse-id':collapseId.slice(0,64)});
  let status=0,body='';req.setEncoding('utf8');req.on('response',headers=>{status=Number(headers[':status']);});req.on('data',chunk=>{if(body.length<4096)body+=chunk;});req.on('error',()=>done(classifyAPNs(0,'')));req.on('end',()=>{let reason='';try{reason=JSON.parse(body).reason||'';}catch{}done(classifyAPNs(status,reason));});
  req.end(JSON.stringify({aps:{alert:{title:'Truly Front Desk',body:'A new item needs your attention. Open Truly to review it.'},sound:'default','thread-id':'truly-attention',category:'TRULY_ATTENTION'},view:'attention'}));
 });}catch{return classifyAPNs(0,'');}
}
