export const CLIENT_CHECKS = [
  ['isolation','Separate workspace and access','Sign in as the client on web and iPhone. Confirm their records match and neither account can read another business’s records.'],
  ['booking','Booking and conflict protection','Make a real call; verify the saved time, timezone, contact and calendar. Try the occupied slot again and verify no double booking.'],
  ['handoff','Live transfer and no answer','Test both an answered transfer and no answer. Verify the caller’s outcome and the assigned callback task.'],
  ['alerts','Phone alert and acknowledgment','With the app closed and phone locked, create a real callback. Receive the alert, open it and acknowledge the same task on web.'],
  ['fallback','Provider outage fallback','Verify the business number reaches the agreed human or voicemail when AI service is unavailable.'],
  ['recovery','Unattended checks and recovery','Verify checks run while dashboards are closed and restore a backup into an isolated test workspace.'],
  ['approval','Business owner acceptance','Have the business approve facts, hours, routing, allowed actions and the agreed pilot limits after the walkthrough.'],
] as const;
export type CheckId=typeof CLIENT_CHECKS[number][0];
export type ClientConfig={businessName:string;industry:string;timezone:string;appointmentLabel:string;durationMinutes:number;days:number[];opens:string;closes:string;staffName:string;staffEmail:string;transferPhone:string;fallbackPhone:string;facts:string;instructions:string};
export type ClientEvidence={result:'Passed'|'Failed'|'Not tested';details:string;at:string;revision:number};
export type ClientSetup={id:string;revision:number;updatedAt:string;config:ClientConfig;evidence:Partial<Record<CheckId,ClientEvidence>>;missing:string[];passed:number;stage:string;deploymentState:'Not connected'};
export const emptyClientConfig:ClientConfig={businessName:'',industry:'',timezone:'America/New_York',appointmentLabel:'',durationMinutes:30,days:[1,2,3,4,5],opens:'09:00',closes:'17:00',staffName:'',staffEmail:'',transferPhone:'',fallbackPhone:'',facts:'',instructions:''};
export function setupSummary(config:ClientConfig,evidence:ClientSetup['evidence'],revision:number){
 const names:Partial<Record<keyof ClientConfig,string>>={industry:'Business type',appointmentLabel:'Appointment type',staffName:'Responsible person',staffEmail:'Staff sign-in email',transferPhone:'Transfer phone',fallbackPhone:'Outage fallback phone',facts:'Approved business facts',instructions:'Callback and escalation instructions'};
 const missing=Object.entries(names).filter(([key])=>!config[key as keyof ClientConfig]).map(([,label])=>label!);
 const passed=CLIENT_CHECKS.filter(([id])=>evidence[id]?.revision===revision&&evidence[id]?.result==='Passed').length;
 return {missing,passed,stage:missing.length?'Draft setup':passed===CLIENT_CHECKS.length?'Checks recorded · activation pending':'Ready for connection',deploymentState:'Not connected' as const};
}
