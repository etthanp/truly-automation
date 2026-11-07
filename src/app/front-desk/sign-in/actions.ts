"use server";
import {signIn,authConfigured} from '@/lib/front-desk/auth';
import {AuthError} from 'next-auth';
export async function requestSignIn(_state:{error:string},data:FormData){
 const email=String(data.get('email')||'').trim();
 if(!authConfigured())return {error:'Sign-in is being connected. Please try again shortly.'};
 if(email.length>200||!/^\S+@\S+\.\S+$/.test(email))return {error:'Enter a valid email address.'};
 try{await signIn('resend',{email,redirectTo:'/front-desk'});}
 catch(error){if(error instanceof AuthError)return {error:'We could not send a sign-in link. Use your authorized email and wait a minute before trying again.'};throw error;}
 return {error:''};
}
