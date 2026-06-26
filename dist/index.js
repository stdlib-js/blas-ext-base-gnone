"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=o(function(h,v){
function d(e,r,a,u){var n,i,t,s;for(n=r.data,i=r.accessors[0],t=u,s=0;s<e;s++){if(i(n,t))return!1;t+=a}return!0}v.exports=d
});var c=o(function(w,q){
var g=require('@stdlib/array-base-arraylike2object/dist'),p=f();function b(e,r,a,u){var n,i,t;if(e<=0)return!0;if(n=g(r),n.accessorProtocol)return p(e,n,a,u);for(i=u,t=0;t<e;t++){if(r[i])return!1;i+=a}return!0}q.exports=b
});var l=o(function(z,x){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=c();function m(e,r,a){var u=j(e,a);return k(e,r,a,u)}x.exports=m
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=l(),P=c();O(y,"ndarray",P);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
