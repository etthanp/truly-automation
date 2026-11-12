import {digest} from './store';
export type NativeDevice={email:string;clientId?:string|null;sessionHash:string;sessionExpiresAt:string;token:string;environment:'sandbox'|'production';endpointId:string;label:string;createdAt:string;lastTestAt?:string;confirmedAt?:string;lastStatus?:string};
export const bridgeURL=(id:string)=>`https://trulyautomation.com/api/front-desk/mobile/notify/${id}`;
export const deviceID=(token:string,environment:string)=>digest(environment+':'+token);
