import 'server-only';
import {Redis} from '@upstash/redis';
import {createHash,createHmac,randomBytes,timingSafeEqual} from 'node:crypto';
import {deskAccess} from '../access';
export const prefix='truly:front-desk:mobile:';
export const lifetime=7*86400;
export function store(){return new Redis({url:process.env.UPSTASH_REDIS_REST_URL||process.env.KV_REST_API_URL,token:process.env.UPSTASH_REDIS_REST_TOKEN||process.env.KV_REST_API_TOKEN});}
export const digest=(v:string)=>createHash('sha256').update(v).digest('hex');
export const opaque=()=>randomBytes(32).toString('base64url');
export const proof=(v:string)=>createHash('sha256').update(v).digest('base64url');
export const codeHash=(id:string,code:string)=>createHmac('sha256',process.env.AUTH_SECRET!).update(`${id}:${code}`).digest('hex');
export function secureEqual(a:string,b:string){const x=Buffer.from(a),y=Buffer.from(b);return x.length===y.length&&timingSafeEqual(x,y);}
export type MobileSession={email:string;expiresAt:string;createdAt:string;clientId?:string|null};
export async function mobileSession(req:Request){
 const authorization=req.headers.get('authorization')||'';
 if(!/^Bearer [A-Za-z0-9_-]{43}$/.test(authorization))return null;
 const hash=digest(authorization.slice(7)),session=await store().get<MobileSession>(prefix+'session:'+hash);
 const access=session&&deskAccess(session.email),role=access?.role;
 if(!session||!role||(session.clientId||null)!==(access?.clientId||null)||Date.parse(session.expiresAt)<=Date.now()||await store().exists(prefix+'deleted:'+digest(session.email)))return null;
 return {...session,hash,role,clientId:access!.clientId,businessName:access!.businessName};
}
export const mobileJSON=(value:unknown,status=200)=>Response.json(value,{status,headers:{'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
export async function smallJSON(req:Request,limit=20000):Promise<Record<string,unknown>>{
 if(!req.headers.get('content-type')?.startsWith('application/json'))throw Error('Send JSON.');
 const reader=req.body?.getReader();let size=0;const parts:Uint8Array[]=[];
 if(reader)while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>limit){await reader.cancel();throw Error('Request too large.');}parts.push(value);}
 const result=JSON.parse(Buffer.concat(parts).toString('utf8'));if(!result||typeof result!=='object'||Array.isArray(result))throw Error('Invalid request.');return result;
}
export async function upstream(resource:'desk'|'push',method='GET',body?:unknown,clientId?:string|null){
 const token=process.env.FRONT_DESK_SITE_TOKEN,key=process.env.FRONT_DESK_PORTAL_KEY;
 if(!token||!key)throw Error('The front desk connection is unavailable.');
 return fetch(`https://truly-front-desk.copperoak14.chatgpt.site/api/${resource}${resource==='desk'?'?workspace=truly':''}`,{method,headers:{'OAI-Sites-Authorization':`Bearer ${token}`,'X-Truly-Portal-Key':key,'Content-Type':'application/json',...(clientId?{'X-Truly-Client-Id':clientId}:{})},...(body===undefined?{}:{body:JSON.stringify(body)}),cache:'no-store',redirect:'error',signal:AbortSignal.timeout(25000)});
}
