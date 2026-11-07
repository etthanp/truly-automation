import Link from 'next/link';
import {authConfigured,deskSession} from '@/lib/front-desk/auth';
import {redirect} from 'next/navigation';
import Form from './form';
export const dynamic='force-dynamic';
export default async function SignIn({searchParams}:{searchParams:Promise<{error?:string}>}){
 if(await deskSession())redirect('/front-desk');
 const {error}=await searchParams;
 return <main className="portal-login"><div className="portal-login-story"><Link href="/" className="portal-brand">truly<span>.</span></Link><div><span className="section-kicker">YOUR FRONT DESK, TOGETHER</span><h1>Every call. <br/>Every booking. <br/><em>All right here.</em></h1><p>Your conversations, calendar, and next steps in one place. Built and managed by Truly Automation.</p></div><span className="portal-story-footer">A little less busywork. A lot more clarity.</span></div><section className="portal-login-card"><Link href="/" className="portal-back">← Back to Truly Automation</Link><div className="portal-login-inner"><span className="section-kicker">WELCOME BACK</span><h2>Open your front desk.</h2><p>Sign in to see what’s happening and what needs you next.</p>{error&&<p className="error-box" role="alert">That sign-in could not be completed. Request a new link using your authorized email address.</p>}<Form configured={authConfigured()}/><div className="portal-private">◈ &nbsp; Your workspace stays private.<small>Access is limited to approved team members.</small></div></div><span className="portal-login-footer">Truly Front Desk · Managed by Truly Automation</span></section></main>;
}
