import{f as t}from"./p-ad9e43da.js";import{c as o}from"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const n=new Set;let s;const c={childList:true};function e(t){if(!s){s=o("mutation",i)}s.observe(t.el,c)}function f(t){n.delete(t.el);i(s.takeRecords());s.disconnect();for(const[t]of n.entries()){s.observe(t,c)}}function i(o){o.forEach((({target:o})=>{t(o)}))}export{e as c,f as d};
//# sourceMappingURL=p-57ca654b.js.map