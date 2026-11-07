import {NextRequest} from 'next/server';
import {handlers,authConfigured} from '@/lib/front-desk/auth';
import {sameOrigin} from '@/lib/front-desk/access';
export const dynamic='force-dynamic';
export async function POST(req:NextRequest){
 if(!sameOrigin(req))return Response.json({error:'Request origin is not allowed.'},{status:403});
 if(!authConfigured())return Response.json({error:'Sign-in is unavailable.'},{status:503});
 if(!req.headers.get('content-type')?.startsWith('application/x-www-form-urlencoded'))return Response.json({error:'Invalid form.'},{status:415});
 const text=await req.text();if(text.length>2000)return Response.json({error:'Invalid form.'},{status:413});
 const body=new URLSearchParams(text),token=body.get('token'),email=body.get('email');
 const origin=new URL(req.url).origin;
 if(!token||!email||token.length>256||email.length>200)return Response.redirect(`${origin}/front-desk/sign-in?error=Verification`,303);
 const target=new URL('/api/front-desk/auth/callback/resend',origin);
 target.search=new URLSearchParams({token,email,callbackUrl:`${origin}/front-desk`}).toString();
 const result=await handlers.GET(new NextRequest(target,{headers:{cookie:req.headers.get('cookie')||''}}));
 const headers=new Headers(result.headers);headers.set('Cache-Control','private, no-store');headers.set('Referrer-Policy','no-referrer');
 if(!headers.has('location'))headers.set('location',`${origin}/front-desk/sign-in?error=CallbackRouteError`);
 return new Response(null,{status:303,headers});
}
