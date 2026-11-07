/* Truly app worker v1. Never cache customer records, authenticated pages, or API responses. */
self.addEventListener('install', event => { event.waitUntil(self.skipWaiting()); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.mode !== 'navigate' || url.origin !== self.location.origin || !url.pathname.startsWith('/front-desk')) return;
  event.respondWith(fetch(event.request).catch(() => new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#254cf0"><title>Truly · Offline</title><style>body{font:16px system-ui;background:#f7f8fc;color:#172135;margin:0;padding:15vh 28px}main{max-width:420px;margin:auto}b{font-size:42px;color:#254cf0}p{line-height:1.7;color:#596579}a{display:inline-block;background:#254cf0;color:white;padding:14px 24px;border-radius:10px;text-decoration:none}h1{font-size:26px;margin-top:40px}</style><main><b>truly.</b><h1>You’re offline.</h1><p>Reconnect to see the latest calls, appointments, and follow-up tasks. No changes can be saved while offline.</p><a href="/front-desk">Try again</a></main></html>`, {status:503,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})));
});
self.addEventListener('push', event => {
  event.waitUntil(self.registration.showNotification('Truly Front Desk', {
    body:'Open Truly to review your latest appointments and follow-up tasks.',icon:'/front-desk/icons/truly-192.png',badge:'/front-desk/icons/truly-192.png',tag:'truly-activity',
    data:{url:'/front-desk?workspace=truly&view=attention'},
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url=new URL('/front-desk?workspace=truly&view=attention',self.location.origin).href;
  event.waitUntil((async()=>{
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    const client=windows.find(w=>new URL(w.url).origin===self.location.origin && new URL(w.url).pathname.startsWith('/front-desk'));
    if(client){await client.navigate(url);await client.focus();}else await self.clients.openWindow(url);
  })());
});
