import {test} from 'node:test';
import assert from 'node:assert/strict';
import {allowedEmail,sameOrigin,validResource} from '../src/lib/front-desk/access.ts';
test('only the configured owner can access the pilot, including existing sessions',()=>{assert.equal(allowedEmail('OWNER@example.com','owner@example.com'),true);for(const email of ['',null,'other@example.com','owner@example.com.evil'])assert.equal(allowedEmail(email,'owner@example.com'),false);assert.equal(allowedEmail('owner@example.com',''),false);});
test('mutations require the exact request origin',()=>{const req=headers=>new Request('https://trulyautomation.com/api/front-desk/desk',{headers});assert.equal(sameOrigin(req({origin:'https://trulyautomation.com'})),true);for(const headers of [{},{origin:'https://evil.test'},{origin:'https://trulyautomation.com','sec-fetch-site':'cross-site'}])assert.equal(sameOrigin(req(headers)),false);});
test('gateway cannot proxy arbitrary routes',()=>{for(const name of ['desk','backup','operations','push'])assert.equal(validResource(name),true);for(const name of ['mcp','auth','../desk','integrations/vapi','https://evil.test'])assert.equal(validResource(name),false);});
