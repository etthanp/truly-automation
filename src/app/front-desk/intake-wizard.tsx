"use client";
import {useState, type FormEvent} from 'react';
import {emptyClientConfig, type ClientConfig} from './lib/client-setup-model';
import {daysOfWeek, exportIntake, intakeError, readIntake, scheduleLabel, timezones} from './lib/intake';

const steps=['Business','Booking','Handoffs','Review'];
type Props={initial?:ClientConfig; busy?:boolean; editingPlan?:boolean; onSave?:(config:ClientConfig)=>Promise<void>; onCancel?:()=>void};
export function IntakeWizard({initial=emptyClientConfig,busy=false,editingPlan=false,onSave,onCancel}:Props){
  const [config,setConfig]=useState(initial),[step,setStep]=useState(0),[error,setError]=useState(''),[done,setDone]=useState(false);
  function change<K extends keyof ClientConfig>(key:K,value:ClientConfig[K]){setConfig(old=>({...old,[key]:value}));setError('');setDone(false);}
  function move(next:number){setStep(next);setError('');}
  function validate(complete:boolean,all:boolean){
    for(const page of all?[0,1,2]:[step]){
      const message=intakeError(config,page,complete);
      if(message){setStep(page);setError(message);return false;}
    }
    return true;
  }
  async function submit(e:FormEvent){
    e.preventDefault();
    if(step<3){if(validate(!onSave,false)) move(step+1);return;}
    if(!validate(!onSave,true))return;
    if(onSave){await onSave(config);return;}
    const url=URL.createObjectURL(new Blob([exportIntake(config)],{type:'application/json'}));
    const link=document.createElement('a');link.href=url;link.download='truly-front-desk-intake.json';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);setDone(true);
  }
  function field(key:'businessName'|'industry'|'appointmentLabel'|'opens'|'closes'|'staffName'|'staffEmail'|'transferPhone'|'fallbackPhone',label:string,type='text'){
    return <label>{label}<input type={type} maxLength={key==='staffEmail'?254:key==='staffName'?100:120} value={config[key]} onChange={e=>change(key,e.target.value)}/></label>;
  }
  return <form onSubmit={submit} className="record-form client-setup-form" noValidate>
    <p className="form-help" aria-live="polite">Step {step+1} of 4 · {steps[step]}</p>
    <fieldset disabled={busy} style={{border:0,padding:0,margin:0,minWidth:0,display:'grid',gap:16}}>
    {step===0&&<>
      <h3>What should the receptionist know?</h3>
      {onSave&&!editingPlan&&<details><summary>Import completed client intake</summary><label>Intake file<input type="file" accept=".json,application/json" onChange={async e=>{const file=e.target.files?.[0];e.target.value='';if(!file)return;try{if(file.size>32000)throw Error('Choose an intake file under 32 KB.');setConfig(readIntake(await file.text()));move(3);}catch(err){setError((err as Error).message);}}}/></label><a href="https://trulyautomation.com/front-desk/intake" target="_blank" rel="noreferrer">Open the client intake form ↗</a></details>}
      <div className="client-setup-grid">{field('businessName','Business name')}{field('industry','Business type')}</div>
      <label>Approved business facts<textarea rows={5} maxLength={2500} value={config.facts} onChange={e=>change('facts',e.target.value)} placeholder="Which services do you offer, where do you work, and what questions can the receptionist answer?"/></label>
    </>}
    {step===1&&<>
      <h3>When can callers book?</h3>
      <div className="client-setup-grid">{field('appointmentLabel','Appointment type')}
      <label>Length<select value={config.durationMinutes} onChange={e=>change('durationMinutes',Number(e.target.value))}>{[15,30,45,60].map(n=><option key={n} value={n}>{n} minutes</option>)}</select></label>
      <label>Timezone<select value={config.timezone} onChange={e=>change('timezone',e.target.value)}>{Array.from(new Set([...timezones,config.timezone])).map(t=><option key={t}>{t}</option>)}</select></label>
      {field('opens','Booking starts','time')}{field('closes','Booking ends','time')}</div>
      <fieldset className="client-days"><legend>Booking days</legend>{daysOfWeek.map((d,i)=><label key={d}><input type="checkbox" checked={config.days.includes(i)} onChange={e=>change('days',e.target.checked?[...config.days,i].sort():config.days.filter(n=>n!==i))}/>{d}</label>)}</fieldset>
    </>}
    {step===2&&<>
      <h3>Who handles calls that need a person?</h3>
      <div className="client-setup-grid">{field('staffName','Responsible staff member')}{field('staffEmail','Staff email','email')}{field('transferPhone','Live transfer number','tel')}{field('fallbackPhone','Outage fallback number','tel')}</div>
      <p className="form-help">Include the country code for each number, for example +17045550100.</p>
      <label>Callback and escalation instructions<textarea rows={4} maxLength={1500} value={config.instructions} onChange={e=>change('instructions',e.target.value)} placeholder="When should the receptionist transfer a caller? What should happen if nobody answers?"/></label>
    </>}
    {step===3&&<>
      <h3>Review {config.businessName}’s setup</h3>
      {[[config.businessName,config.industry,config.facts],[config.appointmentLabel,config.durationMinutes+' minutes',scheduleLabel(config)],[config.staffName,config.staffEmail,'Transfer '+(config.transferPhone||'—'),'Fallback '+(config.fallbackPhone||'—'),config.instructions]].map((values,i)=><section key={i}><strong>{steps[i]}</strong><p style={{whiteSpace:'pre-line',overflowWrap:'anywhere'}}>{values.filter(Boolean).join('\n')}</p><button className="text-button" type="button" onClick={()=>move(i)}>Edit {steps[i].toLowerCase()}</button></section>)}
      <p className="form-help">{onSave?(editingPlan?'Saving changed settings clears this plan’s previous test results.':'Save this plan to prepare its workspace and review the receptionist instructions.'):'Download the intake file and send it to your Truly contact so they can review your setup.'}</p>
    </>}
    {error&&<p role="alert" className="error-box">{error}</p>}
    {done&&<p role="status">Your intake file is ready to send to Truly.</p>}
    <div className="form-actions">
      {onCancel&&<button type="button" className="button" onClick={onCancel}>Cancel</button>}
      {step>0&&<button type="button" className="button" onClick={()=>move(step-1)}>Back</button>}
      {onSave&&step<3&&<button type="button" className="button" onClick={()=>{if(validate(false,true))void onSave(config);}}>Save draft</button>}
      <button className="button primary" type="submit">{busy?'Saving…':step<3?'Continue':onSave?'Save setup':'Download intake file'}</button>
    </div></fieldset>
  </form>;
}
