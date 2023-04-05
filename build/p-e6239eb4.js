import{q as e,c as t}from"./p-b35bd07c.js";import{h as n}from"./p-ad9e43da.js";(function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(e){if(e){t(e,this);e.click()}else{e=document.createElement("input");e.type="submit";e.hidden=true;this.appendChild(e);e.click();this.removeChild(e)}};function t(e,t){e instanceof HTMLElement||n(TypeError,"parameter 1 is not of type 'HTMLElement'");e.type=="submit"||n(TypeError,"The specified element is not a submit button");e.form==t||n(DOMException,"The specified element is not owned by this form element","NotFoundError")}function n(e,t,n){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+t+".",n)}})(HTMLFormElement.prototype);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const o="hidden-form-input";function r(e){return"checked"in e}const s=new WeakMap;const i=new WeakSet;function u(e,n){const o=t(n.parentElement,"[form]");if(o){return true}const r="calciteInternalFormComponentRegister";let s=false;e.addEventListener(r,(e=>{s=e.composedPath().some((e=>i.has(e)));e.stopPropagation()}),{once:true});n.dispatchEvent(new CustomEvent(r,{bubbles:true,composed:true}));return s}function c(e){const{formEl:t}=e;if(!t){return false}t.requestSubmit();return true}function f(e){e.formEl?.reset()}function l(e){const{el:t,value:n}=e;const o=m(e);if(!o||u(o,t)){return}e.formEl=o;e.defaultValue=n;if(r(e)){e.defaultChecked=e.checked}const c=(e.onFormReset||a).bind(e);o.addEventListener("reset",c);s.set(e.el,c);i.add(t)}function m(n){const{el:o,form:r}=n;return r?e(o,{id:r}):t(o,"form")}function a(){if(r(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function p(e){const{el:t,formEl:n}=e;if(!n){return}const o=s.get(t);n.removeEventListener("reset",o);s.delete(t);e.formEl=null;i.delete(t)}function d(e,t){e.defaultValue=t}const h=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:true}))};const b=e=>e.removeEventListener("change",h);function E(e){const{el:t,formEl:n,name:r,value:s}=e;const{ownerDocument:i}=t;const u=t.querySelectorAll(`input[slot="${o}"]`);if(!n||!r){u.forEach((e=>{b(e);e.remove()}));return}const c=Array.isArray(s)?s:[s];const f=[];const l=new Set;u.forEach((t=>{const n=c.find((e=>e==t.value));if(n!=null){l.add(n);w(e,t,n)}else{f.push(t)}}));let m;c.forEach((t=>{if(l.has(t)){return}let n=f.pop();if(!n){n=i.createElement("input");n.slot=o}if(!m){m=i.createDocumentFragment()}m.append(n);n.addEventListener("change",h);w(e,n,t)}));if(m){t.append(m)}f.forEach((e=>{b(e);e.remove()}))}function w(e,t,n){const{defaultValue:o,disabled:s,form:i,name:u,required:c}=e;t.defaultValue=o;t.disabled=s;t.name=u;t.required=c;t.tabIndex=-1;if(i){t.setAttribute("form",i)}else{t.removeAttribute("form")}if(r(e)){t.checked=e.checked;t.defaultChecked=e.defaultChecked;t.value=e.checked?n||"on":""}else{t.value=n||""}e.syncHiddenFormInput?.(t)}const T=({component:e})=>{E(e);return n("slot",{name:o})};export{T as H,d as a,l as c,p as d,m as f,f as r,c as s};
//# sourceMappingURL=p-e6239eb4.js.map