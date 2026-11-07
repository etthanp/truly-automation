"use client";
import {useEffect,useState} from 'react';
export default function VerifyForm({token,email}:{token:string;email:string}){
 const [busy,setBusy]=useState(false);
 useEffect(()=>{history.replaceState(null,'','/front-desk/verify');},[]);
 return <form method="POST" action="/api/front-desk/verify" onSubmit={()=>setBusy(true)}><input type="hidden" name="token" value={token}/><input type="hidden" name="email" value={email}/><button className="button primary" disabled={busy}>{busy?'Opening your front desk…':'Open my front desk →'}</button></form>;
}
