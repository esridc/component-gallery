import{a as n}from"./p-ad9e43da.js";import{c as o}from"./p-457d22bf.js";import{g as s}from"./p-3238f89d.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const t={};const a={};async function r(o){const i=s(o);if(t[i]){return t[i]}if(!a[i]){a[i]=fetch(n(`./assets/date-picker/nls/${i}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${i}" not found or invalid, falling back to english`);return r("en")}))}const e=await a[i];t[i]=e;return e}function i(n){return n.map(((n,s)=>o(n,s===1)))}export{r as a,i as g};
//# sourceMappingURL=p-c28fedd5.js.map