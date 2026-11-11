"use client";
import {useEffect,useState,type FormEvent} from 'react';
import {CLIENT_CHECKS,emptyClientConfig,type ClientConfig,type ClientSetup,type CheckId} from './lib/client-setup-model';

export function ClientSetupPanel({endpoint='/api/operations'}:{endpoint?:string}){
 const [items,setItems]=useState<ClientSetup[]>([]),[selected,setSelected]=useState<ClientSetup|null>(null);
 const [editing,setEditing]=useState(false),[config,setConfig]=useState<ClientConfig>(emptyClientConfig);
 const [newId,setNewId]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState(''),[notice,setNotice]=useState('');
 const [check,setCheck]=useState<CheckId|null>(null);
 async function request(body?:unknown){
   setBusy(true);setError('');setNotice('');
   try{const r=await fetch(endpoint,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json'}:{},body:body?JSON.stringify(body):undefined,cache:'no-store'});const d=await r.json() as {clientSetups?:ClientSetup[];error?:string};if(!r.ok)throw Error(d.error||'Could not load client setups.');if(!d.clientSetups)throw Error('Client setup is not available on the server yet.');setItems(d.clientSetups);return d.clientSetups;}catch(e){setError((e as Error).message);return null;}finally{setBusy(false);}
 }
 useEffect(()=>{void request();},[endpoint]); // eslint-disable-line react-hooks/exhaustive-deps
 function open(item:ClientSetup){setSelected(item);setConfig(item.config);setEditing(false);setCheck(null);setError('');setNotice('');}
 function change<K extends keyof ClientConfig>(key:K,value:ClientConfig[K]){setConfig(old=>({...old,[key]:value}));}
 async function save(e:FormEvent){e.preventDefault();const id=selected?.id||newId;const result=await request({action:'client.save',id,revision:selected?.revision||0,config});if(result){open(result.find(v=>v.id===id)!);setNotice('Setup saved. Phone routing and access have not been changed.');}}
 async function saveEvidence(e:FormEvent<HTMLFormElement>){e.preventDefault();if(!selected||!check)return;const f=new FormData(e.currentTarget);const result=await request({action:'client.evidence',id:selected.id,revision:selected.revision,check,result:f.get('result'),details:f.get('details')});if(result){open(result.find(v=>v.id===selected.id)!);setNotice('Evidence saved for this setup revision.');}}
 function download(){if(!selected)return;const blob=new Blob([JSON.stringify({format:'truly-client-installation-plan',version:1,exportedAt:new Date().toISOString(),...selected,limitations:['Installation plan only; no live connection or access provisioned.','SMS and automatic customer confirmations are not included.','Check results are owner-recorded evidence, not an automated certification.']},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`truly-client-setup-${selected.id}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 const field=(key:keyof ClientConfig,label:string,type='text',required=false)=><label>{label}<input type={type} required={required} value={String(config[key])} maxLength={key==='staffEmail'?254:120} onChange={e=>change(key,e.target.value as never)}/></label>;
 return <section className="panel client-setup-panel">
  <div className="panel-head"><div><span className="section-kicker">REPEATABLE CLIENT SETUP</span><h2>Prepare the next front desk.</h2><p>Save each business’s requirements and its own launch evidence.</p></div><button className="button primary" disabled={busy||editing} onClick={()=>{setSelected(null);setConfig({...emptyClientConfig,days:[...emptyClientConfig.days]});setNewId(crypto.randomUUID());setEditing(true);setCheck(null);setError('');setNotice('');}}>New client setup</button></div>
  <div className="client-setup-body">
   <p className="form-help">These are private installation plans. Saving a plan does not connect a phone, create a live calendar or authorize a sign-in. Each client still needs its own isolated workspace and tested connections.</p>
   {error&&<div className="error-box" role="alert">{error}<button className="text-button" disabled={busy} onClick={async()=>{const result=await request();if(result){if(selected){const latest=result.find(v=>v.id===selected.id);if(latest)open(latest);}else setEditing(false);}}}>Reload saved setups</button></div>}
   {notice&&<p role="status" className="evidence-note">{notice}</p>}
   {!editing&&<div className="client-setup-list">{items.length===0?<p>{busy?'Loading saved setups…':'No client setups saved yet. Start with the first business you plan to onboard.'}</p>:items.map(item=><button key={item.id} className={`client-setup-choice ${selected?.id===item.id?'selected':''}`} onClick={()=>open(item)}><strong>{item.config.businessName}</strong><span>{item.stage}</span><small>{item.passed}/{CLIENT_CHECKS.length} checks recorded · Not connected</small></button>)}</div>}
   {editing?<form className="record-form client-setup-form" onSubmit={save}>
    <h3>{selected?'Edit installation plan':'New installation plan'}</h3>
    {selected&&<p className="form-help">Saving changes clears previous acceptance results because the configuration must be tested again.</p>}
    <div className="client-setup-grid">{field('businessName','Business name','text',true)}{field('industry','Business type')}
     <label>Timezone<select value={config.timezone} onChange={e=>change('timezone',e.target.value)}>{['America/New_York','America/Chicago','America/Denver','America/Los_Angeles','America/Phoenix','America/Anchorage','Pacific/Honolulu'].map(zone=><option key={zone}>{zone}</option>)}</select></label>
     {field('appointmentLabel','Appointment type')}
     <label>Appointment length<select value={config.durationMinutes} onChange={e=>change('durationMinutes',Number(e.target.value))}>{[15,30,45,60].map(n=><option key={n} value={n}>{n} minutes</option>)}</select></label>
     {field('opens','Booking starts','time',true)}{field('closes','Booking ends','time',true)}
    </div>
    <fieldset className="client-days"><legend>Booking days</legend>{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day,index)=><label key={day}><input type="checkbox" checked={config.days.includes(index)} onChange={e=>change('days',e.target.checked?[...config.days,index].sort():config.days.filter(d=>d!==index))}/>{day}</label>)}</fieldset>
    <div className="client-setup-grid">{field('staffName','Responsible person')}{field('staffEmail','Planned staff sign-in email','email')}{field('transferPhone','Live transfer phone (+country code)','tel')}{field('fallbackPhone','Outage fallback phone (+country code)','tel')}</div>
    <p className="form-help">Enter phone numbers with country code, for example +17045550100. No invitation or call is sent from this form.</p>
    <label>Approved business facts<textarea maxLength={2500} rows={5} value={config.facts} onChange={e=>change('facts',e.target.value)} placeholder="Services, location, service area, approved answers and what requires a person. No passwords or access tokens."/></label>
    <label>Callback and escalation instructions<textarea maxLength={1500} rows={4} value={config.instructions} onChange={e=>change('instructions',e.target.value)} placeholder="Who owns callbacks, when to transfer, and what the receptionist should do if nobody answers."/></label>
    <div className="form-actions"><button type="button" className="button" disabled={busy} onClick={()=>setEditing(false)}>Cancel</button><button className="button primary" disabled={busy}>{busy?'Saving…':'Save setup'}</button></div>
   </form>:selected&&<div className="client-plan-details">
    <div className="acceptance-title"><h3>{selected.config.businessName}</h3><span className="badge orange">Not connected</span></div>
    <p>{selected.config.appointmentLabel||'Appointment type needed'} · {selected.config.durationMinutes} minutes · {selected.config.timezone}<br/>{selected.config.days.map(d=>['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d]).join(', ')} · {selected.config.opens}–{selected.config.closes}</p>
    <p><strong>Setup still needs:</strong> {selected.missing.length?selected.missing.join(', '):'All required setup fields are filled. Connect and verify the business next.'}</p>
    <div className="form-actions"><button className="button" disabled={busy} onClick={()=>{setConfig(selected.config);setEditing(true);setCheck(null);}}>Edit setup</button><button className="button" onClick={download}>Download installation plan</button></div>
    <p className="form-help">Evidence belongs to this business and revision {selected.revision}. Truly’s own tests do not carry over. Do not enter passwords, access keys or customer transcripts.</p>
    {CLIENT_CHECKS.map(([id,title,instruction])=>{const evidence=selected.evidence[id];return <div className="acceptance-row" key={id}><div className="acceptance-title"><h3>{title}</h3><span className={`badge ${evidence?.result==='Passed'?'green':evidence?.result==='Failed'?'orange':'neutral'}`}>{evidence?.result||'Not tested'}</span></div><p>{instruction}</p>{evidence&&<p className="evidence-note">{evidence.details}<br/><small>Owner recorded · {new Date(evidence.at).toLocaleString()}</small></p>}{check===id?<form className="record-form" onSubmit={saveEvidence}><label>Observed result<select name="result" defaultValue={evidence?.result||'Not tested'}><option>Not tested</option><option>Passed</option><option>Failed</option></select></label><label>What did you verify?<textarea name="details" required minLength={20} maxLength={1500} defaultValue={evidence?.details||''} placeholder="When, expected outcome, observed outcome and a non-sensitive reference."/></label><div className="form-actions"><button type="button" className="button" onClick={()=>setCheck(null)}>Cancel</button><button className="button primary" disabled={busy}>Save evidence</button></div></form>:<button className="text-button" disabled={busy} onClick={()=>setCheck(id)}>Record evidence →</button>}</div>;})}
   </div>}
  </div>
 </section>;
}
