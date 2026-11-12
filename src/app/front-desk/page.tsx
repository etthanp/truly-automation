import {redirect} from 'next/navigation';
import {deskSession} from '@/lib/front-desk/auth';
import {deskAccess} from '@/lib/front-desk/access';
import FrontDesk from './front-desk';
export const dynamic='force-dynamic';
export default async function Page({searchParams}:{searchParams:Promise<{client?:string}>}){const session=await deskSession();if(!session)redirect('/front-desk/sign-in');const access=deskAccess(session.user?.email)!;const requested=(await searchParams).client;const clientId=access.role==='owner'?requested||null:access.clientId;if(clientId&&!/^[0-9a-f-]{36}$/i.test(clientId))redirect('/front-desk');const label=session.user?.name||session.user?.email?.split('@')[0].split(/[._-]/)[0]||'Team';const name=label.charAt(0).toUpperCase()+label.slice(1);return <FrontDesk viewerName={name} isOwner={access.role==='owner'&&!clientId} clientId={clientId} initialBusinessName={clientId&&access.role==='owner'?'Client workspace':access.businessName}/>;}
