import {redirect} from 'next/navigation';
import {deskSession} from '@/lib/front-desk/auth';
import FrontDesk from './front-desk';
export const dynamic='force-dynamic';
export default async function Page(){if(!await deskSession())redirect('/front-desk/sign-in');return <FrontDesk/>;}
