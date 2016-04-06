/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 1.0.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
var requirejs,require,define;(function(undefined){function isFunction(a){return ostring.call(a)==='[object Function]'}function isArray(a){return ostring.call(a)==='[object Array]'}function mixin(a,b,c){for(var d in b)!(d in empty)&&(!(d in a)||c)&&(a[d]=b[d]);return req}function makeError(a,b,c){var d=new Error(b+'\nhttp://requirejs.org/docs/errors.html#'+a);return c&&(d.originalError=c),d}function configurePackageDir(a,b,c){var d,e,f;for(d=0;f=b[d];d++)f=typeof f=='string'?{name:f}:f,e=f.location,c&&(!e||e.indexOf('/')!==0&&e.indexOf(':')===-1)&&(e=c+'/'+(e||f.name)),a[f.name]={name:f.name,location:e||f.name,main:(f.main||'main').replace(currDirRegExp,'').replace(jsSuffixRegExp,'')}}function jQueryHoldReady(a,b){a.holdReady?a.holdReady(b):b?a.readyWait+=1:a.ready(!0)}function newContext(a){function s(a){var b,c;for(b=0;c=a[b];b++)if(c==='.')a.splice(b,1),b-=1;else if(c==='..'){if(b===1&&(a[2]==='..'||a[0]==='..'))break;b>0&&(a.splice(b-1,2),b-=2)}}function t(a,b){var c,e;return a&&a.charAt(0)==='.'&&(b?(d.pkgs[b]?b=[b]:(b=b.split('/'),b=b.slice(0,b.length-1)),a=b.concat(a.split('/')),s(a),e=d.pkgs[c=a[0]],a=a.join('/'),e&&a===c+'/'+e.main&&(a=c)):a.indexOf('./')===0&&(a=a.substring(2))),a}function u(a,c){var d=a?a.indexOf('!'):-1,e=null,f=c?c.name:null,i=a,j,k,l;return d!==-1&&(e=a.substring(0,d),a=a.substring(d+1,a.length)),e&&(e=t(e,f)),a&&(e?(l=h[e],l&&l.normalize?j=l.normalize(a,function(a){return t(a,f)}):j=t(a,f)):(j=t(a,f),k=g[j],k||(k=b.nameToUrl(a,null,c),g[j]=k))),{prefix:e,name:j,parentMap:c,url:k,originalName:i,fullName:e?e+'!'+(j||''):j}}function v(){var a=!0,b=d.priorityWait,c,e;if(b){for(e=0;c=b[e];e++)if(!i[c]){a=!1;break}a&&delete d.priorityWait}return a}function w(a,b,c){return function(){var d=aps.call(arguments,0),e;return c&&isFunction(e=d[d.length-1])&&(e.__requireJsBuild=!0),d.push(b),a.apply(null,d)}}function x(a,c,d){var e=w(d||b.require,a,c);return mixin(e,{nameToUrl:w(b.nameToUrl,a),toUrl:w(b.toUrl,a),defined:w(b.requireDefined,a),specified:w(b.requireSpecified,a),isBrowser:req.isBrowser}),e}function y(a){b.paused.push(a)}function z(a){var c,e,f,g,i,l=a.callback,m=a.map,o=m.fullName,r=a.deps,s=a.listeners,t=d.requireExecCb||req.execCb,v;if(l&&isFunction(l)){if(d.catchError.define)try{e=t(o,a.callback,r,h[o])}catch(w){f=w}else e=t(o,a.callback,r,h[o]);o&&(v=a.cjsModule,v&&v.exports!==undefined&&v.exports!==h[o]?e=h[o]=a.cjsModule.exports:e===undefined&&a.usingExports?e=h[o]:(h[o]=e,p[o]&&(q[o]=!0)))}else o&&(e=h[o]=l,p[o]&&(q[o]=!0));j[a.id]&&(delete j[a.id],a.isDone=!0,b.waitCount-=1,b.waitCount===0&&(k=[])),delete n[o],req.onResourceLoad&&!a.placeholder&&req.onResourceLoad(b,m,a.depArray);if(f)return g=(o?u(o).url:'')||f.fileName||f.sourceURL,i=f.moduleTree,f=makeError('defineerror','Error evaluating module "'+o+'" at location "'+g+'":\n'+f+'\nfileName:'+g+'\nlineNumber: '+(f.lineNumber||f.line),f),f.moduleName=o,f.moduleTree=i,req.onError(f);for(c=0;l=s[c];c++)l(e);return undefined}function A(a,b){return function(c){a.depDone[b]||(a.depDone[b]=!0,a.deps[b]=c,a.depCount-=1,a.depCount||z(a))}}function B(a,e){var f=e.map,g=f.fullName,j=f.name,k=o[a]||(o[a]=h[a]),l;if(e.loading)return;e.loading=!0,l=function(a){e.callback=function(){return a},z(e),i[e.id]=!0,c()},l.fromText=function(a,c){var d=useInteractive;i[a]=!1,b.scriptCount+=1,b.fake[a]=!0,d&&(useInteractive=!1),req.exec(c),d&&(useInteractive=!0),b.completeLoad(a)},g in h?l(h[g]):k.load(j,x(f.parentMap,!0,function(a,c){var d=[],g,h,i;for(g=0;h=a[g];g++)i=u(h,f.parentMap),a[g]=i.fullName,i.prefix||d.push(a[g]);return e.moduleDeps=(e.moduleDeps||[]).concat(d),b.require(a,c)}),l,d)}function C(a){j[a.id]||(j[a.id]=a,k.push(a),b.waitCount+=1)}function D(a){this.listeners.push(a)}function E(a,b){var c=a.fullName,d=a.prefix,e=d?o[d]||(o[d]=h[d]):null,g,j,k,p;return c&&(g=n[c]),g||(j=!0,g={id:(d&&!e?m++ +'__p@:':'')+(c||'__r@'+m++),map:a,depCount:0,depDone:[],depCallbacks:[],deps:[],listeners:[],add:D},f[g.id]=!0,c&&(!d||o[d])&&(n[c]=g)),d&&!e?(p=u(d),d in h&&!h[d]&&(delete h[d],delete l[p.url]),k=E(p,!0),k.add(function(b){var c=u(a.originalName,a.parentMap),d=E(c,!0);g.placeholder=!0,d.add(function(a){g.callback=function(){return a},z(g)})})):j&&b&&(i[g.id]=!1,y(g),C(g)),g}function F(a,c,e,g){var k=u(a,g),m=k.name,n=k.fullName,o=E(k),r=o.id,s=o.deps,t,v,w,y,B;if(n){if(n in h||i[r]===!0||n==='jquery'&&d.jQuery&&d.jQuery!==e().fn.jquery)return;f[r]=!0,i[r]=!0,n==='jquery'&&e&&jQueryCheck(e())}o.depArray=c,o.callback=e;for(t=0;t<c.length;t++)v=c[t],v&&(v=u(v,m?k:g),w=v.fullName,y=v.prefix,c[t]=w,w==='require'?s[t]=x(k):w==='exports'?(s[t]=h[n]={},o.usingExports=!0):w==='module'?o.cjsModule=B=s[t]={id:m,uri:m?b.nameToUrl(m,null,g):undefined,exports:h[n]}:!(w in h)||w in j||n in p&&!(n in p&&q[w])?(n in p&&(p[w]=!0,delete h[w],l[v.url]=!1),o.depCount+=1,o.depCallbacks[t]=A(o,t),E(v,!0).add(o.depCallbacks[t])):s[t]=h[w]);o.depCount?C(o):z(o)}function G(a){F.apply(null,a)}function H(a,b){var c=a.map.fullName,d=a.depArray,e=!0,f,g,h,k;if(a.isDone||!c||!i[c])return k;if(b[c])return a;b[c]=!0;if(d){for(f=0;f<d.length;f++){g=d[f];if(!i[g]&&!reservedDependencies[g]){e=!1;break}h=j[g];if(h&&!h.isDone&&i[g]){k=H(h,b);if(k)break}}e||(k=undefined,delete b[c])}return k}function I(a,b){var c=a.map.fullName,d=a.depArray,e,f,g,k,l,m;if(a.isDone||!c||!i[c])return undefined;if(c){if(b[c])return h[c];b[c]=!0}if(d)for(e=0;e<d.length;e++)f=d[e],f&&(k=u(f).prefix,k&&(l=j[k])&&I(l,b),g=j[f],g&&!g.isDone&&i[f]&&(m=I(g,b),a.depCallbacks[e](m)));return h[c]}function J(){var a=d.waitSeconds*1e3,e=a&&b.startTime+a<(new Date).getTime(),f='',g=!1,h=!1,l=[],m,o,p,q,r,s;if(b.pausedCount>0)return undefined;if(d.priorityWait){if(!v())return undefined;c()}for(o in i)if(!(o in empty)){g=!0;if(!i[o])if(e)f+=o+' ';else{h=!0;if(o.indexOf('!')===-1){l=[];break}s=n[o]&&n[o].moduleDeps,s&&l.push.apply(l,s)}}if(!g&&!b.waitCount)return undefined;if(e&&f)return p=makeError('timeout','Load timeout for modules: '+f),p.requireType='timeout',p.requireModules=f,p.contextName=b.contextName,req.onError(p);if(h&&l.length)for(m=0;q=j[l[m]];m++)if(r=H(q,{})){I(r,{});break}if(!e&&(h||b.scriptCount))return(isBrowser||isWebWorker)&&!checkLoadedTimeoutId&&(checkLoadedTimeoutId=setTimeout(function(){checkLoadedTimeoutId=0,J()},50)),undefined;if(b.waitCount){for(m=0;q=k[m];m++)I(q,{});b.paused.length&&c(),checkLoadedDepth<5&&(checkLoadedDepth+=1,J())}return checkLoadedDepth=0,req.checkReadyState(),undefined}var b,c,d={waitSeconds:7,baseUrl:'./',paths:{},pkgs:{},catchError:{}},e=[],f={require:!0,exports:!0,module:!0},g={},h={},i={},j={},k=[],l={},m=0,n={},o={},p={},q={},r=0;return jQueryCheck=function(a){if(!b.jQuery){var c=a||(typeof jQuery!='undefined'?jQuery:null);if(c){if(d.jQuery&&c.fn.jquery!==d.jQuery)return;if('holdReady'in c||'readyWait'in c)b.jQuery=c,G(['jquery',[],function(){return jQuery}]),b.scriptCount&&(jQueryHoldReady(c,!0),b.jQueryIncremented=!0)}}},c=function(){var a,c,f,g,h,j,k;b.takeGlobalQueue(),r+=1,b.scriptCount<=0&&(b.scriptCount=0);while(e.length){j=e.shift();if(j[0]===null)return req.onError(makeError('mismatch','Mismatched anonymous define() module: '+j[j.length-1]));G(j)}if(!d.priorityWait||v())while(b.paused.length){h=b.paused,b.pausedCount+=h.length,b.paused=[];for(g=0;a=h[g];g++)c=a.map,f=c.url,k=c.fullName,c.prefix?B(c.prefix,a):!l[f]&&!i[k]&&((d.requireLoad||req.load)(b,k,f),f.indexOf('empty:')!==0&&(l[f]=!0));b.startTime=(new Date).getTime(),b.pausedCount-=h.length}return r===1&&J(),r-=1,undefined},b={contextName:a,config:d,defQueue:e,waiting:j,waitCount:0,specified:f,loaded:i,urlMap:g,urlFetched:l,scriptCount:0,defined:h,paused:[],pausedCount:0,plugins:o,needFullExec:p,fake:{},fullExec:q,managerCallbacks:n,makeModuleMap:u,normalize:t,configure:function(a){var e,f,g,h,i,j;a.baseUrl&&a.baseUrl.charAt(a.baseUrl.length-1)!=='/'&&(a.baseUrl+='/'),e=d.paths,g=d.packages,h=d.pkgs,mixin(d,a,!0);if(a.paths){for(f in a.paths)f in empty||(e[f]=a.paths[f]);d.paths=e}i=a.packagePaths;if(i||a.packages){if(i)for(f in i)f in empty||configurePackageDir(h,i[f],f);a.packages&&configurePackageDir(h,a.packages),d.pkgs=h}a.priority&&(j=b.requireWait,b.requireWait=!1,c(),b.require(a.priority),c(),b.requireWait=j,d.priorityWait=a.priority),(a.deps||a.callback)&&b.require(a.deps||[],a.callback)},requireDefined:function(a,b){return u(a,b).fullName in h},requireSpecified:function(a,b){return u(a,b).fullName in f},require:function(d,e,f){var g,i,j;if(typeof d=='string')return isFunction(e)?req.onError(makeError('requireargs','Invalid require call')):req.get?req.get(b,d,e):(g=d,f=e,j=u(g,f),i=j.fullName,i in h?h[i]:req.onError(makeError('notloaded','Module name \''+j.fullName+'\' has not been loaded yet for context: '+a)));(d&&d.length||e)&&F(null,d,e,f);if(!b.requireWait)while(!b.scriptCount&&b.paused.length)c();return b.require},takeGlobalQueue:function(){globalDefQueue.length&&(apsp.apply(b.defQueue,[b.defQueue.length-1,0].concat(globalDefQueue)),globalDefQueue=[])},completeLoad:function(a){var d;b.takeGlobalQueue();while(e.length){d=e.shift();if(d[0]===null){d[0]=a;break}if(d[0]===a)break;G(d),d=null}d?G(d):G([a,[],a==='jquery'&&typeof jQuery!='undefined'?function(){return jQuery}:null]),req.isAsync&&(b.scriptCount-=1),c(),req.isAsync||(b.scriptCount-=1)},toUrl:function(a,c){var d=a.lastIndexOf('.'),e=null;return d!==-1&&(e=a.substring(d,a.length),a=a.substring(0,d)),b.nameToUrl(a,e,c)},nameToUrl:function(a,c,d){var e,f,g,h,i,j,k,l,m=b.config;a=t(a,d&&d.fullName);if(req.jsExtRegExp.test(a))l=a+(c?c:'');else{e=m.paths,f=m.pkgs,i=a.split('/');for(j=i.length;j>0;j--){k=i.slice(0,j).join('/');if(e[k]){i.splice(0,j,e[k]);break}if(g=f[k]){a===g.name?h=g.location+'/'+g.main:h=g.location,i.splice(0,j,h);break}}l=i.join('/')+(c||'.js'),l=(l.charAt(0)==='/'||l.match(/^[\w\+\.\-]+:/)?'':m.baseUrl)+l}return m.urlArgs?l+((l.indexOf('?')===-1?'?':'&')+m.urlArgs):l}},b.jQueryCheck=jQueryCheck,b.resume=c,b}function getInteractiveScript(){var a,b,c;if(interactiveScript&&interactiveScript.readyState==='interactive')return interactiveScript;a=document.getElementsByTagName('script');for(b=a.length-1;b>-1&&(c=a[b]);b--)if(c.readyState==='interactive')return interactiveScript=c;return null}var version='1.0.8',commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/require\(\s*["']([^'"\s]+)["']\s*\)/g,currDirRegExp=/^\.\//,jsSuffixRegExp=/\.js$/,ostring=Object.prototype.toString,ap=Array.prototype,aps=ap.slice,apsp=ap.splice,isBrowser=typeof window!='undefined'&&!!navigator&&!!document,isWebWorker=!isBrowser&&typeof importScripts!='undefined',readyRegExp=isBrowser&&navigator.platform==='PLAYSTATION 3'?/^complete$/:/^(complete|loaded)$/,defContextName='_',isOpera=typeof opera!='undefined'&&opera.toString()==='[object Opera]',empty={},contexts={},globalDefQueue=[],interactiveScript=null,checkLoadedDepth=0,useInteractive=!1,reservedDependencies={require:!0,module:!0,exports:!0},req,cfg={},currentlyAddingScript,s,head,baseElement,scripts,script,src,subPath,mainScript,dataMain,globalI,ctx,jQueryCheck,checkLoadedTimeoutId;if(typeof define!='undefined')return;if(typeof requirejs!='undefined'){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!='undefined'&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(a,b){var c=defContextName,d,e;return!isArray(a)&&typeof a!='string'&&(e=a,isArray(b)?(a=b,b=arguments[2]):a=[]),e&&e.context&&(c=e.context),d=contexts[c]||(contexts[c]=newContext(c)),e&&d.configure(e),d.require(a,b)},req.config=function(a){return req(a)},require||(require=req),req.toUrl=function(a){return contexts[defContextName].toUrl(a)},req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,s=req.s={contexts:contexts,skipAsync:{}},req.isAsync=req.isBrowser=isBrowser,isBrowser&&(head=s.head=document.getElementsByTagName('head')[0],baseElement=document.getElementsByTagName('base')[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(a){throw a},req.load=function(a,b,c){req.resourcesReady(!1),a.scriptCount+=1,req.attach(c,a,b),a.jQuery&&!a.jQueryIncremented&&(jQueryHoldReady(a.jQuery,!0),a.jQueryIncremented=!0)},define=function(a,b,c){var d,e;return typeof a!='string'&&(c=b,b=a,a=null),isArray(b)||(c=b,b=[]),!b.length&&isFunction(c)&&c.length&&(c.toString().replace(commentRegExp,'').replace(cjsRequireRegExp,function(a,c){b.push(c)}),b=(c.length===1?['require']:['require','exports','module']).concat(b)),useInteractive&&(d=currentlyAddingScript||getInteractiveScript(),d&&(a||(a=d.getAttribute('data-requiremodule')),e=contexts[d.getAttribute('data-requirecontext')])),(e?e.defQueue:globalDefQueue).push([a,b,c]),undefined},define.amd={multiversion:!0,plugins:!0,jQuery:!0},req.exec=function(text){return eval(text)},req.execCb=function(a,b,c,d){return b.apply(d,c)},req.addScriptToDom=function(a){currentlyAddingScript=a,baseElement?head.insertBefore(a,baseElement):head.appendChild(a),currentlyAddingScript=null},req.onScriptLoad=function(a){var b=a.currentTarget||a.srcElement,c,d,e;if(a.type==='load'||b&&readyRegExp.test(b.readyState))interactiveScript=null,c=b.getAttribute('data-requirecontext'),d=b.getAttribute('data-requiremodule'),e=contexts[c],contexts[c].completeLoad(d),b.detachEvent&&!isOpera?b.detachEvent('onreadystatechange',req.onScriptLoad):b.removeEventListener('load',req.onScriptLoad,!1)},req.attach=function(a,b,c,d,e,f){var g;return isBrowser?(d=d||req.onScriptLoad,g=b&&b.config&&b.config.xhtml?document.createElementNS('http://www.w3.org/1999/xhtml','html:script'):document.createElement('script'),g.type=e||b&&b.config.scriptType||'text/javascript',g.charset='utf-8',g.async=!s.skipAsync[a],b&&g.setAttribute('data-requirecontext',b.contextName),g.setAttribute('data-requiremodule',c),g.attachEvent&&!(g.attachEvent.toString&&g.attachEvent.toString().indexOf('[native code]')<0)&&!isOpera?(useInteractive=!0,f?g.onreadystatechange=function(a){g.readyState==='loaded'&&(g.onreadystatechange=null,g.attachEvent('onreadystatechange',d),f(g))}:g.attachEvent('onreadystatechange',d)):g.addEventListener('load',d,!1),g.src=a,f||req.addScriptToDom(g),g):(isWebWorker&&(importScripts(a),b.completeLoad(c)),null)};if(isBrowser){scripts=document.getElementsByTagName('script');for(globalI=scripts.length-1;globalI>-1&&(script=scripts[globalI]);globalI--){head||(head=script.parentNode);if(dataMain=script.getAttribute('data-main')){cfg.baseUrl||(src=dataMain.split('/'),mainScript=src.pop(),subPath=src.length?src.join('/')+'/':'./',cfg.baseUrl=subPath,dataMain=mainScript.replace(jsSuffixRegExp,'')),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain];break}}}req.checkReadyState=function(){var a=s.contexts,b;for(b in a)if(!(b in empty)&&a[b].waitCount)return;req.resourcesReady(!0)},req.resourcesReady=function(a){var b,c,d;req.resourcesDone=a;if(req.resourcesDone){b=s.contexts;for(d in b)d in empty||(c=b[d],c.jQueryIncremented&&(jQueryHoldReady(c.jQuery,!1),c.jQueryIncremented=!1))}},req.pageLoaded=function(){document.readyState!=='complete'&&(document.readyState='complete')},isBrowser&&document.addEventListener&&(document.readyState||(document.readyState='loading',window.addEventListener('load',req.pageLoaded,!1))),req(cfg),req.isAsync&&typeof setTimeout!='undefined'&&(ctx=s.contexts[cfg.context||defContextName],ctx.requireWait=!0,setTimeout(function(){ctx.requireWait=!1,ctx.scriptCount||ctx.resume(),req.checkReadyState()},0))})()