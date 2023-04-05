import{r as i,c as t,h as e,F as n,g as a}from"./p-ad9e43da.js";import{h as o}from"./p-b35bd07c.js";import{c,d as s,a as r,H as l}from"./p-e6239eb4.js";import{u as d}from"./p-7b97aed3.js";import{c as h,d as p,g as m}from"./p-2875b7ef.js";import{a as u,s as f,c as b}from"./p-04967691.js";import{c as v}from"./p-e6be3162.js";import"./p-30b0f762.js";import"./p-5f83161a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const g={icon:"icon",iconContainer:"icon-container",select:"select"};const y="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){block-size:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){block-size:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;-webkit-appearance:none;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:inherit;color:var(--calcite-ui-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.select:hover{background-color:var(--calcite-ui-foreground-2)}select:disabled{border-color:var(--calcite-ui-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:transparent;color:var(--calcite-ui-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";function w(i){return i.tagName==="CALCITE-OPTION"}function x(i){return i.tagName==="CALCITE-OPTION-GROUP"}const z=class{constructor(e){i(this,e);this.calciteSelectChange=t(this,"calciteSelectChange",6);this.componentToNativeEl=new Map;this.mutationObserver=v("mutation",(()=>this.populateInternalSelect()));this.handleInternalSelectChange=()=>{const i=this.selectEl.selectedOptions[0];this.selectFromNativeOption(i);requestAnimationFrame((()=>this.emitChangeEvent()))};this.populateInternalSelect=()=>{const i=Array.from(this.el.children).filter((i=>i.tagName==="CALCITE-OPTION"||i.tagName==="CALCITE-OPTION-GROUP"));this.clearInternalSelect();i.forEach((i=>{var t;return(t=this.selectEl)===null||t===void 0?void 0:t.append(this.toNativeElement(i))}))};this.storeSelectRef=i=>{this.selectEl=i;this.populateInternalSelect();const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t)};this.emitChangeEvent=()=>{this.calciteSelectChange.emit()};this.disabled=false;this.form=undefined;this.label=undefined;this.name=undefined;this.required=false;this.scale="m";this.value=null;this.selectedOption=undefined;this.width="auto"}valueHandler(i){const t=this.el.querySelectorAll("calcite-option");t.forEach((t=>t.selected=t.value===i))}selectedOptionHandler(i){this.value=i===null||i===void 0?void 0:i.value}connectedCallback(){var i;const{el:t}=this;(i=this.mutationObserver)===null||i===void 0?void 0:i.observe(t,{subtree:true,childList:true});h(this);c(this)}disconnectedCallback(){var i;(i=this.mutationObserver)===null||i===void 0?void 0:i.disconnect();p(this);s(this)}componentWillLoad(){u(this)}componentDidLoad(){var i,t;f(this);r(this,(t=(i=this.selectedOption)===null||i===void 0?void 0:i.value)!==null&&t!==void 0?t:"")}componentDidRender(){d(this)}async setFocus(){await b(this);o(this.selectEl)}handleOptionOrGroupChange(i){i.stopPropagation();const t=i.target;const e=this.componentToNativeEl.get(t);if(!e){return}this.updateNativeElement(t,e);if(w(t)&&t.selected){this.deselectAllExcept(t);this.selectedOption=t}}onLabelClick(){this.setFocus()}updateNativeElement(i,t){t.disabled=i.disabled;t.label=i.label;if(w(i)){const e=t;e.selected=i.selected;e.value=i.value;e.innerText=i.label}}clearInternalSelect(){this.componentToNativeEl.forEach((i=>i.remove()));this.componentToNativeEl.clear()}selectFromNativeOption(i){if(!i){return}let t;this.componentToNativeEl.forEach(((e,n)=>{if(w(n)&&e===i){n.selected=true;t=n;this.deselectAllExcept(n)}}));if(t){this.selectedOption=t}}toNativeElement(i){if(w(i)){const t=document.createElement("option");this.updateNativeElement(i,t);this.componentToNativeEl.set(i,t);return t}if(x(i)){const t=document.createElement("optgroup");this.updateNativeElement(i,t);Array.from(i.children).forEach((e=>{const n=this.toNativeElement(e);t.append(n);this.componentToNativeEl.set(i,n)}));this.componentToNativeEl.set(i,t);return t}throw new Error("unsupported element child provided")}deselectAllExcept(i){this.el.querySelectorAll("calcite-option").forEach((t=>{if(t===i){return}t.selected=false}))}renderChevron(){return e("div",{class:g.iconContainer},e("calcite-icon",{class:g.icon,icon:"chevron-down",scale:this.scale==="l"?"m":"s"}))}render(){return e(n,null,e("select",{"aria-label":m(this),class:g.select,disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},e("slot",null)),this.renderChevron(),e(l,{component:this}))}get el(){return a(this)}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}};z.style=y;export{z as calcite_select};
//# sourceMappingURL=p-8ad7ae29.entry.js.map