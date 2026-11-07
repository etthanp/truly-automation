import {handlers,authConfigured} from '@/lib/front-desk/auth';
import type {NextRequest} from 'next/server';
export const dynamic='force-dynamic';
const unavailable=()=>Response.json({error:'Sign-in setup is not complete.'},{status:503,headers:{'Cache-Control':'no-store'}});
export const GET=(req:NextRequest)=>authConfigured()?handlers.GET(req):unavailable();
export const POST=(req:NextRequest)=>authConfigured()?handlers.POST(req):unavailable();
