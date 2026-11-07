import type {Metadata,Viewport} from 'next';
import './portal.css';
export const metadata:Metadata={title:'Truly Front Desk',description:'Your private Truly Automation front desk.',robots:{index:false,follow:false},manifest:'/front-desk/manifest.webmanifest',appleWebApp:{capable:true,title:'Truly',statusBarStyle:'default'},icons:{apple:'/front-desk/icons/truly-192.png'}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#254cf0'};
export default function Layout({children}:{children:React.ReactNode}){return <div className="truly-portal">{children}</div>;}
