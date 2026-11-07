import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
import {Auth,skipCSRFCheck} from '@auth/core';
import {pathToFileURL} from 'node:url';

// Exercise the real configured Auth.js/adapter/email flow with isolated storage
// and a captured email transport. No live credentials, emails or records are used.
test('email confirmation establishes a session once and logout revokes it',async()=>{
 const values=new Map();let sends=0,mailLink='',mailSubject='';
 class FakeRedis {
  async get(key){const v=values.get(key);if(typeof v==='string'){try{return JSON.parse(v)}catch{}}return v??null;}
  async set(key,value){values.set(key,typeof value==='object'?JSON.stringify(value):value);return 'OK';}
  async getdel(key){const v=await this.get(key);values.delete(key);return v;}
  async del(...keys){keys.forEach(k=>values.delete(k));return keys.length;}
  async eval(){return 1;}
 }
 const redis=new FakeRedis();
 const oldEnv={...process.env};const oldFetch=globalThis.fetch;
 process.env.AUTH_SECRET='isolated-auth-test-secret-not-used-in-production';
 process.env.FRONT_DESK_OWNER_EMAIL='owner@example.test';process.env.RESEND_API_KEY='test-only';
 process.env.KV_REST_API_URL='https://redis.invalid';process.env.KV_REST_API_TOKEN='test-only';
 const scratch=await fs.mkdtemp(new URL('../work/auth-test-',import.meta.url));
 const transpile=source=>ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText;
 try {
  await fs.writeFile(`${scratch}/email.mjs`,transpile(await fs.readFile('src/lib/front-desk/sign-in-email.ts','utf8')));
  await fs.writeFile(`${scratch}/access.mjs`,transpile(await fs.readFile('src/lib/front-desk/access.ts','utf8')));
  let source=await fs.readFile('src/lib/front-desk/auth.ts','utf8');
  source=source.replace("import 'server-only';",'').replace("import NextAuth from 'next-auth';",'let factory; const NextAuth=f=>{factory=f;return {}};').replace("import {Redis} from '@upstash/redis';",'const Redis=class{constructor(){return globalThis.trulyTestRedis;}};').replace("'./access'","'./access.mjs'").replace("'./sign-in-email'","'./email.mjs'");
  await fs.writeFile(`${scratch}/auth.mjs`,transpile(source+'\nexport const makeConfig=()=>factory();'));
  globalThis.trulyTestRedis=redis;
  globalThis.fetch=async(input,init)=>{assert.equal(String(input),'https://api.resend.com/emails');const message=JSON.parse(init.body);assert.equal(message.to,'owner@example.test');sends++;mailLink=message.text.match(/https:\/\/[^\s]+/)[0];mailSubject=message.subject;return Response.json({id:'isolated-test'});};
  const {makeConfig}=await import(pathToFileURL(`${scratch}/auth.mjs`).href);
  const config=makeConfig();config.secret=process.env.AUTH_SECRET;config.skipCSRFCheck=skipCSRFCheck;config.logger={error(){},warn(){},debug(){}};
  const origin='https://trulyautomation.com';
  const request=()=>Auth(new Request(origin+'/api/front-desk/auth/signin/resend',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({email:'owner@example.test',callbackUrl:origin+'/front-desk'})}),config);
  assert.equal((await request()).status,302);assert.equal(sends,1);
  assert.match(mailSubject,/Your Truly sign-in .* Eastern/);
  const confirmation=new URL(mailLink);assert.equal(confirmation.pathname,'/front-desk/verify');
  assert.ok(confirmation.searchParams.get('token'));assert.ok(values.size>0,'Issuing the email stores a verification token');
  const callback=new URL('/api/front-desk/auth/callback/resend',origin);callback.search=confirmation.search;callback.searchParams.set('callbackUrl',origin+'/front-desk');
  const login=await Auth(new Request(callback),config);assert.equal(login.headers.get('location'),origin+'/front-desk');
  const cookies=login.headers.getSetCookie().map(c=>c.split(';')[0]).join('; ');
  assert.ok(cookies.includes('session-token'));
  const session=await Auth(new Request(origin+'/api/front-desk/auth/session',{headers:{cookie:cookies}}),config);
  assert.equal((await session.json()).user.email,'owner@example.test');
  const replay=await Auth(new Request(callback),config);assert.match(replay.headers.get('location'),/error=Verification/);
  await Auth(new Request(origin+'/api/front-desk/auth/signout',{method:'POST',headers:{cookie:cookies,'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({callbackUrl:origin+'/front-desk/sign-in'})}),config);
  const after=await Auth(new Request(origin+'/api/front-desk/auth/session',{headers:{cookie:cookies}}),config);assert.equal(await after.json(),null);
  const rejected=await Auth(new Request(origin+'/api/front-desk/auth/signin/resend',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({email:'stranger@example.test'})}),config);
  assert.match(rejected.headers.get('location'),/error=AccessDenied/);assert.equal(sends,1,'Unauthorized addresses receive no email');
 }finally{globalThis.fetch=oldFetch;delete globalThis.trulyTestRedis;for(const key of Object.keys(process.env))if(!(key in oldEnv))delete process.env[key];Object.assign(process.env,oldEnv);await fs.rm(scratch,{recursive:true,force:true});}
});
