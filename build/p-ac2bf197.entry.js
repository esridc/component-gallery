import{r as t,c as e,h as a,H as i,g as n}from"./p-ad9e43da.js";import{b as s}from"./p-b35bd07c.js";import{u as o}from"./p-7b97aed3.js";import{a as c,s as l,c as r}from"./p-04967691.js";import{c as d,d as h}from"./p-3238f89d.js";import{c as m,s as f,d as u,u as p}from"./p-0164e884.js";import{S as b}from"./p-ecc50ed7.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";import"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const g={backButton:"back-button"};const v={backLeft:"chevron-left",backRight:"chevron-right"};const y={headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"};const k="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}";const w=class{constructor(a){t(this,a);this.calciteFlowItemBack=e(this,"calciteFlowItemBack",6);this.calciteFlowItemScroll=e(this,"calciteFlowItemScroll",6);this.calciteFlowItemClose=e(this,"calciteFlowItemClose",6);this.handlePanelScroll=t=>{t.stopPropagation();this.calciteFlowItemScroll.emit()};this.handlePanelClose=t=>{t.stopPropagation();this.calciteFlowItemClose.emit()};this.backButtonClick=()=>{this.calciteFlowItemBack.emit()};this.setBackRef=t=>{this.backButtonEl=t};this.setContainerRef=t=>{this.containerEl=t};this.closable=false;this.closed=false;this.beforeBack=undefined;this.description=undefined;this.disabled=false;this.heading=undefined;this.headingLevel=undefined;this.loading=false;this.menuOpen=false;this.messageOverrides=undefined;this.messages=undefined;this.showBackButton=false;this.backButtonEl=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){d(this);m(this)}async componentWillLoad(){await f(this);c(this)}componentDidRender(){o(this)}disconnectedCallback(){h(this);u(this)}componentDidLoad(){l(this)}effectiveLocaleChange(){p(this,this.effectiveLocale)}async setFocus(){await r(this);const{backButtonEl:t,containerEl:e}=this;if(t){t.setFocus();return}e===null||e===void 0?void 0:e.setFocus()}async scrollContentTo(t){var e;await((e=this.containerEl)===null||e===void 0?void 0:e.scrollContentTo(t))}renderBackButton(){const{el:t}=this;const e=s(t)==="rtl";const{showBackButton:i,backButtonClick:n,messages:o}=this;const c=o.back;const l=e?v.backRight:v.backLeft;return i?a("calcite-action",{"aria-label":c,class:g.backButton,icon:l,key:"flow-back-button",onClick:n,scale:"s",slot:"header-actions-start",text:c,ref:this.setBackRef}):null}render(){const{closable:t,closed:e,description:n,disabled:s,heading:o,headingLevel:c,loading:l,menuOpen:r,messages:d,backButtonEl:h}=this;const m=d.back;return a(i,null,a("calcite-panel",{closable:t,closed:e,description:n,disabled:s,heading:o,headingLevel:c,loading:l,menuOpen:r,messageOverrides:d,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,ref:this.setContainerRef},this.renderBackButton(),a("slot",{name:y.headerActionsStart,slot:b.headerActionsStart}),a("slot",{name:y.headerActionsEnd,slot:b.headerActionsEnd}),a("slot",{name:y.headerContent,slot:b.headerContent}),a("slot",{name:y.headerMenuActions,slot:b.headerMenuActions}),a("slot",{name:y.fab,slot:b.fab}),a("slot",{name:y.footerActions,slot:b.footerActions}),a("slot",{name:y.footer,slot:b.footer}),a("slot",null)),h?a("calcite-tooltip",{label:m,overlayPositioning:"fixed",placement:"top",referenceElement:h},m):null)}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};w.style=k;export{w as calcite_flow_item};
//# sourceMappingURL=p-ac2bf197.entry.js.map