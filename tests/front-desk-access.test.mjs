import {test} from 'node:test';
import assert from 'node:assert/strict';
import {allowedEmail,sameOrigin,validResource,deskRole,memberRequestAllowed} from '../src/lib/front-desk/access.ts';
test('only the configured owner can access the pilot, including existing sessions',()=>{assert.equal(allowedEmail('OWNER@example.com','owner@example.com'),true);for(const email of ['',null,'other@example.com','owner@example.com.evil'])assert.equal(allowedEmail(email,'owner@example.com'),false);assert.equal(allowedEmail('owner@example.com',''),false);});
test('mutations require the exact request origin',()=>{const req=headers=>new Request('https://trulyautomation.com/api/front-desk/desk',{headers});assert.equal(sameOrigin(req({origin:'https://trulyautomation.com'})),true);for(const headers of [{},{origin:'https://evil.test'},{origin:'https://trulyautomation.com','sec-fetch-site':'cross-site'}])assert.equal(sameOrigin(req(headers)),false);});
test('gateway cannot proxy arbitrary routes',()=>{for(const name of ['desk','backup','operations','push'])assert.equal(validResource(name),true);for(const name of ['mcp','auth','../desk','integrations/vapi','https://evil.test'])assert.equal(validResource(name),false);});
test('canonical site origin works behind hosting rewrites without trusting forwarded hosts',()=>{const previous=process.env.AUTH_URL;process.env.AUTH_URL='https://trulyautomation.com/api/front-desk/auth';try{const url='https://internal-deployment.vercel.app/api/front-desk/verify';assert.equal(sameOrigin(new Request(url,{headers:{origin:'https://trulyautomation.com'}})),true);for(const origin of ['null','https://evil.test','https://internal-deployment.vercel.app'])assert.equal(sameOrigin(new Request(url,{headers:{origin,'x-forwarded-host':'trulyautomation.com'}})),false);}finally{if(previous===undefined)delete process.env.AUTH_URL;else process.env.AUTH_URL=previous;}});

test('team access is exact, revocable, and never owner access',()=>{
 const owner='owner@example.test',team=' member@example.test, second@example.test, ';
 assert.equal(deskRole(owner,owner,team),'owner');assert.equal(deskRole('MEMBER@example.test',owner,team),'member');
 for(const email of [null,'','other@example.test','member@example.test.evil','member+alias@example.test'])assert.equal(allowedEmail(email,owner,team),false);
 assert.equal(allowedEmail('member@example.test',owner,''),false);assert.equal(allowedEmail('member@example.test','',team),false);
});
test('members manage daily work but cannot use owner routes or administrative actions',()=>{
 assert.equal(memberRequestAllowed('desk','GET','truly'),true);
 for(const action of ['contact.create','contact.update','task.create','task.resolve','task.acknowledge','task.reopen','appointment.create','appointment.reschedule','appointment.cancel','calendar.block'])assert.equal(memberRequestAllowed('desk','POST',null,{action,workspace:'truly'}),true);
 for(const resource of ['operations','backup','push'])for(const method of ['GET','POST'])assert.equal(memberRequestAllowed(resource,method,'truly',{}),false);
 for(const action of ['bootstrap','simulate','vapi.prepare','calendar.pause','actions.test','unknown'])assert.equal(memberRequestAllowed('desk','POST',null,{action,workspace:'truly'}),false);
 for(const body of [null,[],{}, {action:'task.create',workspace:'practice'}])assert.equal(memberRequestAllowed('desk','POST',null,body),false);
 assert.equal(memberRequestAllowed('desk','GET','practice'),false);assert.equal(memberRequestAllowed('desk','POST','practice',{action:'task.create',workspace:'truly'}),false);
});
