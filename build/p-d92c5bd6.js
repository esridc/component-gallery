import{n as t}from"./p-b35bd07c.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const n="CALCITE-COMBOBOX-ITEM";const o="CALCITE-COMBOBOX-ITEM-GROUP";const c=`${n}, ${o}`
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */;function s(t){const n=t.parentElement?.closest(c);const o=n?.parentElement?.closest(c);return[n,o].filter((t=>t))}function e(t){return t.ancestors?.filter((t=>t.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function a(n){return t(n.querySelectorAll("calcite-combobox-item"))}function r(n){const o=t(n.querySelectorAll("calcite-combobox-item"));return o.filter((t=>t.selected)).length>0}function u(t){const n=document.evaluate("ancestor::calcite-combobox-item",t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return n.snapshotLength}export{c as C,a,n as b,o as c,s as d,u as e,e as g,r as h};
//# sourceMappingURL=p-d92c5bd6.js.map