"use client";
import {useActionState} from 'react';
import {requestSignIn} from './actions';
export default function Form({configured}:{configured:boolean}){
 const [state,action,pending]=useActionState(requestSignIn,{error:''});
 return <form action={action} className="portal-login-form"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@yourbusiness.com" required maxLength={200}/>{state.error&&<p role="alert">{state.error}</p>}<button className="button primary" disabled={pending||!configured}>{pending?'Sending your link…':'Email me a sign-in link'} <span>→</span></button><p className="portal-login-note">{configured?'A private, single-use link. No password to remember.':'Sign-in is being connected. Your existing front desk is still available.'}</p></form>;
}
