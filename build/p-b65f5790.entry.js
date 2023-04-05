import{r as t,c as i,h as e,H as a,g as s}from"./p-ad9e43da.js";import{c as o,d as n,H as r}from"./p-e6239eb4.js";import{c as l,d as c,g as d}from"./p-2875b7ef.js";import{s as h,t as f}from"./p-b35bd07c.js";import{n as m,c as p,d as u}from"./p-3238f89d.js";import{c as b}from"./p-e6be3162.js";import{a as g,s as v,c as x}from"./p-04967691.js";import{c as y,s as z,d as k,u as w}from"./p-0164e884.js";import{u as j}from"./p-7b97aed3.js";import{t as H}from"./p-7cf0703a.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";import"./p-58421494.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const D={characterLimit:"character-limit",content:"content",container:"container",footer:"footer",resizeDisabled:"resize--disabled",resizeDisabledX:"resize--disabled-x",resizeDisabledY:"resize--disabled-y",characterOverLimit:"character--over-limit",readOnly:"readonly",textAreaInvalid:"text-area--invalid",footerSlotted:"footer--slotted",borderColor:"border--color",hide:"hide",blockSizeFull:"block-size--full",footerEndSlotOnly:"footer--end-only"};const C={footerStart:"footer-start",footerEnd:"footer-end"};const L=100;const _="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);color:var(--calcite-ui-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-ui-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-danger)}:host([resize=none]) textarea{resize:none}:host([resize=horizontal]) textarea{resize:horizontal}:host([resize=vertical]) textarea{resize:vertical}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale=s]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=s]) textarea,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale=m]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=m]) textarea,:host([scale=m]) .footer,:host([scale=m]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale=l]){font-size:var(--calcite-font-size-0)}:host([scale=l]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale=l]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale=l]) textarea,:host([scale=l]) .footer,:host([scale=l]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}.readonly{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host([disabled]) textarea,:host([disabled]) footer{opacity:0.5}.border--color{border-block-end-width:1px;border-color:var(--calcite-ui-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";const A=class{constructor(a){t(this,a);this.calciteTextAreaInput=i(this,"calciteTextAreaInput",7);this.calciteTextAreaChange=i(this,"calciteTextAreaChange",7);this.handleInput=t=>{this.value=t.target["value"];this.calciteTextAreaInput.emit()};this.handleChange=()=>{this.calciteTextAreaChange.emit()};this.contentSlotChangeHandler=()=>{if(!this.value){const t=this.el.childNodes;t.forEach((t=>{if(t.nodeName==="#text"){this.value=t.nodeValue.trim()}}))}};this.renderCharacterLimit=()=>{var t;return this.maxLength?e("span",{class:D.characterLimit},e("span",{class:{[D.characterOverLimit]:((t=this.value)===null||t===void 0?void 0:t.length)>this.maxLength}},this.getLocalizedCharacterLength()),"/",m.localize(this.maxLength.toString())):null};this.resizeObserver=b("resize",(async()=>{await x(this);const{textAreaHeight:t,textAreaWidth:i,elHeight:e,elWidth:a,footerHeight:s,footerWidth:o}=this.getHeightandWidthOfElements();if(o>0&&o!==i){this.footerEl.style.width=`${i}px`}if(a!==i||e!==t+(s||0)){this.setHeightAndWidthToAuto()}}));this.setHeightAndWidthToAuto=H((()=>{if(this.resize==="vertical"||this.resize==="both"){this.el.style.height="auto"}if(this.resize==="horizontal"||this.resize==="both"){this.el.style.width="auto"}}),L,{leading:false});this.setTextAreaEl=t=>{this.textAreaEl=t;this.resizeObserver.observe(t)};this.autofocus=false;this.columns=undefined;this.disabled=false;this.form=undefined;this.groupSeparator=false;this.label=undefined;this.maxLength=undefined;this.messages=undefined;this.name=undefined;this.numberingSystem=undefined;this.placeholder=undefined;this.readOnly=false;this.required=false;this.resize="both";this.rows=undefined;this.scale="m";this.value=undefined;this.wrap="soft";this.messageOverrides=undefined;this.defaultMessages=undefined;this.endSlotHasElements=undefined;this.startSlotHasElements=undefined;this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){l(this);o(this);p(this);y(this)}async componentWillLoad(){g(this);await z(this)}componentDidLoad(){v(this)}componentDidRender(){j(this);this.setTextAreaHeight()}disconnectedCallback(){var t;c(this);n(this);u(this);k(this);(t=this.resizeObserver)===null||t===void 0?void 0:t.disconnect()}render(){var t,i;const s=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return e(a,null,e("textarea",{"aria-invalid":f(((t=this.value)===null||t===void 0?void 0:t.length)>this.maxLength),"aria-label":d(this),autofocus:this.autofocus,class:{[D.readOnly]:this.readOnly,[D.textAreaInvalid]:((i=this.value)===null||i===void 0?void 0:i.length)>this.maxLength,[D.footerSlotted]:this.endSlotHasElements&&this.startSlotHasElements,[D.blockSizeFull]:!s,[D.borderColor]:!s},cols:this.columns,disabled:this.disabled,name:this.name,onChange:this.handleChange,onInput:this.handleInput,placeholder:this.placeholder,readonly:this.readOnly,required:this.required,rows:this.rows,value:this.value,wrap:this.wrap,ref:this.setTextAreaEl}),e("span",{class:{[D.content]:true}},e("slot",{onSlotchange:this.contentSlotChangeHandler})),e("footer",{class:{[D.footer]:true,[D.readOnly]:this.readOnly,[D.hide]:!s},ref:t=>this.footerEl=t},e("div",{class:{[D.container]:true,[D.footerEndSlotOnly]:!this.startSlotHasElements&&this.endSlotHasElements}},e("slot",{name:C.footerStart,onSlotchange:t=>this.startSlotHasElements=h(t)}),e("slot",{name:C.footerEnd,onSlotchange:t=>this.endSlotHasElements=h(t)})),this.renderCharacterLimit()),e(r,{component:this}))}async setFocus(){await x(this);this.textAreaEl.focus()}async selectText(){await x(this);this.textAreaEl.select()}effectiveLocaleChange(){w(this,this.effectiveLocale)}onFormReset(){this.value=this.defaultValue}onLabelClick(){this.setFocus()}getLocalizedCharacterLength(){m.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator};return m.localize(this.value?this.value.length.toString():"0")}syncHiddenFormInput(t){var i;t.setCustomValidity("");if(((i=this.value)===null||i===void 0?void 0:i.length)>this.maxLength){t.setCustomValidity(this.messages.tooLong)}}setTextAreaHeight(){const{textAreaHeight:t,elHeight:i,footerHeight:e}=this.getHeightandWidthOfElements();if(e>0&&t+e!=i){this.textAreaEl.style.height=`${i-e}px`}}getHeightandWidthOfElements(){var t;const{height:i,width:e}=this.textAreaEl.getBoundingClientRect();const{height:a,width:s}=this.el.getBoundingClientRect();const{height:o,width:n}=(t=this.footerEl)===null||t===void 0?void 0:t.getBoundingClientRect();return{textAreaHeight:i,textAreaWidth:e,elHeight:a,elWidth:s,footerHeight:o,footerWidth:n}}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};A.style=_;export{A as calcite_text_area};
//# sourceMappingURL=p-b65f5790.entry.js.map