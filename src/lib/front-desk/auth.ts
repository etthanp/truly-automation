import 'server-only';
import NextAuth from 'next-auth';
import Resend from 'next-auth/providers/resend';
import {Redis} from '@upstash/redis';
import {UpstashRedisAdapter} from '@auth/upstash-redis-adapter';
import type {VerificationToken} from 'next-auth/adapters';
import {allowedEmail} from './access';

export function authConfigured(){return !!(process.env.AUTH_SECRET && process.env.FRONT_DESK_OWNER_EMAIL && process.env.RESEND_API_KEY && (process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) && (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN));}
export const {handlers,auth,signIn,signOut}=NextAuth(()=>{
 const redis=authConfigured()?new Redis({url:process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,token:process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN}):null;
 const prefix='truly:front-desk:auth:';
 const adapter=redis?UpstashRedisAdapter(redis,{baseKeyPrefix:prefix}):undefined;
 if(adapter&&redis){
   // The official adapter's read/delete pair is not atomic. A link must be consumed once.
   adapter.createVerificationToken=async token=>{await redis.set(`${prefix}user:token:${token.identifier}:${token.token}`,token,{ex:Math.max(1,Math.ceil((token.expires.getTime()-Date.now())/1000))});return token;};
   adapter.useVerificationToken=async ({identifier,token})=>{const value=await redis.getdel<VerificationToken>(`${prefix}user:token:${identifier}:${token}`);return value?{...value,expires:new Date(value.expires)}:null;};
 }
 return {
  basePath:'/api/front-desk/auth',
  trustHost:true,
  adapter,
  session:{strategy:'database' as const,maxAge:60*60*24*7,updateAge:60*60*24},
  providers:[Resend({apiKey:process.env.RESEND_API_KEY,from:'Truly Automation <ethan@trulyautomation.com>',maxAge:600})],
  pages:{signIn:'/front-desk/sign-in',verifyRequest:'/front-desk/check-email',error:'/front-desk/sign-in'},
  callbacks:{
    async signIn({user,email}){
      if(!redis||!allowedEmail(user.email))return false;
      if(email?.verificationRequest){
        // One email per minute and five per hour for the pilot owner.
        const key=`${prefix}mail:${user.email!.toLowerCase()}`;
        const allowed=await redis.eval("local n=tonumber(redis.call('GET',KEYS[1]) or '0'); if n>=5 or redis.call('EXISTS',KEYS[2])==1 then return 0 end; redis.call('INCR',KEYS[1]); if n==0 then redis.call('EXPIRE',KEYS[1],3600) end; redis.call('SET',KEYS[2],'1','EX',60); return 1",[key,key+':cooldown'],[]);
        if(!allowed)return false;
      }
      return true;
    },
    async redirect({url,baseUrl}){
      const target=new URL(url,baseUrl);
      return target.origin===new URL(baseUrl).origin && (target.pathname==='/front-desk'||target.pathname.startsWith('/front-desk/'))?target.href:new URL('/front-desk',baseUrl).href;
    }
  },
  logger:{error(){console.error('Front desk authentication failed.');},warn(code){console.warn('Front desk authentication:',code);}}
 };
});
export async function deskSession(){if(!authConfigured())return null;const session=await auth();return allowedEmail(session?.user?.email)?session:null;}
