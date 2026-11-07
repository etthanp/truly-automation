import {redirect} from 'next/navigation';
import {deskSession} from '@/lib/front-desk/auth';
import {deskRole} from '@/lib/front-desk/access';
import FrontDesk from './front-desk';
export const dynamic='force-dynamic';
export default async function Page(){const session=await deskSession();if(!session)redirect('/front-desk/sign-in');const label=session.user?.name||session.user?.email?.split('@')[0].split(/[._-]/)[0]||'Team';const name=label.charAt(0).toUpperCase()+label.slice(1);return <FrontDesk viewerName={name} isOwner={deskRole(session.user?.email)==='owner'}/>;}
