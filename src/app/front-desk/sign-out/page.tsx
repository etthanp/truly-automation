import {signOut} from '@/lib/front-desk/auth';
import Link from 'next/link';
export default function Page(){return <main className="portal-message"><span className="portal-brand">truly<span>.</span></span><h1>Sign out of Truly?</h1><p>This ends your dashboard session on this browser.</p><form action={async()=>{'use server';await signOut({redirectTo:'/front-desk/sign-in'});}}><button className="button primary">Sign out</button></form><Link href="/front-desk">Stay signed in</Link></main>;}
