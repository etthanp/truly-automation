import Link from 'next/link';
import {redirect} from 'next/navigation';
import {deskSession} from '@/lib/front-desk/auth';
import VerifyForm from './form';
export const dynamic='force-dynamic';
export default async function Page({searchParams}:{searchParams:Promise<{token?:string;email?:string}>}){
 if(await deskSession())redirect('/front-desk');
 const {token,email}=await searchParams;
 const valid=!!token&&!!email&&token.length<=256&&email.length<=200;
 return <main className="portal-message"><Link href="/" className="portal-brand">truly<span>.</span></Link><span className="section-kicker">ONE LAST STEP</span><h1>{valid?'Your front desk is ready.':'Open your latest email.'}</h1><p>{valid?'Choose the button below to finish signing in. You won’t need to request another email.':'Use the Continue to Truly button in your newest sign-in email. If it has expired, request a new link.'}</p>{valid?<VerifyForm token={token!} email={email!}/>:<Link className="button primary" href="/front-desk/sign-in">Request a new link</Link>}<p className="portal-login-note">Your workspace stays private. Sign-in links work once and expire after 30 minutes.</p></main>;
}
