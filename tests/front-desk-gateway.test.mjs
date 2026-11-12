import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
import {pathToFileURL} from 'node:url';

test('the real gateway enforces teammate permissions before contacting the shared backend',async()=>{
 const oldEnv={...process.env},oldFetch=globalThis.fetch;
 const scratch=await fs.mkdtemp(new URL('../work/gateway-test-',import.meta.url));
 const transpile=s=>ts.transpileModule(s,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText;
 let requests=0;
 try {
  Object.assign(process.env,{FRONT_DESK_OWNER_EMAIL:'owner@example.test',FRONT_DESK_TEAM_EMAILS:'member@example.test',FRONT_DESK_SITE_TOKEN:'isolated-test',FRONT_DESK_PORTAL_KEY:'x'.repeat(64),AUTH_URL:'https://trulyautomation.com/api/front-desk/auth'});
  await fs.writeFile(`${scratch}/access.mjs`,transpile(await fs.readFile('src/lib/front-desk/access.ts','utf8')));
  let source=await fs.readFile('src/app/api/front-desk/[resource]/route.ts','utf8');
  source=source.replace("import {deskSession} from '@/lib/front-desk/auth';",'const deskSession=async()=>globalThis.trulyGatewayTestSession;').replace("'@/lib/front-desk/access'","'./access.mjs'");
  await fs.writeFile(`${scratch}/route.mjs`,transpile(source));
  const route=await import(pathToFileURL(`${scratch}/route.mjs`).href);
  globalThis.trulyGatewayTestSession={user:{email:'member@example.test'}};
  globalThis.fetch=async(url,options)=>{requests++;assert.equal(new URL(url).origin,'https://truly-front-desk.copperoak14.chatgpt.site');assert.equal(options.headers['X-Truly-Portal-Key'],'x'.repeat(64));return Response.json({records:[]});};
  const send=(resource,method='GET',body,query='?workspace=truly')=>route[method](new Request(`https://trulyautomation.com/api/front-desk/${resource}${query}`,{method,headers:{origin:'https://trulyautomation.com','content-type':'application/json'},...(body===undefined?{}:{body:JSON.stringify(body)})}),{params:Promise.resolve({resource})});
  assert.equal((await send('desk')).status,200);assert.equal(requests,1);
  assert.equal((await send('desk','POST',{workspace:'truly',action:'task.resolve'})).status,200);assert.equal(requests,2);
  for(const resource of ['operations','backup','push'])for(const method of ['GET','POST'])assert.equal((await send(resource,method,method==='POST'?{}:undefined)).status,403);
  for(const action of ['bootstrap','vapi.prepare','calendar.pause','simulate'])assert.equal((await send('desk','POST',{workspace:'truly',action})).status,403);
  assert.equal((await send('desk','GET',undefined,'?workspace=practice')).status,403);assert.equal(requests,2,'Denied requests never contact the backend');
  process.env.FRONT_DESK_TEAM_EMAILS='';assert.equal((await send('desk')).status,401);assert.equal(requests,2,'Removing an email revokes an existing session');
  globalThis.trulyGatewayTestSession={user:{email:'owner@example.test'}};assert.equal((await send('operations')).status,200);assert.equal(requests,3);
  globalThis.trulyGatewayTestSession=null;assert.equal((await send('desk')).status,401);assert.equal(requests,3);
  const clientId='11111111-1111-4111-8111-111111111111';process.env.FRONT_DESK_CLIENTS=JSON.stringify([{id:clientId,name:'Example',emails:['client@example.test']}]);globalThis.trulyGatewayTestSession={user:{email:'client@example.test'}};
  globalThis.fetch=async(url,options)=>{requests++;assert.equal(options.headers['X-Truly-Client-Id'],clientId);return Response.json({records:[]});};
  assert.equal((await send('desk')).status,200);const before=requests;
  assert.equal((await send('desk','GET',undefined,'?workspace=truly&client=22222222-2222-4222-8222-222222222222')).status,404);
  assert.equal((await send('operations')).status,403);assert.equal(requests,before);
  process.env.FRONT_DESK_CLIENTS='[]';assert.equal((await send('desk')).status,401);
  globalThis.trulyGatewayTestSession={user:{email:'owner@example.test'}};globalThis.fetch=async(url,options)=>{assert.equal(new URL(url).searchParams.get('installation'),clientId);assert.equal(options.headers['X-Truly-Client-Id'],undefined);return Response.json({records:[]});};assert.equal((await send('backup','GET',undefined,'?installation='+clientId)).status,200);


 }finally{globalThis.fetch=oldFetch;delete globalThis.trulyGatewayTestSession;for(const key of Object.keys(process.env))if(!(key in oldEnv))delete process.env[key];Object.assign(process.env,oldEnv);await fs.rm(scratch,{recursive:true,force:true});}
});
