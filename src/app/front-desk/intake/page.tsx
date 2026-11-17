import {IntakeWizard} from '../intake-wizard';
export default function ClientIntakePage(){
  return <main style={{maxWidth:760,margin:'40px auto',padding:'0 16px'}}><section className="panel">
    <div className="panel-head"><div><h1>Set up your front desk</h1><p>Enter the details your receptionist should use. Your answers stay in this browser until you download the file and send it to Truly.</p></div></div>
    <div className="client-setup-body"><IntakeWizard/></div>
  </section></main>;
}
