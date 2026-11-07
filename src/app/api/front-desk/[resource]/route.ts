import {deskSession} from '@/lib/front-desk/auth';
import {sameOrigin,validResource,deskRole,memberRequestAllowed} from '@/lib/front-desk/access';
export const dynamic='force-dynamic';
const upstream='https://truly-front-desk.copperoak14.chatgpt.site';
const json=(error:string,status:number)=>Response.json({error},{status,headers:{'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
async function forward(req:Request,context:{params:Promise<{resource:string}>}){
 const {resource}=await context.params;
 if(!validResource(resource))return json('Not found.',404);
 const session=await deskSession();
 if(!session)return json('Sign in to open your front desk.',401);
 const role=deskRole(session.user?.email);
 if(!role)return json('Sign in to open your front desk.',401);
 if(role==='member'&&resource!=='desk')return json('This control is available to the workspace owner.',403);
 if(req.method==='POST'&&!sameOrigin(req))return json('Request origin is not allowed.',403);
 const token=process.env.FRONT_DESK_SITE_TOKEN,key=process.env.FRONT_DESK_PORTAL_KEY;
 if(!token||!key||key.length<64)return json('The front desk connection is not configured.',503);
 const url=new URL(`/api/${resource}`,upstream);
 const workspace=new URL(req.url).searchParams.get('workspace');
 if(workspace && !['practice','truly'].includes(workspace))return json('Workspace not found.',404);
 if(workspace)url.searchParams.set('workspace',workspace);
 const headers:Record<string,string>={'OAI-Sites-Authorization':`Bearer ${token}`,'X-Truly-Portal-Key':key};
 let body:string|undefined;
 if(req.method==='POST'){
   if(!req.headers.get('content-type')?.startsWith('application/json'))return json('Send JSON.',415);
   const limit=resource==='backup'?4*1024*1024:20000;
   if(Number(req.headers.get('content-length'))>limit)return json('Request too large.',413);
   const reader=req.body?.getReader();const chunks:Uint8Array[]=[];let size=0;
   if(reader){while(true){const part=await reader.read();if(part.done)break;size+=part.value.length;if(size>limit){await reader.cancel();return json('Request too large.',413);}chunks.push(part.value);}}
   body=Buffer.concat(chunks).toString('utf8');headers['Content-Type']='application/json';
 }
 if(role==='member'){
   let parsed:unknown;
   if(body){try{parsed=JSON.parse(body);}catch{return json('Invalid request.',400);}}
   if(!memberRequestAllowed(resource,req.method,workspace,parsed))return json('This control is available to the workspace owner.',403);
 }
 try{
   const result=await fetch(url,{method:req.method,headers,body,cache:'no-store',redirect:'error',signal:AbortSignal.timeout(25000)});
   if(!result.headers.get('content-type')?.includes('application/json'))return json('The front desk connection is unavailable. Please try again.',502);
   const responseHeaders:Record<string,string>={'Content-Type':'application/json','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'};
   if(resource==='backup'&&req.method==='GET'&&result.ok)responseHeaders['Content-Disposition']=`attachment; filename="truly-backup-${new Date().toISOString().slice(0,10)}.json"`;
   return new Response(result.body,{status:result.status,headers:responseHeaders});
 }catch{return json('The front desk did not respond. Refresh before retrying a change.',503);}
}
export const GET=forward;
export const POST=forward;
