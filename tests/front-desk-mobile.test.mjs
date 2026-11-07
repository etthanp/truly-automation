import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {generateKeyPairSync,verify} from 'node:crypto';
import ts from 'typescript';
import {MobileRedis} from './helpers/mobile-redis.mjs';

test('native sign-in, code proof, throttling, session isolation, deletion and gateway authorization',async t=>{
 const scratch=await fs.mkdtemp(new URL('../work/mobile-test-',import.meta.url));
 const previousEnv={...process.env},previousFetch=globalThis.fetch;
 const redis=new MobileRedis(),mail=[];let upstreamCalls=0;
 Object.assign(process.env,{AUTH_SECRET:'mobile-tests-only-not-a-production-secret',FRONT_DESK_OWNER_EMAIL:'owner@example.test',FRONT_DESK_TEAM_EMAILS:'member@example.test',RESEND_API_KEY:'test-only',FRONT_DESK_SITE_TOKEN:'test-only',FRONT_DESK_PORTAL_KEY:'p'.repeat(64)});
 globalThis.trulyMobileRedis=redis;
 globalThis.fetch=async(url,init)=>{if(String(url)==='https://api.resend.com/emails'){mail.push(JSON.parse(init.body));return Response.json({id:'test'});}assert.ok(String(url).startsWith('https://truly-front-desk.copperoak14.chatgpt.site/api/'));assert.equal(init.redirect,'error');upstreamCalls++;return Response.json({ok:true,records:[]});};
 const compile=async(file,name)=>{
  let source=await fs.readFile(file,'utf8');
  source=source.replace("import 'server-only';",'').replace("import {Redis} from '@upstash/redis';",'const Redis=class{constructor(){return globalThis.trulyMobileRedis;}};').replace("import {authConfigured} from '@/lib/front-desk/auth';",'const authConfigured=()=>true;');
  for(const [from,to]of [["@/lib/front-desk/mobile/store","./store.mjs"],["@/lib/front-desk/mobile/challenge","./challenge.mjs"],["@/lib/front-desk/access","./access.mjs"],["../access","./access.mjs"],["@/lib/front-desk/mobile/devices","./devices.mjs"],["@/lib/front-desk/mobile/apns","./apns.mjs"],["./store","./store.mjs"]])source=source.replaceAll("'"+from+"'","'"+to+"'");
  await fs.writeFile(scratch+'/'+name+'.mjs',ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText);
  return import(pathToFileURL(scratch+'/'+name+'.mjs').href);
 };
 try{
  await compile('src/lib/front-desk/access.ts','access');
  const challenge=await compile('src/lib/front-desk/mobile/challenge.ts','challenge');
  const store=await compile('src/lib/front-desk/mobile/store.ts','store');
  const auth=await compile('src/app/api/front-desk/mobile/auth/[action]/route.ts','auth');
  const desk=await compile('src/app/api/front-desk/mobile/desk/route.ts','desk');
  const post=(action,body,token)=>auth.POST(new Request('https://trulyautomation.com/api/front-desk/mobile/auth/'+action,{method:'POST',headers:{'content-type':'application/json',...(token?{authorization:'Bearer '+token}:{})},body:JSON.stringify(body)}),{params:Promise.resolve({action})});
  const newCode=async(email='owner@example.test')=>{redis.clock+=61000;const verifier=store.opaque(),response=await post('request',{email,challenge:store.proof(verifier)});assert.equal(response.status,200);return {...await response.json(),verifier,code:mail.at(-1).text.match(/\b\d{6}\b/)[0]};};
  const verifyCode=c=>post('verify',{challengeId:c.challengeId,verifier:c.verifier,code:c.code});
  await t.test('unauthorized emails receive no mail; cookies do not authorize native requests',async()=>{const response=await post('request',{email:'stranger@example.test',challenge:store.proof(store.opaque())});assert.equal(response.status,200);assert.equal(mail.length,0);assert.equal((await desk.GET(new Request('https://trulyautomation.com/api/front-desk/mobile/desk',{headers:{cookie:'authjs.session-token=fake'}}))).status,401);});
  await t.test('wrong phone proof is rejected and code is consumed once under concurrent verification',async()=>{const c=await newCode();assert.equal((await verifyCode({...c,verifier:store.opaque()})).status,401);const results=await Promise.all([verifyCode(c),verifyCode(c)]);assert.deepEqual(results.map(r=>r.status).sort(),[200,401]);});
  await t.test('five wrong attempts lock the challenge; expiry removes a challenge',async()=>{const c=await newCode();for(let i=0;i<5;i++)assert.equal((await verifyCode({...c,code:c.code==='000000'?'000001':'000000'})).status,401);assert.equal((await verifyCode(c)).status,401);const expired=await newCode();redis.clock+=601000;assert.equal((await verifyCode(expired)).status,401);});
  await t.test('cooldown and hourly mail limit execute atomically',()=>{const keys=['limit-hour','limit-minute'];assert.equal(redis.eval(challenge.mailLimit,keys,[]),1);assert.equal(redis.eval(challenge.mailLimit,keys,[]),0);for(let i=0;i<4;i++){redis.clock+=61000;assert.equal(redis.eval(challenge.mailLimit,keys,[]),1);}redis.clock+=61000;assert.equal(redis.eval(challenge.mailLimit,keys,[]),0);redis.clock+=3600000;assert.equal(redis.eval(challenge.mailLimit,keys,[]),1);});
  let owner,member;
  await fs.writeFile(scratch+'/apns.mjs',"export const apnsConfigured=()=>true;export const apnsEnvironment=()=>'production';export const sendAPNs=async()=>{globalThis.mobilePushCount++;return {status:'Accepted',detail:'Accepted, not confirmed'};};");
  globalThis.mobilePushCount=0;
  const devices=await compile('src/lib/front-desk/mobile/devices.ts','devices');
  const notifications=await compile('src/app/api/front-desk/mobile/notifications/route.ts','notifications');
  const notify=await compile('src/app/api/front-desk/mobile/notify/[deviceId]/route.ts','notify');

  await t.test('owner/member sessions are independent and only token hashes are stored',async()=>{owner=await (await verifyCode(await newCode())).json();member=await (await verifyCode(await newCode('member@example.test'))).json();assert.equal(owner.user.role,'owner');assert.equal(member.user.role,'member');assert.equal(redis.values.has(store.prefix+'session:'+owner.token),false);assert.ok(redis.get(store.prefix+'session:'+store.digest(owner.token)));});
  await t.test('native member can use desk but cannot access operations or another workspace',async()=>{const request=(body,token=member.token)=>new Request('https://trulyautomation.com/api/front-desk/mobile/desk',{method:'POST',headers:{'content-type':'application/json',authorization:'Bearer '+token},body:JSON.stringify(body)});assert.equal((await desk.POST(request({workspace:'truly',action:'task.create',title:'Test'}))).status,200);const before=upstreamCalls;for(const token of [owner.token,member.token])for(const body of [{workspace:'other',action:'task.create'},{workspace:'truly',action:'backup.restore'},{workspace:'truly',action:'settings.update'}])assert.equal((await desk.POST(request(body,token))).status,403);assert.equal(upstreamCalls,before);});
  await t.test('device settings belong to their session; alerts require the bridge secret and deduplicate accepted deliveries',async()=>{
   const nreq=(token,body)=>new Request('https://trulyautomation.com/api/front-desk/mobile/notifications',{method:body?'POST':'GET',headers:{'content-type':'application/json',authorization:'Bearer '+token},...(body?{body:JSON.stringify(body)}:{})});
   const token='a'.repeat(64),id=devices.deviceID(token,'production');
   assert.equal((await notifications.POST(nreq(owner.token,{action:'register',deviceToken:token,environment:'production'}))).status,200);
   assert.equal((await (await notifications.GET(nreq(owner.token))).json()).registered,true);
   assert.equal((await (await notifications.GET(nreq(member.token))).json()).registered,false);
   assert.equal((await notifications.POST(nreq(member.token,{action:'disable'}))).status,200);
   assert.ok(redis.get(store.prefix+'device:'+id),'A different member cannot disable this phone');
   assert.equal((await notifications.POST(nreq(member.token,{action:'register',deviceToken:token,environment:'production'}))).status,409);
   assert.equal((await notifications.POST(nreq(owner.token,{action:'confirm'}))).status,409);
   assert.equal((await notifications.POST(nreq(owner.token,{action:'test'}))).status,200);
   assert.equal((await notifications.POST(nreq(owner.token,{action:'test'}))).status,429);
   assert.equal((await notifications.POST(nreq(owner.token,{action:'confirm'}))).status,200);
   const deliver=key=>notify.POST(new Request('https://trulyautomation.com/api/front-desk/mobile/notify/'+id,{method:'POST',headers:{'x-truly-portal-key':key,'x-truly-alert-id':'event-test-1'}}),{params:Promise.resolve({deviceId:id})});
   const before=globalThis.mobilePushCount;assert.equal((await deliver('wrong')).status,401);assert.equal(globalThis.mobilePushCount,before);
   assert.equal((await deliver(process.env.FRONT_DESK_PORTAL_KEY)).status,200);assert.equal((await deliver(process.env.FRONT_DESK_PORTAL_KEY)).status,200);assert.equal(globalThis.mobilePushCount,before+1);
   assert.equal((await notifications.POST(nreq(owner.token,{action:'disable'}))).status,200);
   assert.equal((await deliver(process.env.FRONT_DESK_PORTAL_KEY)).status,410);
  });
  await t.test('logout revokes one session, deletion revokes every mobile session and blocks new mobile sign-in',async()=>{const second=await (await verifyCode(await newCode('member@example.test'))).json();assert.equal((await post('logout',{},member.token)).status,200);const req=token=>new Request('https://trulyautomation.com/api/front-desk/mobile/desk',{headers:{authorization:'Bearer '+token}});assert.equal(await store.mobileSession(req(member.token)),null);assert.ok(await store.mobileSession(req(second.token)));assert.ok(await store.mobileSession(req(owner.token)));assert.equal((await post('delete',{},second.token)).status,200);assert.equal(await store.mobileSession(req(second.token)),null);const before=mail.length;await post('request',{email:'member@example.test',challenge:store.proof(store.opaque())});assert.equal(mail.length,before);assert.ok(await store.mobileSession(req(owner.token)));});
  await t.test('allowlist removal and expired sessions are rejected on every request',async()=>{const req=new Request('https://trulyautomation.com',{headers:{authorization:'Bearer '+owner.token}});process.env.FRONT_DESK_OWNER_EMAIL='different@example.test';assert.equal(await store.mobileSession(req),null);process.env.FRONT_DESK_OWNER_EMAIL='owner@example.test';const key=store.prefix+'session:'+store.digest(owner.token);redis.set(key,{...redis.get(key),expiresAt:'2020-01-01T00:00:00Z'});assert.equal(await store.mobileSession(req),null);});
  await t.test('Apple provider token has a valid ES256 signature and delivery acceptance is not phone confirmation',async()=>{const apns=await compile('src/lib/front-desk/mobile/apns.ts','apns-real');const {privateKey,publicKey}=generateKeyPairSync('ec',{namedCurve:'P-256'});const config={APNS_TEAM_ID:'TESTTEAM',APNS_KEY_ID:'TESTKEY',APNS_BUNDLE_ID:'com.example.test',APNS_PRIVATE_KEY:privateKey.export({type:'pkcs8',format:'pem'})};const now=Date.now(),token=apns.providerToken(config,now),[header,payload,signature]=token.split('.');assert.equal(JSON.parse(Buffer.from(header,'base64url')).alg,'ES256');assert.equal(JSON.parse(Buffer.from(payload,'base64url')).iss,'TESTTEAM');assert.ok(verify('sha256',Buffer.from(header+'.'+payload),{key:publicKey,dsaEncoding:'ieee-p1363'},Buffer.from(signature,'base64url')));assert.equal(apns.providerToken(config,now+60000),token);assert.notEqual(apns.providerToken(config,now+46*60000),token);assert.equal(apns.apnsEnvironment(config),'production');assert.equal(apns.apnsEnvironment({...config,APNS_ENVIRONMENT:'sandbox'}),'sandbox');assert.equal((await apns.sendAPNs('a'.repeat(64),'sandbox','test',config)).status,'Failed');assert.equal(apns.classifyAPNs(200,'').status,'Accepted');assert.match(apns.classifyAPNs(200,'').detail,/not yet confirmed/);assert.equal(apns.classifyAPNs(410,'Unregistered').status,'Expired');assert.equal(apns.classifyAPNs(429,'').status,'Retry pending');assert.equal(apns.classifyAPNs(503,'').status,'Retry pending');assert.equal(apns.classifyAPNs(403,'InvalidProviderToken').status,'Failed');assert.equal((await apns.sendAPNs('bad','sandbox','test',config)).status,'Failed');});
 }finally{globalThis.fetch=previousFetch;delete globalThis.trulyMobileRedis;delete globalThis.mobilePushCount;for(const key of Object.keys(process.env))if(!(key in previousEnv))delete process.env[key];Object.assign(process.env,previousEnv);await fs.rm(scratch,{recursive:true,force:true});}
});
