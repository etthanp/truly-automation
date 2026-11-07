import fengari from 'fengari';
const {lua,lauxlib,lualib,to_luastring:s}=fengari;
function push(L,value){
 if(value==null)lua.lua_pushnil(L);
 else if(typeof value==='string')lua.lua_pushstring(L,s(value));
 else if(typeof value==='number')lua.lua_pushnumber(L,value);
 else if(typeof value==='boolean')lua.lua_pushboolean(L,value);
 else{lua.lua_newtable(L);for(const [key,v]of Object.entries(value)){push(L,Array.isArray(value)?Number(key)+1:key);push(L,v);lua.lua_settable(L,-3);}}
}
function read(L,index){
 const type=lua.lua_type(L,index);
 if(type===lua.LUA_TSTRING)return lua.lua_tojsstring(L,index);
 if(type===lua.LUA_TNUMBER)return lua.lua_tonumber(L,index);
 if(type===lua.LUA_TBOOLEAN)return lua.lua_toboolean(L,index);
 if(type===lua.LUA_TTABLE){const result={},absolute=lua.lua_absindex(L,index);lua.lua_pushnil(L);while(lua.lua_next(L,absolute)){result[read(L,-2)]=read(L,-1);lua.lua_pop(L,1);}return result;}
 return null;
}
// Executes the actual production Lua scripts; only Redis storage and its clock are isolated.
export class MobileRedis {
 values=new Map();expiries=new Map();clock=Date.now();
 raw(key){if((this.expiries.get(key)??Infinity)<=this.clock){this.values.delete(key);this.expiries.delete(key);}return this.values.get(key)??null;}
 get(key){const value=this.raw(key);if(typeof value==='string'){try{return JSON.parse(value)}catch{}}return value;}
 set(key,value,options={}){if(options.nx&&this.raw(key)!==null)return null;this.values.set(key,typeof value==='object'?JSON.stringify(value):String(value));if(options.ex)this.expiries.set(key,this.clock+options.ex*1000);else this.expiries.delete(key);return 'OK';}
 del(...keys){let count=0;for(const key of keys){count+=this.values.delete(key)?1:0;this.expiries.delete(key);}return count;}
 exists(key){return this.raw(key)===null?0:1;}
 expire(key,seconds){this.expiries.set(key,this.clock+Number(seconds)*1000);return 1;}
 sadd(key,value){const set=this.raw(key)||new Set();set.add(value);this.values.set(key,set);return 1;}
 smembers(key){return [...(this.raw(key)||[])];}
 eval(script,keys,args){
  const L=lauxlib.luaL_newstate();lualib.luaL_openlibs(L);
  push(L,keys);lua.lua_setglobal(L,s('KEYS'));push(L,args);lua.lua_setglobal(L,s('ARGV'));
  const define=(name,functions)=>{lua.lua_newtable(L);for(const [key,fn]of Object.entries(functions)){lua.lua_pushjsfunction(L,l=>{const argv=Array.from({length:lua.lua_gettop(l)},(_,i)=>read(l,i+1));push(l,fn(...argv));return 1;});lua.lua_setfield(L,-2,s(key));}lua.lua_setglobal(L,s(name));};
  define('cjson',{encode:JSON.stringify,decode:JSON.parse});
  define('redis',{call:(command,key,...rest)=>{
   if(command==='GET')return this.raw(key)??false;
   if(command==='SET')return this.set(key,rest[0],rest[1]==='EX'?{ex:Number(rest[2])}:{});
   if(command==='DEL')return this.del(key,...rest);
   if(command==='EXISTS')return this.exists(key);
   if(command==='INCR'){const n=Number(this.raw(key)||0)+1;this.values.set(key,String(n));return n;}
   if(command==='EXPIRE')return this.expire(key,rest[0]);
   if(command==='TTL')return this.raw(key)===null?-2:this.expiries.has(key)?Math.floor((this.expiries.get(key)-this.clock)/1000):-1;
   throw Error('Unexpected Redis command '+command);
  }});
  try{const result=lauxlib.luaL_dostring(L,s(script));if(result!==lua.LUA_OK)throw Error(lua.lua_tojsstring(L,-1));return read(L,-1);}finally{lua.lua_close(L);}
 }
}
